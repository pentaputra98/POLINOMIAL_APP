/* =========================================================================
   app.js — Shell SPA: router hash berbasis manifest, render bab, chrome
   (drawer, tema terang/gelap, SFX, fullscreen, toast), progres & prefetch.

   Rute:
     #/                 Beranda
     #/daftar           Daftar Isi (dari manifest)
     #/bab/:slug        Pembaca bab
     #/ref/:id          Glosarium / Cheat Sheet
   ========================================================================= */
(function () {
  "use strict";

  var gid = function (id) { return document.getElementById(id); };
  var viewRoot = gid("viewRoot"), appMain = gid("app");
  var drawer = gid("drawer"), scrim = gid("scrim"), drawerNav = gid("drawerNav");
  var btnPrev = gid("btnPrev"), btnNext = gid("btnNext");

  /* ---------------- SFX (WebAudio, nol byte aset) ---------------- */
  var SFX = (function () {
    var actx = null;
    var enabled = window.Store ? (Store.prefs().sfx !== false) : true;
    function ac() { if (!actx) actx = new (window.AudioContext || window.webkitAudioContext)(); return actx; }
    function tone(freq, dur, type, gain) {
      if (!enabled) return;
      try {
        var c = ac(), o = c.createOscillator(), g = c.createGain();
        o.type = type || "sine"; o.frequency.value = freq;
        g.gain.setValueAtTime(gain || 0.08, c.currentTime);
        g.gain.exponentialRampToValueAtTime(0.0001, c.currentTime + dur);
        o.connect(g); g.connect(c.destination); o.start(); o.stop(c.currentTime + dur);
      } catch (e) {}
    }
    return {
      play: function (name) {
        switch (name) {
          case "pop": tone(660, .12, "triangle", .10); setTimeout(function(){tone(880,.10,"triangle",.08);}, 60); break;
          case "correct": tone(523, .10, "sine", .09); setTimeout(function(){tone(784,.14,"sine",.09);}, 90); break;
          case "thud": tone(150, .14, "sawtooth", .10); break;
          case "swoosh": tone(420, .10, "sine", .05); break;
          case "win": [523,659,784,1047].forEach(function(f,i){ setTimeout(function(){tone(f,.16,"triangle",.09);}, i*110); }); break;
          default: tone(500, .08, "sine", .06);
        }
      },
      isOn: function () { return enabled; },
      set: function (v) { enabled = v; if (window.Store) Store.setPref("sfx", v); }
    };
  })();
  window.SFX = SFX;

  /* ---------------- Toast ---------------- */
  var toastT;
  function showToast(msg, kind) {
    var t = gid("toast"); if (!t) return;
    t.className = "toast" + (kind ? " " + kind : "");
    t.innerHTML = msg; t.hidden = false;
    requestAnimationFrame(function () { t.classList.add("is-show"); });
    clearTimeout(toastT);
    toastT = setTimeout(function () {
      t.classList.remove("is-show");
      setTimeout(function () { t.hidden = true; }, 220);
    }, 2400);
  }
  window.showToast = showToast;

  /* ---------------- Header gamifikasi (XP & level) ---------------- */
  function refreshXPChip() {
    if (!window.Gamify) return;
    var st = Gamify.state();
    var lv = gid("xpLevel"), fill = gid("xpFill"), num = gid("xpNum"), chip = gid("xpChip");
    if (lv) lv.textContent = st.level;
    if (fill) fill.style.width = st.pct + "%";
    if (num) num.textContent = st.xp + " XP";
    if (chip) {
      chip.title = st.title + " · " + st.xp + " XP" +
        (st.isMax ? " (level tertinggi)" : " · " + (st.nextXp - st.xp) + " XP lagi menuju " + st.nextTitle);
      chip.setAttribute("aria-label", "Level " + st.level + " " + st.title + ", " + st.xp + " XP");
    }
  }
  window.refreshXPChip = refreshXPChip;

  /* ---------------- Tema terang/gelap ---------------- */
  function currentTheme() { return document.documentElement.getAttribute("data-theme") || "light"; }
  function applyTheme(t) {
    document.documentElement.setAttribute("data-theme", t);
    Store.setPref("theme", t);
    var meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", t === "dark" ? "#191622" : "#FFF8E7");
    var b = gid("btnTheme");
    if (b) {
      b.innerHTML = Icons.svg(t === "dark" ? "sun" : "moon");
      b.setAttribute("aria-label", t === "dark" ? "Ganti ke mode terang" : "Ganti ke mode gelap");
    }
  }

  /* ---------------- Router ---------------- */
  var state = { view: "beranda", key: null };

  function parseHash() {
    var h = (location.hash || "#/").replace(/^#\/?/, "");
    var p = h.split("/").filter(Boolean);
    if (!p.length) return { view: "beranda" };
    if (p[0] === "daftar") return { view: "daftar" };
    if (p[0] === "bab") return { view: "bab", slug: decodeURIComponent(p[1] || "") };
    if (p[0] === "ref") return { view: "ref", id: decodeURIComponent(p[1] || "") };
    return { view: "beranda" };
  }
  function go(path) { location.hash = "#/" + path.replace(/^\/+/, ""); }
  window.go = go;

  /* ---------------- Helper tampilan ---------------- */
  function esc(s) { return String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;"); }

  /** Total XP yang tersedia, dijumlahkan dari manifest (bukan angka keras). */
  function totalXP() {
    return Content.chapters().reduce(function (a, c) { return a + (c.xp_available || 0); }, 0);
  }

  function progressStats() {
    var chs = Content.chapters();
    var done = chs.filter(function (c) { return Store.isRead(c.id); }).length;
    return { done: done, total: chs.length, pct: chs.length ? Math.round(done / chs.length * 100) : 0 };
  }

  function setLoading(msg) {
    viewRoot.innerHTML = '<div class="loading"><span class="spinner" aria-hidden="true"></span>' +
      '<p>' + esc(msg || "Memuat…") + '</p></div>';
  }
  function setError(msg, detail) {
    viewRoot.innerHTML =
      '<div class="doc"><div class="callout err"><div class="callout-h">' +
      '<i data-icon="triangle-alert"></i> ' + esc(msg) + '</div>' +
      '<p>' + esc(detail || "") + '</p>' +
      '<p class="mini-hint">Pastikan aplikasi dibuka lewat server (http://localhost:8899), bukan file://</p>' +
      '</div></div>';
    if (window.Icons) Icons.hydrate(viewRoot);
  }

  /* ---------------- VIEW: Beranda ---------------- */
  function renderBeranda() {
    var m = Content.getManifest(), st = progressStats();
    var last = Store.route();
    var resume = (last && last !== "#/" && last.indexOf("#/bab/") === 0) ? last : null;

    viewRoot.innerHTML =
      '<section class="hero">' +
        '<span class="hero-badge">' + esc(m.meta.level) + ' · ' + esc(m.meta.track) + '</span>' +
        '<h1 class="hero-title">Petualangan<br /><span class="hl">Polinomial</span></h1>' +
        '<p class="hero-sub">' + esc(m.meta.subtitle) + '</p>' +
        '<div class="progress-wrap">' +
          '<div class="progress-label"><span>Progres Belajarmu</span><span>' + st.pct + '%</span></div>' +
          '<div class="progress-bar"><div class="progress-fill" style="width:' + st.pct + '%"></div></div>' +
          '<p class="progress-note">' + st.done + ' dari ' + st.total + ' bab selesai</p>' +
        '</div>' +
        '<div class="hero-actions">' +
          (resume ? '<button class="btn btn-primary btn-lg" data-href="' + esc(resume.replace(/^#\//, "")) + '">Lanjutkan <i data-icon="circle-play"></i></button>' : "") +
          '<button class="btn ' + (resume ? "" : "btn-primary ") + 'btn-lg" data-href="daftar">' +
            (resume ? 'Daftar Materi' : 'Mulai Belajar') + ' ' + Icons.svg(resume ? "list" : "circle-play") + '</button>' +
        '</div>' +
        '<div class="hero-meta">' +
          '<span><i data-icon="book-open"></i> ' + st.total + ' bab</span>' +
          '<span><i data-icon="target"></i> ' + totalXP() + ' XP tersedia</span>' +
          '<span><i data-icon="trophy"></i> ' + Content.chapters().filter(function(c){return c.challenge;}).length + ' tantangan</span>' +
          '<span><i data-icon="wifi"></i> bisa offline</span>' +
        '</div>' +
      '</section>';
    if (window.Icons) Icons.hydrate(viewRoot);
  }

  /* ---------------- VIEW: Daftar Isi ---------------- */
  function renderDaftar() {
    var m = Content.getManifest(), st = progressStats();
    var html =
      '<div class="doc">' +
        '<h1>Daftar Materi</h1>' +
        '<p class="lead">' + esc(m.meta.title) + '. Belajar berurutan dari Bab 00 supaya tiap bab berdiri di atas bab sebelumnya.</p>' +
        '<div class="progress-wrap compact">' +
          '<div class="progress-label"><span>Progres</span><span>' + st.pct + '%</span></div>' +
          '<div class="progress-bar"><div class="progress-fill" style="width:' + st.pct + '%"></div></div>' +
        '</div>' +
        '<div class="ch-list">';

    Content.chapters().forEach(function (c) {
      var read = Store.isRead(c.id);
      var comps = (c.competencies || []).join(" · ");
      html +=
        '<button class="ch-card' + (read ? " is-read" : "") + '" data-href="bab/' + esc(c.slug) + '">' +
          '<span class="ch-num">' + String(c.order).padStart(2, "0") + '</span>' +
          '<span class="ch-body">' +
            '<span class="ch-title">' + esc(c.title) + '</span>' +
            '<span class="ch-sum">' + esc(c.summary || "") + '</span>' +
            '<span class="ch-meta">' +
              '<span class="tagpill"><i data-icon="clock"></i> ' + c.duration_min + ' mnt</span>' +
              (comps ? '<span class="tagpill">' + esc(comps) + '</span>' : "") +
              (c.quiz_sets ? '<span class="tagpill"><i data-icon="list-checks"></i> ' + c.quiz_sets.length + ' set</span>' : "") +
            '</span>' +
          '</span>' +
          '<span class="ch-state">' +
            (read ? '<i data-icon="circle-check"></i><small>Selesai</small>'
                  : '<i data-icon="circle-play"></i><small>Mulai</small>') +
          '</span>' +
        '</button>';
    });

    html += '</div><h2>Referensi</h2><div class="ref-list">';
    Content.resources().forEach(function (r) {
      html +=
        '<button class="ref-card" data-href="ref/' + esc(r.id) + '">' +
          Icons.svg(r.id === "glosarium" ? "book-marked" : "zap") +
          '<span>' + esc(r.title) + '</span>' +
        '</button>';
    });
    html += '</div></div>';
    viewRoot.innerHTML = html;
    if (window.Icons) Icons.hydrate(viewRoot);
  }

  /* ---------------- VIEW: Dokumen (bab / referensi) ---------------- */
  /**
   * Judul bab diawali emoji di berkas .md. Di daftar isi pun emoji tersebut
   * diganti ikon Lucide agar konsisten dengan tampilan judul aslinya —
   * berkas sumber tetap tidak diubah.
   */
  function tocEntry(text) {
    var t = String(text).replace(/[*`]/g, "").trim();
    var kc = /^([0-9])️?⃣\s*/.exec(t);
    if (kc) return { icon: '<span class="toc-num">' + kc[1] + "</span>", text: t.slice(kc[0].length).trim() };
    if (window.Icons) {
      var cand = [t.slice(0, 2) + "️", t.slice(0, 2), t.slice(0, 1) + "️", t.slice(0, 1)];
      for (var i = 0; i < cand.length; i++) {
        var hit = Icons.forEmoji(cand[i]);
        if (hit) {
          var raw = cand[i].replace("️", "");
          return {
            icon: '<span class="toc-ico' + (hit.cls ? " " + hit.cls : "") + '">' + Icons.svg(hit.name) + "</span>",
            text: t.slice(raw.length).replace(/^[\s️]+/, "")
          };
        }
      }
    }
    return { icon: '<span class="toc-ico toc-ico-dot"></span>', text: t };
  }

  function buildToc(headings) {
    var items = headings.filter(function (h) { return h.level === 2; });
    if (items.length < 3) return "";
    return '<details class="toc"><summary><i data-icon="list"></i> Daftar isi bab</summary><ol>' +
      items.map(function (h) {
        var e = tocEntry(h.text);
        return '<li><a href="#' + esc(h.id) + '" data-toc="' + esc(h.id) + '">' +
          e.icon + "<span>" + esc(e.text) + "</span></a></li>";
      }).join("") + "</ol></details>";
  }

  /**
   * Daftar isi bab menempel (sticky) di atas area baca. Fungsi ini hanya
   * menambahkan penanda visual saat sedang menempel; posisinya sendiri
   * diatur CSS. Daftar tautannya melayang (absolute) sehingga membukanya
   * TIDAK menggeser konten di bawahnya.
   */
  var tocObserver = null;
  function setupStickyToc() {
    var toc = viewRoot.querySelector(".toc");
    if (!toc) return;
    if (tocObserver) { tocObserver.disconnect(); tocObserver = null; }

    // sentinel tepat di atas ToC: bila keluar dari layar, ToC sedang menempel
    var sentinel = document.createElement("div");
    sentinel.className = "toc-sentinel";
    sentinel.setAttribute("aria-hidden", "true");
    toc.parentNode.insertBefore(sentinel, toc);

    if ("IntersectionObserver" in window) {
      tocObserver = new IntersectionObserver(function (entries) {
        toc.classList.toggle("is-stuck", !entries[0].isIntersecting);
      }, { root: appMain, threshold: 0 });
      tocObserver.observe(sentinel);
    }
  }

  // Dropdown daftar isi melayang → tutup saat mengeklik di luar / menekan Esc
  document.addEventListener("click", function (e) {
    var toc = document.querySelector(".toc[open]");
    if (toc && !toc.contains(e.target)) toc.open = false;
  });
  document.addEventListener("keydown", function (e) {
    if (e.key !== "Escape") return;
    var toc = document.querySelector(".toc[open]");
    if (toc) { toc.open = false; toc.querySelector("summary").focus(); }
  });

  function renderDoc(meta, doc, kind) {
    var head = "";
    if (kind === "bab") {
      var nb = Content.neighbours(meta.id);
      head =
        '<div class="doc-head">' +
          '<span class="doc-kicker">Bab ' + String(meta.order).padStart(2, "0") +
            (meta.competencies && meta.competencies.length ? ' · ' + esc(meta.competencies.join(" ")) : "") + '</span>' +
          '<div class="doc-headmeta">' +
            '<span class="tagpill"><i data-icon="clock"></i> ' + meta.duration_min + ' menit</span>' +
            (meta.quiz_sets ? '<span class="tagpill"><i data-icon="list-checks"></i> ' + meta.quiz_sets.length + ' set latihan</span>' : "") +
            (Store.isRead(meta.id) ? '<span class="tagpill ok"><i data-icon="circle-check"></i> Selesai</span>' : "") +
          '</div>' +
        '</div>';
      void nb;
    }

    viewRoot.innerHTML =
      '<article class="doc">' + head + buildToc(doc.headings) + doc.html +
      (kind === "bab" ? '<div class="doc-foot" id="docFoot"></div>' : "") +
      "</article>";

    // Render KaTeX SETELAH injeksi DOM (wajib untuk SPA)
    if (window.MR && window.MR.render) window.MR.render(viewRoot);

    // Slot kuis & komponen belum aktif di Fase 1 → disembunyikan supaya
    // tidak ada area kosong. Konten statis di sekitarnya tetap informatif.
    // Mesin kuis (Fase 3) dipasang pada tiap slot set soal.
    if (window.Quiz) {
      viewRoot.querySelectorAll(".quiz-slot").forEach(function (el) {
        var set = (doc.quizzes || []).filter(function (q) { return q.set_id === el.dataset.setId; })[0];
        if (set) Quiz.mount(el, set, meta.id);
        else el.hidden = true;
      });
    } else {
      viewRoot.querySelectorAll(".quiz-slot").forEach(function (el) { el.hidden = true; });
    }
    // Latihan Interaktif (Fase 4)
    if (window.Activity) {
      viewRoot.querySelectorAll(".activity-slot").forEach(function (el) {
        var a = (doc.activities || []).filter(function (x) { return x.id === el.dataset.activityId; })[0];
        if (a) Activity.mount(el, a); else el.hidden = true;
      });
    } else {
      viewRoot.querySelectorAll(".activity-slot").forEach(function (el) { el.hidden = true; });
    }
    // Tantangan Akhir Bab (Fase 4)
    if (window.Challenge) {
      viewRoot.querySelectorAll(".challenge-slot").forEach(function (el) {
        var c = (doc.challenges || []).filter(function (x) { return x.id === el.dataset.challengeId; })[0];
        if (c) Challenge.mount(el, c, doc); else el.hidden = true;
      });
    } else {
      viewRoot.querySelectorAll(".challenge-slot").forEach(function (el) { el.hidden = true; });
    }
    viewRoot.querySelectorAll(".component-slot").forEach(function (el) { el.hidden = true; });

    if (kind === "bab") renderDocFoot(meta);

    // Kerangka halaman: Info Cards -> kartu + pop-up, dan bilah sub-materi
    // sticky. Dijalankan SEBELUM penggantian emoji supaya <summary> masih asli
    // (label kartu diambil dari sana, ikonnya dari atribut data-icon).
    if (window.PageKit && kind === "bab") PageKit.apply(viewRoot, doc.front);
    // Emoji pemimpin pada judul/callout diganti ikon Lucide (berkas .md tetap utuh)
    if (window.Icons) { Icons.applyEmoji(viewRoot); Icons.hydrate(viewRoot); }
    // Direktif <!-- VISUAL: ... --> diwujudkan. WAJIB sesudah MR.render:
    // panah berpegang pada jangkar \htmlClass yang baru ada setelah KaTeX
    // selesai merender, dan posisinya diukur dari tata letak sungguhan.
    if (window.Visuals) Visuals.mount(viewRoot);
    if (window.Enhance) Enhance.apply(viewRoot);
    setupStickyToc();
  }

  function renderDocFoot(meta) {
    var foot = gid("docFoot"); if (!foot) return;
    var nb = Content.neighbours(meta.id);
    var read = Store.isRead(meta.id);
    foot.innerHTML =
      '<div class="finish-card">' +
        '<div class="finish-h"><i data-icon="flag"></i> Selesai membaca bab ini?</div>' +
        '<p>Tandai selesai untuk memperbarui progres belajarmu.</p>' +
        '<div class="finish-actions">' +
          '<button class="btn ' + (read ? "" : "btn-primary") + '" id="btnMarkRead"' + (read ? " disabled" : "") + '>' +
            (read ? '<i data-icon="circle-check"></i> Sudah selesai' : '<i data-icon="check"></i> Tandai selesai') +
          '</button>' +
          (nb.next ? '<button class="btn btn-nav-accent" data-href="bab/' + esc(nb.next.slug) + '">' +
            'Bab berikutnya <i data-icon="arrow-right"></i></button>' : "") +
        '</div>' +
      '</div>';
    var b = gid("btnMarkRead");
    if (b) b.addEventListener("click", function () {
      Store.markRead(meta.id); SFX.play("correct");
      showToast('<i data-icon="circle-check"></i> Bab ditandai selesai!', "ok");
      renderDocFoot(meta); buildDrawer();
    });
    if (window.Icons) Icons.hydrate(foot);
  }

  function showBab(slug) {
    var meta = Content.chapterBySlug(slug);
    if (!meta) { setError("Bab tidak ditemukan", 'Slug "' + slug + '" tidak ada di manifest.'); return; }
    setLoading("Memuat " + meta.title + "…");
    Content.loadChapter(meta).then(function (doc) {
      if (state.key !== "bab:" + slug) return;      // rute sudah berpindah
      renderDoc(meta, doc, "bab");
      appMain.scrollTop = 0;
      Content.prefetchAround(meta.id);
      if (window.Scratchpad && Scratchpad.setContext) Scratchpad.setContext(meta.id);
    }).catch(function (err) { setError("Gagal memuat bab", err.message); });
  }

  function showRef(id) {
    var meta = Content.resourceById(id);
    if (!meta) { setError("Referensi tidak ditemukan", 'Id "' + id + '" tidak ada di manifest.'); return; }
    setLoading("Memuat " + meta.title + "…");
    Content.loadDoc(meta.file).then(function (doc) {
      if (state.key !== "ref:" + id) return;
      renderDoc(meta, doc, "ref");
      appMain.scrollTop = 0;
      if (window.Scratchpad && Scratchpad.setContext) Scratchpad.setContext("ref-" + id);
    }).catch(function (err) { setError("Gagal memuat referensi", err.message); });
  }

  /* ---------------- Bottom nav (prev/next kontekstual) ---------------- */
  function navTargets() {
    if (state.view === "bab") {
      var meta = Content.chapterBySlug(state.slug);
      if (meta) {
        var nb = Content.neighbours(meta.id);
        return {
          prev: nb.prev ? { label: "Bab " + String(nb.prev.order).padStart(2, "0"), href: "bab/" + nb.prev.slug } : { label: "Daftar", href: "daftar" },
          next: nb.next ? { label: "Bab " + String(nb.next.order).padStart(2, "0"), href: "bab/" + nb.next.slug } : { label: "Selesai", href: "daftar" }
        };
      }
    }
    if (state.view === "ref") return { prev: { label: "Daftar", href: "daftar" }, next: { label: "Beranda", href: "" } };
    if (state.view === "daftar") return { prev: { label: "Beranda", href: "" }, next: { label: "Bab 00", href: "bab/" + (Content.chapters()[0] || {}).slug } };
    return { prev: null, next: { label: "Mulai", href: "daftar" } };
  }
  function updateNav() {
    var t = navTargets();
    function fill(btn, tgt, isNext) {
      if (!tgt) { btn.disabled = true; btn.innerHTML = isNext ? "" : '<i data-icon="chevron-left"></i>'; return; }
      btn.disabled = false;
      btn.dataset.href = tgt.href;
      btn.innerHTML = isNext
        ? "<span>" + esc(tgt.label) + '</span> <i data-icon="chevron-right"></i>'
        : '<i data-icon="chevron-left"></i> <span>' + esc(tgt.label) + "</span>";
    }
    fill(btnPrev, t.prev, false);
    fill(btnNext, t.next, true);
    if (window.Icons) { Icons.hydrate(btnPrev); Icons.hydrate(btnNext); }
  }
  btnPrev.addEventListener("click", function () { if (btnPrev.dataset.href != null) { SFX.play("swoosh"); go(btnPrev.dataset.href); } });
  btnNext.addEventListener("click", function () { if (btnNext.dataset.href != null) { SFX.play("swoosh"); go(btnNext.dataset.href); } });

  /* ---------------- Drawer ---------------- */
  function buildDrawer() {
    if (!Content.getManifest()) return;
    var html =
      '<a class="drawer-link" href="#/" data-key="beranda"><i data-icon="house"></i> Beranda</a>' +
      '<a class="drawer-link" href="#/daftar" data-key="daftar"><i data-icon="list"></i> Daftar Materi</a>' +
      '<div class="drawer-sep">Bab</div>';
    Content.chapters().forEach(function (c) {
      html += '<a class="drawer-link ch" href="#/bab/' + esc(c.slug) + '" data-key="bab:' + esc(c.slug) + '">' +
        '<span class="chip">' + String(c.order).padStart(2, "0") + "</span>" +
        '<span class="dl-title">' + esc(c.title) + "</span>" +
        (Store.isRead(c.id) ? '<i data-icon="circle-check"></i>' : "") +
        "</a>";
    });
    html += '<div class="drawer-sep">Referensi</div>';
    Content.resources().forEach(function (r) {
      html += '<a class="drawer-link" href="#/ref/' + esc(r.id) + '" data-key="ref:' + esc(r.id) + '">' +
        '<i data-icon="' + (r.id === "glosarium" ? "book-marked" : "zap") + '"></i> ' + esc(r.title) + "</a>";
    });
    drawerNav.innerHTML = html;
    if (window.Icons) Icons.hydrate(drawerNav);
    markDrawerCurrent();
  }
  function markDrawerCurrent() {
    drawerNav.querySelectorAll(".drawer-link").forEach(function (a) {
      a.classList.toggle("is-current", a.dataset.key === state.key);
    });
  }
  function openDrawer() {
    drawer.classList.add("is-open"); drawer.setAttribute("aria-hidden", "false");
    gid("btnMenu").setAttribute("aria-expanded", "true");
    scrim.hidden = false; requestAnimationFrame(function () { scrim.classList.add("is-show"); });
  }
  function closeDrawer() {
    if (document.activeElement && drawer.contains(document.activeElement)) document.activeElement.blur();
    drawer.classList.remove("is-open"); drawer.setAttribute("aria-hidden", "true");
    gid("btnMenu").setAttribute("aria-expanded", "false");
    scrim.classList.remove("is-show"); setTimeout(function () { scrim.hidden = true; }, 200);
  }
  gid("btnMenu").addEventListener("click", function () { SFX.play("pop"); openDrawer(); });
  gid("btnDrawerClose").addEventListener("click", closeDrawer);
  scrim.addEventListener("click", closeDrawer);
  drawer.addEventListener("click", function (e) { if (e.target.closest(".drawer-link")) closeDrawer(); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && drawer.classList.contains("is-open")) closeDrawer();
  });
  // Edge-swipe buka drawer
  var edgeX = null;
  document.addEventListener("touchstart", function (e) {
    if (e.touches[0].clientX < 22 && !drawer.classList.contains("is-open")) edgeX = e.touches[0].clientX;
  }, { passive: true });
  document.addEventListener("touchmove", function (e) {
    if (edgeX !== null && e.touches[0].clientX - edgeX > 45) { openDrawer(); edgeX = null; }
  }, { passive: true });
  document.addEventListener("touchend", function () { edgeX = null; }, { passive: true });

  /* ---------------- Delegasi navigasi ---------------- */
  document.addEventListener("click", function (e) {
    var el = e.target.closest("[data-href]");
    if (el && !el.disabled) { SFX.play("pop"); go(el.dataset.href); return; }
    var toc = e.target.closest("[data-toc]");
    if (toc) {
      e.preventDefault();
      var t = document.getElementById(toc.dataset.toc);
      if (t) { t.scrollIntoView({ behavior: "smooth", block: "start" }); t.classList.add("flash"); setTimeout(function(){t.classList.remove("flash");}, 1200); }
      var d = toc.closest("details"); if (d) d.open = false;
    }
  });

  /* ---------------- Tombol chrome ---------------- */
  gid("btnTheme").addEventListener("click", function () {
    SFX.play("pop"); applyTheme(currentTheme() === "dark" ? "light" : "dark");
  });
  var btnSound = gid("btnSound");
  function reflectSound() {
    btnSound.innerHTML = Icons.svg(SFX.isOn() ? "volume-2" : "volume-x");
    btnSound.setAttribute("aria-pressed", String(SFX.isOn()));
  }
  btnSound.addEventListener("click", function () { SFX.set(!SFX.isOn()); reflectSound(); if (SFX.isOn()) SFX.play("pop"); });

  var btnFull = gid("btnFull");
  function fsEl() { return document.fullscreenElement || document.webkitFullscreenElement; }
  function reflectFull() {
    btnFull.innerHTML = Icons.svg(fsEl() ? "minimize" : "maximize");
    btnFull.setAttribute("aria-label", fsEl() ? "Keluar layar penuh" : "Layar penuh");
  }
  btnFull.addEventListener("click", function () {
    SFX.play("pop");
    var el = document.documentElement;
    if (!fsEl()) (el.requestFullscreen || el.webkitRequestFullscreen || function () {}).call(el);
    else (document.exitFullscreen || document.webkitExitFullscreen || function () {}).call(document);
  });
  document.addEventListener("fullscreenchange", reflectFull);
  document.addEventListener("webkitfullscreenchange", reflectFull);

  /* ---------------- Render rute ---------------- */
  function render() {
    var r = parseHash();
    state.view = r.view; state.slug = r.slug; state.id = r.id;
    state.key = r.view === "bab" ? "bab:" + r.slug : (r.view === "ref" ? "ref:" + r.id : r.view);

    if (r.view === "beranda") { renderBeranda(); appMain.scrollTop = 0; }
    else if (r.view === "daftar") { renderDaftar(); appMain.scrollTop = 0; }
    else if (r.view === "bab") showBab(r.slug);
    else if (r.view === "ref") showRef(r.id);

    updateNav(); markDrawerCurrent(); closeDrawer();
    Store.route(location.hash || "#/");
  }
  window.addEventListener("hashchange", render);

  /* ---------------- Service worker ---------------- */
  if ("serviceWorker" in navigator) {
    window.addEventListener("load", function () { navigator.serviceWorker.register("sw.js").catch(function () {}); });
  }

  /* ---------------- Boot ---------------- */
  if (window.Icons) Icons.hydrate(document);
  applyTheme(currentTheme());
  reflectSound(); reflectFull();
  setLoading("Menyiapkan materi…");

  Content.loadManifest().then(function (man) {
    if (window.Gamify) {
      Gamify.init(man);
      Gamify.onChange(function () { refreshXPChip(); });
      refreshXPChip();
    }
    buildDrawer();
    if (!location.hash || location.hash === "#") {
      var saved = Store.route();
      if (saved && saved !== "#/") { location.hash = saved; return; }  // hashchange → render
    }
    render();
  }).catch(function (err) {
    setError("Gagal memuat manifest konten", err.message);
  });
})();
