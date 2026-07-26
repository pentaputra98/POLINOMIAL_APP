/* =========================================================================
   examples.js — Mengubah blok "Contoh" menjadi KARTU dengan pembahasan
   yang dapat dibuka/tutup.

   Alasannya (permintaan pengguna): contoh bertingkat ditulis sebagai teks
   panjang beruntun, sehingga terlihat berat dan cenderung dilewati siswa.
   Pola yang benar secara pedagogis: tampilkan SOAL dahulu, siswa mencoba
   sendiri, baru membuka pembahasan.

   Struktur yang dikenali dari konten (tidak ada teks yang diubah):
     <p><strong>S1.</strong> …soal…</p>
     <p><em>Pembahasan.</em> …uraian…</p>   (+ elemen lanjutan)
   Label yang dipakai konten: S1/M1/H1, "Contoh S1.", dan "Contoh." biasa.

   Ekspor: window.Examples { apply }
   ========================================================================= */
(function () {
  "use strict";

  function icon(n) { return window.Icons ? Icons.svg(n) : ""; }

  /* Label soal contoh: "S1." "M2." "H3." "Contoh S1." "Contoh." "Contoh (kubik)." */
  var RE_LABEL = /^(?:Contoh\s*)?(?:\(([^)]*)\)\s*)?([SMH])?\s*(\d+)?\s*\.?$/i;

  function labelInfo(txt) {
    var t = String(txt).trim().replace(/\.$/, "");
    if (!/^contoh/i.test(t) && !/^[SMH]\s*\d+$/i.test(t)) return null;
    var m = RE_LABEL.exec(t);
    if (!m) return null;
    var huruf = (m[2] || "").toUpperCase();
    var nomor = m[3] || "";
    var tingkat = huruf === "S" ? "sederhana" : huruf === "M" ? "sedang" : huruf === "H" ? "hots" : "umum";
    var nama = { sederhana: "Sederhana", sedang: "Menengah", hots: "HOTS", umum: "Contoh" }[tingkat];
    return {
      kode: huruf ? huruf + nomor : "Contoh",
      tingkat: tingkat,
      nama: nama,
      catatan: m[1] || ""
    };
  }

  function isMarkerNode(n) {
    return n && n.nodeType === 1 && /^(EM|STRONG|B|I)$/.test(n.tagName) &&
      /^pembahasan/i.test(n.textContent.trim());
  }

  /** Apakah elemen adalah paragraf yang DIAWALI penanda pembahasan? */
  function isPembahasan(el) {
    if (!el || el.tagName !== "P") return false;
    var em = el.querySelector(":scope > em, :scope > strong");
    return !!em && /^pembahasan/i.test(em.textContent.trim());
  }

  /**
   * Konten memakai DUA gaya penulisan:
   *   (a) soal dan pembahasan dipisah baris kosong  → dua paragraf  (Bab 01)
   *   (b) soal dan pembahasan pada baris berurutan  → SATU paragraf (Bab 02–07)
   * Untuk gaya (b) paragraf harus dipotong pada penanda "Pembahasan.".
   */
  function splitAtPembahasan(p) {
    var nodes = [].slice.call(p.childNodes);
    for (var i = 0; i < nodes.length; i++) {
      if (isMarkerNode(nodes[i])) {
        return { q: nodes.slice(0, i), sol: nodes.slice(i) };
      }
    }
    return null;
  }

  /** Elemen yang menghentikan pengumpulan sebuah contoh. */
  function isBoundary(el) {
    if (!el) return true;
    if (/^H[1-4]$/.test(el.tagName)) return true;
    if (el.tagName === "HR") return true;
    if (el.classList && (el.classList.contains("quiz-slot") || el.classList.contains("quiz-block") ||
        el.classList.contains("activity-slot") || el.classList.contains("activity-block") ||
        el.classList.contains("challenge-slot") || el.classList.contains("challenge-block") ||
        el.classList.contains("component-slot"))) return true;
    return false;
  }

  function startsExample(el) {
    if (!el || el.tagName !== "P") return null;
    var st = el.firstElementChild;
    if (!st || st.tagName !== "STRONG") return null;
    // pastikan <strong> benar-benar di awal paragraf
    var pre = el.firstChild;
    while (pre && pre.nodeType === 3 && !pre.nodeValue.trim()) pre = pre.nextSibling;
    if (pre !== st) return null;
    return labelInfo(st.textContent);
  }

  function apply(root) {
    root = root || document;
    var doc = root.querySelector ? (root.querySelector(".doc") || root) : root;
    if (!doc || doc.dataset.examplesDone) return 0;

    var anak = [].slice.call(doc.children);
    var dibuat = 0;

    for (var i = 0; i < anak.length; i++) {
      var el = anak[i];
      var info = startsExample(el);
      if (!info) continue;

      // gaya (b): penanda pembahasan berada di dalam paragraf soal itu sendiri
      var inline = splitAtPembahasan(el);

      // kumpulkan elemen sesudahnya sampai batas
      var isi = [], j = i + 1, adaPembahasan = !!inline;
      while (j < anak.length) {
        var n = anak[j];
        if (isBoundary(n) || startsExample(n)) break;
        if (isPembahasan(n)) adaPembahasan = true;
        isi.push(n); j++;
      }
      // hanya diubah bila memang punya pembahasan — selain itu biarkan apa adanya
      if (!adaPembahasan) continue;

      // pisahkan: sebelum penanda "Pembahasan" = soal, sesudahnya = uraian
      var soalExtra = [], solusi = [], ketemu = !!inline;
      isi.forEach(function (n) {
        if (!ketemu && isPembahasan(n)) { ketemu = true; solusi.push(n); return; }
        (ketemu ? solusi : soalExtra).push(n);
      });

      // rakit kartu
      var card = document.createElement("section");
      card.className = "ex-card lv-" + info.tingkat;
      card.innerHTML =
        '<div class="ex-head">' +
          '<span class="ex-badge">' + info.kode + "</span>" +
          '<span class="ex-level">Contoh · ' + info.nama +
            (info.catatan ? " (" + info.catatan + ")" : "") + "</span>" +
        "</div>" +
        '<div class="ex-q"></div>' +
        '<button type="button" class="ex-toggle" aria-expanded="false">' +
          '<span class="ex-tg-icon">' + icon("circle-question-mark") + "</span>" +
          '<span class="ex-tg-text">Lihat pembahasan</span>' +
          '<span class="ex-tg-caret">' + icon("chevron-down") + "</span>" +
        "</button>" +
        '<div class="ex-sol" hidden></div>';

      el.parentNode.insertBefore(card, el);

      var qBox = card.querySelector(".ex-q");
      var sBox = card.querySelector(".ex-sol");

      // label dibuang dari teks karena sudah tampil sebagai lencana
      var strongEl = el.firstElementChild;
      if (strongEl) strongEl.remove();
      if (el.firstChild && el.firstChild.nodeType === 3) {
        el.firstChild.nodeValue = el.firstChild.nodeValue.replace(/^[\s.]+/, "");
      }

      if (inline) {
        // paragraf dipecah: bagian soal tetap di <p> asli, sisanya pindah ke
        // paragraf baru di dalam kotak pembahasan
        var pSol = document.createElement("p");
        splitAtPembahasan(el).sol.forEach(function (n) { pSol.appendChild(n); });
        qBox.appendChild(el);
        sBox.appendChild(pSol);
      } else {
        qBox.appendChild(el);
        soalExtra.forEach(function (n) { qBox.appendChild(n); });
      }
      solusi.forEach(function (n) { sBox.appendChild(n); });

      if (window.Icons) Icons.hydrate(card);
      dibuat++;
      // DOM berubah (elemen dipindah ke dalam kartu) → segarkan daftar anak
      // lalu lanjutkan penelusuran tepat setelah kartu yang baru dibuat.
      anak = [].slice.call(doc.children);
      i = anak.indexOf(card);
    }

    doc.dataset.examplesDone = "1";
    return dibuat;
  }

  /* Buka/tutup pembahasan */
  document.addEventListener("click", function (e) {
    var btn = e.target.closest && e.target.closest(".ex-toggle");
    if (!btn) return;
    var card = btn.closest(".ex-card");
    var sol = card.querySelector(".ex-sol");
    var buka = sol.hidden;
    sol.hidden = !buka;
    card.classList.toggle("is-open", buka);
    btn.setAttribute("aria-expanded", String(buka));
    btn.querySelector(".ex-tg-text").textContent = buka ? "Sembunyikan pembahasan" : "Lihat pembahasan";
    if (window.Icons) {
      btn.querySelector(".ex-tg-icon").innerHTML = Icons.svg(buka ? "lightbulb" : "circle-question-mark");
    }
    if (window.SFX) SFX.play("pop");
  });

  window.Examples = { apply: apply };
})();
