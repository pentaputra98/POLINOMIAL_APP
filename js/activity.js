/* =========================================================================
   activity.js — Latihan Interaktif (8 widget) sesuai `interaction_schema`.

   Prinsip:
     * Data 100% dari blok ```json bertipe "activity" di berkas .md.
       Engine tidak pernah mengarang soal, jawaban, maupun pembahasan.
     * Semua interaksi berbasis KETUK (bukan seret) supaya andal di seluruh
       perangkat siswa — sejalan dengan alasan dibuatnya keypad aplikasi.
     * XP diberikan SEKALI per aktivitas (dijaga Gamify lewat sourceId).

   Widget: matching · categorize · ordering · cloze · truefalse ·
           error-hunt · horner-steps · slider
   Ekspor: window.Activity { mount, evaluate }
   ========================================================================= */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function icon(n) { return window.Icons ? Icons.svg(n) : ""; }
  /* Penyajian adaptif: rumus lewat KaTeX, kalimat sebagai teks biasa. */
  function smart(s) {
    var t = String(s == null ? "" : s);
    if (!t.trim()) return "";
    // esc() tetap dijalankan meski ada "$" — lihat catatan pada js/quiz.js
    if (t.indexOf("$") >= 0) return esc(t);
    if (!/[A-Za-z]{3,}/.test(t)) return window.MR ? MR.M(t, false) : esc(t);
    return esc(t);
  }
  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
  }
  function norm(s) {
    return window.Quiz ? Quiz.normalize(s) : String(s).toLowerCase().replace(/\s+/g, "");
  }
  function same(a, b) { return window.Quiz ? Quiz.compare(a, b) : norm(a) === norm(b); }

  var WIDGET_LABEL = {
    guided: "Latihan Terbimbing",
    matching: "Menjodohkan", categorize: "Mengelompokkan", ordering: "Mengurutkan",
    cloze: "Melengkapi", truefalse: "Benar atau Salah", "error-hunt": "Temukan Kekeliruan",
    "horner-steps": "Skema Horner", slider: "Eksplorasi Nilai"
  };

  /* ------------------------------------------------------------------ *
   * Kerangka umum
   * ------------------------------------------------------------------ */
  function frame(d, bodyHtml, opts) {
    opts = opts || {};
    var xp = (d.reward && d.reward.xp) || 0;
    var sudah = window.Gamify && Gamify.isDone("act:" + d.id);
    return '<div class="act-head">' +
        '<span class="act-kind">' + icon(opts.icon || "puzzle") +
          "<span>Latihan Interaktif · " + esc(WIDGET_LABEL[d.widget] || d.widget) + "</span></span>" +
        (xp ? '<span class="act-xp' + (sudah ? " is-done" : "") + '">' + icon(sudah ? "circle-check" : "zap") +
          (sudah ? "Selesai" : "+" + xp + " XP") + "</span>" : "") +
      "</div>" +
      (d.prompt ? '<p class="act-prompt">' + smart(d.prompt) + "</p>" : "") +
      '<div class="act-body">' + bodyHtml + "</div>" +
      '<div class="act-actions">' +
        '<button type="button" class="btn btn-primary act-check">' + icon("check") + " Periksa</button>" +
        '<button type="button" class="btn act-reset">' + icon("rotate-ccw") + " Ulangi</button>" +
      "</div>" +
      '<div class="act-feedback" hidden></div>';
  }

  /* ------------------------------------------------------------------ *
   * 1) MATCHING — ketuk kiri lalu ketuk pasangannya di kanan
   * ------------------------------------------------------------------ */
  function buildMatching(d) {
    var kanan = shuffle(d.pairs.map(function (p, i) { return { t: p[1], i: i }; }));
    return frame(d,
      '<div class="mt-grid">' +
        '<div class="mt-col">' + d.pairs.map(function (p, i) {
          return '<button type="button" class="mt-item mt-left" data-i="' + i + '">' +
            '<span class="mt-tag"></span><span class="mt-txt">' + smart(p[0]) + "</span></button>";
        }).join("") + "</div>" +
        '<div class="mt-col">' + kanan.map(function (r) {
          return '<button type="button" class="mt-item mt-right" data-i="' + r.i + '">' +
            '<span class="mt-tag"></span><span class="mt-txt">' + smart(r.t) + "</span></button>";
        }).join("") + "</div>" +
      "</div>", { icon: "link" });
  }
  function wireMatching(root, d) {
    var sel = null, pasangan = {};   // indeks kiri -> indeks kanan
    function repaint() {
      root.querySelectorAll(".mt-item").forEach(function (b) {
        b.classList.remove("is-sel"); b.querySelector(".mt-tag").textContent = "";
      });
      if (sel) sel.classList.add("is-sel");
      var n = 0;
      Object.keys(pasangan).forEach(function (L) {
        n++;
        var l = root.querySelector('.mt-left[data-i="' + L + '"]');
        var r = root.querySelector('.mt-right[data-i="' + pasangan[L] + '"]');
        if (l) { l.classList.add("is-paired"); l.querySelector(".mt-tag").textContent = n; }
        if (r) { r.classList.add("is-paired"); r.querySelector(".mt-tag").textContent = n; }
      });
    }
    root.addEventListener("click", function (e) {
      var b = e.target.closest(".mt-item");
      if (!b || b.disabled) return;
      var isL = b.classList.contains("mt-left");
      var idx = b.dataset.i;
      if (isL) {
        if (pasangan[idx] != null) { delete pasangan[idx]; b.classList.remove("is-paired"); }
        sel = (sel === b) ? null : b;
      } else if (sel) {
        // lepaskan kanan ini bila sudah dipakai
        Object.keys(pasangan).forEach(function (L) { if (pasangan[L] === idx) delete pasangan[L]; });
        pasangan[sel.dataset.i] = idx;
        sel = null;
      }
      repaint();
    });
    return {
      jawab: function () { return pasangan; },
      nilai: function () {
        var benar = 0, total = d.pairs.length;
        d.pairs.forEach(function (_, i) { if (pasangan[i] === String(i)) benar++; });
        root.querySelectorAll(".mt-left").forEach(function (l) {
          var i = l.dataset.i, ok = pasangan[i] === String(i);
          l.classList.toggle("is-ok", ok); l.classList.toggle("is-no", !ok);
          var r = root.querySelector('.mt-right[data-i="' + pasangan[i] + '"]');
          if (r) { r.classList.toggle("is-ok", ok); r.classList.toggle("is-no", !ok); }
        });
        return { benar: benar, total: total, semua: benar === total };
      },
      reset: function () { pasangan = {}; sel = null;
        root.querySelectorAll(".mt-item").forEach(function (b) { b.classList.remove("is-ok", "is-no", "is-paired"); });
        repaint(); }
    };
  }

  /* ------------------------------------------------------------------ *
   * 2) CATEGORIZE — ketuk kartu lalu ketuk kotak kategori
   * ------------------------------------------------------------------ */
  function buildCategorize(d) {
    var items = shuffle(d.items.map(function (it, i) { return { t: it[0], c: it[1], i: i }; }));
    return frame(d,
      '<div class="cg-pool">' + items.map(function (x) {
        return '<button type="button" class="cg-chip" data-i="' + x.i + '">' + smart(x.t) + "</button>";
      }).join("") + "</div>" +
      '<div class="cg-bins">' + d.categories.map(function (c) {
        return '<div class="cg-bin" data-cat="' + esc(c) + '">' +
          '<div class="cg-bin-h">' + esc(c) + "</div><div class=\"cg-bin-body\"></div></div>";
      }).join("") + "</div>", { icon: "layers" });
  }
  function wireCategorize(root, d) {
    var sel = null;
    var pool = root.querySelector(".cg-pool");
    root.addEventListener("click", function (e) {
      var chip = e.target.closest(".cg-chip");
      if (chip && !chip.disabled) {
        if (sel === chip) { sel = null; }
        else if (chip.parentElement.classList.contains("cg-bin-body")) {
          pool.appendChild(chip); sel = null;      // kembalikan ke kumpulan
        } else { sel = chip; }
        root.querySelectorAll(".cg-chip").forEach(function (c) { c.classList.toggle("is-sel", c === sel); });
        return;
      }
      var bin = e.target.closest(".cg-bin");
      if (bin && sel) {
        bin.querySelector(".cg-bin-body").appendChild(sel);
        sel.classList.remove("is-sel"); sel = null;
      }
    });
    return {
      nilai: function () {
        var benar = 0;
        root.querySelectorAll(".cg-chip").forEach(function (chip) {
          var body = chip.closest(".cg-bin-body");
          var kat = body ? body.parentElement.dataset.cat : null;
          var seharusnya = d.items[+chip.dataset.i][1];
          var ok = kat === seharusnya;
          chip.classList.toggle("is-ok", ok);
          chip.classList.toggle("is-no", !ok);
          if (ok) benar++;
        });
        return { benar: benar, total: d.items.length, semua: benar === d.items.length };
      },
      reset: function () {
        root.querySelectorAll(".cg-chip").forEach(function (c) {
          c.classList.remove("is-ok", "is-no", "is-sel"); pool.appendChild(c);
        });
        sel = null;
      }
    };
  }

  /* ------------------------------------------------------------------ *
   * 3) ORDERING — tombol naik/turun (ramah sentuh, tanpa seret)
   * ------------------------------------------------------------------ */
  function buildOrdering(d) {
    // engine mengacak tampilan; urutan benar ada di answer_order
    var urut = shuffle(d.options.map(function (o, i) { return i; }));
    return frame(d,
      '<ol class="od-list">' + urut.map(function (i) {
        return '<li class="od-item" data-i="' + i + '">' +
          '<span class="od-txt">' + smart(d.options[i]) + "</span>" +
          '<span class="od-btns">' +
            '<button type="button" class="od-up" aria-label="Naikkan">' + icon("chevron-up") + "</button>" +
            '<button type="button" class="od-down" aria-label="Turunkan">' + icon("chevron-down") + "</button>" +
          "</span></li>";
      }).join("") + "</ol>", { icon: "list-checks" });
  }
  function wireOrdering(root, d) {
    var list = root.querySelector(".od-list");
    root.addEventListener("click", function (e) {
      var li = e.target.closest(".od-item"); if (!li) return;
      if (e.target.closest(".od-up") && li.previousElementSibling) {
        list.insertBefore(li, li.previousElementSibling);
      } else if (e.target.closest(".od-down") && li.nextElementSibling) {
        list.insertBefore(li.nextElementSibling, li);
      }
    });
    return {
      nilai: function () {
        var kini = [].slice.call(list.children).map(function (li) { return +li.dataset.i; });
        var benar = 0;
        kini.forEach(function (v, pos) {
          var ok = v === d.answer_order[pos];
          list.children[pos].classList.toggle("is-ok", ok);
          list.children[pos].classList.toggle("is-no", !ok);
          if (ok) benar++;
        });
        return { benar: benar, total: d.answer_order.length, semua: benar === d.answer_order.length };
      },
      reset: function () {
        [].slice.call(list.children).forEach(function (li) { li.classList.remove("is-ok", "is-no"); });
        shuffle([].slice.call(list.children)).forEach(function (li) { list.appendChild(li); });
      }
    };
  }

  /* ------------------------------------------------------------------ *
   * 4) CLOZE — isian di tengah kalimat (memakai keypad aplikasi)
   * ------------------------------------------------------------------ */
  function buildCloze(d) {
    var html = smart(d.template);
    d.answers.forEach(function (_, i) {
      html = html.replace(new RegExp("\\{\\{" + i + "\\}\\}", "g"),
        '<input class="cz-input q-input" type="text" data-i="' + i + '" aria-label="Isian ' + (i + 1) + '" />');
    });
    return frame(d, '<div class="cz-body">' + html + "</div>", { icon: "square-pen" });
  }
  function wireCloze(root, d) {
    root.querySelectorAll(".cz-input").forEach(function (inp) {
      if (window.Keypad) Keypad.attach(inp);
    });
    return {
      nilai: function () {
        var benar = 0;
        root.querySelectorAll(".cz-input").forEach(function (inp) {
          var ok = same(inp.value, d.answers[+inp.dataset.i]);
          inp.classList.toggle("is-ok", ok); inp.classList.toggle("is-no", !ok);
          if (ok) benar++;
        });
        return { benar: benar, total: d.answers.length, semua: benar === d.answers.length };
      },
      reset: function () {
        root.querySelectorAll(".cz-input").forEach(function (i) {
          i.value = ""; i.disabled = false; i.classList.remove("is-ok", "is-no");
        });
      },
      kunci: function () { return d.answers.join(" · "); }
    };
  }

  /* ------------------------------------------------------------------ *
   * 5) TRUEFALSE — Benar/Salah per pernyataan + alasan
   * ------------------------------------------------------------------ */
  function buildTrueFalse(d) {
    return frame(d,
      '<ul class="tf-list">' + d.statements.map(function (s, i) {
        return '<li class="tf-item" data-i="' + i + '">' +
          '<div class="tf-s">' + smart(s.s) + "</div>" +
          '<div class="tf-btns">' +
            '<button type="button" class="tf-btn" data-v="1">' + icon("check") + " Benar</button>" +
            '<button type="button" class="tf-btn" data-v="0">' + icon("x") + " Salah</button>" +
          "</div>" +
          '<div class="tf-why" hidden></div></li>';
      }).join("") + "</ul>", { icon: "circle-check" });
  }
  function wireTrueFalse(root, d) {
    root.addEventListener("click", function (e) {
      var b = e.target.closest(".tf-btn"); if (!b || b.disabled) return;
      var li = b.closest(".tf-item");
      li.querySelectorAll(".tf-btn").forEach(function (x) { x.classList.toggle("is-sel", x === b); });
    });
    return {
      nilai: function () {
        var benar = 0;
        root.querySelectorAll(".tf-item").forEach(function (li) {
          var s = d.statements[+li.dataset.i];
          var pilih = li.querySelector(".tf-btn.is-sel");
          var ok = pilih && (pilih.dataset.v === "1") === !!s.a;
          li.classList.toggle("is-ok", !!ok); li.classList.toggle("is-no", !ok);
          var why = li.querySelector(".tf-why");
          why.hidden = false;
          why.innerHTML = '<b>' + (s.a ? "Benar" : "Salah") + ".</b> " + smart(s.why);
          if (window.MR) MR.render(why);
          if (ok) benar++;
        });
        return { benar: benar, total: d.statements.length, semua: benar === d.statements.length };
      },
      reset: function () {
        root.querySelectorAll(".tf-item").forEach(function (li) {
          li.classList.remove("is-ok", "is-no");
          li.querySelectorAll(".tf-btn").forEach(function (b) { b.classList.remove("is-sel"); b.disabled = false; });
          var w = li.querySelector(".tf-why"); w.hidden = true; w.innerHTML = "";
        });
      }
    };
  }

  /* ------------------------------------------------------------------ *
   * 6) ERROR-HUNT — pilih langkah yang keliru
   * ------------------------------------------------------------------ */
  function buildErrorHunt(d) {
    return frame(d,
      '<ol class="eh-list">' + d.steps.map(function (s, i) {
        return '<li><button type="button" class="eh-step" data-i="' + i + '">' +
          '<span class="eh-no">' + (i + 1) + "</span>" +
          '<span class="eh-txt">' + smart(s) + "</span></button></li>";
      }).join("") + "</ol>", { icon: "triangle-alert" });
  }
  function wireErrorHunt(root, d) {
    root.addEventListener("click", function (e) {
      var b = e.target.closest(".eh-step"); if (!b || b.disabled) return;
      root.querySelectorAll(".eh-step").forEach(function (x) { x.classList.toggle("is-sel", x === b); });
    });
    return {
      nilai: function () {
        var pilih = root.querySelector(".eh-step.is-sel");
        var ok = pilih && +pilih.dataset.i === d.wrong_index;
        root.querySelectorAll(".eh-step").forEach(function (b) {
          var isKunci = +b.dataset.i === d.wrong_index;
          b.classList.toggle("is-ok", isKunci);
          b.classList.toggle("is-no", b.classList.contains("is-sel") && !isKunci);
        });
        return { benar: ok ? 1 : 0, total: 1, semua: !!ok };
      },
      reset: function () {
        root.querySelectorAll(".eh-step").forEach(function (b) {
          b.classList.remove("is-ok", "is-no", "is-sel"); b.disabled = false;
        });
      },
      kunci: function () { return "Langkah " + (d.wrong_index + 1) + ". " + (d.why || ""); }
    };
  }

  /* ------------------------------------------------------------------ *
   * 7) HORNER-STEPS — tabel Horner divalidasi sel demi sel
   *    Irama: turun → kali → jumlah
   * ------------------------------------------------------------------ */
  function hornerRows(d) {
    var hasil = (d.expected_quotient || []).concat([d.expected_remainder]);   // baris bawah
    var kali = [null];                                                        // baris tengah
    for (var i = 1; i < d.poly.length; i++) kali.push(d.k * hasil[i - 1]);
    return { hasil: hasil, kali: kali };
  }
  function buildHorner(d) {
    var n = d.poly.length;
    var head = d.poly.map(function (c) { return "<td class=\"hs-koef\">" + c + "</td>"; }).join("");
    var mid = "", bot = "";
    for (var i = 0; i < n; i++) {
      mid += i === 0 ? '<td class="hs-empty"></td>'
        : '<td><input class="hs-in q-input" type="text" data-row="k" data-i="' + i + '" aria-label="Hasil kali kolom ' + (i + 1) + '" /></td>';
      bot += '<td class="' + (i === n - 1 ? "hs-sisa" : "") + '">' +
        '<input class="hs-in q-input" type="text" data-row="h" data-i="' + i + '" aria-label="' +
        (i === n - 1 ? "Sisa" : "Hasil bagi kolom " + (i + 1)) + '" /></td>';
    }
    return frame(d,
      '<div class="hs-wrap"><table class="hs-tbl"><tbody>' +
        '<tr><th class="hs-k">k = ' + d.k + "</th>" + head + "</tr>" +
        '<tr><th>×</th>' + mid + "</tr>" +
        '<tr class="hs-res"><th>+</th>' + bot + "</tr>" +
      "</tbody></table></div>" +
      '<p class="act-tip">' + icon("info") +
        " Irama Horner: <b>turun</b> (salin koefisien pertama) → <b>kali</b> dengan k → <b>jumlah</b> dengan koefisien di atasnya. Kotak terakhir adalah <b>sisa</b>.</p>",
      { icon: "chart-line" });
  }
  function wireHorner(root, d) {
    var exp = hornerRows(d);
    root.querySelectorAll(".hs-in").forEach(function (inp) { if (window.Keypad) Keypad.attach(inp); });
    return {
      nilai: function () {
        var benar = 0, total = 0;
        root.querySelectorAll(".hs-in").forEach(function (inp) {
          var i = +inp.dataset.i;
          var target = inp.dataset.row === "k" ? exp.kali[i] : exp.hasil[i];
          total++;
          var ok = same(inp.value, String(target));
          inp.classList.toggle("is-ok", ok); inp.classList.toggle("is-no", !ok);
          if (ok) benar++;
        });
        return { benar: benar, total: total, semua: benar === total };
      },
      reset: function () {
        root.querySelectorAll(".hs-in").forEach(function (i) {
          i.value = ""; i.disabled = false; i.classList.remove("is-ok", "is-no");
        });
      },
      kunci: function () {
        return "Hasil bagi: " + (d.expected_quotient || []).join(", ") + " · Sisa: " + d.expected_remainder;
      }
    };
  }

  /* ------------------------------------------------------------------ *
   * 8) SLIDER — geser x, hitung f(x) langsung + grafik
   * ------------------------------------------------------------------ */
  function evalPoly(poly, x) {                 // skema Horner
    return poly.reduce(function (acc, c) { return acc * x + c; }, 0);
  }
  function fmt(v) {
    var r = Math.round(v * 1000) / 1000;
    return String(r).replace(".", ",");
  }
  function polyTex(poly) {
    var n = poly.length - 1, out = "";
    poly.forEach(function (c, i) {
      var p = n - i; if (c === 0) return;
      var sign = c < 0 ? "-" : (out ? "+" : "");
      var a = Math.abs(c);
      var koef = (a === 1 && p > 0) ? "" : a;
      out += sign + koef + (p > 1 ? "x^{" + p + "}" : p === 1 ? "x" : "");
    });
    return out || "0";
  }
  function buildSlider(d) {
    var mid = (d.x_min + d.x_max) / 2;
    return frame(d,
      '<div class="sl-wrap">' +
        '<div class="sl-fx"><span class="sl-lab">f(x) =</span> <span class="sl-val" id="slv"></span></div>' +
        '<div class="sl-row">' +
          '<span class="sl-x">x = <b class="sl-xval">' + fmt(mid) + "</b></span>" +
          '<input class="sl-range" type="range" min="' + d.x_min + '" max="' + d.x_max +
            '" step="' + (d.step || 0.5) + '" value="' + mid + '" aria-label="Nilai x" />' +
        "</div>" +
        (d.show_graph ? '<div class="sl-graph"><svg viewBox="0 0 320 160" preserveAspectRatio="none" aria-hidden="true"></svg></div>' : "") +
        '<div class="sl-check"></div>' +
      "</div>", { icon: "trending-up" });
  }
  function wireSlider(root, d) {
    var range = root.querySelector(".sl-range");
    var xv = root.querySelector(".sl-xval");
    var out = root.querySelector(".sl-val");
    var box = root.querySelector(".sl-check");
    var svg = root.querySelector(".sl-graph svg");
    var dikunjungi = {};

    // gambar kurva sekali
    if (svg) {
      var N = 120, pts = [], ys = [];
      for (var i = 0; i <= N; i++) {
        var x = d.x_min + (d.x_max - d.x_min) * i / N;
        ys.push(evalPoly(d.poly, x));
      }
      var lo = Math.min.apply(null, ys), hi = Math.max.apply(null, ys);
      if (hi === lo) { hi = lo + 1; }
      for (var j = 0; j <= N; j++) {
        var px = 10 + 300 * j / N;
        var py = 150 - 140 * (ys[j] - lo) / (hi - lo);
        pts.push(px.toFixed(1) + "," + py.toFixed(1));
      }
      var zeroY = 150 - 140 * (0 - lo) / (hi - lo);
      svg.innerHTML =
        (zeroY >= 0 && zeroY <= 160 ? '<line x1="10" y1="' + zeroY.toFixed(1) + '" x2="310" y2="' +
          zeroY.toFixed(1) + '" class="sl-axis"/>' : "") +
        '<polyline class="sl-curve" points="' + pts.join(" ") + '"/>' +
        '<circle class="sl-dot" r="5" cx="10" cy="0"/>';
      svg._meta = { lo: lo, hi: hi, N: N };
    }

    function tampil() {
      var x = parseFloat(range.value);
      var y = evalPoly(d.poly, x);
      xv.textContent = fmt(x);
      out.innerHTML = window.MR ? MR.M(polyTex(d.poly) + " \\;\\Rightarrow\\; " + fmt(y), false) : fmt(y);
      if (window.MR) MR.render(out);
      if (svg && svg._meta) {
        var m = svg._meta;
        var t = (x - d.x_min) / (d.x_max - d.x_min);
        var dot = svg.querySelector(".sl-dot");
        dot.setAttribute("cx", (10 + 300 * t).toFixed(1));
        dot.setAttribute("cy", (150 - 140 * (y - m.lo) / (m.hi - m.lo)).toFixed(1));
      }
      // titik periksa dari konten
      var cp = (d.checkpoints || []).filter(function (c) { return Math.abs(c.x - x) < 1e-9; })[0];
      if (cp) {
        dikunjungi[cp.x] = true;
        box.hidden = false;
        box.className = "sl-check is-hit";
        box.innerHTML = icon("lightbulb") + "<span><b>x = " + fmt(cp.x) + "</b> → f(x) = " +
          fmt(cp.fx) + ". " + esc(cp.note || "") + "</span>";
        if (window.Icons) Icons.hydrate(box);
      } else {
        box.className = "sl-check";
        box.innerHTML = "";
      }
    }
    range.addEventListener("input", tampil);
    tampil();

    return {
      nilai: function () {
        var perlu = (d.checkpoints || []).length;
        var sudah = Object.keys(dikunjungi).length;
        return { benar: sudah, total: perlu || 1, semua: perlu ? sudah >= perlu : true };
      },
      reset: function () { dikunjungi = {}; range.value = (d.x_min + d.x_max) / 2; tampil(); },
      kunci: function () {
        return (d.checkpoints || []).map(function (c) {
          return "f(" + fmt(c.x) + ") = " + fmt(c.fx);
        }).join(" · ");
      },
      pesanBelum: "Geser slider hingga menyentuh semua titik periksa."
    };
  }

  /* ------------------------------------------------------------------ *
   * GUIDED — Latihan Terbimbing (widget terbanyak: 35 pemakaian)
   *
   * Berbeda dari widget lain: TIDAK ada tombol "Periksa" global. Soal dipecah
   * menjadi beberapa langkah; peserta memilih jawaban satu langkah, sistem
   * menjelaskan MENGAPA langkah itu benar (`feedback`), baru lanjut. Salah
   * berarti mencoba lagi — bukan gagal — sesuai peran "guru yang menuntun".
   * Ditutup oleh `conclusion`.
   *
   * Karena alurnya berbeda, guided memakai jalur mount tersendiri.
   * ------------------------------------------------------------------ */
  function buildGuided(d) {
    var xp = (d.reward && d.reward.xp) || 0;
    var sudah = window.Gamify && Gamify.isDone("act:" + d.id);
    var n = (d.steps || []).length;
    return '<div class="act-head">' +
        '<span class="act-kind">' + icon("graduation-cap") +
          "<span>Latihan Terbimbing</span></span>" +
        (xp ? '<span class="act-xp' + (sudah ? " is-done" : "") + '">' +
          icon(sudah ? "circle-check" : "zap") + (sudah ? "Selesai" : "+" + xp + " XP") + "</span>" : "") +
      "</div>" +
      (d.title ? '<p class="g-title">' + smart(d.title) + "</p>" : "") +
      (d.prompt ? '<p class="act-prompt">' + smart(d.prompt) + "</p>" : "") +
      '<div class="g-track" aria-hidden="true">' +
        Array.apply(null, Array(n)).map(function (_, i) {
          return '<span class="g-dot" data-dot="' + i + '"></span>';
        }).join("") +
      "</div>" +
      '<div class="g-steps"></div>' +
      '<div class="g-done" hidden></div>';
  }

  function mountGuided(slot, d) {
    var steps = d.steps || [];
    var host = slot.querySelector(".g-steps");
    var done = slot.querySelector(".g-done");
    var cur = 0;

    function tandai(i, kelas) {
      var dot = slot.querySelector('.g-dot[data-dot="' + i + '"]');
      if (dot) dot.className = "g-dot " + kelas;
    }

    function tampilkan(i) {
      var st = steps[i];
      if (!st) return selesai();
      var wrap = document.createElement("div");
      wrap.className = "g-step";
      wrap.innerHTML =
        '<p class="g-ask">' + smart(st.ask) + "</p>" +
        '<div class="g-opts" role="group" aria-label="Pilihan jawaban langkah ' + (i + 1) + '">' +
          shuffle(st.options || []).map(function (o) {
            /* esc() sudah meng-escape kutip ganda, jadi aman sebagai atribut */
            return '<button type="button" class="g-opt" data-val="' + esc(o) + '">' + smart(o) + "</button>";
          }).join("") +
        "</div>" +
        '<div class="g-fb" hidden></div>';
      host.appendChild(wrap);
      if (window.MR) MR.render(wrap);
      if (window.Icons) Icons.hydrate(wrap);
      tandai(i, "is-now");

      wrap.querySelector(".g-opts").addEventListener("click", function (e) {
        var b = e.target.closest(".g-opt");
        if (!b || wrap.dataset.beres) return;
        var benar = same(b.dataset.val, st.answer);
        if (!benar) {
          /* Salah = kesempatan mencoba lagi, dengan petunjuk. Pilihan yang
             sudah dicoba dinonaktifkan agar peserta menyempitkan pilihan,
             bukan menebak berulang. */
          b.classList.add("is-no");
          b.disabled = true;
          var fbn = wrap.querySelector(".g-fb");
          fbn.hidden = false;
          fbn.className = "g-fb is-no";
          fbn.innerHTML = icon("circle-x") + " Belum tepat. Cermati kembali langkah ini, lalu pilih yang lain.";
          if (window.Icons) Icons.hydrate(fbn);
          if (window.SFX) SFX.play("pop");
          return;
        }
        wrap.dataset.beres = "1";
        b.classList.add("is-ok");
        wrap.querySelectorAll(".g-opt").forEach(function (x) { x.disabled = true; });
        tandai(i, "is-ok");
        var fb = wrap.querySelector(".g-fb");
        fb.hidden = false;
        fb.className = "g-fb is-ok";
        fb.innerHTML = '<span class="g-fb-ico">' + icon("circle-check") + "</span>" +
          "<span>" + smart(st.feedback || "Tepat.") + "</span>";
        if (window.MR) MR.render(fb);
        if (window.Icons) Icons.hydrate(fb);
        if (window.SFX) SFX.play("correct");

        var akhir = i + 1 >= steps.length;
        var next = document.createElement("button");
        next.type = "button";
        next.className = "btn btn-primary g-next";
        next.innerHTML = akhir ? icon("circle-check") + " Lihat kesimpulan"
                               : icon("arrow-right") + " Langkah berikutnya";
        wrap.appendChild(next);
        if (window.Icons) Icons.hydrate(next);
        next.addEventListener("click", function () {
          next.remove();
          cur = i + 1;
          tampilkan(cur);
          var b2 = host.lastElementChild;
          if (b2 && b2.scrollIntoView) b2.scrollIntoView({ block: "nearest" });
        });
      });
    }

    function selesai() {
      done.hidden = false;
      done.className = "g-done";
      done.innerHTML =
        '<div class="g-done-head">' + icon("graduation-cap") + "<b>Kesimpulan</b></div>" +
        (d.conclusion ? "<p>" + smart(d.conclusion) + "</p>" : "") +
        '<button type="button" class="btn g-again">' + icon("rotate-ccw") + " Ulangi latihan</button>";
      if (window.MR) MR.render(done);
      if (window.Icons) Icons.hydrate(done);

      if (window.Gamify && d.reward && d.reward.xp) {
        var got = Gamify.addXP(d.reward.xp, "act:" + d.id);
        if (got.gained) {
          var chip = slot.querySelector(".act-xp");
          if (chip) {
            chip.classList.add("is-done");
            chip.innerHTML = icon("circle-check") + "Selesai";
            if (window.Icons) Icons.hydrate(chip);
          }
          if (window.showToast) showToast(icon("zap") + " +" + got.gained + " XP" +
            (got.leveledUp ? " · Naik ke Level " + got.level + "!" : ""), "ok");
        }
      }
      done.querySelector(".g-again").addEventListener("click", function () {
        host.innerHTML = "";
        done.hidden = true;
        slot.querySelectorAll(".g-dot").forEach(function (x) { x.className = "g-dot"; });
        cur = 0;
        tampilkan(0);
      });
    }

    tampilkan(0);
  }

  /* ------------------------------------------------------------------ *
   * Pemasangan
   * ------------------------------------------------------------------ */
  var BUILD = {
    matching: buildMatching, categorize: buildCategorize, ordering: buildOrdering,
    cloze: buildCloze, truefalse: buildTrueFalse, "error-hunt": buildErrorHunt,
    "horner-steps": buildHorner, slider: buildSlider
  };
  var WIRE = {
    matching: wireMatching, categorize: wireCategorize, ordering: wireOrdering,
    cloze: wireCloze, truefalse: wireTrueFalse, "error-hunt": wireErrorHunt,
    "horner-steps": wireHorner, slider: wireSlider
  };

  function mount(slot, d) {
    if (!slot || !d || slot.dataset.mounted) return;

    /* guided memakai jalur tersendiri: alurnya bertahap, tanpa "Periksa" global */
    if (d.widget === "guided") {
      slot.dataset.mounted = "1";
      slot.hidden = false;
      slot.className = "activity-block w-guided";
      slot.innerHTML = buildGuided(d);
      if (window.MR) MR.render(slot);
      if (window.Icons) Icons.hydrate(slot);
      mountGuided(slot, d);
      return;
    }

    if (!BUILD[d.widget]) { slot.hidden = true; return; }
    slot.dataset.mounted = "1";
    slot.hidden = false;
    slot.className = "activity-block w-" + d.widget;
    slot.innerHTML = BUILD[d.widget](d);

    if (window.MR) MR.render(slot);
    if (window.Icons) Icons.hydrate(slot);

    var ctl = WIRE[d.widget](slot, d);
    var fb = slot.querySelector(".act-feedback");

    slot.querySelector(".act-check").addEventListener("click", function () {
      var r = ctl.nilai();
      fb.hidden = false;
      fb.className = "act-feedback " + (r.semua ? "is-ok" : "is-no");
      var kunci = ctl.kunci ? ctl.kunci() : null;
      fb.innerHTML =
        '<div class="act-fb-head">' + icon(r.semua ? "circle-check" : "circle-x") +
          "<b>" + (r.semua ? "Tepat sekali" : "Belum lengkap") + "</b>" +
          '<span class="act-count">' + r.benar + "/" + r.total + " benar</span></div>" +
        (!r.semua && ctl.pesanBelum ? "<p>" + esc(ctl.pesanBelum) + "</p>" : "") +
        (!r.semua && kunci ? '<p class="act-key"><b>Kunci:</b> ' + smart(kunci) + "</p>" : "") +
        (d.why && !r.semua ? '<p class="act-why">' + smart(d.why) + "</p>" : "");
      if (window.MR) MR.render(fb);
      if (window.Icons) Icons.hydrate(fb);

      if (r.semua && window.Gamify && d.reward && d.reward.xp) {
        var got = Gamify.addXP(d.reward.xp, "act:" + d.id);
        if (got.gained) {
          var chip = slot.querySelector(".act-xp");
          if (chip) { chip.classList.add("is-done"); chip.innerHTML = icon("circle-check") + "Selesai"; Icons.hydrate(chip); }
          if (window.showToast) showToast(icon("zap") + " +" + got.gained + " XP" +
            (got.leveledUp ? " · Naik ke Level " + got.level + "!" : ""), "ok");
        }
      }
      if (window.SFX) SFX.play(r.semua ? "correct" : "pop");
    });

    slot.querySelector(".act-reset").addEventListener("click", function () {
      ctl.reset(); fb.hidden = true; fb.innerHTML = "";
      slot.querySelectorAll(".act-check").forEach(function (b) { b.disabled = false; });
    });
  }

  window.Activity = { mount: mount, evalPoly: evalPoly };
})();
