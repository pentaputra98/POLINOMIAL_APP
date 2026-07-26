/* =========================================================================
   store.js — Persistensi localStorage BERVERSI (namespace "poli.v1.")
   Semua state siswa disimpan lokal; tanpa backend, tanpa database.

   Kunci yang dipakai:
     poli.v1.progress   {chapterId: {read:bool, at:ts}}
     poli.v1.quiz       {setId: {score, total, at, answers:{itemId:{val,ok}}}}
     poli.v1.reflection {chapterId: "teks bebas"}
     poli.v1.tka        {setId: {score,total,at,perComp:{K1:{ok,total}}}}
     poli.v1.prefs      {theme:"light|dark", sfx:bool, onboarded:bool}
     poli.v1.route      "#/bab/slug"

   Ekspor: window.Store
   ========================================================================= */
(function () {
  "use strict";

  var NS = "poli.v1.";
  var mem = {}; // fallback bila localStorage diblokir (mode privat)

  function read(key, def) {
    try {
      var raw = localStorage.getItem(NS + key);
      if (raw === null) return (key in mem) ? mem[key] : def;
      return JSON.parse(raw);
    } catch (e) {
      return (key in mem) ? mem[key] : def;
    }
  }
  function write(key, val) {
    mem[key] = val;
    try { localStorage.setItem(NS + key, JSON.stringify(val)); } catch (e) {}
    return val;
  }

  /* ---------------- Preferensi ---------------- */
  function prefs() {
    return read("prefs", {});
  }
  function setPref(k, v) {
    var p = prefs(); p[k] = v; write("prefs", p); return v;
  }

  /* ---------------- Progres bab ---------------- */
  function progress() { return read("progress", {}); }
  function markRead(chapterId) {
    var p = progress();
    if (!p[chapterId]) { p[chapterId] = { read: true, at: Date.now() }; write("progress", p); }
    return p;
  }
  function isRead(chapterId) { return !!(progress()[chapterId] || {}).read; }

  /* ---------------- Skor kuis ---------------- */
  function quizAll() { return read("quiz", {}); }
  function quizGet(setId) { return quizAll()[setId] || null; }
  function quizSave(setId, data) {
    var q = quizAll();
    q[setId] = Object.assign({ at: Date.now() }, data);
    write("quiz", q);
    return q[setId];
  }
  /** Simpan jawaban satu item (dipakai mesin kuis Fase 3). */
  function quizSaveItem(setId, itemId, val, ok) {
    var q = quizAll();
    var rec = q[setId] || { answers: {}, score: 0, total: 0 };
    rec.answers = rec.answers || {};
    rec.answers[itemId] = { val: val, ok: !!ok };
    var vals = Object.keys(rec.answers).map(function (k) { return rec.answers[k]; });
    rec.score = vals.filter(function (a) { return a.ok; }).length;
    rec.answered = vals.length;
    rec.at = Date.now();
    q[setId] = rec; write("quiz", q);
    return rec;
  }

  /* ---------------- Refleksi ---------------- */
  function reflectionAll() { return read("reflection", {}); }
  function reflectionGet(id) { return reflectionAll()[id] || ""; }
  function reflectionSet(id, text) {
    var r = reflectionAll(); r[id] = text; write("reflection", r); return text;
  }

  /* ---------------- Hasil simulasi TKA ---------------- */
  function tkaAll() { return read("tka", {}); }
  function tkaSave(setId, data) {
    var t = tkaAll(); t[setId] = Object.assign({ at: Date.now() }, data); write("tka", t); return t[setId];
  }

  /* ---------------- Rute terakhir ---------------- */
  function route(v) { return v === undefined ? read("route", null) : write("route", v); }

  /* ---------------- Utilitas ---------------- */
  function resetAll() {
    mem = {};
    try {
      Object.keys(localStorage)
        .filter(function (k) { return k.indexOf(NS) === 0; })
        .forEach(function (k) { localStorage.removeItem(k); });
    } catch (e) {}
  }
  function exportAll() {
    return {
      version: "poli.v1",
      prefs: prefs(), progress: progress(), quiz: quizAll(),
      reflection: reflectionAll(), tka: tkaAll()
    };
  }

  window.Store = {
    NS: NS,
    get: read, set: write,
    prefs: prefs, setPref: setPref,
    progress: progress, markRead: markRead, isRead: isRead,
    quizAll: quizAll, quizGet: quizGet, quizSave: quizSave, quizSaveItem: quizSaveItem,
    reflectionAll: reflectionAll, reflectionGet: reflectionGet, reflectionSet: reflectionSet,
    tkaAll: tkaAll, tkaSave: tkaSave,
    route: route, resetAll: resetAll, exportAll: exportAll
  };
})();
