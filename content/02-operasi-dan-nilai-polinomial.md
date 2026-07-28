---
id: "02-operasi-dan-nilai-polinomial"
slug: "operasi-dan-nilai-polinomial"
title: "Operasi dan Nilai Polinomial"
order: 2
duration_min: 80
level: "Kelas XI - Kurikulum Merdeka"
track: "TKA Matematika Lanjut"
prerequisites:
  - "01-konsep-dasar-polinomial"
competencies:
  - "K2: Melakukan operasi & menghitung nilai polinomial"
learning_objectives:
  - "Menjumlah & mengurangkan polinomial melalui suku sejenis"
  - "Mengalikan polinomial dengan sifat distributif"
  - "Menghitung nilai polinomial melalui substitusi"
  - "Menyelesaikan kesamaan polinomial & identitas"
tags: ["operasi", "penjumlahan", "perkalian", "nilai", "substitusi", "kesamaan", "identitas"]
layout: "sub-materi"
sub_materi:
  - { id: "1", title: "Penjumlahan & Pengurangan" }
  - { id: "2", title: "Perkalian Polinomial" }
  - { id: "3", title: "Nilai Polinomial & Substitusi" }
  - { id: "4", title: "Kesamaan Polinomial" }
  - { id: "5", title: "Identitas Polinomial" }
components:
  - "Info Cards"
  - "Sub Materi"
  - "Activity Guided"
  - "Activity ErrorHunt"
  - "Activity Matching"
  - "Activity Slider"
  - "Activity Categorize"
  - "Quiz Cards"
  - "Tantangan Akhir Bab"
  - "Reflection"
activities:
  - "02-g1"
  - "02-m1"
  - "02-g2"
  - "02-m2"
  - "02-g3"
  - "02-m3"
  - "02-g4"
  - "02-m4"
  - "02-g5"
  - "02-m5"
challenge: "02-tantangan"
xp_available: 235
katex: true
---

# Bab 02 — Operasi dan Nilai Polinomial

<!-- COMPONENT: Info Cards
     DEVELOPER: enam bagian di bawah ini dirender sebagai KARTU ringkas berwarna berbeda
     (grid responsif). Klik kartu -> POP-UP berisi isinya. Siswa boleh melewatinya.
     Ikon Lucide: target, puzzle, package, clock, map, flame. -->

<details data-card="tujuan" data-icon="target">
<summary>🎯 Tujuan Pembelajaran</summary>

Setelah mempelajari bab ini, peserta didik diharapkan mampu:

1. Menjumlahkan dan mengurangkan polinomial dengan tepat.
2. Mengalikan polinomial menggunakan sifat distributif.
3. Menghitung nilai polinomial $f(k)$ melalui substitusi.
4. Menyelesaikan kesamaan polinomial untuk menentukan koefisien yang belum diketahui.
5. Membedakan persamaan biasa dari identitas polinomial.

</details>

<details data-card="kompetensi" data-icon="puzzle">
<summary>🧩 Kompetensi</summary>

**K2 — Melakukan operasi dan menghitung nilai polinomial.**

</details>

<details data-card="prasyarat" data-icon="package">
<summary>📦 Prasyarat</summary>

- Bab 01: unsur, derajat, dan suku sejenis.
- Sifat distributif $a(b+c) = ab + ac$.

</details>

<details data-card="waktu" data-icon="clock">
<summary>⏱️ Estimasi Waktu</summary>

**±80 menit.** Dapat dibagi menjadi beberapa sesi; progres tersimpan otomatis.

</details>

<details data-card="peta" data-icon="map">
<summary>🗺️ Peta Konsep</summary>

<!-- COMPONENT: Concept Map Mini
     DEVELOPER: render sebagai kartu/diagram interaktif yang dapat diklik menuju sub-materi. -->

```
Penjumlahan & Pengurangan → Perkalian → Nilai & Substitusi
                                      → Kesamaan
                                      → Identitas
```

</details>

<details data-card="motivasi" data-icon="flame">
<summary>🔥 Motivasi</summary>

Operasi polinomial adalah keterampilan dasar yang harus lancar, karena seluruh bab berikutnya dibangun di atasnya. Konsep terpenting pada bab ini adalah **nilai polinomial**: dengan kemampuan menghitung $f(40)$, kita dapat menjawab persoalan nyata seperti "berapa nilai saham jika terjual 40 unit?" Dua soal TKA akan diselesaikan di sini.

</details>

---

<!-- COMPONENT: Sub Materi
     DEVELOPER: judul sub-materi WAJIB sticky di bawah judul bab saat digulir, berdesain khusus,
     dan berganti otomatis saat memasuki sub-materi berikutnya. -->

## 1️⃣ Penjumlahan & Pengurangan

Prinsipnya satu: **gabungkan suku-suku sejenis**, yaitu suku dengan variabel dan pangkat yang sama.

<!-- VISUAL: Penjumlahan bersusun
     DEVELOPER: tampilkan kedua polinomial tersusun ke bawah dengan KOLOM per pangkat sejajar.
     Beri warna kolom berbeda (x^3, x^2, x, konstanta) sesuai kelas hl-1..hl-3 dan hl-const,
     lalu animasikan penjumlahan tiap kolom satu per satu. -->

$$\htmlClass{hl-1}{2x^3} + \htmlClass{hl-2}{3x^2} - \htmlClass{hl-3}{x} + \htmlClass{hl-const}{5}$$
$$\htmlClass{hl-1}{x^3} - \htmlClass{hl-2}{3x^2} + \htmlClass{hl-3}{4x} - \htmlClass{hl-const}{2}$$

Jumlahkan per kolom: $3x^3 + 0x^2 + 3x + 3 = 3x^3 + 3x + 3$.

**Pengurangan** memiliki satu langkah tambahan yang wajib: **ubah tanda seluruh suku** polinomial pengurang, baru dijumlahkan.

$$(4x^2+2x-1) - (x^2 \htmlClass{hl-1}{-3x} \htmlClass{hl-2}{+6}) = 4x^2+2x-1-x^2 \htmlClass{hl-1}{+3x} \htmlClass{hl-2}{-6}$$

> ⚠️ Kesalahan paling sering: hanya membalik tanda suku **pertama** pengurang. Tanda negatif harus dibagikan ke **semua** suku.

### 📘 Contoh

Hitung $(4x^2 + 2x - 1) - (x^2 - 3x + 6)$.

Ubah tanda pengurang: $4x^2 + 2x - 1 - x^2 + 3x - 6$. Gabungkan suku sejenis:
$$(4-1)x^2 + (2+3)x + (-1-6) = 3x^2 + 5x - 7$$

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"02-g1", "competency":"K2",
  "title":"Mengurangkan polinomial tanpa salah tanda",
  "prompt":"Hitung $(2x^2 - 3x + 1) - (x^2 - x - 4)$.",
  "steps":[
    {"ask":"Langkah 1. Setelah tanda dibagikan, bentuk pengurang $(x^2 - x - 4)$ menjadi ….","type":"mc","options":["$-x^2 + x + 4$","$-x^2 - x - 4$","$-x^2 + x - 4$"],"answer":"$-x^2 + x + 4$","feedback":"Tepat. Ketiga suku berubah tanda, termasuk konstanta $-4$ menjadi $+4$."},
    {"ask":"Langkah 2. Gabungkan suku $x^2$: $2x^2 - x^2 = \\;?$","type":"mc","options":["$x^2$","$3x^2$","$2x^2$"],"answer":"$x^2$","feedback":"Benar, koefisiennya $2-1=1$."},
    {"ask":"Langkah 3. Gabungkan suku $x$ dan konstanta, lalu tuliskan hasil akhirnya.","type":"mc","options":["$x^2 - 2x + 5$","$x^2 - 4x - 3$","$x^2 - 2x - 3$"],"answer":"$x^2 - 2x + 5$","feedback":"Tepat: $-3x + x = -2x$ dan $1 + 4 = 5$."}
  ],
  "conclusion":"Urutan aman pada pengurangan: bagikan tanda negatif ke semua suku terlebih dahulu, baru gabungkan suku sejenis.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity ErrorHunt -->

```json
{ "type":"activity", "widget":"error-hunt", "id":"02-m1", "competency":"K2",
  "prompt":"Cermati pengerjaan $(4x^2+2x-1)-(x^2-3x+6)$ berikut. Terdapat satu langkah yang keliru.",
  "steps":[
    "Langkah 1. Ubah tanda pengurang: $4x^2 + 2x - 1 - x^2 + 3x - 6$.",
    "Langkah 2. Gabungkan suku $x^2$: $4x^2 - x^2 = 3x^2$.",
    "Langkah 3. Gabungkan suku $x$: $2x + 3x = 5x$.",
    "Langkah 4. Gabungkan konstanta: $-1 + 6 = 5$."
  ],
  "wrong_index":3,
  "why":"Konstanta pengurang $+6$ sudah berubah menjadi $-6$ pada langkah 1, sehingga seharusnya $-1 - 6 = -7$, bukan $+5$.",
  "reward":{"xp":15} }
```

---

## 2️⃣ Perkalian Polinomial

Gunakan sifat **distributif**: kalikan setiap suku polinomial pertama dengan setiap suku polinomial kedua, lalu gabungkan suku sejenis.

<!-- VISUAL: Panah distribusi
     DEVELOPER: WAJIB berupa animasi panah, bukan teks. Pada 3(x-2), tarik panah dari angka 3
     ke x, lalu panah kedua dari 3 ke -2, masing-masing memunculkan hasil 3x dan -6.
     Terapkan pola sama untuk (x+4)(x-2): empat panah berurutan (x·x, x·(-2), 4·x, 4·(-2)). -->

$$\htmlClass{hl-coef}{3}(\htmlClass{hl-1}{x} \htmlClass{hl-2}{- 2}) = \htmlClass{hl-1}{3x} \htmlClass{hl-2}{- 6}$$

Untuk dua binomial, setiap suku bertemu setiap suku:

$$(x+4)(x-2) = x^2 - 2x + 4x - 8 = x^2 + 2x - 8$$

> 💡 **Pemeriksaan cepat:** derajat hasil kali = **jumlah** derajat kedua faktor. Bila tidak cocok, pasti ada langkah yang terlewat.

**Identitas yang perlu dikuasai:**

$$(a\pm b)^2 = a^2 \pm 2ab + b^2 \qquad (a+b)(a-b) = a^2 - b^2$$
$$a^3 - b^3 = (a-b)(a^2+ab+b^2) \qquad a^3 + b^3 = (a+b)(a^2-ab+b^2)$$

### 📘 Contoh

Hitung $(x-3)(x^2+2x+5)$.

$$x(x^2+2x+5) - 3(x^2+2x+5) = (x^3+2x^2+5x) - (3x^2+6x+15) = x^3 - x^2 - x - 15$$

Periksa derajat: $1 + 2 = 3$, dan hasilnya memang berderajat 3.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"02-g2", "competency":"K2",
  "title":"Mengalikan binomial dengan trinomial",
  "prompt":"Hitung $(x-2)(x^2+2x+4)$.",
  "steps":[
    {"ask":"Langkah 1. Kalikan $x$ dengan seluruh trinomial. Hasilnya ….","type":"mc","options":["$x^3 + 2x^2 + 4x$","$x^3 + 2x + 4$","$x^2 + 2x + 4$"],"answer":"$x^3 + 2x^2 + 4x$","feedback":"Tepat. Setiap suku dikalikan x sehingga pangkatnya naik satu."},
    {"ask":"Langkah 2. Kalikan $-2$ dengan seluruh trinomial. Hasilnya ….","type":"mc","options":["$-2x^2 - 4x - 8$","$-2x^2 + 4x + 8$","$2x^2 + 4x + 8$"],"answer":"$-2x^2 - 4x - 8$","feedback":"Benar. Tanda negatif dikalikan ke ketiga suku."},
    {"ask":"Langkah 3. Gabungkan keduanya. Hasil akhirnya adalah ….","type":"mc","options":["$x^3 - 8$","$x^3 + 4x^2 - 8$","$x^3 - 4x - 8$"],"answer":"$x^3 - 8$","feedback":"Tepat. Suku $x^2$ dan suku $x$ saling menghilangkan — ini pola $a^3-b^3$."}
  ],
  "conclusion":"Hasilnya adalah pola istimewa selisih pangkat tiga: $a^3-b^3=(a-b)(a^2+ab+b^2)$.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Matching -->

```json
{ "type":"activity", "widget":"matching", "id":"02-m2", "competency":"K2",
  "prompt":"Pasangkan setiap bentuk dengan hasil penjabarannya.",
  "pairs":[
    ["$(a+b)^2$","$a^2+2ab+b^2$"],
    ["$(a-b)^2$","$a^2-2ab+b^2$"],
    ["$(a+b)(a-b)$","$a^2-b^2$"],
    ["$a^3-b^3$","$(a-b)(a^2+ab+b^2)$"]
  ],
  "reward":{"xp":15} }
```

---

## 3️⃣ Nilai Polinomial & Substitusi

> **Nilai polinomial** $f(x)$ untuk $x=k$, ditulis $f(k)$, diperoleh dengan mengganti setiap $x$ dengan $k$. Proses ini disebut **substitusi**.

Contoh: untuk $f(x) = 2x^3 - 5x^2 + 3x - 4$,
$$f(2) = 2(2)^3 - 5(2)^2 + 3(2) - 4 = 16 - 20 + 6 - 4 = -2$$

> 💡 **$f(0)$ selalu sama dengan konstanta**, karena semua suku bervariabel menjadi nol.

> ⚠️ Gunakan tanda kurung pada bilangan negatif: $(-2)^2 = 4$ tetapi $(-2)^3 = -8$.

### 🏭 Penerapan 1 — Soal TKA Drum

> Penambahan volume sebuah drum saat dipanaskan: $V(T)=0{,}05\,T^3+0{,}4\,T^2+20\,T$ liter. Jika terdapat **10 drum identik** pada suhu sama, total penambahan volumenya adalah ….

Sepuluh drum identik berarti total $=10 \times V(T)$, yaitu perkalian dengan konstanta:

$$10\big(0{,}05\,T^3 + 0{,}4\,T^2 + 20\,T\big) = 0{,}5\,T^3 + 4\,T^2 + 200\,T$$

**Jawaban: $0{,}5T^3 + 4T^2 + 200T$.** Perhatikan $10 \times 0{,}05 = 0{,}5$ — bukan $50$ atau $5$ seperti pada pilihan pengecoh.

### 📈 Penerapan 2 — Soal TKA Saham

> Banyak saham dimodelkan $f(x)=x^3-70x^2-600x+74{.}000$ (dalam jutaan rupiah), $x$ = banyak unit. Jika modal $=2$ miliar $=2.000$ juta, mungkinkah terjual 30, 40, atau 60 unit?

Penjualan $x$ unit sesuai modal apabila $f(x)=2000$:

| $x$ | $f(x)$ | Kesimpulan |
|:---:|:------:|------------|
| 30 | $27000-63000-18000+74000 = 20000$ | Tidak mungkin |
| 40 | $64000-112000-24000+74000 = 2000$ | Mungkin |
| 60 | $216000-252000-36000+74000 = 2000$ | Mungkin |

> 💡 Pada Bab 05, persoalan ini dapat diselesaikan sekaligus melalui Teorema Vieta: akar dari $f(x)=2000$ adalah $40$, $60$, dan $-30$ (yang terakhir ditolak karena unit tidak boleh negatif).

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"02-g3", "competency":"K2",
  "title":"Substitusi bilangan negatif dengan aman",
  "prompt":"Diketahui $f(x)=x^3 - 2x + 5$. Hitung $f(-2)$.",
  "steps":[
    {"ask":"Langkah 1. Hitung $(-2)^3$.","type":"mc","options":["$-8$","$8$","$-6$"],"answer":"$-8$","feedback":"Benar. Pangkat ganjil mempertahankan tanda negatif."},
    {"ask":"Langkah 2. Hitung $-2 \\times (-2)$ pada suku $-2x$.","type":"mc","options":["$+4$","$-4$","$0$"],"answer":"$+4$","feedback":"Tepat. Negatif dikali negatif menghasilkan positif."},
    {"ask":"Langkah 3. Jumlahkan seluruhnya: $-8 + 4 + 5 = \\;?$","type":"mc","options":["$1$","$-1$","$9$"],"answer":"$1$","feedback":"Benar, sehingga $f(-2)=1$."}
  ],
  "conclusion":"Selalu bungkus bilangan negatif dengan tanda kurung sebelum dipangkatkan agar tandanya tidak keliru.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Slider
     DEVELOPER: sediakan penggeser nilai x; tampilkan perhitungan f(x) secara langsung beserta
     titiknya pada grafik. Sorot checkpoint bila nilai x yang diminta tercapai. -->

```json
{ "type":"activity", "widget":"slider", "id":"02-m3", "competency":"K2",
  "prompt":"Geser nilai $x$ pada $f(x)=2x^3-5x^2+3x-4$, lalu amati perubahan nilainya. Perhatikan khususnya nilai saat $x=0$.",
  "poly":[2,-5,3,-4], "x_min":-3, "x_max":4, "step":0.5, "show_graph":true,
  "checkpoints":[
    {"x":0,"fx":-4,"note":"Saat x=0, nilai f(x) sama dengan konstanta, yaitu -4."},
    {"x":2,"fx":-2,"note":"Sesuai perhitungan pada contoh."}
  ],
  "reward":{"xp":15} }
```

---

## 4️⃣ Kesamaan Polinomial

> Dua polinomial dikatakan **sama** apabila koefisien suku-suku yang **sepadan** (berderajat sama) bernilai sama.

<!-- VISUAL: Penyamaan koefisien
     DEVELOPER: tampilkan kedua ruas bertumpuk dengan suku sepadan SEJAJAR dan BERWARNA SAMA
     (x^2 = hl-1, x = hl-2, konstanta = hl-3). Tarik garis penghubung antar pasangan sewarna,
     lalu munculkan persamaan yang terbentuk dari tiap pasangan. -->

$$\htmlClass{hl-1}{a}x^2 + \htmlClass{hl-2}{b}x + \htmlClass{hl-3}{c} \;=\; \htmlClass{hl-1}{3}x^2 \htmlClass{hl-2}{-5}x + \htmlClass{hl-3}{7}$$

Dari pasangan sewarna diperoleh $a=3$, $b=-5$, dan $c=7$.

### 📘 Contoh

Tentukan $p$ dan $q$ apabila $(x+p)(x+2) = x^2 + 5x + q$ untuk semua $x$.

Jabarkan ruas kiri: $x^2 + (2+p)x + 2p$. Samakan koefisien dengan ruas kanan:
- Koefisien $x$: $2+p = 5 \Rightarrow p = 3$
- Konstanta: $2p = q \Rightarrow q = 6$

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"02-g4", "competency":"K2",
  "title":"Menentukan koefisien melalui kesamaan",
  "prompt":"Tentukan nilai $a$ apabila $(2x+a)(x-1) = 2x^2 - 5x + 3$ berlaku untuk semua $x$.",
  "steps":[
    {"ask":"Langkah 1. Jabarkan ruas kiri. Hasilnya ….","type":"mc","options":["$2x^2 + (a-2)x - a$","$2x^2 + (a+2)x + a$","$2x^2 - ax - a$"],"answer":"$2x^2 + (a-2)x - a$","feedback":"Tepat: $2x\\cdot x=2x^2$, $2x\\cdot(-1)=-2x$, $a\\cdot x=ax$, dan $a\\cdot(-1)=-a$."},
    {"ask":"Langkah 2. Samakan konstantanya: $-a = 3$, sehingga $a = \\;?$","type":"mc","options":["$-3$","$3$","$-1$"],"answer":"$-3$","feedback":"Benar."},
    {"ask":"Langkah 3. Periksa melalui koefisien $x$: apakah $a-2 = -5$ terpenuhi?","type":"mc","options":["Ya, karena $-3-2=-5$","Tidak terpenuhi"],"answer":"Ya, karena $-3-2=-5$","feedback":"Tepat. Kedua pasangan koefisien konsisten, sehingga jawabannya benar."}
  ],
  "conclusion":"Setelah memperoleh nilai dari satu pasangan koefisien, periksa dengan pasangan lain untuk memastikan jawabannya konsisten.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Matching -->

```json
{ "type":"activity", "widget":"matching", "id":"02-m4", "competency":"K2",
  "prompt":"Diketahui $ax^3 + bx^2 + cx + d = 2x^3 - x^2 + 5$ berlaku untuk semua $x$. Pasangkan setiap huruf dengan nilainya.",
  "pairs":[
    ["$a$","$2$"],
    ["$b$","$-1$"],
    ["$c$","$0$"],
    ["$d$","$5$"]
  ],
  "reward":{"xp":15} }
```

---

## 5️⃣ Identitas Polinomial

Perbedaannya halus namun penting:

- **Persamaan biasa** benar hanya untuk **sebagian** nilai $x$. Contoh: $x^2=4$ hanya benar saat $x=\pm2$.
- **Identitas** benar untuk **semua** nilai $x$. Contoh: $(x+1)^2 = x^2+2x+1$.

Apabila soal menyatakan "berlaku untuk semua $x$" atau memakai tanda $\equiv$, selesaikan dengan **menyamakan koefisien**.

> ⚡ **Strategi cepat:** karena identitas benar untuk semua $x$, pilih nilai $x$ yang memudahkan perhitungan.

### 📘 Contoh

Tentukan $A$ dan $B$ pada $\dfrac{3x+1}{x(x+1)} = \dfrac{A}{x} + \dfrac{B}{x+1}$ untuk semua $x$.

Kalikan kedua ruas dengan $x(x+1)$: $\;3x+1 = A(x+1) + Bx$.

Pilih nilai yang memudahkan: $x=0$ memberi $1 = A$; lalu $x=-1$ memberi $-2 = -B$ sehingga $B=2$.

Teknik ini disebut **pecahan parsial** dan banyak dipakai pada kalkulus.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"02-g5", "competency":"K2",
  "title":"Memanfaatkan substitusi nilai pada identitas",
  "prompt":"Tentukan $A$ dan $B$ pada $\\frac{5}{(x-1)(x+4)} = \\frac{A}{x-1} + \\frac{B}{x+4}$ untuk semua $x$.",
  "steps":[
    {"ask":"Langkah 1. Setelah dikalikan $(x-1)(x+4)$, persamaannya menjadi ….","type":"mc","options":["$5 = A(x+4) + B(x-1)$","$5 = A(x-1) + B(x+4)$","$5 = (A+B)(x-1)(x+4)$"],"answer":"$5 = A(x+4) + B(x-1)$","feedback":"Tepat. Penyebut pada suku A tercoret, menyisakan faktor pasangannya."},
    {"ask":"Langkah 2. Pilih $x=1$ agar suku B lenyap. Diperoleh $5 = 5A$, sehingga $A = \\;?$","type":"mc","options":["$1$","$5$","$-1$"],"answer":"$1$","feedback":"Benar. Memilih akar penyebut membuat salah satu suku menjadi nol."},
    {"ask":"Langkah 3. Pilih $x=-4$. Diperoleh $5 = -5B$, sehingga $B = \\;?$","type":"mc","options":["$-1$","$1$","$-5$"],"answer":"$-1$","feedback":"Tepat, sehingga $A=1$ dan $B=-1$."}
  ],
  "conclusion":"Pada identitas, memilih x sama dengan akar penyebut adalah cara tercepat karena langsung melenyapkan salah satu suku.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Categorize -->

```json
{ "type":"activity", "widget":"categorize", "id":"02-m5", "competency":"K2",
  "prompt":"Tentukan apakah setiap pernyataan merupakan identitas (benar untuk semua x) atau persamaan biasa (benar untuk nilai x tertentu saja).",
  "categories":["Identitas","Persamaan biasa"],
  "items":[
    ["$(x+1)^2 = x^2+2x+1$","Identitas"],
    ["$x^2 = 9$","Persamaan biasa"],
    ["$(x-2)(x+2) = x^2-4$","Identitas"],
    ["$2x+1 = 7$","Persamaan biasa"],
    ["$x^3-1 = (x-1)(x^2+x+1)$","Identitas"]
  ],
  "reward":{"xp":20} }
```

---

## 📝 Latihan Bertingkat

<!-- COMPONENT: Quiz Cards
     DEVELOPER: render 5 paket sebagai KARTU (A-E) berjajar. Klik kartu -> POP-UP berisi soal.
     Paket D dan E OPSIONAL dengan XP bonus. -->

### 🟢 Paket A — Dasar (5 soal)

```json
{
  "set_id": "02-set-A-mudah", "level": "mudah", "optional": false,
  "items": [
    {"id":"A1","type":"mc","question":"Hitung $(x^2 + 2x) + (3x^2 - x)$.","options":["$4x^2 + x$","$4x^2 + 3x$","$3x^2 + x$","$4x^2 - x$"],"answer":"$4x^2 + x$","explanation":"Gabungkan suku sejenis: (1+3)x^2 dan (2-1)x."},
    {"id":"A2","type":"mc","question":"Hitung $(5x - 4) - (2x + 1)$.","options":["$3x - 5$","$3x - 3$","$7x - 3$","$3x + 5$"],"answer":"$3x - 5$","explanation":"Ubah tanda pengurang: 5x-4-2x-1."},
    {"id":"A3","type":"mc","question":"Hitung $3(x^2 - 2x + 4)$.","options":["$3x^2 - 6x + 12$","$3x^2 - 2x + 4$","$3x^2 - 6x + 4$","$x^2 - 6x + 12$"],"answer":"$3x^2 - 6x + 12$","explanation":"Distribusikan 3 ke setiap suku."},
    {"id":"A4","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Diketahui $f(x) = x^2 + 1$. Hitung $f(3)$.","answer":"10","explanation":"9+1=10."},
    {"id":"A5","type":"mc","question":"Hitung $(x + 2)(x + 5)$.","options":["$x^2 + 7x + 10$","$x^2 + 10x + 7$","$x^2 + 7x + 7$","$x^2 + 3x + 10$"],"answer":"$x^2 + 7x + 10$","explanation":"Distributif: x^2+5x+2x+10."}
  ]
}
```
<details><summary><strong>Pembahasan Paket A</strong></summary>

1. $4x^2+x$. 2. $3x-5$. 3. $3x^2-6x+12$. 4. $f(3)=10$. 5. $x^2+7x+10$.
</details>

### 🟡 Paket B — Menengah (5 soal)

```json
{
  "set_id":"02-set-B-sedang","level":"sedang","optional": false,
  "items":[
    {"id":"B1","type":"mc","question":"Hitung $(2x^2 - 3x + 1) - (x^2 - x - 4)$.","options":["$x^2 - 2x + 5$","$x^2 - 4x - 3$","$x^2 - 2x - 3$","$3x^2 - 4x + 5$"],"answer":"$x^2 - 2x + 5$","explanation":"Ubah tanda pengurang lalu gabungkan."},
    {"id":"B2","type":"mc","question":"Hitung $(x - 2)(x^2 + 2x + 4)$.","options":["$x^3 - 8$","$x^3 + 8$","$x^3 - 4x - 8$","$x^3 + 4x^2 - 8$"],"answer":"$x^3 - 8$","explanation":"Pola selisih pangkat tiga dengan a=x dan b=2."},
    {"id":"B3","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Diketahui $f(x) = x^3 - 2x^2 + 5$. Hitung $f(-1)$.","answer":"2","explanation":"-1-2+5=2."},
    {"id":"B4","type":"mc","question":"Jabarkan $(2x + 1)^2$.","options":["$4x^2 + 4x + 1$","$4x^2 + 2x + 1$","$2x^2 + 4x + 1$","$4x^2 + 1$"],"answer":"$4x^2 + 4x + 1$","explanation":"Gunakan pola (a+b)^2 dengan a=2x dan b=1."},
    {"id":"B5","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Diketahui $(x + a)(x + 3) = x^2 + 7x + 12$ berlaku untuk semua $x$. Tentukan nilai $a$.","answer":"4","explanation":"Koefisien x: a+3=7 sehingga a=4."}
  ]
}
```
<details><summary><strong>Pembahasan Paket B</strong></summary>

1. $x^2-2x+5$. 2. $x^3-8$. 3. $f(-1)=2$. 4. $4x^2+4x+1$. 5. $a=4$.
</details>

### 🔴 Paket C — Lanjut (5 soal)

```json
{
  "set_id":"02-set-C-sulit","level":"sulit","optional": false,
  "items":[
    {"id":"C1","type":"mc","question":"Sederhanakan $(x + 2)^3 - (x - 2)^3$.","options":["$12x^2 + 16$","$12x^2 - 16$","$2x^3 + 16$","$4x^2 + 16$"],"answer":"$12x^2 + 16$","explanation":"Gunakan (a+b)^3-(a-b)^3 = 2(3a^2 b + b^3) dengan a=x, b=2."},
    {"id":"C2","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Diketahui $f(x) = 2x^3 - x^2 + 4x - 3$. Hitung $f\\left(\\tfrac{1}{2}\\right)$.","answer":"-1","explanation":"1/4 - 1/4 + 2 - 3 = -1."},
    {"id":"C3","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Diketahui $(x^2 + px + 2)(x + 3) = x^3 + 4x^2 + 5x + 6$ berlaku untuk semua $x$. Tentukan nilai $p$.","answer":"1","explanation":"Koefisien x^2 ruas kiri adalah p+3; samakan dengan 4."},
    {"id":"C4","type":"mc","question":"Sederhanakan $\\frac{x^3 - 8}{x - 2}$ dengan $x \\neq 2$.","options":["$x^2 + 2x + 4$","$x^2 - 2x + 4$","$x^2 + 4$","$x^2 - 4$"],"answer":"$x^2 + 2x + 4$","explanation":"Pola a^3-b^3=(a-b)(a^2+ab+b^2)."},
    {"id":"C5","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan konstanta $k$ agar $x^3 + kx^2 + 2x + 8$ bernilai $0$ saat $x = -2$.","answer":"1","explanation":"-8+4k-4+8=0 sehingga 4k=4."}
  ]
}
```
<details><summary><strong>Pembahasan Paket C</strong></summary>

1. $12x^2+16$. 2. $f(\tfrac12)=-1$. 3. $p=1$. 4. $x^2+2x+4$. 5. $k=1$.
</details>

### 🧠 Paket D — HOTS (5 soal, opsional)

> Paket ini **opsional**. Mengerjakannya memberi XP bonus.

```json
{
  "set_id":"02-set-D-hots","level":"hots","optional": true, "bonus_xp": 20,
  "items":[
    {"id":"D1","type":"mc","question":"Diketahui $f(x)+g(x) = 3x^2 - x + 4$ dan $f(x)-g(x) = x^2 + 3x - 2$. Tentukan $f(x)$.","options":["$2x^2 + x + 1$","$x^2 - 2x + 3$","$2x^2 - x + 1$","$4x^2 + 2x + 2$"],"answer":"$2x^2 + x + 1$","explanation":"Jumlahkan kedua persamaan lalu bagi dua."},
    {"id":"D2","type":"mc","question":"Tentukan $A$, $B$, dan $C$ pada $\\frac{x^2+1}{x(x-1)(x+1)} = \\frac{A}{x} + \\frac{B}{x-1} + \\frac{C}{x+1}$.","options":["$A=-1,\\ B=1,\\ C=1$","$A=1,\\ B=1,\\ C=-1$","$A=-1,\\ B=-1,\\ C=1$","$A=1,\\ B=-1,\\ C=1$"],"answer":"$A=-1,\\ B=1,\\ C=1$","explanation":"Substitusi x=0, x=1, dan x=-1."},
    {"id":"D3","type":"mc","question":"Diketahui $(x^2+ax+1)(x+2) = x^3 + bx + c$ berlaku untuk semua $x$. Tentukan $a$, $b$, dan $c$.","options":["$a=-2,\\ b=-3,\\ c=2$","$a=2,\\ b=3,\\ c=2$","$a=-2,\\ b=3,\\ c=-2$","$a=0,\\ b=-3,\\ c=2$"],"answer":"$a=-2,\\ b=-3,\\ c=2$","explanation":"Koefisien x^2 harus nol: a+2=0."},
    {"id":"D4","type":"mc","question":"Polinomial $f$ memenuhi $f(x+1)-f(x) = 2x+3$ untuk semua $x$, dan $f(0)=1$. Tentukan $f(x)$.","options":["$x^2 + 2x + 1$","$x^2 + 3x + 1$","$2x^2 + x + 1$","$x^2 + x + 1$"],"answer":"$x^2 + 2x + 1$","explanation":"Periksa: selisihnya menghasilkan 2x+3 dan f(0)=1."},
    {"id":"D5","type":"mc","question":"Diketahui $f(x)=x^3-70x^2-600x+74{.}000$. Mengapa $f(40)=f(60)$?","options":["Karena $f(x)-2000$ memiliki akar $40$, $60$, dan $-30$","Karena keduanya kelipatan 20","Karena $f$ merupakan fungsi genap","Karena $40+60=100$"],"answer":"Karena $f(x)-2000$ memiliki akar $40$, $60$, dan $-30$","explanation":"Kedua nilai memberikan f(x)=2000 sehingga nilainya sama."}
  ]
}
```
<details><summary><strong>Pembahasan Paket D</strong></summary>

1. $f=2x^2+x+1$. 2. $A=-1,B=1,C=1$. 3. $a=-2,b=-3,c=2$. 4. $f(x)=x^2+2x+1$. 5. Keduanya memenuhi $f(x)=2000$.
</details>

### 🏆 Paket E — Model TKA (5 soal, opsional)

> Paket ini **opsional** dan bergaya soal TKA. Mengerjakannya memberi XP bonus.

```json
{
  "set_id":"02-set-E-tka","level":"tka","optional": true, "bonus_xp": 20,
  "items":[
    {"id":"E1","type":"mc","source":"TKA-drum","question":"Diketahui $V(T)=0{,}05T^3+0{,}4T^2+20T$. Jika terdapat 8 drum identik pada suhu sama, total penambahan volumenya adalah ….","options":["$0{,}4T^3 + 3{,}2T^2 + 160T$","$0{,}4T^3 + 0{,}4T^2 + 160T$","$4T^3 + 3{,}2T^2 + 160T$","$0{,}05T^3 + 3{,}2T^2 + 160T$"],"answer":"$0{,}4T^3 + 3{,}2T^2 + 160T$","explanation":"Kalikan setiap koefisien dengan 8."},
    {"id":"E2","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Diketahui $f(x)=x^3-70x^2-600x+74{.}000$ dalam jutaan rupiah. Hitung $f(20)$.","answer":"42000","explanation":"8000-28000-12000+74000=42000."},
    {"id":"E3","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Biaya produksi dinyatakan $C(x)=x^2+10x+25$ (ribu rupiah). Hitung biaya untuk $x=15$.","answer":"400","explanation":"C(x)=(x+5)^2 sehingga C(15)=20^2=400."},
    {"id":"E4","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Diketahui $x^3-6x^2+11x-6=(x-1)(x-2)(x-r)$ berlaku untuk semua $x$. Tentukan nilai $r$.","answer":"3","explanation":"Samakan konstanta: (-1)(-2)(-r)=-6."},
    {"id":"E5","type":"mc","question":"Diketahui $f(x)=2x^3+ax^2+bx+6$ memenuhi $f(1)=f(-1)$. Tentukan nilai $b$.","options":["$b=-2$","$b=0$","$b=2$","$b=-6$"],"answer":"$b=-2$","explanation":"f(1)-f(-1)=4+2b=0 sehingga b=-2; nilai a bebas."}
  ]
}
```
<details><summary><strong>Pembahasan Paket E</strong></summary>

**E1.** $8\times$ tiap koefisien $= 0{,}4T^3+3{,}2T^2+160T$. **E2.** $f(20)=42.000$. **E3.** $C(15)=400$. **E4.** $r=3$. **E5.** $b=-2$.
</details>

---

## ⚠️ Kesalahan Umum & ⚡ Tips Cepat

| Kesalahan | Perbaikan |
|-----------|-----------|
| Membalik tanda hanya suku pertama pengurang | Bagikan tanda negatif ke **semua** suku |
| Menggabungkan suku tak sejenis ($3x^2+2x=5x^3$) | Hanya suku berpangkat sama yang boleh digabung |
| Menulis $-2^2 = -4$ padahal maksudnya $(-2)^2$ | Selalu gunakan tanda kurung |
| Ada suku yang terlewat saat mengalikan | Periksa derajat hasil = jumlah derajat |
| Mencari satu nilai $x$ pada soal identitas | Identitas diselesaikan dengan menyamakan koefisien |

**Tips cepat:** susun bersusun dengan pangkat sejajar → pada pengurangan ubah tanda dahulu → gunakan $f(0)=$ konstanta sebagai pemeriksaan instan → pada identitas pilih nilai $x$ yang memudahkan.

---

## ✅ Ringkasan

- **Penjumlahan/pengurangan:** gabungkan suku sejenis; pengurangan diawali mengubah tanda seluruh pengurang.
- **Perkalian:** sifat distributif; derajat hasil $=$ jumlah derajat. Kuasai $(a\pm b)^2$, $a^2-b^2$, $a^3\pm b^3$.
- **Nilai $f(k)$:** substitusi; $f(0)=$ konstanta; gunakan kurung untuk bilangan negatif.
- **Kesamaan:** samakan koefisien suku sepadan.
- **Identitas:** benar untuk semua $x$; pilih nilai $x$ yang memudahkan.

---

## 🏆 Tantangan Akhir Bab

<!-- COMPONENT: Tantangan Akhir Bab
     DEVELOPER: render sebagai KARTU; klik -> POP-UP layar penuh (modal) berisi sesi berwaktu.
     Seluruh butir mandiri - JANGAN menarik atau memecah aktivitas dari bagian materi. -->
> Sesi berwaktu berisi 10 soal (5 menit). Seluruh soal berbentuk pilihan sehingga dapat dikerjakan tanpa mengetik.

```json
{ "type":"challenge", "id":"02-tantangan", "competency":"K2",
  "title":"Tantangan Akhir Bab 2: Operasi dan Nilai Polinomial",
  "mode":"timed", "time_limit_sec":300, "display":"modal", "shuffle":true,
  "scoring":{"per_correct":10,"time_bonus":true},
  "stars":{"3":90,"2":70,"1":50},
  "reward":{"xp":80,"badge":"operator-polinomial"},
  "record":{"track_best_time":true,"track_best_score":true},
  "items":[
    {"id":"T1","type":"mc","question":"Hitung $(3x^2 - x + 2) + (x^2 + 4x - 5)$.","options":["$4x^2 + 3x - 3$","$4x^2 + 3x + 3$","$4x^2 + 5x - 3$","$2x^2 + 3x - 3$"],"answer":"$4x^2 + 3x - 3$","explanation":"Gabungkan suku sejenis."},
    {"id":"T2","type":"mc","question":"Hitung $(4x^2 + 2x - 1) - (x^2 - 3x + 6)$.","options":["$3x^2 + 5x - 7$","$3x^2 - x + 5$","$3x^2 + 5x + 5$","$5x^2 - x - 7$"],"answer":"$3x^2 + 5x - 7$","explanation":"Ubah tanda seluruh pengurang lalu gabungkan."},
    {"id":"T3","type":"mc","question":"Hitung $2x(x^2 - 3x + 4)$.","options":["$2x^3 - 6x^2 + 8x$","$2x^3 - 3x^2 + 4x$","$2x^3 - 6x^2 + 4x$","$x^3 - 6x^2 + 8x$"],"answer":"$2x^3 - 6x^2 + 8x$","explanation":"Distribusikan 2x ke setiap suku."},
    {"id":"T4","type":"mc","question":"Diketahui $f(x) = x^2 - 4x + 1$. Hitung $f(3)$.","options":["$-2$","$2$","$-4$","$4$"],"answer":"$-2$","explanation":"9-12+1=-2."},
    {"id":"T5","type":"mc","question":"Benar atau salah: $f(0)$ selalu sama dengan konstanta polinomial.","options":["Benar","Salah"],"answer":"Benar","explanation":"Substitusi x=0 menghilangkan seluruh suku bervariabel."},
    {"id":"T6","type":"mc","question":"Berapakah derajat hasil kali polinomial berderajat 2 dengan polinomial berderajat 3?","options":["$5$","$6$","$3$","$2$"],"answer":"$5$","explanation":"Derajat hasil kali sama dengan jumlah derajat."},
    {"id":"T7","type":"mc","question":"Jabarkan $(x - 3)^2$.","options":["$x^2 - 6x + 9$","$x^2 + 6x + 9$","$x^2 - 9$","$x^2 - 3x + 9$"],"answer":"$x^2 - 6x + 9$","explanation":"Pola (a-b)^2 = a^2-2ab+b^2."},
    {"id":"T8","type":"mc","question":"Diketahui $V(T)=0{,}05T^3+0{,}4T^2+20T$. Total penambahan volume untuk 10 drum identik adalah ….","options":["$0{,}5T^3 + 4T^2 + 200T$","$50T^3 + 4T^2 + 200T$","$5T^3 + 4T^2 + 200T$","$0{,}5T^3 + 0{,}4T^2 + 200T$"],"answer":"$0{,}5T^3 + 4T^2 + 200T$","explanation":"Kalikan setiap koefisien dengan 10; perhatikan 10 x 0,05 = 0,5."},
    {"id":"T9","type":"mc","question":"Seorang siswa menghitung $(5x-4)-(2x+1)$ dengan langkah berikut. Langkah 1: ubah tanda menjadi $5x - 4 - 2x - 1$. Langkah 2: gabungkan suku $x$ menjadi $3x$. Langkah 3: gabungkan konstanta menjadi $-3$. Manakah langkah yang SALAH?","options":["Langkah 3, karena $-4-1=-5$","Langkah 1, karena tandanya keliru","Langkah 2, karena seharusnya $7x$","Tidak ada langkah yang salah"],"answer":"Langkah 3, karena $-4-1=-5$","explanation":"Hasil akhirnya adalah 3x-5."},
    {"id":"T10","type":"mc","question":"Diketahui $(x+p)(x+2) = x^2 + 5x + q$ berlaku untuk semua $x$. Tentukan pasangan $(p,q)$.","options":["$(3,\\,6)$","$(6,\\,3)$","$(3,\\,5)$","$(2,\\,6)$"],"answer":"$(3,\\,6)$","explanation":"Koefisien x: 2+p=5 sehingga p=3; konstanta: q=2p=6."}
  ] }
```

---

## 📝 Refleksi

<!-- COMPONENT: Reflection -->
1. Saat mengurangkan polinomial, langkah apa yang paling sering terlewat?
2. Jelaskan dengan bahasa Anda sendiri perbedaan antara persamaan dan identitas.
3. Setelah mengerjakan soal saham dan drum, dapatkah Anda mengenali kapan sebuah persoalan nyata pada dasarnya hanya proses substitusi?

---

## ➡️ Persiapan Menuju Bab Berikutnya

Pada bab ini kita telah mempelajari operasi dan penghitungan nilai polinomial, termasuk menyelesaikan dua soal TKA.

Pada **Bab 03 — Pembagian Polinomial**, kita akan menemukan hubungan penting antara nilai $f(k)$ yang baru dipelajari dan pembagian $f(x)$ oleh $(x-k)$, serta mempelajari **pembagian bersusun** dan **skema Horner**.

Bekal yang perlu dibawa: perkalian polinomial (untuk memeriksa hasil) dan substitusi $f(k)$.

> Lanjutkan ke **Bab 03**.

<!-- COMPONENT: Summary -->
<!-- Progress bar: 3/8. -->
