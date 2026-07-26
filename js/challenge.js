/* =========================================================================
   challenge.js — Tantangan Akhir Bab (asesmen berwaktu).

   Data dari blok ```json bertipe "challenge". Soal ditarik dari `pool`
   (gabungan id aktivitas dan set_id kuis) — engine TIDAK mengarang soal.

   Aturan penilaian (disetujui pengguna):
     * Ambang `stars` dibaca sebagai PERSENTASE skor maksimum, bukan skor
       mentah, karena jumlah soal tiap bab berbeda (skor maks 150–220).
     * `time_bonus` menambah paling banyak 20% dari skor benar, dan TIDAK
       ikut dalam pembagi persentase bintang agar ambang tetap mencerminkan
       penguasaan materi.
     * XP & badge diberikan sekali, saat memperoleh minimal 1 bintang.

   Ekspor: window.Challenge { mount }
   ========================================================================= */
(function () {
  "use strict";

  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function icon(n) { return window.Icons ? Icons.svg(n) : ""; }
  function smart(s) {
    var t = String(s == null ? "" : s);
    if (!t.trim()) return "";
    if (t.indexOf("$") >= 0) return t;
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
  function mmss(sec) {
    sec = Math.max(0, Math.round(sec));
    return String(Math.floor(sec / 60)).padStart(2, "0") + ":" + String(sec % 60).padStart(2, "0");
  }

  /* ------------------------------------------------------------------ *
   * Menyusun daftar soal dari `pool`
   * Aktivitas diubah menjadi butir bergaya pilihan/isian agar dapat
   * dinilai cepat dalam mode berwaktu; set kuis dipakai apa adanya.
   * ------------------------------------------------------------------ */
  function fromActivity(a) {
    var out = [];
    if (a.widget === "truefalse") {
      (a.statements || []).forEach(function (s, i) {
        out.push({ id: a.id + ":" + i, type: "mc", question: s.s,
                   options: ["Benar", "Salah"], answer: s.a ? "Benar" : "Salah",
                   explanation: s.why, competency: a.competency });
      });
    } else if (a.widget === "cloze") {
      (a.answers || []).forEach(function (ans, i) {
        out.push({ id: a.id + ":" + i, type: "short",
                   question: a.prompt + " — bagian " + (i + 1),
                   answer: ans, competency: a.competency });
      });
    } else if (a.widget === "matching") {
      (a.pairs || []).forEach(function (p, i) {
        out.push({ id: a.id + ":" + i, type: "mc", question: p[0],
                   options: shuffle(a.pairs.map(function (q) { return q[1]; })),
                   answer: p[1], competency: a.competency });
      });
    } else if (a.widget === "categorize") {
      (a.items || []).forEach(function (it, i) {
        out.push({ id: a.id + ":" + i, type: "mc", question: it[0],
                   options: a.categories.slice(), answer: it[1], competency: a.competency });
      });
    } else if (a.widget === "ordering") {
      out.push({ id: a.id, type: "mc", question: a.prompt + " — manakah yang paling awal?",
                 options: a.options.slice(),
                 answer: a.options[a.answer_order[0]], competency: a.competency });
    } else if (a.widget === "error-hunt") {
      out.push({ id: a.id, type: "mc", question: a.prompt,
                 options: (a.steps || []).map(function (s, i) { return "Langkah " + (i + 1); }),
                 answer: "Langkah " + (a.wrong_index + 1),
                 explanation: a.why, competency: a.competency });
    } else if (a.widget === "horner-steps") {
      out.push({ id: a.id, type: "short",
                 question: a.prompt + " — berapa sisanya?",
                 answer: String(a.expected_remainder), competency: a.competency });
    }
    // widget "slider" bersifat eksplorasi → tidak diberi skor
    return out;
  }

  function buildQuestions(ch, doc) {
    var acts = {}, sets = {};
    (doc.activities || []).forEach(function (a) { acts[a.id] = a; });
    (doc.quizzes || []).forEach(function (q) { sets[q.set_id] = q; });

    var qs = [];
    (ch.pool || []).forEach(function (id) {
      if (acts[id]) qs = qs.concat(fromActivity(acts[id]));
      else if (sets[id]) {
        (sets[id].items || []).forEach(function (it) {
          if (it.type === "proof") return;              // tidak dinilai otomatis
          qs.push(Object.assign({}, it, { id: id + ":" + it.id }));
        });
      }
    });
    return ch.shuffle ? shuffle(qs) : qs;
  }

  /* ------------------------------------------------------------------ *
   * Kartu pembuka
   * ------------------------------------------------------------------ */
  function stars(n) {
    var h = "";
    for (var i = 1; i <= 3; i++) h += '<span class="ch-star' + (i <= n ? " on" : "") + '">' + icon("star") + "</span>";
    return h;
  }

  function renderIntro(slot, ch, doc) {
    var rec = window.Gamify ? Gamify.recordFor(ch.id) : null;
    var badge = (ch.reward || {}).badge;
    var punya = badge && window.Gamify && Gamify.hasBadge(badge);
    var jml = buildQuestions(Object.assign({}, ch, { shuffle: false }), doc).length;

    slot.className = "challenge-block";
    slot.innerHTML =
      '<div class="ch-hero">' +
        '<div class="ch-badge">' + icon("trophy") + "</div>" +
        '<div class="ch-meta">' +
          '<span class="ch-kind">Tantangan Akhir Bab</span>' +
          "<h3>" + esc(ch.title || "Tantangan") + "</h3>" +
          '<div class="ch-facts">' +
            '<span class="tagpill">' + icon("timer") + " " + mmss(ch.time_limit_sec) + "</span>" +
            '<span class="tagpill">' + icon("list-checks") + " " + jml + " soal</span>" +
            ((ch.reward || {}).xp ? '<span class="tagpill">' + icon("zap") + " +" + ch.reward.xp + " XP</span>" : "") +
            (ch.competency ? '<span class="tagpill">' + esc(ch.competency) + "</span>" : "") +
          "</div>" +
        "</div>" +
      "</div>" +
      (rec
        ? '<div class="ch-record">' +
            '<div class="ch-stars">' + stars(rec.stars) + "</div>" +
            '<div class="ch-recnums">' +
              "<span>Skor terbaik <b>" + rec.bestScore + "</b> (" + rec.bestPct + "%)</span>" +
              (rec.bestTimeSec != null ? "<span>Waktu terbaik <b>" + mmss(rec.bestTimeSec) + "</b></span>" : "") +
              "<span>Percobaan <b>" + (rec.attempts || 1) + "</b></span>" +
            "</div>" +
          "</div>"
        : '<p class="ch-hint">' + icon("info") +
          " Kerjakan seluruh soal sebelum waktu habis. Bintang dihitung dari persentase jawaban benar.</p>") +
      (punya ? '<div class="ch-owned">' + icon("award") + " Lencana <b>" + esc(badge) + "</b> sudah diperoleh</div>" : "") +
      '<div class="ch-actions">' +
        '<button type="button" class="btn btn-primary ch-start">' + icon("circle-play") +
          (rec ? " Coba lagi (perbaiki capaian)" : " Mulai Tantangan") + "</button>" +
      "</div>";
    if (window.Icons) Icons.hydrate(slot);
    slot.querySelector(".ch-start").addEventListener("click", function () { runChallenge(slot, ch, doc); });
  }

  /* ------------------------------------------------------------------ *
   * Sesi berwaktu
   * ------------------------------------------------------------------ */
  function runChallenge(slot, ch, doc) {
    var qs = buildQuestions(ch, doc);
    var idx = 0, jawaban = {}, sisa = ch.time_limit_sec || 300, timer = null;
    var mulai = Date.now();

    slot.className = "challenge-block is-running";
    slot.innerHTML =
      '<div class="ch-bar">' +
        '<span class="ch-timer" id="chTimer">' + mmss(sisa) + "</span>" +
        '<div class="ch-progress"><span class="ch-prog-fill"></span></div>' +
        '<span class="ch-count"><b id="chNo">1</b>/' + qs.length + "</span>" +
        '<button type="button" class="ch-quit" aria-label="Hentikan">' + icon("x") + "</button>" +
      "</div>" +
      '<div class="ch-stage" id="chStage"></div>';
    if (window.Icons) Icons.hydrate(slot);

    var stage = slot.querySelector("#chStage");
    var elTimer = slot.querySelector("#chTimer");
    var elNo = slot.querySelector("#chNo");
    var elFill = slot.querySelector(".ch-prog-fill");

    function tick() {
      sisa--;
      elTimer.textContent = mmss(sisa);
      elTimer.classList.toggle("is-low", sisa <= 30);
      if (sisa <= 0) { clearInterval(timer); selesai(true); }
    }
    timer = setInterval(tick, 1000);

    slot.querySelector(".ch-quit").addEventListener("click", function () {
      clearInterval(timer); selesai(false, true);
    });

    function tampilSoal() {
      if (idx >= qs.length) { clearInterval(timer); selesai(false); return; }
      var q = qs[idx];
      elNo.textContent = idx + 1;
      elFill.style.width = Math.round(idx / qs.length * 100) + "%";

      stage.innerHTML =
        '<div class="ch-q">' + smart(q.question) + "</div>" +
        (q.type === "mc" || q.type === "multi"
          ? '<div class="ch-opts">' + (q.options || []).map(function (o, k) {
              return '<button type="button" class="ch-opt" data-val="' + esc(o) + '">' +
                '<span class="q-mark">' + String.fromCharCode(65 + k) + "</span>" +
                '<span class="q-optlabel">' + smart(o) + "</span></button>";
            }).join("") + "</div>"
          : '<div class="ch-input-row"><input class="ch-input q-input" type="text" placeholder="Ketuk untuk menjawab…" aria-label="Jawaban" /></div>') +
        '<div class="ch-nav">' +
          '<button type="button" class="btn ch-skip">' + icon("chevron-right") + " Lewati</button>" +
          '<button type="button" class="btn btn-primary ch-next">' + icon("check") + " Jawab</button>" +
        "</div>";
      if (window.MR) MR.render(stage);
      if (window.Icons) Icons.hydrate(stage);
      var inp = stage.querySelector(".ch-input");
      if (inp && window.Keypad) Keypad.attach(inp);

      stage.querySelectorAll(".ch-opt").forEach(function (b) {
        b.addEventListener("click", function () {
          stage.querySelectorAll(".ch-opt").forEach(function (x) { x.classList.toggle("is-sel", x === b); });
        });
      });
      stage.querySelector(".ch-skip").addEventListener("click", function () { idx++; tampilSoal(); });
      stage.querySelector(".ch-next").addEventListener("click", function () {
        var val = "";
        var sel = stage.querySelector(".ch-opt.is-sel");
        if (sel) val = sel.dataset.val;
        else if (inp) val = inp.value;
        var kunci = Array.isArray(q.answer) ? q.answer.join(", ") : q.answer;
        var ok = window.Quiz ? Quiz.compare(val, kunci) : String(val) === String(kunci);
        jawaban[q.id] = { val: val, ok: ok, comp: q.competency || null };
        if (window.SFX) SFX.play(ok ? "correct" : "thud");
        idx++; tampilSoal();
      });
    }

    function selesai(waktuHabis, dibatalkan) {
      clearInterval(timer);
      if (window.Keypad) Keypad.close();
      var benar = Object.keys(jawaban).filter(function (k) { return jawaban[k].ok; }).length;
      var pakai = Math.round((Date.now() - mulai) / 1000);
      var r = window.Gamify
        ? Gamify.scoreChallenge(ch, benar, qs.length, Math.max(0, sisa))
        : { base: benar * 10, bonus: 0, total: benar * 10, max: qs.length * 10, pct: 0, stars: 0 };

      var hasil = null;
      if (!dibatalkan && window.Gamify) {
        hasil = Gamify.finishChallenge(ch, {
          score: r.total, pct: r.pct, stars: r.stars,
          timeSec: pakai, completed: !waktuHabis
        });
      }
      renderHasil(slot, ch, doc, {
        benar: benar, total: qs.length, r: r, pakai: pakai,
        waktuHabis: waktuHabis, dibatalkan: dibatalkan, jawaban: jawaban, hasil: hasil
      });
    }

    tampilSoal();
  }

  /* ------------------------------------------------------------------ *
   * Layar hasil + rekap per kompetensi
   * ------------------------------------------------------------------ */
  function renderHasil(slot, ch, doc, d) {
    // rekap kompetensi dari jawaban sesi ini
    var perComp = {};
    Object.keys(d.jawaban).forEach(function (k) {
      var c = d.jawaban[k].comp || ch.competency || "-";
      if (!perComp[c]) perComp[c] = { benar: 0, total: 0 };
      perComp[c].total++;
      if (d.jawaban[k].ok) perComp[c].benar++;
    });
    var man = window.Content && Content.getManifest();
    var judulKomp = {};
    if (man) (man.competencies || []).forEach(function (c) { judulKomp[c.code] = c.title; });

    var pesan = d.dibatalkan ? "Tantangan dihentikan"
      : d.waktuHabis ? "Waktu habis" : "Tantangan selesai";

    slot.className = "challenge-block is-result";
    slot.innerHTML =
      '<div class="ch-result-head">' +
        '<div class="ch-stars big">' + stars(d.r.stars) + "</div>" +
        "<h3>" + esc(pesan) + "</h3>" +
        '<p class="ch-score">' + d.benar + " dari " + d.total + " benar · <b>" + d.r.pct + "%</b></p>" +
        '<div class="ch-facts">' +
          '<span class="tagpill">' + icon("target") + " Skor " + d.r.total +
            (d.r.bonus ? " (bonus waktu +" + d.r.bonus + ")" : "") + "</span>" +
          '<span class="tagpill">' + icon("timer") + " " + mmss(d.pakai) + "</span>" +
        "</div>" +
      "</div>" +
      (d.hasil && d.hasil.xp && d.hasil.xp.gained
        ? '<div class="ch-award">' + icon("zap") + " +" + d.hasil.xp.gained + " XP" +
          (d.hasil.xp.leveledUp ? " · Naik ke Level " + d.hasil.xp.level : "") + "</div>" : "") +
      (d.hasil && d.hasil.badge && d.hasil.badge.awarded
        ? '<div class="ch-award is-badge">' + icon("award") + " Lencana baru: <b>" +
          esc((d.hasil.badge.badge || {}).id || "") + "</b></div>" : "") +
      (d.hasil && d.hasil.newBest && (d.hasil.newBest.newBestScore || d.hasil.newBest.newBestTime)
        ? '<div class="ch-award is-record">' + icon("sparkles") + " Rekor pribadi baru!</div>" : "") +
      '<div class="ch-recap"><h4>' + icon("chart-line") + " Rekap per kompetensi</h4>" +
        Object.keys(perComp).sort().map(function (c) {
          var p = perComp[c], pct = p.total ? Math.round(p.benar / p.total * 100) : 0;
          return '<div class="ch-comp">' +
            '<div class="ch-comp-h"><b>' + esc(c) + "</b>" +
              (judulKomp[c] ? "<span>" + esc(judulKomp[c]) + "</span>" : "") +
              '<em>' + p.benar + "/" + p.total + "</em></div>" +
            '<div class="ch-comp-bar"><span style="width:' + pct + '%"></span></div>' +
          "</div>";
        }).join("") +
      "</div>" +
      '<div class="ch-actions">' +
        '<button type="button" class="btn btn-primary ch-again">' + icon("rotate-ccw") + " Ulangi</button>" +
        '<button type="button" class="btn ch-back">' + icon("arrow-left") + " Kembali</button>" +
      "</div>";
    if (window.Icons) Icons.hydrate(slot);
    if (window.SFX) SFX.play(d.r.stars >= 2 ? "win" : "pop");

    slot.querySelector(".ch-again").addEventListener("click", function () { runChallenge(slot, ch, doc); });
    slot.querySelector(".ch-back").addEventListener("click", function () { renderIntro(slot, ch, doc); });
  }

  function mount(slot, ch, doc) {
    if (!slot || !ch || slot.dataset.mounted) return;
    slot.dataset.mounted = "1";
    slot.hidden = false;
    renderIntro(slot, ch, doc);
  }

  window.Challenge = { mount: mount, buildQuestions: buildQuestions };
})();
