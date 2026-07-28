# SERAH-TERIMA — Aplikasi Polinomial Kelas XI
> Salin seluruh isi berkas ini sebagai pesan pembuka di sesi baru.
> Terakhir diperbarui: **29 Juli 2026** · Versi aset **`?b=65`** · Cache SW **`polinomial-v47`**
>
> 🚫 **JANGAN PUSH.** Aplikasi versi lama sedang dipakai siswa secara live.
> Seluruh commit disimpan LOKAL sampai Fase 1–5 selesai dan pemilik memberi
> lampu hijau final.
>
> ⚠️ **Sedang berlangsung: pembangunan ulang ke arsitektur halaman berstruktur.**
> Konten sudah ditulis ulang seluruhnya (commit `4f0deb0`); aplikasi menyusul
> secara bertahap. **Fase 1 (Fondasi) & Fase 2 (Kerangka Halaman) SELESAI** —
> lihat §11 dan §12. Fase 3–5 belum.
> Bagian §3 dan §7 di bawah masih menggambarkan keadaan SEBELUM penulisan ulang
> dan akan diperbarui saat tiap fase selesai.

---

## 0. PERAN & INSTRUKSI UNTUK SESI BARU

Kamu adalah **Senior Frontend Engineer + Instructional UI Specialist** yang melanjutkan
aplikasi pembelajaran ini. **Seluruh 5 fase pembangunan sudah SELESAI dan terverifikasi.**

**Tugasmu sekarang: STANDBY.** Jangan memulai pekerjaan besar atau refactor atas
inisiatif sendiri. Tunggu permintaan pembaruan/perbaikan dari saya, lalu kerjakan
persis sesuai lingkupnya.

**Sebelum menyentuh kode apa pun:**
1. Baca berkas ini sampai habis.
2. Baca `content/content-manifest.json` (otoritas struktur).
3. Jalankan server lokal (bagian 2) dan lihat sendiri keadaan aplikasi.
4. Jangan mengandalkan ingatan — **verifikasi dengan mengukur**, bukan menebak.

---

## 1. APA APLIKASI INI

SPA pembelajaran **Polinomial (Suku Banyak)** untuk **Kelas XI / TKA Matematika Lanjut**.
Bahasa Indonesia, **register formal-ilmiah** ("Anda", "peserta didik" — JANGAN ubah ke
gaya santai). Vanilla HTML/CSS/JS, **tanpa framework, tanpa build step, tanpa backend**,
100% offline setelah termuat.

- **Direktori:** `F:\MATERI MATEMATIKA\MATEMATIKA TINGKAT LANJUT\KELAS 11\POLINOMIAL\POLINOMIAL_APP`
- **Repositori git:** `https://github.com/pentaputra98/POLINOMIAL_APP` (branch `main`).
  Rilis pertama: commit `3cb5ba5 rilis-pertama-polinomial`. 57 berkas terlacak;
  `skills/`, `.claude/`, sumber SVG Lucide, dan berkas KaTeX tak terpakai diabaikan
  lewat `.gitignore` agar repo tetap ringan.
- **Dipublikasikan lewat GitHub Pages:** `https://pentaputra98.github.io/POLINOMIAL_APP/`
  — wajib ada `.nojekyll` di akar repo (lihat jebakan #9).
- Penulis/pemilik: **Penta Putra Purnomo, S.Pd., Gr.**

### ATURAN EMAS (jangan dilanggar)
1. **`content/` adalah SUMBER KEBENARAN TUNGGAL.** UI menyesuaikan konten, bukan sebaliknya.
2. **Jangan mengarang** materi, soal, jawaban, atau pengecoh di luar `content/`.
3. **Jangan mengubah `.md` tanpa persetujuan.** Temukan kekeliruan → laporkan (berkas:baris + usulan).
4. Jawaban & pembahasan **ditampilkan apa adanya** dari field `answer`/`explanation`. Engine tidak pernah menghitung ulang.
5. Ikon **HANYA Lucide**. Tidak boleh emoji mentah di UI. Tidak boleh ASCII peta konsep mentah.
6. Semua state di `localStorage` berversi (`poli.v1.*`). Tanpa backend/database.

---

## 2. MENJALANKAN & MEMVERIFIKASI

```bash
cd "F:\MATERI MATEMATIKA\MATEMATIKA TINGKAT LANJUT\KELAS 11\POLINOMIAL\POLINOMIAL_APP" && python -m http.server 8899
```
Buka `http://localhost:8899` (WAJIB lewat http — `file://` memblokir fetch & Service Worker).

**Saat menguji di browser:**
- Ganti hash saja **tidak** memuat ulang → pakai `?v=N` untuk paksa reload penuh.
- Bersihkan SW + cache saat menguji perubahan kode.
- `.app-main` memakai `scroll-behavior:smooth` → **matikan dulu** (`app.style.scrollBehavior='auto'`) sebelum mengukur posisi gulir, kalau tidak hasil ukur salah.
- Panel Browser kadang **tidak memegang fokus** → `element.focus()` programatik tidak memicu handler; pakai `.click()`.
- Perkakas screenshot kadang macet → andalkan pengukuran DOM via `javascript_tool`.

---

## 3. KONTEN (angka terverifikasi)

| Aspek | Jumlah |
|---|---|
| Bab | 8 (`00-intro` … `07-ringkasan-dan-bank-soal`) + `glosarium.md`, `cheat-sheet.md` |
| Blok JSON | 83 → **36 set kuis / 295 item**, **40 aktivitas**, **7 tantangan** |
| Tipe soal | short 255 · mc 30 · proof 5 · multi 5 |
| Widget aktivitas | cloze 8 · matching 8 · truefalse 7 · error-hunt 6 · categorize 5 · ordering 4 · **slider 1** (Bab 02) · **horner-steps 1** (Bab 03) |
| Marker COMPONENT | 110, **24 membawa direktif `DEVELOPER:`** |
| Kartu contoh | 54 (9 per bab 01–06: 3 Sederhana + 3 Menengah + 3 HOTS) |

**Tiga jenis blok ```json** dibedakan dari isinya:
`type:"activity"` → Latihan Interaktif · `type:"challenge"` → Tantangan Akhir Bab · ada `set_id` → set kuis.

**Konvensi konten:** desimal `0{,}5`, ribuan `74{.}000`, math `$…$` / `$$…$$`.

---

## 4. KEPUTUSAN PENGGUNA YANG SUDAH TERKUNCI

| Keputusan | Isi |
|---|---|
| **Bintang tantangan** | Ambang `stars {"3":90,...}` dibaca sebagai **PERSENTASE skor maksimum**, bukan skor mentah (skor maks tiap bab berbeda: 150–220) |
| **Soal isian** | Memakai **keypad dalam aplikasi** (`inputmode="none"`). Alasannya: sebagian perangkat siswa tidak memunculkan keyboard virtual. **BUKAN** diubah jadi pilihan ganda (akan memaksa mengarang ±765 pengecoh) |
| **Penguncian bab** | Bab **TIDAK dikunci**. Simpul peta konsep hanya menampilkan status |
| **Contoh** | Bukan interaktif. Pola: soal tampil → tombol "Lihat pembahasan" → bisa ditutup lagi |
| **Istilah** | "koefisien pemimpin" → **"koefisien utama"** (45 penggantian, termasuk "koef pemimpin"). **"suku pemimpin"** (*leading term*) sengaja TIDAK diubah |
| **Emoji** | Berkas `.md` tetap memuat emoji; **renderer** yang menggantinya dengan ikon Lucide |

---

## 5. ARSITEKTUR

```
index.html      kerangka + topbar (chip XP) + drawer + bottom nav + papan coret
sw.js           Service Worker: shell cache-first, content/ network-first
css/style.css   seluruh gaya, token tema terang & gelap
js/
  icons.js      87 ikon Lucide inline SVG + 48 pemetaan emoji→ikon  [DIBANGKITKAN]
  markdown.js   parser Markdown; pisahkan 3 jenis blok JSON; lindungi $…$
  mathrender.js window.MR — render KaTeX bersama untuk konten yang disuntik dinamis
                (span.m data-tex + renderMathInElement pada $…$; ada fallback)
  content.js    pemuat manifest & .md + cache + prefetch
  store.js      localStorage berversi poli.v1.*
  gamify.js     XP · level · badge · bintang · rekor · streak (ambang dari manifest)
  quiz.js       mesin kuis 36 set/295 soal + kotak isian ganda + analitik kompetensi
  keypad.js     papan tombol matematika (2 tab, 40 tombol)
  activity.js   8 widget Latihan Interaktif (semua berbasis KETUK, bukan seret)
  challenge.js  Tantangan Akhir Bab berwaktu + bintang + badge + rekor
  examples.js   kartu contoh + pembahasan buka/tutup
  diagrams.js   peta konsep/roadmap/flow/kolom/Horner interaktif
  enhance.js    auto-fit bagan & rumus + penampil bagan layar penuh
  scratchpad.js papan coret VEKTOR (hapus per-goresan, zoom/pan)
  app.js        router hash, render bab, chrome, sticky ToC
favicon.svg     ikon tab peramban (dirujuk <link rel="icon"> di index.html)
content/        MATERI — sumber kebenaran
lib/katex/      KaTeX lokal + 20 font woff2
lib/lucide/     1756 SVG Lucide (sumber untuk membangkitkan icons.js)
```

**Rute:** `#/` beranda · `#/daftar` daftar isi · `#/bab/:slug` · `#/ref/:id`

**`js/icons.js` awalnya DIBANGKITKAN dari `lib/lucide/icons/*.svg`.**
⚠️ Diperiksa 27 Juli 2026: **skrip pembangkitnya tidak ada lagi di folder ini** —
1756 SVG sumbernya masih ada (dan diabaikan `.gitignore`), tetapi pembangkitnya hilang.
Jadi untuk sekarang ikon baru **ditambahkan manual**: buka `lib/lucide/icons/<nama>.svg`,
salin isi di dalam `<svg>…</svg>` (hanya elemen `<path>`/`<circle>`/dst.), lalu tambahkan
satu entri ke objek `PATHS` di `js/icons.js`. Nama memakai konvensi Lucide terbaru
(`triangle-alert`, `circle-check`, `circle-question-mark`). Pakai dengan
`<i data-icon="nama"></i>` atau `Icons.svg("nama")`, lalu naikkan `?b=` & `CACHE`.

---

## 6. ⚠️ JEBAKAN YANG SUDAH MEMAKAN KORBAN — JANGAN ULANGI

1. **`display:` mengalahkan atribut `hidden`.** Sudah menyebabkan 3 bug (penampil bagan
   "terjebak", keypad menampilkan 2 grid). Sudah ada `[hidden]{display:none!important}`
   di reset CSS — **pertahankan**.
2. **Spesifisitas selektor generik.** `.doc details[open]>summary` dan
   `.doc details>*:not(summary)` mengalahkan `.toc…`. Tulis sebagai `.doc details.toc…`.
3. **Cache-busting WAJIB.** Setiap kali mengedit `js/` atau `css/`: naikkan **semua**
   `?b=N` di `index.html` DAN `sw.js`, plus nama `CACHE` di `sw.js`. Kalau tidak,
   perangkat siswa tetap memakai berkas lama.
4. **Regex pada konten itu berbahaya.** Aturan koma desimal pernah merusak koma
   pemisah daftar (`\{-2,-1,0,1,2\}`, baris Horner) karena kelas karakter mencakup
   backslash LaTeX. **Selalu diff baris-per-baris terhadap snapshot** sebelum menerima
   perubahan konten massal. Untuk perbaikan satuan, pakai penggantian literal.
5. **Field `answer` di JSON jangan diubah** kecuali memang diminta — memengaruhi pencocokan.
6. **Dua gaya penulisan contoh** di konten: Bab 01 memisahkan soal & pembahasan dengan
   baris kosong (dua paragraf); Bab 02–07 menulisnya berurutan (SATU paragraf).
   `examples.js` menangani keduanya.
7. **Marker COMPONENT bisa multi-baris** dengan direktif di dalam komentar yang sama.
   Regex lama pernah menghapusnya diam-diam.
8. **Penyajian adaptif wajib** untuk `question`/`answer`/`explanation`/`options`:
   ada `$` → biarkan auto-render; tanpa kata (≥3 huruf) → KaTeX; selain itu teks biasa.
   Memaksa semua lewat KaTeX membuat soal tampil merah dengan `$` mentah.
10. **`<` haram di string yang memuat `$`** — `smart()` melewati `esc()` untuk string
   ber-`$`, sehingga `<` dibaca sebagai awal tag HTML dan menelan sisa kalimat.
   Rincian, kasus nyata, dan hitungannya di §7c.
9. **GitHub Pages memakan berkas `.md` — `.nojekyll` WAJIB ADA di akar repo.**
   Tanpa berkas itu, Pages menjalankan Jekyll, yang **mengubah setiap `.md` menjadi
   `.html`** dan tidak lagi menyajikan `.md` mentah. Akibatnya `fetch("content/00-intro.md")`
   membalas **HTTP 404** dan seluruh materi gagal dimuat, padahal di server lokal
   (`python -m http.server`) semuanya normal. Diagnosis 27 Juli 2026:
   `/content/00-intro.md` → 404 sedangkan `/content/00-intro.html` → 200.
   `.nojekyll` boleh kosong; keberadaannya saja sudah mematikan Jekyll.
   `content-manifest.json` tidak terdampak (Jekyll hanya memproses Markdown), jadi
   gejalanya menyesatkan: manifest berhasil dimuat, isi bab tidak.

---

## 7. STATUS AKHIR — TERVERIFIKASI

| Cek | Hasil |
|---|---|
| Konsol | **0 pesan** di seluruh 8 bab |
| KaTeX | **3284 rumus, 0 error** |
| Kuis · soal | **36 · 295** |
| Aktivitas · Tantangan | **40 · 7** (semua widget diuji berfungsi) |
| Kartu contoh | **54** |
| Diagram interaktif | **17** |
| Emoji mentah di UI | **0** |
| Scroll horizontal @360px | **0px** (12 rute) |
| Landscape 740×360 | **0px**, judul rata tengah 0px |
| Kontras | **9.4–15.63** kedua tema (AAA butuh ≥7) |
| Fokus keyboard | outline solid 3px, terbukti dengan Tab sungguhan |
| Target sentuh <40px | **1** (slider papan coret, elemen geser) |
| Offline | **53 entri** ter-precache: 11 materi + 20 font + 16 JS + CSS/HTML |
| Performa | muat awal **54 ms**; bab terberat **251 ms**; transfer **928 KB** |

**Bukti kesetiaan konten:** 255/255 kunci `short` & 30/30 `mc` dinilai benar saat
diketik persis; 35/35 kunci mc/multi terbukti ada di dalam `options`; perhitungan
Horner & slider engine **cocok persis** dengan `expected_quotient`/`checkpoints` di konten.

---

## 8. YANG MASIH TERBUKA (menunggu keputusan saya)

1. **Berkas peninggalan aplikasi lama** — ~~`HANDOFF.md`, `RPD.MD`, `sub_1_pengenalan.md`,
   `sub_2_operasi.md`, `sub_3_nilai.md`, folder `_legacy/`, folder `lib/fontawesome/`~~
   **SUDAH DIHAPUS** (diverifikasi 27 Juli 2026: tidak ada lagi di folder; `lib/` kini
   hanya `katex/` dan `lucide/`).
   ~~`js/ui.js`~~ **SUDAH DIHAPUS** 27 Juli 2026 atas izin pemilik, berikut barisnya di
   `index.html` dan `sw.js`; `?b=` naik ke 60 dan `CACHE` ke `polinomial-v42`.
   Diverifikasi setelah hapus: `window.NBSelect`/`DragDrop` **undefined**, 15 skrip
   dimuat (dari 16), 8 bab tetap **3284 rumus / 0 error KaTeX**, konsol **0 pesan**.
   **Tidak ada lagi berkas peninggalan yang tersisa.**
2. **1 bagan masih ASCII** — diagram "ide pemersatu" Bab 04
   (`f(k)=0 ⟺ faktor ⟺ akar`). Tidak melanggar direktif karena marker terdekatnya
   bukan Concept Map. Bisa dibuatkan komponen khusus bila diinginkan.
3. **Judul kartu bagan generik** — skema Horner diberi label "Skema Horner", sisanya
   "Bagan / Peta Konsep". Judul spesifik butuh penanda baru di `.md`.
4. **30 soal isian** memakai petunjuk "pisahkan dengan koma" (bukan kotak berlabel)
   karena struktur kuncinya terlalu bervariasi untuk dipecah otomatis dengan aman.
5. **Math mentah di dalam blok JSON** (audit 27 Juli 2026, 1384 string diperiksa).
   `smart()` mengirim string yang memuat kata (≥3 huruf) ke jalur teks biasa, sehingga
   penggalan rumus di dalamnya tampil apa adanya — mis. `Suku pangkat tertinggi -6x^5.`
   - ~~**76 string** memuat `^` di luar `$…$`~~ → **SUDAH DIPERBAIKI** 27 Juli 2026. Lihat §7b.
   - ~~**179 string** memuat math tanpa `^`~~ → **SUDAH DIPERBAIKI** 27 Juli 2026
     (jumlah sebenarnya **204** setelah perbaikan pertama; 230 penggantian). Lihat §7c.
   - **114 string** tanpa kata sudah benar (dirender penuh sebagai LaTeX) — jangan disentuh.
   - Tidak ada `$` ganjil/tak berpasangan.
   **Butir 5 SELESAI.**
6. **Perbaikan sistemik `smart()`** — saat ini `smart()` mengembalikan string mentah
   tanpa `esc()` bila memuat `$` ([quiz.js:38](js/quiz.js:38), sama di `activity.js`
   dan `challenge.js`). Itulah sebab jebakan #10. Perbaikannya: tetap meng-`esc()`
   `<`, `>`, `&` lalu biarkan `MR.render` menangani `$…$` — aman karena
   `renderMathInElement` bekerja pada simpul teks setelah HTML diurai.
   Manfaatnya: penulis konten tidak perlu lagi mengingat larangan `<`.
   **Belum dikerjakan — menyentuh 3 berkas engine, menunggu izin Anda.**

---

## 7b. PERBAIKAN 76 STRING BER-`^` — CARA & BUKTI (27 Juli 2026)

Dikerjakan sebagai **76 penggantian literal** pada bentuk JSON-nya (`json.dumps`),
bukan regex massal (jebakan #4). Aturan yang dipegang:

> **Hanya menyisipkan karakter `$`. Tidak satu pun karakter lain diubah.**

Empat pemeriksaan otomatis dijalankan **sebelum** berkas disentuh; bila satu saja gagal,
skrip berhenti tanpa menulis apa pun:

| Pemeriksaan | Hasil |
|---|---|
| Teks setelah semua `$` dibuang identik dengan aslinya | **75/76** |
| `normalize()` (port dari [quiz.js:54](js/quiz.js:54)) tidak berubah → penilaian kuis pasti sama | **76/76** |
| String lama muncul tepat **satu** kali di berkasnya | **76/76** |
| Tidak ada `√` di dalam `$…$` (memicu peringatan konsol KaTeX) | **0 pelanggaran** |

**Satu pengecualian** yang disengaja (karena itu 75/76, bukan 76/76):
`07-ringkasan-dan-bank-soal.md` — `V(T)=0,05T^3+0,4T^2+20T` → `0{,}05` dan `0{,}4`
mengikuti konvensi desimal konten. Field-nya `question`, tidak dinilai.

**Verifikasi sesudah:** diff **71 tambah / 71 hapus** (tidak ada baris tersisip);
audit ulang → cabang 1 & 3 **0 temuan** (dari 76), tersisa 114 cabang-2 yang memang benar;
render 8 bab **3338 rumus / 0 error KaTeX** (naik dari 3284); **0** tanda `^` mentah di
teks terlihat; konsol **0 pesan**.

**Uji regresi penilaian** — kelima kunci `answer` yang tersentuh diketik ulang dengan
gaya LAMA (tanpa `$`) lewat UI sungguhan, semuanya `is-ok`:
`01` derajat/koef/konstanta · `02` jabaran · `03` H & faktor · `06` D3 kuartik monik ·
`07` contoh kubik. Dua widget cloze (`03` 3 lubang, `05` 2 lubang) tetap utuh:
`{{n}}` tidak tersentuh, `$` mentah **0**.

Catatan: `content/` memakai strategi **network-first** di Service Worker, jadi perangkat
siswa mendapat konten baru tanpa perlu menaikkan `?b=`.

Skrip + snapshot sebelum-ubah disimpan di direktori scratchpad sesi tersebut.

---

## 7c. PEMBUNGKUSAN MENYELURUH + BUG CLOZE (27 Juli 2026, gelombang kedua)

### Aturan pemilik
> Bungkus `$…$` bila penggalan memuat **variabel aljabar** ($x$, $y$, $T$, …) atau
> **bilangan negatif** ($-3$, $-6$). Frasa teks dengan bilangan positif sederhana
> ("Derajat 1 = linear", "2 suku") tetap teks biasa.

**Satu perluasan yang saya ambil dan perlu Anda ketahui:** struktur math yang jelas
(memuat `=`, pecahan `/`, atau kurung berisi operator/koma) ikut dibungkus meski seluruh
bilangannya positif. Tanpa itu satu kalimat bisa memuat `$(-2,0)$ dan (3,0)` — persis
ketidakkonsistenan yang hendak dihilangkan. Perluasan ini hanya pernah **menambah**
pembungkusan pada math sungguhan, tidak pernah pada prosa.

**Hasil:** 231 pasangan (229 otomatis + 2 manual) → **230 penggantian** di 8 berkas
(04: 50 · 06: 40 · 05: 37 · 07: 34 · 03: 33 · 01: 18 · 02: 15 · 00: 4).

### Dua perbaikan manual
1. **Sigma bab 07** — `(Σ)^2-2Σpasang=…` → `$(\Sigma)^2 - 2\Sigma_{\text{pasang}} = 0 - 2(-5) = 10$`.
   Subskrip **mode teks** agar "pasang" terbaca sebagai kata, bukan perkalian
   p·a·s·a·n·g. Field `explanation`, tidak dinilai.
2. **BUG CLOZE** — [02-operasi-dan-nilai-polinomial.md:317](content/02-operasi-dan-nilai-polinomial.md:317)
   menulis `sedangkan $f(-1)={{1}}$.` `buildCloze` ([activity.js:243](js/activity.js:243))
   memanggil `smart(template)` **lalu** menukar `{{i}}` dengan `<input>` — sehingga input
   tersuntik di TENGAH wilayah `$…$`. KaTeX menuntut pembatas berada dalam satu simpul
   teks, jadi render gagal dan tanda `$` bocor ke layar siswa.
   Diperbaiki menjadi `sedangkan $f(-1)=$ {{1}}.` — math ditutup **sebelum** kotak input.
   Audit menyeluruh: 8 string memuat penanda input, yang rusak **1 → 0**.

### ⚠️ JEBAKAN #10 — `<` haram di string yang memuat `$`
`smart()` mengembalikan string **tanpa `esc()`** bila string itu memuat `$`
([quiz.js:38](js/quiz.js:38)). Akibatnya sebuah `<` pada string ber-`$` dibaca peramban
sebagai awal tag HTML dan **menelan sisa kalimat**.

Gelombang ini sempat memicunya: `x=0 dan x=5; hanya 0<x<5 bermakna` dibungkus menjadi
`…hanya $0<x<5$ bermakna`, lalu `<x<5$ bermakna` diparse sebagai tag dan menyisakan
`$0` telanjang di layar. Field itu `answer`, sehingga mengganti `<` dengan `\lt`
**bukan pilihan** — `normalize()` membuang `\lt` dan penilaian jadi rusak.
**String itu dikembalikan utuh ke teks biasa.** Hitungan: string ber-`<` ada 5,
yang juga ber-`$` **0 sebelum** dan **0 sesudah**.

Aturannya sekarang: **jangan pernah menaruh `$` pada string yang memuat `<`.**
Perbaikan sistemik yang lebih baik — membuat `smart()` tetap meng-`esc()` `<`, `>`, `&`
sambil membiarkan `$` untuk MR — **belum dikerjakan, menunggu keputusan Anda** (butir 8.6).

### Bukti verifikasi
| Cek | Hasil |
|---|---|
| Diff | **193 tambah / 193 hapus** — simetris |
| Blok JSON terurai | 1384 string, semua valid |
| Sisa cabang 1 & 3 | **0** (tersisa 114 cabang-2 yang memang benar) |
| Render 8 bab | **4098 rumus, 0 error KaTeX** (dari 3338) |
| **Tanda `$` bocor di layar** | **0** (dihitung dari seluruh simpul teks, termasuk yang tersembunyi) |
| Tanda `^` mentah di layar | **0** |
| Pembatas math membelah penanda input | **1 → 0** |
| Konsol | **0 pesan** |
| **Regresi penilaian: SELURUH soal isian** | **217 dinilai benar, 0 gagal** (38 dilewati: isian ganda & mc) |
| Kunci mc/multi cocok dengan opsi | **40/40**, sama persis dengan sebelum perubahan |
| Field dinilai tersentuh | 23, `normalize()` identik semua |

---

## 11. PEMBANGUNAN ULANG — FASE 1: FONDASI (29 Juli 2026)

### Inventaris konten baru (terukur, bukan ingatan)
36 set kuis · 70 aktivitas · 7 tantangan · **180 butir kuis** (mc 121 · short 53 ·
multi 6) · **75 butir tantangan** · widget: **guided 35** · matching 12 · truefalse 6 ·
categorize 6 · error-hunt 5 · ordering 4 · slider 1 · horner-steps 1 ·
**22 direktif VISUAL** · **51 pemakaian `\htmlClass`** · 12 fence ASCII.
Validasi konten: **0 masalah** (tidak ada `pool`, semua `display:modal`, semua
`short` ber-`input_mode`+`answer_format`, semua aktivitas ber-`reward.xp`).

### Yang dikerjakan
| Berkas | Perubahan |
|---|---|
| `js/mathrender.js` | **`trust:true` + `strict:false`** pada `katex.render` DAN `renderMathInElement`. Inilah kunci fase ini — tanpa `trust`, KaTeX **membuang `\htmlClass` diam-diam** sehingga 51 penanda struktur tidak pernah tampil |
| `css/style.css` | 8 kelas `hl-*` (token terang & gelap) + fondasi visual: `.vfig`, `.vstage`, `.v-overlay`, `.porogapit` |
| **`js/visuals.js`** (baru) | Mesin direktif VISUAL: registry, lapisan jangkar+panah SVG, rumah porogapit, parser LaTeX→koefisien, pembagian panjang, Horner |
| `js/markdown.js` | frontmatter kini mengurai **flow-map** (`sub_materi: - { id, title }`); direktif `<!-- VISUAL -->` **ditangkap jadi slot** (sebelumnya ikut terbuang pembersih komentar) |
| `js/icons.js` | +4 ikon · +blok **ALIAS** nama Lucide lama→baru · `✍️`→`pencil`, `⭐`→`star` · `applyEmoji` kini memindai **seluruh sel tabel** (dahulu hanya `td:first-child`) |
| **`tools/gen-icons.py`** (baru) | Pembangkit `icons.js` dari `lib/lucide/icons/*.svg` — dokumen lama merujuknya tetapi berkasnya tidak ada |
| `js/examples.js` | **DIHAPUS** (keputusan K3a); konten baru menulis Contoh sebagai prosa di dalam sub-materi |

### Mengapa panah & porogapit BUKAN pekerjaan KaTeX
KaTeX tidak memiliki panah antar-suku maupun `\longdiv`. Keduanya dibangun
sebagai **dua lapis**: KaTeX merender rumus, lalu SVG menggambar di atasnya
dengan berpegang pada **jangkar DOM** dari `\htmlClass` milik penulis. Rumah
porogapit adalah **grid CSS** (garis kiri + garis atas = kurung siku terbalik).

**Konten tetap sumber kebenaran.** Tidak ada rumus/angka yang diketik ulang di
`visuals.js`: panah distribusi *mengangkat* rumus `$$…$$` dari `.md` dan memakai
jangkar `hl-coef`/`hl-1`/`hl-2` penulis; porogapit *membaca* "Bagi $A$ oleh $B$"
lalu **menghitung sendiri** pembagiannya.

### Bukti terverifikasi
| Cek | Hasil |
|---|---|
| `hl-*` terender | **51** — padanan tepat dengan 51 `\htmlClass` di konten (sebelumnya **0**) |
| Slot VISUAL terbentuk | **22** — sama dengan jumlah direktif |
| Builder aktif | 2 (`panah-distribusi`, `rumah-pembagian-porogapit`); 20 slot lain **disembunyikan** — bukan kotak kosong, dan direktif tidak pernah tampil sebagai teks |
| Uji mandiri mesin polinomial | `longDivide(2x³-3x²+4x-5, x-2)` → $H=2x^2+x+6$, $S=7$ · `horner([1,0,-7,6],1)` → sisa 0 — **cocok dengan konten** |
| Geometri panah | mulai 84,6 px (pusat `3`) → berakhir 103,2 (`x`) dan 124,6 (`−2`); tidak terpotong |
| Rumah porogapit | atap $2x^2+x+6$ (dihitung), garis kiri+atas 3 px, 3 siklus tersingkap bertahap |
| frontmatter | `sub_materi` jadi objek `{id,title}`; `layout`, `xp_available:265`, 10 aktivitas, id tantangan terbaca |
| Kontras `hl-*` | terang **8,15–9,14** · gelap **9,23–11,83** (AAA butuh ≥7) |
| 8 bab | **2224 rumus, 0 error KaTeX, 0 gagal muat, 0 `$` bocor** |
| Emoji mentah | **8 → 0**. Enam `✅`/`❌` di kolom terakhir tabel Bab 01 diperbaiki |
| Scroll horizontal @360 px | **0 px** (Bab 02 & 03) |
| Konsol | **0 pesan** |

### Catatan
- Dua `✓` (U+2713) tersisa **di dalam rumus KaTeX** (`\;✓` pada Bab 03 & 05).
  Itu glif matematika yang dirender KaTeX, bukan emoji mentah — dibiarkan.
- 12 fence ASCII **masih tampil sebagai teks** (peta konsep, tabel Horner).
  Penggantiannya masuk Fase 5; `visuals.js` sudah menyediakan `ctx.nextFence()`
  untuk mengangkat datanya.
- Belum dikerjakan (sesuai rencana): Info Cards pop-up, sticky sub-materi,
  kartu+pop-up latihan bertingkat, modal tantangan, widget `guided`,
  `input_mode`, `optional`/`bonus_xp`, 20 visual sisanya.

### Temuan konten — dilaporkan, TIDAK diubah
1. `content-manifest.json:684` menamai `expected_bring_down`, tetapi
   `03-pembagian-polinomial.md:322` memakai **`expected_quotient`**. Isi konten
   benar; nama di manifest yang perlu diselaraskan.
2. `content-manifest.json:688` belum mencantumkan `step` dan `checkpoints` yang
   dipakai `slider` di `02-…md:312`.
3. `cloze` masih terdokumentasi di manifest tetapi **0 dipakai**.
4. `hl-term` terdaftar, 0 dipakai — gayanya sudah disiapkan.

---

## 12. PEMBANGUNAN ULANG — FASE 2: KERANGKA HALAMAN (29 Juli 2026)

### Yang dikerjakan
| Berkas | Perubahan |
|---|---|
| **`js/overlay.js`** (baru) | Pop-up/modal aksesibel yang dipakai bersama Fase 2–4. `role="dialog"`, `aria-modal`, kurungan fokus Tab, Esc, klik latar, fokus pulih ke pemicu, `aria-hidden` pada `#app`, kunci gulir latar. **Isi DIPINDAHKAN sebagai simpul DOM, tidak pernah disalin** — rumus KaTeX & pendengar peristiwa tetap utuh; saat ditutup, simpul dikembalikan tepat ke posisi asalnya |
| **`js/pagekit.js`** (baru) | Info Cards → grid kartu berwarna + pop-up; bilah sub-materi sticky yang berganti otomatis, pintasan angka 1–5, tombol daftar isi |
| `css/style.css` | 7 nada warna kartu, `.infocards`, `.sm-bar`, `.ov-*`; `.vstage{overflow-y:hidden}` |
| `js/visuals.js` | `PAINTERS` + `repaint()` + `watch()`; mendengar `poli:relayout` sehingga panah digambar ulang setelah pop-up/bilah mengubah tata letak. `drawArrows` menetapkan padding **sebelum** mengukur |
| `js/quiz.js`, `js/activity.js`, `js/challenge.js` | `smart()` kini tetap meng-`esc()` string ber-`$` — memperbaiki jebakan #10 |
| `js/app.js` | memanggil `PageKit.apply` sebelum penggantian emoji |

### Keputusan desain: hanya SATU bilah menempel
Daftar isi lama (`details.toc`) juga sticky. Dua bilah bertumpuk memakan ruang,
terutama di 360 px. Karena itu ToC disembunyikan dan **daftar tautannya dipakai
sebagai isi pop-up** lewat tombol daftar isi pada bilah sub-materi. Simpul `<ol>`
dipindahkan ke pop-up lalu dikembalikan — 11 tautan terverifikasi kembali utuh.

### ⚠️ Dua bug yang ditemukan lewat pengukuran

**(1) Bilah sub-materi tertinggal satu.** Ambang aktivasi `bar.bottom + 4`
membuat heading yang berhenti beberapa piksel di bawah bilah belum terhitung
sudah dimasuki. Diperbaiki menjadi `bar.bottom + 16`, dan penanda "menempel"
dihitung langsung dari posisi (bukan `IntersectionObserver`) agar tidak
tertinggal satu bingkai. Heading yang terpasang kini diberi `data-sm-index` /
`data-sm-no` supaya pemetaan frontmatter→`<h2>` dapat diaudit dari luar.

**(2) Panah meleset tepat 7,5 px — akar masalah tak terduga.**
`.vstage` memakai `overflow-x:auto`. CSS **memaksa sumbu vertikalnya menjadi
`auto` juga**, sehingga panah yang menjorok ke bawah menambah tinggi gulir dan
memunculkan scrollbar vertikal. Scrollbar itu menyusutkan lebar isi ±15 px, dan
karena `.katex-display` memusatkan rumusnya, **seluruh jangkar bergeser ~7,5 px**.
Saat digambar ulang, overlay dilepas dulu sehingga scrollbar sempat hilang lalu
kembali — offsetnya terus terulang. Dua perbaikan: `overflow-y:hidden` pada
`.vstage`, dan `drawArrows` menetapkan `padding-bottom` **sebelum** mengukur.
Terukur: scrollbar dalam stage **15,41 px → 0,4 px**; panah tepat di ketiga
tahap (awal, setelah `repaint()`, setelah buka-tutup pop-up).

### ⚠️ PELAJARAN PROSES — verifikasi bisa palsu
Saya sempat menyunting `js/pagekit.js` **setelah** menetapkan `?b=62`, sehingga
peramban masih memakai skrip lama dan pengujian saya mengukur kode yang belum
termuat. Gejalanya menipu: tampak seperti bug logika. **Aturan mutlak: setiap
sunting pada `js/` atau `css/` harus langsung diikuti kenaikan `?b=` dan nama
`CACHE`** — bukan hanya sebelum commit. Bukti bahwa berkas benar termuat:
periksa `document.scripts` menampilkan versi yang diharapkan.

### Bukti terverifikasi
| Cek | Hasil |
|---|---|
| Info Cards | **46 kartu** di 8 bab (00: 5 · 01–06: 6 · 07: 5); `details[data-card]` mentah **0** |
| Nada warna | 6 nada berbeda per bab; kepala pop-up mewarisi `--tone` (diperiksa: `tone-peach` → `#FFE0D6`) |
| Bilah sticky | **7 bilah** (Bab 01–07; `00-intro` berlayout `gerbang`, benar tanpa bilah), **35 chip** |
| Pelacakan sub-materi | **5/5 tepat** — badge, judul, chip, dan status menempel cocok di tiap sub-materi |
| Pintasan angka | klik chip 3 → mendarat di sub-materi 3 |
| Daftar isi pop-up | 11 tautan; kembali utuh ke `details.toc` setelah ditutup |
| Aksesibilitas pop-up | `role=dialog`/`aria-modal=true`, fokus masuk panel, Esc menutup, fokus pulih ke kartu pemicu, `#app` ber-`aria-hidden` lalu bersih |
| KaTeX di dalam pop-up | 6 rumus terender, 0 error, anotasi TeX asli utuh — membuktikan pemindahan simpul tidak merusak render |
| Panah Fase 1 | tepat di ketiga tahap; tidak bergeser melintasi buka/tutup pop-up |
| 8 bab | **2255 rumus · 0 error · 0 gagal muat · 51 `hl-*` · 0 emoji mentah · 0 `$` bocor** |
| `$` bocor | **2 → 0**. Opsi `$0<x<5$` dan `$0<x<10$` (Bab 06) kini terender sebagai KaTeX |
| 360 px | scroll horizontal **0 px** di 3 bab; kartu 2 per baris; chip disembunyikan ≤400 px; pop-up 338 px, di dalam viewport, tanpa scroll mendatar |
| Konsol | **0 pesan** |

### Catatan jujur
- **Tinggi halaman belum turun** (Bab 01: 14.404 → 14.483 px). Info Cards tidak
  memendekkan halaman karena `<details>` memang sudah tertutup; nilainya ada
  pada pop-up, warna, dan sifat dapat-dilewati. Pemendekan besar baru terjadi di
  **Fase 3**, saat 25 soal per bab berpindah ke kartu+pop-up.
- Kartu "Peta Konsep" masih memuat 1 fence ASCII + 1 slot komponen di dalam
  pop-up (Fase 5).
- Bilah setinggi 63 px karena tombol ikonnya mempertahankan target sentuh 44 px.

---

## 9. CARA KERJA YANG SAYA HARAPKAN

- **Bertahap + checkpoint.** Selesaikan satu hal, tunjukkan bukti, tunggu saya.
- **Verifikasi dengan angka**, bukan klaim. Ukur DOM, hitung, bandingkan dengan konten.
- **Laporkan apa adanya.** Kalau ada yang gagal atau kamu keliru, katakan langsung
  beserta buktinya — jangan tutupi. Bedakan **bug aplikasi** dari **artefak pengujian**.
- **Jangan tandai "selesai"** sebelum benar-benar diverifikasi.
- Bahasa Indonesia, ringkas, tanpa basa-basi berlebihan.

---

## 10. KALIMAT PEMBUKA UNTUK SESI BARU

> Aplikasi Polinomial di `POLINOMIAL_APP` sudah selesai 5 fase dan terverifikasi
> (lihat `SERAH-TERIMA.md` di folder aplikasi — baca lebih dulu, jangan andalkan
> ingatan). Untuk saat ini **standby** saja; nanti saya sampaikan permintaan
> pembaruan atau perbaikan. Konfirmasikan dulu bahwa kamu sudah membaca berkas itu
> dan ringkas keadaan terakhir aplikasi dalam beberapa kalimat.

---
© 2026 · Penta Putra Purnomo, S.Pd., Gr.
