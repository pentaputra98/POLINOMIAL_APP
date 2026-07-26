/* =========================================================================
   content.js — Layanan konten: memuat content-manifest.json + file .md,
   mem-parse via MD, dan meng-cache hasilnya agar navigasi instan.

   Manifest = OTORITAS struktur (urutan bab, prasyarat, kompetensi, quiz_sets).
   Ekspor: window.Content
   ========================================================================= */
(function () {
  "use strict";

  var BASE = "content/";
  var manifest = null;
  var docCache = Object.create(null);   // file -> hasil MD.parse
  var inflight = Object.create(null);   // file -> Promise (hindari fetch ganda)

  function fetchText(url) {
    return fetch(url, { cache: "no-cache" }).then(function (res) {
      if (!res.ok) throw new Error("Gagal memuat " + url + " (HTTP " + res.status + ")");
      return res.text();
    });
  }

  /* ---------------- Manifest ---------------- */
  function loadManifest() {
    if (manifest) return Promise.resolve(manifest);
    return fetchText(BASE + "content-manifest.json").then(function (txt) {
      manifest = JSON.parse(txt);
      // indeks bantu
      manifest._byId = {};
      manifest._bySlug = {};
      (manifest.chapters || []).forEach(function (c, i) {
        c._index = i;
        manifest._byId[c.id] = c;
        manifest._bySlug[c.slug] = c;
      });
      manifest._resById = {};
      (manifest.resources || []).forEach(function (r) { manifest._resById[r.id] = r; });
      manifest._compByCode = {};
      (manifest.competencies || []).forEach(function (k) { manifest._compByCode[k.code] = k; });
      return manifest;
    });
  }
  function getManifest() { return manifest; }
  function chapters() { return (manifest && manifest.chapters) || []; }
  function resources() { return (manifest && manifest.resources) || []; }
  function chapterBySlug(slug) { return manifest && manifest._bySlug[slug]; }
  function chapterById(id) { return manifest && manifest._byId[id]; }
  function resourceById(id) { return manifest && manifest._resById[id]; }

  /** Bab sebelum/sesudah menurut urutan manifest. */
  function neighbours(chapterId) {
    var list = chapters(), i = list.findIndex(function (c) { return c.id === chapterId; });
    if (i < 0) return { prev: null, next: null };
    return { prev: i > 0 ? list[i - 1] : null, next: i < list.length - 1 ? list[i + 1] : null };
  }

  /**
   * Kompetensi yang berlaku untuk sebuah set kuis.
   * Tag `competency` di item JSON jarang diisi (hanya ~15 dari 290),
   * jadi kompetensi di-infer dari bab pemilik set lewat manifest.
   */
  function competencyForSet(setId) {
    var pre = String(setId).slice(0, 2);
    var ch = chapters().find(function (c) { return c.id.indexOf(pre + "-") === 0; });
    return (ch && ch.competencies) || [];
  }

  /* ---------------- Dokumen (.md) ---------------- */
  function loadDoc(file) {
    if (docCache[file]) return Promise.resolve(docCache[file]);
    if (inflight[file]) return inflight[file];
    inflight[file] = fetchText(BASE + file)
      .then(function (raw) {
        var parsed = window.MD.parse(raw);
        parsed.file = file;
        docCache[file] = parsed;
        delete inflight[file];
        return parsed;
      })
      .catch(function (err) { delete inflight[file]; throw err; });
    return inflight[file];
  }

  function loadChapter(chapter) { return loadDoc(chapter.file); }

  /** Prefetch senyap agar pindah bab terasa instan. */
  function prefetch(file) {
    if (!file || docCache[file] || inflight[file]) return;
    loadDoc(file).catch(function () {});
  }
  function prefetchAround(chapterId) {
    var n = neighbours(chapterId);
    if (n.next) prefetch(n.next.file);
    if (n.prev) prefetch(n.prev.file);
  }

  /** Semua set kuis lintas bab (dipakai analitik Fase 3). */
  function allQuizSets() {
    var out = [];
    Object.keys(docCache).forEach(function (f) {
      (docCache[f].quizzes || []).forEach(function (q) { out.push({ file: f, set: q }); });
    });
    return out;
  }

  window.Content = {
    BASE: BASE,
    loadManifest: loadManifest, getManifest: getManifest,
    chapters: chapters, resources: resources,
    chapterBySlug: chapterBySlug, chapterById: chapterById, resourceById: resourceById,
    neighbours: neighbours, competencyForSet: competencyForSet,
    loadDoc: loadDoc, loadChapter: loadChapter,
    prefetch: prefetch, prefetchAround: prefetchAround,
    allQuizSets: allQuizSets,
    _cache: docCache
  };
})();
