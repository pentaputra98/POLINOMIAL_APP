/* =========================================================================
   pagekit.js — kerangka halaman bab (page_architecture di manifest)

   FASE 2 mengerjakan dua bagian:

   1) INFO CARDS
      Konten menulis bagian pembuka sebagai <details data-card="..." data-icon="...">.
      Bila dibiarkan, keenamnya menjadi akordeon teks panjang. Di sini keenamnya
      diubah menjadi DERETAN KARTU ringkas berwarna berbeda; diketuk -> POP-UP.
      Peserta boleh melewatinya dan langsung menuju materi.

   2) BILAH SUB-MATERI STICKY
      Judul sub-materi menempel di bawah topbar saat digulir dan BERGANTI
      OTOMATIS saat memasuki sub-materi berikutnya. Bilah ini juga memuat
      pintasan angka 1-5 dan tombol daftar isi bab.

   CATATAN PENTING SOAL KaTeX
   Seluruh isi kartu dipindahkan sebagai SIMPUL DOM (tidak pernah disalin lewat
   innerHTML), sehingga rumus yang sudah dirender KaTeX pada Fase 1 tetap utuh.
   Lihat js/overlay.js.

   Ekspor: window.PageKit
   ========================================================================= */
(function () {
  "use strict";

  /* Warna kartu — memakai token palet yang sudah ada agar konsisten dengan
     tema terang & gelap. Kunci = data-card pada berkas .md. */
  var CARD_TONE = {
    tujuan: "tone-mint",
    kompetensi: "tone-lavender",
    prasyarat: "tone-peach",
    waktu: "tone-sky",
    peta: "tone-butter",
    motivasi: "tone-coral",
    cara: "tone-sage"
  };
  /* Label ringkas pada kartu. Judul panjangnya tetap dipakai di pop-up. */
  var CARD_LABEL = {
    tujuan: "Tujuan", kompetensi: "Kompetensi", prasyarat: "Prasyarat",
    waktu: "Waktu", peta: "Peta Konsep", motivasi: "Motivasi", cara: "Cara Pakai"
  };

  var LEAD_EMOJI = /^[\s‍️]*(?:[0-9]️?⃣|[←-⇿⌀-➿⬀-⯿\u{1f000}-\u{1faff}][️‍]*)+[\s]*/u;

  function el(tag, cls, html) {
    var n = document.createElement(tag);
    if (cls) n.className = cls;
    if (html != null) n.innerHTML = html;
    return n;
  }
  function icon(n) { return window.Icons ? window.Icons.svg(n) : ""; }
  function esc(s) {
    return String(s == null ? "" : s)
      .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
  }
  function stripEmoji(s) { return String(s || "").replace(LEAD_EMOJI, "").trim(); }
  function norm(s) {
    return String(s || "").toLowerCase()
      .replace(/[^a-z0-9\s]/g, " ").replace(/\s+/g, " ").trim();
  }

  /* ===================================================================== *
   * 1) INFO CARDS
   * ===================================================================== */
  function buildInfoCards(root) {
    var slots = root.querySelectorAll('.component-slot[data-component="Info Cards"]');
    var dipakai = 0;

    slots.forEach(function (slot) {
      // kumpulkan <details data-card> yang berurutan setelah marker
      var kartu = [], n = slot.nextElementSibling, lompat = 0;
      while (n && lompat < 40) {
        if (n.tagName === "DETAILS" && n.hasAttribute("data-card")) {
          kartu.push(n); n = n.nextElementSibling; lompat++; continue;
        }
        // lewati pembungkus kosong / <hr> di antara kartu
        if (n.tagName === "HR" || (n.tagName === "P" && !n.textContent.trim())) {
          n = n.nextElementSibling; lompat++; continue;
        }
        break;
      }
      if (!kartu.length) return;

      var grid = el("div", "infocards");
      grid.setAttribute("role", "list");

      kartu.forEach(function (d) {
        var key = d.getAttribute("data-card") || "";
        var ikon = d.getAttribute("data-icon") || "info";
        var sum = d.querySelector("summary");
        var judul = stripEmoji(sum ? sum.textContent : key);
        var label = CARD_LABEL[key] || judul;

        // Isi kartu tetap tinggal di halaman (tersembunyi) supaya rumusnya
        // sudah terender; saat dibuka, simpulnya DIPINDAHKAN ke pop-up.
        var isi = el("div", "infocard-body");
        while (d.firstChild) {
          var c = d.firstChild;
          d.removeChild(c);
          if (c.nodeType === 1 && c.tagName === "SUMMARY") continue;
          isi.appendChild(c);
        }
        var gudang = el("div", "infocard-store");
        gudang.hidden = true;
        gudang.appendChild(isi);

        var btn = el("button", "infocard " + (CARD_TONE[key] || "tone-sky"),
          '<span class="infocard-ico">' + icon(ikon) + "</span>" +
          '<span class="infocard-label">' + label + "</span>" +
          '<span class="infocard-more">' + icon("chevron-right") + "</span>");
        btn.type = "button";
        btn.setAttribute("role", "listitem");
        btn.setAttribute("aria-label", judul + " — buka");
        btn.addEventListener("click", function () {
          if (!window.Overlay) return;
          /* Kelas nada diteruskan APA ADANYA (mis. "tone-peach"): kelas itulah
             yang menetapkan --tone, lalu .ov-head mewarisinya. Memberi awalan
             "ov-" membuat kelasnya tidak dikenal CSS dan kepala panel kembali
             ke warna baku. */
          Overlay.open({
            title: judul, icon: ikon, node: isi, size: "md",
            variant: CARD_TONE[key] || "tone-sky"
          });
        });

        grid.appendChild(btn);
        grid.appendChild(gudang);
        d.parentNode.removeChild(d);
        dipakai++;
      });

      var petunjuk = el("p", "infocards-hint",
        icon("arrow-right") + " Keenam kartu di atas bersifat pilihan — Anda dapat langsung menuju materi.");
      slot.parentNode.insertBefore(grid, slot.nextSibling);
      grid.parentNode.insertBefore(petunjuk, grid.nextSibling);
      slot.hidden = true;
    });
    return dipakai;
  }

  /* ===================================================================== *
   * 2) BILAH SUB-MATERI STICKY
   * ===================================================================== */
  var state = null;

  function destroy() {
    if (!state) return;
    if (state.onScroll) state.scroller.removeEventListener("scroll", state.onScroll);
    if (state.onResize) window.removeEventListener("resize", state.onResize);
    state = null;
  }

  function buildSubMateriBar(root, front) {
    var list = (front && front.sub_materi) || [];
    if (!list.length) return 0;

    // pasangkan judul sub-materi pada frontmatter dengan <h2> di halaman
    var h2s = [].slice.call(root.querySelectorAll(".doc h2"));
    var seksi = [];
    list.forEach(function (sm, i) {
      var judul = typeof sm === "string" ? sm : (sm.title || "");
      var target = norm(judul);
      for (var j = 0; j < h2s.length; j++) {
        var t = norm(stripEmoji(h2s[j].textContent));
        if (t === target || (t && target && t.indexOf(target) === 0)) {
          var no = (typeof sm === "object" && sm.id) || String(i + 1);
          /* Penanda pada heading: menjadikan pemetaan frontmatter -> h2 dapat
             diaudit dari luar (dan dipakai gaya/penjangkaran). */
          h2s[j].dataset.smIndex = String(seksi.length);
          h2s[j].dataset.smNo = no;
          seksi.push({ i: i, no: no, title: judul, h: h2s[j] });
          h2s.splice(j, 1);
          break;
        }
      }
    });
    if (seksi.length < 2) return 0;

    var bar = el("div", "sm-bar");
    bar.setAttribute("role", "navigation");
    bar.setAttribute("aria-label", "Navigasi sub-materi");
    var now = el("span", "sm-now",
      '<span class="sm-badge">' + seksi[0].no + "</span>" +
      '<span class="sm-title"></span>');
    var chips = el("span", "sm-chips");
    seksi.forEach(function (s) {
      var c = el("button", "sm-chip", s.no);
      c.type = "button";
      c.title = s.title;
      c.setAttribute("aria-label", "Sub-materi " + s.no + ": " + s.title);
      c.addEventListener("click", function () { goto(s); });
      chips.appendChild(c);
      s.chip = c;
    });
    var tocBtn = el("button", "icon-btn sm-toc", icon("list"));
    tocBtn.type = "button";
    tocBtn.setAttribute("aria-label", "Daftar isi bab");

    bar.appendChild(now); bar.appendChild(chips); bar.appendChild(tocBtn);

    // Daftar isi lama dijadikan isi pop-up, sehingga hanya ADA SATU bilah
    // menempel dan tidak ada dua sticky yang bertumpuk.
    var toc = root.querySelector("details.toc");
    if (toc) {
      toc.hidden = true;
      /* Daftar isi disusun ulang menjadi KARTU, bukan deretan tautan teks,
         agar sejalan dengan komponen lain (Info Cards, kartu paket).
         Tautan aslinya tetap dipakai sebagai sumber judul & anchor. */
      var tautan = [].slice.call(toc.querySelectorAll("ol a[data-toc]"));
      var kisi = el("div", "toccards");
      tautan.forEach(function (a, i) {
        /* Tautan daftar isi sudah memuat lencana angka (mis. "1") di dalam
           teksnya, hasil penggantian emoji keycap. Bila diambil apa adanya,
           judul kartu menjadi "1Apa Itu Polinomial" — angkanya ganda dengan
           lencana kartu. Salinan dibuat lalu lencana/ikonnya dibuang. */
        var salin = a.cloneNode(true);
        salin.querySelectorAll(".num-badge,.lead-icon,.tail-icon,svg").forEach(function (n) {
          n.parentNode.removeChild(n);
        });
        var judul = (salin.textContent || "").replace(/^\s*\d+\s*/, "").trim() ||
                    (a.textContent || "").trim();
        var b = el("button", "toccard");
        b.type = "button";
        b.innerHTML =
          '<span class="toccard-no">' + (i + 1) + "</span>" +
          '<span class="toccard-title">' + esc(judul) + "</span>" +
          '<span class="toccard-go">' + icon("arrow-right") + "</span>";
        b.addEventListener("click", function () {
          var id = a.getAttribute("data-toc");
          var target = document.getElementById(id) ||
                       root.querySelector('[id="' + (window.CSS && CSS.escape ? CSS.escape(id) : id) + '"]');
          if (window.Overlay) Overlay.close();
          if (!target) return;
          // lompat instan: pop-up baru saja ditutup, animasi hanya membingungkan
          jumpTo(target);
        });
        kisi.appendChild(b);
      });
      tocBtn.addEventListener("click", function () {
        if (!window.Overlay) return;
        Overlay.open({ title: "Daftar isi bab", icon: "list", node: kisi, size: "sm" });
      });
    } else {
      tocBtn.hidden = true;
    }

    var head = root.querySelector(".doc-head");
    var doc = root.querySelector(".doc");
    if (head && head.parentNode) head.parentNode.insertBefore(bar, head.nextSibling);
    else if (doc) doc.insertBefore(bar, doc.firstChild);
    else return 0;

    var scroller = document.getElementById("app") || document.scrollingElement;
    var titleEl = now.querySelector(".sm-title");
    var badgeEl = now.querySelector(".sm-badge");
    var aktif = -1;

    function barH() { return bar.getBoundingClientRect().height || 44; }

    /* Lompat INSTAN ke sebuah elemen, memperhitungkan tinggi bilah sticky.
       Dipakai kartu Daftar Isi: pop-up baru saja ditutup, sehingga animasi
       gulir justru membingungkan. */
    function jumpTo(target) {
      if (!target) return;
      var prev = scroller.style.scrollBehavior;
      scroller.style.scrollBehavior = "auto";
      scroller.scrollTop += target.getBoundingClientRect().top -
                            bar.getBoundingClientRect().bottom - 8;
      scroller.style.scrollBehavior = prev;
      paint();
      target.setAttribute("tabindex", "-1");
      try { target.focus({ preventScroll: true }); } catch (e) {}
    }

    function goto(s) {
      var prev = scroller.style.scrollBehavior;
      scroller.style.scrollBehavior = "smooth";
      var top = s.h.getBoundingClientRect().top - bar.getBoundingClientRect().bottom - 8;
      scroller.scrollBy({ top: top, behavior: "smooth" });
      setTimeout(function () { scroller.style.scrollBehavior = prev; }, 600);
      s.h.setAttribute("tabindex", "-1");
      setTimeout(function () { try { s.h.focus({ preventScroll: true }); } catch (e) {} }, 620);
    }

    function paint() {
      var rb = bar.getBoundingClientRect();
      /* GARIS AKTIVASI. Sebuah sub-materi dianggap sudah dimasuki begitu
         judulnya menyentuh sisi bawah bilah. Ambang harus MEMBERI KELONGGARAN:
         dengan `bottom + 4` saja, heading yang berhenti tepat beberapa piksel
         di bawah bilah belum terhitung, sehingga bilah tertinggal satu
         sub-materi — itulah bug yang terukur pada pengujian pertama. */
      var garis = rb.bottom + 16;
      var idx = 0;
      for (var i = 0; i < seksi.length; i++) {
        if (seksi[i].h.getBoundingClientRect().top <= garis) idx = i;
      }
      /* Penanda "menempel" dihitung langsung dari posisi, bukan dari
         IntersectionObserver, agar tidak pernah tertinggal satu bingkai. */
      var topScroller = (scroller.getBoundingClientRect
        ? scroller.getBoundingClientRect().top : 0);
      bar.classList.toggle("is-stuck", rb.top <= topScroller + 1);

      // sebelum sub-materi pertama: tetap tampilkan yang pertama
      if (idx === aktif) return;
      aktif = idx;
      var s = seksi[idx];
      badgeEl.textContent = s.no;
      titleEl.textContent = s.title;
      seksi.forEach(function (x, i) {
        x.chip.classList.toggle("is-on", i === idx);
        if (i === idx) x.chip.setAttribute("aria-current", "true");
        else x.chip.removeAttribute("aria-current");
      });
    }

    var rafId = 0;
    function onScroll() {
      if (rafId) return;
      rafId = requestAnimationFrame(function () { rafId = 0; paint(); });
    }
    function onResize() { aktif = -1; paint(); }

    scroller.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    state = { scroller: scroller, onScroll: onScroll, onResize: onResize };

    paint();
    return seksi.length;
  }

  /* ===================================================================== *
   * MOUNT
   * ===================================================================== */
  function apply(root, front) {
    destroy();
    if (!root) return { cards: 0, sections: 0 };
    var cards = buildInfoCards(root);
    var sections = buildSubMateriBar(root, front);
    return { cards: cards, sections: sections };
  }

  window.PageKit = { apply: apply, destroy: destroy };
})();
