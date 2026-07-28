/* =========================================================================
   overlay.js — pop-up / modal yang dapat dipakai ulang & aksesibel

   Dipakai bersama oleh:
     Fase 2  Info Cards, Daftar Isi bab
     Fase 3  pop-up Latihan Bertingkat (paket A-E)
     Fase 4  modal Tantangan Akhir Bab

   PRINSIP PENTING — JANGAN MENYALIN, PINDAHKAN
   Isi pop-up berasal dari DOM halaman yang rumusnya SUDAH dirender KaTeX.
   Kalau di-clone lewat innerHTML, rumus perlu dirender ulang dan seluruh
   pendengar peristiwa (kuis, widget) hilang. Karena itu simpulnya DIPINDAHKAN
   ke dalam panel, lalu DIKEMBALIKAN ke tempat asalnya saat ditutup.

   Setiap buka/tutup mengirim peristiwa "poli:relayout" agar visual yang
   mengukur posisi (panah pada js/visuals.js) dapat menggambar ulang.

   Ekspor: window.Overlay
   ========================================================================= */
(function () {
  "use strict";

  var scrim = null, panel = null, headEl = null, titleEl = null, iconEl = null,
      bodyEl = null, closeBtn = null;
  var stack = [];                 // tumpukan sesi terbuka (mendukung bersarang)
  var appMain = null;

  function icon(n) { return window.Icons ? window.Icons.svg(n) : ""; }

  function build() {
    if (scrim) return;
    appMain = document.getElementById("app");
    scrim = document.createElement("div");
    scrim.className = "ov-scrim";
    scrim.hidden = true;
    scrim.innerHTML =
      '<div class="ov-panel" role="dialog" aria-modal="true" aria-labelledby="ovTitle" tabindex="-1">' +
        '<div class="ov-head">' +
          '<span class="ov-icon" aria-hidden="true"></span>' +
          '<h2 class="ov-title" id="ovTitle"></h2>' +
          '<button type="button" class="icon-btn ov-close" aria-label="Tutup">' + icon("x") + "</button>" +
        "</div>" +
        '<div class="ov-body"></div>' +
      "</div>";
    document.body.appendChild(scrim);
    panel = scrim.querySelector(".ov-panel");
    headEl = scrim.querySelector(".ov-head");
    titleEl = scrim.querySelector(".ov-title");
    iconEl = scrim.querySelector(".ov-icon");
    bodyEl = scrim.querySelector(".ov-body");
    closeBtn = scrim.querySelector(".ov-close");

    closeBtn.addEventListener("click", function () { close(); });
    scrim.addEventListener("mousedown", function (e) {
      // klik pada latar (bukan panel) menutup
      if (e.target === scrim) close();
    });
    document.addEventListener("keydown", onKey, true);
  }

  function focusables() {
    return [].slice.call(panel.querySelectorAll(
      'a[href],button:not([disabled]),input:not([disabled]):not([type="hidden"]),' +
      'select:not([disabled]),textarea:not([disabled]),summary,[tabindex]:not([tabindex="-1"])'
    )).filter(function (el) {
      return el.offsetWidth || el.offsetHeight || el.getClientRects().length;
    });
  }

  function onKey(e) {
    if (!stack.length) return;
    if (e.key === "Escape") { e.stopPropagation(); close(); return; }
    if (e.key !== "Tab") return;
    // kurung fokus: Tab tidak boleh keluar dari panel
    var f = focusables();
    if (!f.length) { e.preventDefault(); panel.focus(); return; }
    var first = f[0], last = f[f.length - 1];
    if (e.shiftKey && document.activeElement === first) { e.preventDefault(); last.focus(); }
    else if (!e.shiftKey && document.activeElement === last) { e.preventDefault(); first.focus(); }
  }

  function relayout() {
    try { window.dispatchEvent(new CustomEvent("poli:relayout")); } catch (e) { /* peramban tua */ }
  }

  /**
   * Buka pop-up.
   * opts = {
   *   title   : string (wajib)
   *   icon    : nama ikon Lucide (opsional)
   *   node    : elemen yang DIPINDAHKAN ke dalam panel (opsional)
   *   html    : alternatif node, untuk isi sederhana tanpa KaTeX terender
   *   size    : "sm" | "md" | "lg" | "full"   (baku "md")
   *   variant : kelas tambahan pada panel, mis. warna kartu
   *   onClose : callback
   * }
   */
  function open(opts) {
    opts = opts || {};
    build();

    var sesi = {
      node: opts.node || null,
      home: null,
      anchor: null,
      lastFocus: document.activeElement,
      onClose: opts.onClose || null,
      variant: opts.variant || ""
    };

    // ingat posisi asli simpul agar dapat dikembalikan tepat di tempatnya
    if (sesi.node) {
      sesi.home = sesi.node.parentNode;
      sesi.anchor = sesi.node.nextSibling;
    }

    titleEl.textContent = opts.title || "";
    iconEl.innerHTML = opts.icon ? icon(opts.icon) : "";
    iconEl.hidden = !opts.icon;
    bodyEl.innerHTML = "";
    if (sesi.node) bodyEl.appendChild(sesi.node);
    else if (opts.html) bodyEl.innerHTML = opts.html;

    panel.className = "ov-panel ov-" + (opts.size || "md") + (sesi.variant ? " " + sesi.variant : "");
    scrim.hidden = false;
    document.documentElement.classList.add("ov-lock");
    if (appMain) appMain.setAttribute("aria-hidden", "true");

    stack.push(sesi);
    if (window.Icons) Icons.hydrate(panel);
    // rumus di dalam simpul yang dipindah SUDAH terender; ini hanya untuk
    // isi baru yang mungkin dibuat lewat opts.html
    if (window.MR && opts.html) MR.render(bodyEl);

    var f = focusables();
    (f.length ? f[0] : panel).focus();
    relayout();
    return sesi;
  }

  function close() {
    var sesi = stack.pop();
    if (!sesi) return;

    // kembalikan simpul ke tempat asalnya — rumus & pendengar tetap utuh
    if (sesi.node && sesi.home) {
      if (sesi.anchor && sesi.anchor.parentNode === sesi.home) sesi.home.insertBefore(sesi.node, sesi.anchor);
      else sesi.home.appendChild(sesi.node);
    }
    bodyEl.innerHTML = "";

    if (!stack.length) {
      scrim.hidden = true;
      document.documentElement.classList.remove("ov-lock");
      if (appMain) appMain.removeAttribute("aria-hidden");
    }
    if (sesi.lastFocus && sesi.lastFocus.focus) {
      try { sesi.lastFocus.focus({ preventScroll: true }); } catch (e) { sesi.lastFocus.focus(); }
    }
    if (sesi.onClose) sesi.onClose();
    relayout();
  }

  window.Overlay = {
    open: open,
    close: close,
    isOpen: function () { return stack.length > 0; },
    body: function () { return bodyEl; },
    panel: function () { return panel; }
  };
})();
