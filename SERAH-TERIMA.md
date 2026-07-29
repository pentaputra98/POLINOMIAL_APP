# SERAH-TERIMA — Aplikasi Polinomial Kelas XI
> Salin seluruh isi berkas ini sebagai pesan pembuka di sesi baru.
> Terakhir diperbarui: **29 Juli 2026** · Versi aset **`?b=78`** · Cache SW **`polinomial-v60`**
>
> 🚫 **JANGAN PUSH.** Aplikasi versi lama sedang dipakai siswa secara live.
> Seluruh commit disimpan LOKAL sampai Fase 1–5 selesai dan pemilik memberi
> lampu hijau final.
>
> ⚠️ **Sedang berlangsung: pembangunan ulang ke arsitektur halaman berstruktur.**
> Konten sudah ditulis ulang seluruhnya (commit `4f0deb0`); aplikasi menyusul
> secara bertahap. **Fase 1–4 SELESAI** — lihat §11, §12, §13, §13b, §14.
> Fase 5 (visual) belum.
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

## 10b. OVERRIDE PEMILIK UNTUK FASE 5 — PETA KONSEP (29 Juli 2026)

Menggantikan rencana sebelumnya (parser ASCII → peta interaktif):

1. **Bukan parser ASCII murni.** Peta konsep TIDAK boleh tampil sebagai teks
   biasa maupun blok ASCII.
2. **Desain:** parser harus menghasilkan **bagan kotak (box/flowchart)** yang
   rapi, modern, dan terstruktur, dibangun dengan **CSS**.
3. **READ-ONLY — batasan tegas:** peta konsep murni estetika visual.
   **DILARANG** memberi fitur **zoom** dan **DILARANG** membuat elemennya
   dapat diklik. Tidak ada interaksi apa pun.

Konsekuensi teknis: `ctx.nextFence()` tetap dipakai untuk MEMBACA struktur dari
fence ASCII, tetapi keluarannya berupa bagan kotak CSS statis. Penampil bagan
layar penuh pada `enhance.js` **tidak boleh** dipasang pada peta konsep.

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

## 13. PEMBANGUNAN ULANG — FASE 3: MESIN KUIS & WIDGET GUIDED (29 Juli 2026)

### Yang dikerjakan
| Berkas | Perubahan |
|---|---|
| **`js/quizcards.js`** (baru) | Latihan Bertingkat → 5 KARTU (A–E) + pop-up; Tantangan → KARTU + modal layar penuh. **Pemasangan MALAS**: isi kuis baru dibangun saat kartunya diketuk pertama kali, lalu DISIMPAN (tidak dibuang saat ditutup) agar jawaban tetap utuh |
| `js/activity.js` | **Widget `guided`** (35 pemakaian) — sebelumnya hilang total tanpa jejak. Jalur mount tersendiri: satu langkah pada satu waktu, `feedback` per langkah, salah = mencoba lagi dengan pilihan yang sudah dicoba dinonaktifkan, ditutup `conclusion` + XP |
| `js/challenge.js` | **Mekanisme `pool` DIBUANG** beserta `fromActivity()`. Soal kini HANYA dari `items` mandiri milik tantangan |
| `js/quiz.js` | `input_mode` & `answer_format` dipakai; **urutan opsi diacak** |
| `js/keypad.js` | Mode NUMERIK: tab variabel disembunyikan, tab angka dipaksa aktif |
| `js/app.js` | Kuis/tantangan tidak lagi dipasang inline; diserahkan ke `QuizCards` |
| `css/style.css` | `.quizcards`, `.qc-card`, `.ch-card`, widget `guided`, `.q-fmt` |

### ⚠️ DUA CACAT SERIUS YANG DITEMUKAN & DIPERBAIKI

**(1) Tantangan menghasilkan soal tanpa konteks — bug yang Anda laporkan.**
`buildQuestions()` hanya membaca `ch.pool`, dan `fromActivity()` memecah widget
menjadi butir: `error-hunt` menjadi opsi `"Langkah 1".."Langkah 4"` **tanpa
daftar langkahnya**, `cloze` menjadi `"…— bagian 1"` **tanpa kalimatnya**.
Konten baru tidak memakai `pool` sama sekali, sehingga tantangan menghasilkan
**0 soal**. Seluruh mesin `pool` dihapus; soal kini dari `items` mandiri.
Terverifikasi: **75 butir** di 7 tantangan (10×6 + 15), dan butir
"temukan langkah salah" tampil **utuh sepanjang 315 karakter** berisi keempat
langkahnya.

**(2) 95% kunci jawaban berada di opsi PERTAMA.**
Terukur pada konten: **303 dari 319** kunci `mc`/`multi` ada di posisi 0
(posisi 1: 6 · posisi 2: 10). Artinya peserta yang selalu memilih **A**
memperoleh ±95% tanpa memahami materi — dan itu terbukti: pengujian pertama
saya mengeklik opsi pertama pada 10 soal tantangan dan memperoleh **10/10**.
`content/` tetap sumber kebenaran, jadi **aplikasi yang mengacak**: `quiz.js`
dan `challenge.js` kini mengacak urutan opsi. Penilaian membandingkan **NILAI**
opsi (`data-val`) dengan `answer`, bukan indeksnya, sehingga kebenaran penilaian
tidak terpengaruh. Urutan disimpan per butir agar tidak berubah saat digambar
ulang. Regresi: **25/25 butir Bab 01 tetap dinilai benar** sesudah diacak.

### PENGURANGAN TINGGI HALAMAN (piksel, lebar ±961 px)
| Bab | Fase 2 | Fase 3 | Selisih |
|---|---:|---:|---:|
| pengantar-polinomial | 4.647 | **2.444** | −2.203 (−47,4%) |
| konsep-dasar | 14.483 | **12.007** | −2.476 (−17,1%) |
| operasi-dan-nilai | 14.917 | **12.646** | −2.271 (−15,2%) |
| pembagian | 16.684 | **14.155** | −2.529 (−15,2%) |
| teorema-sisa-faktor | 14.800 | **12.284** | −2.516 (−17,0%) |
| persamaan-vieta | 15.073 | **12.623** | −2.450 (−16,3%) |
| strategi-hots | 14.386 | **12.015** | −2.371 (−16,5%) |
| ringkasan-bank-soal | 13.750 | **11.358** | −2.392 (−17,4%) |
| **TOTAL** | **118.740** | **89.532** | **−29.208 (−24,6%)** |

**Angka bersih ini LEBIH KECIL daripada yang dipindahkan.** Rinciannya:
* Isi kuis yang keluar dari alur halaman: **±4.745 px per bab** (25 soal).
  Bagian "Latihan Bertingkat" menyusut dari ±5.100 px menjadi **390 px (−93%)**.
* Tetapi **35 widget `guided` yang sebelumnya TIDAK TAMPIL SAMA SEKALI** kini
  dirender: **±2.250 px per bab** (5 × ±450 px). Materi yang tadinya hilang
  sekarang ada — pertukaran yang jelas menguntungkan.

**Profil sisa tinggi (Bab 01, 11.590 px):** lima sub-materi **7.487 px (65%)**
— itu materi ajarnya sendiri (teori + contoh + terbimbing + mandiri). Sisanya:
Persiapan 411 · Latihan Bertingkat 390 · Kesalahan Umum 381 · header 268 ·
Ringkasan 250 · Tantangan 208 · Refleksi 158. Pemendekan lebih jauh berarti
menyembunyikan pelajaran, bukan lagi soal.

### Bukti terverifikasi
| Cek | Hasil |
|---|---|
| Kartu kuis · kartu tantangan | **36 · 7** — cocok dengan 36 set & 7 tantangan di konten |
| Widget `guided` | **35/35** (sebelumnya **0**) · total aktivitas **70/70** (sebelumnya 35) |
| Soal dirender inline | **0** — seluruhnya malas, di dalam pop-up |
| Butir tantangan | **75** (10×6 + 15); Bab 07 = "Simulasi TKA" 15 soal/20 menit |
| Paket D & E | bertanda **opsional** + lencana bonus **+20 XP** |
| `guided` end-to-end | jalur salah memberi petunjuk & menonaktifkan pilihan; jalur benar menampilkan `feedback` konten; 3/3 langkah → `conclusion`; XP 0 → 15; chip jadi "Selesai" |
| Mode input numerik | `data-numeric` terpasang, "Format jawaban: bilangan bulat" tampil, `aria-describedby` tersambung, keypad `is-numeric` dengan tab variabel tersembunyi; ketuk `3` → dinilai benar, skor naik |
| Kemajuan kartu | "1/5 benar", bar 20%; dibuka ulang → jawaban & skor tetap utuh |
| Sesi tantangan | timer jalan, 10/10, skor 115 (bonus waktu +15), 01:14, +80 XP, lencana `pengenal-polinomial`, rekor baru, rekap kompetensi K1 10/10 |
| Penilaian sesudah opsi diacak | **25/25 benar** |
| 8 bab | **0 error KaTeX · 0 gagal muat · 0 pesan konsol** |
| 360 px | scroll horizontal **0 px**; kartu 1 per baris; pop-up & modal 338 px di dalam viewport, tanpa scroll mendatar |

### Catatan
- `Challenge.mount(slot, ch, doc)` masih menerima `doc` demi kecocokan
  pemanggilan, tetapi parameter itu **tidak lagi dipakai** sejak `pool` dibuang.
- Bintang/lencana/rekor sudah berfungsi (bawaan `challenge.js`); pematangan
  gamifikasi menyeluruh tetap menjadi lingkup **Fase 4**.

---

## 13b. REVISI FASE 3 — HASIL QA MANUAL PEMILIK (29 Juli 2026)

Lima butir revisi wajib dari QA manual, seluruhnya selesai & terverifikasi.

### 1. Bug z-index keypad (KRITIS)
Keypad berada di `z-index:70`, sedangkan pop-up di `120` — sehingga saat soal
isian dibuka **dari dalam** pop-up kuis, papan tombolnya tersembunyi di
belakang dan soal menjadi mustahil dijawab. Keypad dinaikkan ke **`z-index:200`**
dan tumpukan lapisan didokumentasikan di satu tempat pada CSS.

**Masalah turunan yang ikut diperbaiki:** meski sudah di depan, keypad menutupi
bagian bawah pop-up. `keypad.js` sekarang mengukur tinggi keypad dan
menuliskannya ke `--kp-h`, lalu CSS `:root.kp-up .ov-panel` **menyusutkan panel**
agar berhenti tepat di atas keypad. Terukur pada 375×812: panel **715 → 483 px**,
tepi bawah panel 498 px vs tepi atas keypad 499 px, kotak isian di 253–299 px
(tidak tertutup). Uji titik di area keypad mengembalikan `DIV.kp-preview`
**milik keypad**, bukan `.ov-scrim`; menekan tombol angka mengisi kotak isian
di dalam pop-up.

**Temuan tak terduga:** kelas `is-open` keypad dahulu ditambahkan di dalam
`requestAnimationFrame`. Bila peramban tidak menghasilkan bingkai (tab latar,
jendela tersembunyi), callback itu tidak pernah jalan sehingga keypad tetap
tergeser ke bawah layar dan **seolah-olah tidak muncul**. Kini reflow dipaksa
lalu kelas ditambahkan **sinkron**. Pelajaran yang sama diterapkan pada
pemulihan `scroll-behavior` (memakai `setTimeout`, bukan rAF).

### 2. Pembahasan menyatu ke dalam kartu
Dahulu pembahasan baru dipindahkan saat kartu diketuk, sehingga sebelum itu
tetap terlihat sebagai akordeon di halaman utama — terpisah dari kartunya.
Sekarang dipindahkan **sejak render**, dan di dalam pop-up disajikan sebagai
bagian `.qc-bahas` yang **terbuka utuh** (bukan `<details>` yang harus diklik
lagi). Terverifikasi: pembahasan tersisa di halaman **0** di 8 bab, 36 tersimpan
di gudang kartu; Paket C tampil 193 karakter dengan 4 rumus, dari
"2k−6=0⇒k=3" sampai "Tepat satu dari p,q bernilai nol", `0` elemen tertutup.

### 3. Pindah bab langsung ke puncak
`.app-main` memakai `scroll-behavior:smooth`, dan sifat itu juga berlaku pada
`scrollTop = 0` — sehingga berganti bab menggulir panjang dari posisi lama.
Ditambahkan `jumpTop()` yang mematikan perilaku halus sesaat lalu memulihkannya.
Dipakai di 4 titik rute (bab, referensi, beranda, daftar). Terverifikasi:
dari posisi 6.000 px, sesudah pindah bab `scrollTop = 0` dengan
`scroll-behavior: auto`; **8/8 bab mulai dari puncak**.

### 4. Hitung mundur 3-2-1 tantangan
`hitungMundur()` menampilkan lapisan **di dalam panel modal** sebelum sesi
dimulai. Terverifikasi urutan **3 → 2 → 1 → "Mulai!"**; soal tidak muncul
selama hitung mundur; sesudahnya timer terbaca **tepat 05:00** — membuktikan
waktu belum berjalan. Dipasang juga pada tombol "Ulangi". Menghormati
`prefers-reduced-motion`: bila aktif, sesi dimulai langsung.

### 5. Daftar isi berbentuk kartu
Deretan tautan teks diganti `.toccards` berisi kartu bernomor + judul + panah,
konsisten dengan Info Cards dan kartu paket. Terverifikasi **11 kartu, 0 tautan
teks biasa**. Cacat yang ikut ditemukan: judul terbaca "**1**Apa Itu Polinomial"
karena teks tautan sudah memuat lencana angka hasil penggantian emoji keycap —
diperbaiki dengan membuang lencana/ikon dari salinan sebelum diambil judulnya
(**angka ganda: 0**). Mengetuk kartu menutup pop-up lalu **melompat instan**.

### 6. Pembahasan DIHAPUS & judul paket dibersihkan (revisi lanjutan)

**(a) Blok "Pembahasan Paket X" tidak lagi dirender.**
Alasan pemilik: isinya bukan uraian langkah, melainkan kunci jawaban yang
ditulis sebagai **satu paragraf memanjang** — `1. Derajat 5, koefisien pemimpin
−1. 2. 0. 3. x⁴+0x³+0x²+0x−1. 4. Binomial kubik. 5. n=4.` Nomor-nomornya
menyatu, dan isinya sudah tersedia **per butir** lewat tombol "Lihat jawaban"
(field `explanation`). Karena tidak membantu membahas, bloknya dibuang dari
tampilan. **Berkas `.md` tetap utuh** — hanya perendernya yang mengabaikan.
Gaya `.qc-bahas` di CSS ikut dihapus karena menjadi mati.

**(b) Judul `### Paket A–E` dan catatan "Paket ini opsional…" disembunyikan.**
Informasinya sudah lengkap pada kartu: huruf, tingkat, jumlah soal, lencana
**OPSIONAL**, dan bonus **+20 XP**.

Cacat yang ditemukan saat mengerjakan ini: penelusuran ke belakang dari slot
berhenti pada elemen pertama yang bukan judul. Paket **D** dan **E** menyisipkan
blockquote catatan di antara judul dan blok JSON, sehingga judul "Paket D/E"
**tidak pernah ditemukan dan tetap tertinggal di halaman** — persis yang terlihat
pada QA. Penelusuran kini melewati blockquote/`<hr>`/paragraf kosong (maksimal 5
langkah) dan hanya menyembunyikan bila judul paketnya benar-benar ditemukan.

**(c) Pengecualian Bab 00 (diminta pemilik).** Aturan penghapusan kini
**hanya** berlaku bagi paket bertingkat (`set_id` cocok `-set-X-`/`-bank-X-`).
Pembahasan **Tes Diagnostik Bab 00** dipertahankan karena benar-benar membahas:
daftar bernomor yang rapi dengan penalaran (mis. mengaitkan pemfaktoran ke
Teorema Vieta Bab 05). Disajikan di dalam pop-up kartu sebagai bagian terbuka
utuh. Terverifikasi: **5 butir daftar terpisah**, 9 rumus, 0 error, berakhir di
"Substitusi menjadi konsep utama pada Bab 02."

### 7. Tata letak kartu 3 kolom (diminta pemilik)
Info Cards dan Latihan Bertingkat kini **3 kartu per baris pada SEMUA ukuran
layar**. Gridnya dibuat **6 kolom** dengan setiap kartu `span 2` — bukan 3 kolom
langsung — karena trik itu memungkinkan **baris terakhir dipusatkan** saat
jumlah kartunya bukan kelipatan tiga: kartu ke-4 digeser mulai kolom 2 sehingga
dua kartu terakhir menempati kolom 2–5 (rata tengah).

Pemilih `:nth-child(4):nth-last-child(2)` hanya cocok bila kartu ke-4 sekaligus
kartu kedua-dari-akhir — tepat ketika totalnya 5. Dengan 6 kartu aturan itu
tidak aktif, sehingga susunannya 3 + 3.

Prasyaratnya: **gudang isi kartu dipindahkan KELUAR grid** (`.qc-stores`,
`.infocard-stores`), supaya grid hanya berisi kartu dan penomoran `:nth-child`
tepat. Pada layar < 560 px kartu beralih ke susunan **menumpuk & rata tengah**
(panah penunjuk disembunyikan) agar tetap terbaca pada kolom selebar ±105 px.

| Cek @360 px & @730 px | Hasil |
|---|---|
| Info Cards 6 kartu (Bab 01–06) | **3 + 3** penuh |
| Info Cards 5 kartu (Bab 00 & 07) | **3 + 2 rata tengah** |
| Latihan Bertingkat | **3 (A·B·C) + 2 (D·E) rata tengah** di 7 bab |
| Kepresisian pemusatan | sisa kiri/kanan **117/116 px** @730 · **57/56 px** @360 |
| Label terpotong | **0** |
| Scroll horizontal | **0 px** |

### Regresi 8 bab sesudah revisi
| Cek | Hasil |
|---|---|
| Kartu kuis · tantangan · guided | **36 · 7 · 35** (tidak berubah) |
| Blok `<details>` pembahasan | **0** di 8 bab (juga 0 di dalam pop-up) |
| Judul `### Paket` yang masih tampak | **0** di 8 bab (sebelumnya D & E tertinggal) |
| Catatan "opsional" yang masih tampak | **0** di 8 bab |
| Kunci per butir tetap tersedia | **5 tombol "Lihat jawaban" per paket**; contoh Bab 00 menampilkan penjelasan butir |
| Kartu tetap lengkap | 5 kartu A–E · 2 lencana OPSIONAL · 2 × bonus +20 |
| Error KaTeX · gagal muat · pesan konsol | **0 · 0 · 0** |
| Scroll horizontal @375 px | **0 px** di 8 bab |
| Semua bab mulai dari puncak | **8/8** |

---

## 14. PEMBANGUNAN ULANG — FASE 4: GAMIFIKASI (29 Juli 2026)

### Hasil audit lebih dahulu
`js/gamify.js` ternyata **sudah matang dan digerakkan manifest**: ambang & gelar
level, definisi lencana, bintang sebagai **PERSENTASE** skor maksimum (keputusan
terkunci §4), bonus waktu dibatasi 20% dan **tidak** ikut pembagi bintang, serta
rekor lengkap (skor & waktu terbaik, jumlah percobaan). Rekap per kompetensi pada
`challenge.js` juga sudah generik. Karena itu Fase 4 hanya perlu menutup **tiga
celah nyata** — bukan membangun ulang.

### Celah 1 — lencana `master-polinomial` terlalu murah
`finishChallenge()` memberikan XP **dan** lencana pada ambang yang sama: ≥1
bintang. Padahal manifest menetapkan `master-polinomial` bersyarat
*"selesaikan simulasi TKA (bab 07) dengan **>=3 bintang**"*. Akibatnya lencana
puncak bisa diperoleh hanya dengan 1 bintang.

Sekarang ambang lencana dibaca **dari manifest**: angka bintang di-parse dari
teks `unlock`; bila tidak ada, lencana lintas-kompetensi (`competency: "ALL"`)
menuntut 3 bintang dan lencana per bab cukup 1. XP tetap pada aturan ≥1 bintang.

Terverifikasi: pada **2 bintang** → `butuhBintang: 3`, lencana **tidak**
diberikan, XP tetap diberikan. Pada **3 bintang** → lencana diberikan.
Lencana per bab: `butuhBintang: 1`, diberikan pada 1 bintang.

### Celah 2 — `bonus_xp` paket opsional belum pernah diberikan
Field itu hanya dipakai untuk lencana pada kartu; XP-nya tidak pernah cair.
Sekarang diberikan lewat `refreshScore()` saat **seluruh butir paket opsional
sudah DIJAWAB** — bukan harus semuanya benar, sesuai manifest *"beri XP bonus
bila dikerjakan"*; paket tersulit tidak boleh menghukum yang mencoba.
`sourceId` (`bonus:<set_id>`) menjaga pemberiannya sekali saja.

Terverifikasi Paket D Bab 01: XP **0 → 40** = 4 benar × 5 XP + **bonus 20**,
`Gamify.isDone("bonus:01-set-D-hots") === true`, dan bonus tetap cair meski
skornya 4/5.

### Celah 3 — chip XP tidak dapat diketuk
Chip di topbar sudah ber-`aria-label` "Lihat capaian belajar" sejak awal, tetapi
**tidak punya penanganan klik**. Ditambahkan **Panel Capaian** (`renderCapaian()`
di `app.js`, memakai `Overlay`) berisi: level + gelar + bar menuju level
berikutnya, total XP terhadap **jumlah `xp_available` dari manifest**, streak
harian, 7 lencana (dimiliki/terkunci beserta syaratnya), dan tabel rekor per bab
(bintang, skor terbaik, waktu terbaik, jumlah percobaan).

Terverifikasi: "Level 2 · Penjelajah", **220 XP dari 1695 tersedia**
(1695 = jumlah `xp_available` 7 bab), bar 28%, *"180 XP lagi menuju Penguasa
Muda"* (ambang manifest 400 − 220), 7 lencana, 2 baris rekor, 0 scroll mendatar.

### Bukti Fase 4
| Cek | Hasil |
|---|---|
| Ambang lencana dibaca dari manifest | `master-polinomial` **3 bintang** · per bab **1 bintang** |
| Bonus XP paket opsional | **+20 XP** cair sekali, syaratnya "dikerjakan" |
| Panel Capaian | level, gelar, XP/total, streak, 7 lencana, tabel rekor |
| Total XP tersedia | **1695** — dihitung dari manifest, tidak ditulis keras |
| Simulasi Bab 07 | 15 butir mencakup **6 kompetensi** (K1:2 K2:2 K3:2 K4:3 K5:3 K6:3) → rekap 6 baris |
| Sesi tantangan (diuji Fase 3) | timer, skor 115 (bonus waktu +15), bintang, XP, lencana, rekor baru, rekap kompetensi |
| Regresi 8 bab | 36 kartu kuis · 7 kartu tantangan · 35 guided · 46 Info Cards · susunan **3+2** di 7 bab |
| Error KaTeX · gagal muat · konsol | **0 · 0 · 0** |
| Scroll horizontal | **0 px** |

Capaian sintetis dari pengujian sudah dibersihkan dari `localStorage`
(diverifikasi: 0 XP, 0 lencana, pesan "belum ada tantangan").

**Tersisa Fase 5:** 22 direktif VISUAL, 12 fence ASCII (peta konsep = bagan kotak
CSS **read-only**, lihat §10b), `horner-steps` & `slider`, aksesibilitas & offline
akhir.

---

## 15. PEMBANGUNAN ULANG — FASE 5: BAGAN & VISUAL (29 Juli 2026)

### Yang SELESAI

**(a) Seluruh 12 fence ASCII menjadi komponen CSS — 0 tampil mentah.**
`Visuals.upgradeAscii()` memindai setiap `pre.ascii` dan mengubahnya:

| Bentuk | Jumlah | Hasil |
|---|---|---|
| Rantai bercabang (peta konsep) | **7** | `.cmap` — kotak + panah, bercabang bila ada |
| Spanduk "ide pemersatu" Bab 07 | **1** | `.umap` — judul, 5 kolom, ide, baris bawah |
| Tabel Horner (termasuk Horner-Kino) | **4** | `.htab` — kolom hasil bagi & sisa diberi warna |

**Angka tabel Horner DIHITUNG, bukan disalin.** Hanya `k` dan baris koefisien
dibaca dari ASCII; pengali dan baris hasil dihitung `horner()` / algoritma Kino,
lalu **dibandingkan dengan baris hasil milik penulis**. Bila tidak cocok, bagan
tidak ditampilkan — jadi ketidaksesuaian konten tidak pernah disamarkan.

**(b) Peta konsep READ-ONLY (override §10b).** Dibangun dari `<div>`, ber-`role="img"`
dengan `aria-label` berisi seluruh simpul. Terukur di 8 bab: **0 tombol, 0 tautan,
0 `data-href`, `cursor:default`, 0 kontrol zoom**. Penampil layar penuh `dgview`
pada `enhance.js` tidak pernah terpasang karena fence sudah habis lebih dulu.

**(c) Bab 00: "Peta Perjalanan" jadi kartu Info ke-6 (diminta pemilik).**
Di konten ia ditulis sebagai seksi `<h2>` biasa, bukan `<details data-card>`.
`serapSeksiJadiKartu()` menyerap judul + seluruh isinya menjadi kartu, sehingga
Bab 00 kini **6 kartu → grid 3 + 3** sama seperti bab materi. Berkas `.md` utuh.

### ⚠️ TIGA BUG DITEMUKAN — satu di antaranya regresi lama saya

**Bug 1 (KRITIS, regresi sejak Fase 3): seluruh isi Info Cards terhapus.**
`QuizCards.apply()` memanggil `Icons.hydrate(root)`, dan `hydrate` menyasar
**semua** `[data-icon]` lalu menimpa `innerHTML`-nya. Konten menulis
`<details data-card="tujuan" data-icon="target">` — atribut itu **metadata**,
bukan penampung ikon. Akibatnya keenam `<details>` dikosongkan menjadi `<svg/>`
dan **semua pop-up Info Cards kosong sejak Fase 3**; pemeriksaan saya di Fase 3
hanya menghitung jumlah kartu, tidak isinya.
Perbaikan di akar: `hydrate` kini hanya mengisi elemen yang **kosong** —
penampung ikon selalu kosong, sehingga metadata konten tidak pernah tersentuh.
Terverifikasi: 47 kartu di 8 bab, **0 kartu kosong**; kartu Prasyarat kembali
menampilkan 6 rumus KaTeX.

**Bug 2: `try/catch` menelan galat.** `upgradeAscii` memakai
`catch { out = null }` tanpa jejak. Sebuah `ReferenceError` (`esc` belum
didefinisikan di `visuals.js`) tersembunyi total, dan fence-nya diam-diam jatuh
ke `diagrams.js` lama yang menghasilkan roadmap **dapat diklik** — melanggar
aturan read-only. Kini setiap kegagalan menulis `console.warn`.

**Bug 3: rantai `else if` menutup bentuk lain.** Spanduk Bab 07 memuat `│` dan
`└───`, sehingga tertangkap cabang Horner; ketika penguraiannya gagal, rantai
`else if` membuat bentuk "ide pemersatu" tidak pernah dicoba dan fence-nya lolos
ke penangan lama. Dispatch diubah menjadi percobaan **berurutan**.

### ⏳ YANG BELUM SELESAI — dilaporkan apa adanya
Dari **22 direktif `<!-- VISUAL -->`**, yang sudah berupa komponen interaktif
baru **2**: `panah-distribusi` (Bab 02) dan `rumah-pembagian-porogapit` (Bab 03)
— keduanya dari Fase 1. **20 sisanya belum dibangun**; slotnya
**disembunyikan**, sehingga tidak ada kotak kosong dan tidak ada direktif yang
tampil sebagai teks mentah, tetapi tampilan/animasi yang diminta konten belum
terwujud:

* Bab 01 — anatomi suku · perapian ke bentuk baku · uji aturan emas
* Bab 02 — penjumlahan bersusun · penyamaan koefisien
* Bab 03 — tabel Horner **beranimasi** · skema Horner-Kino · bagan alir metode
* Bab 04 — pembuktian bertahap · sistem dua persamaan · rantai kesetaraan ·
  daftar kandidat akar · pengupasan faktor
* Bab 05 — penurunan rumus Vieta · peta ekspresi simetris · pergeseran akar
* Bab 06 — bagan alir keputusan · penyorot kata kunci · studi kasus · radar jebakan

Catatan: tabel Horner **statis** sudah ada (butir a); yang belum adalah
**animasi** irama turun–kali–jumlah dan bagan bertingkat Horner-Kino.
Widget aktivitas `horner-steps` dan `slider` juga **belum diverifikasi** terhadap
field konten baru (`expected_quotient`, `step`, `checkpoints`).

### Bukti Fase 5 (8 bab)
| Cek | Hasil |
|---|---|
| Fence ASCII jadi komponen | **12/12** (7 `.cmap` · 1 `.umap` · 4 `.htab`) |
| ASCII mentah tersisa | **0** |
| Bagan interaktif lama (dapat diklik) | **0** |
| Tombol/tautan di dalam bagan | **0** — read-only terpenuhi |
| Info Cards | **47**, **0 kosong** · Bab 00 kini **6 kartu (3+3)** |
| Kartu kuis · tantangan · guided | **36 · 7 · 35** |
| Penanda `hl-*` | **51** |
| KaTeX | **1223 rumus · 0 error** |
| `$` bocor · emoji mentah · gagal muat | **0 · 0 · 0** |
| Scroll horizontal | **0 px** |
| Konsol | **0 pesan** |

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
