# SERAH-TERIMA — Aplikasi Polinomial Kelas XI
> Salin seluruh isi berkas ini sebagai pesan pembuka di sesi baru.
> Terakhir diperbarui: **26 Juli 2026** · Versi aset **`?b=59`** · Cache SW **`polinomial-v41`**

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
- **Bukan repositori git.**
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
content/        MATERI — sumber kebenaran
lib/katex/      KaTeX lokal + 20 font woff2
lib/lucide/     1756 SVG Lucide (sumber untuk membangkitkan icons.js)
```

**Rute:** `#/` beranda · `#/daftar` daftar isi · `#/bab/:slug` · `#/ref/:id`

**`js/icons.js` DIBANGKITKAN, jangan diedit tangan.** Skrip pembangkitnya membaca
`lib/lucide/icons/*.svg`. Bila perlu ikon baru: tambahkan namanya ke daftar di skrip
lalu bangkitkan ulang. Nama memakai konvensi Lucide terbaru
(`triangle-alert`, `circle-check`, `circle-question-mark`).

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

1. **Berkas peninggalan aplikasi lama** — sudah tidak dipakai, aman dihapus tetapi
   **belum saya izinkan**: `HANDOFF.md`, `RPD.MD`, `sub_1_pengenalan.md`,
   `sub_2_operasi.md`, `sub_3_nilai.md`, folder `_legacy/`, folder `lib/fontawesome/`.
2. **1 bagan masih ASCII** — diagram "ide pemersatu" Bab 04
   (`f(k)=0 ⟺ faktor ⟺ akar`). Tidak melanggar direktif karena marker terdekatnya
   bukan Concept Map. Bisa dibuatkan komponen khusus bila diinginkan.
3. **Judul kartu bagan generik** — skema Horner diberi label "Skema Horner", sisanya
   "Bagan / Peta Konsep". Judul spesifik butuh penanda baru di `.md`.
4. **30 soal isian** memakai petunjuk "pisahkan dengan koma" (bukan kotak berlabel)
   karena struktur kuncinya terlalu bervariasi untuk dipecah otomatis dengan aman.

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
