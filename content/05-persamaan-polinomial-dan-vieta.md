---
id: "05-persamaan-polinomial-dan-vieta"
slug: "persamaan-polinomial-dan-vieta"
title: "Persamaan Polinomial dan Teorema Vieta"
order: 5
duration_min: 85
level: "Kelas XI - Kurikulum Merdeka"
track: "TKA Matematika Lanjut"
prerequisites:
  - "04-teorema-sisa-dan-faktor"
competencies:
  - "K5: Menyelesaikan persamaan polinomial & Teorema Vieta"
learning_objectives:
  - "Menyelesaikan persamaan polinomial melalui faktorisasi"
  - "Menggunakan Teorema Vieta menghubungkan akar & koefisien"
  - "Menghitung ekspresi simetris akar tanpa mencari akar"
  - "Menyusun persamaan dari akar maupun dari transformasi akar"
tags: ["persamaan-polinomial", "vieta", "akar", "menyusun-persamaan", "transformasi-akar"]
layout: "sub-materi"
sub_materi:
  - { id: "1", title: "Persamaan & Akarnya" }
  - { id: "2", title: "Teorema Vieta" }
  - { id: "3", title: "Ekspresi Simetris Akar" }
  - { id: "4", title: "Menyusun Persamaan" }
  - { id: "5", title: "Transformasi Akar" }
components:
  - "Info Cards"
  - "Sub Materi"
  - "Activity Guided"
  - "Activity TrueFalse"
  - "Activity Matching"
  - "Activity Categorize"
  - "Activity ErrorHunt"
  - "Quiz Cards"
  - "Tantangan Akhir Bab"
  - "Reflection"
activities:
  - "05-g1"
  - "05-m1"
  - "05-g2"
  - "05-m2"
  - "05-g3"
  - "05-m3"
  - "05-g4"
  - "05-m4"
  - "05-g5"
  - "05-m5"
challenge: "05-tantangan"
xp_available: 235
katex: true
---

# Bab 05 — Persamaan Polinomial dan Teorema Vieta

<!-- COMPONENT: Info Cards
     DEVELOPER: enam bagian di bawah dirender sebagai KARTU berwarna berbeda; klik -> POP-UP.
     Ikon Lucide: target, puzzle, package, clock, map, flame. -->

<details data-card="tujuan" data-icon="target">
<summary>🎯 Tujuan Pembelajaran</summary>

Setelah mempelajari bab ini, peserta didik diharapkan mampu:

1. Menyelesaikan persamaan polinomial melalui faktorisasi.
2. Menggunakan Teorema Vieta untuk mengaitkan akar dengan koefisien.
3. Menghitung ekspresi simetris akar tanpa mencari akarnya.
4. Menyusun persamaan polinomial dari akar-akarnya.
5. Menyusun persamaan baru dari transformasi akar.

</details>

<details data-card="kompetensi" data-icon="puzzle">
<summary>🧩 Kompetensi</summary>

**K5 — Menyelesaikan persamaan polinomial dan Teorema Vieta.**

</details>

<details data-card="prasyarat" data-icon="package">
<summary>📦 Prasyarat</summary>

- Bab 04: akar, faktor, dan faktorisasi. Vieta merupakan sisi lain dari Teorema Faktor.
- Bab 02: kesamaan polinomial (menyamakan koefisien).

</details>

<details data-card="waktu" data-icon="clock">
<summary>⏱️ Estimasi Waktu</summary>

**±85 menit.** Dapat dibagi menjadi beberapa sesi.

</details>

<details data-card="peta" data-icon="map">
<summary>🗺️ Peta Konsep</summary>

<!-- COMPONENT: Concept Map Mini
     DEVELOPER: render sebagai kartu/diagram interaktif yang dapat diklik menuju sub-materi. -->

```
Persamaan & Akar → Teorema Vieta → Ekspresi Simetris
                                 → Menyusun Persamaan
                                 → Transformasi Akar
```

</details>

<details data-card="motivasi" data-icon="flame">
<summary>🔥 Motivasi</summary>

Pada Bab 04, akar dicari melalui proses bertahap. Kini muncul pertanyaan: "berapa jumlah akarnya?" atau "berapa hasil kali akarnya?" Ternyata keduanya dapat dijawab **hanya dengan melihat koefisien**, tanpa mencari akar sama sekali. Itulah kekuatan **Teorema Vieta**, yang juga akan menyelesaikan soal saham secara jauh lebih ringkas.

</details>

---

<!-- COMPONENT: Sub Materi
     DEVELOPER: judul sub-materi WAJIB sticky di bawah judul bab saat digulir. -->

## 1️⃣ Persamaan & Akarnya

> **Persamaan polinomial** berbentuk $f(x)=0$. Menyelesaikannya berarti mencari semua nilai $x$ yang memenuhi.

Dua fakta penting dari Bab 04:

- Persamaan berderajat $n$ memiliki **paling banyak $n$ akar**.
- Jika koefisiennya real, **akar kompleks selalu berpasangan**: bila $a+bi$ akar, maka $a-bi$ juga akar.

Cara penyelesaiannya adalah **faktorkan**, lalu setiap faktor linear $(x-r)$ memberi akar $x=r$.

### 📘 Contoh

Selesaikan $x^3 - 4x = 0$.

Faktorkan: $x(x^2-4) = x(x-2)(x+2) = 0$, sehingga akar-akarnya $x=-2$, $x=0$, dan $x=2$.

Selesaikan pula $x^3-1=0$. Faktornya $(x-1)(x^2+x+1)=0$. Faktor pertama memberi $x=1$; faktor kuadrat diselesaikan dengan rumus $abc$ dan menghasilkan dua akar kompleks. Jadi terdapat satu akar real dan dua akar kompleks.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"05-g1", "competency":"K5",
  "title":"Menyelesaikan persamaan melalui faktorisasi",
  "prompt":"Selesaikan persamaan $x^3 - 4x = 0$.",
  "steps":[
    {"ask":"Langkah 1. Faktor yang sama pada kedua suku adalah ….","type":"mc","options":["$x$","$x^2$","$4$"],"answer":"$x$","feedback":"Benar, sehingga bentuknya menjadi $x(x^2-4)=0$."},
    {"ask":"Langkah 2. Faktorkan $x^2-4$. Hasilnya ….","type":"mc","options":["$(x-2)(x+2)$","$(x-4)(x+1)$","$(x-2)^2$"],"answer":"$(x-2)(x+2)$","feedback":"Tepat, ini pola selisih kuadrat."},
    {"ask":"Langkah 3. Dari $x(x-2)(x+2)=0$, akar-akarnya adalah ….","type":"mc","options":["$-2,\\ 0,\\ 2$","$0,\\ 2$","$-2,\\ 2$"],"answer":"$-2,\\ 0,\\ 2$","feedback":"Benar. Jangan lupakan akar $x=0$ dari faktor pertama."}
  ],
  "conclusion":"Kesalahan yang sering terjadi adalah melupakan akar dari faktor x itu sendiri. Setiap faktor memberi satu akar.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity TrueFalse -->

```json
{ "type":"activity", "widget":"truefalse", "id":"05-m1", "competency":"K5",
  "prompt":"Tentukan nilai kebenaran tiap pernyataan.",
  "statements":[
    {"s":"Persamaan berderajat $n$ memiliki paling banyak $n$ akar.","a":true,"why":"Setiap akar menyumbang satu faktor linear."},
    {"s":"Setiap persamaan berderajat 3 pasti memiliki tiga akar real berbeda.","a":false,"why":"Sebagian akar dapat kembar atau kompleks."},
    {"s":"Jika koefisiennya real dan $2+i$ merupakan akar, maka $2-i$ juga akar.","a":true,"why":"Akar kompleks selalu berpasangan."},
    {"s":"Menyelesaikan $f(x)=0$ berarti mencari nilai $x$ yang membuat $f$ bernilai nol.","a":true,"why":"Itulah definisi akar."}
  ],
  "reward":{"xp":15} }
```

---

## 2️⃣ Teorema Vieta

Vieta menghubungkan **akar** dengan **koefisien** secara langsung. Rumusnya diturunkan dari Teorema Faktor.

<!-- VISUAL: Penurunan rumus Vieta
     DEVELOPER: animasikan penjabaran (x-p)(x-q) menjadi x^2-(p+q)x+pq. Saat penjabaran selesai,
     tarik garis penghubung dari koefisien x menuju -(p+q) dan dari konstanta menuju pq,
     memakai warna yang sama (hl-1 dan hl-2) untuk menegaskan pasangannya. -->

Ambil persamaan kuadrat monik dengan akar $p$ dan $q$:
$$x^2 + \htmlClass{hl-1}{b}x + \htmlClass{hl-2}{c} = (x-p)(x-q) = x^2 \htmlClass{hl-1}{- (p+q)}x + \htmlClass{hl-2}{pq}$$

Dengan menyamakan koefisien diperoleh $p+q = -b$ dan $pq = c$. **Itulah Vieta.**

**Rumus lengkap:**

Kuadrat $ax^2+bx+c=0$ dengan akar $x_1,x_2$:
$$x_1+x_2 = -\frac{b}{a} \qquad x_1x_2 = \frac{c}{a}$$

Kubik $ax^3+bx^2+cx+d=0$ dengan akar $p,q,r$:
$$p+q+r = -\frac{b}{a} \qquad pq+qr+rp = \frac{c}{a} \qquad pqr = -\frac{d}{a}$$

> 💡 **Pola tanda:** berselang-seling dimulai dari negatif. Jumlah tunggal bertanda $-$, jumlah pasangan bertanda $+$, hasil kali tiga bertanda $-$, dan seterusnya.

> ⚠️ Untuk persamaan **tak monik**, jangan lupa membagi dengan $a$.

### 📘 Contoh

Tanpa mencari akarnya, tentukan jumlah dan hasil kali akar dari $2x^2-7x+3=0$.

$$x_1+x_2 = -\frac{-7}{2} = \frac{7}{2} \qquad x_1x_2 = \frac{3}{2}$$

Untuk kubik $x^3-4x^2+5x-2=0$: jumlah akar $=4$, jumlah hasil kali pasangan $=5$, dan hasil kali ketiganya $=2$ — semuanya dibaca langsung dari koefisien.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"05-g2", "competency":"K5",
  "title":"Membaca Vieta pada persamaan tak monik",
  "prompt":"Tentukan jumlah dan hasil kali akar dari $2x^2 - 3x - 2 = 0$.",
  "steps":[
    {"ask":"Langkah 1. Identifikasi nilainya: $a=2$, $b=-3$, dan $c=\\;?$","type":"mc","options":["$-2$","$2$","$3$"],"answer":"$-2$","feedback":"Benar, konstanta beserta tandanya."},
    {"ask":"Langkah 2. Jumlah akar $=-\\frac{b}{a} = \\;?$","type":"mc","options":["$\\frac{3}{2}$","$-\\frac{3}{2}$","$3$"],"answer":"$\\frac{3}{2}$","feedback":"Tepat, karena $-\\frac{-3}{2}=\\frac{3}{2}$. Perhatikan tanda ganda."},
    {"ask":"Langkah 3. Hasil kali akar $=\\frac{c}{a} = \\;?$","type":"mc","options":["$-1$","$1$","$-2$"],"answer":"$-1$","feedback":"Benar: $\\frac{-2}{2}=-1$."}
  ],
  "conclusion":"Pada persamaan tak monik, selalu bagi dengan a. Kesalahan tersering adalah melewatkan pembagian ini dan salah tanda pada -b/a.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Matching -->

```json
{ "type":"activity", "widget":"matching", "id":"05-m2", "competency":"K5",
  "prompt":"Untuk persamaan $x^3 - 4x^2 + 5x - 2 = 0$ dengan akar $p$, $q$, dan $r$, pasangkan setiap besaran Vieta dengan nilainya.",
  "pairs":[
    ["$p+q+r$","$4$"],
    ["$pq+qr+rp$","$5$"],
    ["$pqr$","$2$"],
    ["Banyaknya akar maksimum","$3$"]
  ],
  "reward":{"xp":15} }
```

---

## 3️⃣ Ekspresi Simetris Akar

Soal TKA sering menanyakan bentuk seperti $x_1^2+x_2^2$ atau $\dfrac{1}{x_1}+\dfrac{1}{x_2}$. Bentuk-bentuk ini **tidak perlu** diselesaikan dengan mencari akarnya; cukup nyatakan dalam jumlah dan hasil kali.

$$x_1^2+x_2^2 = (x_1+x_2)^2 - 2x_1x_2$$
$$\frac{1}{x_1}+\frac{1}{x_2} = \frac{x_1+x_2}{x_1x_2}$$
$$x_1^3+x_2^3 = (x_1+x_2)^3 - 3x_1x_2(x_1+x_2)$$
$$(x_1-x_2)^2 = (x_1+x_2)^2 - 4x_1x_2$$

<!-- VISUAL: Peta ekspresi simetris
     DEVELOPER: tampilkan sebagai bagan dua kotak sumber, yaitu "jumlah akar" dan "hasil kali akar".
     Saat pengguna memilih salah satu ekspresi target, munculkan panah dari kedua kotak sumber
     menuju ekspresi tersebut beserta rumus perantaranya. -->

> ⚡ **Strategi utama:** bila soal menanyakan ekspresi simetris akar, jangan mencari akarnya. Ubah ke jumlah dan hasil kali, lalu masukkan nilai Vieta.

### 📘 Contoh

Akar-akar $x^2-6x+4=0$ adalah $p$ dan $q$. Hitung $p^2+q^2$.

Dari Vieta: $p+q=6$ dan $pq=4$. Maka
$$p^2+q^2 = (6)^2 - 2(4) = 36 - 8 = 28$$

Perhatikan bahwa akar sesungguhnya ($3\pm\sqrt5$) tidak pernah dihitung.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"05-g3", "competency":"K5",
  "title":"Menghitung ekspresi simetris tanpa mencari akar",
  "prompt":"Akar-akar $2x^2 - 5x + 1 = 0$ adalah $\\alpha$ dan $\\beta$. Hitung $\\frac{1}{\\alpha}+\\frac{1}{\\beta}$.",
  "steps":[
    {"ask":"Langkah 1. Dari Vieta, $\\alpha+\\beta = \\;?$","type":"mc","options":["$\\frac{5}{2}$","$-\\frac{5}{2}$","$5$"],"answer":"$\\frac{5}{2}$","feedback":"Benar, yaitu $-\\frac{b}{a}=-\\frac{-5}{2}$."},
    {"ask":"Langkah 2. Dan $\\alpha\\beta = \\;?$","type":"mc","options":["$\\frac{1}{2}$","$1$","$2$"],"answer":"$\\frac{1}{2}$","feedback":"Tepat, yaitu $\\frac{c}{a}=\\frac{1}{2}$."},
    {"ask":"Langkah 3. Karena $\\frac{1}{\\alpha}+\\frac{1}{\\beta} = \\frac{\\alpha+\\beta}{\\alpha\\beta}$, hasilnya adalah ….","type":"mc","options":["$5$","$\\frac{5}{4}$","$\\frac{1}{5}$"],"answer":"$5$","feedback":"Benar: $\\frac{5/2}{1/2}=5$."}
  ],
  "conclusion":"Seluruh ekspresi simetris dapat dinyatakan melalui jumlah dan hasil kali akar. Akar sesungguhnya tidak perlu dicari.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Matching -->

```json
{ "type":"activity", "widget":"matching", "id":"05-m3", "competency":"K5",
  "prompt":"Pasangkan setiap ekspresi simetris dengan bentuk setaranya dalam jumlah dan hasil kali akar.",
  "pairs":[
    ["$x_1^2+x_2^2$","$(x_1+x_2)^2 - 2x_1x_2$"],
    ["$\\frac{1}{x_1}+\\frac{1}{x_2}$","$\\frac{x_1+x_2}{x_1x_2}$"],
    ["$(x_1-x_2)^2$","$(x_1+x_2)^2 - 4x_1x_2$"],
    ["$x_1^3+x_2^3$","$(x_1+x_2)^3 - 3x_1x_2(x_1+x_2)$"]
  ],
  "reward":{"xp":15} }
```

---

## 4️⃣ Menyusun Persamaan

Ini kebalikan Vieta: akar diketahui, persamaannya dicari.

**Cara 1 (faktor).** Untuk akar $r_1,\dots,r_n$: $f(x) = a(x-r_1)\cdots(x-r_n)$, dengan $a=1$ untuk bentuk monik.

**Cara 2 (Vieta).** Untuk kuadrat berakar $x_1,x_2$:
$$x^2 - (\htmlClass{hl-1}{x_1+x_2})x + \htmlClass{hl-2}{x_1x_2} = 0$$

### 🎯 Penerapan — Soal TKA Saham

> $f(x)=x^3-70x^2-600x+74{.}000$, modal $2.000$ juta. Unit mana yang mungkin terjual: 30, 40, atau 60?

Penjualan sesuai modal apabila $f(x)=2000$, yaitu
$$x^3 - 70x^2 - 600x + 72{.}000 = 0$$

Dari Vieta, jumlah akarnya $=70$ dan hasil kali ketiganya $=-72{.}000$.

Tinjau pasangan $40$ dan $60$: jumlahnya $100$, sehingga akar ketiga $=70-100=-30$. Verifikasi melalui hasil kali:
$$40 \times 60 \times (-30) = -72{.}000 \;✓$$

Jadi akar-akarnya $40$, $60$, dan $-30$. Karena banyak unit tidak boleh negatif, $-30$ ditolak.

**Kesimpulan:** 40 dan 60 unit **mungkin**; 30 unit **tidak mungkin**.

> 💡 Keunggulan Vieta di sini: kita memperoleh **seluruh** himpunan akar sekaligus, bukan sekadar memeriksa satu per satu angka yang ditanyakan.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"05-g4", "competency":"K5",
  "title":"Menyusun persamaan dari akar yang diketahui",
  "prompt":"Susun persamaan kuadrat monik yang akar-akarnya $3$ dan $-5$.",
  "steps":[
    {"ask":"Langkah 1. Jumlah akarnya adalah ….","type":"mc","options":["$-2$","$2$","$8$"],"answer":"$-2$","feedback":"Benar: $3+(-5)=-2$."},
    {"ask":"Langkah 2. Hasil kali akarnya adalah ….","type":"mc","options":["$-15$","$15$","$-2$"],"answer":"$-15$","feedback":"Tepat: $3 \\times (-5) = -15$."},
    {"ask":"Langkah 3. Dengan pola $x^2 - (\\text{jumlah})x + (\\text{hasil kali}) = 0$, persamaannya adalah ….","type":"mc","options":["$x^2+2x-15=0$","$x^2-2x-15=0$","$x^2+2x+15=0$"],"answer":"$x^2+2x-15=0$","feedback":"Benar. Perhatikan tanda: $-(-2)x$ menjadi $+2x$."}
  ],
  "conclusion":"Perhatikan tanda negatif pada pola tersebut. Jumlah akar masuk dengan tanda berlawanan, sedangkan hasil kali masuk apa adanya.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Categorize -->

```json
{ "type":"activity", "widget":"categorize", "id":"05-m4", "competency":"K5",
  "prompt":"Untuk persamaan $x^3-70x^2-600x+72{.}000=0$ yang berakar $40$, $60$, dan $-30$, kelompokkan setiap nilai berdasarkan kelayakannya sebagai banyak unit saham.",
  "categories":["Layak sebagai banyak unit","Tidak layak"],
  "items":[
    ["$40$","Layak sebagai banyak unit"],
    ["$60$","Layak sebagai banyak unit"],
    ["$-30$","Tidak layak"],
    ["$30$","Tidak layak"]
  ],
  "reward":{"xp":20} }
```

---

## 5️⃣ Transformasi Akar

Kasus yang sering muncul: *"Persamaan berakar $p,q,r$. Susun persamaan yang berakar $p+2$, $q+2$, $r+2$"* — tanpa mencari $p,q,r$.

**Kuncinya substitusi terbalik.** Bila akar baru $y=p+2$, maka $p=y-2$. Karena $p$ merupakan akar persamaan lama, substitusikan $x \to x-2$.

<!-- VISUAL: Pergeseran akar
     DEVELOPER: tampilkan garis bilangan berisi akar lama, lalu animasikan seluruh akar bergeser
     sejauh k. Di samping animasi, tampilkan substitusi yang bersesuaian (x menjadi x-k)
     agar hubungan arah geser dan arah substitusi terlihat berlawanan. -->

| Akar baru | Substitusi |
|-----------|------------|
| tiap akar $+k$ | $x \to x-k$ |
| tiap akar $-k$ | $x \to x+k$ |
| tiap akar $\times k$ | $x \to \dfrac{x}{k}$ |
| tiap akar $\times(-1)$ | $x \to -x$ |
| kebalikan akar | balik urutan koefisien |

> ⚡ **Pola pintas:** membalik akar setara dengan **membalik urutan koefisien**. Dari $x^2-5x+6$ diperoleh $6x^2-5x+1$.

### 📘 Contoh

Persamaan $x^2-5x+6=0$ berakar $2$ dan $3$. Susun persamaan yang akarnya $2$ lebih besar, yaitu $4$ dan $5$.

Substitusikan $x \to x-2$:
$$(x-2)^2 - 5(x-2) + 6 = x^2 - 9x + 20 = 0$$

Periksa dengan Vieta: akar $4$ dan $5$ berjumlah $9$ dan berkali $20$ — sesuai.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"05-g5", "competency":"K5",
  "title":"Menentukan arah substitusi pada transformasi akar",
  "prompt":"Persamaan $x^2 - 4x + 2 = 0$ berakar $\\alpha$ dan $\\beta$. Susun persamaan yang akarnya masing-masing 1 lebih besar.",
  "steps":[
    {"ask":"Langkah 1. Bila akar baru $y=\\alpha+1$, maka $\\alpha = \\;?$","type":"mc","options":["$y-1$","$y+1$","$\\frac{y}{1}$"],"answer":"$y-1$","feedback":"Benar. Inilah sebabnya arah substitusi berlawanan dengan arah pergeseran."},
    {"ask":"Langkah 2. Substitusi yang dilakukan pada persamaan lama adalah ….","type":"mc","options":["$x \\to x-1$","$x \\to x+1$","$x \\to \\frac{x}{1}$"],"answer":"$x \\to x-1$","feedback":"Tepat. Akar bertambah 1 berarti x diganti x-1."},
    {"ask":"Langkah 3. Hitung $(x-1)^2 - 4(x-1) + 2$. Hasilnya ….","type":"mc","options":["$x^2-6x+7$","$x^2-2x+7$","$x^2-6x-1$"],"answer":"$x^2-6x+7$","feedback":"Benar: $x^2-2x+1-4x+4+2$."}
  ],
  "conclusion":"Ingat aturannya: akar bertambah k berarti substitusi x menjadi x-k. Arahnya selalu berlawanan.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity ErrorHunt -->

```json
{ "type":"activity", "widget":"error-hunt", "id":"05-m5", "competency":"K5",
  "prompt":"Persamaan $x^2-5x+6=0$ berakar 2 dan 3. Seorang siswa menyusun persamaan yang akarnya 2 lebih besar (yaitu 4 dan 5) melalui langkah berikut. Terdapat satu langkah yang keliru.",
  "steps":[
    "Langkah 1. Karena akar bertambah 2, substitusinya adalah $x \\to x-2$.",
    "Langkah 2. Substitusikan: $(x-2)^2 - 5(x-2) + 6$.",
    "Langkah 3. Jabarkan dan sederhanakan menjadi $x^2 - 9x + 20 = 0$.",
    "Langkah 4. Karena akar bertambah 2, substitusi yang benar seharusnya $x \\to x+2$."
  ],
  "wrong_index":3,
  "why":"Untuk akar yang bertambah k, substitusinya adalah x menjadi x-k, bukan x+k. Langkah 4 bertentangan dengan langkah 1 yang sudah benar.",
  "reward":{"xp":15} }
```

---

## 📝 Latihan Bertingkat

<!-- COMPONENT: Quiz Cards
     DEVELOPER: render 5 paket sebagai KARTU (A-E); klik -> POP-UP. Paket D dan E OPSIONAL. -->

### 🟢 Paket A — Dasar (5 soal)

```json
{
  "set_id":"05-set-A-mudah","level":"mudah","optional": false,
  "items":[
    {"id":"A1","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan jumlah akar-akar persamaan $x^2 - 8x + 15 = 0$.","answer":"8","explanation":"Jumlah akar sama dengan -b/a=8."},
    {"id":"A2","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan hasil kali akar-akar persamaan $x^2 - 8x + 15 = 0$.","answer":"15","explanation":"Hasil kali akar sama dengan c/a=15."},
    {"id":"A3","type":"mc","question":"Susun persamaan kuadrat monik yang akar-akarnya $2$ dan $6$.","options":["$x^2-8x+12=0$","$x^2+8x+12=0$","$x^2-8x-12=0$","$x^2-12x+8=0$"],"answer":"$x^2-8x+12=0$","explanation":"Jumlah 8 dan hasil kali 12."},
    {"id":"A4","type":"mc","question":"Selesaikan persamaan $x^2 - 9 = 0$.","options":["$x=3$ atau $x=-3$","$x=9$ atau $x=-9$","$x=3$ saja","$x=0$ atau $x=3$"],"answer":"$x=3$ atau $x=-3$","explanation":"Faktorkan menjadi (x-3)(x+3)=0."},
    {"id":"A5","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan jumlah akar-akar persamaan $2x^2 - 4x + 1 = 0$.","answer":"2","explanation":"-b/a = 4/2 = 2."}
  ]
}
```
<details><summary><strong>Pembahasan Paket A</strong></summary>

1. $8$. 2. $15$. 3. $x^2-8x+12=0$. 4. $x=\pm3$. 5. $2$.
</details>

### 🟡 Paket B — Menengah (5 soal)

```json
{
  "set_id":"05-set-B-sedang","level":"sedang","optional": false,
  "items":[
    {"id":"B1","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Akar-akar $x^2-6x+4=0$ adalah $p$ dan $q$. Hitung $p^2+q^2$.","answer":"28","explanation":"(6)^2-2(4)=28."},
    {"id":"B2","type":"mc","question":"Susun persamaan kuadrat monik yang akar-akarnya $-1$ dan $7$.","options":["$x^2-6x-7=0$","$x^2+6x-7=0$","$x^2-6x+7=0$","$x^2-8x-7=0$"],"answer":"$x^2-6x-7=0$","explanation":"Jumlah 6 dan hasil kali -7."},
    {"id":"B3","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Akar-akar $2x^2-5x+1=0$ adalah $\\alpha$ dan $\\beta$. Hitung $\\frac{1}{\\alpha}+\\frac{1}{\\beta}$.","answer":"5","explanation":"(5/2) dibagi (1/2) sama dengan 5."},
    {"id":"B4","type":"mc","question":"Susun persamaan kubik monik yang akar-akarnya $-1$, $2$, dan $3$.","options":["$x^3-4x^2+x+6=0$","$x^3+4x^2+x-6=0$","$x^3-4x^2-x+6=0$","$x^3-6x^2+x+4=0$"],"answer":"$x^3-4x^2+x+6=0$","explanation":"Jabarkan (x+1)(x-2)(x-3)."},
    {"id":"B5","type":"mc","question":"Susun persamaan yang akar-akarnya merupakan kebalikan dari akar-akar $x^2-7x+3=0$.","options":["$3x^2-7x+1=0$","$x^2-3x+7=0$","$3x^2+7x+1=0$","$x^2-7x+3=0$"],"answer":"$3x^2-7x+1=0$","explanation":"Balik urutan koefisien 1, -7, 3 menjadi 3, -7, 1."}
  ]
}
```
<details><summary><strong>Pembahasan Paket B</strong></summary>

1. $28$. 2. $x^2-6x-7=0$. 3. $5$. 4. $x^3-4x^2+x+6=0$. 5. $3x^2-7x+1=0$.
</details>

### 🔴 Paket C — Lanjut (5 soal)

```json
{
  "set_id":"05-set-C-sulit","level":"sulit","optional": false,
  "items":[
    {"id":"C1","type":"mc","question":"Akar-akar $x^3-6x^2+11x-6=0$ adalah $p$, $q$, dan $r$. Hitung $\\frac{1}{p}+\\frac{1}{q}+\\frac{1}{r}$.","options":["$\\frac{11}{6}$","$\\frac{6}{11}$","$\\frac{1}{6}$","$6$"],"answer":"$\\frac{11}{6}$","explanation":"Bentuknya sama dengan (pq+qr+rp)/(pqr) = 11/6."},
    {"id":"C2","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Akar-akar $x^2-3x+1=0$ adalah $\\alpha$ dan $\\beta$. Hitung $\\alpha^3+\\beta^3$.","answer":"18","explanation":"27 - 3(1)(3) = 18."},
    {"id":"C3","type":"mc","question":"Akar-akar $x^2-4x+1=0$ adalah $\\alpha$ dan $\\beta$. Susun persamaan yang akar-akarnya $\\alpha^2$ dan $\\beta^2$.","options":["$x^2-14x+1=0$","$x^2-16x+1=0$","$x^2-14x+2=0$","$x^2+14x+1=0$"],"answer":"$x^2-14x+1=0$","explanation":"Jumlah baru 16-2=14; hasil kali baru 1."},
    {"id":"C4","type":"mc","question":"Susun persamaan yang akar-akarnya dua kali akar-akar $x^2-3x+2=0$.","options":["$x^2-6x+8=0$","$x^2-6x+4=0$","$x^2-3x+8=0$","$x^2-12x+8=0$"],"answer":"$x^2-6x+8=0$","explanation":"Substitusi x menjadi x/2 lalu kalikan 4; akar barunya 2 dan 4."},
    {"id":"C5","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Persamaan $x^3-70x^2-600x+72{.}000=0$ memiliki dua akar yaitu $40$ dan $60$. Tentukan akar ketiganya.","answer":"-30","explanation":"Jumlah akar 70, sehingga akar ketiga 70-100=-30."}
  ]
}
```
<details><summary><strong>Pembahasan Paket C</strong></summary>

1. $\frac{11}{6}$. 2. $18$. 3. $x^2-14x+1=0$. 4. $x^2-6x+8=0$. 5. $-30$.
</details>

### 🧠 Paket D — HOTS (5 soal, opsional)

> Paket ini **opsional**. Mengerjakannya memberi XP bonus.

```json
{
  "set_id":"05-set-D-hots","level":"hots","optional": true, "bonus_xp": 20,
  "items":[
    {"id":"D1","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Akar-akar $x^3-4x^2+5x-2=0$ adalah $p$, $q$, dan $r$. Hitung $p^2+q^2+r^2$.","answer":"6","explanation":"(4)^2 - 2(5) = 6."},
    {"id":"D2","type":"mc","question":"Diketahui $\\alpha$ dan $\\beta$ merupakan akar $x^2-6x+c=0$ dengan $\\alpha-\\beta=4$. Tentukan nilai $c$.","options":["$c=5$","$c=4$","$c=9$","$c=2$"],"answer":"$c=5$","explanation":"(alpha-beta)^2 = 36-4c = 16 sehingga c=5."},
    {"id":"D3","type":"mc","question":"Persamaan $x^3+px^2+qx+r=0$ memiliki akar-akar yang membentuk barisan aritmetika dengan jumlah $6$. Tentukan akar tengahnya.","options":["$2$","$3$","$6$","$1$"],"answer":"$2$","explanation":"Tiga akar aritmetika berjumlah 3 kali akar tengah."},
    {"id":"D4","type":"mc","question":"Susun persamaan kubik yang akar-akarnya $\\alpha+1$, $\\beta+1$, dan $\\gamma+1$, jika $\\alpha$, $\\beta$, $\\gamma$ merupakan akar $x^3-3x+1=0$.","options":["$x^3-3x^2+3=0$","$x^3+3x^2-3=0$","$x^3-3x^2-3=0$","$x^3-3x^2+1=0$"],"answer":"$x^3-3x^2+3=0$","explanation":"Substitusi x menjadi x-1."},
    {"id":"D5","type":"mc","question":"Akar-akar $x^4-5x^2+4=0$ adalah keempat bilangan. Tentukan jumlah dan hasil kali keempat akarnya.","options":["Jumlah $0$, hasil kali $4$","Jumlah $5$, hasil kali $4$","Jumlah $0$, hasil kali $-4$","Jumlah $4$, hasil kali $0$"],"answer":"Jumlah $0$, hasil kali $4$","explanation":"Koefisien x^3 bernilai 0 sehingga jumlahnya 0; hasil kali e/a=4."}
  ]
}
```
<details><summary><strong>Pembahasan Paket D</strong></summary>

1. $6$. 2. $c=5$. 3. Akar tengah $2$. 4. $x^3-3x^2+3=0$. 5. Jumlah $0$, hasil kali $4$.
</details>

### 🏆 Paket E — Model TKA (5 soal, opsional)

> Paket ini **opsional** dan bergaya soal TKA. Mengerjakannya memberi XP bonus.

```json
{
  "set_id":"05-set-E-tka","level":"tka","optional": true, "bonus_xp": 20,
  "items":[
    {"id":"E1","type":"multi","source":"TKA-2024-no8","question":"Banyak saham dimodelkan $f(x)=x^3-70x^2-600x+74{.}000$ (jutaan rupiah) dengan $x$ menyatakan banyak unit. Jika modalnya $2.000$ juta, penjualan manakah yang MUNGKIN terjadi? Pilih SEMUA jawaban yang benar.","options":["$40$ unit","$60$ unit","$30$ unit"],"answer":["$40$ unit","$60$ unit"],"explanation":"Akar dari f(x)=2000 adalah 40, 60, dan -30; akar negatif ditolak karena unit tidak boleh negatif."},
    {"id":"E2","type":"mc","question":"Sebuah balok memiliki volume $V=x^3-6x^2+11x-6$ cm kubik. Untuk nilai $x$ berapakah volumenya bernilai nol?","options":["$x=1$, $x=2$, atau $x=3$","$x=0$, $x=1$, atau $x=6$","$x=-1$, $x=-2$, atau $x=-3$","$x=2$ atau $x=3$"],"answer":"$x=1$, $x=2$, atau $x=3$","explanation":"V=(x-1)(x-2)(x-3)."},
    {"id":"E3","type":"mc","question":"Akar-akar $x^2-2x-1=0$ adalah $\\alpha$ dan $\\beta$. Tentukan $\\alpha^2+\\beta^2$ dan $\\frac{1}{\\alpha}+\\frac{1}{\\beta}$.","options":["$6$ dan $-2$","$6$ dan $2$","$4$ dan $-2$","$2$ dan $-2$"],"answer":"$6$ dan $-2$","explanation":"Jumlah 2, hasil kali -1; maka 4+2=6 dan 2/(-1)=-2."},
    {"id":"E4","type":"mc","question":"Susun persamaan kuadrat yang akar-akarnya $3$ lebih besar daripada akar-akar $x^2-2x-8=0$.","options":["$x^2-8x+7=0$","$x^2+8x+7=0$","$x^2-8x-7=0$","$x^2-2x+7=0$"],"answer":"$x^2-8x+7=0$","explanation":"Substitusi x menjadi x-3; akar lama -2 dan 4 menjadi 1 dan 7."},
    {"id":"E5","type":"mc","question":"Persamaan $x^3-70x^2-600x+72{.}000=0$ berakar $40$, $60$, dan $-30$. Manakah verifikasi Vieta yang benar?","options":["Jumlah $70$, jumlah hasil kali pasangan $-600$, hasil kali $-72{.}000$","Jumlah $-70$, jumlah hasil kali pasangan $600$, hasil kali $72{.}000$","Jumlah $70$, jumlah hasil kali pasangan $600$, hasil kali $-72{.}000$","Jumlah $100$, jumlah hasil kali pasangan $-600$, hasil kali $72{.}000$"],"answer":"Jumlah $70$, jumlah hasil kali pasangan $-600$, hasil kali $-72{.}000$","explanation":"Seluruhnya sesuai dengan koefisien persamaan."}
  ]
}
```
<details><summary><strong>Pembahasan Paket E</strong></summary>

**E1.** 40 dan 60 unit. **E2.** $x=1,2,3$. **E3.** $6$ dan $-2$. **E4.** $x^2-8x+7=0$. **E5.** Jumlah $70$, $\sum$pasangan $-600$, hasil kali $-72.000$.
</details>

---

## ⚠️ Kesalahan Umum & ⚡ Tips Cepat

| Kesalahan | Perbaikan |
|-----------|-----------|
| Lupa membagi dengan $a$ pada persamaan tak monik | Jumlah akar $=-\frac{b}{a}$, bukan $-b$ |
| Salah tanda pada $-\frac{b}{a}$ | Perhatikan tanda ganda, mis. $-\frac{-3}{2}=\frac{3}{2}$ |
| Mencari akar padahal ditanya ekspresi simetris | Gunakan identitas jumlah dan hasil kali |
| Salah arah substitusi transformasi | Akar $+k$ berarti $x \to x-k$ |
| Menerima akar yang tak bermakna dalam konteks | Tolak unit atau panjang yang bernilai negatif |

**Tips cepat:** jumlah akar $=-\frac{b}{a}$ → ekspresi simetris diubah ke jumlah dan hasil kali → menyusun dari akar memakai $x^2-(\text{jumlah})x+(\text{hasil kali})$ → kebalikan akar berarti membalik urutan koefisien.

---

## ✅ Ringkasan

- **Persamaan polinomial** $f(x)=0$; derajat $n$ memiliki paling banyak $n$ akar; akar kompleks berpasangan.
- **Vieta kuadrat:** $x_1+x_2=-\frac{b}{a}$ dan $x_1x_2=\frac{c}{a}$.
- **Vieta kubik:** $\sum=-\frac{b}{a}$, $\sum$pasangan$=\frac{c}{a}$, hasil kali$=-\frac{d}{a}$.
- **Ekspresi simetris** dinyatakan melalui jumlah dan hasil kali akar.
- **Menyusun persamaan:** $f(x)=a\prod(x-r_i)$; **transformasi akar** memakai substitusi terbalik.

---

## 🏆 Tantangan Akhir Bab

<!-- COMPONENT: Tantangan Akhir Bab
     DEVELOPER: render sebagai KARTU; klik -> POP-UP layar penuh (modal) berisi sesi berwaktu.
     Seluruh butir mandiri - JANGAN menarik atau memecah aktivitas dari bagian materi. -->
> Sesi berwaktu berisi 10 soal (5 menit). Seluruh soal berbentuk pilihan sehingga dapat dikerjakan tanpa mengetik.

```json
{ "type":"challenge", "id":"05-tantangan", "competency":"K5",
  "title":"Tantangan Akhir Bab 5: Persamaan Polinomial dan Teorema Vieta",
  "mode":"timed", "time_limit_sec":300, "display":"modal", "shuffle":true,
  "scoring":{"per_correct":10,"time_bonus":true},
  "stars":{"3":90,"2":70,"1":50},
  "reward":{"xp":80,"badge":"penakluk-vieta"},
  "record":{"track_best_time":true,"track_best_score":true},
  "items":[
    {"id":"T1","type":"mc","question":"Tentukan jumlah akar-akar persamaan $x^2 - 10x + 9 = 0$.","options":["$10$","$9$","$-10$","$1$"],"answer":"$10$","explanation":"Jumlah akar sama dengan -b/a=10."},
    {"id":"T2","type":"mc","question":"Tentukan hasil kali akar-akar persamaan $2x^2 - 6x + 4 = 0$.","options":["$2$","$4$","$3$","$-2$"],"answer":"$2$","explanation":"c/a = 4/2 = 2."},
    {"id":"T3","type":"mc","question":"Susun persamaan kuadrat monik yang akar-akarnya $2$ dan $3$.","options":["$x^2-5x+6=0$","$x^2+5x+6=0$","$x^2-6x+5=0$","$x^2-5x-6=0$"],"answer":"$x^2-5x+6=0$","explanation":"Jumlah 5 dan hasil kali 6."},
    {"id":"T4","type":"mc","question":"Akar-akar $x^2-6x+7=0$ adalah $\\alpha$ dan $\\beta$. Hitung $\\alpha^2+\\beta^2$.","options":["$22$","$36$","$14$","$29$"],"answer":"$22$","explanation":"(6)^2-2(7)=22."},
    {"id":"T5","type":"mc","question":"Benar atau salah: untuk menghitung $x_1^2+x_2^2$ kita harus mencari akar-akarnya terlebih dahulu.","options":["Salah","Benar"],"answer":"Salah","explanation":"Cukup gunakan identitas (jumlah)^2 - 2(hasil kali)."},
    {"id":"T6","type":"mc","question":"Tentukan hasil kali ketiga akar persamaan $x^3-2x^2-5x+6=0$.","options":["$-6$","$6$","$2$","$-5$"],"answer":"$-6$","explanation":"Hasil kali akar kubik sama dengan -d/a = -6."},
    {"id":"T7","type":"mc","question":"Susun persamaan yang akar-akarnya merupakan kebalikan dari akar-akar $x^2-5x+2=0$.","options":["$2x^2-5x+1=0$","$x^2-2x+5=0$","$2x^2+5x+1=0$","$x^2-5x+2=0$"],"answer":"$2x^2-5x+1=0$","explanation":"Balik urutan koefisien."},
    {"id":"T8","type":"mc","question":"Persamaan $x^2-4x+2=0$ berakar $\\alpha$ dan $\\beta$. Susun persamaan yang akarnya masing-masing 1 lebih besar.","options":["$x^2-6x+7=0$","$x^2-2x+7=0$","$x^2-6x-1=0$","$x^2+6x+7=0$"],"answer":"$x^2-6x+7=0$","explanation":"Substitusi x menjadi x-1."},
    {"id":"T9","type":"mc","question":"Seorang siswa menyusun persamaan yang akarnya 2 lebih besar daripada akar $x^2-5x+6=0$. Langkah 1: substitusi $x \\to x-2$. Langkah 2: peroleh $(x-2)^2-5(x-2)+6$. Langkah 3: sederhanakan menjadi $x^2-9x+20=0$. Langkah 4: karena akar bertambah, substitusi seharusnya $x \\to x+2$. Manakah langkah yang SALAH?","options":["Langkah 4, karena substitusi yang benar adalah $x \\to x-2$","Langkah 1, karena arahnya keliru","Langkah 2, karena penjabarannya salah","Langkah 3, karena hasilnya keliru"],"answer":"Langkah 4, karena substitusi yang benar adalah $x \\to x-2$","explanation":"Akar bertambah k berarti x diganti x-k."},
    {"id":"T10","type":"multi","source":"TKA-2024-no8","question":"Diketahui $f(x)=x^3-70x^2-600x+74{.}000$ dan modal $2.000$ juta. Penjualan manakah yang MUNGKIN terjadi? Pilih SEMUA jawaban yang benar.","options":["$40$ unit","$60$ unit","$30$ unit"],"answer":["$40$ unit","$60$ unit"],"explanation":"Akar dari f(x)=2000 adalah 40, 60, dan -30; yang negatif ditolak."}
  ] }
```

---

## 📝 Refleksi

<!-- COMPONENT: Reflection -->
1. Kapan Vieta lebih cepat daripada mencari akar secara langsung?
2. Mengapa membalik akar setara dengan membalik urutan koefisien?
3. Pada soal saham, apa keuntungan mengetahui seluruh akar dibandingkan hanya memeriksa satu nilai?

---

## ➡️ Persiapan Menuju Bab Berikutnya

Kita telah menguasai Teorema Vieta serta mampu menyusun persamaan dari akar maupun dari transformasi akar. Kelima kompetensi inti (K1–K5) kini lengkap.

Pada **Bab 06 — Strategi HOTS & TKA**, tidak ada teori baru. Seluruh alat digabungkan untuk menyelesaikan soal tersulit: kombinasi banyak konsep, soal kontekstual, dan soal model TKA, lengkap dengan cara pintas serta pemetaan jebakan.

> Lanjutkan ke **Bab 06**.

<!-- COMPONENT: Summary -->
<!-- Progress bar: 6/8. -->
