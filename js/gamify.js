/* =========================================================================
   gamify.js — Mesin gamifikasi: XP, level, badge, bintang, rekor pribadi.

   Prinsip: konten = DATA (di .md), mekanik & hadiah = ENGINE (di sini).
   Seluruh aturan (ambang level, daftar badge) dibaca dari
   `gamification` pada content-manifest.json — tidak ditulis ulang di kode.

   Keputusan penting (disetujui pengguna):
     Ambang bintang pada field `stars` dibaca sebagai PERSENTASE dari skor
     maksimum yang dapat dicapai, bukan skor mentah. Alasannya skor maksimum
     tiap bab berbeda (150–220), sehingga ambang mentah membuat 3 bintang
     terlalu mudah dan tidak setara antar bab.

   Kunci localStorage (berversi):
     poli.v1.xp                 number
     poli.v1.badges             {badgeId: ts}
     poli.v1.done               {activityId: ts}   (mencegah XP ganda)
     poli.v1.record             {challengeId: {bestScore,bestPct,bestTimeSec,stars,at}}
     poli.v1.streak             {last:"YYYY-MM-DD", count:n, best:n}

   Ekspor: window.Gamify
   ========================================================================= */
(function () {
  "use strict";

  var G = null;           // blok `gamification` dari manifest
  var listeners = [];

  function S() { return window.Store; }

  /* ---------------- Konfigurasi dari manifest ---------------- */
  function init(manifest) {
    G = (manifest && manifest.gamification) || null;
    touchStreak();
    emit();
    return api;
  }
  function levels() {
    return (G && G.xp && G.xp.levels) || [{ level: 1, min_xp: 0, title: "Pemula" }];
  }
  function badgeDefs() { return (G && G.badges) || []; }
  function badgeDef(id) {
    return badgeDefs().filter(function (b) { return b.id === id; })[0] || null;
  }

  /* ---------------- XP & level ---------------- */
  function xp() { return S().get("xp", 0) || 0; }

  function levelFor(x) {
    var L = levels(), cur = L[0];
    for (var i = 0; i < L.length; i++) if (x >= L[i].min_xp) cur = L[i];
    var idx = L.indexOf(cur);
    var next = idx >= 0 && idx < L.length - 1 ? L[idx + 1] : null;
    var span = next ? (next.min_xp - cur.min_xp) : 0;
    return {
      level: cur.level,
      title: cur.title,
      minXp: cur.min_xp,
      nextXp: next ? next.min_xp : null,
      nextTitle: next ? next.title : null,
      // progres menuju level berikutnya (0–100); level tertinggi selalu 100
      pct: next ? Math.min(100, Math.round((x - cur.min_xp) / (span || 1) * 100)) : 100,
      isMax: !next
    };
  }
  function state() {
    var x = xp(), lv = levelFor(x);
    return {
      xp: x, level: lv.level, title: lv.title, pct: lv.pct,
      nextXp: lv.nextXp, nextTitle: lv.nextTitle, isMax: lv.isMax,
      badges: badges(), records: records()
    };
  }

  /**
   * Tambah XP. `sourceId` opsional; bila diberikan, XP hanya diberikan SEKALI
   * untuk sumber tersebut (mencegah pengumpulan XP berulang dari aktivitas yang sama).
   */
  function addXP(amount, sourceId) {
    amount = Math.max(0, parseInt(amount, 10) || 0);
    if (!amount) return { gained: 0, leveledUp: false };
    if (sourceId && isDone(sourceId)) return { gained: 0, leveledUp: false, already: true };

    var before = levelFor(xp()).level;
    var next = xp() + amount;
    S().set("xp", next);
    if (sourceId) markDone(sourceId);
    var after = levelFor(next).level;

    var res = { gained: amount, xp: next, leveledUp: after > before, level: after };
    if (res.leveledUp) res.levelTitle = levelFor(next).title;
    emit(res);
    return res;
  }

  /* ---------------- Penyelesaian aktivitas ---------------- */
  function doneMap() { return S().get("done", {}) || {}; }
  function isDone(id) { return !!doneMap()[id]; }
  function markDone(id) {
    var d = doneMap();
    if (!d[id]) { d[id] = Date.now(); S().set("done", d); }
  }
  function doneCount() { return Object.keys(doneMap()).length; }

  /* ---------------- Badge ---------------- */
  function badges() { return S().get("badges", {}) || {}; }
  function hasBadge(id) { return !!badges()[id]; }
  function awardBadge(id) {
    if (!id || hasBadge(id)) return { awarded: false };
    var b = badges(); b[id] = Date.now(); S().set("badges", b);
    emit({ badge: id });
    return { awarded: true, badge: badgeDef(id) || { id: id } };
  }
  function badgeList() {
    var owned = badges();
    return badgeDefs().map(function (b) {
      return {
        id: b.id, competency: b.competency, chapter: b.chapter,
        unlock: b.unlock, owned: !!owned[b.id], at: owned[b.id] || null
      };
    });
  }

  /* ---------------- Bintang (PERSENTASE dari skor maksimum) ---------------- */
  function starsFor(challenge, score, maxScore) {
    var th = (challenge && challenge.stars) || {};
    if (!maxScore || maxScore <= 0) return 0;
    var pct = (score / maxScore) * 100;
    var best = 0;
    ["1", "2", "3"].forEach(function (k) {
      if (th[k] != null && pct >= Number(th[k])) best = Math.max(best, Number(k));
    });
    return best;
  }

  /**
   * Hitung skor akhir sebuah Tantangan.
   * time_bonus: sisa waktu memberi tambahan hingga 20% dari skor benar,
   * proporsional terhadap sisa waktu. Bonus TIDAK ikut dalam pembagi
   * persentase bintang agar ambang tetap mencerminkan penguasaan materi.
   */
  function scoreChallenge(challenge, correctCount, totalCount, secondsLeft) {
    var per = ((challenge && challenge.scoring) || {}).per_correct || 10;
    var base = correctCount * per;
    var max = totalCount * per;
    var bonus = 0;
    if (((challenge && challenge.scoring) || {}).time_bonus && challenge.time_limit_sec > 0) {
      var frac = Math.max(0, Math.min(1, (secondsLeft || 0) / challenge.time_limit_sec));
      bonus = Math.round(base * 0.2 * frac);
    }
    return {
      base: base, bonus: bonus, total: base + bonus, max: max,
      pct: max ? Math.round(base / max * 100) : 0,
      stars: starsFor(challenge, base, max)
    };
  }

  /* ---------------- Rekor pribadi ---------------- */
  function records() { return S().get("record", {}) || {}; }
  function recordFor(id) { return records()[id] || null; }
  /** Simpan hanya bila lebih baik; kembalikan info pemecahan rekor. */
  function saveRecord(challengeId, r) {
    var all = records();
    var prev = all[challengeId] || null;
    var next = {
      bestScore: Math.max(prev ? prev.bestScore : 0, r.score || 0),
      bestPct: Math.max(prev ? prev.bestPct : 0, r.pct || 0),
      stars: Math.max(prev ? prev.stars : 0, r.stars || 0),
      attempts: (prev ? prev.attempts || 0 : 0) + 1,
      at: Date.now()
    };
    // waktu terbaik = tercepat, hanya dicatat bila tantangan diselesaikan
    if (r.timeSec != null && r.completed) {
      next.bestTimeSec = prev && prev.bestTimeSec != null
        ? Math.min(prev.bestTimeSec, r.timeSec) : r.timeSec;
    } else if (prev && prev.bestTimeSec != null) {
      next.bestTimeSec = prev.bestTimeSec;
    }
    all[challengeId] = next;
    S().set("record", all);
    return {
      record: next,
      newBestScore: !prev || (r.score || 0) > prev.bestScore,
      newBestTime: r.completed && r.timeSec != null &&
                   (!prev || prev.bestTimeSec == null || r.timeSec < prev.bestTimeSec),
      newBestStars: !prev || (r.stars || 0) > prev.stars
    };
  }

  /**
   * Catat hasil satu Tantangan Akhir Bab sekaligus: rekor, XP, badge.
   * XP & badge hanya diberikan sekali (saat pertama tuntas).
   */
  function finishChallenge(challenge, result) {
    var rec = saveRecord(challenge.id, result);
    var out = { record: rec.record, newBest: rec, xp: null, badge: null };
    var rw = challenge.reward || {};
    // XP diberikan dengan syarat minimal 1 bintang
    if (result.stars >= 1 && rw.xp) out.xp = addXP(rw.xp, "challenge:" + challenge.id);
    /* Lencana punya ambang bintangnya SENDIRI, dibaca dari manifest.
       `master-polinomial` bersyarat "selesaikan simulasi TKA (bab 07) dengan
       >=3 bintang" — sebelumnya ikut diberikan pada 1 bintang saja, sehingga
       lencana puncak terlalu murah. Ambang diambil dari teks `unlock` bila
       memuat angka bintang; bila tidak, lencana lintas-kompetensi
       (competency "ALL") menuntut 3 bintang dan lencana per bab cukup 1. */
    if (rw.badge) {
      var def = badgeDef(rw.badge) || {};
      var m = /(\d+)\s*bintang/i.exec(String(def.unlock || ""));
      var perlu = m ? Number(m[1]) : (def.competency === "ALL" ? 3 : 1);
      out.badgeNeedStars = perlu;
      if (result.stars >= perlu) out.badge = awardBadge(rw.badge);
    }
    emit(out);
    return out;
  }

  /* ---------------- Streak harian ---------------- */
  function today() {
    var d = new Date();
    return d.getFullYear() + "-" + String(d.getMonth() + 1).padStart(2, "0") +
      "-" + String(d.getDate()).padStart(2, "0");
  }
  function touchStreak() {
    var s = S().get("streak", { last: null, count: 0, best: 0 }) || {};
    var t = today();
    if (s.last === t) return s;
    var y = new Date(Date.now() - 864e5);
    var yStr = y.getFullYear() + "-" + String(y.getMonth() + 1).padStart(2, "0") +
      "-" + String(y.getDate()).padStart(2, "0");
    s.count = (s.last === yStr) ? (s.count || 0) + 1 : 1;
    s.best = Math.max(s.best || 0, s.count);
    s.last = t;
    S().set("streak", s);
    return s;
  }
  function streak() { return S().get("streak", { count: 0, best: 0 }) || {}; }

  /* ---------------- Notifikasi perubahan ---------------- */
  function onChange(fn) { if (typeof fn === "function") listeners.push(fn); }
  function emit(detail) {
    var st = state();
    listeners.forEach(function (fn) { try { fn(st, detail || {}); } catch (e) {} });
  }

  /* ---------------- Reset (untuk pengujian/guru) ---------------- */
  function reset() {
    ["xp", "badges", "done", "record", "streak"].forEach(function (k) { S().set(k, k === "xp" ? 0 : {}); });
    emit({ reset: true });
  }

  var api = {
    init: init, state: state, onChange: onChange,
    xp: xp, addXP: addXP, levelFor: levelFor, levels: levels,
    isDone: isDone, markDone: markDone, doneCount: doneCount,
    badges: badges, hasBadge: hasBadge, awardBadge: awardBadge,
    badgeList: badgeList, badgeDef: badgeDef,
    starsFor: starsFor, scoreChallenge: scoreChallenge,
    records: records, recordFor: recordFor, saveRecord: saveRecord,
    finishChallenge: finishChallenge,
    streak: streak, reset: reset
  };
  window.Gamify = api;
})();
