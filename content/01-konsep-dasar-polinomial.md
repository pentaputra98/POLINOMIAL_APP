---
id: "01-konsep-dasar-polinomial"
slug: "konsep-dasar-polinomial"
title: "Konsep Dasar Polinomial"
order: 1
duration_min: 75
level: "Kelas XI - Kurikulum Merdeka"
track: "TKA Matematika Lanjut"
prerequisites:
  - "00-intro"
  - "Notasi pangkat & aljabar dasar"
competencies:
  - "K1: Mengidentifikasi unsur & jenis polinomial"
learning_objectives:
  - "Mendefinisikan polinomial & mengenali bentuk umumnya"
  - "Menentukan variabel, koefisien, konstanta, suku, dan derajat"
  - "Mengklasifikasikan jenis polinomial"
  - "Membedakan polinomial dan bukan polinomial"
tags: ["konsep-dasar", "derajat", "koefisien", "suku", "jenis-polinomial"]
layout: "sub-materi"
sub_materi:
  - { id: "1", title: "Apa Itu Polinomial" }
  - { id: "2", title: "Unsur-Unsur Polinomial" }
  - { id: "3", title: "Derajat & Bentuk Baku" }
  - { id: "4", title: "Jenis-Jenis Polinomial" }
  - { id: "5", title: "Polinomial atau Bukan" }
components:
  - "Info Cards"
  - "Sub Materi"
  - "Activity Guided"
  - "Activity Matching"
  - "Activity Categorize"
  - "Activity Ordering"
  - "Activity TrueFalse"
  - "Quiz Cards"
  - "Tantangan Akhir Bab"
  - "Reflection"
activities:
  - "01-g1"
  - "01-m1"
  - "01-g2"
  - "01-m2"
  - "01-g3"
  - "01-m3"
  - "01-g4"
  - "01-m4"
  - "01-g5"
  - "01-m5"
challenge: "01-tantangan"
xp_available: 265
katex: true
---

# Bab 01 — Konsep Dasar Polinomial

<!-- COMPONENT: Info Cards
     DEVELOPER: enam bagian di bawah ini (Tujuan Pembelajaran, Kompetensi, Prasyarat,
     Estimasi Waktu, Peta Konsep, Motivasi) JANGAN ditampilkan sebagai teks panjang.
     Render sebagai deretan KARTU ringkas berwarna berbeda (grid responsif). Klik kartu ->
     POP-UP berisi isinya. Siswa boleh melewatinya dan langsung menuju materi.
     Beri label singkat pada kartu + ikon Lucide: target, puzzle, package, clock, map, flame. -->

<details data-card="tujuan" data-icon="target">
<summary>🎯 Tujuan Pembelajaran</summary>

Setelah mempelajari bab ini, peserta didik diharapkan mampu:

1. Mendefinisikan polinomial dan menuliskan bentuk umumnya.
2. Menentukan variabel, koefisien, konstanta, suku, dan derajat.
3. Mengklasifikasikan jenis polinomial.
4. Membedakan bentuk yang merupakan polinomial dan yang bukan.

</details>

<details data-card="kompetensi" data-icon="puzzle">
<summary>🧩 Kompetensi</summary>

**K1 — Mengidentifikasi unsur dan jenis polinomial.**

</details>

<details data-card="prasyarat" data-icon="package">
<summary>📦 Prasyarat</summary>

- Notasi pangkat: $x^3$ berarti $x \times x \times x$.
- Istilah suku sejenis: $3x$ dan $5x$ sejenis, sedangkan $3x$ dan $3x^2$ tidak.

</details>

<details data-card="waktu" data-icon="clock">
<summary>⏱️ Estimasi Waktu</summary>

**±75 menit.** Dapat dibagi menjadi beberapa sesi; progres tersimpan otomatis.

</details>

<details data-card="peta" data-icon="map">
<summary>🗺️ Peta Konsep</summary>

<!-- COMPONENT: Concept Map Mini
     DEVELOPER: render sebagai kartu/diagram interaktif yang dapat diklik menuju sub-materi.
     Blok di bawah hanya rujukan struktur. -->

```
Apa itu polinomial → Unsur-unsur → Derajat & bentuk baku
                                 → Jenis-jenis
                                 → Polinomial atau bukan
```

</details>

<details data-card="motivasi" data-icon="flame">
<summary>🔥 Motivasi</summary>

Sebelum dapat mengoperasikan, membagi, atau mencari akar polinomial, kita harus mampu mengenalinya lebih dahulu. Kesalahan kecil di bab ini—misalnya salah menyebut derajat—akan berlanjut menjadi kesalahan besar pada bab berikutnya.

</details>

---

<!-- COMPONENT: Sub Materi
     DEVELOPER: judul sub-materi di bawah ini WAJIB sticky (menempel di bawah judul bab saat
     digulir), berdesain khusus, dan berganti otomatis saat memasuki sub-materi berikutnya. -->

## 1️⃣ Apa Itu Polinomial

**Poli** berarti "banyak", **nomial** berarti "suku". Jadi polinomial adalah **suku banyak**: bentuk aljabar yang tersusun dari beberapa suku yang dijumlahkan atau dikurangkan.

> **Definisi.** Polinomial dalam variabel $x$ berbentuk
> $$a_n x^n + a_{n-1}x^{n-1} + \dots + a_1 x + a_0$$
> dengan pangkat $n$ merupakan **bilangan bulat tak negatif**, koefisien $a_i$ bilangan real, dan $a_n \neq 0$.

Aturan kunci yang membedakan polinomial dari bentuk lain: **pangkat variabelnya selalu $0, 1, 2, 3, \dots$** — tidak boleh negatif dan tidak boleh pecahan.

### 📘 Contoh

Perhatikan $2x^3 + 5x^2 - 4x + 7$. Bentuk ini polinomial karena setiap pangkatnya ($3, 2, 1, 0$) merupakan bilangan bulat tak negatif.

Sebaliknya, $\dfrac{3}{x} + 1$ **bukan** polinomial, sebab $\dfrac{3}{x} = 3x^{-1}$ berpangkat negatif.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"01-g1", "competency":"K1",
  "title":"Menguji apakah suatu bentuk merupakan polinomial",
  "prompt":"Tentukan apakah $\\sqrt{x} + 4x^2$ merupakan polinomial.",
  "steps":[
    {"ask":"Langkah 1. Ubah $\\sqrt{x}$ menjadi bentuk pangkat. Hasilnya adalah ….","type":"mc","options":["$x^{1/2}$","$x^{2}$","$x^{-1}$"],"answer":"$x^{1/2}$","feedback":"Tepat. Akar pangkat dua sama dengan pangkat $\\frac{1}{2}$."},
    {"ask":"Langkah 2. Apakah pangkat $\\frac{1}{2}$ memenuhi syarat pangkat polinomial?","type":"mc","options":["Tidak, karena bukan bilangan bulat","Ya, karena bernilai positif"],"answer":"Tidak, karena bukan bilangan bulat","feedback":"Benar. Pangkat wajib bilangan bulat tak negatif, sedangkan $\\frac{1}{2}$ adalah pecahan."},
    {"ask":"Langkah 3. Jadi, kesimpulannya adalah ….","type":"mc","options":["Bukan polinomial","Polinomial berderajat 2"],"answer":"Bukan polinomial","feedback":"Benar. Cukup satu pangkat yang menyalahi aturan untuk membuat seluruh bentuk bukan polinomial."}
  ],
  "conclusion":"Aturan emas: periksa pangkat setiap suku. Bila ada satu saja pangkat negatif atau pecahan, bentuk tersebut bukan polinomial.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity TrueFalse -->

```json
{ "type":"activity", "widget":"truefalse", "id":"01-m1", "competency":"K1",
  "prompt":"Tentukan nilai kebenaran tiap pernyataan.",
  "statements":[
    {"s":"$x^3 - \\sqrt{7}$ merupakan polinomial.","a":true,"why":"$\\sqrt{7}$ hanya konstanta; pangkat variabelnya tetap bilangan bulat."},
    {"s":"$\\frac{2}{x^2} + x$ merupakan polinomial.","a":false,"why":"$\\frac{2}{x^2} = 2x^{-2}$ berpangkat negatif."},
    {"s":"Bilangan $9$ merupakan polinomial.","a":true,"why":"Konstanta adalah polinomial berderajat 0."},
    {"s":"$2^x + 1$ merupakan polinomial.","a":false,"why":"Variabel berada pada posisi pangkat, sehingga termasuk fungsi eksponen."}
  ],
  "reward":{"xp":15} }
```

---

## 2️⃣ Unsur-Unsur Polinomial

<!-- VISUAL: Anatomi suku
     DEVELOPER: tampilkan $2x^3 + 5x^2 - 4x + 7$ sebagai blok-blok suku terpisah. Saat suku
     disentuh/di-hover, sorot bagiannya dan beri label: koefisien, variabel, pangkat, konstanta.
     Gunakan warna yang sama dengan kelas hl-coef / hl-var / hl-pow / hl-const. -->

Perhatikan penamaan setiap bagian pada satu suku:

$$\htmlClass{hl-coef}{2}\,\htmlClass{hl-var}{x}^{\htmlClass{hl-pow}{3}}$$

- **Suku** — bagian yang dipisahkan tanda $+$ atau $-$. Pada $2x^3 + 5x^2 - 4x + 7$ terdapat **4 suku**.
- **Variabel** — huruf yang nilainya dapat berubah, di sini $\htmlClass{hl-var}{x}$.
- **Koefisien** — bilangan pengali variabel, di sini $\htmlClass{hl-coef}{2}$. **Tandanya ikut**: pada $-4x$ koefisiennya $-4$.
- **Pangkat** — bilangan $\htmlClass{hl-pow}{3}$ pada contoh di atas.
- **Konstanta** — suku tanpa variabel, yaitu $\htmlClass{hl-const}{7}$. Nilainya sama dengan $f(0)$.

> 💡 Bila suku ditulis $x^2$ tanpa angka di depan, koefisiennya adalah $1$. Pada $-x^2$, koefisiennya $-1$.

### 📘 Contoh

Pada $x^3 - 6x^2 + 5x - 8$: koefisien $x^3$ adalah $1$ (bukan $3$), koefisien $x^2$ adalah $-6$, koefisien $x$ adalah $5$, dan konstantanya $-8$.

Perhatikan pula $3x^5 - 4x^3 + 6x - 10$. Suku $x^4$ dan $x^2$ tidak tertulis, artinya **koefisiennya $0$** — bukan "tidak ada".

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"01-g2", "competency":"K1",
  "title":"Membaca unsur polinomial secara teliti",
  "prompt":"Diketahui $P(x) = 3x^5 - 4x^3 + 6x - 10$. Tentukan koefisien $x^4$ dan konstantanya.",
  "steps":[
    {"ask":"Langkah 1. Apakah suku $x^4$ tertulis pada $P(x)$?","type":"mc","options":["Tidak tertulis","Tertulis dengan koefisien 4"],"answer":"Tidak tertulis","feedback":"Benar. Urutan pangkat yang tampak hanya 5, 3, 1, dan 0."},
    {"ask":"Langkah 2. Jika suatu suku tidak tertulis, berapakah koefisiennya?","type":"mc","options":["$0$","Tidak memiliki koefisien","$1$"],"answer":"$0$","feedback":"Tepat. Suku yang hilang berarti berkoefisien 0, sehingga dapat dituliskan $0x^4$."},
    {"ask":"Langkah 3. Tentukan konstanta dari $P(x)$.","type":"mc","options":["$-10$","$10$","$6$"],"answer":"$-10$","feedback":"Benar. Suku tanpa variabel adalah $-10$; tanda negatif ikut."}
  ],
  "conclusion":"Kebiasaan menuliskan koefisien nol untuk suku yang hilang akan sangat membantu pada pembagian Horner di Bab 03.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Matching -->

```json
{ "type":"activity", "widget":"matching", "id":"01-m2", "competency":"K1",
  "prompt":"Untuk polinomial $4x^3 - x^2 + 7$, pasangkan setiap unsur dengan nilainya.",
  "pairs":[
    ["Koefisien $x^3$","$4$"],
    ["Koefisien $x^2$","$-1$"],
    ["Koefisien $x$","$0$"],
    ["Konstanta","$7$"]
  ],
  "reward":{"xp":15} }
```

---

## 3️⃣ Derajat & Bentuk Baku

> **Derajat** polinomial adalah **pangkat tertinggi** variabelnya setelah disederhanakan.

Pada $2x^3 + 5x^2 - 4x + 7$, pangkat-pangkatnya $3, 2, 1, 0$; yang tertinggi $3$, sehingga derajatnya **3**. Suku $2x^3$ disebut **suku pemimpin**, dan $2$ disebut **koefisien pemimpin**.

**Bentuk baku** berarti menuliskan polinomial terurut dari pangkat tertinggi ke terendah.

<!-- VISUAL: Perapian ke bentuk baku
     DEVELOPER: animasikan perpindahan posisi suku dari -2 + x^4 - 3x + x^2 menjadi
     x^4 + x^2 - 3x - 2. Setiap suku bergerak ke posisi barunya, dengan pangkat disorot. -->

$$-2 + x^4 - 3x + x^2 \;\longrightarrow\; \htmlClass{hl-1}{x^4} + \htmlClass{hl-2}{x^2} - \htmlClass{hl-3}{3x} - 2$$

> ⚠️ Derajat **bukan** banyaknya suku, dan **bukan** pangkat suku pertama yang terlihat. Rapikan dahulu ke bentuk baku.

### 📘 Contoh

Tentukan derajat dan koefisien pemimpin dari $-2 + x^4 - 3x + x^2$.

Bentuk bakunya $x^4 + x^2 - 3x - 2$. Derajatnya **4**, dan koefisien pemimpinnya **1** — bukan 4, karena 4 adalah pangkatnya.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"01-g3", "competency":"K1",
  "title":"Menentukan derajat melalui bentuk baku",
  "prompt":"Tentukan derajat dan koefisien pemimpin dari $2x^2 - x^5 + 7$.",
  "steps":[
    {"ask":"Langkah 1. Tuliskan bentuk bakunya.","type":"mc","options":["$-x^5 + 2x^2 + 7$","$2x^2 + 7 - x^5$","$x^5 + 2x^2 + 7$"],"answer":"$-x^5 + 2x^2 + 7$","feedback":"Tepat. Suku berpangkat tertinggi diletakkan paling depan beserta tandanya."},
    {"ask":"Langkah 2. Berapakah derajatnya?","type":"mc","options":["$5$","$2$","$3$"],"answer":"$5$","feedback":"Benar, pangkat tertinggi adalah 5."},
    {"ask":"Langkah 3. Berapakah koefisien pemimpinnya?","type":"mc","options":["$-1$","$1$","$2$"],"answer":"$-1$","feedback":"Tepat. Suku pemimpinnya $-x^5$, sehingga koefisiennya $-1$."}
  ],
  "conclusion":"Selalu rapikan ke bentuk baku sebelum menyebut derajat maupun koefisien pemimpin.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Ordering -->

```json
{ "type":"activity", "widget":"ordering", "id":"01-m3", "competency":"K1",
  "prompt":"Urutkan keempat bentuk berikut dari derajat TERKECIL ke TERBESAR.",
  "options":["$5$","$2x-1$","$x^2$","$x^4-x$"],
  "answer_order":[0,1,2,3],
  "reward":{"xp":15} }
```

---

## 4️⃣ Jenis-Jenis Polinomial

Polinomial dikelompokkan dengan dua cara.

**Berdasarkan banyaknya suku:**

| Nama | Banyak suku | Contoh |
|------|:-----------:|--------|
| Monomial | 1 | $5x^3$ |
| Binomial | 2 | $x^2 - 9$ |
| Trinomial | 3 | $x^2 + 5x + 6$ |

**Berdasarkan derajat:**

| Derajat | Nama | Contoh |
|:-------:|------|--------|
| 0 | Konstan | $7$ |
| 1 | Linear | $2x + 3$ |
| 2 | Kuadrat | $x^2 - 5x + 6$ |
| 3 | Kubik | $x^3 - 1$ |
| 4 | Kuartik | $x^4 + 3x^2 - 2$ |

> 💡 Derajat menentukan **banyaknya akar maksimum**: polinomial berderajat $n$ memiliki paling banyak $n$ akar. Fakta ini dipakai pada Bab 04–05.

### 📘 Contoh

Bentuk $x^3 - 8$ memiliki 2 suku dan berderajat 3. Jadi, bentuk ini adalah **binomial** yang sekaligus **kubik**. Kedua cara penamaan dapat digunakan bersamaan.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"01-g4", "competency":"K1",
  "title":"Menamai polinomial dari dua sudut pandang",
  "prompt":"Klasifikasikan $-6x^5 + x^2$ berdasarkan banyaknya suku dan derajatnya.",
  "steps":[
    {"ask":"Langkah 1. Berapa banyak sukunya?","type":"mc","options":["2 suku","3 suku","1 suku"],"answer":"2 suku","feedback":"Benar, yaitu $-6x^5$ dan $x^2$."},
    {"ask":"Langkah 2. Berdasarkan banyaknya suku, bentuk ini disebut ….","type":"mc","options":["Binomial","Trinomial","Monomial"],"answer":"Binomial","feedback":"Tepat, dua suku berarti binomial."},
    {"ask":"Langkah 3. Berdasarkan derajatnya, bentuk ini disebut ….","type":"mc","options":["Kuintik (derajat 5)","Kuartik (derajat 4)","Kuadrat (derajat 2)"],"answer":"Kuintik (derajat 5)","feedback":"Benar, pangkat tertingginya 5."}
  ],
  "conclusion":"Satu polinomial dapat dinamai dari dua sudut sekaligus: menurut banyaknya suku dan menurut derajatnya.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Matching -->

```json
{ "type":"activity", "widget":"matching", "id":"01-m4", "competency":"K1",
  "prompt":"Pasangkan setiap derajat dengan nama polinomialnya.",
  "pairs":[
    ["Derajat 0","Konstan"],
    ["Derajat 1","Linear"],
    ["Derajat 2","Kuadrat"],
    ["Derajat 3","Kubik"],
    ["Derajat 4","Kuartik"]
  ],
  "reward":{"xp":15} }
```

---

## 5️⃣ Polinomial atau Bukan

> **Aturan emas.** Suatu bentuk merupakan polinomial **hanya jika** setiap pangkat variabelnya bilangan bulat tak negatif, variabel **tidak** berada di penyebut, dan variabel **tidak** berada di dalam tanda akar.

<!-- VISUAL: Uji aturan emas
     DEVELOPER: tampilkan sebagai tabel/kartu uji. Setiap bentuk diubah menjadi notasi pangkat
     (animasi singkat), lalu ditandai lolos (hijau) atau gagal (merah) beserta alasannya. -->

| Bentuk | Ditulis sebagai | Polinomial? |
|--------|-----------------|:-----------:|
| $3x^2 - 7x + 1$ | pangkat $2, 1, 0$ | ✅ Ya |
| $\dfrac{5}{x} + 2$ | $5x^{-1} + 2$ | ❌ Bukan |
| $\sqrt{x} + 3$ | $x^{1/2} + 3$ | ❌ Bukan |
| $4x^2 + \dfrac{x}{3}$ | $4x^2 + \tfrac{1}{3}x$ | ✅ Ya |
| $2^x + 1$ | variabel di pangkat | ❌ Bukan |
| $x^2\sqrt{3} - x$ | $\sqrt{3}$ hanya koefisien | ✅ Ya |

> ⚠️ Dua jebakan yang sering tertukar:
> 1. Variabel di penyebut ($\frac{1}{x}$) → bukan polinomial. Angka di penyebut ($\frac{x}{3}$) → boleh.
> 2. Akar dari **variabel** ($\sqrt{x}$) → bukan polinomial. Akar dari **angka** ($\sqrt{3}$) → boleh.

### 📘 Contoh

Manakah yang bukan polinomial: (a) $3x^4 - x$, (b) $\frac{2}{x} + 5$, (c) $x^2 - \sqrt{2}\,x + 1$?

Jawabannya (b), sebab $\frac{2}{x} = 2x^{-1}$ berpangkat negatif. Bentuk (c) tetap polinomial karena $\sqrt{2}$ hanya berperan sebagai koefisien.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"01-g5", "competency":"K1",
  "title":"Membedakan angka di penyebut dan variabel di penyebut",
  "prompt":"Tentukan status kedua bentuk berikut: $4x^2 + \\dfrac{x}{3}$ dan $4x^2 + \\dfrac{3}{x}$.",
  "steps":[
    {"ask":"Langkah 1. Bentuk $\\dfrac{x}{3}$ setara dengan ….","type":"mc","options":["$\\frac{1}{3}x$","$3x^{-1}$","$x^{-3}$"],"answer":"$\\frac{1}{3}x$","feedback":"Tepat. Angka pada penyebut hanya menjadi koefisien pecahan."},
    {"ask":"Langkah 2. Bentuk $\\dfrac{3}{x}$ setara dengan ….","type":"mc","options":["$3x^{-1}$","$\\frac{1}{3}x$","$3x$"],"answer":"$3x^{-1}$","feedback":"Benar. Variabel pada penyebut menghasilkan pangkat negatif."},
    {"ask":"Langkah 3. Jadi, manakah yang merupakan polinomial?","type":"mc","options":["Hanya $4x^2 + \\frac{x}{3}$","Hanya $4x^2 + \\frac{3}{x}$","Keduanya"],"answer":"Hanya $4x^2 + \\frac{x}{3}$","feedback":"Tepat. Angka di penyebut diperbolehkan, sedangkan variabel di penyebut tidak."}
  ],
  "conclusion":"Kuncinya: perhatikan apa yang berada di penyebut. Angka boleh, variabel tidak.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Categorize -->

```json
{ "type":"activity", "widget":"categorize", "id":"01-m5", "competency":"K1",
  "prompt":"Kelompokkan setiap bentuk berikut dengan menerapkan aturan pangkat.",
  "categories":["Polinomial","Bukan Polinomial"],
  "items":[
    ["$3x^2-\\sqrt{7}$","Polinomial"],
    ["$\\frac{3}{x}+1$","Bukan Polinomial"],
    ["$2^x$","Bukan Polinomial"],
    ["$\\frac{x}{3}+4x^2$","Polinomial"],
    ["$\\sqrt{x}+3$","Bukan Polinomial"],
    ["$9$","Polinomial"]
  ],
  "reward":{"xp":20} }
```

---

## 📝 Latihan Bertingkat

<!-- COMPONENT: Quiz Cards
     DEVELOPER: render 5 paket di bawah sebagai KARTU (A-E) berjajar, bukan daftar panjang.
     Klik kartu -> POP-UP berisi soalnya (boleh scroll/slide). Tandai paket D dan E sebagai
     OPSIONAL dengan XP bonus. Tiap item dirender mandiri; `short` hanya untuk jawaban bilangan. -->

### 🟢 Paket A — Dasar (5 soal)

```json
{
  "set_id": "01-set-A-mudah", "level": "mudah", "optional": false,
  "items": [
    {"id":"A1","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan derajat dari polinomial $5x^3 - 2x + 1$.","answer":"3","explanation":"Pangkat tertinggi adalah 3."},
    {"id":"A2","type":"mc","question":"Tentukan konstanta dari polinomial $2x^2 - 9$.","options":["$-9$","$9$","$2$","$-2$"],"answer":"$-9$","explanation":"Suku tanpa variabel adalah -9; tanda negatif ikut."},
    {"id":"A3","type":"mc","question":"Tentukan koefisien $x$ pada polinomial $7x^2 - 3x + 4$.","options":["$-3$","$3$","$7$","$4$"],"answer":"$-3$","explanation":"Sukunya -3x, sehingga koefisiennya -3."},
    {"id":"A4","type":"mc","question":"Berdasarkan banyaknya suku, bentuk $x^2 - 16$ termasuk ….","options":["Binomial","Monomial","Trinomial","Kuartik"],"answer":"Binomial","explanation":"Terdiri atas dua suku."},
    {"id":"A5","type":"mc","question":"Tuliskan $3 - x^2 + 2x$ dalam bentuk baku, yaitu terurut dari pangkat tertinggi ke terendah.","options":["$-x^2 + 2x + 3$","$3 + 2x - x^2$","$x^2 + 2x + 3$","$2x - x^2 + 3$"],"answer":"$-x^2 + 2x + 3$","explanation":"Urutkan dari pangkat tertinggi."}
  ]
}
```
<details><summary><strong>Pembahasan Paket A</strong></summary>

1. Derajat **3**. 2. Konstanta **$-9$**. 3. Koefisien **$-3$**. 4. **Binomial**. 5. **$-x^2+2x+3$**.
</details>

### 🟡 Paket B — Menengah (5 soal)

```json
{
  "set_id":"01-set-B-sedang","level":"sedang","optional": false,
  "items":[
    {"id":"B1","type":"mc","question":"Tentukan derajat dan koefisien pemimpin dari polinomial $2x^2 - x^5 + 7$.","options":["Derajat 5, koefisien pemimpin $-1$","Derajat 5, koefisien pemimpin $2$","Derajat 2, koefisien pemimpin $2$","Derajat 5, koefisien pemimpin $1$"],"answer":"Derajat 5, koefisien pemimpin $-1$","explanation":"Bentuk baku -x^5+2x^2+7."},
    {"id":"B2","type":"mc","question":"Tentukan koefisien $x^3$ pada polinomial $4x^4 - x^2 + 6$. Perhatikan bahwa suku $x^3$ tidak tertulis.","options":["$0$","$4$","$-1$","Tidak memiliki koefisien"],"answer":"$0$","explanation":"Suku yang tidak tertulis berkoefisien 0."},
    {"id":"B3","type":"mc","question":"Tuliskan $x^4 - 1$ secara lengkap dengan menyertakan SEMUA suku dari pangkat 4 hingga pangkat 0, termasuk suku yang berkoefisien nol.","options":["$x^4 + 0x^3 + 0x^2 + 0x - 1$","$x^4 + 0x^3 + 0x^2 - 1$","$x^4 - 0x^3 - 0x^2 - 0x - 1$","$x^4 + x^3 + x^2 + x - 1$"],"answer":"$x^4 + 0x^3 + 0x^2 + 0x - 1$","explanation":"Sisipkan suku x^3, x^2, dan x dengan koefisien 0."},
    {"id":"B4","type":"mc","question":"Klasifikasikan $x^3 - 8$ berdasarkan banyaknya suku sekaligus derajatnya.","options":["Binomial berderajat 3 (kubik)","Trinomial berderajat 3 (kubik)","Binomial berderajat 8","Monomial berderajat 3"],"answer":"Binomial berderajat 3 (kubik)","explanation":"Dua suku, pangkat tertinggi 3."},
    {"id":"B5","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Bentuk $x^n - 3$ diketahui berderajat 4. Tentukan nilai $n$.","answer":"4","explanation":"Pangkat tertinggi harus 4."}
  ]
}
```
<details><summary><strong>Pembahasan Paket B</strong></summary>

1. Derajat **5**, koefisien pemimpin **$-1$**. 2. **$0$**. 3. **$x^4+0x^3+0x^2+0x-1$**. 4. **Binomial kubik**. 5. $n=\mathbf4$.
</details>

### 🔴 Paket C — Lanjut (5 soal)

```json
{
  "set_id":"01-set-C-sulit","level":"sulit","optional": false,
  "items":[
    {"id":"C1","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Diketahui $f(x)=(2k-6)x^4 + 3x^2 - 1$ berderajat 2. Tentukan nilai $k$.","answer":"3","explanation":"Suku x^4 harus hilang: 2k-6=0 sehingga k=3."},
    {"id":"C2","type":"mc","question":"Manakah di antara bentuk berikut yang merupakan polinomial?","options":["$4x^2 + \\frac{x}{3}$","$\\frac{4}{x} + x^2$","$\\sqrt{x} + 3$","$3^x + x$"],"answer":"$4x^2 + \\frac{x}{3}$","explanation":"Angka pada penyebut diperbolehkan; variabel pada penyebut tidak."},
    {"id":"C3","type":"mc","question":"Diketahui $A(x)$ berderajat 5 dan $B(x)$ berderajat 3. Manakah pernyataan yang tepat mengenai derajat $A(x)+B(x)$?","options":["Derajatnya tepat 5","Derajatnya paling banyak 5, dapat kurang dari itu","Derajatnya tepat 8","Derajatnya paling sedikit 8"],"answer":"Derajatnya tepat 5","explanation":"Suku x^5 tidak memiliki pasangan untuk saling menghilangkan."},
    {"id":"C4","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan derajat hasil kali $(x^2+1)(x^3-x)$ tanpa menjabarkannya.","answer":"5","explanation":"Derajat hasil kali sama dengan jumlah derajat: 2+3=5."},
    {"id":"C5","type":"mc","question":"Agar $px^3 + qx^2 + 5$ merupakan binomial (tepat dua suku), syarat apa yang harus dipenuhi oleh $p$ dan $q$?","options":["Tepat satu di antara $p$ dan $q$ bernilai nol","Keduanya bernilai nol","Keduanya tidak nol","$p$ sama dengan $q$"],"answer":"Tepat satu di antara $p$ dan $q$ bernilai nol","explanation":"Konstanta 5 sudah satu suku; agar totalnya dua suku, satu suku bervariabel harus hilang."}
  ]
}
```
<details><summary><strong>Pembahasan Paket C</strong></summary>

1. $2k-6=0 \Rightarrow k=\mathbf3$. 2. **$4x^2+\frac{x}{3}$**. 3. Derajat **tepat 5**. 4. $2+3=\mathbf5$. 5. **Tepat satu** dari $p,q$ bernilai nol.
</details>

### 🧠 Paket D — HOTS (5 soal, opsional)

> Paket ini **opsional**. Mengerjakannya memberi XP bonus.

```json
{
  "set_id":"01-set-D-hots","level":"hots","optional": true, "bonus_xp": 20,
  "items":[
    {"id":"D1","type":"mc","question":"Diketahui $f(x)=(m^2-4)x^3 + (m-2)x^2 + 1$ berderajat TEPAT 2. Tentukan nilai $m$.","options":["$m=-2$","$m=2$","$m=\\pm2$","$m=0$"],"answer":"$m=-2$","explanation":"Perlu m^2-4=0 agar suku x^3 hilang, tetapi m-2 tidak nol agar suku x^2 tetap ada."},
    {"id":"D2","type":"mc","question":"Hasil kali dua binomial tidak selalu berupa trinomial. Manakah contoh yang menunjukkan hasil kali dua binomial dapat berupa binomial?","options":["$(x-1)(x+1) = x^2-1$","$(x+1)(x+2) = x^2+3x+2$","$(x+3)^2 = x^2+6x+9$","$(2x+1)(x+1) = 2x^2+3x+1$"],"answer":"$(x-1)(x+1) = x^2-1$","explanation":"Suku x saling menghilangkan sehingga tersisa dua suku."},
    {"id":"D3","type":"mc","question":"Bentuk $x^{a+2} + x^3 - 4$ disyaratkan berderajat 3 sekaligus memiliki koefisien $x^5$ sama dengan 1. Mungkinkah kedua syarat itu dipenuhi bersamaan?","options":["Tidak mungkin, karena kedua syarat saling bertentangan","Mungkin, dengan $a=3$","Mungkin, dengan $a=1$","Mungkin, dengan $a=5$"],"answer":"Tidak mungkin, karena kedua syarat saling bertentangan","explanation":"Koefisien x^5=1 menuntut a=3, tetapi itu membuat derajatnya 5."},
    {"id":"D4","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Sebuah polinomial berderajat 4 hanya memuat suku $x^4$, suku $x$, dan konstanta. Koefisien pemimpinnya $2$, konstantanya sama dengan koefisien pemimpin, dan jumlah semua koefisiennya $0$. Tentukan koefisien $x$.","answer":"-4","explanation":"Bentuknya 2x^4 + kx + 2; 2+k+2=0 sehingga k=-4."},
    {"id":"D5","type":"mc","question":"Pernyataan: setiap konstanta tak nol merupakan polinomial berderajat 0. Bagaimana kedudukan konstanta $0$?","options":["Disebut polinomial nol dan derajatnya tidak terdefinisi","Berderajat 0 juga","Bukan polinomial","Berderajat 1"],"answer":"Disebut polinomial nol dan derajatnya tidak terdefinisi","explanation":"Polinomial nol merupakan kasus khusus."}
  ]
}
```
<details><summary><strong>Pembahasan Paket D</strong></summary>

1. $m=\mathbf{-2}$ (agar $x^3$ hilang tetapi $x^2$ tetap ada). 2. $(x-1)(x+1)=x^2-1$. 3. **Tidak mungkin** — kedua syarat bertentangan. 4. $2+k+2=0 \Rightarrow k=\mathbf{-4}$. 5. **Polinomial nol**, derajat tidak terdefinisi.
</details>

### 🏆 Paket E — Model TKA (5 soal, opsional)

> Paket ini **opsional** dan bergaya soal TKA. Mengerjakannya memberi XP bonus.

```json
{
  "set_id":"01-set-E-tka","level":"tka","optional": true, "bonus_xp": 20,
  "items":[
    {"id":"E1","type":"mc","source":"TKA-drum","question":"Diketahui $V(T)=0{,}05\\,T^3 + 0{,}4\\,T^2 + 20\\,T$. Tentukan derajat dan koefisien pemimpinnya.","options":["Derajat 3, koefisien pemimpin $0{,}05$","Derajat 3, koefisien pemimpin $0{,}4$","Derajat 2, koefisien pemimpin $0{,}4$","Derajat 3, koefisien pemimpin $20$"],"answer":"Derajat 3, koefisien pemimpin $0{,}05$","explanation":"Pangkat tertinggi 3 dengan koefisien 0,05."},
    {"id":"E2","type":"mc","source":"TKA-saham","question":"Diketahui $f(x)=x^3 - 70x^2 - 600x + 74{.}000$. Tentukan koefisien $x^2$ dan konstantanya.","options":["Koefisien $x^2 = -70$, konstanta $74{.}000$","Koefisien $x^2 = 70$, konstanta $74{.}000$","Koefisien $x^2 = -600$, konstanta $74{.}000$","Koefisien $x^2 = -70$, konstanta $-74{.}000$"],"answer":"Koefisien $x^2 = -70$, konstanta $74{.}000$","explanation":"Tanda negatif ikut; konstanta adalah f(0)."},
    {"id":"E3","type":"mc","question":"Perhatikan enam bentuk berikut: $\\frac{5}{x}+1$; $3x^2-\\sqrt{7}$; $x^{1/2}+x$; $2^x$; $9$; $x^4-x^{-1}$. Berapa banyak di antaranya yang merupakan polinomial?","options":["$2$","$1$","$3$","$4$"],"answer":"$2$","explanation":"Hanya 3x^2-akar7 dan 9 yang memenuhi syarat."},
    {"id":"E4","type":"mc","question":"Diketahui $A(x)$ dan $B(x)$ keduanya berderajat 4. Manakah pernyataan yang PASTI benar mengenai derajat $A(x)-B(x)$?","options":["Derajatnya paling banyak 4","Derajatnya selalu tepat 4","Derajatnya selalu 0","Derajatnya paling sedikit 4"],"answer":"Derajatnya paling banyak 4","explanation":"Suku x^4 dapat saling menghilangkan."},
    {"id":"E5","type":"mc","question":"Diketahui $h(x)=(2p-1)x^5 + 3x^3 - x + p$ berderajat 3. Tentukan nilai $p$ dan konstantanya.","options":["$p=\\frac{1}{2}$, konstanta $\\frac{1}{2}$","$p=\\frac{1}{2}$, konstanta $3$","$p=2$, konstanta $2$","$p=0$, konstanta $0$"],"answer":"$p=\\frac{1}{2}$, konstanta $\\frac{1}{2}$","explanation":"2p-1=0 sehingga p=1/2; konstantanya adalah p."}
  ]
}
```
<details><summary><strong>Pembahasan Paket E</strong></summary>

**E1.** Derajat 3, koefisien pemimpin $0{,}05$. **E2.** $-70$ dan $74{.}000$. **E3.** Hanya $3x^2-\sqrt7$ dan $9$ → **2**. **E4.** Paling banyak 4. **E5.** $p=\tfrac12$, konstanta $\tfrac12$.
</details>

---

## ⚠️ Kesalahan Umum & ⚡ Tips Cepat

| Kesalahan | Perbaikan |
|-----------|-----------|
| Lupa tanda negatif pada koefisien | Pada $x^2-4x$, koefisien $x$ adalah $-4$ |
| Mengira koefisien $x^2$ adalah $2$ | Koefisiennya $1$; angka 2 adalah pangkat |
| Menganggap suku hilang tak berkoefisien | Koefisiennya $0$, bukan "tidak ada" |
| Menyebut derajat sebelum merapikan | Rapikan ke bentuk baku terlebih dahulu |
| Mengira $\frac{x}{3}$ bukan polinomial | Angka di penyebut boleh; variabel tidak |
| Mengira derajat = banyaknya suku | Dua hal berbeda: $x^5+1$ punya 2 suku, derajat 5 |

**Tips cepat:** rapikan ke bentuk baku → tulis tiap suku sebagai $x^{\text{pangkat}}$ untuk menguji keabsahan → tuliskan koefisien nol untuk suku yang hilang.

---

## ✅ Ringkasan

- **Polinomial** = suku banyak; pangkat variabel wajib **bilangan bulat tak negatif**.
- **Unsur:** suku, variabel, koefisien (tanda ikut), pangkat, konstanta ($=f(0)$).
- **Derajat** = pangkat tertinggi; **koefisien pemimpin** = koefisien suku pemimpin.
- **Jenis:** menurut banyak suku (mono/bi/trinomial) & menurut derajat (konstan/linear/kuadrat/kubik/kuartik).
- **Bukan polinomial** bila ada pangkat negatif/pecahan, variabel di penyebut, atau variabel di dalam akar.

---

## 🏆 Tantangan Akhir Bab

<!-- COMPONENT: Tantangan Akhir Bab
     DEVELOPER: render sebagai KARTU; klik -> POP-UP layar penuh (modal) berisi sesi berwaktu.
     Tampilkan timer, lalu rekap capaian (skor, bintang, waktu, XP, lencana).
     Seluruh butir bersifat mandiri - JANGAN menarik atau memecah aktivitas dari bagian materi. -->
> Sesi berwaktu berisi 10 soal (5 menit) untuk menguji penguasaan Anda. Seluruh soal berbentuk pilihan sehingga dapat dikerjakan tanpa mengetik.

```json
{ "type":"challenge", "id":"01-tantangan", "competency":"K1",
  "title":"Tantangan Akhir Bab 1: Konsep Dasar Polinomial",
  "mode":"timed", "time_limit_sec":300, "display":"modal", "shuffle":true,
  "scoring":{"per_correct":10,"time_bonus":true},
  "stars":{"3":90,"2":70,"1":50},
  "reward":{"xp":80,"badge":"pengenal-polinomial"},
  "record":{"track_best_time":true,"track_best_score":true},
  "items":[
    {"id":"T1","type":"mc","question":"Tentukan derajat dari polinomial $x^4 + 2x^6 - 1$.","options":["$6$","$4$","$2$","$3$"],"answer":"$6$","explanation":"Rapikan ke bentuk baku: pangkat tertinggi adalah 6."},
    {"id":"T2","type":"mc","question":"Tentukan koefisien pemimpin dari polinomial $-2 + x^4 - 3x + x^2$.","options":["$1$","$4$","$-2$","$-3$"],"answer":"$1$","explanation":"Bentuk baku x^4+x^2-3x-2; koefisien x^4 adalah 1."},
    {"id":"T3","type":"mc","question":"Benar atau salah: bentuk $\\frac{3}{x} + 1$ merupakan polinomial.","options":["Salah","Benar"],"answer":"Salah","explanation":"3/x sama dengan 3x pangkat -1, yaitu pangkat negatif."},
    {"id":"T4","type":"mc","question":"Benar atau salah: banyaknya suku suatu polinomial selalu sama dengan derajatnya.","options":["Salah","Benar"],"answer":"Salah","explanation":"Contoh: x^5+1 memiliki 2 suku tetapi berderajat 5."},
    {"id":"T5","type":"mc","question":"Tentukan konstanta dari polinomial $x^3 - 4x + 7$.","options":["$7$","$-4$","$0$","$3$"],"answer":"$7$","explanation":"Suku tanpa variabel, sama dengan f(0)."},
    {"id":"T6","type":"mc","question":"Berdasarkan derajatnya, bentuk $x^3 - 1$ termasuk polinomial ….","options":["Kubik","Kuadrat","Linear","Kuartik"],"answer":"Kubik","explanation":"Derajat 3 disebut kubik."},
    {"id":"T7","type":"mc","question":"Tentukan koefisien $x^2$ pada polinomial $3x^5 - 4x^3 + 6x - 10$.","options":["$0$","$6$","$-4$","$3$"],"answer":"$0$","explanation":"Suku x^2 tidak ada, artinya koefisiennya 0."},
    {"id":"T8","type":"mc","question":"Seorang siswa menentukan derajat dan koefisien pemimpin dari $-2 + x^4 - 3x + x^2$ melalui langkah berikut. Langkah 1: rapikan menjadi $x^4 + x^2 - 3x - 2$. Langkah 2: derajatnya 4. Langkah 3: koefisien pemimpinnya 4. Langkah 4: konstantanya $-2$. Manakah langkah yang SALAH?","options":["Langkah 3, karena koefisien pemimpin seharusnya 1","Langkah 1, karena bentuk bakunya keliru","Langkah 2, karena derajatnya seharusnya 2","Langkah 4, karena konstantanya seharusnya 2"],"answer":"Langkah 3, karena koefisien pemimpin seharusnya 1","explanation":"Angka 4 adalah pangkat, sedangkan koefisien x^4 adalah 1."},
    {"id":"T9","type":"mc","question":"Urutkan bentuk berikut dari derajat TERKECIL ke TERBESAR: $x^2$, $5$, $x^4-x$, $2x-1$.","options":["$5$, $2x-1$, $x^2$, $x^4-x$","$5$, $x^2$, $2x-1$, $x^4-x$","$2x-1$, $5$, $x^2$, $x^4-x$","$x^4-x$, $x^2$, $2x-1$, $5$"],"answer":"$5$, $2x-1$, $x^2$, $x^4-x$","explanation":"Derajatnya berturut-turut 0, 1, 2, dan 4."},
    {"id":"T10","type":"mc","question":"Diketahui $f(x)=(m-2)x^3 + 4x^2 - x + 1$. Agar $f(x)$ berderajat 2, tentukan nilai $m$.","options":["$m=2$","$m=-2$","$m=0$","$m=3$"],"answer":"$m=2$","explanation":"Suku x^3 harus hilang: m-2=0 sehingga m=2."}
  ] }
```

---

## 📝 Refleksi

<!-- COMPONENT: Reflection -->
1. Dengan bahasa Anda sendiri, apa satu aturan yang membedakan polinomial dari bukan polinomial?
2. Kesalahan mana pada tabel di atas yang paling berpotensi Anda lakukan?
3. Mengapa penting menuliskan koefisien nol untuk suku yang hilang?

---

## ➡️ Persiapan Menuju Bab Berikutnya

Pada bab ini kita telah mampu mengenali polinomial beserta seluruh unsurnya.

Pada **Bab 02 — Operasi dan Nilai Polinomial**, kita akan mulai mengoperasikannya: menjumlahkan, mengurangkan, mengalikan, dan menghitung nilainya melalui substitusi. Di sanalah soal saham dan soal drum akan diselesaikan.

Bekal yang perlu dibawa: kebiasaan menulis **bentuk baku** dan **koefisien nol**, serta pemahaman bahwa **konstanta = nilai saat $x=0$**.

> Lanjutkan ke **Bab 02**.

<!-- COMPONENT: Summary -->
<!-- Progress bar: 2/8. -->
