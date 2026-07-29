/* =========================================================================
   keypad.js — Papan tombol matematika DI DALAM APLIKASI.

   Alasan keberadaannya (keputusan pengguna): pada sebagian perangkat siswa,
   keyboard virtual tidak muncul sehingga soal isian menjadi mustahil
   dikerjakan. Keypad ini digambar oleh aplikasi sendiri, jadi selalu tersedia
   di perangkat mana pun. Input memakai inputmode="none" agar keyboard bawaan
   tidak ikut muncul dan menutupi layar.

   Rancangan tombol dituntun oleh analisis 255 jawaban isian pada konten:
     36% bilangan bulat · 33% ekspresi aljabar · 29% kalimat · 2% pecahan.

   Ekspor: window.Keypad { attach, open, close, isOpen }
   ========================================================================= */
(function () {
  "use strict";

  var sheet = null, target = null, onChangeCb = null;

  function icon(n) { return window.Icons ? Icons.svg(n) : ""; }

  /* Tata letak: [label, sisipan, kelas opsional] */
  var NUM = [
    ["7", "7"], ["8", "8"], ["9", "9"], ["(", "("], [")", ")"],
    ["4", "4"], ["5", "5"], ["6", "6"], ["+", "+"], ["−", "-"],
    ["1", "1"], ["2", "2"], ["3", "3"], ["×", "*"], ["/", "/"],
    ["0", "0"], [",", ","], ["²", "²"], ["³", "³"], ["^", "^"]
  ];
  var VAR = [
    ["x", "x"], ["y", "y"], ["t", "t"], ["k", "k"], ["n", "n"],
    ["a", "a"], ["b", "b"], ["c", "c"], ["d", "d"], ["p", "p"],
    ["H", "H"], ["S", "S"], ["f(", "f("], ["≠", "≠"], ["≥", "≥"],
    // Pangkat disisipkan sebagai superskrip sungguhan (²³⁴) agar apa yang
    // tampil di kotak isian sama dengan yang tertulis di tombol. Mesin kuis
    // menormalkan ² menjadi ^2, jadi penilaian tetap tepat.
    ["x²", "x²"], ["x³", "x³"], ["√", "√"], ["±", "±"], ["spasi", " ", "wide"]
  ];

  function build() {
    if (sheet) return sheet;
    sheet = document.createElement("div");
    sheet.className = "keypad";
    sheet.setAttribute("role", "group");
    sheet.setAttribute("aria-label", "Papan tombol matematika");
    sheet.hidden = true;
    sheet.innerHTML =
      '<div class="kp-bar">' +
        '<div class="kp-preview" id="kpPreview" aria-live="polite"></div>' +
        '<button type="button" class="kp-close" data-act="close" aria-label="Tutup papan tombol">' +
          icon("chevron-down") + "</button>" +
      "</div>" +
      '<div class="kp-tabs" role="tablist">' +
        '<button type="button" class="kp-tab is-active" data-tab="num" role="tab">123</button>' +
        '<button type="button" class="kp-tab" data-tab="var" role="tab">x y z</button>' +
        '<div class="kp-edit">' +
          '<button type="button" class="kp-fn" data-act="back" aria-label="Hapus satu karakter">' + icon("undo-2") + "</button>" +
          '<button type="button" class="kp-fn" data-act="clear" aria-label="Kosongkan">' + icon("trash-2") + "</button>" +
          '<button type="button" class="kp-fn kp-ok" data-act="done" aria-label="Selesai">' + icon("check") + "</button>" +
        "</div>" +
      "</div>" +
      '<div class="kp-grid" id="kpNum"></div>' +
      '<div class="kp-grid" id="kpVar" hidden></div>';
    document.body.appendChild(sheet);

    var fill = function (id, rows) {
      var host = sheet.querySelector(id);
      host.innerHTML = rows.map(function (r) {
        return '<button type="button" class="kp-key' + (r[2] ? " kp-" + r[2] : "") +
          '" data-ins="' + String(r[1]).replace(/"/g, "&quot;") + '">' + r[0] + "</button>";
      }).join("");
    };
    fill("#kpNum", NUM);
    fill("#kpVar", VAR);

    sheet.addEventListener("pointerdown", function (e) {
      // jangan sampai input kehilangan fokus saat tombol ditekan
      if (e.target.closest("button")) e.preventDefault();
    });

    sheet.addEventListener("click", function (e) {
      var b = e.target.closest("button"); if (!b) return;

      if (b.dataset.tab) {
        sheet.querySelectorAll(".kp-tab").forEach(function (t) { t.classList.toggle("is-active", t === b); });
        sheet.querySelector("#kpNum").hidden = b.dataset.tab !== "num";
        sheet.querySelector("#kpVar").hidden = b.dataset.tab !== "var";
        return;
      }
      var act = b.dataset.act;
      if (act === "close" || act === "done") { close(); return; }
      if (act === "back") { edit("", -1); return; }
      if (act === "clear") { if (target) { target.value = ""; fire(); } return; }
      if (b.dataset.ins != null) edit(b.dataset.ins, 0);
    });

    if (window.Icons) Icons.hydrate(sheet);
    return sheet;
  }

  /** Sisipkan teks pada posisi kursor (atau hapus 1 karakter bila del=-1). */
  function edit(ins, del) {
    if (!target) return;
    var s = target.selectionStart, e = target.selectionEnd;
    if (s == null) { s = e = target.value.length; }
    if (del === -1) {
      if (s === e && s > 0) { target.value = target.value.slice(0, s - 1) + target.value.slice(e); s = s - 1; }
      else { target.value = target.value.slice(0, s) + target.value.slice(e); }
    } else {
      target.value = target.value.slice(0, s) + ins + target.value.slice(e);
      s = s + ins.length;
    }
    try { target.setSelectionRange(s, s); } catch (err) {}
    fire();
  }

  function fire() {
    var p = sheet && sheet.querySelector("#kpPreview");
    if (p && target) p.textContent = target.value || "…";
    if (target) target.dispatchEvent(new Event("input", { bubbles: true }));
    if (onChangeCb) onChangeCb(target ? target.value : "");
  }

  function open(input, onChange) {
    build();
    target = input;
    onChangeCb = onChange || null;

    /* MODE NUMERIK. Konten baru menjadikan seluruh soal isian bernilai satu
       bilangan (field `input_mode:"number"`), sehingga tab variabel hanya
       menambah kebingungan. Tab itu disembunyikan dan tab angka dipaksa aktif;
       tombol angka, koma, minus, dan garis miring sudah memadai — termasuk
       untuk `answer_format` berupa "pecahan a/b". */
    var numerik = input && input.dataset && input.dataset.numeric === "1";
    var tabVar = sheet.querySelector('.kp-tab[data-tab="var"]');
    var tabNum = sheet.querySelector('.kp-tab[data-tab="num"]');
    var gridVar = sheet.querySelector("#kpVar");
    var gridNum = sheet.querySelector("#kpNum");
    if (tabVar) tabVar.hidden = !!numerik;
    sheet.classList.toggle("is-numeric", !!numerik);
    if (numerik) {
      if (tabVar) tabVar.classList.remove("is-active");
      if (tabNum) tabNum.classList.add("is-active");
      if (gridVar) gridVar.hidden = true;
      if (gridNum) gridNum.hidden = false;
    }

    sheet.hidden = false;
    /* Reflow dipaksa DI SINI, lalu kelas is-open ditambahkan secara SINKRON.
       Sebelumnya keduanya berada di dalam requestAnimationFrame; bila bingkai
       tidak dihasilkan (tab tersembunyi / peramban menahan animasi), callback
       itu tak pernah jalan sehingga keypad tetap tergeser ke bawah layar dan
       seolah-olah tidak muncul. Memaksa reflow membuat transisi tetap
       beranimasi tanpa bergantung pada rAF. */
    void sheet.offsetHeight;
    sheet.classList.add("is-open");
    /* Beri tahu tata letak berapa tinggi keypad. Dipakai CSS untuk MENYUSUTKAN
       panel pop-up ketika soal isian dibuka dari dalam pop-up, supaya kotak
       isian tidak tertutup papan tombol. */
    var kpH = Math.ceil(sheet.getBoundingClientRect().height) || 300;
    document.documentElement.style.setProperty("--kp-h", kpH + "px");
    document.documentElement.classList.add("kp-up");
    document.body.classList.add("keypad-open");
    fire();
    // pastikan input tetap terlihat di atas keypad
    setTimeout(function () {
      if (input && input.scrollIntoView) input.scrollIntoView({ block: "center", behavior: "smooth" });
    }, 220);
  }

  function close() {
    if (!sheet) return;
    sheet.classList.remove("is-open");
    document.body.classList.remove("keypad-open");
    document.documentElement.classList.remove("kp-up");
    document.documentElement.style.removeProperty("--kp-h");
    setTimeout(function () { sheet.hidden = true; }, 200);
    if (target) target.blur();
    target = null;
  }

  function isOpen() { return !!sheet && !sheet.hidden; }

  /**
   * Pasang keypad pada sebuah <input>. inputmode="none" mencegah keyboard
   * bawaan perangkat muncul, sehingga papan tombol aplikasi menjadi satu-
   * satunya jalur masukan (dan pasti tersedia di semua perangkat).
   */
  function attach(input, onChange, opts) {
    if (!input || input.dataset.keypad) return;
    input.dataset.keypad = "1";
    if (opts && opts.numeric) input.dataset.numeric = "1";
    input.setAttribute("inputmode", "none");
    input.setAttribute("autocomplete", "off");
    input.setAttribute("autocapitalize", "off");
    input.setAttribute("spellcheck", "false");
    input.addEventListener("focus", function () { open(input, onChange); });
    input.addEventListener("click", function () { open(input, onChange); });
  }

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && isOpen()) close();
  });
  // menutup bila mengetuk di luar keypad & di luar input aktif
  document.addEventListener("pointerdown", function (e) {
    if (!isOpen()) return;
    if (sheet.contains(e.target)) return;
    if (target && (e.target === target || target.contains(e.target))) return;
    close();
  });

  window.Keypad = { attach: attach, open: open, close: close, isOpen: isOpen };
})();
