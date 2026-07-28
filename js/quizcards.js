/* =========================================================================
   quizcards.js — Latihan Bertingkat & Tantangan sebagai KARTU + POP-UP

   MASALAH YANG DIPECAHKAN
   Dahulu kelima set kuis dirender langsung di halaman: 25 soal terhampar
   sehingga satu bab menjadi belasan ribu piksel dan terasa seperti buku teks.
   page_architecture pada manifest meminta 5 KARTU (A-E) yang diketuk untuk
   membuka pop-up.

   PEMASANGAN MALAS (lazy)
   Isi kuis TIDAK dibangun sampai kartunya diketuk pertama kali. Ini bukan
   sekadar demi tinggi halaman: 25 soal x 8 bab berarti ratusan rumus KaTeX
   yang tak perlu dirender saat bab dibuka.

   Sekali dibangun, simpulnya disimpan (bukan dibuang saat pop-up ditutup),
   sehingga jawaban dan keadaan kuis tetap utuh saat dibuka kembali.

   Ekspor: window.QuizCards
   ========================================================================= */
(function () {
  "use strict";

  /* Label & nada warna paket. Kunci = field `level` pada blok JSON. */
  var LEVEL = {
    mudah:  { label: "Dasar",     tone: "tone-mint" },
    sedang: { label: "Menengah",  tone: "tone-butter" },
    sulit:  { label: "Lanjut",    tone: "tone-peach" },
    hots:   { label: "HOTS",      tone: "tone-lavender" },
    tka:    { label: "Model TKA", tone: "tone-sky" }
  };

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function icon(n) { return window.Icons ? Icons.svg(n) : ""; }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }

  /** Huruf paket diambil dari set_id (…-set-A-… / …-bank-A-…). */
  function letterOf(setId, urutan) {
    var m = /-(?:set|bank)-([A-Z])-/.exec(String(setId || ""));
    return m ? m[1] : String.fromCharCode(65 + urutan);
  }

  /** Kemajuan tersimpan: berapa butir yang sudah benar. */
  function progressOf(set) {
    var saved = window.Store && Store.quizGet(set.set_id);
    if (!saved || !saved.answers) return { dijawab: 0, benar: 0 };
    var dijawab = 0, benar = 0;
    Object.keys(saved.answers).forEach(function (k) {
      dijawab++;
      if (saved.answers[k] && saved.answers[k].ok) benar++;
    });
    return { dijawab: dijawab, benar: benar };
  }

  function paintProgress(card, set) {
    var p = progressOf(set);
    var total = (set.items || []).length;
    var bar = card.querySelector(".qc-bar-fill");
    var lab = card.querySelector(".qc-prog");
    if (bar) bar.style.width = total ? Math.round((p.benar / total) * 100) + "%" : "0%";
    if (lab) {
      lab.innerHTML = p.dijawab
        ? icon("circle-check") + p.benar + "/" + total + " benar"
        : icon("clipboard-pen") + total + " soal";
      if (window.Icons) Icons.hydrate(lab);
    }
    card.classList.toggle("is-complete", total > 0 && p.benar === total);
  }

  /* ===================================================================== *
   * LATIHAN BERTINGKAT
   * ===================================================================== */
  function buildQuizCards(root, doc, chapterId) {
    var slots = [].slice.call(root.querySelectorAll(".quiz-slot"));
    if (!slots.length) return 0;

    var grid = null, dibuat = 0;

    slots.forEach(function (slot, urutan) {
      var set = (doc.quizzes || []).filter(function (q) {
        return q.set_id === slot.dataset.setId;
      })[0];
      if (!set) { slot.hidden = true; return; }

      var lv = LEVEL[set.level] || { label: set.level || "Latihan", tone: "tone-sky" };
      var huruf = letterOf(set.set_id, urutan);
      var total = (set.items || []).length;
      var opsional = !!set.optional;
      var bonus = set.bonus_xp || 0;

      /* Judul h3 di atas slot ("### 🟢 Paket A — Dasar (5 soal)") sudah
         terwakili oleh kartu; disembunyikan agar halaman tidak berulang. */
      var h3 = slot.previousElementSibling;
      while (h3 && h3.tagName !== "H3" && h3.tagName !== "H2" &&
             !(h3.textContent || "").trim()) h3 = h3.previousElementSibling;
      if (h3 && h3.tagName === "H3") h3.hidden = true;

      /* Blockquote catatan "Paket ini opsional…" juga menempel di h3 → ikut
         disembunyikan karena informasinya sudah tampil sebagai lencana kartu. */
      var note = h3 && h3.nextElementSibling;
      if (note && note.tagName === "BLOCKQUOTE" && note !== slot) note.hidden = true;

      /* Pembahasan (<details>) setelah slot dipindahkan ke dalam pop-up: di
         sanalah tempatnya, bukan di halaman utama. */
      var bahas = slot.nextElementSibling;
      if (bahas && bahas.tagName !== "DETAILS") bahas = null;

      var card = el("button", "qc-card " + lv.tone);
      card.type = "button";
      card.innerHTML =
        '<span class="qc-letter">' + esc(huruf) + "</span>" +
        '<span class="qc-main">' +
          '<span class="qc-level">' + esc(lv.label) +
            (opsional ? ' <span class="qc-opt">opsional</span>' : "") + "</span>" +
          '<span class="qc-prog"></span>' +
          '<span class="qc-bar"><span class="qc-bar-fill"></span></span>' +
        "</span>" +
        (bonus ? '<span class="qc-bonus">' + icon("zap") + "+" + bonus + "</span>" : "") +
        '<span class="qc-go">' + icon("chevron-right") + "</span>";
      card.setAttribute("aria-label",
        "Paket " + huruf + " " + lv.label + ", " + total + " soal" +
        (opsional ? ", opsional, bonus " + bonus + " XP" : ""));

      /* gudang: tempat isi kuis hidup di luar pop-up agar keadaannya kekal */
      var store = el("div", "qc-store");
      store.hidden = true;
      var isi = null;

      card.addEventListener("click", function () {
        if (!window.Overlay) return;
        if (!isi) {
          // pemasangan MALAS: baru dibangun saat pertama kali dibuka
          isi = el("div", "qc-isi");
          var mountPoint = el("div", "");
          isi.appendChild(mountPoint);
          store.appendChild(isi);
          if (window.Quiz) Quiz.mount(mountPoint, set, chapterId);
          if (bahas) isi.appendChild(bahas);      // pembahasan menyusul di bawah
        }
        Overlay.open({
          title: "Paket " + huruf + " — " + lv.label,
          icon: opsional ? "brain" : "clipboard-pen",
          node: isi, size: "lg", variant: lv.tone,
          onClose: function () { paintProgress(card, set); }
        });
      });

      if (!grid) {
        grid = el("div", "quizcards");
        slot.parentNode.insertBefore(grid, slot);
      }
      grid.appendChild(card);
      grid.appendChild(store);
      slot.parentNode.removeChild(slot);
      paintProgress(card, set);
      dibuat++;
    });

    if (grid) {
      var hint = el("p", "quizcards-hint",
        icon("info") + " Ketuk kartu untuk mengerjakan. Paket <b>D</b> dan <b>E</b> " +
        "bersifat opsional dan memberi XP bonus.");
      grid.parentNode.insertBefore(hint, grid.nextSibling);
    }
    return dibuat;
  }

  /* ===================================================================== *
   * TANTANGAN AKHIR BAB — kartu -> modal layar penuh
   * ===================================================================== */
  function buildChallengeCard(root, doc) {
    var slots = [].slice.call(root.querySelectorAll(".challenge-slot"));
    var dibuat = 0;

    slots.forEach(function (slot) {
      var ch = (doc.challenges || []).filter(function (c) {
        return c.id === slot.dataset.challengeId;
      })[0];
      if (!ch) { slot.hidden = true; return; }

      var jml = (ch.items || []).length;
      var menit = Math.round((ch.time_limit_sec || 0) / 60);
      var rec = window.Gamify && Gamify.recordFor ? Gamify.recordFor(ch.id) : null;
      var bintang = (rec && rec.stars) || 0;

      var card = el("button", "ch-card");
      card.type = "button";
      card.innerHTML =
        '<span class="ch-card-ico">' + icon("trophy") + "</span>" +
        '<span class="ch-card-main">' +
          '<span class="ch-card-title">' + esc(ch.title || "Tantangan Akhir Bab") + "</span>" +
          '<span class="ch-card-meta">' +
            icon("clipboard-list") + jml + " soal" +
            (menit ? " · " + icon("timer") + menit + " menit" : "") +
          "</span>" +
          '<span class="ch-card-stars">' +
            [1, 2, 3].map(function (i) {
              return '<span class="ch-star' + (i <= bintang ? " on" : "") + '">' + icon("star") + "</span>";
            }).join("") +
          "</span>" +
        "</span>" +
        '<span class="qc-go">' + icon("chevron-right") + "</span>";
      card.setAttribute("aria-label", (ch.title || "Tantangan Akhir Bab") +
        ", " + jml + " soal, " + menit + " menit");

      var store = el("div", "qc-store");
      store.hidden = true;
      var isi = null;

      card.addEventListener("click", function () {
        if (!window.Overlay) return;
        if (!isi) {
          isi = el("div", "ch-isi");
          store.appendChild(isi);
          if (window.Challenge) Challenge.mount(isi, ch, doc);
        }
        Overlay.open({
          title: ch.title || "Tantangan Akhir Bab",
          icon: "trophy", node: isi, size: "full", variant: "tone-butter",
          onClose: function () {
            // segarkan bintang pada kartu setelah sesi
            var r = window.Gamify && Gamify.recordFor ? Gamify.recordFor(ch.id) : null;
            var b = (r && r.stars) || 0;
            card.querySelectorAll(".ch-star").forEach(function (s, i) {
              s.classList.toggle("on", i < b);
            });
          }
        });
      });

      slot.parentNode.insertBefore(card, slot);
      slot.parentNode.insertBefore(store, slot);
      slot.parentNode.removeChild(slot);
      dibuat++;
    });
    return dibuat;
  }

  function apply(root, doc, chapterId) {
    if (!root || !doc) return { kuis: 0, tantangan: 0 };
    var kuis = buildQuizCards(root, doc, chapterId);
    var tantangan = buildChallengeCard(root, doc);
    if (window.Icons) Icons.hydrate(root);
    return { kuis: kuis, tantangan: tantangan };
  }

  window.QuizCards = { apply: apply };
})();
