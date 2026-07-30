/* =========================================================================
   enhance.js — Penyempurnaan tampilan konten setelah dirender.

   Menyelesaikan dua masalah nyata di layar portrait:
     1) BAGAN ASCII (peta konsep, skema Horner) terpotong / harus digeser.
        → otomatis diperkecil agar UTUH terlihat, dibungkus kartu ber-header,
          plus tombol "Perbesar" membuka penampil layar-penuh dgn zoom & geser.
     2) RUMUS PANJANG ($$...$$) terpotong.
        → otomatis diperkecil sampai muat (batas wajar), kalau masih lebih
          panjang barulah digeser, dengan penanda visual "bisa digeser".

   Prinsip: TIDAK mengubah konten, hanya penyajian.
   Ekspor: window.Enhance { apply, openViewer }
   ========================================================================= */
(function () {
  "use strict";

  var MIN_DIAGRAM_SCALE = 0.42;   // di bawah ini teks jadi tak terbaca
  var MIN_MATH_SCALE = 0.62;

  function icon(name) { return window.Icons ? Icons.svg(name) : ""; }

  /* ------------------------------------------------------------------ *
   * 1) BAGAN ASCII
   * ------------------------------------------------------------------ */
  /**
   * Cari marker COMPONENT terdekat SEBELUM sebuah bagan. Marker inilah yang
   * memberi tahu jenis komponen yang diminta konten (mis. "Concept Map Mini").
   * Di antara marker dan bagan biasanya masih ada paragraf pengantar.
   */
  function markerFor(el) {
    var n = el, hop = 0;
    while (n && hop < 8) {
      n = n.previousElementSibling; hop++;
      if (!n) break;
      if (n.classList && n.classList.contains("component-slot")) return n.dataset.component || "";
      if (n.querySelector) {
        var inner = n.querySelector(".component-slot");
        if (inner) return inner.dataset.component || "";
      }
    }
    return "";
  }

  function enhanceDiagrams(root) {
    root.querySelectorAll(".pre-wrap:not([data-enhanced])").forEach(function (wrap) {
      var pre = wrap.querySelector("pre");
      if (!pre) return;
      wrap.dataset.enhanced = "1";

      // Direktif konten: peta konsep & bagan alir WAJIB jadi komponen interaktif.
      // Blok ASCII hanya rujukan struktur — tidak ditampilkan mentah.
      var marker = markerFor(wrap);
      if (window.Diagrams) {
        var built = Diagrams.build(pre.textContent, marker);
        if (built) {
          var holder = document.createElement("div");
          holder.className = "diagram-interactive";
          holder.dataset.kind = built.kind;
          holder.innerHTML = built.html;
          wrap.parentNode.insertBefore(holder, wrap);
          wrap.remove();
          if (window.Icons) Icons.hydrate(holder);
          if (window.MR && window.MR.render) MR.render(holder);
          return;
        }
      }

      var title = guessTitle(pre.textContent);
      var card = document.createElement("figure");
      card.className = "diagram-card";
      card.innerHTML =
        '<figcaption class="diagram-head">' +
          '<span class="diagram-title">' + icon("layers") + "<span>" + esc(title) + "</span></span>" +
          '<button type="button" class="diagram-zoom" aria-label="Perbesar bagan">' +
            icon("expand") + "<span>Perbesar</span>" +
          "</button>" +
        "</figcaption>" +
        '<div class="diagram-body"><div class="diagram-fit"></div></div>';

      wrap.parentNode.insertBefore(card, wrap);
      card.querySelector(".diagram-fit").appendChild(pre);
      wrap.remove();

      card.querySelector(".diagram-zoom").addEventListener("click", function () {
        openViewer(pre.textContent, title);
      });

      fitDiagram(card);
    });
  }

  /**
   * Judul bagan diambil dari baris pertama HANYA bila baris itu benar-benar
   * teks (mis. "PEMBAGIAN POLINOMIAL"). Bagan Horner diawali deretan angka
   * ("2  3  4  5") — itu data, bukan judul, jadi dipakai label generik.
   */
  function guessTitle(text) {
    var lines = (text || "").split("\n").map(function (l) { return l.trim(); }).filter(Boolean);
    var body = (text || "");
    var generic = /\|/.test(body) && /^\s*[-+]?\d/.test(lines[0] || "") ? "Skema Horner" : "Bagan / Peta Konsep";

    var first = (lines[0] || "").replace(/[│├└┌┐┘─┬┴┼▼▲►◄|+]/g, " ").trim();
    if (first.length < 4 || first.length > 60) return generic;

    var letters = (first.match(/[A-Za-z]/g) || []).length;
    var digits = (first.match(/\d/g) || []).length;
    // judul yang sah: didominasi huruf, dan bukan deretan angka
    if (letters < 4 || letters < digits * 2) return generic;
    return first;
  }

  function fitDiagram(card) {
    var fit = card.querySelector(".diagram-fit");
    var body = card.querySelector(".diagram-body");
    var pre = fit.querySelector("pre");
    if (!pre) return;
    fit.style.transform = "";
    fit.style.height = "";
    var natural = pre.scrollWidth;
    var avail = body.clientWidth;
    if (!natural || !avail) return;

    var k = Math.min(1, avail / natural);
    if (k >= 0.999) { card.classList.remove("is-scaled"); return; }

    k = Math.max(MIN_DIAGRAM_SCALE, k);
    fit.style.transform = "scale(" + k + ")";
    // tinggi ikut menyusut supaya tak ada ruang kosong di bawah
    fit.style.height = Math.ceil(pre.scrollHeight * k) + "px";
    card.classList.add("is-scaled");
    card.classList.toggle("is-clipped", avail / natural < MIN_DIAGRAM_SCALE);
  }

  /* ------------------------------------------------------------------ *
   * 2) RUMUS PANJANG
   * ------------------------------------------------------------------ */
  function enhanceMath(root) {
    root.querySelectorAll(".katex-display, .m-block").forEach(function (el) {
      /* LEWATI PEMBUNGKUS. `.m-block` kerap membungkus `.katex-display`, dan
         kedua-duanya cocok dengan pemilih di atas. Bila keduanya diproses,
         yang terluar menetapkan tinggi kotak = tinggi HASIL SKALA, padahal
         pembungkus di dalamnya masih menyumbang margin sendiri — rumusnya
         tergeser turun lalu dipotong `overflow:hidden`. Terukur di potret
         390 px: 9 blok terpotong sampai 35 px. Biarkan blok TERDALAM saja
         yang menangani penyesuaian. */
      if (el.querySelector(".katex-display, .m-block")) return;
      var inner = el.querySelector(".katex");
      if (!inner) return;
      // reset dulu agar pengukuran ulang (rotasi layar) benar
      inner.style.transform = "";
      inner.style.transformOrigin = "";
      el.style.height = "";
      el.classList.remove("is-fitted", "is-scrollable");

      var natural = inner.scrollWidth || inner.getBoundingClientRect().width;
      var avail = el.clientWidth;
      if (!natural || !avail || natural <= avail + 1) return;

      var k = avail / natural;
      if (k >= MIN_MATH_SCALE) {
        /* Titik jangkar `left top`, BUKAN `left center`. Dengan jangkar di
           tengah, isi tetap terpusat pada tinggi ASLI sementara tinggi kotak
           diciutkan ke tinggi hasil skala — separuh selisihnya menjorok ke
           bawah dan terpotong. Dengan `top`, tepi atas isi berimpit dengan
           tepi atas kotak sehingga tingginya pas. */
        inner.style.transformOrigin = "left top";
        inner.style.transform = "scale(" + k + ")";
        /* Seluruh aplikasi memakai `box-sizing:border-box`, jadi `height`
           SUDAH termasuk padding. Tanpa menambahkan padding tegak, kotaknya
           kurang tinggi tepat sebesar padding itu dan tepi bawah rumus
           terpotong. */
        var cs = window.getComputedStyle(el);
        var padY = (parseFloat(cs.paddingTop) || 0) + (parseFloat(cs.paddingBottom) || 0);
        el.style.height = Math.ceil(inner.getBoundingClientRect().height + padY) + "px";
        el.classList.add("is-fitted");
      } else {
        // terlalu panjang untuk diperkecil dgn nyaman → biarkan digeser
        el.classList.add("is-scrollable");
      }
    });
  }

  /* ------------------------------------------------------------------ *
   * 3) PENAMPIL LAYAR-PENUH (zoom + geser) untuk bagan
   * ------------------------------------------------------------------ */
  var viewer = null;
  function buildViewer() {
    if (viewer) return viewer;
    viewer = document.createElement("div");
    viewer.className = "dgview";
    viewer.setAttribute("role", "dialog");
    viewer.setAttribute("aria-modal", "true");
    viewer.hidden = true;
    viewer.innerHTML =
      '<div class="dgview-bar">' +
        '<strong class="dgview-title"></strong>' +
        '<div class="dgview-tools">' +
          '<button type="button" data-act="out" aria-label="Perkecil">' + icon("zoom-out") + "</button>" +
          '<span class="dgview-zoom">100%</span>' +
          '<button type="button" data-act="in" aria-label="Perbesar">' + icon("zoom-in") + "</button>" +
          '<button type="button" data-act="reset" aria-label="Ukuran awal">' + icon("move") + "</button>" +
          '<button type="button" data-act="close" aria-label="Tutup">' + icon("x") + "</button>" +
        "</div>" +
      "</div>" +
      '<div class="dgview-stage"><pre class="dgview-pre"></pre></div>';
    document.body.appendChild(viewer);

    var st = { scale: 1, tx: 0, ty: 0 };
    var pre = viewer.querySelector(".dgview-pre");
    var stage = viewer.querySelector(".dgview-stage");
    var lbl = viewer.querySelector(".dgview-zoom");

    function paint() {
      pre.style.transform = "translate(" + st.tx + "px," + st.ty + "px) scale(" + st.scale + ")";
      lbl.textContent = Math.round(st.scale * 100) + "%";
    }
    /* Batas perkecil: JANGAN lebih kecil daripada skala "muat lebar", karena
       di bawah itu bagan menjadi terlalu kecil untuk dibaca. Nilai ini
       dihitung ulang tiap kali penampil dibuka (bergantung lebar layar). */
    var minScale = 0.5;
    function computeMinScale() {
      var avail = stage.clientWidth - 24, nat = pre.scrollWidth || 1;
      var fit = Math.min(1, avail / nat);
      minScale = Math.max(0.5, Math.min(1, fit));   // tak pernah di bawah 50%
      return fit;
    }
    function zoom(f, cx, cy) {
      var next = Math.max(minScale, Math.min(6, st.scale * f));
      f = next / st.scale;
      if (cx != null) { st.tx = cx - (cx - st.tx) * f; st.ty = cy - (cy - st.ty) * f; }
      st.scale = next; paint();
      syncZoomButtons();
    }
    function syncZoomButtons() {
      var out = viewer.querySelector('[data-act="out"]');
      var inn = viewer.querySelector('[data-act="in"]');
      if (out) out.disabled = st.scale <= minScale + 1e-3;
      if (inn) inn.disabled = st.scale >= 6 - 1e-3;
    }
    function reset() {
      var fit = computeMinScale();
      st = { scale: fit < 1 ? Math.max(minScale, fit) : 1, tx: 0, ty: 0 };
      paint(); syncZoomButtons();
    }
    viewer._reset = reset;

    viewer.querySelector(".dgview-tools").addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;
      var a = b.dataset.act;
      if (a === "in") zoom(1.25, stage.clientWidth / 2, stage.clientHeight / 2);
      else if (a === "out") zoom(1 / 1.25, stage.clientWidth / 2, stage.clientHeight / 2);
      else if (a === "reset") reset();
      else if (a === "close") closeViewer();
    });

    // geser & pinch
    var pts = new Map(), pinchD = 0, last = null;
    stage.addEventListener("pointerdown", function (e) {
      stage.setPointerCapture(e.pointerId);
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 1) last = { x: e.clientX, y: e.clientY };
      if (pts.size === 2) {
        var p = Array.from(pts.values());
        pinchD = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
      }
    });
    stage.addEventListener("pointermove", function (e) {
      if (!pts.has(e.pointerId)) return;
      pts.set(e.pointerId, { x: e.clientX, y: e.clientY });
      if (pts.size === 2) {
        var p = Array.from(pts.values());
        var d = Math.hypot(p[0].x - p[1].x, p[0].y - p[1].y);
        if (pinchD) {
          var r = stage.getBoundingClientRect();
          zoom(d / pinchD, (p[0].x + p[1].x) / 2 - r.left, (p[0].y + p[1].y) / 2 - r.top);
        }
        pinchD = d; return;
      }
      if (last) {
        st.tx += e.clientX - last.x; st.ty += e.clientY - last.y;
        last = { x: e.clientX, y: e.clientY }; paint();
      }
    });
    function up(e) {
      try { stage.releasePointerCapture(e.pointerId); } catch (err) {}
      pts.delete(e.pointerId);
      if (pts.size < 2) pinchD = 0;
      if (pts.size === 0) last = null;
    }
    stage.addEventListener("pointerup", up);
    stage.addEventListener("pointercancel", up);
    stage.addEventListener("pointerleave", up);
    // dipakai closeViewer() untuk membersihkan sisa state geser
    viewer._releasePointers = function () {
      pts.forEach(function (_, id) { try { stage.releasePointerCapture(id); } catch (e) {} });
      pts.clear(); pinchD = 0; last = null;
    };
    stage.addEventListener("wheel", function (e) {
      e.preventDefault();
      var r = stage.getBoundingClientRect();
      zoom(e.deltaY < 0 ? 1.12 : 1 / 1.12, e.clientX - r.left, e.clientY - r.top);
    }, { passive: false });

    document.addEventListener("keydown", function (e) {
      if (viewer.hidden) return;
      if (e.key === "Escape") closeViewer();
      if (e.key === "+" || e.key === "=") zoom(1.25);
      if (e.key === "-") zoom(1 / 1.25);
      if (e.key === "0") reset();
    });
    return viewer;
  }

  function openViewer(text, title) {
    var v = buildViewer();
    v.querySelector(".dgview-pre").textContent = text;
    v.querySelector(".dgview-title").textContent = title || "Bagan";
    v.hidden = false;
    document.body.classList.add("dgview-open");
    requestAnimationFrame(function () { v.classList.add("is-open"); v._reset(); });
    if (window.SFX) SFX.play("pop");
  }
  function closeViewer() {
    if (!viewer) return;
    if (document.activeElement && viewer.contains(document.activeElement)) document.activeElement.blur();
    viewer.classList.remove("is-open");
    document.body.classList.remove("dgview-open");
    // Lepaskan sisa pointer-capture & state geser. Tanpa ini, pointer yang
    // masih "tertangkap" dapat membuat halaman terasa tidak responsif.
    var stage = viewer.querySelector(".dgview-stage");
    if (stage && viewer._releasePointers) viewer._releasePointers();
    setTimeout(function () {
      viewer.hidden = true;                // dipasangkan dgn .dgview[hidden]{display:none!important}
    }, 200);
  }

  /* ------------------------------------------------------------------ *
   * Orkestrasi
   * ------------------------------------------------------------------ */
  function esc(s) {
    return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
  }

  var refitT;
  function refit(root) {
    root = root || document;
    root.querySelectorAll(".diagram-card").forEach(fitDiagram);
    enhanceMath(root);
  }

  function apply(root) {
    root = root || document;
    enhanceDiagrams(root);
    if (window.Icons) Icons.hydrate(root);
    // rumus perlu diukur setelah KaTeX & font selesai → tunggu 1 frame
    requestAnimationFrame(function () { enhanceMath(root); });
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function () { refit(root); }).catch(function () {});
    }
  }

  window.addEventListener("resize", function () {
    clearTimeout(refitT);
    refitT = setTimeout(function () { refit(document); }, 180);
  });
  window.addEventListener("orientationchange", function () {
    setTimeout(function () { refit(document); }, 320);
  });

  window.Enhance = { apply: apply, refit: refit, openViewer: openViewer };
})();
