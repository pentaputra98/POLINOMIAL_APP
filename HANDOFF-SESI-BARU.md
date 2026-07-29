# HANDOFF — Lanjutkan di Sesi Baru

> Dibuat 29 Juli 2026. Berkas ini adalah **titik masuk** untuk sesi berikutnya.
> Rincian lengkap tiap fase ada di `SERAH-TERIMA.md` (§10b, §11–§15).

---

## 0. KALIMAT PEMBUKA UNTUK SESI BARU

Tempel ini ke sesi baru:

> Lanjutkan pekerjaan aplikasi Polinomial di `POLINOMIAL_APP`. Baca
> `HANDOFF-SESI-BARU.md` lalu `SERAH-TERIMA.md` sebelum menyentuh kode; jangan
> mengandalkan ingatan. Fase 1–5 sudah selesai dan ada **10 commit lokal yang
> BELUM di-push** — push tetap ditahan sampai saya beri izin. Konfirmasikan
> bahwa kamu sudah membaca keduanya, lalu ringkas keadaan aplikasi.

---

## 1. STATUS SINGKAT

| Hal | Keadaan |
|---|---|
| Fase 1–5 | **SELESAI** dan terverifikasi |
| Commit lokal | **10 commit ahead** dari `origin/main` |
| Working tree | bersih (0 berkas berubah) |
| Versi aset | `?b=82` · cache SW `polinomial-v64` |
| Menunggu | **Final Review pemilik**, lalu izin push |

### 🚫 ATURAN PALING PENTING: JANGAN PUSH
Aplikasi versi **lama** masih dipakai siswa secara live. Seluruh commit disimpan
LOKAL. Push hanya setelah pemilik menyelesaikan Final Review dan memberi lampu
hijau eksplisit.

### Sepuluh commit lokal (terbaru di atas)
```
1dda82d feat(fase-5): wujudkan 20 direktif VISUAL sisa — 22 dari 22 kini terwujud
226545d feat(fase-5): 12 fence ASCII jadi bagan CSS read-only, peta perjalanan jadi kartu
d8d814e feat(fase-4): ambang lencana dari manifest, bonus XP paket opsional, Panel Capaian
3204373 fix(fase-3): kembalikan pembahasan diagnostik Bab 00, kartu 3 kolom rata tengah
40fd349 fix(fase-3): hapus blok pembahasan, bersihkan judul paket yang tertinggal
2e2df84 fix(fase-3): lima revisi hasil QA manual — keypad, pembahasan, transisi, hitung mundur, daftar isi
70e1675 feat(fase-3): kartu latihan bertingkat, modal tantangan, widget guided
324aebd feat(fase-2): Info Cards pop-up, bilah sub-materi sticky, pop-up dapat dipakai ulang
e2a60d7 feat(fase-1): fondasi arsitektur baru — KaTeX trust, mesin visual, jangkar panah
4f0deb0 content: tulis ulang seluruh materi ke arsitektur halaman berstruktur
```

---

## 2. CARA MENJALANKAN & MEMVERIFIKASI

```bash
cd "F:\MATERI MATEMATIKA\MATEMATIKA TINGKAT LANJUT\KELAS 11\POLINOMIAL\POLINOMIAL_APP" && python -m http.server 8899
```

Buka `http://localhost:8899` lalu **Ctrl+Shift+R** sekali.
Wajib lewat `http://` — `file://` memblokir `fetch` dan Service Worker.

### Angka acuan (hasil verifikasi terakhir, 8 bab)
| Cek | Nilai |
|---|---|
| Direktif VISUAL terwujud | **22/22** (22 slot → 22 figure, 0 disembunyikan) |
| Fence ASCII jadi komponen | **12/12** (7 peta konsep · 1 spanduk · 4 tabel Horner) |
| ASCII mentah · bagan interaktif lama | 0 · 0 |
| Tombol di dalam peta konsep | **0** (read-only) |
| Info Cards | **47**, 0 kosong |
| Kartu kuis · tantangan · guided | **36 · 7 · 35** |
| Penanda `hl-*` | **51** |
| KaTeX | **1227 rumus · 0 error** |
| `$` bocor · emoji mentah · gagal muat · konsol | 0 · 0 · 0 · 0 |
| @360 px | 0 scroll horizontal · 0 komponen meluap |

---

## 3. YANG MASIH TERBUKA

1. **`horner-steps` (Bab 03) & `slider` (Bab 02) belum diverifikasi** terhadap
   field konten baru: `expected_quotient`, `expected_remainder`, `step`,
   `checkpoints`. Keduanya ada di `activity.js` sejak versi lama dan ikut
   terhitung dalam 35 widget, tetapi **kebenaran perilakunya belum diuji**.
   → Ini pekerjaan konkret pertama yang siap dikerjakan.
2. **Final Review pemilik**, lalu izin push.
3. Ketidaksesuaian manifest vs `.md` (dibiarkan atas keputusan pemilik —
   `.md` adalah otoritas, kode menyesuaikan):
   * manifest menulis `expected_bring_down`, konten memakai `expected_quotient`
   * manifest belum mencantumkan `step` & `checkpoints` pada `slider`
   * `cloze` terdokumentasi tetapi 0 dipakai
4. `js/diagrams.js` (16 KB) kini **praktis mati** — seluruh fence ASCII sudah
   dihabiskan `Visuals.upgradeAscii()` sebelum `enhance.js` berjalan. Kandidat
   hapus, **belum diizinkan**.

---

## 4. KEPUTUSAN PEMILIK YANG SUDAH TERKUNCI

| Keputusan | Isi |
|---|---|
| **Push** | DITAHAN sampai lampu hijau final |
| **Otoritas** | `content/*.md` adalah sumber kebenaran tunggal; **kode yang menyesuaikan**, bukan sebaliknya |
| **Peta konsep** | **READ-ONLY**: bagan kotak CSS, **dilarang** zoom, **dilarang** dapat diklik |
| **Pembahasan** | Blok "Pembahasan Paket A–E" **tidak dirender** (isinya kunci jawaban satu paragraf). **Pengecualian:** pembahasan Tes Diagnostik Bab 00 **dipertahankan** |
| **Judul paket** | `### Paket A–E` + catatan "opsional" **disembunyikan** — informasinya sudah ada di kartu |
| **Grid kartu** | 3 kartu per baris **di semua ukuran layar**; baris terakhir **rata tengah** |
| **Glif `✓`** | Yang berada di dalam rumus KaTeX **dibiarkan**, bukan diubah jadi ikon |
| **Bintang** | Ambang `stars` = **PERSENTASE** skor maksimum |
| **Isian** | Memakai keypad aplikasi (`inputmode="none"`); konten baru semuanya numerik |
| **Emoji** | `.md` tetap memuat emoji; **renderer** yang menggantinya dengan ikon Lucide |
| **Ikon** | HANYA Lucide |

---

## 5. ARSITEKTUR SEKARANG

```
index.html      kerangka + topbar (chip XP → Panel Capaian) + drawer + bottom nav
sw.js           Service Worker: shell cache-first, content/ network-first
css/style.css   seluruh gaya + token hl-* + komponen Fase 2–5
tools/
  gen-icons.py  pembangkit blok PATHS di icons.js (95 ikon) dari lib/lucide
js/
  icons.js      [PATHS DIBANGKITKAN] 95 ikon + peta EMOJI + blok ALIAS nama lama
  mathrender.js KaTeX: trust:true + strict:false  ← kunci \htmlClass & jangkar
  markdown.js   parser; frontmatter flow-map; tangkap <!-- VISUAL --> jadi slot
  content.js    pemuat manifest & .md
  store.js      localStorage poli.v1.*
  gamify.js     XP·level·lencana·bintang·rekor·streak (ambang dari manifest)
  overlay.js    pop-up/modal aksesibel — MEMINDAHKAN simpul, tidak menyalin
  pagekit.js    Info Cards → kartu+pop-up · bilah sub-materi sticky · ToC kartu
  quizcards.js  Latihan Bertingkat → 5 kartu (lazy mount) · Tantangan → modal
  quiz.js       mesin kuis; input_mode/answer_format
  activity.js   9 widget termasuk guided (35 pemakaian)
  challenge.js  sesi berwaktu + hitung mundur 3-2-1; HANYA `items`, tanpa pool
  visuals.js    22 builder VISUAL + konversi 12 fence ASCII  ← berkas terbesar
  keypad.js     papan tombol; mode numerik; z-index 200
  enhance.js    auto-fit rumus (jalur diagram kini tak terpakai)
  diagrams.js   [PRAKTIS MATI — kandidat hapus]
  scratchpad.js papan coret vektor
  app.js        router · renderDoc · jumpTop() · Panel Capaian
```

### Urutan pipeline render (`app.js` → `renderDoc`) — JANGAN diacak
```
viewRoot.innerHTML = …
1. MR.render(viewRoot)            KaTeX; jangkar \htmlClass lahir di sini
2. Activity.mount(...)            widget aktivitas
3. QuizCards.apply(...)           kartu paket + kartu tantangan
4. PageKit.apply(...)             Info Cards + bilah sticky  (SEBELUM ikon:
                                  label kartu dibaca dari <summary> asli)
5. Icons.applyEmoji + hydrate     emoji → ikon
6. Visuals.mount(viewRoot)        upgradeAscii() lalu 22 builder
                                  (WAJIB sesudah MR.render — panah mengukur
                                   tata letak sungguhan)
7. Enhance.apply(viewRoot)        auto-fit
8. setupStickyToc()
```

---

## 6. ⚠️ JEBAKAN YANG SUDAH MEMAKAN KORBAN — JANGAN ULANGI

1. **`display:` mengalahkan `hidden`.** Pertahankan `[hidden]{display:none!important}`.
2. **Spesifisitas selektor generik** — tulis `.doc details.toc…`, bukan `.doc details…`.
3. **Cache-busting WAJIB & SEGERA.** Setiap sunting `js/` atau `css/` **langsung**
   naikkan **semua** `?b=N` di `index.html` DAN `sw.js`, plus nama `CACHE`.
   Pernah terjadi: menyunting setelah menetapkan versi → peramban memakai skrip
   lama → satu putaran verifikasi **tidak sah** dan waktu terbuang mengejar bug
   yang tidak ada. **Buktikan versinya termuat** lewat `document.scripts`.
4. **Regex pada konten berbahaya.** Selalu diff baris-per-baris; pakai
   penggantian literal.
5. **Field `answer` jangan diubah** kecuali diminta — memengaruhi pencocokan.
   Bila harus menyentuh, jaga agar `normalize()` (`quiz.js:54`) tidak berubah.
6. **Penyajian adaptif** `smart()`: ada `$` → biarkan; tanpa kata → KaTeX;
   selain itu teks biasa.
7. **`<` haram pada string yang memuat `$`.** `smart()` sudah meng-`esc()`,
   tetapi jangan menambah `$` pada string ber-`<` di field yang **dinilai** —
   `\lt` akan mengubah `normalize()` dan merusak penilaian.
8. **`requestAnimationFrame` tidak dapat diandalkan** untuk kelas fungsional.
   Bila bingkai tidak dihasilkan (tab latar/jendela tersembunyi) callback tidak
   pernah jalan. Pakai reflow paksa + penetapan sinkron, atau `setTimeout`.
   Pernah membuat keypad "tidak muncul" dan `scroll-behavior` tersangkut.
9. **`Icons.hydrate` hanya mengisi elemen KOSONG.** `data-icon` dipakai dua peran:
   penampung (`<i data-icon>`) DAN **metadata konten**
   (`<details data-card data-icon>`). Versi lama menimpa `innerHTML` semua
   `[data-icon]` → **seluruh isi Info Cards terhapus selama 3 fase** tanpa
   terdeteksi karena pemeriksaan hanya menghitung jumlah kartu.
   **Pelajaran: hitung ISI, bukan hanya jumlah elemen.**
10. **`overflow-x:auto` memaksa sumbu vertikal jadi scroll juga.** Scrollbar yang
    muncul menyusutkan lebar → rumus ter-center bergeser ~7,5 px → panah meleset.
    `.vstage` memakai `overflow-y:hidden`, dan `drawArrows` menetapkan padding
    **sebelum** mengukur.
11. **Jangan telan galat.** `try/catch { }` kosong pernah menyembunyikan
    `ReferenceError` sehingga fence jatuh ke penangan lama yang menghasilkan
    bagan dapat diklik — melanggar aturan read-only. Selalu `console.warn`.
12. **Rantai `else if` menutup bentuk lain.** Saat mengurai fence, coba tiap
    bentuk **berurutan**; jangan berhenti karena cabang pertama cocok lalu gagal.
13. **Nama kelas `hl-1`/`hl-2`/`hl-3` memuat tanda hubung.** Buang pembungkus
    `\htmlClass` (`unwrapHtmlClass`) **sebelum** memecah LaTeX pada `+`/`-`.
14. **Tanda berada DI LUAR pembungkus `\htmlClass`.** Mengambil isi jangkar dari
    DOM menghilangkan tandanya → hitungan yang ditampilkan bisa **salah**.
    Baca tanda dari LaTeX sumber (`signedAnchors`).

---

## 7. CARA MENGUJI DI PERAMBAN (yang terbukti bekerja)

* Ganti hash saja **tidak** memuat ulang → pakai `?v=N` untuk paksa reload penuh.
* Bersihkan SW + cache sebelum menguji perubahan kode.
* `.app-main` memakai `scroll-behavior:smooth` → **matikan dulu**
  (`app.style.scrollBehavior='auto'`) sebelum mengukur posisi gulir.
* **Perkakas screenshot sering macet** → andalkan pengukuran DOM lewat
  `javascript_tool`. Ukur angka, jangan menilai dari kesan.
* Panel peramban kadang **tidak meng-composite**: transisi CSS bisa **membeku
  di nilai tengah** dan rAF tidak jalan. Untuk mengukur posisi akhir, matikan
  transisinya sesaat (`el.style.transition='none'`).
* Viewport bisa **nol** bila panel tidak ditampilkan → tetapkan ukuran
  eksplisit (`resize_window`) sebelum mengukur geometri.
* Bersihkan `localStorage` sesudah menguji gamifikasi agar tidak meninggalkan
  capaian palsu.

---

## 8. INVENTARIS KONTEN (terverifikasi, jangan ditebak ulang)

8 bab + `glosarium.md` + `cheat-sheet.md` + `content-manifest.json`.

| Aspek | Jumlah |
|---|---|
| Blok JSON | 36 set kuis · 70 aktivitas · 7 tantangan |
| Butir kuis | **180** (mc 121 · short 53 · multi 6) |
| Butir tantangan | **75** (mc 69 · multi 6), semuanya `items` mandiri |
| Widget | guided **35** · matching 12 · truefalse 6 · categorize 6 · error-hunt 5 · ordering 4 · slider 1 · horner-steps 1 |
| Direktif VISUAL | **22** |
| Pemakaian `\htmlClass` | **51** |
| Fence ASCII | **12** |
| XP tersedia | **1695** (01→265, 02–06→235/240, 07→250) |

Validasi konten: **0 masalah** — tidak ada `pool`, semua tantangan
`display:"modal"`, semua `short` ber-`input_mode`+`answer_format`, semua
aktivitas ber-`reward.xp`, alokasi waktu ≥30 detik/butir.

---

## 9. LANGKAH BERIKUTNYA YANG DISARANKAN

1. Konfirmasi sudah membaca berkas ini + `SERAH-TERIMA.md`, ringkas keadaan.
2. Tunggu arahan pemilik. Bila diminta melanjutkan pekerjaan teknis, mulai dari
   **verifikasi `horner-steps` & `slider`** (§3 butir 1) — lingkupnya jelas dan
   kecil.
3. Setiap perubahan: bertahap → tunjukkan bukti terukur → tunggu persetujuan.
4. **Jangan push** tanpa lampu hijau eksplisit.

---
© 2026 · Penta Putra Purnomo, S.Pd., Gr.
