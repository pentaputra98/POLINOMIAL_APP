/* =========================================================================
   scratchpad.js — Papan coretan BERBASIS VEKTOR (bukan piksel).

   Kenapa vektor:
     - Penghapus bekerja PER-GORESAN (hapus 1 coretan utuh), bukan mengikis piksel
     - Zoom & panning tanpa gambar pecah (digambar ulang tiap frame)
     - Undo/redo murah (cukup daftar goresan)
     - Simpanan jauh lebih kecil daripada dataURL kanvas

   Model:
     stroke = { color, width, pts:[{x,y}, ...] }   ← koordinat DUNIA
     view   = { scale, tx, ty }                     ← layar = dunia*scale + t

   Interaksi:
     - 1 jari / mouse : menggambar (atau menghapus / menggeser sesuai alat)
     - 2 jari         : pinch-zoom + geser (selalu aktif, alat apa pun)
     - roda mouse     : zoom pada posisi kursor

   Ekspor: window.Scratchpad
   ========================================================================= */
(function () {
  "use strict";

  var gid = function (id) { return document.getElementById(id); };

  var sheet, canvas, ctx, rangeEl, rangeIcon;
  var DPR = Math.max(1, window.devicePixelRatio || 1);

  /* ---------------- State ---------------- */
  var strokes = [];      // goresan permanen
  var undone = [];       // tumpukan redo
  var live = null;       // goresan yang sedang digambar
  var view = { scale: 1, tx: 0, ty: 0 };
  var tool = "pen";      // pen | eraser | pan
  var color = "#2b2b2b";
  var width = 3;
  var ctxKey = "default";
  var isOpen = false;
  var dirty = false;

  /* ---------------- Koordinat ---------------- */
  function toWorld(sx, sy) {
    return { x: (sx - view.tx) / view.scale, y: (sy - view.ty) / view.scale };
  }
  function canvasPoint(e) {
    var r = canvas.getBoundingClientRect();
    return { x: e.clientX - r.left, y: e.clientY - r.top };
  }

  /* ---------------- Ukuran kanvas ---------------- */
  function resize() {
    if (!canvas) return;
    var r = canvas.getBoundingClientRect();
    if (r.width < 2 || r.height < 2) return;
    DPR = Math.max(1, window.devicePixelRatio || 1);
    var w = Math.round(r.width * DPR), h = Math.round(r.height * DPR);
    if (canvas.width === w && canvas.height === h) { redraw(); return; }
    canvas.width = w; canvas.height = h;
    ctx = canvas.getContext("2d");
    redraw();
  }

  /* ---------------- Menggambar ---------------- */
  function redraw() {
    if (!ctx || !canvas.width) return;
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    drawGrid();

    ctx.setTransform(DPR * view.scale, 0, 0, DPR * view.scale, DPR * view.tx, DPR * view.ty);
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    for (var i = 0; i < strokes.length; i++) drawStroke(strokes[i]);
    if (live) drawStroke(live);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
  }

  function drawGrid() {
    var step = 28 * view.scale;
    if (step < 12) return;
    var ox = view.tx % step, oy = view.ty % step;
    var cw = canvas.width / DPR, ch = canvas.height / DPR;
    ctx.save();
    ctx.setTransform(DPR, 0, 0, DPR, 0, 0);
    ctx.strokeStyle = "rgba(43,43,43,.07)";
    ctx.lineWidth = 1;
    ctx.beginPath();
    for (var x = ox; x < cw; x += step) { ctx.moveTo(x, 0); ctx.lineTo(x, ch); }
    for (var y = oy; y < ch; y += step) { ctx.moveTo(0, y); ctx.lineTo(cw, y); }
    ctx.stroke();
    ctx.restore();
  }

  function drawStroke(s) {
    if (!s || !s.pts || !s.pts.length) return;
    if (s.pts.length === 1) {
      ctx.beginPath();
      ctx.arc(s.pts[0].x, s.pts[0].y, Math.max(0.5, s.width / 2), 0, Math.PI * 2);
      ctx.fillStyle = s.color; ctx.fill(); return;
    }
    ctx.strokeStyle = s.color;
    ctx.lineWidth = s.width;
    ctx.beginPath();
    ctx.moveTo(s.pts[0].x, s.pts[0].y);
    for (var i = 1; i < s.pts.length - 1; i++) {
      var mx = (s.pts[i].x + s.pts[i + 1].x) / 2;
      var my = (s.pts[i].y + s.pts[i + 1].y) / 2;
      ctx.quadraticCurveTo(s.pts[i].x, s.pts[i].y, mx, my);   // haluskan
    }
    var last = s.pts[s.pts.length - 1];
    ctx.lineTo(last.x, last.y);
    ctx.stroke();
  }

  /* ---------------- Penghapus PER-GORESAN ---------------- */
  function distToSegment(p, a, b) {
    var dx = b.x - a.x, dy = b.y - a.y;
    var len2 = dx * dx + dy * dy;
    if (!len2) return Math.hypot(p.x - a.x, p.y - a.y);
    var t = Math.max(0, Math.min(1, ((p.x - a.x) * dx + (p.y - a.y) * dy) / len2));
    return Math.hypot(p.x - (a.x + t * dx), p.y - (a.y + t * dy));
  }
  function strokeHit(s, p, radius) {
    var tol = radius + (s.width || 1) / 2;
    if (s.pts.length === 1) return Math.hypot(p.x - s.pts[0].x, p.y - s.pts[0].y) <= tol;
    for (var i = 0; i < s.pts.length - 1; i++) {
      if (distToSegment(p, s.pts[i], s.pts[i + 1]) <= tol) return true;
    }
    return false;
  }
  function eraseAt(worldPt) {
    var radius = (width / 2 + 3) / view.scale;
    var removed = false;
    for (var i = strokes.length - 1; i >= 0; i--) {
      if (strokeHit(strokes[i], worldPt, radius)) { strokes.splice(i, 1); removed = true; }
    }
    if (removed) { undone.length = 0; dirty = true; redraw(); reflectUndo(); save(); }
    return removed;
  }

  /* ---------------- Undo / Redo ---------------- */
  function undo() {
    if (!strokes.length) return;
    undone.push(strokes.pop());
    dirty = true; redraw(); reflectUndo(); save();
  }
  function redo() {
    if (!undone.length) return;
    strokes.push(undone.pop());
    dirty = true; redraw(); reflectUndo(); save();
  }
  function reflectUndo() {
    var u = gid("btnUndo"), r = gid("btnRedo");
    if (u) u.disabled = !strokes.length;
    if (r) r.disabled = !undone.length;
  }

  /* ---------------- Zoom & Pan ---------------- */
  function zoomAt(sx, sy, factor) {
    var next = Math.max(0.25, Math.min(6, view.scale * factor));
    factor = next / view.scale;
    view.tx = sx - (sx - view.tx) * factor;
    view.ty = sy - (sy - view.ty) * factor;
    view.scale = next;
    redraw(); reflectZoom();
  }
  function resetView() { view = { scale: 1, tx: 0, ty: 0 }; redraw(); reflectZoom(); }
  function reflectZoom() {
    var el = gid("zoomLabel");
    if (el) el.textContent = Math.round(view.scale * 100) + "%";
  }

  /* ---------------- Pointer ---------------- */
  var pointers = new Map();
  var pinch = null;
  var panLast = null;

  function onDown(e) {
    if (!isOpen) return;
    e.preventDefault();
    try { canvas.setPointerCapture(e.pointerId); } catch (err) {}
    pointers.set(e.pointerId, canvasPoint(e));

    if (pointers.size === 2) {                       // mulai pinch
      if (live) { if (live.pts.length) strokes.push(live); live = null; reflectUndo(); }
      var p = Array.from(pointers.values());
      pinch = {
        dist: Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y),
        mid: { x: (p[0].x + p[1].x) / 2, y: (p[0].y + p[1].y) / 2 }
      };
      redraw(); return;
    }
    if (pointers.size > 2) return;

    var sp = canvasPoint(e);
    if (tool === "pan") { panLast = sp; canvas.style.cursor = "grabbing"; return; }
    if (tool === "eraser") { eraseAt(toWorld(sp.x, sp.y)); return; }

    live = { color: color, width: width / view.scale, pts: [toWorld(sp.x, sp.y)] };
    undone.length = 0;
    redraw();
  }

  function onMove(e) {
    if (!isOpen || !pointers.has(e.pointerId)) return;
    pointers.set(e.pointerId, canvasPoint(e));

    if (pointers.size === 2 && pinch) {              // pinch-zoom + geser
      var p = Array.from(pointers.values());
      var d = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
      var mid = { x: (p[0].x + p[1].x) / 2, y: (p[0].y + p[1].y) / 2 };
      if (pinch.dist > 0) {
        var next = Math.max(0.25, Math.min(6, view.scale * (d / pinch.dist)));
        var f = next / view.scale;
        view.tx = mid.x - (mid.x - view.tx) * f + (mid.x - pinch.mid.x);
        view.ty = mid.y - (mid.y - view.ty) * f + (mid.y - pinch.mid.y);
        view.scale = next;
      }
      pinch = { dist: d, mid: mid };
      redraw(); reflectZoom(); return;
    }

    var sp = canvasPoint(e);
    if (tool === "pan" && panLast) {
      view.tx += sp.x - panLast.x; view.ty += sp.y - panLast.y;
      panLast = sp; redraw(); return;
    }
    if (tool === "eraser" && pointers.size === 1) { eraseAt(toWorld(sp.x, sp.y)); return; }

    if (live) {
      var w = toWorld(sp.x, sp.y);
      var last = live.pts[live.pts.length - 1];
      if (Math.hypot(w.x - last.x, w.y - last.y) * view.scale >= 1.2) { live.pts.push(w); redraw(); }
    }
  }

  function onUp(e) {
    pointers.delete(e.pointerId);
    if (pointers.size < 2) pinch = null;
    if (pointers.size === 0) {
      panLast = null;
      if (tool === "pan") canvas.style.cursor = "grab";
      if (live) {
        if (live.pts.length) { strokes.push(live); dirty = true; }
        live = null; redraw(); reflectUndo(); save();
      }
    }
  }

  /* ---------------- Alat ---------------- */
  function setTool(t) {
    tool = t;
    var er = gid("btnEraser"), pn = gid("btnPan");
    if (er) er.classList.toggle("is-active", t === "eraser");
    if (pn) pn.classList.toggle("is-active", t === "pan");
    document.querySelectorAll("#penColors .pen").forEach(function (b) {
      b.classList.toggle("is-active", t === "pen" && b.dataset.color === color);
    });
    // ikon di samping slider ikut berganti sesuai alat aktif
    if (rangeIcon && window.Icons) {
      rangeIcon.innerHTML = Icons.svg(t === "eraser" ? "eraser" : (t === "pan" ? "hand" : "pen-line"));
    }
    if (rangeEl) rangeEl.setAttribute("aria-label", t === "eraser" ? "Ukuran penghapus" : "Ukuran pena");
    updateCursor();
  }

  function updateCursor() {
    if (!canvas) return;
    if (tool === "pan") { canvas.style.cursor = "grab"; return; }
    if (tool === "eraser") {
      var d = Math.max(12, Math.min(64, width + 6));
      var s = '<svg xmlns="http://www.w3.org/2000/svg" width="' + d + '" height="' + d + '">' +
        '<circle cx="' + d / 2 + '" cy="' + d / 2 + '" r="' + (d / 2 - 1.5) +
        '" fill="rgba(255,158,128,.28)" stroke="#2b2b2b" stroke-width="2"/></svg>';
      canvas.style.cursor = "url('data:image/svg+xml;utf8," + encodeURIComponent(s) + "') " +
        d / 2 + " " + d / 2 + ", crosshair";
      return;
    }
    canvas.style.cursor = "crosshair";
  }

  /* ---------------- Simpan / muat ---------------- */
  function key() { return "poli.v1.scratch." + ctxKey; }
  var saveT;
  function save() {
    clearTimeout(saveT);
    saveT = setTimeout(function () {
      try {
        if (!strokes.length) localStorage.removeItem(key());
        else localStorage.setItem(key(), JSON.stringify({ v: 2, s: strokes }));
      } catch (e) {}
      dirty = false;
    }, 400);
  }
  function load() {
    strokes = []; undone = []; live = null;
    try {
      var raw = localStorage.getItem(key());
      if (raw) {
        var d = JSON.parse(raw);
        if (d && d.v === 2 && Array.isArray(d.s)) strokes = d.s;
      }
    } catch (e) {}
    resetView(); reflectUndo();
  }
  function setContext(k) {
    k = k || "default";
    if (k === ctxKey) return;
    if (dirty) save();
    ctxKey = k;
    load();
  }

  /* ---------------- Buka / tutup ---------------- */
  function open() {
    isOpen = true;
    sheet.classList.add("is-open");
    sheet.setAttribute("aria-hidden", "false");
    var fab = gid("fabScratch");
    if (fab) fab.classList.add("is-hidden");
    // Sheet langsung terbuka PENUH (tidak setengah), jadi kanvas pasti
    // punya ukuran nyata. Ukur di frame berikut + sekali lagi setelah animasi.
    requestAnimationFrame(function () {
      resize();
      setTimeout(resize, 280);
    });
    if (window.SFX) SFX.play("swoosh");
  }
  function close() {
    if (document.activeElement && sheet.contains(document.activeElement)) document.activeElement.blur();
    isOpen = false;
    sheet.classList.remove("is-open");
    sheet.setAttribute("aria-hidden", "true");
    var fab = gid("fabScratch");
    if (fab) fab.classList.remove("is-hidden");
    save();
  }
  function clearAll() {
    if (!strokes.length) return;
    undone = strokes.slice().reverse();
    strokes = [];
    dirty = true; redraw(); reflectUndo(); save();
    if (window.showToast) showToast("Papan dibersihkan — tekan undo untuk mengembalikan");
  }

  /* ---------------- Init ---------------- */
  function init() {
    sheet = gid("scratchSheet");
    canvas = gid("scratchCanvas");
    rangeEl = gid("strokeRange");
    rangeIcon = gid("strokeIcon");
    if (!sheet || !canvas) return;
    ctx = canvas.getContext("2d");

    canvas.addEventListener("pointerdown", onDown);
    canvas.addEventListener("pointermove", onMove);
    window.addEventListener("pointerup", onUp);
    window.addEventListener("pointercancel", onUp);
    canvas.addEventListener("wheel", function (e) {
      if (!isOpen) return;
      e.preventDefault();
      var p = canvasPoint(e);
      zoomAt(p.x, p.y, e.deltaY < 0 ? 1.12 : 1 / 1.12);
    }, { passive: false });

    var bind = function (id, fn) { var el = gid(id); if (el) el.addEventListener("click", fn); };
    bind("fabScratch", open);
    bind("btnScratchClose", close);
    bind("btnUndo", undo);
    bind("btnRedo", redo);
    bind("btnClear", clearAll);
    bind("btnEraser", function () { setTool(tool === "eraser" ? "pen" : "eraser"); });
    bind("btnPan", function () { setTool(tool === "pan" ? "pen" : "pan"); });
    bind("btnZoomIn", function () { zoomAt(canvas.clientWidth / 2, canvas.clientHeight / 2, 1.25); });
    bind("btnZoomOut", function () { zoomAt(canvas.clientWidth / 2, canvas.clientHeight / 2, 1 / 1.25); });
    bind("btnZoomReset", resetView);

    document.querySelectorAll("#penColors .pen").forEach(function (b) {
      b.addEventListener("click", function () { color = b.dataset.color; setTool("pen"); });
    });
    if (rangeEl) rangeEl.addEventListener("input", function () {
      width = parseInt(rangeEl.value, 10) || 3;
      updateCursor();
    });

    document.addEventListener("keydown", function (e) {
      if (!isOpen) return;
      if (e.key === "Escape") close();
      var k = (e.key || "").toLowerCase();
      if ((e.ctrlKey || e.metaKey) && k === "z") { e.preventDefault(); e.shiftKey ? redo() : undo(); }
      if ((e.ctrlKey || e.metaKey) && k === "y") { e.preventDefault(); redo(); }
    });

    if (window.ResizeObserver) new ResizeObserver(resize).observe(canvas);
    window.addEventListener("resize", resize);
    window.addEventListener("orientationchange", function () { setTimeout(resize, 300); });
    sheet.addEventListener("transitionend", function (e) { if (e.propertyName === "transform") resize(); });

    setTool("pen");
    load();
    reflectZoom();
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();

  window.Scratchpad = {
    open: open, close: close, setContext: setContext,
    clear: clearAll, undo: undo, redo: redo, resetView: resetView,
    isOpen: function () { return isOpen; },
    strokes: function () { return strokes; }
  };
})();
