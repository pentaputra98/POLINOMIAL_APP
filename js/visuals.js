/* =========================================================================
   visuals.js — mesin untuk direktif <!-- VISUAL: ... --> pada content/*.md

   MENGAPA DUA LAPIS
   -----------------
   KaTeX tidak memiliki panah antar-suku maupun \longdiv. Jadi tampilan yang
   diminta konten dibangun sebagai DUA LAPIS:

     lapis 1  KaTeX merender rumusnya seperti biasa;
     lapis 2  SVG menggambar panah/garis di atasnya, dengan berpegang pada
              elemen ber-\htmlClass yang DITULIS PENULIS di berkas .md.

   Karena itu opsi KaTeX `trust:true` (js/mathrender.js) bukan sekadar demi
   warna: ia yang membuat jangkar DOM tersebut ada. Rumah porogapit dibangun
   sebagai grid CSS, bukan rumus.

   PRINSIP: KONTEN TETAP SUMBER KEBENARAN
   -------------------------------------
   Tidak ada rumus, angka, atau langkah yang diketik ulang di berkas ini.
   Setiap visual mengambil datanya dari .md di sekitarnya:
     - panah distribusi  -> mengangkat rumus $$...$$ yang menyusul, memakai
                            jangkar hl-* milik penulis;
     - rumah porogapit   -> membaca "Bagi $A$ oleh $B$" yang menyusul, lalu
                            MENGHITUNG SENDIRI pembagiannya (tidak dihafal).

   Ekspor: window.Visuals
   ========================================================================= */
(function () {
  "use strict";

  var NS = "http://www.w3.org/2000/svg";
  var BUILDERS = {};

  /* Panah digambar dari HASIL PENGUKURAN tata letak, sehingga harus digambar
     ulang setiap kali tata letak berubah: layar diubah ukurannya, pop-up
     dibuka/ditutup (js/overlay.js mengirim "poli:relayout"), atau bilah
     sub-materi muncul. Tanpa ini panah akan meleset dari jangkarnya. */
  var PAINTERS = [];
  function repaint() {
    for (var i = 0; i < PAINTERS.length; i++) {
      try { PAINTERS[i](); } catch (e) { /* figure sudah dilepas dari DOM */ }
    }
  }
  var _bound = false;
  function bindRepaint() {
    if (_bound) return;
    _bound = true;
    var t = 0;
    function later() {
      clearTimeout(t);
      t = setTimeout(repaint, 60);
    }
    window.addEventListener("resize", later);
    window.addEventListener("poli:relayout", later);
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(later);
  }
  /** Daftarkan penggambar; otomatis dilupakan bila elemennya lepas dari DOM. */
  function watch(node, fn) {
    bindRepaint();
    PAINTERS.push(function () {
      if (!node.isConnected) return;
      fn();
    });
    if (window.ResizeObserver) new ResizeObserver(fn).observe(node);
  }

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function svgEl(tag, attrs) {
    var n = document.createElementNS(NS, tag);
    for (var k in attrs) n.setAttribute(k, attrs[k]);
    return n;
  }
  function icon(name) { return window.Icons ? window.Icons.svg(name) : ""; }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function reduceMotion() {
    return window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }

  /* ===================================================================== *
   * 1) POLINOMIAL — parser LaTeX ringkas + pembagian panjang
   *    Dipakai agar visual dapat MENGHITUNG, bukan menyimpan jawaban.
   * ===================================================================== */

  /**
   * Ubah LaTeX polinomial satu variabel menjadi array koefisien
   * (pangkat tertinggi -> terendah). Mengembalikan null bila tidak yakin,
   * sehingga pemanggil dapat memilih untuk tidak menampilkan apa pun
   * ketimbang menampilkan yang salah.
   */
  function polyFromTex(tex) {
    if (!tex) return null;
    var s = String(tex)
      .replace(/\\htmlClass\{[^}]*\}/g, "")   // buang penanda warna
      .replace(/[{}\s]/g, "")
      .replace(/\\cdot|\\times/g, "*")
      .replace(/−/g, "-");
    if (!/^[-+0-9x^*./]+$/.test(s)) return null;   // ada huruf lain -> menyerah

    var terms = s.match(/[+-]?[^+-]+/g);
    if (!terms) return null;
    var map = {}, maxp = 0;
    for (var i = 0; i < terms.length; i++) {
      var t = terms[i];
      var m = /^([+-]?)(\d*(?:\.\d+)?)(?:\*?)(x(?:\^(-?\d+))?)?$/.exec(t);
      if (!m) return null;
      var sign = m[1] === "-" ? -1 : 1;
      var num = m[2] === "" ? 1 : parseFloat(m[2]);
      var p = m[3] ? (m[4] === undefined ? 1 : parseInt(m[4], 10)) : 0;
      if (p < 0) return null;                       // bukan polinomial
      map[p] = (map[p] || 0) + sign * num;
      if (p > maxp) maxp = p;
    }
    var out = [];
    for (var k = maxp; k >= 0; k--) out.push(map[k] || 0);
    return out;
  }

  function fmtNum(n) {
    if (Math.abs(n - Math.round(n)) < 1e-9) n = Math.round(n);
    return String(n).replace(".", "{,}");
  }

  /** Array koefisien -> LaTeX bentuk baku. */
  function polyToTex(c) {
    var deg = c.length - 1, out = "";
    for (var i = 0; i < c.length; i++) {
      var v = c[i], p = deg - i;
      if (v === 0) continue;
      var sign = v < 0 ? "-" : (out ? "+" : "");
      var a = Math.abs(v);
      var num = (a === 1 && p > 0) ? "" : fmtNum(a);
      out += sign + num + (p > 1 ? "x^{" + p + "}" : p === 1 ? "x" : "");
    }
    return out || "0";
  }

  /**
   * Pembagian panjang polinomial. Mengembalikan hasil bagi, sisa, dan
   * REKAMAN tiap siklus (bagi -> kali -> kurang) untuk dianimasikan.
   */
  function longDivide(f, p) {
    if (!f || !p || !p.length || p[0] === 0) return null;
    var work = f.slice(), q = [], steps = [];
    var n = f.length - p.length;
    if (n < 0) return { quotient: [0], remainder: f.slice(), steps: [] };
    for (var i = 0; i <= n; i++) {
      var coef = work[i] / p[0];
      q.push(coef);
      var mult = p.map(function (v) { return v * coef; });
      var before = work.slice(i, i + p.length);
      for (var j = 0; j < p.length; j++) work[i + j] -= mult[j];
      steps.push({
        bagiDari: before[0], bagiOleh: p[0], hasil: coef,
        kali: mult.slice(),
        sisaSementara: work.slice(i, i + p.length + 1)
      });
    }
    var rem = work.slice(n + 1);
    while (rem.length > 1 && Math.abs(rem[0]) < 1e-12) rem.shift();
    if (!rem.length) rem = [0];
    return { quotient: q, remainder: rem, steps: steps };
  }

  /** Skema Horner untuk pembagi (x - k). */
  function horner(c, k) {
    var row = [c[0]], add = [null];
    for (var i = 1; i < c.length; i++) {
      var m = row[i - 1] * k;
      add.push(m);
      row.push(c[i] + m);
    }
    return { bring: row.slice(0, -1), quotient: row.slice(0, -1), mult: add, remainder: row[row.length - 1] };
  }

  /* ===================================================================== *
   * 2) LAPISAN JANGKAR — gambar panah di atas rumus KaTeX
   * ===================================================================== */

  /**
   * Gambar panah melengkung dari elemen `from` ke tiap elemen pada `to`.
   * Koordinat diukun relatif terhadap `stage`, sehingga tetap benar saat
   * layar diubah ukurannya atau saat stage digulir mendatar.
   *
   * opts: { label:[..], cls:[..], lift:number }
   */
  function drawArrows(stage, pairs, opts) {
    opts = opts || {};
    var old = stage.querySelector(".v-overlay");
    if (old) old.remove();

    /* Sediakan ruang bagi panah SEBELUM mengukur. Bila padding baru ditetapkan
       sesudah pengukuran, penambahan padding dapat mengubah tata letak (mis.
       memunculkan/menghilangkan scrollbar) sehingga koordinat yang baru saja
       diukur menjadi kedaluwarsa dan panah meleset dari jangkarnya. */
    var need = (opts.lift || 18) + Math.max(0, pairs.length - 1) * 9 + 22;
    stage.style.paddingBottom = need + "px";

    var box = stage.getBoundingClientRect();
    var svg = svgEl("svg", { "class": "v-overlay" });
    var defs = svgEl("defs", {});
    svg.appendChild(defs);

    var seen = {};
    pairs.forEach(function (pr, idx) {
      if (!pr.from || !pr.to) return;
      var a = pr.from.getBoundingClientRect();
      var b = pr.to.getBoundingClientRect();
      var cls = pr.cls || "v-arrow";
      if (!seen[cls]) {
        var mk = svgEl("marker", {
          id: "vh-" + cls, viewBox: "0 0 10 10", refX: "8", refY: "5",
          markerWidth: "5", markerHeight: "5", orient: "auto-start-reverse"
        });
        var tip = svgEl("path", { d: "M0,0 L10,5 L0,10 z", "class": cls });
        tip.setAttribute("style", "fill:currentColor;stroke:none");
        mk.appendChild(tip); defs.appendChild(mk); seen[cls] = 1;
      }
      // dari BAWAH sumber melengkung ke BAWAH sasaran (panah distribusi
      // dibaca dari atas ke bawah, seperti dituliskan guru di papan)
      var x1 = a.left + a.width / 2 - box.left;
      var y1 = a.bottom - box.top + 2;
      var x2 = b.left + b.width / 2 - box.left;
      var y2 = b.bottom - box.top + 2;
      var lift = (opts.lift || 18) + idx * 9;
      var d = "M" + x1 + "," + y1 + " C" + x1 + "," + (y1 + lift) +
              " " + x2 + "," + (y2 + lift) + " " + x2 + "," + (y2 + 3);
      var path = svgEl("path", { d: d, "class": cls, "marker-end": "url(#vh-" + cls + ")" });
      svg.appendChild(path);
      if (pr.label) {
        var tx = svgEl("text", { x: (x1 + x2) / 2, y: Math.max(y1, y2) + lift + 12, "text-anchor": "middle" });
        tx.textContent = pr.label;
        svg.appendChild(tx);
      }
    });
    stage.appendChild(svg);
    return svg;
  }

  /* ===================================================================== *
   * 3) RUMAH POROGAPIT — grid CSS (KaTeX tidak punya \longdiv)
   * ===================================================================== */

  /**
   * Bangun bentuk rumah pembagian bersusun beserta rekaman siklusnya.
   * `res` berasal dari longDivide(), jadi seluruh angkanya DIHITUNG.
   */
  function porogapit(fCoef, pCoef, res) {
    var wrap = el("div", "porogapit");
    function cell(cls, tex, row, col) {
      var c = el("div", cls);
      c.style.gridRow = row;
      if (col) c.style.gridColumn = col;
      c.innerHTML = window.MR ? window.MR.M(tex, false) : tex;
      return c;
    }
    // atap = hasil bagi, di dalam rumah = yang dibagi, kiri = pembagi
    wrap.appendChild(cell("pg-quot", polyToTex(res.quotient), 1, 2));
    wrap.appendChild(cell("pg-div", polyToTex(pCoef), 2, 1));
    wrap.appendChild(cell("pg-dend", polyToTex(fCoef), 2, 2));

    var row = 3;
    res.steps.forEach(function (st, i) {
      var k = el("div", "pg-step is-sub v-step");
      k.style.gridRow = row++; k.style.gridColumn = 2;
      k.dataset.step = i;
      k.innerHTML = window.MR ? window.MR.M("-\\;(" + polyToTex(st.kali) + ")", false)
                              : "-(" + polyToTex(st.kali) + ")";
      wrap.appendChild(k);
      var s = el("div", "pg-step v-step");
      s.style.gridRow = row++; s.style.gridColumn = 2;
      s.dataset.step = i;
      s.innerHTML = window.MR ? window.MR.M(polyToTex(st.sisaSementara), false)
                              : polyToTex(st.sisaSementara);
      wrap.appendChild(s);
    });
    return wrap;
  }

  /* ===================================================================== *
   * 4) KERANGKA: figure + kendali langkah
   * ===================================================================== */
  function figure(title, iconName) {
    var fig = el("figure", "vfig");
    var head = el("figcaption", "vfig-head",
      (iconName ? '<span class="lu-wrap">' + icon(iconName) + "</span>" : "") +
      "<span>" + title + "</span>");
    var body = el("div", "vfig-body");
    var stage = el("div", "vstage");
    body.appendChild(stage);
    fig.appendChild(head); fig.appendChild(body);
    return { fig: fig, head: head, body: body, stage: stage };
  }

  /** Tombol maju/ulang untuk visual bertahap. */
  function stepper(host, total, onStep) {
    var i = 0;
    var bar = el("div", "vfig-controls");
    var bNext = el("button", "btn btn-sm",
      icon("step-forward") + " <span>Langkah berikutnya</span>");
    var bReset = el("button", "btn btn-sm", icon("rotate-ccw") + " <span>Ulangi</span>");
    var lab = el("span", "vfig-note");
    bNext.type = bReset.type = "button";
    function paint() {
      lab.textContent = i + " / " + total;
      bNext.disabled = i >= total;
      onStep(i);
    }
    bNext.addEventListener("click", function () { if (i < total) { i++; paint(); } });
    bReset.addEventListener("click", function () { i = 0; paint(); });
    bar.appendChild(bNext); bar.appendChild(bReset); bar.appendChild(lab);
    host.appendChild(bar);
    if (reduceMotion()) { i = total; }      // hormati preferensi kurangi gerak
    paint();
    return { get step() { return i; } };
  }

  /* ===================================================================== *
   * 5) KONTEKS SLOT — cara visual mengambil data dari .md di sekitarnya
   * ===================================================================== */
  function ctxFor(slot) {
    return {
      name: slot.dataset.visualName || "",
      note: slot.dataset.note || "",
      /** Elemen math blok pertama SETELAH slot (untuk diangkat ke figure). */
      nextMath: function () {
        var n = slot.nextElementSibling, hop = 0;
        while (n && hop++ < 6) {
          if (n.classList && n.classList.contains("m-block")) return n;
          var inner = n.querySelector && n.querySelector(".m-block");
          if (inner) return inner;
          n = n.nextElementSibling;
        }
        return null;
      },
      /** Fence ASCII pertama setelah slot (mis. tabel Horner di Bab 03). */
      nextFence: function () {
        var n = slot.nextElementSibling, hop = 0;
        while (n && hop++ < 8) {
          if (n.classList && n.classList.contains("pre-wrap")) return n;
          n = n.nextElementSibling;
        }
        return null;
      },
      /** LaTeX dari n span math pertama setelah slot (inline maupun blok). */
      texAfter: function (count) {
        var out = [], n = slot.nextElementSibling, hop = 0;
        while (n && hop++ < 10 && out.length < count) {
          var list = n.classList && n.classList.contains("m") ? [n]
                   : (n.querySelectorAll ? n.querySelectorAll(".m") : []);
          for (var i = 0; i < list.length && out.length < count; i++) {
            out.push(list[i].dataset.tex || "");
          }
          n = n.nextElementSibling;
        }
        return out;
      }
    };
  }

  /* ===================================================================== *
   * 6) BUILDER YANG SUDAH AKTIF (fondasi; sisanya menyusul di Fase 5)
   * ===================================================================== */

  /* --- Panah distribusi (Bab 02) ------------------------------------- *
   * Mengangkat rumus $$...$$ milik konten ke dalam figure, lalu menarik
   * panah dari jangkar hl-coef ke hl-1 dan hl-2 — ketiganya DITULIS
   * PENULIS di .md, sehingga tidak ada rumus yang diketik ulang di sini. */
  BUILDERS["panah-distribusi"] = function (slot, ctx) {
    var math = ctx.nextMath();
    if (!math) return null;
    var f = figure(ctx.name, "arrow-right");
    math.parentNode.insertBefore(f.fig, math);
    f.stage.appendChild(math);
    if (window.MR) window.MR.render(f.stage);

    function anchors() {
      return {
        src: f.stage.querySelector(".hl-coef"),
        t1: f.stage.querySelector(".hl-1"),
        t2: f.stage.querySelector(".hl-2")
      };
    }
    function paint(step) {
      var a = anchors();
      if (!a.src || !a.t1) return;
      var pairs = [];
      if (step >= 1) pairs.push({ from: a.src, to: a.t1, cls: "v-arrow" });
      if (step >= 2 && a.t2) pairs.push({ from: a.src, to: a.t2, cls: "v-arrow-2" });
      drawArrows(f.stage, pairs, { lift: 16 });
      [a.t1, a.t2].forEach(function (n, i) {
        if (n) n.classList.toggle("v-anchor-on", step >= i + 1);
      });
    }
    var st = stepper(f.body, 2, paint);
    watch(f.stage, function () { paint(st.step); });
    return f.fig;
  };

  /* --- Rumah pembagian porogapit (Bab 03) ---------------------------- *
   * Membaca dua rumus pertama setelah slot ("Bagi $A$ oleh $B$"), lalu
   * MENGHITUNG pembagiannya sendiri lewat longDivide(). Angka pada konten
   * tidak dihafal — bila hitungan tidak cocok, itu ketidaksesuaian nyata. */
  BUILDERS["rumah-pembagian-porogapit"] = function (slot, ctx) {
    var tex = ctx.texAfter(2);
    if (tex.length < 2) return null;
    var fC = polyFromTex(tex[0]), pC = polyFromTex(tex[1]);
    if (!fC || !pC) return null;
    var res = longDivide(fC, pC);
    if (!res) return null;

    var f = figure(ctx.name, "house");
    slot.parentNode.insertBefore(f.fig, slot.nextSibling);
    var host = el("div", "");
    f.stage.appendChild(host);
    host.appendChild(porogapit(fC, pC, res));
    if (window.MR) window.MR.render(f.stage);

    var total = res.steps.length;
    stepper(f.body, total, function (step) {
      f.stage.querySelectorAll(".v-step").forEach(function (n) {
        n.classList.toggle("is-dim", (+n.dataset.step) >= step);
      });
    });
    var note = el("p", "vfig-note");
    note.innerHTML = "Hasil bagi dan sisa di atas dihitung oleh aplikasi, " +
      "bukan disalin: " + (window.MR ? window.MR.M("H(x)=" + polyToTex(res.quotient), false) : "") +
      " dan " + (window.MR ? window.MR.M("S=" + polyToTex(res.remainder), false) : "") + ".";
    f.body.appendChild(note);
    if (window.MR) window.MR.render(note);
    return f.fig;
  };

  /* ===================================================================== *
   * 6b) BAGAN DARI FENCE ASCII
   *
   * Konten memuat 12 blok ASCII (peta konsep, tabel Horner, spanduk ide
   * pemersatu). Blok itu HANYA rujukan struktur bagi developer dan TIDAK boleh
   * tampil mentah (concept_map_directive di manifest). Semuanya diubah menjadi
   * komponen CSS di sini — datanya tetap dibaca dari ASCII milik penulis.
   *
   * OVERRIDE PEMILIK (§10b SERAH-TERIMA): peta konsep bersifat READ-ONLY.
   * Dibangun dari <div> biasa — bukan tombol/tautan — tanpa zoom, tanpa
   * penanganan klik, dan tanpa penampil layar penuh.
   * ===================================================================== */

  /** Rantai bercabang: "A → B → C" + baris lanjutan "→ X" sebagai cabang. */
  function parseChain(text) {
    var lines = String(text).split("\n").filter(function (l) { return l.trim(); });
    if (!lines.length) return null;
    var head = lines[0].split("→").map(function (s) { return s.trim(); }).filter(Boolean);
    if (head.length < 2) return null;
    var fan = [];
    for (var i = 1; i < lines.length; i++) {
      var l = lines[i].trim();
      if (l.indexOf("→") !== 0) return null;          // bukan pola cabang
      var t = l.replace(/^→\s*/, "").trim();
      if (t) fan.push(t);
    }
    if (!fan.length) return { spine: head, fan: [] };  // rantai lurus
    // simpul terakhir baris pertama adalah cabang PERTAMA
    return { spine: head.slice(0, -1), fan: [head[head.length - 1]].concat(fan) };
  }

  function renderConceptMap(data) {
    var wrap = el("div", "cmap");
    wrap.setAttribute("role", "img");
    var label = data.spine.concat(data.fan).join(", ");
    wrap.setAttribute("aria-label", "Peta konsep: " + label);

    var spine = el("div", "cmap-spine");
    data.spine.forEach(function (t, i) {
      if (i) spine.appendChild(el("span", "cmap-arrow", icon("arrow-right")));
      spine.appendChild(el("div", "cmap-node", esc(t)));
    });
    wrap.appendChild(spine);

    if (data.fan.length) {
      if (data.spine.length) spine.appendChild(el("span", "cmap-arrow", icon("arrow-right")));
      var fan = el("div", "cmap-fan");
      data.fan.forEach(function (t) {
        var row = el("div", "cmap-fanrow");
        row.appendChild(el("span", "cmap-tick", ""));
        row.appendChild(el("div", "cmap-node is-leaf", esc(t)));
        fan.appendChild(row);
      });
      wrap.appendChild(fan);
    }
    return wrap;
  }

  /** Spanduk "ide pemersatu" Bab 07 — bentuknya khas, ditangani tersendiri. */
  function renderUnifying(text) {
    var t = String(text);
    var judul = (t.match(/^\s*([A-Z][A-Z\s]+)\s*$/m) || [])[1] || "POLINOMIAL";
    var ide = (t.match(/nilai\s*=\s*[^\n]+/) || [])[0] || "";
    var bawah = (t.match(/STRATEGI[^\n]*/) || [])[0] || "";
    var kolom = ["Konsep Dasar", "Operasi & Nilai", "Pembagian",
                 "Teorema Sisa/Faktor", "Persamaan & Vieta"];
    var wrap = el("div", "umap");
    wrap.setAttribute("role", "img");
    wrap.setAttribute("aria-label", "Peta konsep akhir: " + judul + ", " + ide);
    wrap.appendChild(el("div", "umap-top", esc(judul.trim())));
    var row = el("div", "umap-cols");
    kolom.forEach(function (k) { row.appendChild(el("div", "cmap-node", esc(k))); });
    wrap.appendChild(row);
    if (ide) wrap.appendChild(el("div", "umap-idea",
      '<span class="umap-idea-lab">IDE PEMERSATU</span><span>' + esc(ide.trim()) + "</span>"));
    if (bawah) wrap.appendChild(el("div", "umap-bottom", esc(bawah.trim())));
    return wrap;
  }

  /* --- Tabel Horner dari ASCII ---------------------------------------- *
   * Angka pengali & baris hasil TIDAK dibaca dari ASCII, melainkan DIHITUNG
   * dari k dan koefisiennya. Hasil hitung lalu dibandingkan dengan baris
   * hasil pada ASCII sebagai pemeriksaan — bila tidak cocok, itu
   * ketidaksesuaian nyata pada konten dan bagannya tidak ditampilkan. */
  function angka(s) {
    return String(s).replace(/[−–]/g, "-").trim();
  }
  function tokNum(s) {
    var out = [], re = /[-+]?\d+(?:[.,]\d+)?(?:\/\d+)?/g, m;
    while ((m = re.exec(angka(s)))) out.push(m[0]);
    return out;
  }
  function parseHornerAscii(text) {
    var lines = String(text).split("\n");
    var bar = lines.filter(function (l) { return l.indexOf("│") >= 0; });
    var hasil = null;
    for (var i = 0; i < lines.length; i++) {
      if (/[└─]{3,}/.test(lines[i]) && lines[i + 1]) { hasil = lines[i + 1]; break; }
    }
    if (bar.length < 2 || !hasil) return null;

    function kiriKanan(l) {
      var p = l.split("│");
      return { kiri: p[0], kanan: p.slice(1).join("│") };
    }
    var b0 = kiriKanan(bar[0]);
    var coefs = tokNum(b0.kanan).map(Number);
    if (!coefs.length) return null;

    // baris hasil: bagian sebelum "|" = hasil bagi, sesudahnya = sisa
    var hp = hasil.split("|");
    var hBagi = tokNum(hp[0]).map(Number);
    var hSisa = hp.length > 1 ? tokNum(hp[1]).map(Number) : [];

    if (bar.length === 2) {
      var km = angka(b0.kiri).match(/k\s*=\s*(-?\d+(?:\/\d+)?)/i);
      if (!km) return null;
      var kv = km[1].indexOf("/") > 0
        ? Number(km[1].split("/")[0]) / Number(km[1].split("/")[1])
        : Number(km[1]);
      return { mode: "simple", k: kv, coefs: coefs, asciiBagi: hBagi, asciiSisa: hSisa };
    }
    // Horner-Kino: dua baris pengali, labelnya = -b dan -c
    var mults = bar.slice(1).map(function (l) {
      var n = tokNum(kiriKanan(l).kiri);
      return n.length ? Number(n[0]) : null;
    });
    if (mults.some(function (v) { return v === null; })) return null;
    return { mode: "kino", mults: mults, coefs: coefs, asciiBagi: hBagi, asciiSisa: hSisa };
  }

  function renderHornerTable(d) {
    var n = d.coefs.length;
    var baris = [], hasil = [], sisa = [];

    if (d.mode === "simple") {
      var h = horner(d.coefs, d.k);
      baris = [h.mult.slice()];                       // null pada kolom pertama
      hasil = h.quotient.slice();
      sisa = [h.remainder];
      // periksa terhadap ASCII penulis
      var cocok = d.asciiBagi.length
        ? hasil.every(function (v, i) { return Math.abs(v - d.asciiBagi[i]) < 1e-9; })
        : true;
      if (d.asciiSisa.length) cocok = cocok && Math.abs(d.asciiSisa[0] - h.remainder) < 1e-9;
      if (!cocok) return null;
    } else {
      /* Horner-Kino: tiap koefisien hasil menyumbang ke dua kolom berikutnya,
         dikali mults[0] (geser 1) dan mults[1] (geser 2). */
      var r1 = new Array(n).fill(null), r2 = new Array(n).fill(null);
      var q = [], k = n - 2;                          // banyak koefisien hasil bagi
      var work = d.coefs.slice();
      for (var i = 0; i < k; i++) {
        var c = work[i];
        q.push(c);
        if (i + 1 < n) { r1[i + 1] = c * d.mults[0]; work[i + 1] += r1[i + 1]; }
        if (i + 2 < n) { r2[i + 2] = c * d.mults[1]; work[i + 2] += r2[i + 2]; }
      }
      baris = [r1, r2];
      hasil = q;
      sisa = work.slice(k);
      var ok = d.asciiBagi.length
        ? q.every(function (v, i) { return Math.abs(v - d.asciiBagi[i]) < 1e-9; })
        : true;
      if (!ok) return null;
    }

    var tab = el("table", "htab");
    function sel(txt, cls) {
      var td = document.createElement("td");
      if (cls) td.className = cls;
      td.textContent = txt == null ? "" : fmtNum(txt).replace("{,}", ",");
      return td;
    }
    var thead = document.createElement("thead");
    var trh = document.createElement("tr");
    var th0 = document.createElement("th");
    th0.textContent = d.mode === "simple" ? "k = " + fmtNum(d.k).replace("{,}", ",") : "pengali";
    trh.appendChild(th0);
    d.coefs.forEach(function (c) {
      var th = document.createElement("th");
      th.textContent = fmtNum(c).replace("{,}", ",");
      trh.appendChild(th);
    });
    thead.appendChild(trh); tab.appendChild(thead);

    var tb = document.createElement("tbody");
    baris.forEach(function (row, ri) {
      var tr = document.createElement("tr");
      tr.className = "htab-mult";
      tr.dataset.step = ri;
      var lab = document.createElement("th");
      lab.textContent = d.mode === "simple" ? "×k" : fmtNum(d.mults[ri]).replace("{,}", ",");
      tr.appendChild(lab);
      row.forEach(function (v) { tr.appendChild(sel(v)); });
      tb.appendChild(tr);
    });
    var trr = document.createElement("tr");
    trr.className = "htab-res";
    var labr = document.createElement("th");
    labr.textContent = "hasil";
    trr.appendChild(labr);
    hasil.forEach(function (v) { trr.appendChild(sel(v, "is-quot")); });
    sisa.forEach(function (v) { trr.appendChild(sel(v, "is-rem")); });
    tb.appendChild(trr);
    tab.appendChild(tb);

    var wrap = el("div", "htab-wrap");
    wrap.appendChild(tab);
    var ket = el("p", "htab-legend",
      '<span class="htab-key is-quot"></span> koefisien hasil bagi' +
      '<span class="htab-key is-rem"></span> ' +
      (d.mode === "simple" ? "sisa = f(k)" : "sisa (rx + s)"));
    wrap.appendChild(ket);
    return wrap;
  }

  /**
   * Ubah SETIAP fence ASCII menjadi komponen yang semestinya.
   * Dipanggil dari mount(); mencakup fence yang berada di dalam gudang kartu
   * (mis. Peta Konsep di dalam Info Cards) karena komponennya statis dan
   * tidak memerlukan pengukuran tata letak.
   */
  function upgradeAscii(root) {
    var n = 0;
    (root || document).querySelectorAll("pre.ascii").forEach(function (pre) {
      var host = pre.closest(".pre-wrap") || pre;
      if (host.dataset.upgraded) return;
      var txt = pre.textContent || "";
      var out = null;
      try {
        /* Dicoba BERURUTAN, bukan if/else-if berantai. Spanduk "ide pemersatu"
           Bab 07 memuat "│" dan "└───" sehingga tertangkap dulu oleh cabang
           Horner; ketika penguraiannya gagal, rantai else-if membuat bentuk
           lain tidak pernah dicoba dan fence-nya lolos ke penangan lama. */
        if (txt.indexOf("│") >= 0 && /[└─]{3,}/.test(txt)) {
          var hd = parseHornerAscii(txt);
          if (hd) out = renderHornerTable(hd);
        }
        if (!out && /[┌┬┐┴]/.test(txt)) out = renderUnifying(txt);
        if (!out && txt.indexOf("→") >= 0) {
          var cd = parseChain(txt);
          if (cd) out = renderConceptMap(cd);
        }
      } catch (e) {
        out = null;
        /* JANGAN menelan galat diam-diam. Versi pertama fungsi ini memakai
           `catch { out = null }` tanpa jejak; sebuah ReferenceError (esc belum
           didefinisikan) tersembunyi total dan fence-nya diam-diam jatuh ke
           penangan lama yang menghasilkan bagan DAPAT DIKLIK — melanggar aturan
           read-only. Sekarang kegagalan selalu meninggalkan jejak. */
        if (window.console) console.warn("[Visuals] fence gagal diurai:", e && e.message);
      }
      if (!out) return;                    // gagal urai -> biarkan apa adanya
      host.dataset.upgraded = "1";
      host.parentNode.insertBefore(out, host);
      host.parentNode.removeChild(host);
      n++;
    });
    return n;
  }

  /* ===================================================================== *
   * 7) MOUNT
   * ===================================================================== */
  function mount(root) {
    PAINTERS.length = 0;      // halaman berganti -> lupakan penggambar lama
    upgradeAscii(root);       // 12 fence ASCII -> bagan CSS (read-only)
    (root || document).querySelectorAll(".visual-slot").forEach(function (slot) {
      if (slot.dataset.visualDone) return;
      slot.dataset.visualDone = "1";
      var key = slot.dataset.visual || "";
      var b = BUILDERS[key];
      if (!b) {
        /* Belum ada builder-nya (menyusul di Fase 5). Slot disembunyikan —
           BUKAN kotak kosong, dan direktifnya tidak pernah tampil sebagai
           teks mentah. Namanya tetap tercatat di DOM untuk audit. */
        slot.hidden = true;
        return;
      }
      try {
        if (!b(slot, ctxFor(slot))) slot.hidden = true;
      } catch (e) {
        slot.hidden = true;
        if (window.console) console.warn("[Visuals] gagal:", key, e && e.message);
      }
    });
  }

  window.Visuals = {
    mount: mount,
    upgradeAscii: upgradeAscii,
    parseChain: parseChain,
    parseHornerAscii: parseHornerAscii,
    repaint: repaint,
    watch: watch,
    register: function (k, fn) { BUILDERS[k] = fn; },
    has: function (k) { return !!BUILDERS[k]; },
    keys: function () { return Object.keys(BUILDERS); },
    // diekspos untuk dipakai ulang & diuji
    polyFromTex: polyFromTex, polyToTex: polyToTex,
    longDivide: longDivide, horner: horner,
    drawArrows: drawArrows, porogapit: porogapit, figure: figure
  };
})();
