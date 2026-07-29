/* =========================================================================
   sw.js — Service Worker (fondasi offline)

   Strategi campuran:
     - SHELL (html/css/js/lib)   → cache-first  (cepat; di-invalidate via ?b=N)
     - content/ (.md & manifest) → network-first (konten selalu segar saat
       online; jatuh ke cache saat offline). Penting karena file .md sering
       diperbarui penulis.
   Naikkan CACHE saat aset shell berubah.
   ========================================================================= */
const CACHE = "polinomial-v69";
const V = "?b=87";

const SHELL = [
  "./",
  "./index.html",
  "./favicon.svg" + V,
  "./css/style.css" + V,
  "./js/icons.js" + V,
  "./js/mathrender.js" + V,
  "./js/markdown.js" + V,
  "./js/store.js" + V,
  "./js/gamify.js" + V,
  "./js/content.js" + V,
  "./js/diagrams.js" + V,
  "./js/keypad.js" + V,
  "./js/quiz.js" + V,
  "./js/activity.js" + V,
  "./js/challenge.js" + V,
  "./js/overlay.js" + V,
  "./js/pagekit.js" + V,
  "./js/quizcards.js" + V,
  "./js/visuals.js" + V,
  "./js/enhance.js" + V,
  "./js/scratchpad.js" + V,
  "./js/app.js" + V,
  "./content/content-manifest.json",

  /* Seluruh materi ikut disimpan sejak awal supaya benar-benar dapat
     dibuka offline — bukan hanya bab yang kebetulan sudah dikunjungi. */
  "./content/00-intro.md",
  "./content/01-konsep-dasar-polinomial.md",
  "./content/02-operasi-dan-nilai-polinomial.md",
  "./content/03-pembagian-polinomial.md",
  "./content/04-teorema-sisa-dan-faktor.md",
  "./content/05-persamaan-polinomial-dan-vieta.md",
  "./content/06-strategi-hots-dan-tka.md",
  "./content/07-ringkasan-dan-bank-soal.md",
  "./content/cheat-sheet.md",
  "./content/glosarium.md",

  "./lib/katex/katex.min.css",
  "./lib/katex/katex.min.js",
  "./lib/katex/contrib/auto-render.min.js",

  /* Font KaTeX (woff2). Tanpa ini rumus tampil dengan huruf pengganti
     saat perangkat sedang offline. */
  "./lib/katex/fonts/KaTeX_AMS-Regular.woff2",
  "./lib/katex/fonts/KaTeX_Caligraphic-Bold.woff2",
  "./lib/katex/fonts/KaTeX_Caligraphic-Regular.woff2",
  "./lib/katex/fonts/KaTeX_Fraktur-Bold.woff2",
  "./lib/katex/fonts/KaTeX_Fraktur-Regular.woff2",
  "./lib/katex/fonts/KaTeX_Main-Bold.woff2",
  "./lib/katex/fonts/KaTeX_Main-BoldItalic.woff2",
  "./lib/katex/fonts/KaTeX_Main-Italic.woff2",
  "./lib/katex/fonts/KaTeX_Main-Regular.woff2",
  "./lib/katex/fonts/KaTeX_Math-BoldItalic.woff2",
  "./lib/katex/fonts/KaTeX_Math-Italic.woff2",
  "./lib/katex/fonts/KaTeX_SansSerif-Bold.woff2",
  "./lib/katex/fonts/KaTeX_SansSerif-Italic.woff2",
  "./lib/katex/fonts/KaTeX_SansSerif-Regular.woff2",
  "./lib/katex/fonts/KaTeX_Script-Regular.woff2",
  "./lib/katex/fonts/KaTeX_Size1-Regular.woff2",
  "./lib/katex/fonts/KaTeX_Size2-Regular.woff2",
  "./lib/katex/fonts/KaTeX_Size3-Regular.woff2",
  "./lib/katex/fonts/KaTeX_Size4-Regular.woff2",
  "./lib/katex/fonts/KaTeX_Typewriter-Regular.woff2",

];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE)
      // addAll gagal total bila satu aset 404 → pakai per-item agar tahan banting
      .then((cache) => Promise.all(SHELL.map((url) => cache.add(url).catch(() => null))))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener("fetch", (event) => {
  const req = event.request;
  if (req.method !== "GET") return;

  const url = new URL(req.url);
  if (url.origin !== self.location.origin) return;   // aset lokal saja

  // network-first: konten pelajaran harus segar saat online
  if (url.pathname.includes("/content/")) {
    event.respondWith(
      fetch(req)
        .then((res) => {
          if (res && res.status === 200) {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => caches.match(req))
    );
    return;
  }

  // cache-first untuk shell
  event.respondWith(
    caches.match(req).then((cached) => {
      if (cached) return cached;
      return fetch(req)
        .then((res) => {
          if (res && res.status === 200 && res.type === "basic") {
            const copy = res.clone();
            caches.open(CACHE).then((c) => c.put(req, copy));
          }
          return res;
        })
        .catch(() => cached);
    })
  );
});
