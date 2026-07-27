---
id: "04-teorema-sisa-dan-faktor"
slug: "teorema-sisa-dan-faktor"
title: "Teorema Sisa dan Teorema Faktor"
order: 4
duration_min: 100
level: "Kelas XI - Kurikulum Merdeka"
track: "TKA Matematika Lanjut"
prerequisites:
  - "03-pembagian-polinomial"
competencies:
  - "K4: Menerapkan Teorema Sisa & Teorema Faktor"
learning_objectives:
  - "Membuktikan & menerapkan Teorema Sisa untuk mencari sisa tanpa membagi"
  - "Menerapkan Teorema Faktor untuk menentukan faktor & akar"
  - "Memfaktorkan polinomial derajat tinggi dengan Horner"
  - "Menggunakan Teorema Akar Rasional untuk menebak akar secara sistematis"
  - "Memahami hubungan faktor, akar, dan sisa"
tags: ["teorema-sisa", "teorema-faktor", "akar", "faktorisasi", "akar-rasional"]
components:
  - "Concept Map Mini"
  - "Proof Reveal"
  - "Root Finder Interactive"
  - "Factor Peeler"
  - "Quiz"
  - "Reflection"
  - "Activity TrueFalse"
  - "Activity Cloze"
  - "Activity Matching"
  - "Activity Categorize"
  - "Activity Ordering"
  - "Activity ErrorHunt"
  - "Tantangan Akhir Bab"
activities:
  - "04-act-sisa"
  - "04-act-rumus"
  - "04-act-faktor"
  - "04-act-rasional"
  - "04-act-langkah"
  - "04-act-trap"
challenge: "04-tantangan"
xp_available: 210
katex: true
---

# Bab 04 — Teorema Sisa dan Teorema Faktor

<!-- COMPONENT: Concept Map Mini
     DEVELOPER: WAJIB dirender sebagai kartu/diagram interaktif bergaya Soft Neo Brutalism,
     BUKAN menyalin blok teks ASCII apa adanya. Simpul bertahap:
     Teorema Sisa -> Sisa cepat -> Teorema Faktor -> Akar Rasional -> Faktorisasi -> Hubungan,
     dapat diklik menuju sub-bagian terkait. Blok teks di bawah HANYA rujukan struktur. -->

## 🎯 Tujuan Pembelajaran

Setelah mempelajari bab ini, peserta didik diharapkan mampu:

1. **Membuktikan** dan **menggunakan** Teorema Sisa untuk mencari sisa **tanpa membagi**.
2. Menerapkan **Teorema Faktor** untuk menentukan **faktor** dan **akar** polinomial.
3. **Memfaktorkan** polinomial derajat tinggi dengan bantuan Horner.
4. Memakai **Teorema Akar Rasional** untuk menebak akar secara sistematis.
5. Menjelaskan **hubungan** faktor ↔ akar ↔ sisa sebagai satu kesatuan.

## 🧩 Kompetensi yang Dipelajari
- **K4 — Menerapkan Teorema Sisa & Teorema Faktor.**

## 📦 Prasyarat
- Bab 02 (nilai/substitusi $f(k)$) & Bab 03 (Horner, algoritma pembagian).

## ⏱️ Estimasi Waktu Belajar
**±100 menit.**

## 🗺️ Peta Konsep Kecil

<!-- COMPONENT: Concept Map Mini (lanjutan)
     DEVELOPER: tampilkan sebagai alur kartu interaktif, bukan teks ASCII mentah. -->

```
TEOREMA SISA & FAKTOR
├─ 1. Teorema Sisa      sisa f÷(x-k) = f(k)
├─ 2. Sisa cepat        tanpa membagi; termasuk pembagi (ax-b) & kuadrat
├─ 3. Teorema Faktor    f(k)=0  ⟺  (x-k) faktor  ⟺  k akar
├─ 4. Akar Rasional     kandidat akar = ±(faktor konstanta)/(faktor koef utama)
├─ 5. Faktorisasi       kupas faktor satu per satu pakai Horner
└─ 6. Hubungan besar    faktor = akar = sisa nol  (★ ide pemersatu)
```

## 🔥 Motivasi

Sepanjang Bab 03, kita telah beberapa kali mengamati pola: **sisa pembagian oleh $(x-k)$ selalu sama dengan $f(k)$.** Pola ini bukan kebetulan, melainkan sebuah **teorema**. Dengan teorema ini, kita dapat:

- Mencari sisa **tanpa perlu membagi** (cukup menghitung $f(k)$).
- Menentukan apakah $(x-k)$ merupakan **faktor** hanya dengan memeriksa $f(k)=0$.
- **Memfaktorkan** polinomial berderajat 3, 4, atau 5 menjadi hasil kali faktor-faktor linear.

Pada bab inilah seluruh konsep dari Bab 01–03 **saling terhubung**.

---

## 1️⃣ Teorema Sisa

> **Teorema Sisa.** Jika polinomial $f(x)$ dibagi oleh $(x-k)$, maka **sisanya adalah $f(k)$**.

### Pembuktian (ringkas)

<!-- COMPONENT: Proof Reveal -->
<!-- Tampilkan bukti bertahap: klik "berikutnya" memunculkan satu baris. Tekankan langkah substitusi x=k. -->

Menurut algoritma pembagian (Bab 03), membagi $f(x)$ oleh $(x-k)$ memberi
$$f(x) = (x-k)\,H(x) + S$$
dengan $S$ **konstanta** (karena pembagi berderajat 1, sisa berderajat 0).

Sekarang **substitusi $x = k$** (trik yang membunuh faktor $(x-k)$):
$$f(k) = (k-k)\,H(k) + S = 0\cdot H(k) + S = S$$

Jadi $S = f(k)$. **Selesai.** ∎

> 💡 Kalimat kunci: *"Substitusi $x=k$ membuat suku $(x-k)H(x)$ menghilang, menyisakan sisa saja."* Ini juga menjelaskan mengapa angka terakhir Horner $= f(k)$.

### Contoh

**Cari sisa $f(x)=2x^3 - 3x^2 + 4x - 5$ dibagi $(x-2)$.**
Tanpa membagi: $f(2) = 16 - 12 + 8 - 5 = 7$. **Sisa $=7$.** (Bandingkan dengan Bab 03: hasilnya sama, namun cara ini jauh lebih cepat.)

---

<!-- COMPONENT: Activity TrueFalse -->
> **Latihan Interaktif — Benar/Salah.** Tentukan nilai kebenaran tiap pernyataan berikut.

```json
{ "type":"activity", "widget":"truefalse", "id":"04-act-sisa", "competency":"K4",
  "prompt":"Benar atau salah?",
  "statements":[
    {"s":"Sisa pembagian $f(x)$ oleh $(x-3)$ sama dengan $f(3)$.","a":true,"why":"Teorema Sisa."},
    {"s":"Untuk menguji apakah $(x+3)$ faktor, hitung $f(3)$.","a":false,"why":"Pembagi $(x+3)$ diuji dengan $f(-3)$, bukan $f(3)$."},
    {"s":"Jika $f(k)=0$ maka $(x-k)$ merupakan faktor $f(x)$.","a":true,"why":"Teorema Faktor."},
    {"s":"Mencari sisa pembagian oleh $(x-k)$ selalu memerlukan pembagian bersusun.","a":false,"why":"Cukup hitung $f(k)$."}
  ],
  "reward":{"xp":20} }
```

## 2️⃣ Cara Cepat Mencari Sisa

Teorema Sisa memiliki beberapa perluasan yang sering muncul pada soal TKA.

### a. Pembagi $(x-k)$ → sisa $f(k)$
Sudah di atas. Contoh: sisa $f(x)=x^{50}+1$ dibagi $(x-1)$ adalah $f(1)=2$.

### b. Pembagi $(ax-b)$ → sisa $f\!\left(\tfrac{b}{a}\right)$
Karena $ax-b = a\left(x-\tfrac{b}{a}\right)$, akar pembaginya $x=\tfrac{b}{a}$. Sisa $= f\!\left(\tfrac{b}{a}\right)$.
Contoh: sisa $f(x)=2x^2 - x + 3$ dibagi $(2x-1)$ adalah $f\!\left(\tfrac12\right)= 2\cdot\tfrac14 - \tfrac12 + 3 = \tfrac12 - \tfrac12 + 3 = 3$.

### c. Pembagi kuadrat → sisa berbentuk $rx+s$ (pakai akar-akar pembagi)
Apabila pembaginya $(x-p)(x-q)$, tuliskan $f(x) = (x-p)(x-q)H(x) + (rx+s)$. Substitusikan $x=p$ dan $x=q$:
$$f(p) = rp + s, \qquad f(q) = rq + s$$
Dua persamaan dengan dua variabel menghasilkan $r$ dan $s$—**tanpa membagi**.

**Contoh.** $f(x)$ dibagi $(x-2)$ sisa $3$, dibagi $(x-3)$ sisa $5$. Tentukan sisa jika dibagi $(x-2)(x-3)$.
Sisa $=rx+s$. $f(2)=2r+s=3$; $f(3)=3r+s=5$. Kurangkan: $r=2$, lalu $s=-1$. **Sisa $=2x-1$.**

> ⚡ **Pola TKA yang sering muncul:** "dibagi A sisa …, dibagi B sisa …, cari sisa dibagi A·B." Selesaikan dengan sistem persamaan dari substitusi akar.

### d. Trik akar kompleks untuk pembagi tak terfaktorkan (pengayaan)
Pembagi $x^2+x+1$ tidak memiliki akar real, tetapi memiliki akar kompleks $\omega$ dengan $\omega^2+\omega+1=0$ dan $\omega^3=1$. Substitusi $x=\omega$ tetap menghilangkan pembagi. Cara ini digunakan untuk menyelesaikan **soal TKA #6 dengan lebih cepat** (lihat bagian di bawah).

---

<!-- COMPONENT: Activity Cloze -->
> **Latihan Interaktif — Melengkapi.** Lengkapi rumus-rumus sisa pembagian berikut.

```json
{ "type":"activity", "widget":"cloze", "id":"04-act-rumus", "competency":"K4",
  "prompt":"Lengkapi rumus sisa pembagian",
  "template":"Sisa pembagian $f(x)$ oleh $(x-k)$ adalah f({{0}}). Sisa pembagian oleh $(ax-b)$ adalah f({{1}}). Untuk pembagi kuadrat, bentuk sisanya adalah {{2}}.",
  "answers":["k","b/a","rx+s"],
  "reward":{"xp":20} }
```

## 3️⃣ Teorema Faktor

Ini akibat langsung Teorema Sisa, dan jadi alat faktorisasi utama.

> **Teorema Faktor.** $(x-k)$ adalah **faktor** dari $f(x)$ **jika dan hanya jika** $f(k)=0$.

Alasannya: $(x-k)$ faktor berarti sisanya $0$; menurut Teorema Sisa sisa $=f(k)$; jadi faktor $\iff f(k)=0$.

Hal ini melahirkan **rantai kesetaraan** yang penting untuk dikuasai:

$$\boxed{\;f(k)=0 \iff (x-k)\text{ faktor } f(x) \iff k \text{ akar } f(x)=0\;}$$

Dengan kata lain: **akar, faktor, dan sisa-nol adalah tiga nama untuk hal yang sama.** Inilah ide pemersatu seluruh materi.

### Contoh

Tunjukkan $(x-3)$ faktor dari $f(x)=x^3 - 4x^2 + x + 6$.
$f(3) = 27 - 36 + 3 + 6 = 0$. Karena $f(3)=0$, menurut Teorema Faktor $(x-3)$ **faktor**. ✔

---

<!-- COMPONENT: Activity Matching -->
> **Latihan Interaktif — Menjodohkan.** Pasangkan tiap pernyataan dengan makna atau prosedur yang setara.

```json
{ "type":"activity", "widget":"matching", "id":"04-act-faktor", "competency":"K4",
  "prompt":"Jodohkan pernyataan yang setara",
  "pairs":[
    ["f(k) = 0","k adalah akar $f(x)=0$"],
    ["$(x-k)$ faktor $f(x)$","sisa f dibagi $(x-k)$ sama dengan 0"],
    ["Menguji faktor $(x+3)$","Hitung $f(-3)$"],
    ["Menguji faktor $(2x-1)$","Hitung $f(1/2)$"]
  ],
  "reward":{"xp":20} }
```

## 4️⃣ Teorema Akar Rasional (Menebak Akar Secara Sistematis)

Untuk memfaktorkan, kita perlu menemukan **satu** akar terlebih dahulu. Menebak secara acak tidak efisien; terdapat cara yang sistematis.

> **Teorema Akar Rasional.** Jika polinomial berkoefisien **bilangan bulat** $a_nx^n+\dots+a_0$ punya akar rasional $\dfrac{p}{q}$ (bentuk paling sederhana), maka:
> - $p$ membagi habis **konstanta** $a_0$, dan
> - $q$ membagi habis **koefisien utama** $a_n$.

Jadi **kandidat akar rasional** $= \pm\dfrac{\text{faktor } a_0}{\text{faktor } a_n}$.

**Contoh (koefisien utama 1).** $f(x)=x^3+3x^2-10x-24$. Karena $a_n=1$, kandidatnya cukup **pembagi konstanta $24$**:
$$\pm1,\ \pm2,\ \pm3,\ \pm4,\ \pm6,\ \pm8,\ \pm12,\ \pm24$$
Setiap kandidat diuji dengan Teorema Sisa (hitung $f$ pada tiap kandidat) hingga ditemukan kandidat yang bernilai $0$.

<!-- COMPONENT: Root Finder Interactive -->
<!-- Daftar kandidat akar rasional; klik kandidat -> app hitung f(kandidat); yang =0 disorot sebagai akar. -->

> ⚡ **Tips efisiensi:** mulai dari kandidat bernilai kecil ($\pm1, \pm2, \pm3$)—akar bilangan bulat sederhana biasanya berada di antaranya. Untuk polinomial monik (koefisien utama 1), jumlah semua akar $= -a_{n-1}$ (petunjuk arah, dari Vieta pada Bab 05).

---

<!-- COMPONENT: Activity Categorize -->
> **Latihan Interaktif — Kategorisasi.** Untuk $f(x)=2x^3-3x^2-3x+2$, kelompokkan tiap bilangan: termasuk **kandidat akar rasional** atau **bukan kandidat**.

```json
{ "type":"activity", "widget":"categorize", "id":"04-act-rasional", "competency":"K4",
  "prompt":"Kandidat akar rasional $f(x)=2x^3-3x^2-3x+2$ adalah ±(faktor 2)/(faktor 2)",
  "categories":["Kandidat akar rasional","Bukan kandidat"],
  "items":[
    ["1","Kandidat akar rasional"],
    ["2","Kandidat akar rasional"],
    ["1/2","Kandidat akar rasional"],
    ["-2","Kandidat akar rasional"],
    ["3","Bukan kandidat"],
    ["1/3","Bukan kandidat"]
  ],
  "reward":{"xp":25} }
```

## 5️⃣ Faktorisasi Polinomial (Mengupas Faktor dengan Horner)

Strategi ini dilakukan bertahap, lapis demi lapis:

1. **Temukan satu akar** $k$ (pakai Teorema Akar Rasional + Teorema Sisa).
2. **Bagi** $f(x)$ oleh $(x-k)$ dengan **Horner** → dapat hasil bagi berderajat lebih rendah.
3. **Ulangi** pada hasil bagi sampai tersisa kuadrat/linear yang mudah difaktorkan.

<!-- COMPONENT: Factor Peeler -->
<!-- Visualkan pengupasan: tiap akar ditemukan -> faktor (x-k) "terlepas", hasil bagi mengecil derajatnya. -->

### 🎯 Menyelesaikan Soal TKA #5

> **Soal.** Di manakah koordinat titik potong grafik $f(x)=x^3+3x^2-10x-24$ terhadap **sumbu $X$**? (Pilih semua yang benar; jawaban lebih dari satu.)

**Gagasan utama:** titik potong sumbu $X$ terjadi saat $f(x)=0$. Dengan demikian, kita mencari **akar-akar** $f(x)=0$—yang merupakan pekerjaan faktorisasi.

**Langkah 1 — cari satu akar.** Kandidat: pembagi $24$. Uji:
$$f(-2) = (-8) + 3(4) - 10(-2) - 24 = -8 + 12 + 20 - 24 = 0$$ ✔
Jadi $x=-2$ akar, dan $(x+2)$ faktor.

**Langkah 2 — Horner untuk mengupas $(x+2)$.** Koefisien $1, 3, -10, -24$, $k=-2$:
```
  -2 │  1     3    -10    -24
     │       -2    -2     24
     │  1     1    -12  |  0
```
Hasil bagi: $x^2 + x - 12$, sisa $0$ (menegaskan $x=-2$ memang akar).

**Langkah 3 — faktorkan sisa kuadrat.** Cari dua bilangan berkali $-12$ berjumlah $1$: yaitu $4$ dan $-3$.
$$x^2 + x - 12 = (x+4)(x-3)$$

**Faktorisasi penuh:**
$$f(x) = (x+2)(x+4)(x-3)$$
Akar-akarnya: $x=-2,\ x=-4,\ x=3$. Maka titik potong sumbu $X$ ada di
$$(-2,0),\quad (-4,0),\quad (3,0).$$

**Menjawab pilihan yang tersedia** $\{(-2,0),(-1,0),(3,0),(4,0),(5,0)\}$: yang benar adalah **$(-2,0)$ dan $(3,0)$**. (Titik $(-4,0)$ juga akar tetapi tidak tercantum; $(-1,0),(4,0),(5,0)$ **bukan** akar — cek: $f(-1)=-12$, $f(4)=48$, $f(5)=126$, semua $\neq0$.)

> ⚠️ **Jebakan soal "pilih semua yang benar":** jangan berhenti setelah menemukan satu akar. Faktorkan **secara penuh**, lalu **cocokkan** dengan opsi. Perhatikan pula bahwa akar yang benar namun **tidak** tercantum pada pilihan bukan alasan untuk menandai opsi lain.

### 🎯 Soal TKA #6 — Versi Cepat (Trik Akar Kompleks)

> $f(x)=x^4+ax^3+bx^2+x-6$ dibagi $x^2+x+1$ bersisa $5x-1$. Nilai $a+b$?

Pembagi $x^2+x+1$ punya akar $\omega$ dengan $\omega^2+\omega+1=0$ (sehingga $\omega^2=-\omega-1$) dan $\omega^3=1$. Tulis $f(x)=(x^2+x+1)H(x)+(5x-1)$ lalu substitusi $x=\omega$ (yang membunuh pembagi):
$$f(\omega)=5\omega-1$$
Hitung $f(\omega)$ dengan mereduksi pangkat via $\omega^3=1$: $\omega^4=\omega$, $\omega^3=1$.
$$f(\omega)=\omega + a(1) + b\omega^2 + \omega - 6 = b\omega^2 + 2\omega + (a-6)$$
Ganti $\omega^2=-\omega-1$:
$$f(\omega) = b(-\omega-1) + 2\omega + (a-6) = (2-b)\omega + (a-b-6)$$
Samakan dengan $5\omega-1$ (karena $1,\omega$ bebas linear):
$$2-b=5 \Rightarrow b=-3, \qquad a-b-6=-1 \Rightarrow a=2$$
Jadi $a+b=-1$—**sama dengan hasil pembagian pada Bab 03**, namun tanpa pembagian panjang.

---

<!-- COMPONENT: Activity Ordering -->
> **Latihan Interaktif — Mengurutkan.** Susun langkah faktorisasi polinomial secara berurutan.

```json
{ "type":"activity", "widget":"ordering", "id":"04-act-langkah", "competency":"K4",
  "prompt":"Urutkan langkah memfaktorkan polinomial",
  "options":["Tentukan kandidat akar rasional","Uji kandidat dengan Teorema Sisa hingga $f(k)=0$","Bagi $f(x)$ oleh $(x-k)$ menggunakan Horner","Ulangi pada hasil bagi hingga tersisa kuadrat, lalu faktorkan"],
  "answer_order":[0,1,2,3],
  "reward":{"xp":20} }
```

## 6️⃣ Hubungan Faktor, Akar, dan Sisa (Ringkasan Konsep)

Satu diagram untuk mengunci pemahaman:

```
             f(k) = 0
            /         \
   (x-k) faktor      k adalah akar
            \         /
        sisa f÷(x-k) = 0
```

Ketiganya **saling menyiratkan**. Mengetahui salah satu berarti mengetahui ketiganya. Konsekuensi penting:

- Polinomial derajat $n$ punya **paling banyak $n$ akar** (karena tiap akar menyumbang satu faktor linear).
- Apabila **semua** akar $r_1, r_2, \dots, r_n$ dari polinomial monik telah diketahui, maka
$$f(x) = (x-r_1)(x-r_2)\cdots(x-r_n)$$
(Ini pintu masuk **Vieta**, Bab 05.)

---

<!-- COMPONENT: Activity ErrorHunt -->
> **Latihan Interaktif — Menemukan Kesalahan.** Cermati pengerjaan berikut; terdapat satu langkah yang keliru.

```json
{ "type":"activity", "widget":"error-hunt", "id":"04-act-trap", "competency":"K4",
  "prompt":"Untuk $f(x)=x^3+3x^2-10x-24$, seorang siswa menentukan titik potong sumbu X. Manakah langkah yang salah?",
  "steps":[
    "Titik potong sumbu X terjadi saat $f(x)=0$.",
    "Faktorisasi: $f(x)=(x+2)(x+4)(x-3)$, sehingga akarnya $-2, -4$, dan 3.",
    "Dari opsi yang tersedia, tandai $(-2,0)$ dan $(3,0)$.",
    "Karena $-4$ adalah akar, tandai juga $(4,0)$."
  ],
  "wrong_index":3,
  "why":"Akar yang ditemukan adalah $-4$, sehingga titik potongnya $(-4,0)$, bukan $(4,0)$. Titik $(4,0)$ bukan akar karena $f(4)=48$ tidak sama dengan 0.",
  "reward":{"xp":25} }
```

## 📘 Contoh Bertingkat

### 🟢 Sederhana

**S1.** Sisa $f(x)=x^2+3x-1$ dibagi $(x-2)$.
*Pembahasan.* $f(2)=4+6-1=9$. Sisa $9$.

**S2.** Apakah $(x-1)$ faktor $f(x)=x^3-1$?
*Pembahasan.* $f(1)=1-1=0$ → **ya**, faktor.

**S3.** Salah satu akar $f(x)=x^2-5x+6$? Cek $x=2$.
*Pembahasan.* $f(2)=4-10+6=0$ → $x=2$ **akar**.

### 🟡 Sedang

**M1.** Sisa $f(x)=2x^3-x+4$ dibagi $(2x-1)$.
*Pembahasan.* $f(\tfrac12)=2\cdot\tfrac18-\tfrac12+4=\tfrac14-\tfrac12+4=\tfrac{15}{4}$. Sisa $\tfrac{15}{4}$.

**M2.** Faktorkan $f(x)=x^3-6x^2+11x-6$.
*Pembahasan.* $f(1)=1-6+11-6=0$ → akar $1$. Horner $(k=1)$: $1,-5,6\,|\,0$ → $x^2-5x+6=(x-2)(x-3)$. Jadi $f(x)=(x-1)(x-2)(x-3)$.

**M3.** $f(x)$ dibagi $(x-1)$ sisa $4$, dibagi $(x+2)$ sisa $-5$. Sisa dibagi $(x-1)(x+2)$?
*Pembahasan.* $S=rx+s$. $f(1)=r+s=4$; $f(-2)=-2r+s=-5$. Kurangkan: $3r=9\Rightarrow r=3$; $s=1$. Sisa $=3x+1$.

### 🧠 HOTS

**H1.** Tentukan $a$ agar $(x+1)$ faktor dari $x^3 + ax^2 - x - 2$.
*Pembahasan.* $(x+1)$ faktor → $f(-1)=0$: $-1 + a + 1 - 2 = 0 \Rightarrow a = 2$.

**H2.** $f(x)=x^3 + px + q$ habis dibagi $(x-1)$ dan $(x-2)$. Tentukan $p,q$ lalu akar ketiganya.
*Pembahasan.* $f(1)=1+p+q=0$; $f(2)=8+2p+q=0$. Kurangkan: $7+p=0\Rightarrow p=-7$; $q=6$. Jadi $f(x)=x^3-7x+6$. Akar $1,2$, dan karena jumlah akar $=0$ (tak ada suku $x^2$), akar ketiga $=-3$. (Cek $f(-3)=-27+21+6=0$ ✔.)

**H3.** Buktikan $(x-1)$ selalu faktor dari $x^n - 1$ untuk setiap bilangan asli $n$.
*Pembahasan.* Misal $f(x)=x^n-1$. Maka $f(1)=1^n-1=0$. Menurut Teorema Faktor, $f(1)=0 \Rightarrow (x-1)$ faktor. Berlaku untuk semua $n$. ∎

---

## ⚠️ Kesalahan yang Sering Dilakukan Siswa

1. **Salah tanda $k$** pada Teorema Sisa/Faktor. Pembagi $(x+3)$ → uji $f(-3)$, bukan $f(3)$.
2. **Berhenti setelah satu akar** saat diminta semua akar/faktor. Kupas sampai habis.
3. **Lupa syarat "koefisien bulat"** pada Teorema Akar Rasional.
4. **Membagi seluruh polinomial (lambat) padahal hanya membutuhkan sisa.** Gunakan $f(k)$.
5. **Menandai opsi yang bukan akar** di soal "pilih semua benar" — selalu verifikasi tiap opsi dengan substitusi.
6. Mengira **derajat $n$ pasti punya $n$ akar real** — yang benar: **paling banyak** $n$ (beberapa bisa kompleks/kembar).

---

## ⚡ Tips Cepat

- Butuh sisa? **Hitung $f(k)$** — jangan membagi.
- Pembagi $(ax-b)$? Sisa $=f\!\left(\tfrac{b}{a}\right)$.
- "Dibagi A sisa …, dibagi B sisa …" → **sistem persamaan** dari akar-akar.
- Faktorisasi: **Akar Rasional → uji $\pm$pembagi konstanta → Horner → ulangi.**
- Ingat rantai: **$f(k)=0 \iff$ faktor $\iff$ akar $\iff$ sisa nol.**

---

## ✅ Ringkasan Sub Materi

- **Teorema Sisa:** sisa $f\div(x-k)=f(k)$. Untuk $(ax-b)$: $f(\tfrac{b}{a})$.
- **Teorema Faktor:** $(x-k)$ faktor $\iff f(k)=0 \iff k$ akar.
- **Teorema Akar Rasional:** kandidat akar $=\pm\frac{\text{faktor konstanta}}{\text{faktor koef utama}}$.
- **Faktorisasi:** temukan akar → Horner → ulangi sampai tuntas.
- **Ide pemersatu:** faktor, akar, dan sisa-nol adalah hal yang sama; derajat $n$ → maksimal $n$ akar.

---

## 📝 Latihan Bertingkat

<!-- COMPONENT: Quiz -->

### 🟢 Set A — 10 Soal Mudah (sisa/faktor)
1. Sisa $x^2+1$ ÷ $(x-2)$.
2. Sisa $x^3-x$ ÷ $(x-1)$.
3. Apakah $(x-2)$ faktor $x^2-4$?
4. Apakah $(x+1)$ faktor $x^3+1$?
5. Sisa $x^4$ ÷ $(x+1)$.
6. Akar dari $(x-5)$ sebagai faktor?
7. Apakah $x=3$ akar $x^2-9$?
8. Sisa $2x-7$ ÷ $(x-3)$.
9. Apakah $(x-1)$ faktor $x^5-1$?
10. Sisa $x^3+2x^2$ ÷ $(x-0)$ yaitu $x$.

```json
{
  "set_id":"04-set-A-mudah","level":"mudah",
  "items":[
    {"id":"A1","type":"short","question":"Sisa $x^2+1 \\div (x-2)$","answer":"5","explanation":"f(2)=5."},
    {"id":"A2","type":"short","question":"Sisa $x^3-x \\div (x-1)$","answer":"0","explanation":"f(1)=0."},
    {"id":"A3","type":"mc","question":"$(x-2)$ faktor $x^2-4$?","options":["Ya","Tidak"],"answer":"Ya","explanation":"f(2)=0."},
    {"id":"A4","type":"mc","question":"$(x+1)$ faktor $x^3+1$?","options":["Ya","Tidak"],"answer":"Ya","explanation":"f(-1)=0."},
    {"id":"A5","type":"short","question":"Sisa $x^4 \\div (x+1)$","answer":"1","explanation":"f(-1)=1."},
    {"id":"A6","type":"short","question":"Akar dari faktor $(x-5)$","answer":"5","explanation":"x-5=0 → x=5."},
    {"id":"A7","type":"mc","question":"$x=3$ akar $x^2-9$?","options":["Ya","Tidak"],"answer":"Ya","explanation":"9-9=0."},
    {"id":"A8","type":"short","question":"Sisa $2x-7 \\div (x-3)$","answer":"-1","explanation":"f(3)=-1."},
    {"id":"A9","type":"mc","question":"$(x-1)$ faktor $x^5-1$?","options":["Ya","Tidak"],"answer":"Ya","explanation":"f(1)=0."},
    {"id":"A10","type":"short","question":"Sisa $x^3+2x^2 \\div x$","answer":"0","explanation":"$f(0)=0$ (konstanta 0)."}
  ]
}
```
<details><summary><strong>Pembahasan Set A</strong></summary>

1. $f(2)=5$. 2. $f(1)=0$. 3. $f(2)=0$→ya. 4. $f(-1)=0$→ya. 5. $f(-1)=1$. 6. $x=5$. 7. ya ($9-9=0$). 8. $f(3)=-1$. 9. $f(1)=0$→ya. 10. $f(0)=0$.
</details>

### 🟡 Set B — 10 Soal Sedang
1. Sisa $x^3-2x^2+3x-1$ ÷ $(x-2)$.
2. Tentukan $a$ agar $(x-1)$ faktor $x^3+ax-3$.
3. Faktorkan $x^3-7x+6$.
4. Sisa $2x^3+x$ ÷ $(2x+1)$.
5. Apakah $x=-3$ akar $x^3+3x^2-10x-24$?
6. $f(x)$ dibagi $(x-2)$ sisa $1$, dibagi $(x-4)$ sisa $7$. Sisa dibagi $(x-2)(x-4)$?
7. Tentukan $c$ agar $x^3-4x^2+c$ habis dibagi $(x-1)$.
8. Faktorkan $x^3+2x^2-x-2$.
9. Sisa $x^{100}-2$ ÷ $(x+1)$.
10. Salah satu akar $x^3-3x-2$? (uji $x=-1$).

```json
{
  "set_id":"04-set-B-sedang","level":"sedang",
  "items":[
    {"id":"B1","type":"short","question":"Sisa $x^3-2x^2+3x-1 \\div (x-2)$","answer":"5","explanation":"f(2)=8-8+6-1=5."},
    {"id":"B2","type":"short","question":"a agar $(x-1)$ faktor $x^3+ax-3$","answer":"2","explanation":"f(1)=1+a-3=0 → a=2."},
    {"id":"B3","type":"short","question":"Faktorkan $x^3-7x+6$","answer":"(x-1)(x-2)(x+3)","explanation":"Akar $1,2,-3$."},
    {"id":"B4","type":"short","question":"Sisa $2x^3+x \\div (2x+1)$","answer":"-3/4","explanation":"f(-1/2)=2(-1/8)-1/2=-1/4-1/2=-3/4."},
    {"id":"B5","type":"mc","question":"$x=-3$ akar $x^3+3x^2-10x-24$?","options":["Ya","Tidak"],"answer":"Tidak","explanation":"f(-3)=-27+27+30-24=6≠0."},
    {"id":"B6","type":"short","question":"Sisa dibagi $(x-2)(x-4)$; $f(2)=1,f(4)=7$","answer":"3x-5","explanation":"2r+s=1,4r+s=7→r=3,s=-5."},
    {"id":"B7","type":"short","question":"c agar $x^3-4x^2+c$ habis dibagi $(x-1)$","answer":"3","explanation":"f(1)=1-4+c=0 → c=3."},
    {"id":"B8","type":"short","question":"Faktorkan $x^3+2x^2-x-2$","answer":"(x-1)(x+1)(x+2)","explanation":"Akar $1,-1,-2$."},
    {"id":"B9","type":"short","question":"Sisa $x^{100}-2 \\div (x+1)$","answer":"-1","explanation":"f(-1)=1-2=-1."},
    {"id":"B10","type":"mc","question":"$x=-1$ akar $x^3-3x-2$?","options":["Ya","Tidak"],"answer":"Ya","explanation":"-1+3-2=0."}
  ]
}
```
<details><summary><strong>Pembahasan Set B</strong></summary>

1. $f(2)=8-8+6-1=5$.
2. $f(1)=1+a-3=0\Rightarrow a=2$.
3. $f(1)=0$; Horner → $x^2+x-6=(x+3)(x-2)$; jadi $(x-1)(x-2)(x+3)$.
4. $f(-\tfrac12)=2(-\tfrac18)+(-\tfrac12)=-\tfrac14-\tfrac12=-\tfrac34$.
5. $f(-3)=-27+27+30-24=6\neq0$ → **bukan** akar. (Akar sebenarnya $-2,-4,3$.)
6. $2r+s=1$, $4r+s=7$ → $r=3, s=-5$. Sisa $3x-5$.
7. $f(1)=1-4+c=0\Rightarrow c=3$.
8. $f(1)=1+2-1-2=0$; Horner → $x^2+3x+2=(x+1)(x+2)$; jadi $(x-1)(x+1)(x+2)$.
9. $f(-1)=(-1)^{100}-2=1-2=-1$.
10. $f(-1)=-1+3-2=0$ → ya.
</details>

### 🔴 Set C — 10 Soal Sulit
1. Faktorkan $x^4-5x^2+4$.
2. Tentukan $a,b$ agar $x^3+ax^2+bx-6$ habis dibagi $(x-1)$ dan $(x+2)$.
3. Sisa $f(x)=x^3-2x+1$ dibagi $(x^2-1)$.
4. Faktorkan $2x^3-3x^2-3x+2$ (koef utama $\neq1$).
5. $f(x)$ dibagi $(x-1)$ sisa $2$, dibagi $(x-2)$ sisa $3$, dibagi $(x-3)$ sisa $6$. Sisa dibagi $(x-1)(x-2)(x-3)$.
6. Tunjukkan $(x+2)$ faktor $x^3+3x^2-10x-24$ dan faktorkan penuh.
7. Tentukan semua akar $x^4-1$.
8. Jika $(x-2)$ dan $(x+2)$ faktor $x^4+ax^2+b$, tentukan hubungan $a,b$.
9. Sisa $x^{2026}+x+1$ dibagi $(x^2-1)$.
10. Buktikan $(x-a)$ faktor $x^n-a^n$.

```json
{
  "set_id":"04-set-C-sulit","level":"sulit",
  "items":[
    {"id":"C1","type":"short","question":"Faktorkan $x^4-5x^2+4$","answer":"(x-1)(x+1)(x-2)(x+2)","explanation":"(x^2-1)(x^2-4)."},
    {"id":"C2","type":"short","question":"a,b agar $x^3+ax^2+bx-6$ habis $(x-1)$&$(x+2)$","answer":"a=4, b=1","explanation":"$f(1)=0→a+b=5$; $f(-2)=0→2a-b=7$; maka $a=4,b=1$."},
    {"id":"C3","type":"short","question":"Sisa $x^3-2x+1 \\div (x^2-1)$","answer":"-x+1","explanation":"f(1)=0=r+s, f(-1)=2=-r+s → r=-1,s=1."},
    {"id":"C4","type":"short","question":"Faktorkan $2x^3-3x^2-3x+2$","answer":"(x-2)(2x-1)(x+1)","explanation":"Akar $2,1/2,-1$."},
    {"id":"C5","type":"short","question":"Sisa dibagi $(x-1)(x-2)(x-3)$; $f=2,3,6$","answer":"x^2-2x+3","explanation":"$S=ax^2+bx+c$ lewat 3 titik."},
    {"id":"C6","type":"short","question":"Faktorkan $x^3+3x^2-10x-24$","answer":"(x+2)(x+4)(x-3)","explanation":"Akar $-2,-4,3$."},
    {"id":"C7","type":"short","question":"Akar $x^4-1$","answer":"$x=1,-1$ (real); $±i$ (kompleks)","explanation":"(x^2-1)(x^2+1)."},
    {"id":"C8","type":"short","question":"$(x-2),(x+2)$ faktor $x^4+ax^2+b$","answer":"$16+4a+b=0$ (dari $f(2)=0$)","explanation":"f(2)=f(-2)=16+4a+b=0."},
    {"id":"C9","type":"short","question":"Sisa $x^{2026}+x+1 \\div (x^2-1)$","answer":"x+2","explanation":"x^{2026}≡1 → 1+x+1=x+2."},
    {"id":"C10","type":"proof","question":"Buktikan $(x-a)$ faktor $x^n-a^n$","answer":"f(a)=a^n-a^n=0","explanation":"Teorema Faktor."}
  ]
}
```
<details><summary><strong>Pembahasan Set C</strong></summary>

1. $x^4-5x^2+4=(x^2-1)(x^2-4)=(x-1)(x+1)(x-2)(x+2)$.
2. $f(1)=1+a+b-6=0\Rightarrow a+b=5$. $f(-2)=-8+4a-2b-6=0\Rightarrow 4a-2b=14\Rightarrow 2a-b=7$. Jumlahkan dengan $a+b=5$: $3a=12\Rightarrow a=4$; $b=1$. **Jadi $a=4,\ b=1$.**
3. Sisa $rx+s$. $f(1)=1-2+1=0=r+s$; $f(-1)=-1+2+1=2=-r+s$. Kurangkan: $2r=-2\Rightarrow r=-1$; $s=1$. Sisa $-x+1$.
4. Kandidat $\pm1,\pm2,\pm\tfrac12$. $f(2)=16-12-6+2=0$→akar $2$. Horner $(k=2)$ pada $2,-3,-3,2$: $2,1,-1\,|\,0$ → $2x^2+x-1=(2x-1)(x+1)$. Jadi $(x-2)(2x-1)(x+1)$.
5. Sisa $S(x)=ax^2+bx+c$ lewat $(1,2),(2,3),(3,6)$: $a+b+c=2$; $4a+2b+c=3$; $9a+3b+c=6$. Selisih: $3a+b=1$ dan $5a+b=3$ → $2a=2\Rightarrow a=1$; $b=-2$; $c=3$. Sisa $x^2-2x+3$.
6. $f(-2)=-8+12+20-24=0$ → $(x+2)$ faktor. Horner → $x^2+x-12=(x+4)(x-3)$. Penuh: $(x+2)(x+4)(x-3)$.
7. $x^4-1=(x^2-1)(x^2+1)$. Akar real $1,-1$; akar kompleks $\pm i$.
8. $f(2)=16+4a+b=0$; $f(-2)=16+4a+b=0$ (sama). Jadi syaratnya $16+4a+b=0$ (satu persamaan; $(x-2),(x+2)$ memberi info identik karena fungsi genap).
9. $x^{2026}=(x^2)^{1013}\equiv1$. Maka $x^{2026}+x+1\equiv 1+x+1=x+2$. Sisa $x+2$.
10. $f(x)=x^n-a^n$; $f(a)=a^n-a^n=0$ → $(x-a)$ faktor. ∎
</details>

### 🧠 Set D — 5 Soal HOTS
1. $f(x)=x^3+px^2+qx+r$ punya akar $1,2,3$. Tentukan $p,q,r$.
2. Sisa $f(x)$ dibagi $(x-1)$ adalah $3$; dibagi $(x^2+1)$ adalah $2x-1$. Tentukan $f(1)$ dan $f(i)$ (nilai kompleks).
3. Buktikan bahwa jika $f$ berderajat $3$ dan $f(1)=f(2)=f(3)=0$, maka $f(x)=a(x-1)(x-2)(x-3)$.
4. Tentukan $k$ agar $x^3-kx+2$ memiliki $(x-1)$ sebagai faktor, lalu cari akar lainnya.
5. Polinomial monik derajat 3 berakar $-2,-4,3$. Tuliskan $f(x)$ dalam bentuk baku (kaitkan ke soal TKA #5).

```json
{
  "set_id":"04-set-D-hots","level":"hots",
  "items":[
    {"id":"D1","type":"short","question":"p,q,r jika akar 1,2,3","answer":"p=-6,q=11,r=-6","explanation":"(x-1)(x-2)(x-3)=x^3-6x^2+11x-6."},
    {"id":"D2","type":"short","question":"$f(1)$ & $f(i)$ dari info sisa","answer":"f(1)=3, f(i)=2i-1","explanation":"Sisa oleh $(x^2+1)$ dievaluasi di $x=i$."},
    {"id":"D3","type":"proof","question":"Buktikan $f=a(x-1)(x-2)(x-3)$","answer":"tiga faktor linear dari tiga akar","explanation":"Teorema Faktor + derajat 3."},
    {"id":"D4","type":"short","question":"k agar $(x-1)$ faktor $x^3-kx+2$; akar lain","answer":"$k=3$; akar $x=1$ (ganda) dan $x=-2$","explanation":"$f(1)=1-k+2=0$→$k=3$; Horner → $x^2+x-2=(x-1)(x+2)$."},
    {"id":"D5","type":"short","question":"Monik akar $-2,-4,3$ (bentuk baku)","answer":"x^3+3x^2-10x-24","explanation":"Ini fungsi soal TKA #5."}
  ]
}
```
<details><summary><strong>Pembahasan Set D</strong></summary>

1. $f(x)=(x-1)(x-2)(x-3)=x^3-6x^2+11x-6$ → $p=-6,\ q=11,\ r=-6$.
2. $f(1)=$ sisa dibagi $(x-1)=3$. Untuk $f(i)$: karena $i^2+1=0$, substitusi $x=i$ ke $f(x)=(x^2+1)H(x)+(2x-1)$ memberi $f(i)=2i-1$.
3. Tiga akar $1,2,3$ memberi tiga faktor $(x-1),(x-2),(x-3)$. Hasil kalinya berderajat 3; karena $f$ juga derajat 3, keduanya berbeda paling banyak faktor konstanta $a$ (koefisien utama). Jadi $f(x)=a(x-1)(x-2)(x-3)$. ∎
4. $f(1)=1-k+2=0\Rightarrow k=3$. Horner $(k_{\text{akar}}=1)$ pada $1,0,-3,2$: $1,1,-2\,|\,0$ → $x^2+x-2=(x+2)(x-1)$. Akar lain: $x=-2$ dan $x=1$ (kembar). Jadi akar $1$ (ganda) dan $-2$.
5. Monik: $f(x)=(x+2)(x+4)(x-3)$. Jabarkan: $(x+2)(x+4)=x^2+6x+8$; kali $(x-3)$: $x^3+3x^2-10x-24$. Persis fungsi **soal TKA #5**.
</details>

### 🏆 Set E — 5 Soal Model TKA
1. **(TKA #5)** Titik potong sumbu $X$ grafik $f(x)=x^3+3x^2-10x-24$? (pilih dari $(-2,0),(-1,0),(3,0),(4,0),(5,0)$)
2. **(TKA #6, cara cepat)** $x^4+ax^3+bx^2+x-6$ dibagi $x^2+x+1$ sisa $5x-1$. Nilai $a+b$?
3. **(Analisis)** $f(x)=x^3-6x^2+11x-6$. Berapa banyak titik potong sumbu $X$?
4. **(Konteks)** Fungsi laba $L(x)=x^3-4x^2+x+6$ (juta). Pada produksi berapa unit laba $=0$? (akar positif)
5. **(Penalaran)** Jika $(x-1)$ dan $(x+1)$ faktor $f(x)=x^4+ax^2+b$ dan $f(0)=-4$, tentukan $a,b$.

```json
{
  "set_id":"04-set-E-tka","level":"tka",
  "items":[
    {"id":"E1","type":"multi","source":"TKA-2024-no5","question":"Titik potong sumbu X dari $x^3+3x^2-10x-24$","options":["(-2,0)","(-1,0)","(3,0)","(4,0)","(5,0)"],"answer":["(-2,0)","(3,0)"],"explanation":"Akar $-2,-4,3$; yang tersedia di opsi: $-2$ dan 3."},
    {"id":"E2","type":"mc","source":"TKA-2024-no6","question":"$a+b$ jika sisa $5x-1$","options":["11","5","-1","-5","-7"],"answer":"-1","explanation":"a=2,b=-3."},
    {"id":"E3","type":"short","question":"Banyak titik potong X dari $x^3-6x^2+11x-6$","answer":"3","explanation":"Akar 1,2,3 semuanya real & berbeda."},
    {"id":"E4","type":"short","question":"Akar positif $L(x)=x^3-4x^2+x+6$","answer":"$x=2$ dan $x=3$","explanation":"$(x+1)(x-2)(x-3)$; akar positif 2 dan 3."},
    {"id":"E5","type":"short","question":"a,b jika $(x-1),(x+1)$ faktor & $f(0)=-4$","answer":"a=3, b=-4","explanation":"f(0)=b=-4; f(1)=1+a+b=0→a=3."}
  ]
}
```
<details><summary><strong>Pembahasan Set E</strong></summary>

**E1.** Faktorisasi $(x+2)(x+4)(x-3)$ → akar $-2,-4,3$. Yang tercantum di opsi: **$(-2,0)$ dan $(3,0)$**. Verifikasi opsi lain: $f(-1)=-12$, $f(4)=48$, $f(5)=126$ — bukan akar.

**E2.** Trik akar kompleks / pembagian simbolik → $a=2,\ b=-3$ → $a+b=\mathbf{-1}$ (C).

**E3.** $x^3-6x^2+11x-6=(x-1)(x-2)(x-3)$ → tiga akar real berbeda → **3 titik potong**.

**E4.** $L(-1)=-1-4-1+6=0$ → $(x+1)$ faktor. Horner → $x^2-5x+6=(x-2)(x-3)$. Akar $-1,2,3$; **akar positif $2$ dan $3$** (pada produksi 2 atau 3 unit laba $=0$).

**E5.** $f(0)=b=-4$. $f(1)=1+a+b=0\Rightarrow 1+a-4=0\Rightarrow a=3$. (Cek $f(-1)=1+a+b=0$ juga ✔, konsisten karena fungsi genap.)
</details>

---

## 🏆 Tantangan Akhir Bab 4 — Uji Kompetensi

<!-- COMPONENT: Tantangan Akhir Bab
     DEVELOPER: render sebagai sesi soal berwaktu dengan rekap capaian (bintang, poin, waktu terbaik).
     Framing tetap sebagai asesmen/umpan balik belajar, bukan permainan peran. -->
> Kerjakan rangkaian soal berikut dalam mode berwaktu untuk menguji penguasaan Anda atas Teorema Sisa dan Teorema Faktor. Perolehan bintang dan poin merupakan umpan balik atas ketepatan serta kecepatan; sistem menyimpan capaian terbaik Anda sebagai catatan kemajuan belajar.

```json
{ "type":"challenge", "id":"04-tantangan", "competency":"K4",
  "title":"Tantangan Akhir Bab 4: Teorema Sisa dan Teorema Faktor",
  "mode":"timed", "time_limit_sec":210, "shuffle":true,
  "pool":["04-act-sisa","04-act-rumus","04-act-faktor","04-act-rasional","04-act-langkah","04-act-trap","04-set-A-mudah"],
  "scoring":{"per_correct":10,"time_bonus":true},
  "stars":{"3":90,"2":70,"1":50},
  "reward":{"xp":80,"badge":"ahli-teorema"},
  "record":{"track_best_time":true,"track_best_score":true} }
```

---

## 📝 Refleksi

<!-- COMPONENT: Reflection -->
1. Jelaskan dengan satu kalimat mengapa $f(k)=0$ berarti $(x-k)$ merupakan faktor.
2. Saat memfaktorkan polinomial berderajat 4, apa langkah pertama yang Anda lakukan?
3. Pada soal "pilih semua yang benar", kesalahan apa yang perlu Anda hindari?

---

## ➡️ Persiapan Menuju Sub Materi Berikutnya

Pada bab ini, kita telah mampu mencari sisa tanpa membagi, menentukan faktor dan akar, serta **memfaktorkan secara penuh**—termasuk menyelesaikan soal TKA #5 dan #6.

Pada **Bab 05 — Persamaan Polinomial & Teorema Vieta**, arah pembahasan dibalik: alih-alih *mencari* akar dari polinomial, kita mempelajari **hubungan langsung antara akar dan koefisien** (Vieta). Kita akan dapat menjawab "berapa jumlah akar?" atau "berapa hasil kali akar?" **tanpa mencari akarnya satu per satu**, serta menyusun persamaan hanya dari syarat akar.

Bekal dari bab ini: $f(x)=(x-r_1)(x-r_2)\cdots$ dari akar-akarnya, serta pengalaman melihat konsep "jumlah akar" pada soal saham.

> Lanjutkan ke **Bab 05**.

<!-- COMPONENT: Summary -->
<!-- Progress bar: 5/8. -->
