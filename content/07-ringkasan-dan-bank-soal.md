---
id: "07-ringkasan-dan-bank-soal"
slug: "ringkasan-dan-bank-soal"
title: "Ringkasan dan Bank Soal"
order: 7
duration_min: 90
level: "Kelas XI - Kurikulum Merdeka"
track: "TKA Matematika Lanjut"
prerequisites:
  - "06-strategi-hots-dan-tka"
competencies:
  - "K1-K6 (konsolidasi seluruh kompetensi)"
learning_objectives:
  - "Meninjau ulang seluruh materi secara ringkas"
  - "Menguasai lembar rumus & pola penting"
  - "Menguji diri melalui bank soal & simulasi TKA"
  - "Merefleksikan kesiapan menghadapi TKA"
tags: ["ringkasan", "cheat-sheet", "faq", "bank-soal", "simulasi-tka", "refleksi"]
layout: "sub-materi"
sub_materi:
  - { id: "1", title: "Tinjauan Konsep & Operasi" }
  - { id: "2", title: "Tinjauan Pembagian" }
  - { id: "3", title: "Tinjauan Teorema Sisa & Faktor" }
  - { id: "4", title: "Tinjauan Persamaan & Vieta" }
  - { id: "5", title: "Tinjauan Strategi & Jebakan" }
components:
  - "Info Cards"
  - "Sub Materi"
  - "Activity Guided"
  - "Activity Matching"
  - "Activity TrueFalse"
  - "Activity Categorize"
  - "Activity ErrorHunt"
  - "Cheat Sheet Card"
  - "FAQ Accordion"
  - "Quiz Cards"
  - "Tantangan Akhir Bab"
  - "Reflection"
activities:
  - "07-g1"
  - "07-m1"
  - "07-g2"
  - "07-m2"
  - "07-g3"
  - "07-m3"
  - "07-g4"
  - "07-m4"
  - "07-g5"
  - "07-m5"
challenge: "07-tantangan"
xp_available: 250
katex: true
---

# Bab 07 — Ringkasan dan Bank Soal

<!-- COMPONENT: Info Cards
     DEVELOPER: lima bagian di bawah dirender sebagai KARTU berwarna berbeda; klik -> POP-UP.
     Ikon Lucide: target, puzzle, clock, map, flame. -->

<details data-card="tujuan" data-icon="target">
<summary>🎯 Tujuan Pembelajaran</summary>

Bab penutup ini membantu peserta didik untuk:

1. Meninjau ulang seluruh materi secara ringkas per kompetensi.
2. Menguasai lembar rumus dan pola penting.
3. Menguji diri melalui bank soal dan simulasi TKA berwaktu.
4. Merefleksikan kesiapan serta merencanakan langkah lanjutan.

</details>

<details data-card="kompetensi" data-icon="puzzle">
<summary>🧩 Kompetensi</summary>

Konsolidasi **K1–K6**.

</details>

<details data-card="waktu" data-icon="clock">
<summary>⏱️ Estimasi Waktu</summary>

**±90 menit** (tinjauan ±30, bank soal ±30, simulasi ±30).

</details>

<details data-card="peta" data-icon="map">
<summary>🗺️ Peta Konsep Akhir</summary>

<!-- COMPONENT: Concept Map Full
     DEVELOPER: WAJIB berupa peta konsep interaktif yang menggabungkan seluruh bab 01-06 dan
     dapat diklik menuju bab terkait. Blok di bawah hanya rujukan struktur. -->

```
                    POLINOMIAL
   ┌──────┬──────────┬──────────┬──────────┐
 Konsep  Operasi  Pembagian  Teorema   Persamaan
 Dasar   & Nilai             Sisa/Faktor & Vieta
   └──────┴────── IDE PEMERSATU ──────┴──────┘
        nilai = pembagian = sisa = akar
                       │
              STRATEGI HOTS & TKA
```

</details>

<details data-card="motivasi" data-icon="flame">
<summary>🔥 Kalimat Pemersatu</summary>

*Menghitung nilai $f(k)$, membagi oleh $(x-k)$, mencari sisa, dan mencari akar merupakan satu ide yang dilihat dari empat sisi berbeda.*

</details>

---

<!-- COMPONENT: Sub Materi
     DEVELOPER: judul sub-materi WAJIB sticky di bawah judul bab saat digulir. -->

## 1️⃣ Tinjauan Konsep & Operasi

**Konsep dasar (K1).** Polinomial berbentuk $a_nx^n+\dots+a_0$ dengan pangkat **bilangan bulat tak negatif**. Derajat adalah pangkat tertinggi; konstanta sama dengan $f(0)$. Bukan polinomial bila terdapat pangkat negatif atau pecahan, variabel di penyebut, atau variabel di dalam akar.

**Operasi (K2).** Penjumlahan dan pengurangan menggabungkan suku sejenis; pada pengurangan, seluruh tanda pengurang diubah lebih dahulu. Perkalian memakai sifat distributif, dengan derajat hasil sama dengan jumlah derajat.

**Tiga pemeriksaan instan:** $f(0)$ = konstanta, $f(1)$ = jumlah seluruh koefisien, $f(-1)$ = jumlah koefisien berselang tanda.

### 📘 Contoh

Untuk $f(x)=3x^4-2x^3+5x-6$, nilai $f(1)$ dapat dihitung tanpa substitusi panjang: jumlahkan koefisiennya, yaitu $3-2+0+5-6=0$. Perhatikan koefisien $0$ untuk suku $x^2$ yang tidak tertulis.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"07-g1", "competency":"K1",
  "title":"Menggunakan pemeriksaan instan",
  "prompt":"Diketahui $f(x)=2x^3 - x^2 + 4x - 5$. Tentukan $f(0)$ dan $f(1)$ menggunakan cara pintas.",
  "steps":[
    {"ask":"Langkah 1. Nilai $f(0)$ sama dengan ….","type":"mc","options":["Konstanta, yaitu $-5$","Koefisien pemimpin, yaitu $2$","Jumlah koefisien"],"answer":"Konstanta, yaitu $-5$","feedback":"Benar. Substitusi x=0 menghilangkan seluruh suku bervariabel."},
    {"ask":"Langkah 2. Nilai $f(1)$ sama dengan ….","type":"mc","options":["Jumlah seluruh koefisien","Konstanta","Koefisien pemimpin"],"answer":"Jumlah seluruh koefisien","feedback":"Tepat, karena setiap pangkat dari 1 bernilai 1."},
    {"ask":"Langkah 3. Hitung $2 - 1 + 4 - 5 = \\;?$","type":"mc","options":["$0$","$2$","$-2$"],"answer":"$0$","feedback":"Benar, sehingga $f(1)=0$ dan berarti $(x-1)$ merupakan faktor."}
  ],
  "conclusion":"Dua pemeriksaan ini hanya perlu beberapa detik namun mampu menangkap banyak kesalahan hitung.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity TrueFalse -->

```json
{ "type":"activity", "widget":"truefalse", "id":"07-m1", "competency":"K1",
  "prompt":"Tentukan nilai kebenaran tiap pernyataan.",
  "statements":[
    {"s":"Bentuk dengan variabel di penyebut termasuk polinomial.","a":false,"why":"Variabel di penyebut menghasilkan pangkat negatif."},
    {"s":"Nilai $f(0)$ selalu sama dengan konstanta polinomial.","a":true,"why":"Seluruh suku bervariabel menjadi nol."},
    {"s":"Derajat hasil kali sama dengan jumlah derajat kedua faktor.","a":true,"why":"Suku pemimpin saling dikalikan."},
    {"s":"Pada pengurangan, hanya suku pertama pengurang yang berubah tanda.","a":false,"why":"Seluruh suku pengurang berubah tanda."}
  ],
  "reward":{"xp":15} }
```

---

## 2️⃣ Tinjauan Pembagian

**Algoritma (K3).** $f(x)=P(x)H(x)+S(x)$ dengan derajat sisa lebih kecil daripada derajat pembagi. Pembagi linear memberi sisa berupa konstanta; pembagi kuadrat memberi sisa berbentuk $rx+s$.

**Skema Horner.** Irama *turun → kali → jumlah*. Angka terakhir sama dengan $f(k)$. Untuk pembagi $(ax-b)$, gunakan $k=\tfrac{b}{a}$ lalu **bagi hasil baginya dengan $a$** — sisa tidak diubah.

**Wajib:** tuliskan koefisien nol untuk suku yang hilang.

### 📘 Contoh

Bagi $2x^3-3x^2+4x-5$ oleh $(x-2)$. Skema Horner dengan $k=2$ memberi baris $2,\ 1,\ 6$ dengan sisa $7$, sehingga hasil baginya $2x^2+x+6$. Sisa $7$ ini sama dengan $f(2)$.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"07-g2", "competency":"K3",
  "title":"Meninjau aturan pembagi tak monik",
  "prompt":"Bagi $6x^2 - x - 2$ oleh $(2x+1)$ menggunakan skema Horner.",
  "steps":[
    {"ask":"Langkah 1. Nilai $k$ yang digunakan adalah ….","type":"mc","options":["$-\\frac{1}{2}$","$\\frac{1}{2}$","$-1$"],"answer":"$-\\frac{1}{2}$","feedback":"Benar, karena $2x+1=2(x+\\frac{1}{2})$ sehingga akarnya $-\\frac{1}{2}$."},
    {"ask":"Langkah 2. Horner memberi baris $6,\\ -4$ dengan sisa $0$. Hasil bagi mentahnya adalah ….","type":"mc","options":["$6x-4$","$3x-2$","$6x+4$"],"answer":"$6x-4$","feedback":"Tepat. Ini masih hasil bagi mentah."},
    {"ask":"Langkah 3. Karena $a=2$, hasil bagi yang benar adalah ….","type":"mc","options":["$3x-2$","$6x-4$","$12x-8$"],"answer":"$3x-2$","feedback":"Benar. Hanya hasil bagi yang dibagi a; sisanya tetap 0."}
  ],
  "conclusion":"Ingat aturannya: pada pembagi (ax-b), hanya hasil bagi yang dibagi dengan a. Sisa tidak pernah diubah.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Matching -->

```json
{ "type":"activity", "widget":"matching", "id":"07-m2", "competency":"K3",
  "prompt":"Pasangkan setiap bentuk pembagi dengan bentuk sisanya.",
  "pairs":[
    ["Pembagi $(x-k)$","Sisa berupa konstanta"],
    ["Pembagi kuadrat","Sisa berbentuk $rx+s$"],
    ["Pembagi kubik","Sisa berderajat paling tinggi 2"],
    ["Pembagi $(ax-b)$","Sisa berupa konstanta, hasil bagi dibagi $a$"]
  ],
  "reward":{"xp":15} }
```

---

## 3️⃣ Tinjauan Teorema Sisa & Faktor

**Teorema Sisa (K4).** Sisa pembagian $f(x)$ oleh $(x-k)$ sama dengan $f(k)$; untuk $(ax-b)$ gunakan $f\!\left(\tfrac{b}{a}\right)$.

**Teorema Faktor.** $(x-k)$ merupakan faktor $\iff f(k)=0 \iff k$ adalah akar. Ketiganya setara.

**Akar Rasional.** Kandidat akar $=\pm\dfrac{\text{faktor konstanta}}{\text{faktor koefisien pemimpin}}$.

**Faktorisasi.** Temukan satu akar → bagi dengan Horner → ulangi hingga tersisa bentuk kuadrat.

### 📘 Contoh

Faktorkan $x^3+3x^2-10x-24$. Uji kandidat: $f(-2)=0$, sehingga $(x+2)$ merupakan faktor. Horner memberi hasil bagi $x^2+x-12=(x+4)(x-3)$. Faktorisasi penuhnya $(x+2)(x+4)(x-3)$ dengan akar $-2$, $-4$, dan $3$.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"07-g3", "competency":"K4",
  "title":"Menentukan sisa untuk pembagi kuadrat",
  "prompt":"Diketahui $f(x)$ dibagi $(x+1)$ bersisa $2$ dan dibagi $(x-1)$ bersisa $6$. Tentukan sisa jika dibagi $(x^2-1)$.",
  "steps":[
    {"ask":"Langkah 1. Karena $x^2-1=(x-1)(x+1)$ berderajat 2, bentuk sisanya adalah ….","type":"mc","options":["$px+q$","sebuah konstanta","$px^2+qx+r$"],"answer":"$px+q$","feedback":"Benar, derajat sisa harus lebih kecil daripada 2."},
    {"ask":"Langkah 2. Dari $f(-1)=2$ dan $f(1)=6$, sistem persamaannya adalah ….","type":"mc","options":["$-p+q=2$ dan $p+q=6$","$p+q=2$ dan $-p+q=6$","$p-q=2$ dan $p+q=6$"],"answer":"$-p+q=2$ dan $p+q=6$","feedback":"Tepat. Substitusikan x=-1 dan x=1 ke px+q."},
    {"ask":"Langkah 3. Selesaikan sistem tersebut. Sisanya adalah ….","type":"mc","options":["$2x+4$","$4x+2$","$2x-4$"],"answer":"$2x+4$","feedback":"Benar: jumlahkan kedua persamaan sehingga 2q=8, q=4, lalu p=2."}
  ],
  "conclusion":"Pola ini sangat sering muncul pada TKA. Kuncinya: substitusikan akar-akar pembagi ke bentuk sisa.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Categorize -->

```json
{ "type":"activity", "widget":"categorize", "id":"07-m3", "competency":"K4",
  "prompt":"Kelompokkan setiap tugas berdasarkan alat yang paling tepat.",
  "categories":["Teorema Sisa / Faktor","Teorema Vieta"],
  "items":[
    ["Menentukan sisa $f(x)$ dibagi $(x-3)$","Teorema Sisa / Faktor"],
    ["Menentukan jumlah akar persamaan","Teorema Vieta"],
    ["Memeriksa apakah $(x-2)$ merupakan faktor","Teorema Sisa / Faktor"],
    ["Menghitung hasil kali akar","Teorema Vieta"],
    ["Memeriksa apakah $f(k)=0$","Teorema Sisa / Faktor"],
    ["Menghitung $x_1^2+x_2^2$","Teorema Vieta"]
  ],
  "reward":{"xp":20} }
```

---

## 4️⃣ Tinjauan Persamaan & Vieta

**Vieta kuadrat (K5).** Untuk $ax^2+bx+c=0$: $x_1+x_2=-\dfrac{b}{a}$ dan $x_1x_2=\dfrac{c}{a}$.

**Vieta kubik.** Untuk $ax^3+bx^2+cx+d=0$: $\sum=-\dfrac{b}{a}$, $\sum$pasangan$=\dfrac{c}{a}$, dan hasil kali$=-\dfrac{d}{a}$.

**Ekspresi simetris.** $x_1^2+x_2^2=(\sum)^2-2\prod$ dan $\dfrac{1}{x_1}+\dfrac{1}{x_2}=\dfrac{\sum}{\prod}$.

**Transformasi akar.** Akar $+k$ berarti $x \to x-k$; akar dikali $k$ berarti $x \to \dfrac{x}{k}$; kebalikan akar berarti membalik urutan koefisien.

### 📘 Contoh

Akar-akar $x^2-6x+4=0$ adalah $p$ dan $q$. Maka $p+q=6$ dan $pq=4$, sehingga $p^2+q^2 = 36-8 = 28$ — tanpa pernah menghitung akarnya.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"07-g4", "competency":"K5",
  "title":"Menyusun persamaan dari transformasi akar",
  "prompt":"Persamaan $x^2-4x+3=0$ berakar $1$ dan $3$. Susun persamaan yang akarnya masing-masing 1 lebih besar.",
  "steps":[
    {"ask":"Langkah 1. Substitusi yang digunakan adalah ….","type":"mc","options":["$x \\to x-1$","$x \\to x+1$","$x \\to \\frac{x}{1}$"],"answer":"$x \\to x-1$","feedback":"Benar. Akar bertambah k berarti x diganti x-k."},
    {"ask":"Langkah 2. Substitusikan: $(x-1)^2 - 4(x-1) + 3$. Setelah dijabarkan hasilnya ….","type":"mc","options":["$x^2-6x+8$","$x^2-2x+8$","$x^2-6x-8$"],"answer":"$x^2-6x+8$","feedback":"Tepat: $x^2-2x+1-4x+4+3$."},
    {"ask":"Langkah 3. Periksa dengan Vieta: akar barunya $2$ dan $4$, sehingga jumlahnya $6$ dan hasil kalinya ….","type":"mc","options":["$8$","$6$","$4$"],"answer":"$8$","feedback":"Benar, sesuai dengan persamaan yang diperoleh."}
  ],
  "conclusion":"Selalu periksa hasil transformasi dengan Vieta. Pemeriksaan ini cepat dan menangkap kesalahan arah substitusi.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Matching -->

```json
{ "type":"activity", "widget":"matching", "id":"07-m4", "competency":"K5",
  "prompt":"Pasangkan setiap konsep dengan rumus atau pernyataan yang tepat.",
  "pairs":[
    ["Jumlah akar persamaan kuadrat","$-\\frac{b}{a}$"],
    ["Hasil kali akar persamaan kuadrat","$\\frac{c}{a}$"],
    ["$x_1^2+x_2^2$","$(x_1+x_2)^2-2x_1x_2$"],
    ["Kebalikan akar","Membalik urutan koefisien"]
  ],
  "reward":{"xp":15} }
```

---

## 5️⃣ Tinjauan Strategi & Jebakan

**Kerangka keputusan (K6).** Tentukan dahulu apa yang diminta, baru pilih alatnya. Sisa → $f(k)$. Akar → faktorisasi. Ekspresi simetris → Vieta. Nilai → substitusi.

**Enam jebakan tersering:**

1. Pembagi $(x+3)$ diuji dengan $f(3)$ — seharusnya $f(-3)$.
2. Lupa koefisien nol pada skema Horner.
3. Sisa ikut dibagi $a$ pada pembagi $(ax-b)$.
4. Soal "pilih semua benar" dihentikan setelah satu akar.
5. Ekspresi simetris malah diselesaikan dengan mencari akar.
6. Solusi konteks yang mustahil tetap diterima.

### 📘 Contoh

Pada soal titik potong $f(x)=x^3+3x^2-10x-24$, akar-akarnya $-2$, $-4$, dan $3$. Jebakannya: akar $-4$ menghasilkan titik $(-4,0)$, sedangkan $(4,0)$ **bukan** jawaban karena $f(4)=48$.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"07-g5", "competency":"K6",
  "title":"Menghindari jebakan pada soal pilih semua benar",
  "prompt":"Tentukan titik potong grafik $f(x)=x^3+3x^2-10x-24$ terhadap sumbu $X$ dari pilihan berikut: $(-2,0)$, $(-1,0)$, $(3,0)$, $(4,0)$, $(5,0)$.",
  "steps":[
    {"ask":"Langkah 1. Faktorisasi lengkapnya adalah ….","type":"mc","options":["$(x+2)(x+4)(x-3)$","$(x-2)(x-4)(x+3)$","$(x+2)(x-4)(x+3)$"],"answer":"$(x+2)(x+4)(x-3)$","feedback":"Benar, sehingga akarnya -2, -4, dan 3."},
    {"ask":"Langkah 2. Akar $-4$ menghasilkan titik potong ….","type":"mc","options":["$(-4,0)$","$(4,0)$","$(0,-4)$"],"answer":"$(-4,0)$","feedback":"Tepat. Inilah jebakannya: tandanya tidak boleh dibalik."},
    {"ask":"Langkah 3. Dari pilihan yang tersedia, jawaban yang benar adalah ….","type":"mc","options":["$(-2,0)$ dan $(3,0)$","$(-2,0)$, $(3,0)$, dan $(4,0)$","$(-2,0)$ saja"],"answer":"$(-2,0)$ dan $(3,0)$","feedback":"Benar. Titik $(-4,0)$ memang akar tetapi tidak tercantum, dan itu bukan alasan menandai $(4,0)$."}
  ],
  "conclusion":"Pada soal pilih semua benar: faktorkan tuntas, lalu cocokkan tiap pilihan dengan akar yang sebenarnya.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity ErrorHunt -->

```json
{ "type":"activity", "widget":"error-hunt", "id":"07-m5", "competency":"K6",
  "prompt":"Cermati pengerjaan menentukan titik potong $f(x)=x^3+3x^2-10x-24$ terhadap sumbu $X$ berikut. Terdapat satu langkah yang keliru.",
  "steps":[
    "Langkah 1. Titik potong sumbu X terjadi saat $f(x)=0$.",
    "Langkah 2. Faktorisasi memberi $(x+2)(x+4)(x-3)$, sehingga akarnya $-2$, $-4$, dan $3$.",
    "Langkah 3. Titik potongnya adalah $(-2,0)$, $(-4,0)$, dan $(3,0)$.",
    "Langkah 4. Karena $-4$ merupakan akar, tandai juga pilihan $(4,0)$."
  ],
  "wrong_index":3,
  "why":"Akar -4 menghasilkan titik (-4,0), bukan (4,0). Nilai f(4)=48 sehingga (4,0) bukan titik potong.",
  "reward":{"xp":15} }
```

---

## 📋 Lembar Rumus

<!-- COMPONENT: Cheat Sheet Card
     DEVELOPER: render sebagai KARTU ringkas yang dapat dipin atau diunduh; klik -> POP-UP
     berisi seluruh rumus. Kelompokkan per warna sesuai kompetensi. -->

| Konsep | Rumus |
|--------|-------|
| Algoritma pembagian | $f(x)=P(x)H(x)+S(x)$, $\deg S<\deg P$ |
| Teorema Sisa | Sisa $f\div(x-k)=f(k)$ |
| Teorema Faktor | $(x-k)$ faktor $\iff f(k)=0 \iff k$ akar |
| Vieta kuadrat | $x_1+x_2=-\frac{b}{a}$, $x_1x_2=\frac{c}{a}$ |
| Vieta kubik | $\sum=-\frac{b}{a}$, $\sum_{\text{pasang}}=\frac{c}{a}$, $\prod=-\frac{d}{a}$ |
| Ekspresi simetris | $x_1^2+x_2^2=(\sum)^2-2\prod$ |
| Menyusun dari akar | $f(x)=a\prod(x-r_i)$ |
| Pemeriksaan instan | $f(0)=$ konstanta; $f(1)=$ jumlah koefisien |

---

## ❓ Pertanyaan yang Sering Diajukan

<!-- COMPONENT: FAQ Accordion
     DEVELOPER: render sebagai accordion; hanya satu jawaban terbuka pada satu waktu. -->

<details>
<summary>Kapan memakai Horner dan kapan memakai pembagian bersusun?</summary>

Pembagi linear $(x-k)$ atau $(ax-b)$ paling cepat diselesaikan dengan Horner. Pembagi kuadrat tak terfaktorkan atau berderajat tiga ke atas lebih aman memakai bersusun. Kuadrat yang dapat difaktorkan dapat memakai Horner bertingkat.

</details>

<details>
<summary>Bila hanya sisa yang diminta, apakah harus membagi?</summary>

Tidak. Gunakan Teorema Sisa dengan menghitung $f(k)$. Ini cara pintas yang paling sering terpakai.

</details>

<details>
<summary>Apakah polinomial berderajat $n$ pasti memiliki $n$ akar?</summary>

Paling banyak $n$ akar. Sebagian akar dapat kembar atau kompleks; akar kompleks selalu berpasangan apabila koefisiennya real.

</details>

<details>
<summary>Kapan memakai Vieta dan kapan memakai faktorisasi?</summary>

Bila yang ditanyakan jumlah, hasil kali, atau ekspresi simetris akar, gunakan Vieta tanpa mencari akar. Bila yang ditanyakan akar tertentu atau titik potong, gunakan faktorisasi.

</details>

<details>
<summary>Bagaimana mencegah kesalahan hitung?</summary>

Gunakan tiga pemeriksaan instan: $f(0)$, $f(1)$, dan verifikasi Vieta. Ketiganya hanya perlu beberapa detik.

</details>

---

## 📝 Bank Soal Bertingkat

<!-- COMPONENT: Quiz Cards
     DEVELOPER: render 5 paket sebagai KARTU (A-E); klik -> POP-UP. Paket D dan E OPSIONAL. -->

### 🟢 Paket A — Dasar (5 soal)

```json
{
  "set_id":"07-bank-A-mudah","level":"mudah","optional": false,
  "items":[
    {"id":"A1","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan derajat dari polinomial $x^4 - 2x + 1$.","answer":"4","explanation":"Pangkat tertinggi adalah 4."},
    {"id":"A2","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan sisa pembagian $x^2 + x + 1$ oleh $(x-1)$.","answer":"3","explanation":"f(1)=3."},
    {"id":"A3","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan jumlah akar-akar persamaan $x^2 - 9x + 20 = 0$.","answer":"9","explanation":"-b/a=9."},
    {"id":"A4","type":"mc","question":"Apakah $\\frac{3}{x} + 2$ merupakan polinomial?","options":["Tidak","Ya"],"answer":"Tidak","explanation":"3/x setara 3x pangkat -1."},
    {"id":"A5","type":"mc","question":"Diketahui $V(T)=0{,}05T^3+0{,}4T^2+20T$. Tentukan hasil dari $10 \\times V(T)$.","options":["$0{,}5T^3+4T^2+200T$","$50T^3+40T^2+200T$","$5T^3+4T^2+200T$","$0{,}5T^3+0{,}4T^2+200T$"],"answer":"$0{,}5T^3+4T^2+200T$","explanation":"Kalikan tiap koefisien dengan 10."}
  ]
}
```
<details><summary><strong>Pembahasan Paket A</strong></summary>

1. $4$. 2. $3$. 3. $9$. 4. Tidak. 5. $0{,}5T^3+4T^2+200T$.
</details>

### 🟡 Paket B — Menengah (5 soal)

```json
{
  "set_id":"07-bank-B-sedang","level":"sedang","optional": false,
  "items":[
    {"id":"B1","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan sisa pembagian $2x^3 - x + 1$ oleh $(x+1)$.","answer":"0","explanation":"f(-1)=-2+1+1=0."},
    {"id":"B2","type":"mc","question":"Faktorkan $x^3 - 4x^2 + x + 6$ hingga tuntas.","options":["$(x+1)(x-2)(x-3)$","$(x-1)(x+2)(x-3)$","$(x+1)(x+2)(x-3)$","$(x-1)(x-2)(x-3)$"],"answer":"$(x+1)(x-2)(x-3)$","explanation":"Akar-akarnya -1, 2, dan 3."},
    {"id":"B3","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Akar-akar $x^2-4x+2=0$ adalah $\\alpha$ dan $\\beta$. Hitung $\\alpha^2+\\beta^2$.","answer":"12","explanation":"16-4=12."},
    {"id":"B4","type":"mc","question":"Tentukan hasil bagi dan sisa dari $x^3 + 2x^2 - 5x + 1$ dibagi $(x-2)$.","options":["Hasil bagi $x^2+4x+3$, sisa $7$","Hasil bagi $x^2+4x-3$, sisa $7$","Hasil bagi $x^2+2x+3$, sisa $5$","Hasil bagi $x^2+4x+3$, sisa $0$"],"answer":"Hasil bagi $x^2+4x+3$, sisa $7$","explanation":"Horner dengan k=2."},
    {"id":"B5","type":"mc","question":"Susun persamaan kuadrat monik yang akar-akarnya $-2$ dan $5$.","options":["$x^2-3x-10=0$","$x^2+3x-10=0$","$x^2-3x+10=0$","$x^2-7x-10=0$"],"answer":"$x^2-3x-10=0$","explanation":"Jumlah 3 dan hasil kali -10."}
  ]
}
```
<details><summary><strong>Pembahasan Paket B</strong></summary>

1. $0$. 2. $(x+1)(x-2)(x-3)$. 3. $12$. 4. $H=x^2+4x+3$, $S=7$. 5. $x^2-3x-10=0$.
</details>

### 🔴 Paket C — Lanjut (5 soal)

```json
{
  "set_id":"07-bank-C-sulit","level":"sulit","optional": false,
  "items":[
    {"id":"C1","type":"mc","question":"Akar-akar $x^3-6x^2+11x-6=0$ adalah $p$, $q$, dan $r$. Hitung $\\frac{1}{p}+\\frac{1}{q}+\\frac{1}{r}$.","options":["$\\frac{11}{6}$","$\\frac{6}{11}$","$\\frac{1}{6}$","$11$"],"answer":"$\\frac{11}{6}$","explanation":"Bentuknya sama dengan (pq+qr+rp)/(pqr)."},
    {"id":"C2","type":"mc","question":"Diketahui $f(x)$ dibagi $(x-1)$, $(x-2)$, dan $(x-3)$ berturut-turut bersisa $2$, $5$, dan $10$. Tentukan sisa jika dibagi $(x-1)(x-2)(x-3)$.","options":["$x^2+1$","$x^2$","$2x$","$x^2-1$"],"answer":"$x^2+1$","explanation":"S(x)=x^2+1 melewati ketiga titik."},
    {"id":"C3","type":"mc","question":"Faktorkan $2x^3 + x^2 - 13x + 6$ hingga tuntas.","options":["$(x-2)(2x-1)(x+3)$","$(x+2)(2x-1)(x-3)$","$(x-2)(2x+1)(x+3)$","$(x-2)(x-1)(x+3)$"],"answer":"$(x-2)(2x-1)(x+3)$","explanation":"Akar-akarnya 2, 1/2, dan -3."},
    {"id":"C4","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan nilai $m$ agar $x^3-70x^2-600x+m=0$ memiliki akar $40$.","answer":"72000","explanation":"Substitusikan x=40 sehingga m=72000."},
    {"id":"C5","type":"mc","question":"Susun persamaan yang akar-akarnya $2$ lebih besar daripada akar-akar $x^3-3x^2+2x=0$.","options":["$x^3-9x^2+26x-24=0$","$x^3-9x^2+26x+24=0$","$x^3+9x^2+26x-24=0$","$x^3-3x^2+2x-24=0$"],"answer":"$x^3-9x^2+26x-24=0$","explanation":"Substitusi x menjadi x-2; akar baru 2, 3, dan 4."}
  ]
}
```
<details><summary><strong>Pembahasan Paket C</strong></summary>

1. $\frac{11}{6}$. 2. $x^2+1$. 3. $(x-2)(2x-1)(x+3)$. 4. $72.000$. 5. $x^3-9x^2+26x-24=0$.
</details>

### 🧠 Paket D — HOTS (5 soal, opsional)

> Paket ini **opsional**. Mengerjakannya memberi XP bonus.

```json
{
  "set_id":"07-bank-D-hots","level":"hots","optional": true, "bonus_xp": 20,
  "items":[
    {"id":"D1","type":"mc","question":"Diketahui $f$ berderajat 3 dengan $f(1)=f(2)=f(3)=0$ dan $f(0)=6$. Tentukan $f(x)$.","options":["$-(x-1)(x-2)(x-3)$","$(x-1)(x-2)(x-3)$","$6(x-1)(x-2)(x-3)$","$-6(x-1)(x-2)(x-3)$"],"answer":"$-(x-1)(x-2)(x-3)$","explanation":"f(0)=a(-1)(-2)(-3)=-6a=6 sehingga a=-1."},
    {"id":"D2","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Akar-akar $x^3-2x^2-x+2=0$ adalah $-1$, $1$, dan $2$. Hitung jumlah pangkat tiga dari ketiga akar tersebut.","answer":"8","explanation":"-1+1+8=8."},
    {"id":"D3","type":"mc","question":"Jika $\\alpha$, $\\beta$, dan $\\gamma$ merupakan akar $x^3+px+q=0$, tentukan nilai $\\alpha^2+\\beta^2+\\gamma^2$.","options":["$-2p$","$2p$","$p^2$","$-2q$"],"answer":"$-2p$","explanation":"Jumlah akar 0 dan jumlah pasangan p, sehingga 0-2p."},
    {"id":"D4","type":"mc","question":"Persamaan $x^3-70x^2-600x+72{.}000=0$ berakar $40$, $60$, dan $-30$. Hitung $\\frac{1}{40}+\\frac{1}{60}+\\frac{1}{-30}$.","options":["$\\frac{1}{120}$","$\\frac{1}{60}$","$-\\frac{1}{120}$","$\\frac{1}{30}$"],"answer":"$\\frac{1}{120}$","explanation":"Sama dengan (jumlah pasangan)/(hasil kali) = -600/-72000."},
    {"id":"D5","type":"mc","question":"Susun persamaan kubik yang akar-akarnya $\\alpha+\\beta$, $\\beta+\\gamma$, dan $\\gamma+\\alpha$, jika $\\alpha$, $\\beta$, $\\gamma$ merupakan akar $x^3-6x^2+11x-6=0$.","options":["$x^3-12x^2+47x-60=0$","$x^3-6x^2+11x-6=0$","$x^3-12x^2+47x+60=0$","$x^3-11x^2+12x-60=0$"],"answer":"$x^3-12x^2+47x-60=0$","explanation":"Karena jumlah akar 6, tiap akar baru sama dengan 6 dikurangi akar lama, yaitu 5, 4, dan 3."}
  ]
}
```
<details><summary><strong>Pembahasan Paket D</strong></summary>

1. $-(x-1)(x-2)(x-3)$. 2. $8$. 3. $-2p$. 4. $\frac{1}{120}$. 5. $x^3-12x^2+47x-60=0$.
</details>

### 🏆 Paket E — Model TKA (5 soal, opsional)

> Paket ini **opsional** dan memuat keempat soal TKA. Mengerjakannya memberi XP bonus.

```json
{
  "set_id":"07-bank-E-tka","level":"tka","optional": true, "bonus_xp": 20,
  "items":[
    {"id":"E1","type":"multi","source":"TKA-2024-no5","question":"Tentukan koordinat titik potong grafik $f(x)=x^3+3x^2-10x-24$ terhadap sumbu $X$. Pilih SEMUA jawaban yang benar.","options":["$(-2,0)$","$(-1,0)$","$(3,0)$","$(4,0)$","$(5,0)$"],"answer":["$(-2,0)$","$(3,0)$"],"explanation":"Akarnya -2, -4, dan 3."},
    {"id":"E2","type":"mc","source":"TKA-2024-no6","question":"Diketahui $x^4+ax^3+bx^2+x-6$ dibagi $x^2+x+1$ bersisa $5x-1$. Tentukan nilai $a+b$.","options":["$-1$","$11$","$5$","$-7$"],"answer":"$-1$","explanation":"Diperoleh a=2 dan b=-3."},
    {"id":"E3","type":"mc","source":"TKA-2024-no7","question":"Diketahui $V(T)=0{,}05T^3+0{,}4T^2+20T$. Total penambahan volume untuk 10 drum identik adalah ….","options":["$0{,}5T^3+4T^2+200T$","$50T^3+40T^2+200T$","$5T^3+4T^2+200T$","$0{,}5T^3+0{,}4T^2+200T$"],"answer":"$0{,}5T^3+4T^2+200T$","explanation":"Kalikan tiap koefisien dengan 10."},
    {"id":"E4","type":"multi","source":"TKA-2024-no8","question":"Diketahui $f(x)=x^3-70x^2-600x+74{.}000$ dan modal $2.000$ juta. Penjualan manakah yang MUNGKIN terjadi? Pilih SEMUA jawaban yang benar.","options":["$30$ unit","$40$ unit","$60$ unit"],"answer":["$40$ unit","$60$ unit"],"explanation":"f(40)=f(60)=2000, sedangkan f(30)=20000."},
    {"id":"E5","type":"mc","question":"Diketahui $f(x)$ dibagi $(x+1)$ bersisa $2$ dan dibagi $(x-1)$ bersisa $6$. Tentukan sisa jika dibagi $(x^2-1)$.","options":["$2x+4$","$4x+2$","$2x-4$","$x+4$"],"answer":"$2x+4$","explanation":"Sisa px+q dengan -p+q=2 dan p+q=6."}
  ]
}
```
<details><summary><strong>Pembahasan Paket E</strong></summary>

**E1.** $(-2,0)$ dan $(3,0)$. **E2.** $-1$. **E3.** $0{,}5T^3+4T^2+200T$. **E4.** 40 dan 60 unit. **E5.** $2x+4$.
</details>

---

## ⚠️ Kesalahan Umum (Kompilasi Seluruh Bab)

| Kesalahan | Perbaikan |
|-----------|-----------|
| Pangkat pecahan atau negatif dianggap polinomial | Pangkat wajib bilangan bulat tak negatif |
| Lupa tanda negatif pada koefisien | Tanda selalu ikut pada koefisien |
| Tidak menulis koefisien nol pada Horner | Tulis semua koefisien |
| Salah tanda $k$: $(x+3)$ dipakai $k=3$ | Gunakan $k=-3$ |
| Sisa ikut dibagi $a$ pada $(ax-b)$ | Hanya hasil bagi yang dibagi $a$ |
| "Pilih semua benar" berhenti di satu akar | Faktorkan tuntas |
| Ekspresi simetris malah dicari akarnya | Gunakan Vieta |
| Vieta tak monik lupa dibagi $a$ | Selalu bagi dengan $a$ |
| Solusi konteks mustahil diterima | Tolak nilai yang tak bermakna |
| Salah arah substitusi transformasi | Akar $+k$ berarti $x \to x-k$ |

---

## 🏆 Tantangan Akhir — Simulasi TKA

<!-- COMPONENT: Tantangan Akhir Bab
     DEVELOPER: render sebagai KARTU bertanda khusus (asesmen puncak); klik -> POP-UP layar penuh
     (modal) berisi sesi berwaktu. Setelah selesai, tampilkan rekap capaian PER KOMPETENSI
     (K1-K6) beserta bintang, poin, waktu, dan lencana Master Polinomial. -->
> Simulasi berisi 15 soal dalam waktu 20 menit, mencakup seluruh kompetensi K1–K6 serta keempat soal TKA. Seluruh soal berbentuk pilihan sehingga dapat dikerjakan tanpa mengetik.

```json
{ "type":"challenge", "id":"07-tantangan", "competency":"K1-K6",
  "title":"Simulasi TKA: Polinomial",
  "mode":"timed", "time_limit_sec":1200, "display":"modal", "shuffle":false,
  "scoring":{"per_correct":10,"time_bonus":true},
  "stars":{"3":90,"2":70,"1":50},
  "reward":{"xp":100,"badge":"master-polinomial"},
  "record":{"track_best_time":true,"track_best_score":true},
  "items":[
    {"id":"Q1","type":"mc","competency":"K1","question":"Diketahui $V(T)=0{,}05T^3+0{,}4T^2+20T$. Tentukan derajat dan koefisien pemimpinnya.","options":["Derajat 3, koefisien pemimpin $0{,}05$","Derajat 3, koefisien pemimpin $0{,}4$","Derajat 2, koefisien pemimpin $0{,}4$","Derajat 3, koefisien pemimpin $20$"],"answer":"Derajat 3, koefisien pemimpin $0{,}05$","explanation":"Pangkat tertinggi 3 dengan koefisien 0,05."},
    {"id":"Q2","type":"mc","competency":"K1","question":"Manakah di antara bentuk berikut yang MERUPAKAN polinomial?","options":["$4x^2+\\frac{x}{3}$","$\\frac{4}{x}+x^2$","$\\sqrt{x}+3$","$3^x+x$"],"answer":"$4x^2+\\frac{x}{3}$","explanation":"Angka pada penyebut diperbolehkan."},
    {"id":"Q3","type":"mc","competency":"K2","source":"TKA-no7","question":"Diketahui $V(T)=0{,}05T^3+0{,}4T^2+20T$. Total penambahan volume untuk 10 drum identik adalah ….","options":["$0{,}5T^3+4T^2+200T$","$50T^3+40T^2+200T$","$5T^3+4T^2+200T$","$0{,}5T^3+0{,}4T^2+200T$"],"answer":"$0{,}5T^3+4T^2+200T$","explanation":"Kalikan tiap koefisien dengan 10."},
    {"id":"Q4","type":"mc","competency":"K2","question":"Diketahui $f(x)=x^2-4x+1$. Hitung $f(3)$.","options":["$-2$","$2$","$-4$","$4$"],"answer":"$-2$","explanation":"9-12+1=-2."},
    {"id":"Q5","type":"mc","competency":"K3","question":"Sebelum membagi $x^3-1$ oleh $(x-1)$ dengan skema Horner, koefisien yang dituliskan adalah ….","options":["$1,\\ 0,\\ 0,\\ -1$","$1,\\ -1$","$1,\\ 1,\\ 1$","$1,\\ 0,\\ -1$"],"answer":"$1,\\ 0,\\ 0,\\ -1$","explanation":"Suku yang hilang ditulis dengan koefisien 0."},
    {"id":"Q6","type":"mc","competency":"K3","source":"TKA-no6","question":"Diketahui $x^4+ax^3+bx^2+x-6$ dibagi $x^2+x+1$ bersisa $5x-1$. Tentukan nilai $a+b$.","options":["$-1$","$11$","$5$","$-7$"],"answer":"$-1$","explanation":"Diperoleh a=2 dan b=-3."},
    {"id":"Q7","type":"mc","competency":"K4","question":"Tentukan sisa pembagian $x^3-2x^2+4x-1$ oleh $(x-2)$.","options":["$7$","$5$","$3$","$-1$"],"answer":"$7$","explanation":"f(2)=7."},
    {"id":"Q8","type":"mc","competency":"K4","question":"Manakah yang merupakan salah satu faktor dari $x^3-6x^2+11x-6$?","options":["$(x-1)$","$(x+1)$","$(x-4)$","$(x+2)$"],"answer":"$(x-1)$","explanation":"f(1)=0."},
    {"id":"Q9","type":"multi","competency":"K4","source":"TKA-no5","question":"Tentukan koordinat titik potong grafik $f(x)=x^3+3x^2-10x-24$ terhadap sumbu $X$. Pilih SEMUA jawaban yang benar.","options":["$(-2,0)$","$(-1,0)$","$(3,0)$","$(4,0)$","$(5,0)$"],"answer":["$(-2,0)$","$(3,0)$"],"explanation":"Akarnya -2, -4, dan 3."},
    {"id":"Q10","type":"mc","competency":"K5","question":"Tentukan jumlah akar-akar persamaan $2x^2-8x+6=0$.","options":["$4$","$3$","$8$","$-4$"],"answer":"$4$","explanation":"-b/a = 8/2 = 4."},
    {"id":"Q11","type":"mc","competency":"K5","question":"Akar-akar $x^2-5x+3=0$ adalah $\\alpha$ dan $\\beta$. Hitung $\\alpha^2+\\beta^2$.","options":["$19$","$25$","$22$","$13$"],"answer":"$19$","explanation":"25-6=19."},
    {"id":"Q12","type":"mc","competency":"K5","question":"Susun persamaan kuadrat yang akarnya masing-masing 1 lebih besar daripada akar $x^2-4x+3=0$.","options":["$x^2-6x+8=0$","$x^2-2x+8=0$","$x^2-6x-8=0$","$x^2+6x+8=0$"],"answer":"$x^2-6x+8=0$","explanation":"Substitusi x menjadi x-1."},
    {"id":"Q13","type":"multi","competency":"K6","source":"TKA-no8","question":"Diketahui $f(x)=x^3-70x^2-600x+74{.}000$ dan modal $2.000$ juta. Penjualan manakah yang MUNGKIN terjadi? Pilih SEMUA jawaban yang benar.","options":["$30$ unit","$40$ unit","$60$ unit"],"answer":["$40$ unit","$60$ unit"],"explanation":"f(40)=f(60)=2000."},
    {"id":"Q14","type":"mc","competency":"K6","question":"Soal meminta HANYA sisa pembagian oleh $(x-3)$. Metode tercepatnya adalah ….","options":["Menghitung $f(3)$","Pembagian bersusun","Horner lengkap","Faktorisasi"],"answer":"Menghitung $f(3)$","explanation":"Teorema Sisa untuk pembagi linear."},
    {"id":"Q15","type":"mc","competency":"K6","question":"Diketahui $f(x)$ dibagi $(x-1)$ bersisa $4$ dan dibagi $(x+1)$ bersisa $0$. Tentukan sisa jika dibagi $(x^2-1)$.","options":["$2x+2$","$2x-2$","$4x$","$x+3$"],"answer":"$2x+2$","explanation":"p+q=4 dan -p+q=0 memberi p=2, q=2."}
  ] }
```

**Cara membaca hasil:** benar 13–15 berarti siap menghadapi TKA; benar 9–12 berarti hampir siap dan perlu meninjau bab yang lemah; benar 8 ke bawah berarti perlu mengulang materi sesuai kompetensi yang banyak salah.

---

## 📝 Refleksi Penutup

<!-- COMPONENT: Reflection -->

Seluruh materi polinomial telah dituntaskan. Sebelum menutup, renungkan hal berikut:

1. Kompetensi mana (K1–K6) yang paling Anda kuasai, dan mana yang masih perlu diulang?
2. Tuliskan tiga rumus atau cara pintas yang paling sering membantu Anda.
3. Dari keempat soal TKA, mana yang sebelumnya paling sulit dan kini terasa mudah?
4. Apa satu kebiasaan berpikir baru yang Anda peroleh dari pembelajaran ini?
5. Kapan Anda akan mengulang simulasi ini untuk mengukur kemajuan?

> 🎓 **Penutup.** Polinomial mengajarkan hal yang lebih luas daripada sekadar $x$ dan pangkat, yaitu bahwa **masalah yang rumit selalu dapat diuraikan** menjadi bagian-bagian sederhana yang saling terhubung. Terapkan cara berpikir ini pada berbagai persoalan. Anda telah siap.

<!-- COMPONENT: Summary -->
<!-- Progress bar: 8/8 SELESAI. Tampilkan lencana Master Polinomial dan tombol mengulang simulasi. -->
