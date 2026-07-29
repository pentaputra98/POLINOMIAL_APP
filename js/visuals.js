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
   * 6c) PEMBANTU KONTEKS TAMBAHAN
   *     Setiap visual mengambil datanya dari konten di sekitar slot; tidak ada
   *     rumus, tabel, atau kalimat yang diketik ulang di berkas ini.
   * ===================================================================== */
  function sibs(slot, arah) {
    var out = [], n = slot[arah === "prev" ? "previousElementSibling" : "nextElementSibling"];
    var hop = 0;
    while (n && hop++ < 14) {
      out.push(n);
      n = n[arah === "prev" ? "previousElementSibling" : "nextElementSibling"];
    }
    return out;
  }
  /** n elemen math BLOK terdekat sesudah/sebelum slot. */
  function mathBlocks(slot, count, arah) {
    var out = [];
    sibs(slot, arah).forEach(function (e) {
      if (out.length >= count) return;
      if (e.classList && e.classList.contains("m-block")) { out.push(e); return; }
      var inner = e.querySelectorAll ? e.querySelectorAll(".m-block") : [];
      for (var i = 0; i < inner.length && out.length < count; i++) out.push(inner[i]);
    });
    return out;
  }
  function nextTable(slot) {
    var s = sibs(slot, "next");
    for (var i = 0; i < s.length; i++) {
      if (s[i].tagName === "TABLE") return s[i];
      var t = s[i].querySelector && s[i].querySelector("table");
      if (t) return t;
    }
    return null;
  }
  function nextHtab(slot) {
    var s = sibs(slot, "next");
    for (var i = 0; i < s.length; i++) {
      if (s[i].classList && s[i].classList.contains("htab-wrap")) return s[i];
      var t = s[i].querySelector && s[i].querySelector(".htab-wrap");
      if (t) return t;
    }
    return null;
  }
  /** Baris tabel sebagai array-of-array teks (sel diambil apa adanya). */
  function tableRows(tbl) {
    return [].slice.call(tbl.querySelectorAll("tbody tr")).map(function (tr) {
      return [].slice.call(tr.children);
    });
  }
  function headText(tbl) {
    return [].slice.call(tbl.querySelectorAll("thead th")).map(function (th) {
      return th.textContent.trim();
    });
  }
  /** Paragraf sesudah slot yang diawali <strong> berpola tertentu. */
  function boldParas(slot, re, max) {
    var out = [];
    sibs(slot, "next").forEach(function (e) {
      if (out.length >= (max || 8)) return;
      if (e.tagName !== "P") return;
      var b = e.querySelector("strong");
      if (b && re.test(b.textContent)) out.push({ el: e, judul: b.textContent.trim() });
    });
    return out;
  }
  /** Pindahkan elemen ke dalam stage figure (bukan disalin). */
  function adopt(stage, nodes) {
    nodes.forEach(function (n) { stage.appendChild(n); });
    if (window.MR) MR.render(stage);
    if (window.Icons) Icons.hydrate(stage);
  }
  function note(host, html) {
    var p = el("p", "vfig-note", html);
    host.appendChild(p);
    if (window.MR) MR.render(p);
    if (window.Icons) Icons.hydrate(p);
    return p;
  }
  function place(slot, fig) { slot.parentNode.insertBefore(fig, slot.nextSibling); }

  /**
   * Buang pembungkus \htmlClass{kelas}{isi} dan sisakan isinya.
   *
   * WAJIB dilakukan sebelum LaTeX dipecah pada tanda + / -, sebab nama
   * kelasnya sendiri memuat tanda hubung (hl-1, hl-2, hl-3). Tanpa ini,
   * pemecahan suku ikut memotong nama kelas sehingga LaTeX-nya rusak dan
   * KaTeX gagal merender.
   */
  function unwrapHtmlClass(tex) {
    var s = String(tex == null ? "" : tex), out = "", i = 0, tag = "\\htmlClass{";
    while (i < s.length) {
      var k = s.indexOf(tag, i);
      if (k < 0) { out += s.slice(i); break; }
      out += s.slice(i, k);
      var j = k + tag.length, d = 1;
      while (j < s.length && d > 0) { if (s[j] === "{") d++; else if (s[j] === "}") d--; j++; }
      if (s[j] !== "{") { i = j; continue; }            // bentuk tak terduga
      j++; d = 1;
      var mulai = j;
      while (j < s.length && d > 0) { if (s[j] === "{") d++; else if (s[j] === "}") d--; j++; }
      out += s.slice(mulai, j - 1);
      i = j;
    }
    return out;
  }

  /** Pecah LaTeX pada + / - TERLUAR (tidak di dalam {} maupun ()). */
  function splitTerms(tex) {
    var s = String(tex), out = [], buf = "", d = 0;
    for (var i = 0; i < s.length; i++) {
      var c = s[i];
      if (c === "{" || c === "(" || c === "[") d++;
      else if (c === "}" || c === ")" || c === "]") d--;
      if (d === 0 && (c === "+" || c === "-") && buf.trim()) { out.push(buf); buf = c; continue; }
      buf += c;
    }
    if (buf.trim()) out.push(buf);
    return out.length ? out : [s];
  }

  /* ===================================================================== *
   * 6d) BUILDER — 20 direktif sisa
   * ===================================================================== */

  /* --- 1. Anatomi suku (Bab 01) -------------------------------------- *
   * Rumus $$2x^3$$ diangkat; tiap jangkar hl-* dapat disentuh dan
   * memunculkan labelnya. Label diambil dari kelas jangkar. */
  var LABEL_HL = {
    "hl-coef": "koefisien", "hl-var": "variabel",
    "hl-pow": "pangkat", "hl-const": "konstanta"
  };
  BUILDERS["anatomi-suku"] = function (slot, ctx) {
    var m = mathBlocks(slot, 1, "next")[0];
    if (!m) return null;
    var f = figure(ctx.name, "puzzle");
    place(slot, f.fig);
    adopt(f.stage, [m]);
    var anchors = [].slice.call(f.stage.querySelectorAll(
      ".hl-coef,.hl-var,.hl-pow,.hl-const"));
    if (!anchors.length) { f.fig.remove(); return null; }
    var lab = el("p", "v-anat-label", "Ketuk salah satu bagian rumus.");
    f.body.appendChild(lab);
    anchors.forEach(function (a) {
      var kelas = ["hl-coef", "hl-var", "hl-pow", "hl-const"].filter(function (k) {
        return a.classList.contains(k);
      })[0];
      a.classList.add("v-tapable");
      a.setAttribute("tabindex", "0");
      a.setAttribute("role", "button");
      a.setAttribute("aria-label", LABEL_HL[kelas] || "bagian");
      function pilih() {
        anchors.forEach(function (x) { x.classList.remove("v-anchor-on"); });
        a.classList.add("v-anchor-on");
        lab.className = "v-anat-label is-on " + kelas;
        lab.textContent = LABEL_HL[kelas] || "bagian";
      }
      a.addEventListener("click", pilih);
      a.addEventListener("mouseenter", pilih);
      a.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") { e.preventDefault(); pilih(); }
      });
    });
    return f.fig;
  };

  /* --- 2. Perapian ke bentuk baku (Bab 01) --------------------------- *
   * Rumus memuat "→"; sisi kiri & kanan dipisah, lalu suku sisi kanan
   * dimunculkan bertahap dari pangkat tertinggi. */
  BUILDERS["perapian-ke-bentuk-baku"] = function (slot, ctx) {
    var m = mathBlocks(slot, 1, "next")[0];
    if (!m) return null;
    var tex = m.dataset.tex || "";
    var bagi = tex.split(/\\longrightarrow|\\to|→/);
    if (bagi.length < 2) return null;
    var f = figure(ctx.name, "arrow-right");
    place(slot, f.fig);

    var kiri = el("div", "v-row");
    kiri.appendChild(el("span", "v-row-lab", "acak"));
    var kx = el("span", "");
    kx.innerHTML = window.MR ? MR.M(unwrapHtmlClass(bagi[0]).trim(), false) : bagi[0];
    kiri.appendChild(kx);
    var kanan = el("div", "v-row is-target");
    kanan.appendChild(el("span", "v-row-lab", "bentuk baku"));
    var tx = el("span", "v-target");
    kanan.appendChild(tx);
    f.stage.appendChild(kiri); f.stage.appendChild(kanan);
    if (m.parentNode) m.parentNode.removeChild(m);   // rumus asli tak ditampilkan dua kali
    // sisi kiri harus dirender di sini; paint() hanya merender sisi kanan
    if (window.MR) MR.render(f.stage);

    /* Pembungkus \htmlClass dibuang LEBIH DAHULU, baru dipecah pada tanda
       terluar — nama kelas hl-1/hl-2/hl-3 memuat tanda hubung. */
    var suku = splitTerms(unwrapHtmlClass(bagi[1]).trim());
    function paint(step) {
      tx.innerHTML = "";
      suku.slice(0, step).forEach(function (s, i) {
        var sp = el("span", "v-term" + (i === step - 1 ? " is-new" : ""));
        sp.innerHTML = window.MR ? MR.M(s.trim(), false) : s;
        tx.appendChild(sp);
      });
      if (window.MR) MR.render(tx);
    }
    stepper(f.body, suku.length, paint);
    note(f.body, icon("info") + " Suku disusun dari pangkat tertinggi ke terendah.");
    return f.fig;
  };

  /* --- 3. Uji aturan emas (Bab 01) ----------------------------------- *
   * Tabel 3 kolom (bentuk | ditulis sebagai | polinomial?) menjadi kartu uji
   * yang tersingkap satu per satu, ditandai lolos/gagal. */
  BUILDERS["uji-aturan-emas"] = function (slot, ctx) {
    var tbl = nextTable(slot);
    if (!tbl) return null;
    var rows = tableRows(tbl);
    if (!rows.length || rows[0].length < 3) return null;
    var f = figure(ctx.name, "list-checks");
    place(slot, f.fig);
    var kisi = el("div", "v-tests");
    f.stage.appendChild(kisi);
    var kartu = rows.map(function (tds) {
      var lolos = /✅|\bYa\b/i.test(tds[2].textContent) &&
                  !/❌|Bukan/i.test(tds[2].textContent);
      var c = el("div", "v-test");
      c.appendChild(el("div", "v-test-form", tds[0].innerHTML));
      var as = el("div", "v-test-as", tds[1].innerHTML);
      c.appendChild(as);
      var vd = el("div", "v-test-verdict");
      c.appendChild(vd);
      kisi.appendChild(c);
      return { el: c, as: as, vd: vd, lolos: lolos };
    });
    if (window.MR) MR.render(kisi);
    if (tbl.parentNode) tbl.parentNode.removeChild(tbl);

    function paint(step) {
      kartu.forEach(function (k, i) {
        var buka = i < step;
        k.el.className = "v-test" + (buka ? (k.lolos ? " is-pass" : " is-fail") : "");
        k.as.style.visibility = buka ? "visible" : "hidden";
        k.vd.innerHTML = buka
          ? (k.lolos ? icon("circle-check") + "<span>Polinomial</span>"
                     : icon("circle-x") + "<span>Bukan</span>")
          : "";
        if (buka && window.Icons) Icons.hydrate(k.vd);
      });
    }
    stepper(f.body, kartu.length, paint);
    return f.fig;
  };

  /* --- 4. Penjumlahan bersusun (Bab 02) ------------------------------ *
   * Dua rumus blok berurutan disusun ke bawah; kolom per pangkat sejajar
   * memakai jangkar hl-1..hl-3 & hl-const milik penulis, lalu tiap kolom
   * dijumlahkan bertahap. */
  /**
   * Ambil suku BERTANDA untuk setiap kelas jangkar dari LaTeX sumber.
   *
   * PENTING: penulis membungkus sukunya saja — tandanya berada DI LUAR
   * pembungkus, mis. "... - \htmlClass{hl-2}{3x^2} ...". Bila tanda itu
   * diabaikan, kolom $3x^2$ terbaca "3x^2 + 3x^2" padahal seharusnya
   * "3x^2 - 3x^2 = 0" — hitungan yang ditampilkan menjadi salah. Karena itu
   * tanda di depan tiap pembungkus ikut dibaca.
   */
  function signedAnchors(tex, kelas) {
    var s = String(tex == null ? "" : tex), hasil = {};
    kelas.forEach(function (k) { hasil[k] = null; });
    var tag = "\\htmlClass{", i = 0;
    while (i < s.length) {
      var a = s.indexOf(tag, i);
      if (a < 0) break;
      var j = a + tag.length, d = 1, ks = j;
      while (j < s.length && d > 0) { if (s[j] === "{") d++; else if (s[j] === "}") d--; j++; }
      var namaKelas = s.slice(ks, j - 1);
      if (s[j] !== "{") { i = j; continue; }
      j++; d = 1;
      var vs = j;
      while (j < s.length && d > 0) { if (s[j] === "{") d++; else if (s[j] === "}") d--; j++; }
      var isi = s.slice(vs, j - 1);
      // tanda terdekat sebelum pembungkus
      var tanda = "+";
      for (var p = a - 1; p >= 0; p--) {
        var c = s[p];
        if (c === " " || c === "\\" || c === ";" || c === ",") continue;
        if (c === "-" || c === "−") tanda = "-";
        break;
      }
      if (hasil.hasOwnProperty(namaKelas) && hasil[namaKelas] === null) {
        hasil[namaKelas] = (tanda === "-" ? "-" : "") + unwrapHtmlClass(isi);
      }
      i = j;
    }
    return hasil;
  }

  BUILDERS["penjumlahan-bersusun"] = function (slot, ctx) {
    var ms = mathBlocks(slot, 2, "next");
    if (ms.length < 2) return null;
    var KOL = ["hl-1", "hl-2", "hl-3", "hl-const"];
    var baris = ms.map(function (m) { return signedAnchors(m.dataset.tex, KOL); });
    // butuh minimal satu kolom terisi pada kedua baris
    var adaKolom = KOL.some(function (k) { return baris[0][k] && baris[1][k]; });
    if (!adaKolom) return null;

    var f = figure(ctx.name, "table");
    place(slot, f.fig);
    var grid = el("div", "v-stack");
    grid.style.gridTemplateColumns = "repeat(" + KOL.length + ",auto)";
    f.stage.appendChild(grid);

    baris.forEach(function (row) {
      KOL.forEach(function (k, ci) {
        var cell = el("div", "v-cell " + k);
        cell.dataset.col = ci;
        if (row[k]) cell.innerHTML = window.MR ? MR.M(row[k], false) : row[k];
        grid.appendChild(cell);
      });
    });
    var jml = KOL.map(function (k, ci) {
      var cell = el("div", "v-cell v-sum " + k);
      cell.dataset.col = ci;
      grid.appendChild(cell);
      return cell;
    });
    ms.forEach(function (m) { if (m.parentNode) m.parentNode.removeChild(m); });
    if (window.MR) MR.render(grid);

    /* Jumlah kolom DIHITUNG dari koefisiennya, bukan dirangkai sebagai teks,
       supaya kolom yang saling menghabiskan benar-benar tampil sebagai 0. */
    function jumlahKolom(k) {
      var a = polyFromTex(baris[0][k] || "0");
      var b = polyFromTex(baris[1][k] || "0");
      if (!a || !b) return null;
      var n = Math.max(a.length, b.length), out = [];
      for (var i = 0; i < n; i++) {
        out.push((a[a.length - 1 - i] || 0) + (b[b.length - 1 - i] || 0));
      }
      return polyToTex(out.reverse());
    }
    function paint(step) {
      KOL.forEach(function (k, ci) {
        var aktif = ci < step;
        grid.querySelectorAll('[data-col="' + ci + '"]').forEach(function (c) {
          c.classList.toggle("is-on", aktif);
        });
        jml[ci].innerHTML = "";
        if (aktif) {
          var t = jumlahKolom(k);
          if (t !== null) {
            jml[ci].innerHTML = window.MR ? MR.M(t, false) : t;
            if (window.MR) MR.render(jml[ci]);
          }
        }
      });
    }
    stepper(f.body, KOL.length, paint);
    note(f.body, icon("info") + " Setiap kolom memuat satu pangkat; jumlahkan kolom demi kolom. " +
      "Kolom yang saling menghabiskan menghasilkan " + (window.MR ? MR.M("0", false) : "0") + ".");
    return f.fig;
  };

  /* --- 5 & 14. Penyamaan koefisien / Penurunan Vieta ----------------- *
   * Rumus memuat pasangan jangkar berkelas sama (hl-1, hl-2, hl-3) di kedua
   * ruas. Garis penghubung ditarik antar pasangan sewarna, lalu persamaan
   * yang terbentuk dimunculkan. */
  function pairLinkBuilder(iconName) {
    return function (slot, ctx) {
      var m = mathBlocks(slot, 1, "next")[0];
      if (!m) return null;
      var f = figure(ctx.name, iconName);
      place(slot, f.fig);
      adopt(f.stage, [m]);
      var KELAS = ["hl-1", "hl-2", "hl-3"];
      var pasang = [];
      KELAS.forEach(function (k, i) {
        var g = f.stage.querySelectorAll("." + k);
        if (g.length >= 2) pasang.push({ kelas: k, a: g[0], b: g[g.length - 1], i: i });
      });
      if (!pasang.length) { f.fig.remove(); return null; }

      var daftar = el("div", "v-eqs");
      f.body.appendChild(daftar);
      function tex(node) {
        var a = node.querySelector("annotation");
        return a ? a.textContent : node.textContent;
      }
      function paint(step) {
        var pairs = pasang.slice(0, step).map(function (p) {
          return { from: p.a, to: p.b, cls: "v-arrow" + (p.i ? "-" + (p.i + 1) : "") };
        });
        drawArrows(f.stage, pairs, { lift: 14 });
        pasang.forEach(function (p, i) {
          p.a.classList.toggle("v-anchor-on", i < step);
          p.b.classList.toggle("v-anchor-on", i < step);
        });
        daftar.innerHTML = "";
        pasang.slice(0, step).forEach(function (p) {
          var row = el("div", "v-eq " + p.kelas);
          row.innerHTML = window.MR ? MR.M(tex(p.a) + "=" + tex(p.b), false)
                                    : tex(p.a) + " = " + tex(p.b);
          daftar.appendChild(row);
        });
        if (window.MR) MR.render(daftar);
      }
      var st = stepper(f.body, pasang.length, paint);
      watch(f.stage, function () { paint(st.step); });
      return f.fig;
    };
  }
  BUILDERS["penyamaan-koefisien"] = pairLinkBuilder("equal");
  BUILDERS["penurunan-rumus-vieta"] = pairLinkBuilder("equal");

  /* --- 6 & 7. Tabel Horner beranimasi / Skema Horner-Kino ------------ *
   * Tabelnya sudah dibangun upgradeAscii() dari ASCII penulis (dan angkanya
   * dihitung engine). Di sini tabel itu DIANGKAT ke dalam figure lalu diberi
   * irama bertahap: turun → kali → jumlah. */
  function hornerAnimBuilder(caption) {
    return function (slot, ctx) {
      var wrap = nextHtab(slot);
      if (!wrap) return null;
      var f = figure(ctx.name, "table");
      place(slot, f.fig);
      f.stage.appendChild(wrap);
      var tab = wrap.querySelector(".htab");
      var kolom = tab.querySelectorAll("thead th").length - 1;   // tanpa kolom label
      var multRows = [].slice.call(tab.querySelectorAll(".htab-mult"));
      var resRow = tab.querySelector(".htab-res");

      function selAt(tr, ci) { return tr ? tr.children[ci + 1] : null; }
      function paint(step) {
        for (var c = 0; c < kolom; c++) {
          var tampil = c < step;
          multRows.forEach(function (tr) {
            var s = selAt(tr, c);
            if (s) s.classList.toggle("is-on", tampil);
          });
          var r = selAt(resRow, c);
          if (r) r.classList.toggle("is-on", tampil);
        }
        var akt = tab.querySelector(".is-active");
        if (akt) akt.classList.remove("is-active");
        if (step > 0 && step <= kolom) {
          var cur = selAt(resRow, step - 1);
          if (cur) cur.classList.add("is-active");
        }
      }
      stepper(f.body, kolom, paint);
      note(f.body, icon("info") + " " + caption);
      return f.fig;
    };
  }
  BUILDERS["tabel-horner-beranimasi"] =
    hornerAnimBuilder("Irama: <b>turun</b> → <b>kali k</b> → <b>jumlah</b>. Sel terakhir adalah sisa, dan nilainya sama dengan $f(k)$.");
  BUILDERS["skema-horner-kino"] =
    hornerAnimBuilder("Tiap koefisien hasil menyumbang dua nilai ke bawah: dikali $-b$ (geser 1 kolom) dan dikali $-c$ (geser 2 kolom). Dua sel terakhir membentuk sisa $rx+s$.");

  /* --- 8 & 17. Bagan alir keputusan --------------------------------- *
   * Dari tabel dua/tiga kolom: kolom pertama = pertanyaan/keadaan,
   * kolom berikutnya = jawabannya. Pengguna memilih keadaan, jalurnya
   * menyala menuju alat/metode beserta catatannya. */
  function decisionBuilder(labelKiri) {
    return function (slot, ctx) {
      var tbl = nextTable(slot);
      if (!tbl) return null;
      var rows = tableRows(tbl);
      if (rows.length < 2 || rows[0].length < 2) return null;
      var head = headText(tbl);
      var f = figure(ctx.name, "git-branch");
      place(slot, f.fig);

      var wrap = el("div", "v-flow");
      var kiri = el("div", "v-flow-col");
      kiri.appendChild(el("h4", "v-flow-h", esc(head[0] || labelKiri)));
      var kanan = el("div", "v-flow-out");
      var kosong = el("p", "v-flow-empty", icon("arrow-right") + " Pilih salah satu di kiri.");
      kanan.appendChild(kosong);
      wrap.appendChild(kiri); wrap.appendChild(kanan);
      f.stage.appendChild(wrap);

      var opsi = rows.map(function (tds, i) {
        var b = el("button", "v-flow-opt");
        b.type = "button";
        b.innerHTML = tds[0].innerHTML;
        kiri.appendChild(b);
        return { b: b, tds: tds, i: i };
      });
      if (window.MR) MR.render(kiri);
      if (tbl.parentNode) tbl.parentNode.removeChild(tbl);

      opsi.forEach(function (o) {
        o.b.addEventListener("click", function () {
          opsi.forEach(function (x) { x.b.classList.toggle("is-on", x === o); });
          kanan.innerHTML = "";
          for (var c = 1; c < o.tds.length; c++) {
            var box = el("div", "v-flow-res" + (c === 1 ? " is-main" : ""));
            box.appendChild(el("span", "v-flow-lab", esc(head[c] || "")));
            var v = el("div", "v-flow-val", o.tds[c].innerHTML);
            box.appendChild(v);
            kanan.appendChild(box);
          }
          if (window.MR) MR.render(kanan);
          if (window.Icons) Icons.hydrate(kanan);
          if (window.SFX) SFX.play("pop");
        });
      });
      return f.fig;
    };
  }
  BUILDERS["bagan-alir-pemilihan-metode"] = decisionBuilder("Bentuk pembagi");
  BUILDERS["bagan-alir-keputusan"] = decisionBuilder("Yang diminta");

  /* --- 9, 10, 13. Pengungkapan bertahap ----------------------------- *
   * Paragraf & rumus sesudah slot ditampilkan satu per satu. Pada
   * pembuktian, jangkar hl-1 (faktor yang menjadi nol) dipudarkan pada
   * langkah terakhir sehingga hanya S yang tersisa. */
  function revealBuilder(iconName, opts) {
    opts = opts || {};
    return function (slot, ctx) {
      var ambil = [];
      sibs(slot, "next").forEach(function (e) {
        if (ambil.length >= (opts.max || 6)) return;
        if (e.tagName === "H3" || e.tagName === "H2" || e.tagName === "HR") return;
        if (e.classList && (e.classList.contains("activity-slot") ||
            e.classList.contains("quiz-slot") || e.classList.contains("visual-slot"))) return;
        if (e.tagName === "P" || e.classList.contains("m-block") ||
            e.tagName === "BLOCKQUOTE" || e.classList.contains("htab-wrap")) ambil.push(e);
      });
      // hentikan di elemen pertama sesudah judul contoh
      if (ambil.length < 2) return null;
      var f = figure(ctx.name, iconName);
      place(slot, f.fig);
      var kartu = ambil.map(function (e) {
        var c = el("div", "v-step-card");
        c.appendChild(e);
        f.stage.appendChild(c);
        return c;
      });
      if (window.MR) MR.render(f.stage);
      if (window.Icons) Icons.hydrate(f.stage);

      function paint(step) {
        kartu.forEach(function (c, i) { c.classList.toggle("is-on", i < step); });
        if (opts.fadeHl) {
          var fade = step >= kartu.length;
          f.stage.querySelectorAll("." + opts.fadeHl).forEach(function (n) {
            n.classList.toggle("v-faded", fade);
          });
        }
      }
      stepper(f.body, kartu.length, paint);
      return f.fig;
    };
  }
  BUILDERS["pembuktian-bertahap"] = revealBuilder("flask-conical", { fadeHl: "hl-1", max: 5 });
  BUILDERS["sistem-dua-persamaan"] = revealBuilder("equal", { max: 5 });
  BUILDERS["pengupasan-faktor"] = revealBuilder("layers", { max: 6 });

  /* --- 11. Rantai kesetaraan (Bab 04) -------------------------------- *
   * Rumus memuat tiga pernyataan setara pada jangkar hl-1/2/3. Ditampilkan
   * sebagai segitiga; menyentuh satu simpul menyalakan dua lainnya. */
  BUILDERS["rantai-kesetaraan"] = function (slot, ctx) {
    var m = mathBlocks(slot, 1, "next")[0];
    if (!m) return null;
    var tmp = el("div", "");
    tmp.appendChild(m);
    if (window.MR) MR.render(tmp);
    var teks = ["hl-1", "hl-2", "hl-3"].map(function (k) {
      var n = tmp.querySelector("." + k);
      if (!n) return null;
      var a = n.querySelector("annotation");
      return a ? a.textContent : n.textContent;
    });
    if (teks.some(function (t) { return !t; })) return null;

    var f = figure(ctx.name, "git-branch");
    place(slot, f.fig);
    var tri = el("div", "v-tri");
    f.stage.appendChild(tri);
    var simpul = teks.map(function (t, i) {
      var b = el("button", "v-tri-node n" + (i + 1));
      b.type = "button";
      b.innerHTML = window.MR ? MR.M(t, false) : esc(t);
      tri.appendChild(b);
      return b;
    });
    if (window.MR) MR.render(tri);
    var ket = el("p", "vfig-note", "Ketuk salah satu simpul — dua simpul lain ikut menyala karena ketiganya setara.");
    f.body.appendChild(ket);
    simpul.forEach(function (b) {
      b.addEventListener("click", function () {
        var nyala = !b.classList.contains("is-on");
        simpul.forEach(function (x) { x.classList.toggle("is-on", nyala); });
        tri.classList.toggle("is-on", nyala);
        if (window.SFX) SFX.play("pop");
      });
    });
    return f.fig;
  };

  /* --- 12. Daftar kandidat akar (Bab 04) ---------------------------- *
   * Polinomial dan daftar kandidat dibaca dari rumus di sekitar slot;
   * f(kandidat) DIHITUNG, bukan dihafal. */
  BUILDERS["daftar-kandidat-akar"] = function (slot, ctx) {
    var next = sibs(slot, "next");
    var poly = null, kandidat = null;
    for (var i = 0; i < next.length && (!poly || !kandidat); i++) {
      var ms = next[i].classList && next[i].classList.contains("m")
        ? [next[i]] : [].slice.call(next[i].querySelectorAll ? next[i].querySelectorAll(".m") : []);
      for (var j = 0; j < ms.length; j++) {
        var tex = ms[j].dataset.tex || "";
        if (!poly) {
          var mm = /f\(x\)\s*=\s*([^=]+)$/.exec(tex.replace(/\\,/g, ""));
          if (mm) { var c = polyFromTex(mm[1]); if (c) poly = c; }
        }
        if (!kandidat && /\\pm/.test(tex)) {
          var nums = (tex.match(/\\pm\s*(\d+)/g) || []).map(function (s) {
            return Number(s.replace(/\\pm\s*/, ""));
          });
          if (nums.length >= 3) kandidat = nums;
        }
      }
    }
    if (!poly || !kandidat) return null;

    var f = figure(ctx.name, "list-checks");
    place(slot, f.fig);
    note(f.body, icon("info") + " Ketuk kandidat; nilai " +
      (window.MR ? MR.M("f(x)", false) : "f(x)") + " dihitung langsung oleh aplikasi.");
    var bar = el("div", "v-cands");
    f.stage.appendChild(bar);
    var hasil = el("div", "v-cand-out");
    f.stage.appendChild(hasil);

    var semua = [];
    kandidat.forEach(function (n) { semua.push(-n); semua.push(n); });
    semua.sort(function (a, b) { return a - b; });
    function evalPoly(c, x) {
      var v = 0;
      for (var i = 0; i < c.length; i++) v = v * x + c[i];
      return v;
    }
    semua.forEach(function (x) {
      var b = el("button", "v-cand", (x > 0 ? "+" : "") + x);
      b.type = "button";
      b.addEventListener("click", function () {
        var v = evalPoly(poly, x);
        var akar = Math.abs(v) < 1e-9;
        b.classList.add(akar ? "is-root" : "is-dim");
        b.disabled = true;
        hasil.innerHTML = "";
        var row = el("div", "v-cand-res " + (akar ? "is-root" : ""));
        row.innerHTML = (akar ? icon("circle-check") : icon("circle-x")) +
          (window.MR ? MR.M("f(" + x + ")=" + fmtNum(v), false) : "f(" + x + ")=" + v) +
          "<span>" + (akar ? "akar ditemukan" : "bukan akar") + "</span>";
        hasil.appendChild(row);
        if (window.MR) MR.render(hasil);
        if (window.Icons) Icons.hydrate(hasil);
        if (window.SFX) SFX.play(akar ? "correct" : "pop");
      });
      bar.appendChild(b);
    });
    return f.fig;
  };

  /* --- 15. Peta ekspresi simetris (Bab 05) -------------------------- *
   * Rumus-rumus SEBELUM slot berbentuk "target = ungkapan dalam jumlah &
   * hasil kali". Dua kotak sumber ditampilkan tetap; memilih target
   * memunculkan rumus perantaranya. */
  BUILDERS["peta-ekspresi-simetris"] = function (slot, ctx) {
    var ms = mathBlocks(slot, 4, "prev");
    var item = [];
    ms.forEach(function (m) {
      var tex = m.dataset.tex || "";
      var i = tex.indexOf("=");
      if (i > 0) item.push({ target: tex.slice(0, i).trim(), rumus: tex.slice(i + 1).trim(), el: m });
    });
    if (item.length < 2) return null;

    var f = figure(ctx.name, "map");
    place(slot, f.fig);
    var wrap = el("div", "v-sym");
    var src = el("div", "v-sym-src");
    ["x_1+x_2", "x_1x_2"].forEach(function (t, i) {
      var b = el("div", "v-sym-box " + (i ? "hl-2" : "hl-1"));
      b.appendChild(el("span", "v-sym-lab", i ? "hasil kali akar" : "jumlah akar"));
      var v = el("span", "");
      v.innerHTML = window.MR ? MR.M(t, false) : t;
      b.appendChild(v);
      src.appendChild(b);
    });
    var pilih = el("div", "v-sym-targets");
    var out = el("div", "v-sym-out");
    out.innerHTML = '<p class="v-flow-empty">Pilih salah satu ekspresi.</p>';
    wrap.appendChild(src); wrap.appendChild(pilih); wrap.appendChild(out);
    f.stage.appendChild(wrap);

    item.forEach(function (it) {
      var b = el("button", "v-sym-target");
      b.type = "button";
      b.innerHTML = window.MR ? MR.M(it.target, false) : it.target;
      b.addEventListener("click", function () {
        pilih.querySelectorAll(".v-sym-target").forEach(function (x) {
          x.classList.toggle("is-on", x === b);
        });
        src.querySelectorAll(".v-sym-box").forEach(function (x) { x.classList.add("is-on"); });
        out.innerHTML = "";
        var row = el("div", "v-sym-formula");
        row.innerHTML = window.MR ? MR.M(it.target + "=" + it.rumus, true) : it.target + "=" + it.rumus;
        out.appendChild(row);
        if (window.MR) MR.render(out);
        if (window.SFX) SFX.play("pop");
      });
      pilih.appendChild(b);
      if (it.el.parentNode) it.el.parentNode.removeChild(it.el);
    });
    if (window.MR) MR.render(wrap);
    note(f.body, icon("info") + " Akar sesungguhnya tidak pernah dihitung — cukup jumlah dan hasil kalinya.");
    return f.fig;
  };

  /* --- 16. Pergeseran akar (Bab 05) -------------------------------- *
   * Tabel "akar baru | substitusi" menjadi garis bilangan: memilih baris
   * menggeser akar dan menampilkan substitusi yang bersesuaian, sehingga
   * arah geser dan arah substitusi terlihat berlawanan. */
  BUILDERS["pergeseran-akar"] = function (slot, ctx) {
    var tbl = nextTable(slot);
    if (!tbl) return null;
    var rows = tableRows(tbl);
    if (rows.length < 2) return null;
    var f = figure(ctx.name, "milestone");
    place(slot, f.fig);

    var AKAR = [2, 3];                     // akar contoh pada konten Bab 05
    var line = el("div", "v-line");
    var track = el("div", "v-line-track");
    for (var t = -2; t <= 8; t++) {
      var tick = el("span", "v-line-tick");
      tick.style.left = ((t + 2) / 10 * 100) + "%";
      tick.dataset.v = t;
      if (t % 1 === 0) tick.appendChild(el("i", "v-line-num", String(t)));
      track.appendChild(tick);
    }
    var dots = AKAR.map(function (a) {
      var d = el("span", "v-line-dot");
      d.dataset.base = a;
      track.appendChild(d);
      return d;
    });
    line.appendChild(track);
    f.stage.appendChild(line);
    var subst = el("div", "v-subst");
    f.stage.appendChild(subst);

    function taruh(geser, mode) {
      dots.forEach(function (d) {
        var b = Number(d.dataset.base);
        var v = mode === "kali" ? b * geser : (mode === "neg" ? -b : b + geser);
        d.style.left = ((v + 2) / 10 * 100) + "%";
        d.title = String(v);
        d.textContent = String(v);
      });
    }
    taruh(0, "geser");

    var pilih = el("div", "v-line-opts");
    f.body.appendChild(pilih);
    rows.forEach(function (tds) {
      var b = el("button", "v-flow-opt");
      b.type = "button";
      b.innerHTML = tds[0].innerHTML;
      b.addEventListener("click", function () {
        pilih.querySelectorAll("button").forEach(function (x) {
          x.classList.toggle("is-on", x === b);
        });
        var teks = tds[0].textContent;
        var num = (teks.match(/-?\d+/) || [])[0];
        var k = num ? Number(num) : 2;      // "k" simbolik → pakai 2 agar terlihat
        if (/kebalikan/i.test(teks)) taruh(0, "geser");
        else if (/×\s*\(-1\)|\(-1\)/.test(teks)) taruh(0, "neg");
        else if (/×/.test(teks)) taruh(k || 2, "kali");
        else if (/-\s*k|−\s*k/.test(teks)) taruh(-(k || 2), "geser");
        else taruh(k || 2, "geser");
        subst.innerHTML = '<span class="v-sym-lab">substitusi</span>' + tds[1].innerHTML;
        if (window.MR) MR.render(subst);
        if (window.SFX) SFX.play("pop");
      });
      pilih.appendChild(b);
    });
    if (window.MR) MR.render(pilih);
    if (tbl.parentNode) tbl.parentNode.removeChild(tbl);
    note(f.body, icon("info") + " Perhatikan: akar bergeser ke kanan, tetapi substitusinya justru " +
      (window.MR ? MR.M("x \\to x-k", false) : "x → x−k") + " — arahnya berlawanan.");
    return f.fig;
  };

  /* --- 18. Penyorot kata kunci (Bab 06) ---------------------------- *
   * Tabel "kata kunci | konsep | alat" menjadi deretan chip; menyentuh chip
   * memunculkan gelembung berisi konsep dan alatnya. */
  BUILDERS["penyorot-kata-kunci"] = function (slot, ctx) {
    var tbl = nextTable(slot);
    if (!tbl) return null;
    var rows = tableRows(tbl);
    if (rows.length < 2 || rows[0].length < 3) return null;
    var head = headText(tbl);
    var f = figure(ctx.name, "lightbulb");
    place(slot, f.fig);
    var bar = el("div", "v-keys");
    f.stage.appendChild(bar);
    var bubble = el("div", "v-bubble");
    bubble.innerHTML = '<p class="v-flow-empty">Ketuk sebuah kata kunci.</p>';
    f.stage.appendChild(bubble);

    rows.forEach(function (tds) {
      var b = el("button", "v-key");
      b.type = "button";
      b.innerHTML = tds[0].innerHTML;
      b.addEventListener("click", function () {
        bar.querySelectorAll(".v-key").forEach(function (x) {
          x.classList.toggle("is-on", x === b);
        });
        bubble.innerHTML =
          '<div class="v-bubble-row"><span class="v-sym-lab">' + esc(head[1] || "Konsep") +
            '</span><div>' + tds[1].innerHTML + "</div></div>" +
          '<div class="v-bubble-row"><span class="v-sym-lab">' + esc(head[2] || "Alat") +
            '</span><div>' + tds[2].innerHTML + "</div></div>";
        if (window.MR) MR.render(bubble);
        if (window.SFX) SFX.play("pop");
      });
      bar.appendChild(b);
    });
    if (window.MR) MR.render(bar);
    if (tbl.parentNode) tbl.parentNode.removeChild(tbl);
    return f.fig;
  };

  /* --- 19. Studi kasus bertahap (Bab 06) --------------------------- *
   * Empat paragraf "**Studi kasus N — …**" menjadi kartu yang dapat dibuka. */
  BUILDERS["studi-kasus-bertahap"] = function (slot, ctx) {
    var paras = boldParas(slot, /Studi kasus/i, 6);
    if (paras.length < 2) return null;
    var f = figure(ctx.name, "clipboard-list");
    place(slot, f.fig);
    var kisi = el("div", "v-cases");
    f.stage.appendChild(kisi);
    paras.forEach(function (p) {
      var card = el("div", "v-case");
      var b = el("button", "v-case-head", icon("chevron-right") + "<span>" + esc(p.judul) + "</span>");
      b.type = "button";
      var body = el("div", "v-case-body");
      body.appendChild(p.el);
      // judul di dalam paragraf sudah terwakili tombol
      var strong = p.el.querySelector("strong");
      if (strong) strong.parentNode.removeChild(strong);
      card.appendChild(b); card.appendChild(body);
      kisi.appendChild(card);
      b.addEventListener("click", function () {
        var buka = !card.classList.contains("is-open");
        card.classList.toggle("is-open", buka);
        b.setAttribute("aria-expanded", String(buka));
        if (window.SFX) SFX.play("pop");
      });
      b.setAttribute("aria-expanded", "false");
    });
    if (window.MR) MR.render(kisi);
    if (window.Icons) Icons.hydrate(kisi);
    return f.fig;
  };

  /* --- 20. Radar jebakan (Bab 06) ---------------------------------- *
   * Tabel "jebakan | cara aman" menjadi kartu yang dapat dibalik. Setelah
   * seluruh kartu dibuka, muncul kuis singkat "temukan jebakannya". */
  BUILDERS["radar-jebakan"] = function (slot, ctx) {
    var tbl = nextTable(slot);
    if (!tbl) return null;
    var rows = tableRows(tbl);
    if (rows.length < 3) return null;
    var f = figure(ctx.name, "triangle-alert");
    place(slot, f.fig);
    var kisi = el("div", "v-traps");
    f.stage.appendChild(kisi);
    var dibuka = 0;
    var kartu = rows.map(function (tds, i) {
      var c = el("button", "v-trap");
      c.type = "button";
      c.innerHTML =
        '<span class="v-trap-face v-trap-front">' + icon("triangle-alert") +
          "<span>" + tds[0].innerHTML + "</span></span>" +
        '<span class="v-trap-face v-trap-back">' + icon("circle-check") +
          "<span>" + tds[1].innerHTML + "</span></span>";
      c.addEventListener("click", function () {
        var balik = !c.classList.contains("is-flipped");
        c.classList.toggle("is-flipped", balik);
        if (balik && !c.dataset.seen) { c.dataset.seen = "1"; dibuka++; cekKuis(); }
        if (window.SFX) SFX.play("pop");
      });
      kisi.appendChild(c);
      return { el: c, tds: tds, i: i };
    });
    if (window.MR) MR.render(kisi);
    if (window.Icons) Icons.hydrate(kisi);
    if (tbl.parentNode) tbl.parentNode.removeChild(tbl);

    var kuis = el("div", "v-trapquiz");
    kuis.hidden = true;
    f.body.appendChild(kuis);
    function cekKuis() {
      if (dibuka < kartu.length || !kuis.hidden) return;
      /* Kuis dibentuk dari isi tabel itu sendiri: satu "cara aman" dipilih
         acak, peserta menentukan jebakan mana yang cocok. Tidak ada soal
         yang dikarang di luar konten. */
      var benar = kartu[Math.floor(Math.random() * kartu.length)];
      var opsi = shuffle(kartu).slice(0, Math.min(4, kartu.length));
      if (opsi.indexOf(benar) < 0) opsi[0] = benar;
      opsi = shuffle(opsi);
      kuis.hidden = false;
      kuis.innerHTML = '<div class="v-trapquiz-h">' + icon("circle-question-mark") +
        " Temukan jebakannya — cara aman ini mengatasi jebakan yang mana?</div>" +
        '<div class="v-trapquiz-safe">' + benar.tds[1].innerHTML + "</div>";
      var box = el("div", "v-trapquiz-opts");
      opsi.forEach(function (o) {
        var b = el("button", "v-flow-opt");
        b.type = "button";
        b.innerHTML = o.tds[0].innerHTML;
        b.addEventListener("click", function () {
          var ok = o === benar;
          b.classList.add(ok ? "is-ok" : "is-no");
          box.querySelectorAll("button").forEach(function (x) { x.disabled = true; });
          var fb = el("p", "v-trapquiz-fb " + (ok ? "is-ok" : "is-no"),
            (ok ? icon("circle-check") + " Tepat." : icon("circle-x") + " Belum tepat."));
          kuis.appendChild(fb);
          if (window.Icons) Icons.hydrate(fb);
          if (window.SFX) SFX.play(ok ? "correct" : "pop");
        });
        box.appendChild(b);
      });
      kuis.appendChild(box);
      if (window.MR) MR.render(kuis);
      if (window.Icons) Icons.hydrate(kuis);
    }
    note(f.body, icon("info") + " Ketuk kartu untuk membaliknya. Setelah semua dibalik, muncul kuis singkat.");
    return f.fig;
  };

  function shuffle(a) {
    a = a.slice();
    for (var i = a.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1)), t = a[i]; a[i] = a[j]; a[j] = t;
    }
    return a;
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
