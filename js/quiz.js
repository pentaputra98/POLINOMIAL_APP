/* =========================================================================
   quiz.js — Mesin kuis untuk seluruh set soal di konten (36 set / 295 item).

   Aturan penting:
     * Jawaban & pembahasan DITAMPILKAN APA ADANYA dari field `answer` /
       `explanation` pada blok JSON. Engine TIDAK PERNAH menghitung ulang.
     * Soal isian (`short`) memakai Keypad aplikasi, bukan keyboard perangkat.
     * Pencocokan bersifat toleran; bila tetap tidak cocok, jawaban resmi
       ditampilkan dan siswa menilai sendiri (self-assess). Skor tetap tercatat
       agar analitik per kompetensi tetap berjalan.

   Tipe soal: short | mc | multi | proof
   Ekspor: window.Quiz { mount, normalize, compare }
   ========================================================================= */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function icon(n) { return window.Icons ? Icons.svg(n) : ""; }
  function M(tex) { return window.MR ? MR.M(tex, false) : esc(tex); }

  /**
   * Field `answer` dan `explanation` di konten bercampur: ada yang murni
   * rumus ("x^2 + 5x + 6") dan ada yang berupa kalimat ("derajat 5,
   * koefisien -1"). Kalimat TIDAK boleh dipaksa lewat KaTeX karena akan
   * tampil miring dan rapat. Aturan penyajian:
   *   - memuat "$"            → biarkan MR menangani pembatasnya
   *   - tidak ada kata (>=3 huruf berurutan) → perlakukan sebagai rumus
   *   - selebihnya            → teks biasa, dengan penggalan rumus di dalam
   *                             tanda "$" tetap dirender bila ada
   */
  function smart(s) {
    var t = String(s == null ? "" : s);
    if (!t.trim()) return "";
    /* WAJIB tetap di-esc(). Dulu string ber-$ dikembalikan MENTAH, sehingga
       sebuah "<" di dalamnya (mis. opsi "$0<x<5$" pada Bab 06) dibaca peramban
       sebagai awal tag HTML dan menelan sisa kalimat — di layar hanya tersisa
       "$0". Meng-esc() TIDAK mengganggu KaTeX: entitas &lt; kembali menjadi
       karakter "<" di dalam simpul teks, dan MR.render membaca simpul teks
       itulah, bukan sumber HTML-nya. Tanda "$" sendiri tidak disentuh esc(). */
    if (t.indexOf("$") >= 0) return esc(t);         // MR.render menangani $…$
    if (!/[A-Za-z]{3,}/.test(t)) return M(t);       // murni rumus
    return esc(t);                                   // kalimat → teks biasa
  }

  /* ------------------------------------------------------------------ *
   * Normalisasi & pembandingan jawaban
   * ------------------------------------------------------------------ */
  /* Superskrip Unicode yang bisa muncul dari keypad → notasi "^n". */
  var SUP = { "²": "^2", "³": "^3", "⁰": "^0", "¹": "^1",
              "⁴": "^4", "⁵": "^5", "⁶": "^6", "⁷": "^7",
              "⁸": "^8", "⁹": "^9" };
  function unsup(t) {
    return String(t).replace(/[²³¹⁰⁴-⁹]/g, function (c) { return SUP[c] || c; });
  }

  function normalize(s) {
    return unsup(String(s == null ? "" : s))
      .toLowerCase()
      .replace(/\$/g, "")                    // sisa penanda math
      .replace(/[−–—]/g, "-") // minus/en-dash → hyphen
      .replace(/[×]/g, "*")
      .replace(/\\cdot|\\times/g, "*")
      .replace(/\\frac\s*\{([^}]*)\}\s*\{([^}]*)\}/g, "$1/$2")
      .replace(/\\sqrt\s*\{([^}]*)\}/g, "sqrt($1)")
      .replace(/\\[a-z]+/g, "")              // perintah LaTeX lain
      .replace(/[{}]/g, "")
      .replace(/\s+/g, "")                   // spasi tidak relevan
      .replace(/[.;]+$/, "")                 // titik/;  di akhir
      .replace(/≠/g, "!=").replace(/≥/g, ">=").replace(/≤/g, "<=");
  }

  function asNumber(s) {
    var t = normalize(s).replace(",", ".");
    if (!/^[-+]?\d+(\.\d+)?$/.test(t)) return null;
    return parseFloat(t);
  }

  /** Pecah "a=1, b=2" atau "40 & 60" menjadi himpunan bagian. */
  function parts(s) {
    return normalize(s).split(/[,;&]+/).filter(Boolean).sort();
  }

  /**
   * Bandingkan jawaban siswa dengan kunci.
   * Mengembalikan "benar" | "salah". Perbandingan dilakukan berlapis:
   * angka → teks ternormalisasi → himpunan bagian (urutan diabaikan).
   */
  function compare(user, key) {
    if (!String(user || "").trim()) return false;
    var a = normalize(user), b = normalize(key);
    if (a === b) return true;

    var na = asNumber(user), nb = asNumber(key);
    if (na !== null && nb !== null) return Math.abs(na - nb) < 1e-9;

    // pecahan sederhana: 1/2 vs 0,5
    var fa = a.match(/^(-?\d+)\/(\d+)$/), fb = b.match(/^(-?\d+)\/(\d+)$/);
    if (fa && nb !== null) return Math.abs(fa[1] / fa[2] - nb) < 1e-9;
    if (fb && na !== null) return Math.abs(fb[1] / fb[2] - na) < 1e-9;

    var pa = parts(user), pb = parts(key);
    if (pa.length > 1 && pa.length === pb.length && pa.join("|") === pb.join("|")) return true;

    return false;
  }

  /**
   * Apakah hasil pencocokan dapat dipastikan?
   * Bila KUNCI berupa bilangan murni (atau pecahan sederhana) dan jawaban
   * siswa juga demikian, "tidak cocok" berarti benar-benar salah — tidak perlu
   * penilaian mandiri. Penilaian mandiri hanya untuk kunci berbentuk kalimat
   * atau ekspresi yang penulisannya bisa beragam.
   */
  function decidable(user, key) {
    var simple = function (s) {
      var t = normalize(s);
      return /^[-+]?\d+(\.\d+)?$/.test(t.replace(",", ".")) || /^-?\d+\/\d+$/.test(t);
    };
    return simple(key) && simple(user);
  }

  /* ------------------------------------------------------------------ *
   * Jawaban BERBAGIAN BANYAK
   * Sebagian kunci memuat lebih dari satu nilai, mis. "koefisien -4,
   * pangkat 5" atau "a=3, b=2". Untuk kasus seperti ini disediakan satu
   * kotak isian PER BAGIAN beserta labelnya, sehingga siswa tidak perlu
   * menebak format penulisan. Bila polanya tidak dikenali namun jawaban
   * jelas terdiri dari beberapa bagian, ditampilkan petunjuk pemisah.
   * ------------------------------------------------------------------ */
  var RE_LABELED = /^([A-Za-z][A-Za-z .]{2,}?)\s+(-?[\d/]+)\s*,\s*([A-Za-z][A-Za-z .]{2,}?)\s+(-?[\d/]+)$/;
  var RE_VAR2 = /^([A-Za-z_]\w*)\s*=\s*([^,;]+?)\s*[,;]\s*([A-Za-z_]\w*)\s*=\s*([^,;]+?)$/;
  var RE_VAR3 = /^([A-Za-z_]\w*)\s*=\s*([^,;]+?)\s*[,;]\s*([A-Za-z_]\w*)\s*=\s*([^,;]+?)\s*[,;]\s*([A-Za-z_]\w*)\s*=\s*([^,;]+?)$/;

  function multiParts(answer) {
    var a = String(answer == null ? "" : answer).trim();
    var m;
    if ((m = RE_VAR3.exec(a))) {
      return [{ label: m[1], value: m[2].trim(), eq: true },
              { label: m[3], value: m[4].trim(), eq: true },
              { label: m[5], value: m[6].trim(), eq: true }];
    }
    if ((m = RE_VAR2.exec(a))) {
      return [{ label: m[1], value: m[2].trim(), eq: true },
              { label: m[3], value: m[4].trim(), eq: true }];
    }
    if ((m = RE_LABELED.exec(a))) {
      return [{ label: m[1].trim(), value: m[2].trim() },
              { label: m[3].trim(), value: m[4].trim() }];
    }
    return null;
  }

  /** Jumlah bagian pada kunci yang tak terpola (untuk petunjuk pemisah). */
  function partCount(answer) {
    var a = String(answer == null ? "" : answer);
    if (a.indexOf("$") >= 0) return 1;
    var n = a.split(/\s*[,;]\s*/).filter(function (x) { return x.trim(); }).length;
    return n;
  }

  /* ------------------------------------------------------------------ *
   * Render satu butir soal
   * ------------------------------------------------------------------ */
  function renderItem(it, idx, setId) {
    var h = '<li class="q-item" data-item="' + esc(it.id) + '" data-type="' + esc(it.type) + '">' +
      '<div class="q-head">' +
        '<span class="q-no">' + (idx + 1) + "</span>" +
        '<div class="q-text">' + smart(it.question) + "</div>" +
      "</div>" +
      (it.source ? '<span class="q-src">' + icon("trophy") + esc(it.source) + "</span>" : "");

    if (it.type === "mc" || it.type === "multi") {
      h += '<div class="q-opts' + (it.type === "multi" ? " is-multi" : "") + '">' +
        (it.options || []).map(function (o, k) {
          return '<button type="button" class="q-opt" data-val="' + esc(o) + '">' +
            '<span class="q-mark">' + String.fromCharCode(65 + k) + "</span>" +
            '<span class="q-optlabel">' + smart(o) + "</span></button>";
        }).join("") + "</div>" +
        (it.type === "multi" ? '<p class="q-hint">Pilih semua yang benar, lalu tekan Periksa.</p>' : "");
    } else if (it.type === "proof") {
      h += '<p class="q-hint">' + icon("info") +
        " Soal pembuktian — tidak dinilai otomatis. Kerjakan di kertas atau papan coretan, lalu bandingkan dengan pembahasan.</p>";
    } else {
      var mp = multiParts(it.answer);
      if (mp) {
        // satu kotak per bagian, masing-masing berlabel
        h += '<div class="q-fields">' + mp.map(function (f, k) {
          return '<label class="q-field">' +
            '<span class="q-field-lab">' + esc(f.label) + (f.eq ? " =" : "") + "</span>" +
            '<input class="q-input q-part" type="text" data-part="' + k +
            '" placeholder="…" aria-label="' + esc(f.label) + '" />' +
            "</label>";
        }).join("") + "</div>";
      } else {
        var n = partCount(it.answer);
        h += '<div class="q-input-row">' +
          '<input class="q-input" type="text" placeholder="Ketuk untuk menjawab…" aria-label="Jawaban" />' +
          "</div>" +
          (n > 1
            ? '<p class="q-hint">' + icon("info") + " Jawaban terdiri dari <b>" + n +
              " bagian</b> — pisahkan dengan tanda koma.</p>"
            : "");
      }
    }

    h += '<div class="q-actions">' +
      (it.type === "proof"
        ? '<button type="button" class="btn q-reveal">' + icon("book-open") + " Buka pembahasan</button>"
        : '<button type="button" class="btn btn-primary q-check">' + icon("check") + " Periksa</button>" +
          '<button type="button" class="btn q-reveal">' + icon("circle-question-mark") + " Lihat jawaban</button>") +
      "</div>" +
      '<div class="q-feedback" hidden></div>' +
      "</li>";
    return h;
  }

  /* ------------------------------------------------------------------ *
   * Pasang satu set kuis
   * ------------------------------------------------------------------ */
  var LEVEL_LABEL = { mudah: "Mudah", sedang: "Sedang", sulit: "Sulit", hots: "HOTS", tka: "Model TKA" };

  /**
   * Di berkas .md, daftar soal biasanya ditulis dua kali: sebagai teks biasa
   * lalu diulang di dalam blok JSON. Setelah kuis interaktif terpasang, daftar
   * teks itu mubazir dan membuat halaman jauh lebih panjang — jadi disembunyikan.
   * Yang disembunyikan hanya daftar bernomor / paragraf "Soal N." yang berada
   * TEPAT sebelum kuis; judul bagian dan kalimat pengantar tetap ditampilkan.
   */
  function hideDuplicateList(slot) {
    // batas aman cukup besar: penelusuran tetap berhenti pada elemen pertama
    // yang bukan daftar soal, jadi tidak akan "memakan" narasi materi.
    var n = slot.previousElementSibling, hop = 0;
    while (n && hop < 40) {
      hop++;
      var prev = n.previousElementSibling;
      var isList = n.tagName === "OL";
      var isSoal = n.tagName === "P" && /^\s*Soal\s*\d+\s*[.:]/i.test(n.textContent || "");
      if (isList || isSoal) {
        n.hidden = true;
        n.dataset.dupOf = slot.dataset.setId || "";
      } else if (n.tagName === "P" && !(n.textContent || "").trim()) {
        // paragraf kosong, lanjut menelusuri
      } else {
        break;
      }
      n = prev;
    }
  }

  function mount(slot, set, chapterId) {
    if (!slot || !set || slot.dataset.mounted) return;
    slot.dataset.mounted = "1";
    slot.hidden = false;
    hideDuplicateList(slot);

    var items = set.items || [];
    var saved = (window.Store && Store.quizGet(set.set_id)) || null;
    var lvl = set.level || "";

    slot.className = "quiz-block";
    slot.innerHTML =
      '<div class="q-bar">' +
        '<div class="q-title">' + icon("clipboard-pen") +
          "<span>Uji Kompetensi</span>" +
          (lvl ? '<span class="q-level lv-' + esc(lvl) + '">' + esc(LEVEL_LABEL[lvl] || lvl) + "</span>" : "") +
        "</div>" +
        '<div class="q-score" id="score-' + esc(set.set_id) + '">' +
          icon("target") + '<span class="q-score-num">0</span><span class="q-score-of">/' + items.length + "</span>" +
        "</div>" +
      "</div>" +
      '<ol class="q-list">' + items.map(function (it, i) { return renderItem(it, i, set.set_id); }).join("") + "</ol>" +
      '<div class="q-foot">' +
        '<button type="button" class="btn q-reset">' + icon("rotate-ccw") + " Ulangi set ini</button>" +
        '<div class="q-progress"><span class="q-prog-fill"></span></div>' +
      "</div>";

    if (window.MR) MR.render(slot);
    if (window.Icons) Icons.hydrate(slot);

    // pasang keypad pada tiap isian
    slot.querySelectorAll(".q-input, .q-part").forEach(function (inp) {
      if (window.Keypad) Keypad.attach(inp);
    });

    // pulihkan jawaban tersimpan
    if (saved && saved.answers) {
      Object.keys(saved.answers).forEach(function (id) {
        var li = slot.querySelector('[data-item="' + CSS.escape(id) + '"]');
        if (li) applyResult(li, saved.answers[id].val, saved.answers[id].ok, itemById(items, id), true);
      });
    }
    refreshScore(slot, set, items);

    slot.addEventListener("click", function (e) { onClick(e, slot, set, items, chapterId); });
  }

  function itemById(items, id) {
    for (var i = 0; i < items.length; i++) if (items[i].id === id) return items[i];
    return null;
  }

  /* ------------------------------------------------------------------ *
   * Interaksi
   * ------------------------------------------------------------------ */
  function onClick(e, slot, set, items, chapterId) {
    var li = e.target.closest(".q-item");

    if (e.target.closest(".q-reset")) {
      slot.querySelectorAll(".q-item").forEach(function (x) {
        x.classList.remove("is-ok", "is-no", "is-done");
        var fb = x.querySelector(".q-feedback"); fb.hidden = true; fb.innerHTML = "";
        x.querySelectorAll(".q-input, .q-part").forEach(function (inp) {
          inp.value = ""; inp.disabled = false; inp.classList.remove("is-ok", "is-no");
        });
        x.querySelectorAll(".q-opt").forEach(function (o) { o.classList.remove("is-sel", "is-ok", "is-no"); o.disabled = false; });
        x.querySelectorAll(".q-check,.q-reveal").forEach(function (b) { b.disabled = false; });
      });
      if (window.Store) Store.quizSave(set.set_id, { answers: {}, score: 0, answered: 0 });
      refreshScore(slot, set, items);
      return;
    }
    if (!li) return;
    var it = itemById(items, li.dataset.item);
    if (!it) return;

    // pilihan ganda / banyak jawaban
    var opt = e.target.closest(".q-opt");
    if (opt && !opt.disabled) {
      if (it.type === "multi") opt.classList.toggle("is-sel");
      else {
        li.querySelectorAll(".q-opt").forEach(function (o) { o.classList.toggle("is-sel", o === opt); });
      }
      return;
    }

    if (e.target.closest(".q-check")) { check(li, it, set, slot, items, chapterId); return; }
    if (e.target.closest(".q-reveal")) { reveal(li, it, set, slot, items, chapterId); return; }
    if (e.target.closest(".q-self")) {
      var ok = e.target.closest(".q-self").dataset.self === "1";
      saveAnswer(set, it, currentValue(li, it), ok, slot, items, chapterId);
      li.classList.toggle("is-ok", ok); li.classList.toggle("is-no", !ok);
      var badge = li.querySelector(".q-selfrow");
      if (badge) badge.innerHTML = '<span class="q-selfdone">' + icon(ok ? "circle-check" : "circle-x") +
        (ok ? " Ditandai benar" : " Ditandai belum tepat") + "</span>";
      if (window.Icons) Icons.hydrate(li);
      refreshScore(slot, set, items);
    }
  }

  function currentValue(li, it) {
    if (it.type === "mc") {
      var s = li.querySelector(".q-opt.is-sel");
      return s ? s.dataset.val : "";
    }
    if (it.type === "multi") {
      return [].slice.call(li.querySelectorAll(".q-opt.is-sel")).map(function (o) { return o.dataset.val; });
    }
    var partsEl = li.querySelectorAll(".q-part");
    if (partsEl.length) {
      // gabungkan bagian mengikuti bentuk kunci agar tersimpan utuh & terbaca
      var mp = multiParts(it.answer) || [];
      return [].slice.call(partsEl).map(function (inp, k) {
        var lab = mp[k] ? mp[k].label : "";
        return mp[k] && mp[k].eq ? lab + "=" + inp.value.trim() : (lab ? lab + " " : "") + inp.value.trim();
      }).join(", ");
    }
    var inp = li.querySelector(".q-input");
    return inp ? inp.value : "";
  }

  /** Nilai tiap bagian, dipakai untuk menandai kotak mana yang keliru. */
  function checkParts(li, it) {
    var mp = multiParts(it.answer);
    if (!mp) return null;
    var inputs = [].slice.call(li.querySelectorAll(".q-part"));
    if (inputs.length !== mp.length) return null;
    var hasil = inputs.map(function (inp, k) { return compare(inp.value, mp[k].value); });
    return { mp: mp, inputs: inputs, hasil: hasil, semua: hasil.every(Boolean),
             adaIsi: inputs.some(function (i) { return i.value.trim(); }) };
  }

  function check(li, it, set, slot, items, chapterId) {
    var val = currentValue(li, it), ok = false;

    if (it.type === "mc") {
      if (!val) { hint(li, "Pilih salah satu jawaban terlebih dahulu."); return; }
      ok = normalize(val) === normalize(it.answer);
    } else if (it.type === "multi") {
      if (!val.length) { hint(li, "Pilih minimal satu jawaban."); return; }
      var A = val.map(normalize).sort().join("|");
      var B = (Array.isArray(it.answer) ? it.answer : [it.answer]).map(normalize).sort().join("|");
      ok = A === B;
    } else {
      // jawaban berbagian banyak: nilai tiap kotak secara terpisah
      var pc = checkParts(li, it);
      if (pc) {
        if (!pc.adaIsi) { hint(li, "Isi semua kotak jawaban terlebih dahulu."); return; }
        pc.inputs.forEach(function (inp, k) {
          inp.classList.toggle("is-ok", pc.hasil[k]);
          inp.classList.toggle("is-no", !pc.hasil[k]);
        });
        applyResult(li, val, pc.semua, it, false);
        saveAnswer(set, it, val, pc.semua, slot, items, chapterId);
        refreshScore(slot, set, items);
        return;
      }
      if (!String(val).trim()) { hint(li, "Isi jawaban terlebih dahulu."); return; }
      ok = compare(val, it.answer);
      if (!ok && !decidable(val, it.answer)) {
        // Kunci berupa kalimat/bentuk yang sulit dicocokkan otomatis →
        // tampilkan kunci resmi dan biarkan siswa menilai jawabannya sendiri.
        applyResult(li, val, false, it, false, true);
        saveAnswer(set, it, val, false, slot, items, chapterId);
        refreshScore(slot, set, items);
        return;
      }
    }
    applyResult(li, val, ok, it, false);
    saveAnswer(set, it, val, ok, slot, items, chapterId);
    refreshScore(slot, set, items);
  }

  function reveal(li, it, set, slot, items, chapterId) {
    applyResult(li, currentValue(li, it), null, it, false);
    // membuka jawaban = tidak mendapat nilai benar, tetapi tetap tercatat dikerjakan
    if (it.type !== "proof") saveAnswer(set, it, currentValue(li, it), false, slot, items, chapterId);
    refreshScore(slot, set, items);
  }

  function hint(li, msg) {
    var fb = li.querySelector(".q-feedback");
    fb.hidden = false;
    fb.className = "q-feedback is-hint";
    fb.innerHTML = icon("info") + "<span>" + esc(msg) + "</span>";
    if (window.Icons) Icons.hydrate(fb);
  }

  /**
   * Tampilkan hasil. `ok` = true/false/null(hanya membuka jawaban).
   * `selfAssess` menampilkan tombol penilaian mandiri untuk jawaban isian
   * berbentuk kalimat yang sulit dicocokkan otomatis.
   */
  function applyResult(li, val, ok, it, silent, selfAssess) {
    var fb = li.querySelector(".q-feedback");
    li.classList.remove("is-ok", "is-no");
    if (ok === true) li.classList.add("is-ok");
    if (ok === false && !selfAssess) li.classList.add("is-no");
    li.classList.add("is-done");

    var partsEl = li.querySelectorAll(".q-part");
    if (partsEl.length) {
      // pulihkan isi tiap kotak dari jawaban tersimpan ("a=3, b=2")
      if (silent && val != null && !Array.isArray(val)) {
        var potong = String(val).split(/\s*,\s*/);
        [].slice.call(partsEl).forEach(function (x, k) {
          var t = potong[k] || "";
          x.value = t.replace(/^[^=]*=\s*/, "").replace(/^[A-Za-z .]+\s+/, "").trim();
        });
        var mp0 = multiParts(it.answer) || [];
        [].slice.call(partsEl).forEach(function (x, k) {
          if (mp0[k]) x.classList.toggle("is-ok", compare(x.value, mp0[k].value));
        });
      }
      [].slice.call(partsEl).forEach(function (x) { x.disabled = ok === true; });
    } else {
      var inp = li.querySelector(".q-input");
      if (inp) { if (val != null && !Array.isArray(val)) inp.value = val; inp.disabled = ok === true; }
    }

    if (it.type === "mc" || it.type === "multi") {
      var keys = (Array.isArray(it.answer) ? it.answer : [it.answer]).map(normalize);
      li.querySelectorAll(".q-opt").forEach(function (o) {
        var isKey = keys.indexOf(normalize(o.dataset.val)) >= 0;
        if (isKey) o.classList.add("is-ok");
        else if (o.classList.contains("is-sel")) o.classList.add("is-no");
        o.disabled = true;
      });
    }

    fb.hidden = false;
    fb.className = "q-feedback " + (ok === true ? "is-ok" : (ok === false && !selfAssess ? "is-no" : "is-open"));
    var head = ok === true
      ? icon("circle-check") + "<b>Benar</b>"
      : (selfAssess ? icon("circle-question-mark") + "<b>Belum bisa dicocokkan otomatis</b>"
                    : (ok === false ? icon("circle-x") + "<b>Belum tepat</b>" : icon("book-open") + "<b>Jawaban</b>"));

    fb.innerHTML =
      '<div class="q-fb-head">' + head + "</div>" +
      '<div class="q-ans"><span class="q-ans-lab">Jawaban:</span> ' +
        (Array.isArray(it.answer) ? it.answer.map(function (a) { return smart(a); }).join(", ") : smart(it.answer)) + "</div>" +
      (it.explanation ? '<div class="q-exp">' + smart(it.explanation) + "</div>" : "") +
      (selfAssess
        ? '<div class="q-selfrow"><span>Menurut Anda, jawaban tadi sudah benar?</span>' +
          '<button type="button" class="btn q-self" data-self="1">' + icon("check") + " Benar</button>" +
          '<button type="button" class="btn q-self" data-self="0">' + icon("x") + " Belum</button></div>"
        : "");

    li.querySelectorAll(".q-check").forEach(function (b) { b.disabled = ok === true; });
    if (window.MR) MR.render(fb);
    if (window.Icons) Icons.hydrate(fb);
    if (!silent && window.SFX) SFX.play(ok === true ? "correct" : "pop");
  }

  /* ------------------------------------------------------------------ *
   * Skor & analitik
   * ------------------------------------------------------------------ */
  function saveAnswer(set, it, val, ok, slot, items, chapterId) {
    if (!window.Store) return;
    Store.quizSaveItem(set.set_id, it.id, Array.isArray(val) ? val.join(", ") : val, ok);
    var rec = Store.quizGet(set.set_id);
    if (rec && rec.total !== (set.items || []).length) {
      rec.total = (set.items || []).length;
      Store.quizSave(set.set_id, rec);
    }
    // XP kecil untuk jawaban benar (sekali per butir, dijaga oleh sourceId)
    if (ok && window.Gamify) Gamify.addXP(5, "quiz:" + set.set_id + ":" + it.id);
  }

  /**
   * Analitik per kompetensi K1–K6, DIHITUNG ULANG dari jawaban tersimpan
   * (bukan akumulasi bertahap) sehingga tidak pernah dobel atau melenceng
   * saat siswa mengulang set. Kompetensi diambil dari tag butir bila ada;
   * jika tidak, disimpulkan dari bab pemilik set lewat manifest.
   */
  function analytics() {
    if (!window.Store || !window.Content) return {};
    var all = Store.quizAll() || {};
    var out = {};
    var cache = window.Content._cache || {};

    Object.keys(cache).forEach(function (file) {
      (cache[file].quizzes || []).forEach(function (set) {
        var rec = all[set.set_id];
        if (!rec || !rec.answers) return;
        var fallback = (Content.competencyForSet(set.set_id) || [])[0] || null;
        (set.items || []).forEach(function (it) {
          var a = rec.answers[it.id];
          if (!a) return;
          var comp = it.competency || fallback;
          if (!comp) return;
          if (!out[comp]) out[comp] = { benar: 0, dijawab: 0 };
          out[comp].dijawab++;
          if (a.ok) out[comp].benar++;
        });
      });
    });
    Object.keys(out).forEach(function (k) {
      out[k].pct = out[k].dijawab ? Math.round(out[k].benar / out[k].dijawab * 100) : 0;
    });
    return out;
  }

  function refreshScore(slot, set, items) {
    var rec = (window.Store && Store.quizGet(set.set_id)) || { answers: {} };
    var ans = rec.answers || {};
    var benar = Object.keys(ans).filter(function (k) { return ans[k].ok; }).length;
    var dijawab = Object.keys(ans).length;
    var el = slot.querySelector(".q-score-num");
    if (el) el.textContent = benar;
    var fill = slot.querySelector(".q-prog-fill");
    if (fill) fill.style.width = (items.length ? Math.round(dijawab / items.length * 100) : 0) + "%";
    var bar = slot.querySelector(".q-score");
    if (bar) bar.classList.toggle("is-full", items.length > 0 && benar === items.length);
  }

  window.Quiz = { mount: mount, normalize: normalize, compare: compare, analytics: analytics };
})();
