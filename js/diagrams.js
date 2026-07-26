/* =========================================================================
   diagrams.js — Mengubah bagan ASCII di berkas .md menjadi KOMPONEN
   INTERAKTIF (kartu/diagram), sesuai direktif pada marker COMPONENT:

     "Peta konsep WAJIB dirender sebagai kartu/diagram interaktif …
      blok teks ASCII HANYA rujukan struktur dan TIDAK boleh ditampilkan
      sebagai teks mentah kepada pengguna."

   Konten tetap menjadi sumber kebenaran: struktur diagram DIBACA dari
   blok ASCII (dan dari manifest untuk peta bab), bukan ditulis ulang.

   Jenis yang dikenali:
     outline   — daftar bercabang "├─ 1. Label ─► detail"   (peta konsep bab)
     flow      — outline bertingkat (bagan alir keputusan, Bab 06)
     roadmap   — peta bab 01→07 (Bab 00) → kartu bab yang dapat diklik
     columns   — peta konsep menyeluruh berkolom (Bab 07)
     horner    — skema Horner numerik → tabel rapi

   Ekspor: window.Diagrams { build }
   ========================================================================= */
(function () {
  "use strict";

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function icon(n) { return window.Icons ? Icons.svg(n) : ""; }
  var BOX = /[│├└┌┐┘─┬┴┼▼▲►◄▶]/g;

  /* ------------------------------------------------------------------ *
   * Deteksi jenis
   * ------------------------------------------------------------------ */
  function detect(text, marker) {
    var lines = text.split("\n").filter(function (l) { return l.trim(); });
    var m = (marker || "").toLowerCase();

    if (/decision flow/.test(m)) return "flow";
    if (/concept map full/.test(m)) return "columns";
    if (/concept map interactive/.test(m)) return "roadmap";
    if (/concept map/.test(m)) return "outline";

    // tanpa marker: tebak dari bentuk
    if (lines.filter(function (l) { return /[├└]─/.test(l); }).length >= 3) {
      return /^\s*│\s{2,}[├└]/m.test(text) ? "flow" : "outline";
    }
    if (/\|\s*-?\d/.test(text) && /│/.test(text)) return "horner";
    return null;
  }

  /* ------------------------------------------------------------------ *
   * OUTLINE / FLOW  — "├─ 1. Label   ─► detail"
   * ------------------------------------------------------------------ */
  function parseOutline(text) {
    var lines = text.split("\n");
    var title = "", items = [], cur = null;

    lines.forEach(function (raw) {
      if (!raw.trim()) return;
      var isBranch = /[├└]─/.test(raw);

      if (!isBranch) {
        // baris lanjutan milik cabang terakhir (mis. "│   → Vieta …")
        var cont = raw.replace(/^[\s│]*/, "").trim();
        if (cont && cur && /^[→►]/.test(cont)) {
          cur.detail = (cur.detail ? cur.detail + " " : "") + cont.replace(/^[→►]\s*/, "");
          return;
        }
        // judul = baris teks pertama sebelum cabang mana pun
        if (!items.length && !title) {
          var t = raw.replace(BOX, "").trim();
          if (t) title = t;
        }
        return;
      }

      // kedalaman diukur dari posisi karakter cabang
      var pos = raw.search(/[├└]─/);
      var depth = pos <= 1 ? 0 : 1;
      var body = raw.slice(pos + 2).replace(/^─*/, "").trim();

      // pisahkan label dan keterangan
      var label = body, detail = "";
      var sep = body.match(/\s*(?:─+[►>]|[→►])\s*/);
      if (sep) {
        label = body.slice(0, sep.index).trim();
        detail = body.slice(sep.index + sep[0].length).trim();
      } else {
        var gap = body.match(/\s{2,}/);
        if (gap) { label = body.slice(0, gap.index).trim(); detail = body.slice(gap.index).trim(); }
      }

      var num = null;
      var nm = label.match(/^(\d+)\.\s*/);
      if (nm) { num = nm[1]; label = label.slice(nm[0].length); }

      var item = { num: num, label: label, detail: detail, depth: depth, children: [] };
      if (depth === 0) { items.push(item); cur = item; }
      else if (items.length) { items[items.length - 1].children.push(item); cur = item; }
    });

    return { title: title, items: items };
  }

  function renderOutline(d, kind) {
    var isFlow = kind === "flow";
    var h = '<div class="cmap ' + (isFlow ? "cmap-flow" : "cmap-outline") + '">' +
      '<div class="cmap-head">' + icon(isFlow ? "shuffle" : "map") +
      "<span>" + esc(d.title || (isFlow ? "Bagan Alir" : "Peta Konsep")) + "</span></div>" +
      '<ol class="cmap-list">';

    d.items.forEach(function (it, i) {
      var hasKids = it.children.length > 0;
      h += '<li class="cmap-item' + (hasKids ? " has-kids" : "") + '">' +
        '<button class="cmap-node" type="button"' +
          (hasKids ? ' aria-expanded="false"' : '') +
          ' data-label="' + esc(it.label) + '">' +
          '<span class="cmap-num">' + esc(it.num || (i + 1)) + "</span>" +
          '<span class="cmap-text">' +
            '<span class="cmap-label">' + esc(it.label) + "</span>" +
            (it.detail ? '<span class="cmap-detail">' + esc(it.detail) + "</span>" : "") +
          "</span>" +
          (hasKids ? '<span class="cmap-caret">' + icon("chevron-down") + "</span>"
                   : '<span class="cmap-go">' + icon("arrow-right") + "</span>") +
        "</button>";
      if (hasKids) {
        h += '<ul class="cmap-kids">';
        it.children.forEach(function (k) {
          h += '<li><span class="cmap-kid-label">' + esc(k.label) + "</span>" +
            (k.detail ? '<span class="cmap-kid-detail">' + icon("arrow-right") +
                        "<span>" + esc(k.detail) + "</span></span>" : "") + "</li>";
        });
        h += "</ul>";
      }
      h += "</li>";
    });
    return h + "</ol></div>";
  }

  /* ------------------------------------------------------------------ *
   * ROADMAP — peta bab (Bab 00). Struktur diambil dari MANIFEST agar
   * judul & tautan selalu sinkron dengan navigasi aplikasi.
   * ------------------------------------------------------------------ */
  function renderRoadmap() {
    if (!window.Content || !Content.getManifest()) return null;
    var chs = Content.chapters().filter(function (c) { return c.order >= 1; });
    if (chs.length < 3) return null;

    var h = '<div class="cmap cmap-road">' +
      '<div class="cmap-head">' + icon("map") + "<span>Peta Materi Polinomial</span></div>" +
      '<div class="road-root">' + icon("graduation-cap") + "<span>Polinomial (Suku Banyak)</span></div>" +
      '<ol class="road-track">';

    chs.forEach(function (c, i) {
      var read = window.Store && Store.isRead(c.id);
      h += '<li class="road-step">' +
        '<button class="road-card' + (read ? " is-read" : "") + '" type="button" data-href="bab/' + esc(c.slug) + '">' +
          '<span class="road-num">' + String(c.order).padStart(2, "0") + "</span>" +
          '<span class="road-title">' + esc(c.title) + "</span>" +
          ((c.competencies || []).length
            ? '<span class="road-komp">' + esc(c.competencies.join(" · ")) + "</span>" : "") +
          '<span class="road-state">' +
            (read ? icon("circle-check") + "<small>Selesai</small>"
                  : icon("circle-play") + "<small>Buka</small>") +
          "</span>" +
        "</button>" +
        (i < chs.length - 1 ? '<span class="road-arrow">' + icon("arrow-right") + "</span>" : "") +
        "</li>";
    });
    return h + "</ol></div>";
  }

  /* ------------------------------------------------------------------ *
   * COLUMNS — peta konsep menyeluruh (Bab 07), disusun berdasarkan
   * posisi kolom judul pada teks ASCII.
   * ------------------------------------------------------------------ */
  /**
   * Peta konsep berkolom disusun dengan spasi, bukan pemisah tegas. Karena itu
   * tiap baris dipecah pada rentang >=2 spasi (menghasilkan token utuh, tidak
   * terpotong di tengah kata), lalu tiap token ditempatkan ke kolom yang
   * TITIK JANGKARNYA paling dekat. Cara ini tahan terhadap kolom kosong dan
   * lebar kolom yang tidak seragam.
   */
  function tokenize(line) {
    var out = [], re = /\S+(?:[ ]\S+)*?(?=\s{2,}|$)/g, m;
    while ((m = re.exec(line))) {
      if (m[0].trim()) out.push({ text: m[0].trim(), at: m.index });
      if (re.lastIndex === m.index) re.lastIndex++;
    }
    return out;
  }

  function parseColumns(text) {
    var lines = text.split("\n");
    var root = "", headIdx = -1, cols = [];

    for (var i = 0; i < lines.length; i++) {
      var L = lines[i];
      if (!L.trim()) continue;
      var bare = L.replace(BOX, "").trim();
      if (!root && bare && !/[│├└┌┐┘─┬┼]/.test(L)) { root = bare; continue; }
      // baris judul kolom = >=3 token HURUF BESAR
      var toks = tokenize(L.replace(BOX, " "));
      var caps = toks.filter(function (t) { return /^[A-Z][A-Z&/. ]*$/.test(t.text); });
      if (caps.length >= 3 && headIdx < 0) {
        headIdx = i;
        caps.forEach(function (t) { cols.push({ at: t.at, title: t.text, items: [] }); });
        break;
      }
    }
    if (headIdx < 0 || cols.length < 2) return null;

    function nearest(at) {
      var best = 0, dist = Infinity;
      cols.forEach(function (c, k) {
        var d = Math.abs(c.at - at);
        if (d < dist) { dist = d; best = k; }
      });
      return best;
    }

    var tail = [];
    for (var j = headIdx + 1; j < lines.length; j++) {
      var line = lines[j];
      if (!line.trim()) continue;
      var plain = line.replace(BOX, " ");
      if (!plain.trim()) continue;
      var tk = tokenize(plain);
      if (!tk.length) continue;

      if (tk.length >= 3) {
        // Sebagian baris sumber hanya dipisah SATU spasi antar kolom
        // (mis. "pilih metode faktorisasi"), sehingga dua kolom menyatu
        // menjadi satu token. Token yang membentang melewati jangkar kolom
        // berikutnya dipecah pada spasi terdekat dengan jangkar itu.
        var parts = [];
        tk.forEach(function (t) {
          var seg = { text: t.text, at: t.at };
          for (var c = 0; c < cols.length; c++) {
            var anchor = cols[c].at;
            if (anchor > seg.at + 1 && anchor < seg.at + seg.text.length - 1) {
              var rel = anchor - seg.at, best = -1, dist = Infinity;
              for (var q = 0; q < seg.text.length; q++) {
                if (seg.text[q] === " " && Math.abs(q - rel) < dist) { dist = Math.abs(q - rel); best = q; }
              }
              if (best > 0 && dist <= 6) {
                parts.push({ text: seg.text.slice(0, best).trim(), at: seg.at });
                seg = { text: seg.text.slice(best + 1).trim(), at: seg.at + best + 1 };
              }
            }
          }
          if (seg.text) parts.push(seg);
        });

        parts.forEach(function (t) {
          var k = nearest(t.at);
          // baris kedua judul (mis. "DASAR", "& NILAI") digabung ke judulnya
          if (/^[A-Z&/. ]+$/.test(t.text) && cols[k].items.length === 0) {
            cols[k].title = (cols[k].title + " " + t.text).replace(/\s+/g, " ").trim();
          } else {
            cols[k].items.push(t.text);
          }
        });
      } else {
        // baris sintesis di bagian bawah bagan
        tk.forEach(function (t) { if (t.text.length > 3) tail.push(t.text); });
      }
    }
    return { root: root, cols: cols, tail: tail };
  }

  function renderColumns(d) {
    if (!d) return null;
    var h = '<div class="cmap cmap-cols">' +
      '<div class="cmap-head">' + icon("map") + "<span>Peta Konsep Menyeluruh</span></div>";
    if (d.root) h += '<div class="road-root">' + icon("graduation-cap") + "<span>" + esc(d.root) + "</span></div>";
    h += '<div class="col-grid">';
    d.cols.forEach(function (c, i) {
      h += '<div class="col-card tone-' + (i % 5) + '">' +
        '<div class="col-title">' + esc(c.title) + "</div><ul>" +
        c.items.map(function (x) { return "<li>" + esc(x) + "</li>"; }).join("") +
        "</ul></div>";
    });
    h += "</div>";
    if (d.tail.length) {
      h += '<div class="col-synth">' + icon("sparkles") +
        "<div>" + d.tail.map(function (t) { return "<span>" + esc(t) + "</span>"; }).join("") + "</div></div>";
    }
    return h + "</div>";
  }

  /* ------------------------------------------------------------------ *
   * HORNER — skema numerik → tabel rapi (bukan monospace mentah)
   * ------------------------------------------------------------------ */
  function parseHorner(text) {
    var rows = [], note = "";
    text.split("\n").forEach(function (L) {
      if (!L.trim()) return;
      if (/^\s*\(/.test(L)) { note = L.trim(); return; }
      if (/^[\s│├└─┌┐┘|]+$/.test(L)) return;               // garis pemisah
      var k = "";
      var km = L.match(/^\s*([^│]*?)\s*│/);
      if (km) k = km[1].trim();
      var body = L.indexOf("│") >= 0 ? L.slice(L.indexOf("│") + 1) : L;
      var tailNote = "";
      var tn = body.match(/←(.*)$/); if (tn) { tailNote = tn[1].trim(); body = body.slice(0, tn.index); }
      var cells = body.split(/\s+|(?=\|)/).map(function (s) { return s.trim(); }).filter(Boolean);
      if (!cells.length) return;
      rows.push({ k: k, cells: cells, note: tailNote });
    });
    return rows.length >= 2 ? { rows: rows, note: note } : null;
  }

  function renderHorner(d) {
    if (!d) return null;
    var h = '<div class="horner-card"><div class="cmap-head">' + icon("chart-line") +
      "<span>Skema Horner</span></div><div class=\"horner-scroll\"><table class=\"horner-tbl\"><tbody>";
    d.rows.forEach(function (r, i) {
      var isLast = i === d.rows.length - 1;
      h += '<tr class="' + (isLast ? "hn-result" : "") + '">' +
        '<th scope="row">' + esc(r.k) + "</th>";
      r.cells.forEach(function (c) {
        if (c === "|") { h += '<td class="hn-sep"></td>'; return; }
        h += "<td>" + esc(c) + "</td>";
      });
      h += (r.note ? '<td class="hn-note">' + esc(r.note) + "</td>" : "") + "</tr>";
    });
    h += "</tbody></table></div>";
    if (d.note) h += '<p class="hn-caption">' + esc(d.note) + "</p>";
    return h + "</div>";
  }

  /* ------------------------------------------------------------------ *
   * API
   * ------------------------------------------------------------------ */
  function build(text, marker) {
    var kind = detect(text, marker);
    if (!kind) return null;
    try {
      if (kind === "roadmap") {
        var r = renderRoadmap();
        if (r) return { html: r, kind: kind };
        kind = "outline";                       // cadangan bila manifest belum siap
      }
      if (kind === "columns") {
        var c = renderColumns(parseColumns(text));
        if (c) return { html: c, kind: kind };
        return null;
      }
      if (kind === "horner") {
        var hv = renderHorner(parseHorner(text));
        return hv ? { html: hv, kind: kind } : null;
      }
      var d = parseOutline(text);
      if (!d.items.length) return null;
      return { html: renderOutline(d, kind), kind: kind };
    } catch (e) {
      if (window.console) console.warn("[Diagrams] gagal membangun:", e);
      return null;                              // jatuh ke kartu ASCII
    }
  }

  /* Klik pada simpul peta konsep: buka sub-cabang, atau gulir ke bagian terkait. */
  document.addEventListener("click", function (e) {
    var node = e.target.closest && e.target.closest(".cmap-node");
    if (!node) return;
    var li = node.closest(".cmap-item");
    if (li && li.classList.contains("has-kids")) {
      var open = li.classList.toggle("is-open");
      node.setAttribute("aria-expanded", String(open));
      if (window.SFX) SFX.play("pop");
      return;
    }
    // cari heading yang paling cocok dengan label simpul
    var label = (node.dataset.label || "").toLowerCase();
    var words = label.replace(/[^a-z0-9\s]/g, " ").split(/\s+/).filter(function (w) { return w.length > 3; });
    if (!words.length) return;
    var best = null, bestScore = 0;
    document.querySelectorAll(".doc h2, .doc h3").forEach(function (h) {
      var t = h.textContent.toLowerCase();
      var score = words.filter(function (w) { return t.indexOf(w) >= 0; }).length;
      if (score > bestScore) { bestScore = score; best = h; }
    });
    if (best && bestScore >= 1) {
      best.scrollIntoView({ behavior: "smooth", block: "start" });
      best.classList.add("flash");
      setTimeout(function () { best.classList.remove("flash"); }, 1200);
      if (window.SFX) SFX.play("swoosh");
    }
  });

  window.Diagrams = { build: build, detect: detect, parseOutline: parseOutline };
})();
