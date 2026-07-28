---
id: "04-teorema-sisa-dan-faktor"
slug: "teorema-sisa-dan-faktor"
title: "Teorema Sisa dan Teorema Faktor"
order: 4
duration_min: 85
level: "Kelas XI - Kurikulum Merdeka"
track: "TKA Matematika Lanjut"
prerequisites:
  - "03-pembagian-polinomial"
competencies:
  - "K4: Menerapkan Teorema Sisa & Teorema Faktor"
learning_objectives:
  - "Membuktikan & menerapkan Teorema Sisa"
  - "Mencari sisa tanpa membagi, termasuk pembagi kuadrat"
  - "Menerapkan Teorema Faktor untuk menentukan faktor & akar"
  - "Menggunakan Teorema Akar Rasional"
  - "Memfaktorkan polinomial dengan bantuan Horner"
tags: ["teorema-sisa", "teorema-faktor", "akar", "faktorisasi", "akar-rasional"]
layout: "sub-materi"
sub_materi:
  - { id: "1", title: "Teorema Sisa" }
  - { id: "2", title: "Mencari Sisa Tanpa Membagi" }
  - { id: "3", title: "Teorema Faktor" }
  - { id: "4", title: "Teorema Akar Rasional" }
  - { id: "5", title: "Faktorisasi Polinomial" }
components:
  - "Info Cards"
  - "Sub Materi"
  - "Activity Guided"
  - "Activity TrueFalse"
  - "Activity Matching"
  - "Activity Categorize"
  - "Activity Ordering"
  - "Activity ErrorHunt"
  - "Quiz Cards"
  - "Tantangan Akhir Bab"
  - "Reflection"
activities:
  - "04-g1"
  - "04-m1"
  - "04-g2"
  - "04-m2"
  - "04-g3"
  - "04-m3"
  - "04-g4"
  - "04-m4"
  - "04-g5"
  - "04-m5"
challenge: "04-tantangan"
xp_available: 235
katex: true
---

# Bab 04 — Teorema Sisa dan Teorema Faktor

<!-- COMPONENT: Info Cards
     DEVELOPER: enam bagian di bawah dirender sebagai KARTU berwarna berbeda; klik -> POP-UP.
     Ikon Lucide: target, puzzle, package, clock, map, flame. -->

<details data-card="tujuan" data-icon="target">
<summary>🎯 Tujuan Pembelajaran</summary>

Setelah mempelajari bab ini, peserta didik diharapkan mampu:

1. Membuktikan dan menerapkan Teorema Sisa.
2. Mencari sisa pembagian tanpa melakukan pembagian, termasuk untuk pembagi kuadrat.
3. Menerapkan Teorema Faktor untuk menentukan faktor dan akar.
4. Menggunakan Teorema Akar Rasional untuk menemukan akar secara sistematis.
5. Memfaktorkan polinomial dengan bantuan skema Horner.

</details>

<details data-card="kompetensi" data-icon="puzzle">
<summary>🧩 Kompetensi</summary>

**K4 — Menerapkan Teorema Sisa dan Teorema Faktor.**

</details>

<details data-card="prasyarat" data-icon="package">
<summary>📦 Prasyarat</summary>

- Bab 02: substitusi $f(k)$.
- Bab 03: algoritma pembagian dan skema Horner.

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
Teorema Sisa → Sisa Tanpa Membagi → Teorema Faktor → Akar Rasional → Faktorisasi
```

</details>

<details data-card="motivasi" data-icon="flame">
<summary>🔥 Motivasi</summary>

Pada Bab 03 kita berulang kali melihat bahwa sisa pembagian oleh $(x-k)$ selalu sama dengan $f(k)$. Pola itu ternyata sebuah teorema. Dengan teorema ini kita dapat mencari sisa **tanpa membagi**, menentukan faktor hanya dengan memeriksa $f(k)=0$, dan memfaktorkan polinomial berderajat tinggi. Pada bab inilah seluruh konsep Bab 01–03 saling terhubung.

</details>

---

<!-- COMPONENT: Sub Materi
     DEVELOPER: judul sub-materi WAJIB sticky di bawah judul bab saat digulir. -->

## 1️⃣ Teorema Sisa

> **Teorema Sisa.** Jika $f(x)$ dibagi oleh $(x-k)$, maka **sisanya adalah $f(k)$**.

<!-- VISUAL: Pembuktian bertahap
     DEVELOPER: tampilkan bukti sebagai tiga kartu berurutan yang muncul satu per satu saat
     tombol "berikutnya" ditekan. Pada langkah substitusi, animasikan faktor (x-k) berubah
     menjadi nol lalu memudar, sehingga hanya S yang tersisa. -->

**Buktinya singkat.** Menurut algoritma pembagian:
$$f(x) = \htmlClass{hl-1}{(x-k)}\,H(x) + \htmlClass{hl-2}{S}$$

Substitusikan $x=k$, sehingga faktor $(x-k)$ menjadi nol:
$$f(k) = \htmlClass{hl-1}{0}\cdot H(k) + \htmlClass{hl-2}{S} = \htmlClass{hl-2}{S}$$

Jadi $S = f(k)$. ∎

> 💡 Inilah alasan angka terakhir pada skema Horner selalu sama dengan $f(k)$.

### 📘 Contoh

Tentukan sisa pembagian $f(x)=2x^3-3x^2+4x-5$ oleh $(x-2)$.

Tanpa membagi: $f(2) = 16 - 12 + 8 - 5 = 7$. Sisanya **7** — sama dengan hasil pembagian panjang pada Bab 03, tetapi jauh lebih cepat.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"04-g1", "competency":"K4",
  "title":"Menerapkan Teorema Sisa",
  "prompt":"Tentukan sisa pembagian $f(x)=x^3-2x^2+3x-1$ oleh $(x-2)$.",
  "steps":[
    {"ask":"Langkah 1. Menurut Teorema Sisa, sisa pembagian oleh $(x-2)$ sama dengan ….","type":"mc","options":["$f(2)$","$f(-2)$","$f(0)$"],"answer":"$f(2)$","feedback":"Benar. Pembagi $(x-k)$ memberi sisa $f(k)$, di sini $k=2$."},
    {"ask":"Langkah 2. Hitung $f(2) = 8 - 8 + 6 - 1 = \\;?$","type":"mc","options":["$5$","$3$","$7$"],"answer":"$5$","feedback":"Tepat."},
    {"ask":"Langkah 3. Jadi sisanya adalah ….","type":"mc","options":["$5$","$0$","$-5$"],"answer":"$5$","feedback":"Benar. Kita memperolehnya tanpa melakukan pembagian sama sekali."}
  ],
  "conclusion":"Bila soal hanya menanyakan sisa dan pembaginya linear, cukup hitung nilai fungsi. Tidak perlu membagi.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity TrueFalse -->

```json
{ "type":"activity", "widget":"truefalse", "id":"04-m1", "competency":"K4",
  "prompt":"Tentukan nilai kebenaran tiap pernyataan.",
  "statements":[
    {"s":"Sisa pembagian $f(x)$ oleh $(x-3)$ sama dengan $f(3)$.","a":true,"why":"Penerapan langsung Teorema Sisa."},
    {"s":"Untuk menguji pembagi $(x+3)$, kita menghitung $f(3)$.","a":false,"why":"Pembagi (x+3) berarti k=-3, sehingga yang dihitung f(-3)."},
    {"s":"Mencari sisa pembagian oleh pembagi linear selalu memerlukan pembagian bersusun.","a":false,"why":"Cukup menghitung f(k)."},
    {"s":"Angka terakhir pada skema Horner sama dengan $f(k)$.","a":true,"why":"Itulah sisa pembagian menurut Teorema Sisa."}
  ],
  "reward":{"xp":15} }
```

---

## 2️⃣ Mencari Sisa Tanpa Membagi

Teorema Sisa memiliki beberapa perluasan yang sering muncul pada soal TKA.

**a. Pembagi $(x-k)$** → sisa $= f(k)$.

**b. Pembagi $(ax-b)$** → karena $ax-b = a\left(x-\tfrac{b}{a}\right)$, sisanya $= f\!\left(\tfrac{b}{a}\right)$.

**c. Pembagi kuadrat $(x-p)(x-q)$** → sisa berbentuk $rx+s$. Tulis
$$f(x) = (x-p)(x-q)H(x) + (rx+s)$$
Substitusi $x=p$ dan $x=q$ melenyapkan bagian pertama, sehingga diperoleh dua persamaan:
$$f(p) = rp+s \qquad\text{dan}\qquad f(q) = rq+s$$

<!-- VISUAL: Sistem dua persamaan
     DEVELOPER: animasikan substitusi x=p dan x=q. Saat x=p disubstitusikan, faktor (x-p)
     menjadi nol dan seluruh suku pertama memudar, menyisakan rp+s. Ulangi untuk x=q,
     lalu tampilkan kedua persamaan berdampingan sebagai sistem yang siap diselesaikan. -->

### 📘 Contoh

Diketahui $f(x)$ dibagi $(x-2)$ bersisa $3$, dan dibagi $(x-3)$ bersisa $5$. Tentukan sisa jika $f(x)$ dibagi $(x-2)(x-3)$.

Sisa berbentuk $rx+s$. Dari informasi yang diberikan: $f(2)=3$ dan $f(3)=5$, sehingga
$$2r+s = 3 \qquad 3r+s = 5$$
Kurangkan: $r=2$, lalu $s=-1$. Sisanya **$2x-1$**.

> ⚡ Pola "dibagi A bersisa …, dibagi B bersisa …, cari sisa dibagi A·B" sangat sering muncul. Selalu selesaikan dengan sistem persamaan seperti ini.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"04-g2", "competency":"K4",
  "title":"Menyusun sistem persamaan dari dua sisa",
  "prompt":"Diketahui $f(x)$ dibagi $(x-1)$ bersisa $4$ dan dibagi $(x+2)$ bersisa $-5$. Tentukan sisa jika $f(x)$ dibagi $(x-1)(x+2)$.",
  "steps":[
    {"ask":"Langkah 1. Karena pembaginya berderajat 2, bentuk sisanya adalah ….","type":"mc","options":["$rx+s$","sebuah konstanta","$rx^2+sx+t$"],"answer":"$rx+s$","feedback":"Benar, derajat sisa harus lebih kecil daripada 2."},
    {"ask":"Langkah 2. Dari $f(1)=4$ diperoleh persamaan ….","type":"mc","options":["$r+s=4$","$-r+s=4$","$2r+s=4$"],"answer":"$r+s=4$","feedback":"Tepat. Substitusikan x=1 ke rx+s."},
    {"ask":"Langkah 3. Dari $f(-2)=-5$ diperoleh $-2r+s=-5$. Selesaikan sistemnya. Sisanya adalah ….","type":"mc","options":["$3x+1$","$3x-1$","$x+3$"],"answer":"$3x+1$","feedback":"Benar: kurangkan kedua persamaan sehingga 3r=9, r=3, lalu s=1."}
  ],
  "conclusion":"Kunci teknik ini: substitusikan akar-akar pembagi ke bentuk sisa untuk memperoleh sistem persamaan.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Matching -->

```json
{ "type":"activity", "widget":"matching", "id":"04-m2", "competency":"K4",
  "prompt":"Pasangkan setiap bentuk pembagi dengan cara menentukan sisanya.",
  "pairs":[
    ["Pembagi $(x-3)$","Hitung $f(3)$"],
    ["Pembagi $(x+3)$","Hitung $f(-3)$"],
    ["Pembagi $(2x-1)$","Hitung $f\\left(\\frac{1}{2}\\right)$"],
    ["Pembagi $(x-1)(x-2)$","Susun sistem dari $f(1)$ dan $f(2)$"]
  ],
  "reward":{"xp":15} }
```

---

## 3️⃣ Teorema Faktor

Teorema ini merupakan akibat langsung Teorema Sisa dan menjadi alat faktorisasi utama.

> **Teorema Faktor.** $(x-k)$ merupakan **faktor** dari $f(x)$ **jika dan hanya jika** $f(k)=0$.

Alasannya: $(x-k)$ menjadi faktor berarti sisanya $0$; padahal menurut Teorema Sisa, sisanya $f(k)$.

<!-- VISUAL: Rantai kesetaraan
     DEVELOPER: gambarkan sebagai diagram segitiga dengan tiga simpul yang saling terhubung:
     "f(k) = 0", "(x-k) faktor", dan "k adalah akar". Saat salah satu simpul disentuh, kedua
     simpul lain ikut menyala untuk menegaskan bahwa ketiganya setara. -->

$$\htmlClass{hl-1}{f(k)=0} \iff \htmlClass{hl-2}{(x-k)\ \text{faktor}} \iff \htmlClass{hl-3}{k\ \text{akar}}$$

**Akar, faktor, dan sisa nol adalah tiga nama untuk keadaan yang sama.** Konsekuensinya: polinomial berderajat $n$ memiliki paling banyak $n$ akar, karena setiap akar menyumbang satu faktor linear.

### 📘 Contoh

Tunjukkan bahwa $(x-3)$ merupakan faktor dari $f(x)=x^3-4x^2+x+6$.

Hitung $f(3) = 27 - 36 + 3 + 6 = 0$. Karena $f(3)=0$, menurut Teorema Faktor $(x-3)$ adalah faktor.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"04-g3", "competency":"K4",
  "title":"Menentukan koefisien agar suatu bentuk menjadi faktor",
  "prompt":"Tentukan nilai $a$ agar $(x+1)$ merupakan faktor dari $x^3 + ax^2 - x - 2$.",
  "steps":[
    {"ask":"Langkah 1. Agar $(x+1)$ menjadi faktor, syarat yang harus dipenuhi adalah ….","type":"mc","options":["$f(-1)=0$","$f(1)=0$","$f(0)=0$"],"answer":"$f(-1)=0$","feedback":"Benar. Karena (x+1)=(x-(-1)), maka k=-1."},
    {"ask":"Langkah 2. Hitung $f(-1) = -1 + a + 1 - 2$. Bentuk sederhananya adalah ….","type":"mc","options":["$a-2$","$a+2$","$a-4$"],"answer":"$a-2$","feedback":"Tepat, karena -1+1-2 = -2."},
    {"ask":"Langkah 3. Dari $a-2=0$ diperoleh $a = \\;?$","type":"mc","options":["$2$","$-2$","$0$"],"answer":"$2$","feedback":"Benar."}
  ],
  "conclusion":"Pola soal semacam ini selalu sama: ubah syarat faktor menjadi persamaan f(k)=0, lalu selesaikan.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Matching -->

```json
{ "type":"activity", "widget":"matching", "id":"04-m3", "competency":"K4",
  "prompt":"Pasangkan setiap pernyataan dengan pernyataan lain yang setara maknanya.",
  "pairs":[
    ["$f(k)=0$","$k$ adalah akar dari $f(x)=0$"],
    ["$(x-k)$ faktor dari $f(x)$","Sisa $f(x)$ dibagi $(x-k)$ adalah nol"],
    ["Menguji faktor $(x+3)$","Menghitung $f(-3)$"],
    ["Menguji faktor $(2x-1)$","Menghitung $f\\left(\\frac{1}{2}\\right)$"]
  ],
  "reward":{"xp":15} }
```

---

## 4️⃣ Teorema Akar Rasional

Untuk memfaktorkan, kita perlu menemukan **satu** akar terlebih dahulu. Menebak secara acak tidak efisien; berikut cara sistematisnya.

> **Teorema Akar Rasional.** Jika polinomial berkoefisien bilangan bulat memiliki akar rasional $\dfrac{p}{q}$ (dalam bentuk paling sederhana), maka $p$ membagi habis **konstanta** dan $q$ membagi habis **koefisien pemimpin**.

Dengan demikian, kandidat akar rasional adalah
$$\pm\frac{\text{faktor konstanta}}{\text{faktor koefisien pemimpin}}$$

<!-- VISUAL: Daftar kandidat akar
     DEVELOPER: tampilkan kandidat sebagai deretan tombol. Saat sebuah kandidat ditekan,
     hitung f(kandidat) secara langsung dan tampilkan hasilnya; kandidat yang bernilai nol
     disorot hijau sebagai akar, yang lain memudar. -->

### 📘 Contoh

Tentukan kandidat akar rasional dari $f(x)=x^3+3x^2-10x-24$.

Koefisien pemimpinnya $1$, sehingga kandidatnya cukup pembagi dari konstanta $24$:
$$\pm1,\ \pm2,\ \pm3,\ \pm4,\ \pm6,\ \pm8,\ \pm12,\ \pm24$$

Uji dari nilai terkecil: $f(-2) = -8 + 12 + 20 - 24 = 0$. Ditemukan satu akar, yaitu $x=-2$.

> ⚡ Mulailah dari kandidat bernilai kecil ($\pm1, \pm2, \pm3$), karena akar bilangan bulat sederhana biasanya berada di antaranya.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"04-g4", "competency":"K4",
  "title":"Menyusun daftar kandidat akar rasional",
  "prompt":"Tentukan kandidat akar rasional dari $2x^3 - 3x^2 - 3x + 2$, lalu temukan satu akarnya.",
  "steps":[
    {"ask":"Langkah 1. Faktor dari konstanta $2$ adalah ….","type":"mc","options":["$\\pm1$ dan $\\pm2$","$\\pm1$ saja","$\\pm2$ saja"],"answer":"$\\pm1$ dan $\\pm2$","feedback":"Benar, inilah calon pembilang p."},
    {"ask":"Langkah 2. Faktor dari koefisien pemimpin $2$ adalah $\\pm1$ dan $\\pm2$. Maka himpunan kandidatnya adalah ….","type":"mc","options":["$\\pm1,\\ \\pm2,\\ \\pm\\frac{1}{2}$","$\\pm1,\\ \\pm2$ saja","$\\pm1,\\ \\pm3,\\ \\pm\\frac{1}{2}$"],"answer":"$\\pm1,\\ \\pm2,\\ \\pm\\frac{1}{2}$","feedback":"Tepat. Kandidatnya adalah p/q dari kedua daftar tersebut."},
    {"ask":"Langkah 3. Uji $x=2$: $f(2)=16-12-6+2 = \\;?$","type":"mc","options":["$0$","$2$","$-4$"],"answer":"$0$","feedback":"Benar, sehingga $x=2$ merupakan akar dan $(x-2)$ adalah faktor."}
  ],
  "conclusion":"Bila koefisien pemimpinnya bukan 1, kandidat akar juga memuat pecahan. Jangan lewatkan kemungkinan tersebut.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Categorize -->

```json
{ "type":"activity", "widget":"categorize", "id":"04-m4", "competency":"K4",
  "prompt":"Untuk $f(x)=2x^3-3x^2-3x+2$, kelompokkan setiap bilangan berikut sebagai kandidat akar rasional atau bukan kandidat.",
  "categories":["Kandidat akar rasional","Bukan kandidat"],
  "items":[
    ["$1$","Kandidat akar rasional"],
    ["$2$","Kandidat akar rasional"],
    ["$\\frac{1}{2}$","Kandidat akar rasional"],
    ["$-2$","Kandidat akar rasional"],
    ["$3$","Bukan kandidat"],
    ["$\\frac{1}{3}$","Bukan kandidat"]
  ],
  "reward":{"xp":20} }
```

---

## 5️⃣ Faktorisasi Polinomial

Faktorisasi dilakukan bertahap, lapis demi lapis:

1. **Temukan satu akar** $k$ (Teorema Akar Rasional + Teorema Sisa).
2. **Bagi** $f(x)$ oleh $(x-k)$ menggunakan **Horner**.
3. **Ulangi** pada hasil bagi hingga tersisa bentuk kuadrat yang mudah difaktorkan.

<!-- VISUAL: Pengupasan faktor
     DEVELOPER: animasikan proses berlapis. Setiap kali sebuah akar ditemukan, faktor (x-k)
     "terlepas" ke samping dan polinomial yang tersisa menyusut derajatnya. Tampilkan
     tabel Horner kecil pada tiap tahap. -->

### 🎯 Penerapan — Soal TKA

> Tentukan koordinat titik potong grafik $f(x)=x^3+3x^2-10x-24$ terhadap sumbu $X$.

Titik potong sumbu $X$ terjadi saat $f(x)=0$, sehingga kita mencari akar-akarnya.

**Tahap 1.** Uji kandidat: $f(-2)=0$, sehingga $(x+2)$ merupakan faktor.

**Tahap 2.** Bagi dengan Horner ($k=-2$):

```
  k=-2 │   1     3    -10   -24
       │        -2    -2    24
       └──────────────────────────
           1     1    -12  |  0
```

Hasil bagi $x^2+x-12$.

**Tahap 3.** Faktorkan sisa kuadrat: $x^2+x-12 = (x+4)(x-3)$.

**Faktorisasi penuh:** $f(x) = (x+2)(x+4)(x-3)$, dengan akar $-2$, $-4$, dan $3$.

Maka titik potongnya: $(-2,0)$, $(-4,0)$, dan $(3,0)$.

> ⚠️ Pada soal bertipe "pilih semua yang benar", faktorkan **sampai tuntas** lalu cocokkan dengan pilihan. Perhatikan bahwa akar $-4$ menghasilkan titik $(-4,0)$ — bukan $(4,0)$.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"04-g5", "competency":"K4",
  "title":"Memfaktorkan polinomial kubik secara bertahap",
  "prompt":"Faktorkan $f(x)=x^3-6x^2+11x-6$ hingga tuntas.",
  "steps":[
    {"ask":"Langkah 1. Uji kandidat terkecil, $x=1$. Berapakah $f(1)=1-6+11-6$?","type":"mc","options":["$0$","$1$","$-2$"],"answer":"$0$","feedback":"Benar, sehingga $(x-1)$ merupakan faktor."},
    {"ask":"Langkah 2. Bagi dengan Horner ($k=1$). Hasil baginya adalah ….","type":"mc","options":["$x^2-5x+6$","$x^2-6x+11$","$x^2-5x-6$"],"answer":"$x^2-5x+6$","feedback":"Tepat. Baris Horner-nya 1, -5, 6 dengan sisa 0."},
    {"ask":"Langkah 3. Faktorkan $x^2-5x+6$. Hasilnya ….","type":"mc","options":["$(x-2)(x-3)$","$(x+2)(x+3)$","$(x-1)(x-6)$"],"answer":"$(x-2)(x-3)$","feedback":"Benar, karena $-2$ dan $-3$ berjumlah $-5$ dan berkali $6$."}
  ],
  "conclusion":"Faktorisasi lengkapnya (x-1)(x-2)(x-3) dengan akar 1, 2, dan 3. Polanya: temukan akar, kupas dengan Horner, ulangi.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Ordering -->

```json
{ "type":"activity", "widget":"ordering", "id":"04-m5", "competency":"K4",
  "prompt":"Urutkan langkah-langkah memfaktorkan polinomial berderajat tinggi.",
  "options":["Susun daftar kandidat akar rasional","Uji kandidat hingga ditemukan $f(k)=0$","Bagi $f(x)$ oleh $(x-k)$ menggunakan Horner","Ulangi pada hasil bagi hingga tersisa kuadrat, lalu faktorkan"],
  "answer_order":[0,1,2,3],
  "reward":{"xp":15} }
```

---

## 📝 Latihan Bertingkat

<!-- COMPONENT: Quiz Cards
     DEVELOPER: render 5 paket sebagai KARTU (A-E); klik -> POP-UP. Paket D dan E OPSIONAL. -->

### 🟢 Paket A — Dasar (5 soal)

```json
{
  "set_id":"04-set-A-mudah","level":"mudah","optional": false,
  "items":[
    {"id":"A1","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan sisa pembagian $x^2 + 1$ oleh $(x-2)$.","answer":"5","explanation":"Sisa sama dengan f(2)=5."},
    {"id":"A2","type":"mc","question":"Apakah $(x-2)$ merupakan faktor dari $x^2 - 4$?","options":["Ya","Tidak"],"answer":"Ya","explanation":"f(2)=4-4=0 sehingga merupakan faktor."},
    {"id":"A3","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan sisa pembagian $x^4$ oleh $(x+1)$.","answer":"1","explanation":"f(-1)=1."},
    {"id":"A4","type":"mc","question":"Jika $(x-5)$ merupakan faktor dari suatu polinomial, maka akar yang bersesuaian adalah ….","options":["$x=5$","$x=-5$","$x=\\frac{1}{5}$","$x=0$"],"answer":"$x=5$","explanation":"Faktor (x-k) memberi akar x=k."},
    {"id":"A5","type":"mc","question":"Apakah $(x+1)$ merupakan faktor dari $x^3 + 1$?","options":["Ya","Tidak"],"answer":"Ya","explanation":"f(-1)=-1+1=0."}
  ]
}
```
<details><summary><strong>Pembahasan Paket A</strong></summary>

1. $f(2)=5$. 2. Ya. 3. $f(-1)=1$. 4. $x=5$. 5. Ya.
</details>

### 🟡 Paket B — Menengah (5 soal)

```json
{
  "set_id":"04-set-B-sedang","level":"sedang","optional": false,
  "items":[
    {"id":"B1","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan nilai $a$ agar $(x-1)$ merupakan faktor dari $x^3 + ax - 3$.","answer":"2","explanation":"f(1)=1+a-3=0 sehingga a=2."},
    {"id":"B2","type":"mc","question":"Faktorkan $x^3 - 7x + 6$ hingga tuntas.","options":["$(x-1)(x-2)(x+3)$","$(x-1)(x+2)(x-3)$","$(x+1)(x-2)(x-3)$","$(x-1)(x-2)(x-3)$"],"answer":"$(x-1)(x-2)(x+3)$","explanation":"Akar-akarnya 1, 2, dan -3."},
    {"id":"B3","type":"mc","question":"Apakah $x=-3$ merupakan akar dari $x^3+3x^2-10x-24$?","options":["Tidak","Ya"],"answer":"Tidak","explanation":"f(-3)=-27+27+30-24=6, tidak nol. Akarnya adalah -2, -4, dan 3."},
    {"id":"B4","type":"mc","question":"Diketahui $f(x)$ dibagi $(x-2)$ bersisa $1$ dan dibagi $(x-4)$ bersisa $7$. Tentukan sisa jika dibagi $(x-2)(x-4)$.","options":["$3x-5$","$3x+5$","$x-1$","$2x-3$"],"answer":"$3x-5$","explanation":"2r+s=1 dan 4r+s=7 memberi r=3, s=-5."},
    {"id":"B5","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan nilai $c$ agar $x^3 - 4x^2 + c$ habis dibagi $(x-1)$.","answer":"3","explanation":"f(1)=1-4+c=0 sehingga c=3."}
  ]
}
```
<details><summary><strong>Pembahasan Paket B</strong></summary>

1. $a=2$. 2. $(x-1)(x-2)(x+3)$. 3. Tidak. 4. $3x-5$. 5. $c=3$.
</details>

### 🔴 Paket C — Lanjut (5 soal)

```json
{
  "set_id":"04-set-C-sulit","level":"sulit","optional": false,
  "items":[
    {"id":"C1","type":"mc","question":"Faktorkan $x^4 - 5x^2 + 4$ hingga tuntas.","options":["$(x-1)(x+1)(x-2)(x+2)$","$(x^2-1)(x^2+4)$","$(x-1)(x+1)(x-4)$","$(x-2)(x+2)(x^2+1)$"],"answer":"$(x-1)(x+1)(x-2)(x+2)$","explanation":"x^4-5x^2+4 = (x^2-1)(x^2-4)."},
    {"id":"C2","type":"mc","question":"Tentukan $a$ dan $b$ agar $x^3+ax^2+bx-6$ habis dibagi $(x-1)$ dan $(x+2)$.","options":["$a=4,\\ b=1$","$a=1,\\ b=4$","$a=-4,\\ b=1$","$a=4,\\ b=-1$"],"answer":"$a=4,\\ b=1$","explanation":"f(1)=0 memberi a+b=5; f(-2)=0 memberi 2a-b=7."},
    {"id":"C3","type":"mc","question":"Tentukan sisa pembagian $f(x)=x^3-2x+1$ oleh $(x^2-1)$.","options":["$-x+1$","$x+1$","$-x-1$","$x-1$"],"answer":"$-x+1$","explanation":"f(1)=0=r+s dan f(-1)=2=-r+s sehingga r=-1, s=1."},
    {"id":"C4","type":"mc","question":"Faktorkan $2x^3 - 3x^2 - 3x + 2$ hingga tuntas.","options":["$(x-2)(2x-1)(x+1)$","$(x-2)(2x+1)(x-1)$","$(x+2)(2x-1)(x-1)$","$(x-2)(x-1)(x+1)$"],"answer":"$(x-2)(2x-1)(x+1)$","explanation":"Akar-akarnya 2, 1/2, dan -1."},
    {"id":"C5","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan sisa pembagian $x^{2026} + x + 1$ oleh $(x-1)$.","answer":"3","explanation":"f(1)=1+1+1=3."}
  ]
}
```
<details><summary><strong>Pembahasan Paket C</strong></summary>

1. $(x-1)(x+1)(x-2)(x+2)$. 2. $a=4$, $b=1$. 3. $-x+1$. 4. $(x-2)(2x-1)(x+1)$. 5. $f(1)=3$.
</details>

### 🧠 Paket D — HOTS (5 soal, opsional)

> Paket ini **opsional**. Mengerjakannya memberi XP bonus.

```json
{
  "set_id":"04-set-D-hots","level":"hots","optional": true, "bonus_xp": 20,
  "items":[
    {"id":"D1","type":"mc","question":"Diketahui polinomial berderajat 3 memiliki akar $1$, $2$, dan $3$, serta berbentuk monik. Tentukan polinomial tersebut.","options":["$x^3-6x^2+11x-6$","$x^3+6x^2+11x+6$","$x^3-6x^2-11x+6$","$x^3-11x^2+6x-6$"],"answer":"$x^3-6x^2+11x-6$","explanation":"Jabarkan (x-1)(x-2)(x-3)."},
    {"id":"D2","type":"mc","question":"Mengapa $(x-1)$ selalu merupakan faktor dari $x^n - 1$ untuk setiap bilangan asli $n$?","options":["Karena $f(1)=1^n-1=0$","Karena $n$ selalu positif","Karena derajatnya ganjil","Karena konstantanya $-1$"],"answer":"Karena $f(1)=1^n-1=0$","explanation":"Menurut Teorema Faktor, f(1)=0 berarti (x-1) faktor."},
    {"id":"D3","type":"mc","question":"Tentukan nilai $k$ agar $x^3-kx+2$ memiliki $(x-1)$ sebagai faktor, beserta akar-akar lainnya.","options":["$k=3$; akar $1$ (ganda) dan $-2$","$k=3$; akar $1$ dan $2$","$k=-3$; akar $1$ dan $-2$","$k=2$; akar $1$ dan $-2$"],"answer":"$k=3$; akar $1$ (ganda) dan $-2$","explanation":"f(1)=1-k+2=0 memberi k=3; Horner menghasilkan x^2+x-2=(x-1)(x+2)."},
    {"id":"D4","type":"mc","question":"Diketahui $f(x)$ dibagi $(x-1)$ bersisa $2$, dibagi $(x-2)$ bersisa $3$, dan dibagi $(x-3)$ bersisa $6$. Tentukan sisa jika dibagi $(x-1)(x-2)(x-3)$.","options":["$x^2-2x+3$","$x^2+2x-3$","$x^2-x+2$","$2x^2-x+1$"],"answer":"$x^2-2x+3$","explanation":"Sisa berderajat paling tinggi 2; selesaikan sistem tiga persamaan."},
    {"id":"D5","type":"mc","question":"Diketahui $(x-1)$ dan $(x+1)$ merupakan faktor dari $f(x)=x^4+ax^2+b$, dan $f(0)=-4$. Tentukan $a$ dan $b$.","options":["$a=3,\\ b=-4$","$a=-3,\\ b=-4$","$a=4,\\ b=-3$","$a=3,\\ b=4$"],"answer":"$a=3,\\ b=-4$","explanation":"f(0)=b=-4; f(1)=1+a+b=0 sehingga a=3."}
  ]
}
```
<details><summary><strong>Pembahasan Paket D</strong></summary>

1. $x^3-6x^2+11x-6$. 2. Karena $f(1)=0$. 3. $k=3$; akar $1$ (ganda) dan $-2$. 4. $x^2-2x+3$. 5. $a=3$, $b=-4$.
</details>

### 🏆 Paket E — Model TKA (5 soal, opsional)

> Paket ini **opsional** dan bergaya soal TKA. Mengerjakannya memberi XP bonus.

```json
{
  "set_id":"04-set-E-tka","level":"tka","optional": true, "bonus_xp": 20,
  "items":[
    {"id":"E1","type":"multi","source":"TKA-2024-no5","question":"Tentukan koordinat titik potong grafik $f(x)=x^3+3x^2-10x-24$ terhadap sumbu $X$. Pilih SEMUA jawaban yang benar.","options":["$(-2,0)$","$(-1,0)$","$(3,0)$","$(4,0)$","$(5,0)$"],"answer":["$(-2,0)$","$(3,0)$"],"explanation":"Faktorisasi (x+2)(x+4)(x-3) memberi akar -2, -4, dan 3; yang tersedia pada pilihan hanya -2 dan 3."},
    {"id":"E2","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Berapa banyak titik potong grafik $f(x)=x^3-6x^2+11x-6$ terhadap sumbu $X$?","answer":"3","explanation":"Akarnya 1, 2, dan 3 — seluruhnya real dan berbeda."},
    {"id":"E3","type":"mc","question":"Fungsi laba dinyatakan $L(x)=x^3-4x^2+x+6$ (juta rupiah). Pada berapa unit produksi laba bernilai nol, dengan $x>0$?","options":["$x=2$ dan $x=3$","$x=1$ dan $x=6$","$x=-1$ dan $x=2$","$x=3$ saja"],"answer":"$x=2$ dan $x=3$","explanation":"L(x)=(x+1)(x-2)(x-3); akar positifnya 2 dan 3."},
    {"id":"E4","type":"mc","question":"Tentukan sisa pembagian $x^{100} - 2$ oleh $(x+1)$.","options":["$-1$","$1$","$-3$","$3$"],"answer":"$-1$","explanation":"f(-1)=1-2=-1."},
    {"id":"E5","type":"mc","question":"Diketahui $f(x)=x^3+px+q$ habis dibagi $(x-1)$ dan $(x-2)$. Tentukan $p$, $q$, serta akar ketiganya.","options":["$p=-7,\\ q=6$; akar ketiga $-3$","$p=7,\\ q=-6$; akar ketiga $3$","$p=-7,\\ q=6$; akar ketiga $3$","$p=-6,\\ q=7$; akar ketiga $-3$"],"answer":"$p=-7,\\ q=6$; akar ketiga $-3$","explanation":"f(1)=0 dan f(2)=0 memberi p=-7, q=6; karena tidak ada suku x^2, jumlah akarnya nol."}
  ]
}
```
<details><summary><strong>Pembahasan Paket E</strong></summary>

**E1.** Akar $-2,-4,3$ → pilihan yang benar $(-2,0)$ dan $(3,0)$. **E2.** 3 titik. **E3.** $x=2$ dan $x=3$. **E4.** $-1$. **E5.** $p=-7$, $q=6$, akar ketiga $-3$.
</details>

---

## ⚠️ Kesalahan Umum & ⚡ Tips Cepat

| Kesalahan | Perbaikan |
|-----------|-----------|
| Salah tanda $k$: pembagi $(x+3)$ diuji dengan $f(3)$ | Gunakan $f(-3)$, karena $(x+3)=(x-(-3))$ |
| Berhenti setelah menemukan satu akar | Kupas sampai tuntas bila diminta semua akar |
| Melupakan syarat koefisien bulat pada Akar Rasional | Teorema hanya berlaku untuk koefisien bilangan bulat |
| Membagi panjang padahal hanya sisa yang diminta | Cukup hitung $f(k)$ |
| Menandai $(4,0)$ padahal akarnya $-4$ | Akar $-4$ menghasilkan titik $(-4,0)$ |

**Tips cepat:** butuh sisa → hitung $f(k)$ → pembagi $(ax-b)$ pakai $f(\tfrac{b}{a})$ → "dibagi A sisa …, dibagi B sisa …" → susun sistem persamaan → faktorisasi: kandidat akar, uji, Horner, ulangi.

---

## ✅ Ringkasan

- **Teorema Sisa:** sisa $f(x)\div(x-k) = f(k)$; untuk $(ax-b)$ gunakan $f\!\left(\tfrac{b}{a}\right)$.
- **Teorema Faktor:** $(x-k)$ faktor $\iff f(k)=0 \iff k$ akar.
- **Teorema Akar Rasional:** kandidat $=\pm\frac{\text{faktor konstanta}}{\text{faktor koefisien pemimpin}}$.
- **Faktorisasi:** temukan akar → bagi dengan Horner → ulangi hingga tersisa kuadrat.
- Polinomial berderajat $n$ memiliki paling banyak $n$ akar.

---

## 🏆 Tantangan Akhir Bab

<!-- COMPONENT: Tantangan Akhir Bab
     DEVELOPER: render sebagai KARTU; klik -> POP-UP layar penuh (modal) berisi sesi berwaktu.
     Seluruh butir mandiri - JANGAN menarik atau memecah aktivitas dari bagian materi. -->
> Sesi berwaktu berisi 10 soal (5 menit). Seluruh soal berbentuk pilihan sehingga dapat dikerjakan tanpa mengetik.

```json
{ "type":"challenge", "id":"04-tantangan", "competency":"K4",
  "title":"Tantangan Akhir Bab 4: Teorema Sisa dan Teorema Faktor",
  "mode":"timed", "time_limit_sec":300, "display":"modal", "shuffle":true,
  "scoring":{"per_correct":10,"time_bonus":true},
  "stars":{"3":90,"2":70,"1":50},
  "reward":{"xp":80,"badge":"ahli-teorema"},
  "record":{"track_best_time":true,"track_best_score":true},
  "items":[
    {"id":"T1","type":"mc","question":"Tentukan sisa pembagian $x^3 - 2x^2 + 4x - 1$ oleh $(x-2)$.","options":["$7$","$5$","$3$","$-1$"],"answer":"$7$","explanation":"f(2)=8-8+8-1=7."},
    {"id":"T2","type":"mc","question":"Benar atau salah: untuk menguji apakah $(x+3)$ merupakan faktor, kita menghitung $f(3)$.","options":["Salah","Benar"],"answer":"Salah","explanation":"Pembagi (x+3) memberi k=-3, sehingga yang dihitung f(-3)."},
    {"id":"T3","type":"mc","question":"Manakah yang merupakan salah satu faktor dari $x^3 - 6x^2 + 11x - 6$?","options":["$(x-1)$","$(x+1)$","$(x-4)$","$(x+2)$"],"answer":"$(x-1)$","explanation":"f(1)=0."},
    {"id":"T4","type":"mc","question":"Tentukan sisa pembagian $2x^2 - x + 3$ oleh $(2x-1)$.","options":["$3$","$2$","$\\frac{5}{2}$","$0$"],"answer":"$3$","explanation":"Sisa sama dengan f(1/2)=1/2-1/2+3=3."},
    {"id":"T5","type":"mc","question":"Diketahui $f(x)$ dibagi $(x-2)$ bersisa $3$ dan dibagi $(x-3)$ bersisa $5$. Tentukan sisa jika dibagi $(x-2)(x-3)$.","options":["$2x-1$","$2x+1$","$x+1$","$5x-7$"],"answer":"$2x-1$","explanation":"2r+s=3 dan 3r+s=5 memberi r=2, s=-1."},
    {"id":"T6","type":"mc","question":"Bilangan berikut merupakan kandidat akar rasional dari $x^3+3x^2-10x-24$, KECUALI ….","options":["$5$","$2$","$-4$","$3$"],"answer":"$5$","explanation":"Kandidat adalah pembagi dari 24; angka 5 bukan pembagi 24."},
    {"id":"T7","type":"mc","question":"Faktorisasi lengkap dari $x^3+3x^2-10x-24$ adalah ….","options":["$(x+2)(x+4)(x-3)$","$(x-2)(x-4)(x+3)$","$(x+2)(x-4)(x+3)$","$(x+2)(x+4)(x+3)$"],"answer":"$(x+2)(x+4)(x-3)$","explanation":"Akar-akarnya -2, -4, dan 3."},
    {"id":"T8","type":"multi","question":"Tentukan koordinat titik potong grafik $f(x)=x^3+3x^2-10x-24$ terhadap sumbu $X$. Pilih SEMUA jawaban yang benar.","options":["$(-2,0)$","$(-1,0)$","$(3,0)$","$(4,0)$","$(5,0)$"],"answer":["$(-2,0)$","$(3,0)$"],"explanation":"Akarnya -2, -4, dan 3; yang tersedia pada pilihan hanya -2 dan 3."},
    {"id":"T9","type":"mc","question":"Pernyataan manakah yang TIDAK setara dengan pernyataan lainnya?","options":["Sisa $f(x)$ dibagi $(x-k)$ adalah $k$","$f(k)=0$","$(x-k)$ faktor dari $f(x)$","$k$ akar dari $f(x)=0$"],"answer":"Sisa $f(x)$ dibagi $(x-k)$ adalah $k$","explanation":"Yang setara adalah sisa bernilai NOL, bukan bernilai k."},
    {"id":"T10","type":"mc","question":"Tentukan nilai $a$ agar $(x+1)$ merupakan faktor dari $x^3+ax^2-x-2$.","options":["$a=2$","$a=-2$","$a=1$","$a=0$"],"answer":"$a=2$","explanation":"f(-1)=-1+a+1-2=a-2=0."}
  ] }
```

---

## 📝 Refleksi

<!-- COMPONENT: Reflection -->
1. Jelaskan dengan satu kalimat mengapa $f(k)=0$ berarti $(x-k)$ merupakan faktor.
2. Saat memfaktorkan polinomial berderajat 4, apa langkah pertama yang Anda lakukan?
3. Pada soal "pilih semua yang benar", kesalahan apa yang perlu Anda hindari?

---

## ➡️ Persiapan Menuju Bab Berikutnya

Kita kini mampu mencari sisa tanpa membagi, menentukan faktor dan akar, serta memfaktorkan secara penuh.

Pada **Bab 05 — Persamaan Polinomial & Teorema Vieta**, arah pembahasan dibalik: alih-alih mencari akar, kita mempelajari hubungan langsung antara **akar dan koefisien**, sehingga jumlah maupun hasil kali akar dapat ditentukan tanpa mencari akarnya satu per satu.

> Lanjutkan ke **Bab 05**.

<!-- COMPONENT: Summary -->
<!-- Progress bar: 5/8. -->
