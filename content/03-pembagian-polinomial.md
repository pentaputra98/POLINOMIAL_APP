---
id: "03-pembagian-polinomial"
slug: "pembagian-polinomial"
title: "Pembagian Polinomial"
order: 3
duration_min: 90
level: "Kelas XI - Kurikulum Merdeka"
track: "TKA Matematika Lanjut"
prerequisites:
  - "02-operasi-dan-nilai-polinomial"
competencies:
  - "K3: Membagi polinomial (bersusun, Horner, Horner-Kino)"
learning_objectives:
  - "Memahami algoritma pembagian f = P·H + S"
  - "Melakukan pembagian bersusun (porogapit)"
  - "Menggunakan skema Horner untuk pembagi (x-k) dan (ax-b)"
  - "Menangani pembagi kuadrat"
  - "Memilih metode tercepat sesuai bentuk pembagi"
tags: ["pembagian", "porogapit", "horner", "horner-kino", "hasil-bagi", "sisa"]
layout: "sub-materi"
sub_materi:
  - { id: "1", title: "Algoritma Pembagian" }
  - { id: "2", title: "Pembagian Bersusun" }
  - { id: "3", title: "Skema Horner" }
  - { id: "4", title: "Pembagi Kuadrat" }
  - { id: "5", title: "Memilih Metode" }
components:
  - "Info Cards"
  - "Sub Materi"
  - "Activity Guided"
  - "Activity HornerSteps"
  - "Activity Ordering"
  - "Activity ErrorHunt"
  - "Activity Matching"
  - "Activity TrueFalse"
  - "Quiz Cards"
  - "Tantangan Akhir Bab"
  - "Reflection"
activities:
  - "03-g1"
  - "03-m1"
  - "03-g2"
  - "03-m2"
  - "03-g3"
  - "03-m3"
  - "03-g4"
  - "03-m4"
  - "03-g5"
  - "03-m5"
challenge: "03-tantangan"
xp_available: 240
katex: true
---

# Bab 03 — Pembagian Polinomial

<!-- COMPONENT: Info Cards
     DEVELOPER: enam bagian di bawah dirender sebagai KARTU berwarna berbeda; klik -> POP-UP.
     Ikon Lucide: target, puzzle, package, clock, map, flame. -->

<details data-card="tujuan" data-icon="target">
<summary>🎯 Tujuan Pembelajaran</summary>

Setelah mempelajari bab ini, peserta didik diharapkan mampu:

1. Memahami dan menuliskan algoritma pembagian $f(x)=P(x)H(x)+S(x)$.
2. Melakukan pembagian bersusun (porogapit).
3. Menggunakan skema Horner untuk pembagi $(x-k)$ dan $(ax-b)$.
4. Menangani pembagian oleh polinomial kuadrat.
5. Memilih metode tercepat sesuai bentuk pembagi.

</details>

<details data-card="kompetensi" data-icon="puzzle">
<summary>🧩 Kompetensi</summary>

**K3 — Membagi polinomial (bersusun, Horner, Horner-Kino).**

</details>

<details data-card="prasyarat" data-icon="package">
<summary>📦 Prasyarat</summary>

- Bab 02: perkalian polinomial dan substitusi $f(k)$.
- Kebiasaan menuliskan **koefisien nol** untuk suku yang hilang (Bab 01).

</details>

<details data-card="waktu" data-icon="clock">
<summary>⏱️ Estimasi Waktu</summary>

**±90 menit.** Bab terpenting; kerjakan dengan cermat.

</details>

<details data-card="peta" data-icon="map">
<summary>🗺️ Peta Konsep</summary>

<!-- COMPONENT: Concept Map Mini
     DEVELOPER: render sebagai kartu/diagram interaktif yang dapat diklik menuju sub-materi. -->

```
Algoritma Pembagian → Bersusun → Horner → Pembagi Kuadrat → Memilih Metode
```

</details>

<details data-card="motivasi" data-icon="flame">
<summary>🔥 Motivasi</summary>

Setelah memahami Horner, pembagian polinomial menjadi bagian yang paling cepat dikerjakan. Terdapat pula temuan penting: **angka terakhir pada skema Horner ketika membagi dengan $(x-k)$ tepat sama dengan $f(k)$**. Menghitung nilai dan membagi ternyata proses yang sama — inilah cikal bakal Teorema Sisa pada Bab 04.

</details>

---

<!-- COMPONENT: Sub Materi
     DEVELOPER: judul sub-materi WAJIB sticky di bawah judul bab saat digulir. -->

## 1️⃣ Algoritma Pembagian

Pembagian polinomial bekerja seperti pembagian bilangan. Pada bilangan, $17 = 5\times3 + 2$; pada polinomial berlaku pola yang sama.

> **Algoritma Pembagian.** Untuk $f(x)$ dan pembagi $P(x)\neq0$, selalu ada **hasil bagi** $H(x)$ dan **sisa** $S(x)$ tunggal sehingga
> $$\htmlClass{hl-1}{f(x)} = \htmlClass{hl-2}{P(x)}\cdot \htmlClass{hl-3}{H(x)} + \htmlClass{hl-const}{S(x)}$$
> dengan **derajat sisa lebih kecil daripada derajat pembagi**.

Aturan derajat sisa menentukan bentuk jawaban:

| Pembagi | Derajat pembagi | Bentuk sisa |
|---------|:---------------:|-------------|
| $(x-k)$ atau $(ax-b)$ | 1 | konstanta |
| kuadrat, mis. $x^2+x+1$ | 2 | $rx+s$ |
| kubik | 3 | derajat $\leq 2$ |

**Cara memeriksa hasil:** hitung $P(x)\cdot H(x) + S(x)$; bila kembali menjadi $f(x)$, pekerjaan benar.

### 📘 Contoh

Hasil pembagian $2x^3-3x^2+4x-5$ oleh $(x-2)$ adalah $H(x)=2x^2+x+6$ dengan sisa $7$. Periksa:
$$(x-2)(2x^2+x+6) + 7 = 2x^3-3x^2+4x-12+7 = 2x^3-3x^2+4x-5 \;✓$$

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"03-g1", "competency":"K3",
  "title":"Menentukan bentuk sisa sebelum membagi",
  "prompt":"Suatu polinomial berderajat 4 akan dibagi oleh $x^2+x+1$. Tentukan bentuk sisanya.",
  "steps":[
    {"ask":"Langkah 1. Berapakah derajat pembagi $x^2+x+1$?","type":"mc","options":["$2$","$1$","$3$"],"answer":"$2$","feedback":"Benar, pangkat tertingginya 2."},
    {"ask":"Langkah 2. Menurut algoritma pembagian, derajat sisa harus ….","type":"mc","options":["Lebih kecil daripada 2","Sama dengan 2","Lebih besar daripada 2"],"answer":"Lebih kecil daripada 2","feedback":"Tepat. Derajat sisa selalu lebih kecil daripada derajat pembagi."},
    {"ask":"Langkah 3. Jadi, bentuk sisanya adalah ….","type":"mc","options":["$rx+s$","$rx^2+sx+t$","sebuah konstanta saja"],"answer":"$rx+s$","feedback":"Benar. Derajat paling tinggi yang diperbolehkan adalah 1."}
  ],
  "conclusion":"Mengetahui bentuk sisa sejak awal sangat membantu: pada soal TKA, sering kali kita cukup mencari r dan s tanpa menyelesaikan pembagian penuh.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity TrueFalse -->

```json
{ "type":"activity", "widget":"truefalse", "id":"03-m1", "competency":"K3",
  "prompt":"Tentukan nilai kebenaran tiap pernyataan.",
  "statements":[
    {"s":"Sisa pembagian selalu berderajat lebih kecil daripada pembagi.","a":true,"why":"Ini merupakan syarat pada algoritma pembagian."},
    {"s":"Membagi dengan $(x-k)$ selalu menghasilkan sisa berupa konstanta.","a":true,"why":"Derajat sisa harus lebih kecil dari 1, yaitu 0."},
    {"s":"Sisa boleh berderajat sama dengan pembagi.","a":false,"why":"Bila demikian, pembagian masih dapat dilanjutkan."},
    {"s":"Hasil pembagian dapat diperiksa melalui $P \\cdot H + S = f$.","a":true,"why":"Ini kebalikan dari algoritma pembagian."}
  ],
  "reward":{"xp":15} }
```

---

## 2️⃣ Pembagian Bersusun

Metode ini **paling universal** — berlaku untuk pembagi berbentuk apa pun.

<!-- VISUAL: Rumah pembagian porogapit
     DEVELOPER: WAJIB digambarkan sebagai BENTUK RUMAH pembagian (kurung siku terbalik) seperti
     pembagian bersusun bilangan, bukan teks biasa. Hasil bagi diletakkan di atas atap; polinomial
     yang dibagi berada di dalam rumah; pembagi di sebelah kiri. Animasikan siklus empat langkah:
     (1) bagi suku pemimpin, (2) kalikan ke seluruh pembagi, (3) kurangkan, (4) turunkan suku
     berikutnya. Sorot suku yang sedang aktif pada tiap langkah. -->

Siklusnya empat langkah dan diulang: **bagi → kali → kurang → turunkan**.

**Contoh.** Bagi $2x^3-3x^2+4x-5$ oleh $x-2$.

| Siklus | Bagi | Kali | Kurangkan → sisa sementara |
|:------:|------|------|-----------------------------|
| 1 | $\dfrac{2x^3}{x}=2x^2$ | $2x^2(x-2)=2x^3-4x^2$ | $x^2$, turunkan $4x$ |
| 2 | $\dfrac{x^2}{x}=x$ | $x(x-2)=x^2-2x$ | $6x$, turunkan $-5$ |
| 3 | $\dfrac{6x}{x}=6$ | $6(x-2)=6x-12$ | $7$ → berhenti |

Hasil bagi $2x^2+x+6$, sisa $7$. Berhenti karena derajat $7$ (yaitu 0) sudah lebih kecil daripada derajat pembagi (1).

> ⚠️ **Wajib:** tuliskan **koefisien nol** untuk suku yang hilang. Membagi $x^3-1$ ditulis sebagai $x^3+0x^2+0x-1$.

> ⚡ Perhatikan: $f(2) = 16-12+8-5 = 7$, tepat sama dengan sisanya. Fenomena ini dibuktikan pada Bab 04.

### 📘 Contoh

Bagi $x^3+2x^2-x+4$ oleh $x^2-1$.

Siklus 1: $x^3 \div x^2 = x$; $x(x^2-1)=x^3-x$; kurangkan → $2x^2+0x+4$.
Siklus 2: $2x^2 \div x^2 = 2$; $2(x^2-1)=2x^2-2$; kurangkan → $6$.

Hasil bagi $x+2$, sisa $6$ (derajat 0 lebih kecil daripada derajat pembagi 2, sehingga berhenti).

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"03-g2", "competency":"K3",
  "title":"Menjalankan satu siklus pembagian bersusun",
  "prompt":"Bagi $x^3 + 4x^2 - x + 6$ oleh $(x+1)$ menggunakan pembagian bersusun. Kerjakan siklus pertamanya.",
  "steps":[
    {"ask":"Langkah 1. Bagi suku pemimpin: $\\frac{x^3}{x} = \\;?$","type":"mc","options":["$x^2$","$x^3$","$x$"],"answer":"$x^2$","feedback":"Benar. Ini menjadi suku pertama hasil bagi."},
    {"ask":"Langkah 2. Kalikan $x^2$ dengan seluruh pembagi $(x+1)$. Hasilnya ….","type":"mc","options":["$x^3 + x^2$","$x^3 + 1$","$x^3 - x^2$"],"answer":"$x^3 + x^2$","feedback":"Tepat. Kedua suku pembagi dikalikan."},
    {"ask":"Langkah 3. Kurangkan: $(x^3+4x^2) - (x^3+x^2) = \\;?$","type":"mc","options":["$3x^2$","$5x^2$","$4x^2$"],"answer":"$3x^2$","feedback":"Benar, lalu turunkan suku berikutnya untuk siklus kedua."}
  ],
  "conclusion":"Ulangi siklus bagi-kali-kurang-turunkan hingga derajat sisa lebih kecil daripada derajat pembagi. Hasil akhirnya: hasil bagi x^2+3x-4 dengan sisa 10.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Ordering -->

```json
{ "type":"activity", "widget":"ordering", "id":"03-m2", "competency":"K3",
  "prompt":"Urutkan empat langkah dalam satu siklus pembagian bersusun.",
  "options":["Bagi suku pemimpin yang dibagi dengan suku pemimpin pembagi","Kalikan hasilnya dengan seluruh pembagi","Kurangkan dari polinomial yang sedang dibagi","Turunkan suku berikutnya"],
  "answer_order":[0,1,2,3],
  "reward":{"xp":15} }
```

---

## 3️⃣ Skema Horner

Untuk pembagi **linear**, skema Horner jauh lebih cepat daripada bersusun.

<!-- VISUAL: Tabel Horner beranimasi
     DEVELOPER: WAJIB berupa tabel Horner bergaya bagan, bukan teks. Tampilkan baris koefisien,
     nilai k di kiri, dan garis penjumlahan di bawah. Animasikan irama TURUN -> KALI (panah
     melengkung menuju kolom berikutnya) -> JUMLAH, berulang. Sel terakhir (sisa) diberi warna
     berbeda dan diberi label "sisa = f(k)". -->

**Irama Horner:** *turun → kali → jumlah*, diulang sampai habis.

**Contoh.** Bagi $2x^3-3x^2+4x-5$ oleh $x-2$, sehingga $k=2$.

```
  k=2 │   2     -3      4     -5
      │          4      2     12
      └────────────────────────────
          2      1      6    | 7   ← sisa
       (koefisien hasil bagi)
```

Hasil bagi $2x^2+x+6$ (derajat turun satu), sisa $7$.

> 💡 Angka terakhir **selalu** sama dengan $f(k)$, sehingga dapat dipakai sebagai pemeriksaan instan.

### Pembagi berbentuk $(ax-b)$

Karena $ax-b = a\left(x-\tfrac{b}{a}\right)$, lakukan Horner dengan $k=\tfrac{b}{a}$, lalu:

- **Hasil bagi** dibagi $a$.
- **Sisa** tidak diubah.

**Contoh.** Bagi $2x^3+3x^2-4x+1$ oleh $2x-1$ ($k=\tfrac12$, $a=2$). Horner memberi baris $2,\;4,\;-2$ dengan sisa $0$. Bagi hasil bagi dengan 2:
$$H(x) = x^2+2x-1, \qquad S = 0$$

> ⚠️ Yang dibagi dengan $a$ **hanya hasil bagi**, bukan sisa.

### 📘 Contoh

Bagi $x^3-7x+6$ oleh $x-1$. Tuliskan koefisien lengkap $1,\;0,\;-7,\;6$ (perhatikan $0$ untuk suku $x^2$), dengan $k=1$:

```
  k=1 │   1      0     -7      6
      │          1      1     -6
      └────────────────────────────
          1      1     -6    | 0
```

Hasil bagi $x^2+x-6$, sisa $0$. Sisa nol berarti $(x-1)$ merupakan **faktor** — konsep yang dibahas pada Bab 04.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"03-g3", "competency":"K3",
  "title":"Menerapkan irama turun-kali-jumlah",
  "prompt":"Bagi $2x^3 + x^2 - 8x + 5$ oleh $(x+2)$ menggunakan skema Horner.",
  "steps":[
    {"ask":"Langkah 1. Pembagi $(x+2)$ berarti nilai $k$ adalah ….","type":"mc","options":["$-2$","$2$","$\\frac{1}{2}$"],"answer":"$-2$","feedback":"Benar. Karena (x+2) sama dengan (x-(-2)), maka k=-2. Tandanya berlawanan."},
    {"ask":"Langkah 2. Turunkan koefisien pertama (yaitu 2), kalikan dengan $k$, lalu jumlahkan ke koefisien kedua: $1 + (2)(-2) = \\;?$","type":"mc","options":["$-3$","$5$","$-1$"],"answer":"$-3$","feedback":"Tepat. Inilah koefisien kedua hasil bagi."},
    {"ask":"Langkah 3. Lanjutkan hingga akhir. Berapakah sisanya?","type":"mc","options":["$9$","$0$","$-9$"],"answer":"$9$","feedback":"Benar. Baris hasilnya 2, -3, -2 dengan sisa 9, sehingga hasil baginya 2x^2-3x-2."}
  ],
  "conclusion":"Perhatikan tanda k: pembagi (x+2) memakai k=-2. Kesalahan tanda di sini membuat seluruh perhitungan meleset.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity HornerSteps
     DEVELOPER: render tabel Horner interaktif; peserta mengisi tiap sel dan divalidasi
     mengikuti pola turun-kali-jumlah. Sel sisa diberi penanda khusus. -->

```json
{ "type":"activity", "widget":"horner-steps", "id":"03-m3", "competency":"K3",
  "prompt":"Lengkapi skema Horner untuk membagi $2x^3 - 3x^2 + 4x - 5$ oleh $(x-2)$.",
  "poly":[2,-3,4,-5], "k":2,
  "expected_quotient":[2,1,6], "expected_remainder":7,
  "reward":{"xp":20} }
```

---

## 4️⃣ Pembagi Kuadrat

Bila pembaginya berderajat 2, sisanya berbentuk $rx+s$. Tersedia dua cara: **bersusun** (selalu bisa) atau **Horner-Kino** (lebih ringkas).

<!-- VISUAL: Skema Horner-Kino
     DEVELOPER: tampilkan sebagai bagan bertingkat. Baris koefisien di atas; dua baris pengali
     di bawahnya (-b digeser satu kolom, -c digeser dua kolom) dengan panah yang menunjukkan
     arah pergeseran. Pisahkan secara visual bagian hasil bagi dan bagian sisa (rx + s). -->

Untuk pembagi $x^2+bx+c$, setiap koefisien hasil bagi menyumbang dua nilai ke bawah: dikali $-b$ (geser 1 kolom) dan dikali $-c$ (geser 2 kolom).

**Contoh.** Bagi $x^4+2x^3-3x^2+x+5$ oleh $x^2+x+1$, sehingga pengalinya $-1$ dan $-1$.

```
        │  1     2    -3     1     5
  −1    │       -1    -1    +5
  −1    │             -1    -1    +5
        └──────────────────────────────
           1     1    -5   |  5    10
        (hasil bagi)      (sisa 5x + 10)
```

Hasil bagi $x^2+x-5$, sisa $5x+10$.

### 🎯 Penerapan — Soal TKA

> $f(x)=x^4+ax^3+bx^2+x-6$ dibagi $x^2+x+1$ menghasilkan sisa $5x-1$. Tentukan $a+b$.

Membagi secara simbolik menghasilkan sisa dalam bentuk $a$ dan $b$:

$$\text{sisa} = (2-b)x + (a-b-6)$$

Samakan dengan $5x-1$:

$$2-b = 5 \;\Rightarrow\; b=-3 \qquad a-b-6 = -1 \;\Rightarrow\; a=2$$

Sehingga $a+b = 2 + (-3) = \mathbf{-1}$.

> ⚡ **Strategi:** karena yang ditanyakan hanya $a+b$, cukup bentuk **dua persamaan dari sisa** tanpa mencari hasil bagi lengkap.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"03-g4", "competency":"K3",
  "title":"Menentukan koefisien dari bentuk sisa",
  "prompt":"Diketahui $f(x)=x^4+ax^3+bx^2+x-6$ dibagi $x^2+x+1$ bersisa $5x-1$. Pembagian simbolik memberi sisa $(2-b)x + (a-b-6)$. Tentukan $a+b$.",
  "steps":[
    {"ask":"Langkah 1. Samakan koefisien $x$: $2-b = 5$, sehingga $b = \\;?$","type":"mc","options":["$-3$","$3$","$7$"],"answer":"$-3$","feedback":"Benar, karena b = 2-5 = -3."},
    {"ask":"Langkah 2. Samakan konstanta: $a - b - 6 = -1$. Dengan $b=-3$, diperoleh $a = \\;?$","type":"mc","options":["$2$","$-2$","$8$"],"answer":"$2$","feedback":"Tepat: a + 3 - 6 = -1 sehingga a = 2."},
    {"ask":"Langkah 3. Jadi, nilai $a+b$ adalah ….","type":"mc","options":["$-1$","$5$","$-5$"],"answer":"$-1$","feedback":"Benar: 2 + (-3) = -1."}
  ],
  "conclusion":"Pada soal semacam ini, hasil bagi tidak perlu dicari. Cukup bentuk dua persamaan dari sisa lalu selesaikan.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity ErrorHunt -->

```json
{ "type":"activity", "widget":"error-hunt", "id":"03-m4", "competency":"K3",
  "prompt":"Cermati pengerjaan membagi $6x^3-5x^2+4x-1$ oleh $(2x-1)$ berikut. Terdapat satu langkah yang keliru.",
  "steps":[
    "Langkah 1. Karena $2x-1 = 2(x-\\tfrac{1}{2})$, gunakan $k=\\tfrac{1}{2}$ dan $a=2$.",
    "Langkah 2. Skema Horner menghasilkan baris $6,\\ -2,\\ 3$ dengan sisa $\\tfrac{1}{2}$.",
    "Langkah 3. Bagi hasil bagi dengan $a=2$, menjadi $3x^2-x+\\tfrac{3}{2}$.",
    "Langkah 4. Bagi pula sisanya dengan $a=2$, menjadi $\\tfrac{1}{4}$."
  ],
  "wrong_index":3,
  "why":"Hanya hasil bagi yang dibagi dengan a. Sisa dari skema Horner sudah merupakan sisa yang benar, yaitu 1/2, dan tidak boleh diubah.",
  "reward":{"xp":15} }
```

---

## 5️⃣ Memilih Metode

<!-- VISUAL: Bagan alir pemilihan metode
     DEVELOPER: render sebagai bagan alir interaktif. Pengguna menjawab dua pertanyaan
     (apa bentuk pembaginya? apa yang diminta?), lalu jalur menyala menuju metode tercepat
     beserta alasannya. Jangan ditampilkan sebagai tabel teks saja. -->

| Bentuk pembagi | Metode tercepat | Catatan |
|----------------|-----------------|---------|
| $(x-k)$ | **Horner** | Sisa $=f(k)$ |
| $(ax-b)$ | **Horner** dengan $k=\tfrac{b}{a}$ | Hasil bagi dibagi $a$; sisa tetap |
| Kuadrat yang dapat difaktorkan | **Horner bertingkat** | Horner dua kali berurutan |
| Kuadrat tak terfaktorkan | **Horner-Kino** atau bersusun | Sisa berbentuk $rx+s$ |
| Derajat $\geq 3$ | **Bersusun** | Paling aman |
| Hanya sisa yang diminta | **Teorema Sisa** (Bab 04) | Sering tanpa membagi |

**Perbandingan singkat:**

| Aspek | Bersusun | Horner | Horner-Kino |
|-------|----------|--------|-------------|
| Berlaku untuk | pembagi apa pun | linear | kuadrat |
| Kecepatan | lambat | sangat cepat | cepat |
| Kejelasan langkah | tinggi | sedang | perlu latihan |

### 📘 Contoh

Untuk membagi $x^7-1$ oleh $(x-1)$, metode tercepat adalah **Horner** karena pembaginya linear. Bahkan bila hanya sisanya yang diminta, cukup hitung $f(1) = 1-1 = 0$.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"03-g5", "competency":"K3",
  "title":"Memilih metode paling efisien",
  "prompt":"Anda diminta menentukan HANYA sisa pembagian $x^{50} + 3$ oleh $(x-1)$. Metode apa yang paling efisien?",
  "steps":[
    {"ask":"Langkah 1. Apa bentuk pembaginya?","type":"mc","options":["Linear $(x-k)$","Kuadrat","Kubik"],"answer":"Linear $(x-k)$","feedback":"Benar, dengan k=1."},
    {"ask":"Langkah 2. Karena yang diminta hanya sisa, langkah tercepat adalah ….","type":"mc","options":["Menghitung $f(1)$","Melakukan pembagian bersusun","Menyusun tabel Horner lengkap"],"answer":"Menghitung $f(1)$","feedback":"Tepat. Untuk pembagi linear, sisa sama dengan nilai fungsi pada k."},
    {"ask":"Langkah 3. Hitunglah: $f(1) = 1^{50} + 3 = \\;?$","type":"mc","options":["$4$","$3$","$53$"],"answer":"$4$","feedback":"Benar. Bandingkan dengan lamanya membagi bersusun sampai pangkat 50."}
  ],
  "conclusion":"Sebelum menghitung, tanyakan dahulu: apa bentuk pembaginya, dan apa yang sebenarnya diminta.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Matching -->

```json
{ "type":"activity", "widget":"matching", "id":"03-m5", "competency":"K3",
  "prompt":"Pasangkan setiap bentuk pembagi dengan metode tercepatnya.",
  "pairs":[
    ["Pembagi $(x-k)$","Skema Horner"],
    ["Pembagi $(ax-b)$","Horner dengan $k=\\frac{b}{a}$"],
    ["Kuadrat yang dapat difaktorkan","Horner bertingkat"],
    ["Kuadrat tak terfaktorkan","Horner-Kino atau bersusun"]
  ],
  "reward":{"xp":15} }
```

---

## 📝 Latihan Bertingkat

<!-- COMPONENT: Quiz Cards
     DEVELOPER: render 5 paket sebagai KARTU (A-E); klik -> POP-UP. Paket D dan E OPSIONAL. -->

### 🟢 Paket A — Dasar (5 soal)

```json
{
  "set_id":"03-set-A-mudah","level":"mudah","optional": false,
  "items":[
    {"id":"A1","type":"mc","question":"Tentukan hasil bagi dan sisa dari $x^2 + 3x + 2$ dibagi $(x+1)$.","options":["Hasil bagi $x+2$, sisa $0$","Hasil bagi $x+3$, sisa $2$","Hasil bagi $x+1$, sisa $1$","Hasil bagi $x-2$, sisa $0$"],"answer":"Hasil bagi $x+2$, sisa $0$","explanation":"Horner dengan k=-1 memberi baris 1, 2 dan sisa 0."},
    {"id":"A2","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan sisa pembagian $x^2 + 1$ oleh $(x-1)$.","answer":"2","explanation":"Sisa sama dengan f(1)=2."},
    {"id":"A3","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Pada skema Horner, berapakah nilai $k$ yang digunakan bila pembaginya $(x-5)$?","answer":"5","explanation":"Bentuk (x-k) memberi k=5."},
    {"id":"A4","type":"mc","question":"Tentukan hasil bagi dan sisa dari $x^3 - 1$ dibagi $(x-1)$.","options":["Hasil bagi $x^2+x+1$, sisa $0$","Hasil bagi $x^2-x+1$, sisa $0$","Hasil bagi $x^2+1$, sisa $-1$","Hasil bagi $x^2$, sisa $-1$"],"answer":"Hasil bagi $x^2+x+1$, sisa $0$","explanation":"Tulis koefisien lengkap 1,0,0,-1 lalu Horner dengan k=1."},
    {"id":"A5","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan sisa pembagian $x^3$ oleh $(x-2)$.","answer":"8","explanation":"Sisa sama dengan f(2)=8."}
  ]
}
```
<details><summary><strong>Pembahasan Paket A</strong></summary>

1. $H=x+2$, $S=0$. 2. $f(1)=2$. 3. $k=5$. 4. $H=x^2+x+1$, $S=0$. 5. $f(2)=8$.
</details>

### 🟡 Paket B — Menengah (5 soal)

```json
{
  "set_id":"03-set-B-sedang","level":"sedang","optional": false,
  "items":[
    {"id":"B1","type":"mc","question":"Tentukan hasil bagi dan sisa dari $2x^3 - 3x^2 + 4x - 5$ dibagi $(x-2)$.","options":["Hasil bagi $2x^2+x+6$, sisa $7$","Hasil bagi $2x^2-x+6$, sisa $7$","Hasil bagi $2x^2+x+6$, sisa $0$","Hasil bagi $2x^2+7x$, sisa $6$"],"answer":"Hasil bagi $2x^2+x+6$, sisa $7$","explanation":"Horner dengan k=2 memberi baris 2, 1, 6 dan sisa 7."},
    {"id":"B2","type":"mc","question":"Tentukan hasil bagi dan sisa dari $x^3 + 4x^2 - x + 6$ dibagi $(x+1)$.","options":["Hasil bagi $x^2+3x-4$, sisa $10$","Hasil bagi $x^2+5x+4$, sisa $2$","Hasil bagi $x^2+3x-4$, sisa $-10$","Hasil bagi $x^2+4x$, sisa $6$"],"answer":"Hasil bagi $x^2+3x-4$, sisa $10$","explanation":"Horner dengan k=-1."},
    {"id":"B3","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan sisa pembagian $2x^4 - x^2 + 3$ oleh $(x-1)$.","answer":"4","explanation":"f(1)=2-1+3=4."},
    {"id":"B4","type":"mc","question":"Tentukan hasil bagi dan sisa dari $6x^2 - x - 2$ dibagi $(2x+1)$.","options":["Hasil bagi $3x-2$, sisa $0$","Hasil bagi $6x-4$, sisa $0$","Hasil bagi $3x-2$, sisa $1$","Hasil bagi $3x+2$, sisa $0$"],"answer":"Hasil bagi $3x-2$, sisa $0$","explanation":"Horner k=-1/2 memberi 6, -4 dengan sisa 0; hasil bagi dibagi a=2."},
    {"id":"B5","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan sisa pembagian $x^5 + 1$ oleh $(x+1)$.","answer":"0","explanation":"f(-1)=-1+1=0."}
  ]
}
```
<details><summary><strong>Pembahasan Paket B</strong></summary>

1. $H=2x^2+x+6$, $S=7$. 2. $H=x^2+3x-4$, $S=10$. 3. $f(1)=4$. 4. $H=3x-2$, $S=0$. 5. $f(-1)=0$.
</details>

### 🔴 Paket C — Lanjut (5 soal)

```json
{
  "set_id":"03-set-C-sulit","level":"sulit","optional": false,
  "items":[
    {"id":"C1","type":"mc","question":"Tentukan hasil bagi dan sisa dari $x^4 + 2x^3 - 3x^2 + x + 5$ dibagi $(x^2+x+1)$.","options":["Hasil bagi $x^2+x-5$, sisa $5x+10$","Hasil bagi $x^2+x-5$, sisa $5x-10$","Hasil bagi $x^2+2x-5$, sisa $5x+10$","Hasil bagi $x^2-x+5$, sisa $x+10$"],"answer":"Hasil bagi $x^2+x-5$, sisa $5x+10$","explanation":"Horner-Kino dengan pengali -1 dan -1."},
    {"id":"C2","type":"mc","question":"Tentukan hasil bagi dan sisa dari $x^4$ dibagi $(x^2+1)$.","options":["Hasil bagi $x^2-1$, sisa $1$","Hasil bagi $x^2+1$, sisa $-1$","Hasil bagi $x^2$, sisa $0$","Hasil bagi $x^2-1$, sisa $-1$"],"answer":"Hasil bagi $x^2-1$, sisa $1$","explanation":"x^4 sama dengan (x^2+1)(x^2-1)+1."},
    {"id":"C3","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan sisa pembagian $x^{10}$ oleh $(x^2-1)$.","answer":"1","explanation":"Karena x^2 setara 1, maka x^10 setara 1."},
    {"id":"C4","type":"mc","question":"Diketahui $x^3 - 2x^2 + ax + b$ dibagi $(x^2+1)$ bersisa $3x-2$. Tentukan $a$ dan $b$.","options":["$a=4,\\ b=-4$","$a=2,\\ b=0$","$a=3,\\ b=-2$","$a=-4,\\ b=4$"],"answer":"$a=4,\\ b=-4$","explanation":"Pembagian bersusun memberi sisa (a-1)x+(b+2); samakan dengan 3x-2."},
    {"id":"C5","type":"mc","question":"Tentukan hasil bagi dan sisa dari $2x^4 - 3x^3 + x - 4$ dibagi $(x-1)(x+2)$.","options":["Hasil bagi $2x^2-5x+9$, sisa $-18x+14$","Hasil bagi $2x^2-5x+9$, sisa $-18x-14$","Hasil bagi $2x^2-3x+9$, sisa $-18x+14$","Hasil bagi $2x^2-5x$, sisa $14$"],"answer":"Hasil bagi $2x^2-5x+9$, sisa $-18x+14$","explanation":"Horner bertingkat: bagi (x-1) sisa -4, lalu (x+2) sisa -18; rekonstruksi sisa -18(x-1)-4."}
  ]
}
```
<details><summary><strong>Pembahasan Paket C</strong></summary>

1. $H=x^2+x-5$, $S=5x+10$. 2. $H=x^2-1$, $S=1$. 3. Sisa $1$. 4. $a=4$, $b=-4$. 5. $H=2x^2-5x+9$, $S=-18x+14$.
</details>

### 🧠 Paket D — HOTS (5 soal, opsional)

> Paket ini **opsional**. Mengerjakannya memberi XP bonus.

```json
{
  "set_id":"03-set-D-hots","level":"hots","optional": true, "bonus_xp": 20,
  "items":[
    {"id":"D1","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan nilai $a$ agar $x^3 - 2x^2 + ax - 6$ habis dibagi $(x-3)$.","answer":"-1","explanation":"f(3)=27-18+3a-6=3+3a=0."},
    {"id":"D2","type":"mc","question":"Diketahui $f(x)$ dibagi $(x-2)$ bersisa $3$ dan dibagi $(x-3)$ bersisa $5$. Tentukan sisa jika $f(x)$ dibagi $(x-2)(x-3)$.","options":["$2x-1$","$2x+1$","$x-1$","$3x-5$"],"answer":"$2x-1$","explanation":"Sisa berbentuk px+q; 2p+q=3 dan 3p+q=5."},
    {"id":"D3","type":"mc","question":"Mengapa sisa pembagian $f(x)$ oleh $(x-k)$ selalu berupa konstanta?","options":["Karena derajat sisa harus lebih kecil dari 1","Karena $f(k)$ selalu bilangan bulat","Karena hasil baginya berderajat 1","Karena pembaginya monik"],"answer":"Karena derajat sisa harus lebih kecil dari 1","explanation":"Derajat lebih kecil dari 1 berarti derajat 0, yaitu konstanta."},
    {"id":"D4","type":"mc","question":"Diketahui $x^3+bx^2+cx+d$ dibagi $(x^2+1)$ bersisa $x+1$, dan $f(0)=2$. Tentukan $b$, $c$, dan $d$.","options":["$b=1,\\ c=2,\\ d=2$","$b=2,\\ c=1,\\ d=2$","$b=1,\\ c=1,\\ d=2$","$b=-1,\\ c=2,\\ d=2$"],"answer":"$b=1,\\ c=2,\\ d=2$","explanation":"f(0)=d=2; sisa bersusun (c-1)x+(d-b)=x+1."},
    {"id":"D5","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan sisa pembagian $x^{2026}$ oleh $(x^2-1)$.","answer":"1","explanation":"x^2026 sama dengan (x^2)^1013 yang setara 1."}
  ]
}
```
<details><summary><strong>Pembahasan Paket D</strong></summary>

1. $a=-1$. 2. Sisa $2x-1$. 3. Karena derajat sisa lebih kecil dari 1. 4. $b=1,c=2,d=2$. 5. Sisa $1$.
</details>

### 🏆 Paket E — Model TKA (5 soal, opsional)

> Paket ini **opsional** dan bergaya soal TKA. Mengerjakannya memberi XP bonus.

```json
{
  "set_id":"03-set-E-tka","level":"tka","optional": true, "bonus_xp": 20,
  "items":[
    {"id":"E1","type":"mc","source":"TKA-2024-no6","question":"Diketahui $f(x)=x^4+ax^3+bx^2+x-6$ dibagi $x^2+x+1$ bersisa $5x-1$. Tentukan nilai $a+b$.","options":["$-1$","$11$","$5$","$-5$"],"answer":"$-1$","explanation":"Sisa simbolik (2-b)x+(a-b-6) disamakan dengan 5x-1 memberi b=-3 dan a=2."},
    {"id":"E2","type":"mc","question":"Untuk membagi $x^7 - 1$ oleh $(x-1)$, metode tercepat dan sisanya berturut-turut adalah ….","options":["Horner, sisa $0$","Bersusun, sisa $0$","Horner-Kino, sisa $1$","Bersusun, sisa $-1$"],"answer":"Horner, sisa $0$","explanation":"Pembagi linear sehingga Horner tercepat; f(1)=0."},
    {"id":"E3","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan nilai $k$ agar $2x^3 - kx^2 + 3x - 1$ habis dibagi $(2x-1)$.","answer":"3","explanation":"f(1/2)=3/4 - k/4 = 0 sehingga k=3."},
    {"id":"E4","type":"mc","question":"Diketahui $f(x)$ dibagi $(x+1)$ bersisa $2$ dan dibagi $(x-1)$ bersisa $6$. Tentukan sisa jika dibagi $(x^2-1)$.","options":["$2x+4$","$2x-4$","$4x+2$","$x+4$"],"answer":"$2x+4$","explanation":"Sisa px+q; -p+q=2 dan p+q=6."},
    {"id":"E5","type":"mc","question":"Tentukan hasil bagi dan sisa dari $x^4 - 5x^2 + 4$ dibagi $(x^2-1)$.","options":["Hasil bagi $x^2-4$, sisa $0$","Hasil bagi $x^2+4$, sisa $0$","Hasil bagi $x^2-4$, sisa $4$","Hasil bagi $x^2-5$, sisa $4$"],"answer":"Hasil bagi $x^2-4$, sisa $0$","explanation":"x^4-5x^2+4 sama dengan (x^2-1)(x^2-4)."}
  ]
}
```
<details><summary><strong>Pembahasan Paket E</strong></summary>

**E1.** $a=2$, $b=-3$ sehingga $a+b=-1$. **E2.** Horner, sisa $0$. **E3.** $k=3$. **E4.** Sisa $2x+4$. **E5.** $H=x^2-4$, $S=0$; lengkapnya $(x-1)(x+1)(x-2)(x+2)$.
</details>

---

## ⚠️ Kesalahan Umum & ⚡ Tips Cepat

| Kesalahan | Perbaikan |
|-----------|-----------|
| Tidak menuliskan koefisien nol suku yang hilang | Tulis **semua** koefisien, termasuk $0$ |
| Salah tanda $k$: pembagi $(x+3)$ dipakai $k=3$ | $(x+3)=(x-(-3))$ sehingga $k=-3$ |
| Sisa ikut dibagi $a$ pada pembagi $(ax-b)$ | Hanya **hasil bagi** yang dibagi $a$ |
| Berhenti membagi terlalu dini atau terlambat | Berhenti saat derajat sisa lebih kecil daripada pembagi |
| Lupa membalik tanda seluruh baris pengurang | Bagikan tanda ke semua suku |

**Tips cepat:** pembagi linear → selalu Horner → angka terakhir $=f(k)$ sebagai pemeriksaan instan → bila hanya sisa yang diminta, tunggu Teorema Sisa pada Bab 04.

---

## ✅ Ringkasan

- **Algoritma:** $f = P\cdot H + S$ dengan derajat $S <$ derajat $P$.
- **Bersusun:** universal; siklus bagi–kali–kurang–turunkan.
- **Horner $(x-k)$:** turun–kali–jumlah; angka terakhir $=f(k)=$ sisa.
- **Horner $(ax-b)$:** pakai $k=\tfrac{b}{a}$; **hasil bagi dibagi $a$**, sisa tetap.
- **Pembagi kuadrat:** sisa berbentuk $rx+s$; gunakan Horner-Kino atau bersusun.
- Pilih metode berdasarkan bentuk pembagi dan apa yang diminta.

---

## 🏆 Tantangan Akhir Bab

<!-- COMPONENT: Tantangan Akhir Bab
     DEVELOPER: render sebagai KARTU; klik -> POP-UP layar penuh (modal) berisi sesi berwaktu.
     Seluruh butir mandiri - JANGAN menarik atau memecah aktivitas dari bagian materi. -->
> Sesi berwaktu berisi 10 soal (6 menit). Seluruh soal berbentuk pilihan sehingga dapat dikerjakan tanpa mengetik.

```json
{ "type":"challenge", "id":"03-tantangan", "competency":"K3",
  "title":"Tantangan Akhir Bab 3: Pembagian Polinomial",
  "mode":"timed", "time_limit_sec":360, "display":"modal", "shuffle":true,
  "scoring":{"per_correct":10,"time_bonus":true},
  "stars":{"3":90,"2":70,"1":50},
  "reward":{"xp":80,"badge":"pembagi-ulung"},
  "record":{"track_best_time":true,"track_best_score":true},
  "items":[
    {"id":"T1","type":"mc","question":"Pada skema Horner, berapakah nilai $k$ yang digunakan bila pembaginya $(x+3)$?","options":["$-3$","$3$","$\\frac{1}{3}$","$0$"],"answer":"$-3$","explanation":"Bentuk (x+3) sama dengan (x-(-3))."},
    {"id":"T2","type":"mc","question":"Suatu polinomial dibagi oleh $x^2+x+1$. Bentuk sisanya adalah ….","options":["$rx+s$","sebuah konstanta","$rx^2+sx+t$","selalu nol"],"answer":"$rx+s$","explanation":"Derajat sisa harus lebih kecil daripada 2."},
    {"id":"T3","type":"mc","question":"Tentukan sisa pembagian $2x^3 - 3x^2 + 4x - 5$ oleh $(x-2)$.","options":["$7$","$0$","$-5$","$12$"],"answer":"$7$","explanation":"Sisa sama dengan f(2)=7."},
    {"id":"T4","type":"mc","question":"Benar atau salah: pada pembagi $(ax-b)$, sisa hasil skema Horner harus dibagi $a$.","options":["Salah","Benar"],"answer":"Salah","explanation":"Hanya hasil bagi yang dibagi a; sisa tidak diubah."},
    {"id":"T5","type":"mc","question":"Sebelum membagi $x^3 - 1$ oleh $(x-1)$ dengan skema Horner, koefisien yang dituliskan adalah ….","options":["$1,\\ 0,\\ 0,\\ -1$","$1,\\ -1$","$1,\\ 1,\\ 1$","$1,\\ 0,\\ -1$"],"answer":"$1,\\ 0,\\ 0,\\ -1$","explanation":"Suku yang hilang ditulis dengan koefisien 0."},
    {"id":"T6","type":"mc","question":"Tentukan hasil bagi dan sisa dari $x^3 + 2x^2 - x + 4$ dibagi $(x^2-1)$.","options":["Hasil bagi $x+2$, sisa $6$","Hasil bagi $x+2$, sisa $0$","Hasil bagi $x-2$, sisa $6$","Hasil bagi $x^2+2$, sisa $4$"],"answer":"Hasil bagi $x+2$, sisa $6$","explanation":"Dua siklus pembagian bersusun."},
    {"id":"T7","type":"mc","question":"Seorang siswa membagi $6x^3-5x^2+4x-1$ oleh $(2x-1)$. Langkah 1: gunakan $k=\\frac{1}{2}$. Langkah 2: skema Horner memberi baris $6, -2, 3$ dengan sisa $\\frac{1}{2}$. Langkah 3: hasil bagi dibagi 2 menjadi $3x^2-x+\\frac{3}{2}$. Langkah 4: sisa dibagi 2 menjadi $\\frac{1}{4}$. Manakah langkah yang SALAH?","options":["Langkah 4, karena sisa tidak dibagi $a$","Langkah 1, karena $k$ seharusnya $2$","Langkah 2, karena barisnya keliru","Langkah 3, karena hasil bagi tidak dibagi $a$"],"answer":"Langkah 4, karena sisa tidak dibagi $a$","explanation":"Sisa dari skema Horner sudah benar, yaitu 1/2."},
    {"id":"T8","type":"mc","question":"Untuk membagi polinomial berderajat 5 oleh $(x-2)$, metode tercepat adalah ….","options":["Skema Horner","Pembagian bersusun","Horner-Kino","Pemfaktoran"],"answer":"Skema Horner","explanation":"Pembagi linear paling cepat diselesaikan dengan Horner."},
    {"id":"T9","type":"mc","question":"Diketahui $f(x)=x^4+ax^3+bx^2+x-6$ dibagi $x^2+x+1$ bersisa $5x-1$. Tentukan $a+b$.","options":["$-1$","$5$","$11$","$-7$"],"answer":"$-1$","explanation":"Diperoleh b=-3 dan a=2."},
    {"id":"T10","type":"mc","question":"Urutan irama yang benar pada skema Horner adalah ….","options":["Turun, kali, jumlah","Kali, turun, jumlah","Jumlah, kali, turun","Turun, jumlah, kali"],"answer":"Turun, kali, jumlah","explanation":"Koefisien pertama diturunkan, dikalikan k, lalu dijumlahkan ke kolom berikutnya."}
  ] }
```

---

## 📝 Refleksi

<!-- COMPONENT: Reflection -->
1. Kapan Horner lebih unggul daripada pembagian bersusun, dan kapan sebaliknya?
2. Fakta "angka terakhir Horner sama dengan $f(k)$" bermanfaat untuk apa?
3. Bagian mana dari pembagi kuadrat yang masih terasa sulit? Catat untuk ditinjau kembali.

---

## ➡️ Persiapan Menuju Bab Berikutnya

Kita telah menguasai tiga metode pembagian dan menyelesaikan satu soal TKA. Kita juga berulang kali mengamati bahwa **sisa pembagian oleh $(x-k)$ selalu sama dengan $f(k)$**.

Pada **Bab 04 — Teorema Sisa & Teorema Faktor**, fenomena tersebut akan dibuktikan dan dijadikan alat utama untuk mencari sisa tanpa membagi, menentukan faktor, serta memfaktorkan polinomial.

> Lanjutkan ke **Bab 04**.

<!-- COMPONENT: Summary -->
<!-- Progress bar: 4/8. -->
