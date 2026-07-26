/* =========================================================================
   markdown.js — Parser Markdown ringan khusus konten POLINOMIAL.
   Tanpa dependensi, 100% offline.

   Tugas wajib (sesuai spesifikasi konten):
     (a) ekstrak frontmatter YAML
     (b) intersep blok ```json  → data kuis (BUKAN code block)
     (c) pertahankan <details>/<summary> & marker <!-- COMPONENT: X -->
     (d) JANGAN merusak math $...$ / $$...$$

   Strategi anti-rusak: fence → math → komponen di-ekstrak jadi token
   sentinel (U+E000) SEBELUM markdown diparse, lalu dikembalikan di akhir.
   Math dikembalikan sebagai placeholder MR.M() agar dirender KaTeX oleh
   mathrender.js (pipeline yang sudah terbukti di app ini).

   Ekspor: window.MD { parse, parseFrontmatter, slugify }
   ========================================================================= */
(function () {
  "use strict";

  var S = "\uE000"; // sentinel (private-use area — mustahil muncul di konten)

  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }
  function escAttr(s) {
    return esc(s).replace(/"/g, "&quot;");
  }

  /* ------------------------------------------------------------------ *
   * 1) FRONTMATTER YAML (subset: skalar, array inline, list blok)
   * ------------------------------------------------------------------ */
  function unquote(s) {
    s = String(s).trim();
    if (/^".*"$/.test(s) || /^'.*'$/.test(s)) return s.slice(1, -1);
    return s;
  }
  function parseScalar(v) {
    v = v.trim();
    if (/^\[.*\]$/.test(v)) {
      return v.slice(1, -1).split(",").map(unquote).filter(function (x) { return x !== ""; });
    }
    if (v === "true") return true;
    if (v === "false") return false;
    if (/^-?\d+(\.\d+)?$/.test(v)) return Number(v);
    return unquote(v);
  }
  function parseFrontmatter(text) {
    var m = /^---\r?\n([\s\S]*?)\r?\n---[ \t]*\r?\n?/.exec(text);
    if (!m) return { front: {}, body: text };
    var front = {}, curKey = null;
    m[1].split(/\r?\n/).forEach(function (line) {
      if (!line.trim()) return;
      var li = /^\s+-\s+(.*)$/.exec(line);
      if (li && curKey) {
        if (!Array.isArray(front[curKey])) front[curKey] = [];
        front[curKey].push(unquote(li[1]));
        return;
      }
      var kv = /^([A-Za-z0-9_-]+):\s*(.*)$/.exec(line);
      if (kv) {
        var k = kv[1], v = kv[2].trim();
        if (v === "") { front[k] = []; curKey = k; }
        else { front[k] = parseScalar(v); curKey = null; }
      }
    });
    return { front: front, body: text.slice(m[0].length) };
  }

  /* ------------------------------------------------------------------ *
   * 2) SLUGIFY (untuk id heading & daftar isi)
   * ------------------------------------------------------------------ */
  function slugify(s) {
    return String(s)
      .replace(new RegExp(S + "[A-Z]+\\d+" + S, "g"), "")  // buang token
      .replace(/[*_`#>]/g, "")
      .toLowerCase()
      .replace(/[^a-z0-9À-ɏ\s-]/g, "")           // buang emoji/simbol
      .trim()
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-")
      .replace(/^-|-$/g, "") || "bagian";
  }

  /* ------------------------------------------------------------------ *
   * 3) INLINE MARKDOWN
   *    Catatan: emphasis pakai '*' saja. '_' SENGAJA tidak didukung
   *    karena konten memakai garis isian "_______" dan subskrip a_n.
   * ------------------------------------------------------------------ */
  function inline(s) {
    s = s.replace(/`([^`]+)`/g, function (_, c) { return "<code>" + esc(c) + "</code>"; });
    s = s.replace(/!\[([^\]]*)\]\(([^)\s]+)\)/g, function (_, alt, src) {
      return '<img src="' + escAttr(src) + '" alt="' + escAttr(alt) + '" loading="lazy" />';
    });
    s = s.replace(/\[([^\]]+)\]\(([^)\s]+)\)/g, function (_, txt, href) {
      var ext = /^https?:/i.test(href);
      return '<a href="' + escAttr(href) + '"' + (ext ? ' target="_blank" rel="noopener"' : "") + ">" + txt + "</a>";
    });
    s = s.replace(/\*\*\*([^*]+)\*\*\*/g, "<strong><em>$1</em></strong>");
    s = s.replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>");
    s = s.replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>");
    s = s.replace(/~~([^~]+)~~/g, "<del>$1</del>");
    return s;
  }

  /* ------------------------------------------------------------------ *
   * 4) BLOCK MARKDOWN
   * ------------------------------------------------------------------ */
  var RE_TOKEN_LINE = new RegExp("^" + S + "(QUIZ|FENCE|COMP)(\\d+)" + S + "$");
  var RE_HTML_LINE = /^\s*<\/?(details|summary|div|section|article|figure|figcaption|table|thead|tbody|tr|td|th|p|span|br|img|iframe|video|audio|hr)\b/i;

  function isBlockStart(line) {
    return (
      RE_TOKEN_LINE.test(line.trim()) ||
      /^\s*(---|\*\*\*|___)\s*$/.test(line) ||
      /^#{1,6}\s+/.test(line) ||
      /^\s*>/.test(line) ||
      /^\s*\|/.test(line) ||
      /^(\s*)([-*+]|\d+[.)])\s+/.test(line) ||
      RE_HTML_LINE.test(line)
    );
  }

  function splitRow(line) {
    var t = line.trim().replace(/^\|/, "").replace(/\|$/, "");
    return t.split("|").map(function (c) { return c.trim(); });
  }

  function parseList(lines, i, ordered, headings) {
    var tag = ordered ? "ol" : "ul";
    var html = "<" + tag + ">";
    var base = /^(\s*)/.exec(lines[i])[1].length;
    while (i < lines.length) {
      var m = /^(\s*)([-*+]|\d+[.)])\s+([\s\S]*)$/.exec(lines[i]);
      if (!m) {
        // baris lanjutan (lazy continuation) milik item terakhir
        if (lines[i].trim() && !isBlockStart(lines[i]) && /<\/li>$/.test(html)) {
          html = html.replace(/<\/li>$/, "") + " " + inline(lines[i].trim()) + "</li>";
          i++; continue;
        }
        break;
      }
      var ind = m[1].length;
      if (ind < base) break;
      if (ind > base) {
        var sub = parseList(lines, i, /^\d/.test(m[2]), headings);
        html = html.replace(/<\/li>$/, "") + sub.html + "</li>";
        i = sub.i; continue;
      }
      if (/^\d/.test(m[2]) !== ordered) break;
      html += "<li>" + inline(m[3]) + "</li>";
      i++;
    }
    return { html: html + "</" + tag + ">", i: i };
  }

  function blocks(src, headings) {
    var lines = src.split(/\r?\n/), out = "", i = 0;
    while (i < lines.length) {
      var line = lines[i];
      if (!line.trim()) { i++; continue; }

      // token (kuis / fence / komponen)
      var tk = RE_TOKEN_LINE.exec(line.trim());
      if (tk) { out += S + tk[1] + tk[2] + S; i++; continue; }

      // garis horizontal
      if (/^\s*(---|\*\*\*|___)\s*$/.test(line)) { out += "<hr />"; i++; continue; }

      // heading
      var h = /^(#{1,6})\s+(.*)$/.exec(line);
      if (h) {
        var lv = h[1].length, txt = h[2].trim(), id = slugify(txt);
        if (headings && lv <= 3) headings.push({ level: lv, text: txt, id: id });
        out += "<h" + lv + ' id="' + escAttr(id) + '">' + inline(txt) + "</h" + lv + ">";
        i++; continue;
      }

      // HTML mentah (details/summary dll) — diteruskan apa adanya
      if (RE_HTML_LINE.test(line)) { out += line + "\n"; i++; continue; }

      // blockquote (rekursif)
      if (/^\s*>/.test(line)) {
        var bq = [];
        while (i < lines.length && /^\s*>/.test(lines[i])) {
          bq.push(lines[i].replace(/^\s*>[ \t]?/, "")); i++;
        }
        out += "<blockquote>" + blocks(bq.join("\n"), headings) + "</blockquote>";
        continue;
      }

      // tabel (butuh baris pemisah |---|---|)
      if (/^\s*\|/.test(line) && i + 1 < lines.length && /^\s*\|[\s:|-]+\|\s*$/.test(lines[i + 1])) {
        var head = splitRow(lines[i]);
        var align = splitRow(lines[i + 1]).map(function (c) {
          if (/^:.*:$/.test(c)) return "center";
          if (/:$/.test(c)) return "right";
          if (/^:/.test(c)) return "left";
          return "";
        });
        i += 2;
        var body = "";
        while (i < lines.length && /^\s*\|/.test(lines[i])) {
          body += "<tr>" + splitRow(lines[i]).map(function (c, k) {
            var a = align[k] ? ' style="text-align:' + align[k] + '"' : "";
            return "<td" + a + ">" + inline(c) + "</td>";
          }).join("") + "</tr>";
          i++;
        }
        out += '<div class="table-wrap"><table><thead><tr>' +
          head.map(function (c, k) {
            var a = align[k] ? ' style="text-align:' + align[k] + '"' : "";
            return "<th" + a + ">" + inline(c) + "</th>";
          }).join("") +
          "</tr></thead><tbody>" + body + "</tbody></table></div>";
        continue;
      }

      // daftar
      var li = /^(\s*)([-*+]|\d+[.)])\s+/.exec(line);
      if (li) {
        var r = parseList(lines, i, /^\d/.test(li[2]), headings);
        out += r.html; i = r.i; continue;
      }

      // paragraf
      var buf = [];
      while (i < lines.length && lines[i].trim() && !isBlockStart(lines[i])) { buf.push(lines[i]); i++; }
      if (buf.length) out += "<p>" + inline(buf.join("\n")) + "</p>";
      else i++;
    }
    return out;
  }

  /* ------------------------------------------------------------------ *
   * 5) PARSE UTAMA
   * ------------------------------------------------------------------ */
  function parse(raw) {
    var fm = parseFrontmatter(String(raw).replace(/\r\n/g, "\n"));
    var text = fm.body;
    var quizzes = [], fences = [], maths = [], components = [], headings = [];

    // (a) FENCE dulu — melindungi isi bagan ASCII & menangkap blok ```json
    text = text.replace(/```([A-Za-z0-9_-]*)[ \t]*\n([\s\S]*?)```/g, function (_, lang, code) {
      if ((lang || "").toLowerCase() === "json") {
        try {
          quizzes.push(JSON.parse(code));
          return "\n" + S + "QUIZ" + (quizzes.length - 1) + S + "\n";
        } catch (e) {
          if (window.console) console.warn("[MD] Blok JSON gagal diparse, ditampilkan sbg kode:", e.message);
        }
      }
      fences.push({ lang: lang || "", code: code.replace(/\s+$/, "") });
      return "\n" + S + "FENCE" + (fences.length - 1) + S + "\n";
    });

    // (b) MATH — display dulu, lalu inline (inline tak boleh lintas baris)
    text = text.replace(/\$\$([\s\S]+?)\$\$/g, function (_, tex) {
      maths.push({ tex: tex.trim(), block: true });
      return S + "M" + (maths.length - 1) + S;
    });
    text = text.replace(/\$([^$\n]+?)\$/g, function (_, tex) {
      maths.push({ tex: tex.trim(), block: false });
      return S + "M" + (maths.length - 1) + S;
    });

    // (c) MARKER KOMPONEN. Dua bentuk yang dipakai konten:
    //   1) <!-- COMPONENT: Nama -->  diikuti komentar keterangan terpisah
    //   2) <!-- COMPONENT: Nama
    //        DEVELOPER: perintah ... -->        (satu komentar, banyak baris)
    // Nama = teks pada baris pertama; sisanya menjadi catatan/direktif.
    text = text.replace(
      /<!--\s*COMPONENT:\s*([^\n>]*?)\s*(?:\n([\s\S]*?))?-->[ \t]*\n?(?:[ \t]*<!--([\s\S]*?)-->[ \t]*\n?)?/g,
      function (_, name, inlineNote, afterNote) {
        components.push({
          name: String(name).replace(/-+$/, "").trim(),
          note: [inlineNote, afterNote].filter(Boolean).join("\n").trim()
        });
        return "\n" + S + "COMP" + (components.length - 1) + S + "\n";
      }
    );

    // sisa komentar HTML dibuang
    text = text.replace(/<!--[\s\S]*?-->/g, "");

    // (d) markdown blok
    var html = blocks(text, headings);

    // (e) kembalikan token
    html = html.replace(new RegExp(S + "M(\\d+)" + S, "g"), function (_, n) {
      var m = maths[+n];
      return window.MR ? window.MR.M(m.tex, m.block)
        : '<span class="m' + (m.block ? " m-block" : "") + '" data-tex="' + escAttr(m.tex) + '"></span>';
    });
    html = html.replace(new RegExp(S + "FENCE(\\d+)" + S, "g"), function (_, n) {
      var f = fences[+n];
      return '<div class="pre-wrap"><pre class="ascii' + (f.lang ? " lang-" + escAttr(f.lang) : "") +
        '">' + esc(f.code) + "</pre></div>";
    });
    // Blok JSON dibedakan menjadi TIGA jenis (lihat interaction_schema di manifest):
    //   type:"activity"  → Latihan Interaktif (widget di tengah materi)
    //   type:"challenge" → Tantangan Akhir Bab (asesmen berwaktu)
    //   ada `set_id`     → set kuis / bank soal
    var activities = [], challenges = [], quizSets = [];
    html = html.replace(new RegExp(S + "QUIZ(\\d+)" + S, "g"), function (_, n) {
      var d = quizzes[+n] || {};
      if (d.type === "activity") {
        activities.push(d);
        return '<div class="activity-slot" data-activity-id="' + escAttr(d.id || "") +
          '" data-widget="' + escAttr(d.widget || "") + '"></div>';
      }
      if (d.type === "challenge") {
        challenges.push(d);
        return '<div class="challenge-slot" data-challenge-id="' + escAttr(d.id || "") + '"></div>';
      }
      quizSets.push(d);
      return '<div class="quiz-slot" data-set-id="' + escAttr(d.set_id || "") + '"></div>';
    });
    html = html.replace(new RegExp(S + "COMP(\\d+)" + S, "g"), function (_, n) {
      var c = components[+n];
      return '<div class="component-slot" data-component="' + escAttr(c.name) +
        '" data-index="' + n + '" hidden></div>';
    });

    return {
      front: fm.front,
      html: html,
      quizzes: quizSets,        // hanya set kuis
      activities: activities,   // Latihan Interaktif
      challenges: challenges,   // Tantangan Akhir Bab
      blocks: quizzes,          // seluruh blok json, urutan asli
      components: components,
      headings: headings
    };
  }

  window.MD = { parse: parse, parseFrontmatter: parseFrontmatter, slugify: slugify };
})();
