---
id: "01-konsep-dasar-polinomial"
slug: "konsep-dasar-polinomial"
title: "Konsep Dasar Polinomial"
order: 1
duration_min: 90
level: "Kelas XI - Kurikulum Merdeka"
track: "TKA Matematika Lanjut"
prerequisites:
  - "00-intro"
  - "Notasi pangkat & aljabar dasar"
competencies:
  - "K1: Mengidentifikasi unsur & jenis polinomial"
learning_objectives:
  - "Mendefinisikan polinomial secara formal & mengenali bentuk umumnya"
  - "Menentukan variabel, koefisien, konstanta, suku, dan derajat"
  - "Mengklasifikasikan jenis polinomial"
  - "Membedakan polinomial dan bukan polinomial"
tags: ["konsep-dasar", "derajat", "koefisien", "suku", "jenis-polinomial"]
components:
  - "Concept Map Mini"
  - "Interactive Anatomy"
  - "Live Classifier"
  - "Flashcard"
  - "Quiz"
  - "Reflection"
  - "Activity TrueFalse"
  - "Activity Matching"
  - "Activity Categorize"
  - "Activity Ordering"
  - "Activity Cloze"
  - "Activity ErrorHunt"
  - "Tantangan Akhir Bab"
activities:
  - "01-act-derajat"
  - "01-act-jenis"
  - "01-act-polinomial"
  - "01-act-urut"
  - "01-act-cloze"
  - "01-act-error"
challenge: "01-tantangan"
xp_available: 210
katex: true
---

# Bab 01 — Konsep Dasar Polinomial

<!-- COMPONENT: Concept Map Mini
     DEVELOPER: WAJIB dirender sebagai kartu/diagram interaktif bergaya Soft Neo Brutalism,
     BUKAN menyalin blok teks ASCII apa adanya. Buat simpul bertahap
     Definisi → Unsur → Derajat → Jenis → Membedakan sebagai kartu yang dapat diklik
     menuju sub-bagian terkait; sorot simpul aktif saat halaman digulir.
     Blok teks di bawah HANYA rujukan struktur. -->

## 🎯 Tujuan Pembelajaran

Setelah mempelajari bab ini, peserta didik diharapkan mampu:

1. **Mendefinisikan** apa itu polinomial dan menuliskan **bentuk umumnya**.
2. **Menyebut** setiap unsur: variabel, koefisien, konstanta, suku, dan derajat.
3. **Menentukan** derajat, banyak suku, koefisien tertentu, dan konstanta dari sebuah polinomial.
4. **Mengklasifikasikan** jenis polinomial (berdasarkan banyak suku & berdasarkan derajat).
5. **Membedakan** mana bentuk yang polinomial dan mana yang **bukan** — ini jebakan favorit di ujian.

## 🧩 Kompetensi yang Dipelajari

- **K1 — Mengidentifikasi unsur & jenis polinomial.**

## 📦 Prasyarat

- Sudah membaca **Bab 00 (Pengantar)**.
- Paham notasi pangkat: $x^3$ berarti $x \times x \times x$.
- Paham istilah "suku sejenis" (misal $3x$ dan $5x$ sejenis; $3x$ dan $3x^2$ tidak).

## ⏱️ Estimasi Waktu Belajar

**±90 menit** (materi ±35 menit, contoh ±20 menit, latihan ±35 menit). Waktu belajar dapat dibagi menjadi beberapa sesi; progres tersimpan otomatis.

## 🗺️ Peta Konsep Kecil

<!-- COMPONENT: Concept Map Mini (lanjutan)
     DEVELOPER: tampilkan sebagai alur kartu interaktif, bukan teks ASCII mentah. -->

```
KONSEP DASAR POLINOMIAL
│
├─ 1. Apa itu polinomial?  ─────► definisi & bentuk umum
├─ 2. Unsur-unsur          ─────► variabel · koefisien · konstanta · suku
├─ 3. Derajat              ─────► pangkat tertinggi
├─ 4. Jenis-jenis          ─────► menurut jumlah suku & menurut derajat
└─ 5. Polinomial atau bukan? ───► aturan pangkat: bilangan bulat ≥ 0
```

## 🔥 Motivasi

Sebelum kita bisa **mengoperasikan**, **membagi**, atau **mencari akar** sebuah polinomial, kita harus mampu **mengenalinya** terlebih dahulu—sebagaimana pengenalan huruf mendahului kemampuan membaca kalimat.

Kabar baiknya: konsep di bab ini **sederhana tapi fundamental**. Salah paham kecil di sini (misalnya salah sebut derajat, atau mengira $\frac{1}{x}$ itu polinomial) akan menjalar jadi kesalahan besar di bab-bab berikutnya. Jadi mari kita kunci fondasinya kuat-kuat.

---

## 1️⃣ Apa Itu Polinomial?

Mari mulai dari kata-katanya. **Poli** artinya "banyak", **nomial** artinya "suku". Jadi **polinomial = suku banyak**. Sesederhana itu: bentuk aljabar yang tersusun dari **banyak suku yang dijumlahkan/dikurangkan**.

Perhatikan bentuk ini:
$$2x^3 + 5x^2 - 4x + 7$$

Ini adalah polinomial. Ia punya empat "potongan" yang dipisahkan tanda $+$ atau $-$. Tiap potongan itu disebut **suku**.

### Definisi formal

> **Polinomial dalam variabel $x$** adalah bentuk:
> $$a_n x^n + a_{n-1}x^{n-1} + \dots + a_2 x^2 + a_1 x + a_0$$
> dengan:
> - $n$ adalah **bilangan bulat tak negatif** ($n = 0, 1, 2, 3, \dots$),
> - $a_n, a_{n-1}, \dots, a_0$ adalah **bilangan real** (disebut koefisien),
> - $a_n \neq 0$ (koefisien pangkat tertinggi tidak nol, supaya derajatnya jelas).

Notasi $a_n$ tidak perlu dikhawatirkan; notasi tersebut hanya cara ringkas untuk menuliskan "koefisien di depan $x^n$". Contohnya pada $2x^3 + 5x^2 - 4x + 7$:

- $a_3 = 2$ (koefisien $x^3$)
- $a_2 = 5$ (koefisien $x^2$)
- $a_1 = -4$ (koefisien $x^1$)
- $a_0 = 7$ (konstanta, yaitu koefisien $x^0 = 1$)

**Kenapa pangkatnya harus bilangan bulat tak negatif?** Inilah aturan emas yang membedakan polinomial dari bukan polinomial. Kita bahas tuntas di bagian 5. Untuk sekarang, ingat kalimat ini baik-baik: **pangkat variabel pada polinomial selalu $0, 1, 2, 3, \dots$ — tidak boleh negatif, tidak boleh pecahan.**

### Bentuk umum & bentuk baku (standar)

Polinomial paling enak dibaca kalau ditulis dari **pangkat tertinggi ke terendah**. Ini disebut **bentuk baku (standard form)**.

Contoh: $-4x + x^3 + 7 + 5x^2$ sebaiknya dirapikan menjadi
$$x^3 + 5x^2 - 4x + 7$$

⚡ **Tips:** Selalu rapikan ke bentuk baku sebelum mengerjakan apa pun. Banyak kesalahan derajat terjadi hanya karena polinomial belum diurutkan.

---

## 2️⃣ Unsur-Unsur Polinomial

Mari bedah "anatomi" sebuah polinomial. Kita pakai $2x^3 + 5x^2 - 4x + 7$ sebagai pasien.

<!-- COMPONENT: Interactive Anatomy -->
<!-- Tampilkan polinomial 2x^3 + 5x^2 - 4x + 7 dengan bagian yang bisa di-hover: hover angka -> "koefisien", hover x -> "variabel", hover 7 -> "konstanta", hover tiap blok -> "suku". Gaya: highlight blok warna. -->

### a. Suku

**Suku** adalah bagian-bagian yang dipisahkan oleh tanda $+$ atau $-$.

$$\underbrace{2x^3}_{\text{suku 1}} \; \underbrace{+\,5x^2}_{\text{suku 2}} \; \underbrace{-\,4x}_{\text{suku 3}} \; \underbrace{+\,7}_{\text{suku 4}}$$

Polinomial ini punya **4 suku**.

> ⚠️ **Perhatikan:** tanda di depan suku **ikut milik suku itu**. Suku ketiga adalah $-4x$ (bukan $4x$). Ini penting saat menyebut koefisien.

### b. Variabel

**Variabel** adalah huruf yang mewakili bilangan yang bisa berubah-ubah nilainya. Di sini variabelnya adalah $x$. Variabel bisa juga huruf lain: $y$, $t$, $z$, dan seterusnya.

### c. Koefisien

**Koefisien** adalah bilangan yang **mengalikan** variabel pada tiap suku.

| Suku | Koefisien |
|------|-----------|
| $2x^3$ | $2$ |
| $5x^2$ | $5$ |
| $-4x$ | $-4$ |
| $7$ | (ini konstanta) |

> 💡 Kalau suatu suku ditulis $x^2$ saja tanpa angka di depan, koefisiennya adalah **$1$** (karena $x^2 = 1 \cdot x^2$). Kalau $-x^2$, koefisiennya $-1$.

### d. Konstanta

**Konstanta** adalah suku yang **tidak mengandung variabel** — sebuah angka berdiri sendiri. Pada contoh kita, konstantanya adalah $7$.

Kenapa disebut "konstanta"? Karena nilainya **tetap**, tidak ikut berubah walau $x$ berubah. Secara teknis, konstanta adalah koefisien dari $x^0$ (ingat $x^0 = 1$), sehingga $7 = 7x^0$.

---

## 3️⃣ Derajat Polinomial

Ini konsep paling sering ditanya. Pahami sekali, terpakai selamanya.

> **Derajat** sebuah polinomial adalah **pangkat tertinggi** dari variabelnya (setelah disederhanakan).

Pada $2x^3 + 5x^2 - 4x + 7$, pangkat-pangkatnya adalah $3, 2, 1, 0$. Yang tertinggi adalah $3$, jadi **derajatnya = 3**.

Istilah pendukung:
- **Suku pemimpin (leading term):** suku dengan pangkat tertinggi, di sini $2x^3$.
- **Koefisien utama (leading coefficient):** koefisien suku pemimpin, di sini $2$.

### Contoh cepat menentukan derajat

| Polinomial | Derajat | Alasan |
|-----------|---------|--------|
| $7x^5 - x^2 + 9$ | $5$ | pangkat tertinggi $5$ |
| $3x - 8$ | $1$ | pangkat tertinggi $1$ |
| $10$ | $0$ | $10 = 10x^0$, pangkat $0$ |
| $x^4 + 2x^6 - 1$ | $6$ | jangan tertipu urutan! rapikan dulu |

> ⚠️ **Jebakan klasik:** derajat **bukan** banyaknya suku, dan **bukan** pangkat suku pertama yang terlihat. Selalu cari pangkat **tertinggi**. Rapikan ke bentuk baku dulu.

### Derajat pada dua variabel (pengayaan singkat)

Kalau ada dua variabel, derajat sebuah suku adalah **jumlah** pangkatnya. Misal pada $4x^2y^3$, derajat sukunya $2+3 = 5$. Untuk bab ini kita fokus pada **satu variabel** saja, tapi tak ada salahnya tahu.

---

<!-- COMPONENT: Activity TrueFalse -->
> **Latihan Interaktif — Benar/Salah.** Tentukan nilai kebenaran tiap pernyataan berikut.

```json
{ "type":"activity", "widget":"truefalse", "id":"01-act-derajat", "competency":"K1",
  "prompt":"Benar atau salah?",
  "statements":[
    {"s":"Derajat dari $x^4+2x^6-1$ adalah 4.","a":false,"why":"Pangkat tertinggi adalah 6, jadi derajatnya 6. Rapikan dulu ke bentuk baku!"},
    {"s":"Derajat konstanta $12$ adalah 0.","a":true,"why":"$12=12x^0$, jadi derajatnya 0."},
    {"s":"Banyaknya suku sama dengan derajat.","a":false,"why":"$x^5+1$ punya 2 suku tapi berderajat 5."},
    {"s":"Koefisien utama dari $-6x^5+x^2$ adalah $-6$.","a":true,"why":"Koefisien suku berpangkat tertinggi ($-6x^5$)."}
  ],
  "reward":{"xp":20} }
```

## 4️⃣ Jenis-Jenis Polinomial

Polinomial dikelompokkan dengan dua cara.

### A. Berdasarkan **banyak suku**

| Nama | Banyak suku | Contoh |
|------|-------------|--------|
| **Monomial** | 1 suku | $5x^3$ |
| **Binomial** | 2 suku | $x^2 - 9$ |
| **Trinomial** | 3 suku | $x^2 + 5x + 6$ |
| Polinomial | 4 suku atau lebih | $x^3 + 2x^2 - x + 1$ |

(Untuk 4 suku ke atas biasanya cukup disebut "polinomial" saja.)

### B. Berdasarkan **derajat**

| Derajat | Nama | Bentuk umum | Contoh |
|---------|------|-------------|--------|
| $0$ | Konstan | $a_0$ | $7$ |
| $1$ | Linear | $a_1x + a_0$ | $2x + 3$ |
| $2$ | Kuadrat | $a_2x^2 + a_1x + a_0$ | $x^2 - 5x + 6$ |
| $3$ | Kubik | $a_3x^3 + \dots$ | $x^3 - 1$ |
| $4$ | Kuartik | $a_4x^4 + \dots$ | $x^4 + 3x^2 - 2$ |
| $5$ | Kuintik | $a_5x^5 + \dots$ | $x^5 - x$ |

<!-- COMPONENT: Flashcard -->
<!-- Deck flashcard: depan = "Derajat 3 disebut?" belakang = "Kubik". Buat 2 arah (nama->contoh dan contoh->nama). Acak urutan. -->

> 💡 **Kaitan ke depan:** derajat menentukan **paling banyak berapa akar** yang bisa dimiliki polinomial. Polinomial derajat $n$ punya **paling banyak $n$ akar**. Kubik → maksimal 3 akar. Ini akan sangat berguna di Bab 04–05.

---

<!-- COMPONENT: Activity Matching -->
> **Latihan Interaktif — Menjodohkan.** Pasangkan setiap derajat dengan nama polinomialnya.

```json
{ "type":"activity", "widget":"matching", "id":"01-act-jenis", "competency":"K1",
  "prompt":"Jodohkan derajat dengan nama polinomialnya",
  "pairs":[
    ["Derajat 0","Konstan"],
    ["Derajat 1","Linear"],
    ["Derajat 2","Kuadrat"],
    ["Derajat 3","Kubik"],
    ["Derajat 4","Kuartik"]
  ],
  "reward":{"xp":20} }
```

## 5️⃣ Polinomial atau BUKAN? (Aturan Emas)

Bagian ini penting untuk dikuasai karena soal "manakah yang merupakan polinomial" hampir selalu muncul.

> **Aturan emas:** Sebuah bentuk adalah polinomial **hanya jika** setiap variabelnya berpangkat **bilangan bulat tak negatif** ($0,1,2,3,\dots$), dan variabel **tidak berada di penyebut** maupun **di dalam tanda akar**.

Mari uji beberapa "tersangka":

| Bentuk | Polinomial? | Alasan |
|--------|:-----------:|--------|
| $3x^2 - 7x + 1$ | ✅ Ya | semua pangkat bulat $\geq 0$ |
| $\dfrac{5}{x} + 2$ | ❌ Bukan | $\frac{5}{x} = 5x^{-1}$, pangkat **negatif** |
| $\sqrt{x} + 3$ | ❌ Bukan | $\sqrt{x} = x^{1/2}$, pangkat **pecahan** |
| $x^3 + \dfrac{2}{x^2}$ | ❌ Bukan | $\frac{2}{x^2} = 2x^{-2}$, pangkat negatif |
| $4x^2 + \dfrac{x}{3}$ | ✅ Ya | $\frac{x}{3} = \frac{1}{3}x$; **konstanta** di penyebut boleh! |
| $2^x + 1$ | ❌ Bukan | variabel jadi **pangkat** (ini eksponen, bukan polinomial) |
| $5$ | ✅ Ya | konstanta = polinomial derajat 0 |
| $x^2\sqrt{3} - x$ | ✅ Ya | $\sqrt{3}$ hanya **koefisien**, variabelnya tetap berpangkat bulat |

> ⚠️ **Dua jebakan halus:**
> 1. **Variabel di penyebut** → bukan polinomial ($\frac{1}{x}$). Tapi **angka di penyebut** → boleh ($\frac{x}{3}$).
> 2. **Akar dari angka** ($\sqrt{3}$) sebagai koefisien → boleh. **Akar dari variabel** ($\sqrt{x}$) → bukan polinomial.

⚡ **Tips cepat:** Ubah setiap suku ke bentuk $x^{\text{pangkat}}$. Kalau ada **satu saja** pangkat yang negatif atau pecahan → **bukan** polinomial.

---

<!-- COMPONENT: Activity Categorize -->
> **Latihan Interaktif — Kategorisasi.** Kelompokkan tiap bentuk ke dalam **Polinomial** atau **Bukan Polinomial** dengan menerapkan aturan pangkat.

```json
{ "type":"activity", "widget":"categorize", "id":"01-act-polinomial", "competency":"K1",
  "prompt":"Seret tiap bentuk ke kategori yang benar",
  "categories":["Polinomial","Bukan Polinomial"],
  "items":[
    ["$3x^2-\\sqrt{7}$","Polinomial"],
    ["$\\frac{3}{x}+1$","Bukan Polinomial"],
    ["$2^x$","Bukan Polinomial"],
    ["$\\frac{x}{3}+4x^2$","Polinomial"],
    ["$\\sqrt{x}+3$","Bukan Polinomial"],
    ["$9$","Polinomial"]
  ],
  "reward":{"xp":25} }
```

## 📘 Contoh Bertingkat

### 🟢 Contoh Sederhana

**Contoh S1.** Tentukan banyak suku, derajat, dan konstanta dari $4x^2 - 7x + 9$.

*Pembahasan.*
- Suku: $4x^2$, $-7x$, $9$ → **3 suku** (trinomial).
- Pangkat tertinggi $2$ → **derajat 2** (kuadrat).
- Suku tanpa variabel → **konstanta = 9**.

**Contoh S2.** Sebutkan koefisien $x^3$ dan koefisien $x$ pada $x^3 - 6x^2 + 5x - 8$.

*Pembahasan.*
- Koefisien $x^3$: karena ditulis $x^3$ tanpa angka, koefisiennya $= \mathbf{1}$.
- Koefisien $x$: sukunya $+5x$, jadi koefisiennya $= \mathbf{5}$.

**Contoh S3.** Rapikan $ -2 + x^4 - 3x + x^2$ ke bentuk baku, lalu sebutkan derajat & koefisien utama.

*Pembahasan.*
Urutkan dari pangkat tertinggi:
$$x^4 + x^2 - 3x - 2$$
Derajat $= 4$, koefisien utama $= 1$ (di depan $x^4$).

### 🟡 Contoh Sedang

**Contoh M1.** Manakah yang **bukan** polinomial? (a) $3x^4 - x$ (b) $\frac{2}{x} + 5$ (c) $x^2 - \sqrt{2}\,x + 1$

*Pembahasan.*
- (a) pangkat $4$ dan $1$, keduanya bulat $\geq 0$ → polinomial.
- (b) $\frac{2}{x} = 2x^{-1}$, pangkat negatif → **BUKAN polinomial**.
- (c) $\sqrt{2}$ hanya koefisien, variabel $x$ berpangkat $2$ dan $1$ → polinomial.

Jawaban: **(b)**.

**Contoh M2.** Diketahui polinomial $P(x) = 3x^5 - 4x^3 + 6x - 10$. Isilah:
koefisien $x^5=\dots$, koefisien $x^4=\dots$, koefisien $x^3=\dots$, konstanta $=\dots$

*Pembahasan.*
- Koefisien $x^5 = 3$.
- Koefisien $x^4 = \mathbf{0}$ — perhatikan, **tidak ada** suku $x^4$, artinya koefisiennya $0$! Ini sangat penting untuk Horner nanti.
- Koefisien $x^3 = -4$.
- Konstanta $= -10$.

> 💡 **Ide kunci:** suku yang "hilang" bukan berarti tidak ada — koefisiennya bernilai $0$. Menuliskan $3x^5 + 0x^4 - 4x^3 + 0x^2 + 6x - 10$ akan sangat membantu pada Bab 03.

**Contoh M3.** Sebuah polinomial berderajat 3, berupa trinomial, koefisien utama $2$, konstanta $-5$, dan tidak memuat suku $x^2$. Tuliskan satu kemungkinan bentuknya.

*Pembahasan.*
- Derajat 3 → ada $x^3$; koefisien utama $2$ → $2x^3$.
- Trinomial → tepat 3 suku. Konstanta $-5$ sudah 1 suku, $2x^3$ suku kedua → butuh 1 suku lagi.
- Tidak memuat $x^2$ → suku ketiga haruslah suku $x$ (misal $7x$).

Satu kemungkinan: $\;2x^3 + 7x - 5$. (Jawaban tidak tunggal, asal memenuhi semua syarat.)

### 🧠 Contoh HOTS

**Contoh H1.** Diberikan bentuk $\;f(x) = (m-2)x^3 + 4x^2 - x + 1$. Agar $f(x)$ merupakan polinomial **berderajat 2**, tentukan nilai $m$.

*Pembahasan.*
Supaya derajatnya turun jadi 2, suku $x^3$ harus **hilang**. Suku $x^3$ hilang jika koefisiennya nol:
$$m - 2 = 0 \;\Rightarrow\; m = 2$$
Cek: dengan $m=2$, $f(x) = 0\cdot x^3 + 4x^2 - x + 1 = 4x^2 - x + 1$, benar berderajat 2. Jawaban: $\mathbf{m = 2}$.

> 💡 Pelajaran: **koefisien utama tidak boleh nol** justru dipakai terbalik di sini — kita *sengaja* menolkan agar derajat turun.

**Contoh H2.** Bentuk $g(x) = x^{2a-1} + 3x^2 - 5$ merupakan polinomial berderajat 5. Tentukan nilai $a$.

*Pembahasan.*
Agar derajatnya 5, pangkat tertinggi harus $5$. Suku $3x^2$ berderajat 2, jadi suku $x^{2a-1}$ lah yang mesti berderajat 5:
$$2a - 1 = 5 \;\Rightarrow\; 2a = 6 \;\Rightarrow\; a = 3$$
Cek juga syarat "bilangan bulat $\geq 0$": dengan $a=3$, pangkatnya $2(3)-1 = 5$, valid. Jawaban: $\mathbf{a = 3}$.

**Contoh H3.** Nyatakan **benar/salah** dengan alasan: "Jumlah dua polinomial berderajat 3 selalu menghasilkan polinomial berderajat 3."

*Pembahasan.*
**Salah.** Derajat hasil penjumlahan bisa **turun** jika suku pemimpinnya saling meniadakan.
Contoh penyangkal: $\;(x^3 + x) + (-x^3 + 2) = x + 2$, yang berderajat **1**, bukan 3.
Jadi pernyataannya tidak selalu benar. (Ini bekal penting untuk Bab 02.)

---

<!-- COMPONENT: Activity Ordering -->
> **Latihan Interaktif — Mengurutkan.** Susun bentuk berikut dari derajat **terkecil ke terbesar**.

```json
{ "type":"activity", "widget":"ordering", "id":"01-act-urut", "competency":"K1",
  "prompt":"Urutkan dari derajat TERKECIL ke TERBESAR",
  "options":["$5$","$2x-1$","$x^2+3$","$x^4-x$"],
  "answer_order":[0,1,2,3],
  "reward":{"xp":20} }
```

<!-- COMPONENT: Activity Cloze -->
> **Latihan Interaktif — Melengkapi.** Isi bagian rumpang dengan angka yang tepat.

```json
{ "type":"activity", "widget":"cloze", "id":"01-act-cloze", "competency":"K1",
  "prompt":"Lengkapi kalimat kunci",
  "template":"Pada $2x^3+5x^2-4x+7$: derajatnya {{0}}, koefisien utamanya {{1}}, dan konstantanya {{2}}.",
  "answers":["3","2","7"],
  "reward":{"xp":20} }
```

## ⚠️ Kesalahan yang Sering Dilakukan Siswa

1. **Lupa tanda negatif pada koefisien.** Pada $x^2 - 4x$, koefisien $x$ adalah $-4$, bukan $4$.
2. **Mengira koefisien $x^2$ pada $x^2$ adalah $2$.** Salah — koefisiennya $1$; angka $2$ itu pangkat.
3. **Menganggap suku yang hilang tidak ada koefisiennya.** Pada $x^3 + 1$, koefisien $x^2$ dan $x$ adalah $0$, bukan "tidak ada".
4. **Salah menentukan derajat karena belum dirapikan.** Selalu urutkan ke bentuk baku dulu.
5. **Mengira $\frac{x}{3}$ bukan polinomial.** Salah — yang dilarang variabel di **penyebut** ($\frac{3}{x}$), bukan angka di penyebut.
6. **Mengira $\sqrt{3}\,x$ bukan polinomial.** Salah — $\sqrt{3}$ hanya koefisien; yang dilarang adalah $\sqrt{x}$.
7. **Menghitung derajat = banyak suku.** Dua hal berbeda! $x^5 + 1$ punya 2 suku tapi derajat 5.

---

<!-- COMPONENT: Activity ErrorHunt -->
> **Latihan Interaktif — Menemukan Kesalahan.** Cermati pengerjaan berikut; terdapat **satu langkah yang keliru**. Tandai langkah tersebut.

```json
{ "type":"activity", "widget":"error-hunt", "id":"01-act-error", "competency":"K1",
  "prompt":"Menentukan derajat & koefisien utama dari $-2 + x^4 - 3x + x^2$. Manakah langkah yang SALAH?",
  "steps":[
    "Rapikan ke bentuk baku: $x^4 + x^2 - 3x - 2$.",
    "Derajat = 4 (pangkat tertinggi).",
    "Koefisien utama = 4.",
    "Konstanta = -2."
  ],
  "wrong_index":2,
  "why":"Koefisien utama adalah angka di depan $x^4$, yaitu $1$ — bukan $4$. Angka 4 itu pangkatnya, bukan koefisiennya.",
  "reward":{"xp":25} }
```

## ⚡ Tips Cepat

- **Rapikan dulu** ke bentuk baku sebelum apa pun.
- Untuk cek polinomial: **tulis ulang tiap suku sebagai $x^{\text{pangkat}}$**. Ada pangkat negatif/pecahan? Bukan polinomial.
- **Tuliskan koefisien nol** untuk suku yang hilang — kebiasaan ini sangat membantu pada pembagian Horner.
- Ingat rima: **"Penyebut variabel & akar variabel → tanda bukan polinomial."**
- Derajat $n$ → **maksimal $n$ akar**. Simpan fakta ini.

---

## ✅ Ringkasan Sub Materi

- **Polinomial** = suku banyak; bentuk umum $a_nx^n + \dots + a_1x + a_0$ dengan pangkat **bilangan bulat $\geq 0$**.
- **Unsur:** variabel (huruf), koefisien (angka pengali), konstanta (suku tanpa variabel), suku (bagian dipisah $+/-$).
- **Derajat** = pangkat tertinggi. **Koefisien utama** = koefisien suku berderajat tertinggi.
- **Jenis:** menurut banyak suku (mono/bi/tri) & menurut derajat (konstan/linear/kuadrat/kubik/…).
- **Bukan polinomial** jika ada variabel berpangkat negatif/pecahan, variabel di penyebut, atau variabel di dalam akar.

---

## 📝 Latihan Bertingkat

Kerjakan dulu di kertas, baru buka pembahasan. Blok JSON di tiap set adalah data untuk mesin kuis aplikasi.

<!-- COMPONENT: Quiz -->
<!-- Render 'set_mudah' sebagai kuis isian/pilihan. Ambil field: id, type, question (KaTeX), options, answer, explanation. Simpan skor per set ke Local Storage. -->

### 🟢 Set A — 10 Soal Mudah

1. Tentukan derajat $5x^3 - 2x + 1$.
2. Berapa banyak suku pada $x^4 - x^3 + x^2 - x + 1$?
3. Sebutkan konstanta dari $2x^2 - 9$.
4. Sebutkan koefisien $x$ pada $7x^2 - 3x + 4$.
5. Sebutkan koefisien utama dari $-6x^5 + x^2$.
6. Polinomial derajat 1 disebut apa?
7. $x^2 - 16$ termasuk jenis apa berdasarkan banyak suku?
8. Rapikan $3 - x^2 + 2x$ ke bentuk baku.
9. Berapa derajat dari konstanta $12$?
10. Sebutkan koefisien $x^2$ pada $x^3 + x^2 - x$.

```json
{
  "set_id": "01-set-A-mudah",
  "level": "mudah",
  "items": [
    {"id": "A1", "type": "short", "question": "Derajat dari $5x^3 - 2x + 1$", "answer": "3", "explanation": "Pangkat tertinggi adalah 3."},
    {"id": "A2", "type": "short", "question": "Banyak suku pada $x^4 - x^3 + x^2 - x + 1$", "answer": "5", "explanation": "Ada 5 bagian dipisah tanda +/-."},
    {"id": "A3", "type": "short", "question": "Konstanta dari $2x^2 - 9$", "answer": "-9", "explanation": "Suku tanpa variabel adalah -9 (tanda ikut)."},
    {"id": "A4", "type": "short", "question": "Koefisien $x$ pada $7x^2 - 3x + 4$", "answer": "-3", "explanation": "Sukunya -3x, jadi koefisien -3."},
    {"id": "A5", "type": "short", "question": "Koefisien utama dari $-6x^5 + x^2$", "answer": "-6", "explanation": "Suku pangkat tertinggi -6x^5."},
    {"id": "A6", "type": "mc", "question": "Polinomial derajat 1 disebut", "options": ["Konstan", "Linear", "Kuadrat", "Kubik"], "answer": "Linear", "explanation": "Derajat 1 = linear."},
    {"id": "A7", "type": "mc", "question": "$x^2 - 16$ berdasarkan banyak suku adalah", "options": ["Monomial", "Binomial", "Trinomial", "Kuadrat"], "answer": "Binomial", "explanation": "2 suku = binomial."},
    {"id": "A8", "type": "short", "question": "Bentuk baku dari $3 - x^2 + 2x$", "answer": "-x^2 + 2x + 3", "explanation": "Urutkan pangkat tertinggi ke terendah."},
    {"id": "A9", "type": "short", "question": "Derajat konstanta $12$", "answer": "0", "explanation": "12 = 12x^0, derajat 0."},
    {"id": "A10", "type": "short", "question": "Koefisien $x^2$ pada $x^3 + x^2 - x$", "answer": "1", "explanation": "x^2 = 1·x^2, koefisien 1."}
  ]
}
```

<details><summary><strong>Pembahasan Set A</strong></summary>

1. **3** — pangkat tertinggi. 2. **5 suku**. 3. **$-9$** (tanda ikut). 4. **$-3$**. 5. **$-6$** (koef. $x^5$). 6. **Linear**. 7. **Binomial** (2 suku). 8. $-x^2 + 2x + 3$. 9. **0** ($12=12x^0$). 10. **1** ($x^2 = 1\cdot x^2$).
</details>

### 🟡 Set B — 10 Soal Sedang

1. Tentukan derajat & koefisien utama dari $2x^2 - x^5 + 7$.
2. Pada $4x^4 - x^2 + 6$, berapa koefisien $x^3$?
3. Manakah polinomial? (a) $\frac{3}{x}+x$ (b) $x^3 - \sqrt{5}$
4. Klasifikasikan $x^3 - 8$ menurut banyak suku **dan** derajat.
5. Tulis $x^4 - 1$ dengan menyertakan semua koefisien nol.
6. Bentuk $x^{n} - 3$ berderajat 4. Berapa $n$?
7. Sebutkan koefisien $x^2$ dan konstanta pada $\frac{1}{2}x^2 - 3x + \frac{5}{2}$.
8. Apakah $2^x + x^2$ polinomial? Jelaskan.
9. Sebuah binomial berderajat 3 dengan koefisien utama $-1$ dan konstanta $8$. Tulis bentuknya.
10. Urutkan menurut derajat (kecil→besar): $x^2$, $5$, $x^4-x$, $2x-1$.

```json
{
  "set_id": "01-set-B-sedang",
  "level": "sedang",
  "items": [
    {"id": "B1", "type": "short", "question": "Derajat & koef. utama $2x^2 - x^5 + 7$", "answer": "derajat 5, koefisien -1", "explanation": "Suku pemimpin -x^5."},
    {"id": "B2", "type": "short", "question": "Koefisien $x^3$ pada $4x^4 - x^2 + 6$", "answer": "0", "explanation": "Tidak ada suku x^3 → koefisien 0."},
    {"id": "B3", "type": "mc", "question": "Manakah polinomial?", "options": ["$\\frac{3}{x}+x$", "$x^3 - \\sqrt{5}$", "Keduanya", "Tidak ada"], "answer": "$x^3 - \\sqrt{5}$", "explanation": "3/x = 3x^{-1} bukan polinomial; √5 hanya konstanta."},
    {"id": "B4", "type": "short", "question": "Klasifikasi $x^3 - 8$ (banyak suku & derajat)", "answer": "binomial, kubik (derajat 3)", "explanation": "2 suku, pangkat tertinggi 3."},
    {"id": "B5", "type": "short", "question": "$x^4 - 1$ dengan semua koefisien", "answer": "x^4 + 0x^3 + 0x^2 + 0x - 1", "explanation": "Sisipkan suku hilang berkoefisien 0."},
    {"id": "B6", "type": "short", "question": "$x^n - 3$ berderajat 4, maka n =", "answer": "4", "explanation": "Pangkat tertinggi = 4."},
    {"id": "B7", "type": "short", "question": "Koef. $x^2$ & konstanta pada $\\frac{1}{2}x^2 - 3x + \\frac{5}{2}$", "answer": "koef 1/2, konstanta 5/2", "explanation": "Pecahan sebagai koefisien diperbolehkan."},
    {"id": "B8", "type": "mc", "question": "Apakah $2^x + x^2$ polinomial?", "options": ["Ya", "Tidak"], "answer": "Tidak", "explanation": "2^x = variabel sebagai pangkat (eksponensial), bukan polinomial."},
    {"id": "B9", "type": "short", "question": "Binomial derajat 3, koef utama -1, konstanta 8", "answer": "-x^3 + 8", "explanation": "Dua suku: -x^3 dan +8."},
    {"id": "B10", "type": "short", "question": "Urut derajat kecil→besar: $x^2, 5, x^4-x, 2x-1$", "answer": "5 (0), 2x-1 (1), x^2 (2), x^4-x (4)", "explanation": "Bandingkan pangkat tertinggi tiap bentuk."}
  ]
}
```

<details><summary><strong>Pembahasan Set B</strong></summary>

1. Rapikan: $-x^5 + 2x^2 + 7$ → derajat **5**, koef. utama **$-1$**.
2. Tidak ada suku $x^3$ → koefisien **0**.
3. (a) $\frac{3}{x}=3x^{-1}$ pangkat negatif → bukan. (b) $\sqrt5$ konstanta, $x^3$ pangkat bulat → **polinomial**.
4. $x^3-8$: **binomial** (2 suku) & **kubik** (derajat 3).
5. $x^4 + 0x^3 + 0x^2 + 0x - 1$.
6. $n = 4$.
7. Koef. $x^2 = \frac12$, konstanta $= \frac52$ (pecahan sebagai koefisien sah).
8. **Bukan** — $2^x$ punya variabel di pangkat (fungsi eksponen), melanggar aturan emas.
9. $-x^3 + 8$.
10. Derajat: $5\,(0)$, $2x-1\,(1)$, $x^2\,(2)$, $x^4-x\,(4)$. Urutan: $5,\;2x-1,\;x^2,\;x^4-x$.
</details>

### 🔴 Set C — 10 Soal Sulit

1. $f(x)=(2k-6)x^4 + 3x^2 - 1$ berderajat 2. Tentukan $k$.
2. $x^{a+2} + x^3 - 4$ adalah polinomial berderajat 3 dan koefisien $x^5$ bernilai $1$. Mungkinkah? Jelaskan.
3. Diketahui $P(x)$ trinomial derajat 4, konstanta $3$, tanpa suku $x^3$ dan tanpa suku $x$. Tulis bentuk umum $P(x)$ (pakai parameter).
4. Bentuk $\frac{x^2 - 1}{x - 1}$: apakah polinomial? Jelaskan dengan menyederhanakan.
5. Jika $A(x)$ berderajat 5 dan $B(x)$ berderajat 3, berapa derajat maksimum dan minimum dari $A(x)+B(x)$?
6. Tentukan semua bilangan bulat $n \geq 0$ agar $x^{n-2}$ merupakan suku polinomial yang sah.
7. $g(x) = px^3 + qx^2 + 5$ adalah binomial. Apa syarat $p$ dan $q$?
8. Berapa derajat dari $(x^2+1)(x^3 - x)$ tanpa menjabarkan penuh?
9. Bentuk $x^{2}+ x^{|m|} + 1$ berderajat 2. Tentukan semua nilai bulat $m$ yang mungkin.
10. Benar/Salah: "Setiap konstanta bukan nol adalah polinomial berderajat 0." Jelaskan kasus konstanta $0$.

```json
{
  "set_id": "01-set-C-sulit",
  "level": "sulit",
  "items": [
    {"id": "C1", "type": "short", "question": "$(2k-6)x^4 + 3x^2 - 1$ berderajat 2, maka k =", "answer": "3", "explanation": "Suku x^4 harus hilang: 2k-6=0 → k=3."},
    {"id": "C2", "type": "mc", "question": "$x^{a+2}+x^3-4$ derajat 3 DAN koef x^5 =1. Mungkin?", "options": ["Mungkin", "Tidak mungkin"], "answer": "Tidak mungkin", "explanation": "Koef x^5=1 butuh a+2=5→a=3, tapi lalu derajat jadi 5, bukan 3. Kontradiksi."},
    {"id": "C3", "type": "short", "question": "Trinomial derajat 4, konstanta 3, tanpa x^3 & x", "answer": "ax^4 + bx^2 + 3, a≠0, b≠0", "explanation": "Tiga suku tersisa: x^4, x^2, konstanta."},
    {"id": "C4", "type": "mc", "question": "$\\frac{x^2-1}{x-1}$ polinomial?", "options": ["Ya (=x+1)", "Tidak"], "answer": "Ya (=x+1)", "explanation": "Faktorkan: (x-1)(x+1)/(x-1)=x+1 untuk x≠1."},
    {"id": "C5", "type": "short", "question": "Derajat maks & min dari A(deg5)+B(deg3)", "answer": "maks 5, min 5", "explanation": "Suku x^5 hanya dari A, tak bisa hilang → derajat tetap 5."},
    {"id": "C6", "type": "short", "question": "Semua n≥0 agar $x^{n-2}$ suku sah", "answer": "n ≥ 2", "explanation": "Pangkat n-2 harus ≥0 → n≥2."},
    {"id": "C7", "type": "short", "question": "$px^3+qx^2+5$ binomial. Syarat p,q?", "answer": "tepat satu dari p,q nol (bukan keduanya)", "explanation": "Binomial = 2 suku; konstanta 5 sudah satu."},
    {"id": "C8", "type": "short", "question": "Derajat $(x^2+1)(x^3-x)$", "answer": "5", "explanation": "Jumlahkan derajat: 2+3=5."},
    {"id": "C9", "type": "short", "question": "$x^2+x^{|m|}+1$ derajat 2, semua m bulat", "answer": "m ∈ {-2,-1,0,1,2}", "explanation": "Butuh |m|≤2 agar tak melebihi derajat 2; |m| juga bilangan bulat ≥0. Semua m dgn |m|≤2."},
    {"id": "C10", "type": "mc", "question": "'Setiap konstanta ≠0 adalah polinomial derajat 0.' Kasus 0?", "options": ["Benar; 0 = polinomial nol, derajatnya tak terdefinisi", "Salah"], "answer": "Benar; 0 = polinomial nol, derajatnya tak terdefinisi", "explanation": "Konstanta 0 adalah 'polinomial nol', derajatnya biasanya tak didefinisikan (atau -∞)."}
  ]
}
```

<details><summary><strong>Pembahasan Set C</strong></summary>

1. Agar derajat 2, suku $x^4$ hilang: $2k-6=0 \Rightarrow k=3$.
2. **Tidak mungkin.** Koef $x^5=1$ menuntut $a+2=5\Rightarrow a=3$, tapi ini membuat sukunya $x^5$ sehingga derajat jadi 5, bertentangan dengan "derajat 3". Kontradiksi.
3. Suku yang boleh: $x^4$, $x^2$, konstanta. Bentuk: $P(x)=ax^4 + bx^2 + 3$ dengan $a\neq0$, $b\neq0$ (agar tepat trinomial).
4. Faktorkan: $\frac{(x-1)(x+1)}{x-1} = x+1$ (untuk $x\neq1$). Hasil sederhananya **polinomial** $x+1$.
5. Suku $x^5$ hanya berasal dari $A$, tak ada pasangan untuk dihilangkan → derajat selalu tepat **5** (maks $=$ min $=5$).
6. Pangkat $n-2 \geq 0 \Rightarrow n \geq 2$.
7. Konstanta $5$ satu suku; agar binomial (2 suku), **tepat satu** dari $p,q$ boleh nol, tidak keduanya, dan tidak keduanya tak-nol. (Jika $p,q$ keduanya tak-nol → trinomial; keduanya nol → binomial? tidak, jadi monomial $5$.) Jadi: tepat satu dari $p,q$ bernilai nol.
8. Derajat hasil kali $=$ jumlah derajat $=2+3=\mathbf5$.
9. $|m|$ selalu bilangan bulat $\geq0$ (aturan pangkat aman). Agar derajat tetap 2, butuh $|m|\leq2$. Maka $m\in\{-2,-1,0,1,2\}$.
10. **Benar** untuk konstanta tak-nol (mis. $7=7x^0$). Kasus konstanta **$0$** istimewa: disebut **polinomial nol**, derajatnya **tak terdefinisi** (kadang ditulis $-\infty$).
</details>

### 🧠 Set D — 5 Soal HOTS

1. Buktikan dengan contoh bahwa hasil kali dua binomial bisa berupa binomial (bukan selalu trinomial).
2. Bentuk $f(x)=(m^2-4)x^3 + (m-2)x^2 + 1$. Tentukan $m$ agar $f$ berderajat **tepat 2**.
3. Tentukan syarat $a,b$ agar $\frac{ax^3 + bx^2}{x^2}$ merupakan polinomial.
4. Sebuah polinomial derajat 4 mempunyai koefisien utama $2$, konstanta sama dengan koefisien utama, dan jumlah semua koefisiennya $0$. Jika hanya memuat suku $x^4$, $x$, dan konstanta, tentukan koefisien $x$.
5. Diberi $P(x) = x^3 + cx + d$. Diketahui $P(0)=5$ dan koefisien $x$ adalah dua kali konstanta. Tentukan $c$ dan $d$.

```json
{
  "set_id": "01-set-D-hots",
  "level": "hots",
  "items": [
    {"id": "D1", "type": "short", "question": "Contoh hasil kali dua binomial berupa binomial", "answer": "(x-1)(x+1)=x^2-1", "explanation": "Selisih kuadrat menghasilkan 2 suku."},
    {"id": "D2", "type": "short", "question": "$(m^2-4)x^3+(m-2)x^2+1$ berderajat tepat 2, m=", "answer": "m=-2", "explanation": "Butuh m^2-4=0 (m=±2) TAPI m-2≠0. Maka m=-2."},
    {"id": "D3", "type": "short", "question": "Syarat a,b agar $\\frac{ax^3+bx^2}{x^2}$ polinomial", "answer": "berlaku untuk semua a,b (hasil = ax + b)", "explanation": "Tiap suku habis dibagi x^2 → ax+b, selalu polinomial."},
    {"id": "D4", "type": "short", "question": "Koefisien x (lihat soal)", "answer": "-4", "explanation": "2 + k + 2 = 0 → k = -4."},
    {"id": "D5", "type": "short", "question": "P(x)=x^3+cx+d, P(0)=5, c=2d", "answer": "d=5, c=10", "explanation": "P(0)=d=5; c=2d=10."}
  ]
}
```

<details><summary><strong>Pembahasan Set D</strong></summary>

1. Ambil $(x-1)(x+1) = x^2 - 1$ — hanya **2 suku** (suku $x$ saling meniadakan). Terbukti hasil kali dua binomial bisa binomial.
2. Agar derajat **tepat 2**: suku $x^3$ harus hilang → $m^2-4=0 \Rightarrow m=\pm2$. Tapi suku $x^2$ **tidak boleh** ikut hilang → $m-2\neq0 \Rightarrow m\neq2$. Maka $m=\mathbf{-2}$. (Cek: $m=-2$ beri $0\cdot x^3 + (-4)x^2 + 1 = -4x^2+1$, derajat 2. ✔)
3. $\frac{ax^3+bx^2}{x^2} = \frac{ax^3}{x^2} + \frac{bx^2}{x^2} = ax + b$. Setiap suku habis dibagi, hasilnya $ax+b$ — **selalu polinomial** untuk sembarang $a,b$.
4. Bentuk: $2x^4 + kx + c$. Konstanta $=$ koef utama $\Rightarrow c=2$. Jumlah semua koefisien $=0$: $2 + k + 2 = 0 \Rightarrow k=\mathbf{-4}$.
5. $P(0)=d=5$. Koefisien $x$ dua kali konstanta: $c = 2d = 2(5)=10$. Jadi $c=10,\ d=5$.
</details>

### 🏆 Set E — 5 Soal Model TKA

> Set ini melatih pola pikir TKA: baca cepat, kenali unsur, jangan terjebak.

1. **(Pemodelan)** Penambahan volume drum saat panas: $V(T) = 0{,}05\,T^3 + 0{,}4\,T^2 + 20\,T$. Tentukan **derajat** dan **koefisien utama** fungsi ini, serta jelaskan makna "tidak ada konstanta" secara konteks.
2. **(Konteks saham)** Banyak saham dimodelkan $f(x) = x^3 - 70x^2 - 600x + 74{.}000$. Sebutkan derajat, koefisien $x^2$, dan konstanta. Apa arti konstanta $74{.}000$ dalam konteks?
3. **(Klasifikasi cepat)** Di antara berikut, ada berapa yang **merupakan** polinomial? $\ \dfrac{5}{x}+1,\ \ 3x^2 - \sqrt{7},\ \ x^{1/2}+x,\ \ 2^x,\ \ 9,\ \ x^4 - x^{-1}$
4. **(Penalaran derajat)** Diketahui $A(x)$ berderajat 4 dan $B(x)$ berderajat 4. Manakah yang **pasti benar** tentang derajat $A(x) - B(x)$? (a) selalu 4 (b) paling banyak 4 (c) selalu 0 (d) paling sedikit 4
5. **(Parameter)** Bentuk $h(x) = (2p-1)x^5 + 3x^3 - x + p$ merupakan polinomial berderajat 3. Tentukan $p$ lalu tentukan konstantanya.

```json
{
  "set_id": "01-set-E-tka",
  "level": "tka",
  "items": [
    {"id": "E1", "type": "short", "source": "TKA-drum", "question": "Derajat & koef utama $V(T)=0{,}05T^3+0{,}4T^2+20T$", "answer": "derajat 3, koef utama 0,05; konstanta 0 artinya pada T=0 tak ada penambahan volume", "explanation": "Pada suhu 0°C (acuan) belum ada pemuaian → V(0)=0."},
    {"id": "E2", "type": "short", "source": "TKA-saham", "question": "Derajat, koef x^2, konstanta dari $x^3-70x^2-600x+74{.}000$", "answer": "derajat 3, koef x^2 = -70, konstanta 74000", "explanation": "Konstanta = nilai saat x=0."},
    {"id": "E3", "type": "mc", "question": "Berapa yang merupakan polinomial dari 6 bentuk", "options": ["1", "2", "3", "4"], "answer": "2", "explanation": "Hanya 3x^2-√7 dan 9. Sisanya punya pangkat negatif/pecahan atau eksponensial."},
    {"id": "E4", "type": "mc", "question": "Tentang derajat A(deg4)-B(deg4)", "options": ["selalu 4", "paling banyak 4", "selalu 0", "paling sedikit 4"], "answer": "paling banyak 4", "explanation": "Suku x^4 bisa saling hapus → derajat bisa turun; maksimum tetap 4."},
    {"id": "E5", "type": "short", "question": "$(2p-1)x^5+3x^3-x+p$ berderajat 3, cari p & konstanta", "answer": "p=1/2, konstanta = 1/2", "explanation": "2p-1=0 → p=1/2; konstanta = p = 1/2."}
  ]
}
```

<details><summary><strong>Pembahasan Set E</strong></summary>

**E1.** Pangkat tertinggi $3$ → **derajat 3**; koefisien utama $=0{,}05$. Tidak ada konstanta artinya $V(0)=0$: pada suhu acuan ($T=0$), belum terjadi pemuaian sama sekali — masuk akal secara fisika. *(Soal ini kita bedah operasinya di Bab 02.)*

**E2.** Derajat **3**; koefisien $x^2 = -70$ (tanda ikut!); konstanta $= 74{.}000$. Konstanta adalah nilai $f(0)$ — banyak saham "awal" ketika $x=0$. *(Soal ini kita lanjutkan di Bab 02 & 06.)*

**E3.** Uji satu per satu:
- $\frac{5}{x}+1 = 5x^{-1}+1$ → pangkat negatif → **bukan**.
- $3x^2 - \sqrt7$ → $\sqrt7$ konstanta → **polinomial** ✔
- $x^{1/2}+x$ → pangkat pecahan → **bukan**.
- $2^x$ → variabel di pangkat → **bukan**.
- $9$ → konstanta → **polinomial** ✔
- $x^4 - x^{-1}$ → pangkat $-1$ → **bukan**.

Jumlah yang polinomial: **2**.

**E4.** Suku $x^4$ dari $A$ dan $B$ bisa saling meniadakan bila koefisiennya sama, sehingga derajat bisa turun. Yang **pasti** benar: derajat **paling banyak 4**. Jawaban **(b)**.

**E5.** Agar derajat 3, suku $x^5$ hilang: $2p-1=0 \Rightarrow p=\tfrac12$. Konstanta $=p=\tfrac12$. Cek: $h(x)=0\cdot x^5 + 3x^3 - x + \tfrac12$, derajat 3 ✔.
</details>

---

## 🏆 Tantangan Akhir Bab 1 — Uji Kompetensi

<!-- COMPONENT: Tantangan Akhir Bab
     DEVELOPER: render sebagai sesi soal berwaktu dengan rekap capaian (bintang, poin, waktu terbaik).
     Framing tetap sebagai asesmen/umpan balik belajar, bukan permainan peran. -->
> Kerjakan rangkaian soal berikut dalam mode berwaktu untuk menguji penguasaan Anda atas konsep dasar polinomial. Perolehan bintang dan poin merupakan umpan balik atas ketepatan serta kecepatan; sistem menyimpan capaian terbaik Anda sebagai catatan kemajuan belajar.

```json
{ "type":"challenge", "id":"01-tantangan", "competency":"K1",
  "title":"Tantangan Akhir Bab 1: Konsep Dasar Polinomial",
  "mode":"timed", "time_limit_sec":150, "shuffle":true,
  "pool":["01-act-derajat","01-act-jenis","01-act-polinomial","01-act-urut","01-act-cloze","01-act-error","01-set-A-mudah"],
  "scoring":{"per_correct":10,"time_bonus":true},
  "stars":{"3":90,"2":70,"1":50},
  "reward":{"xp":80,"badge":"pengenal-polinomial"},
  "record":{"track_best_time":true,"track_best_score":true} }
```

---

## 📝 Refleksi

<!-- COMPONENT: Reflection -->

1. Dengan bahasa Anda sendiri, apa **satu aturan** yang membedakan polinomial dari bukan polinomial?
2. Kesalahan mana dari daftar "kesalahan umum" yang paling berpotensi Anda lakukan?
3. Kenapa penting menuliskan koefisien nol untuk suku yang hilang? (Petunjuk: pikirkan Bab 03.)

---

## ➡️ Persiapan Menuju Sub Materi Berikutnya

Pada bab ini, kita telah mempelajari cara **mengenali** polinomial beserta seluruh unsurnya sebagai fondasi materi berikutnya.

Di **Bab 02 — Operasi & Nilai Polinomial**, kita mulai "menghidupkan" polinomial: menjumlah, mengurang, mengalikan, dan yang paling penting — **menghitung nilainya** dengan substitusi. Di sinilah soal saham ($f(x)=x^3-70x^2-600x+74{.}000$) dan soal drum akan benar-benar kita selesaikan.

Bekal yang akan sangat berguna dari bab ini:
- Kebiasaan menulis **bentuk baku** & **koefisien nol**.
- Paham bahwa **konstanta = nilai saat $x=0$** (ini pintu masuk ke "nilai polinomial").

> Lanjutkan ke **Bab 02**.

<!-- COMPONENT: Summary -->
<!-- Progress bar: 2/8 selesai. Tombol "Lanjut ke Bab 02 →". -->
