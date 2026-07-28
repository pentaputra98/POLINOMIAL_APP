---
id: "00-intro"
slug: "pengantar-polinomial"
title: "Pengantar Pembelajaran Polinomial"
order: 0
duration_min: 15
level: "Kelas XI - Kurikulum Merdeka"
track: "TKA Matematika Lanjut"
prerequisites:
  - "Operasi aljabar dasar"
  - "Perkalian bentuk aljabar"
  - "Pemfaktoran kuadrat"
competencies:
  - "Mengenali peta besar materi polinomial"
  - "Mengukur kesiapan awal melalui tes prasyarat"
tags: ["intro", "peta-konsep", "prasyarat", "cara-belajar"]
layout: "gerbang"
components:
  - "Hero"
  - "Info Cards"
  - "Concept Map Interactive"
  - "Quiz Cards"
  - "Progress Onboarding"
quiz_sets:
  - "00-diagnostik"
katex: true
---

<!-- COMPONENT: Hero
     DEVELOPER: judul besar, subjudul, dan tombol "Mulai Belajar" yang langsung menuju Bab 01.
     Gaya Soft Neo Brutalism: blok warna solid, border tebal, bayangan keras tanpa blur.
     Ikon Lucide: graduation-cap. -->

# Selamat Datang di Materi Polinomial

Halaman ini merupakan gerbang sebelum memasuki materi. Isinya ringkas: peta perjalanan, prasyarat, dan tes kesiapan. **Anda dapat langsung menuju Bab 01** dan kembali ke halaman ini kapan saja.

---

<!-- COMPONENT: Info Cards
     DEVELOPER: lima bagian di bawah dirender sebagai KARTU ringkas berwarna berbeda (grid
     responsif). Klik kartu -> POP-UP berisi isinya. Seluruhnya boleh dilewati.
     Ikon Lucide: target, compass, package, smartphone, flame. -->

<details data-card="tujuan" data-icon="target">
<summary>🎯 Tujuan Pembelajaran</summary>

Setelah menyelesaikan halaman ini, peserta didik diharapkan mampu:

1. Melihat gambaran besar seluruh materi dan keterhubungannya.
2. Mengetahui kompetensi akhir yang perlu dikuasai.
3. Memastikan prasyarat telah terpenuhi melalui tes diagnostik.

</details>

<details data-card="kompetensi" data-icon="compass">
<summary>🧭 Kompetensi Akhir</summary>

| Kode | Kompetensi | Bab |
|------|-----------|:---:|
| K1 | Mengidentifikasi unsur & jenis polinomial | 01 |
| K2 | Melakukan operasi & menghitung nilai | 02 |
| K3 | Membagi polinomial | 03 |
| K4 | Menerapkan Teorema Sisa & Faktor | 04 |
| K5 | Menyelesaikan persamaan & Teorema Vieta | 05 |
| K6 | Menyelesaikan soal HOTS & model TKA | 06 |

**Target akhir:** mampu mengerjakan soal TKA Matematika Lanjut bertipe polinomial dengan tepat dan cepat.

</details>

<details data-card="prasyarat" data-icon="package">
<summary>📦 Prasyarat</summary>

Materi ini hanya menuntut tiga bekal:

1. **Bahasa aljabar dasar** — pada $3x^2$, angka $3$ adalah koefisien, $x$ variabel, dan $2$ pangkat.
2. **Sifat distributif** — mampu menjabarkan $(x+2)(x+3)=x^2+5x+6$.
3. **Pemfaktoran kuadrat** — mengetahui $x^2-5x+6=(x-2)(x-3)$.

Apabila terasa asing, materi akan mengingatkan kembali seperlunya di tiap bab.

</details>

<details data-card="cara" data-icon="smartphone">
<summary>📱 Cara Menggunakan Aplikasi</summary>

1. **Belajar berurutan** dari Bab 01 hingga 07; tiap bab dibangun di atas bab sebelumnya.
2. **Kerjakan latihan terbimbing** pada tiap sub-materi sebelum latihan mandiri.
3. **Paket D dan E bersifat opsional** — mengerjakannya memberi XP bonus.
4. **Progres tersimpan otomatis** di perangkat; dapat ditutup dan dilanjutkan kapan saja.
5. **Kerjakan Tantangan Akhir Bab** untuk mengukur penguasaan dan memperoleh lencana.

</details>

<details data-card="motivasi" data-icon="flame">
<summary>🔥 Mengapa Belajar Polinomial</summary>

Polinomial adalah bahasa untuk memodelkan keadaan yang tidak linear. Tiga contoh nyata yang akan dibahas:

- **Bisnis** — banyak saham dimodelkan $f(x)=x^3-70x^2-600x+74{.}000$ (Bab 02 & 05).
- **Teknik** — pemuaian drum dimodelkan $V(T)=0{,}05T^3+0{,}4T^2+20T$ (Bab 02).
- **Desain** — lintasan roller coaster, bentuk badan mobil, hingga huruf pada layar digambar memakai kurva polinomial.

</details>

---

## 🗺️ Peta Perjalanan

<!-- COMPONENT: Concept Map Interactive
     DEVELOPER: WAJIB berupa node-graph interaktif yang dapat diklik menuju bab terkait
     (kartu bergaya Soft Neo Brutalism, garis penghubung tebal). Simpul terkunci hingga
     prasyaratnya selesai, dibaca dari progres Local Storage. Blok di bawah HANYA rujukan
     struktur dan TIDAK boleh ditampilkan sebagai teks mentah. -->

```
01 Konsep Dasar → 02 Operasi & Nilai → 03 Pembagian → 04 Teorema Sisa & Faktor
                                                     → 05 Persamaan & Vieta
                                                     → 06 Strategi HOTS & TKA
                                                     → 07 Ringkasan & Bank Soal
```

**Ide besar yang menyatukan seluruh materi:**

> Menghitung nilai $f(k)$, membagi oleh $(x-k)$, mencari sisa, dan mencari akar merupakan **satu ide yang dilihat dari empat sisi berbeda**.

Alurnya: kita **mengenali** polinomial (01), **mengoperasikannya** (02), lalu menemukan bahwa menghitung nilai berkaitan erat dengan **membagi** (03). Kaitan itu diformalkan menjadi **Teorema Sisa dan Faktor** (04), yang membuka jalan menuju **akar dan Teorema Vieta** (05). Seluruh alat kemudian dipakai untuk **soal HOTS dan TKA** (06–07).

---

## 🩺 Tes Diagnostik

<!-- COMPONENT: Quiz Cards
     DEVELOPER: render sebagai KARTU tunggal; klik -> POP-UP berisi 5 soal. Setelah selesai,
     tampilkan rekomendasi: benar 4-5 berarti siap; benar 2-3 berarti cukup untuk memulai;
     benar 0-1 berarti sebaiknya menyegarkan aljabar dasar. Simpan skor ke Local Storage. -->

> Kerjakan lima soal berikut untuk mengukur kesiapan. Tes ini **tidak dinilai** dan boleh dilewati.

```json
{
  "set_id":"00-diagnostik","level":"mudah","optional": true,
  "items":[
    {"id":"D1","type":"mc","question":"Pada bentuk $-4x^5$, tentukan koefisien dan pangkatnya.","options":["Koefisien $-4$, pangkat $5$","Koefisien $4$, pangkat $5$","Koefisien $5$, pangkat $-4$","Koefisien $-4$, pangkat $-5$"],"answer":"Koefisien $-4$, pangkat $5$","explanation":"Koefisien membawa tandanya sendiri, sedangkan pangkatnya 5."},
    {"id":"D2","type":"mc","question":"Jabarkan $(x+2)(x+3)$ menggunakan sifat distributif.","options":["$x^2+5x+6$","$x^2+6x+5$","$x^2+5x+5$","$x^2+6$"],"answer":"$x^2+5x+6$","explanation":"x^2+3x+2x+6, lalu gabungkan suku sejenis."},
    {"id":"D3","type":"mc","question":"Jabarkan $(x-1)(x^2+x+1)$.","options":["$x^3-1$","$x^3+1$","$x^3-x-1$","$x^3+x^2-1$"],"answer":"$x^3-1$","explanation":"Banyak suku saling menghilangkan; ini pola selisih pangkat tiga."},
    {"id":"D4","type":"mc","question":"Faktorkan $x^2-5x+6$, lalu tentukan akar-akarnya.","options":["$(x-2)(x-3)$ dengan akar $2$ dan $3$","$(x+2)(x+3)$ dengan akar $-2$ dan $-3$","$(x-1)(x-6)$ dengan akar $1$ dan $6$","$(x-2)(x+3)$ dengan akar $2$ dan $-3$"],"answer":"$(x-2)(x-3)$ dengan akar $2$ dan $3$","explanation":"Dua bilangan berkali 6 dan berjumlah -5 adalah -2 dan -3."},
    {"id":"D5","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Diketahui $f(x)=x^2-3x+1$. Hitung $f(2)$.","answer":"-1","explanation":"4-6+1=-1. Proses mengganti nilai ini disebut substitusi."}
  ]
}
```
<details><summary><strong>Pembahasan Tes Diagnostik</strong></summary>

1. Koefisien $-4$ (tanda ikut), pangkat $5$.
2. $(x+2)(x+3)=x^2+3x+2x+6=x^2+5x+6$.
3. $(x-1)(x^2+x+1)=x^3-1$ — pola $a^3-b^3$.
4. $x^2-5x+6=(x-2)(x-3)$, akarnya $2$ dan $3$. Gagasan "hasil kali dan jumlah" ini berkembang menjadi Teorema Vieta pada Bab 05.
5. $f(2)=4-6+1=-1$. Substitusi menjadi konsep utama pada Bab 02.

</details>

**Menafsirkan hasil:** benar 4–5 berarti prasyarat kuat dan dapat langsung melanjutkan; benar 2–3 berarti cukup untuk memulai; benar 0–1 berarti sebaiknya menyegarkan aljabar dasar dan pemfaktoran kuadrat terlebih dahulu.

---

## 🧮 Konvensi Penulisan

<!-- COMPONENT: Info Cards
     DEVELOPER: dapat digabungkan menjadi satu kartu kecil bersama Info Cards di atas. -->

- **Polinomial** dan **suku banyak** merupakan istilah yang sama dan dipakai bergantian.
- Notasi $f(x)$, $g(x)$, dan $P(x)$ berarti polinomial dalam variabel $x$.
- **Desimal memakai koma**, misalnya $0{,}5$; **ribuan memakai titik**, misalnya $74{.}000$.

---

## ➡️ Mulai Belajar

<!-- COMPONENT: Progress Onboarding
     DEVELOPER: tombol besar "Mulai Bab 01" beserta bar progres keseluruhan (1/8). -->

Peta materi telah dipahami. Pada **Bab 01 — Konsep Dasar Polinomial**, kita akan mengenali unsur-unsur polinomial serta membedakan bentuk yang merupakan polinomial dan yang bukan.

> Siapkan kertas dan pensil, lalu mulai dari **Bab 01**.
