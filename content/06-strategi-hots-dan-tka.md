---
id: "06-strategi-hots-dan-tka"
slug: "strategi-hots-dan-tka"
title: "Strategi HOTS dan TKA"
order: 6
duration_min: 85
level: "Kelas XI - Kurikulum Merdeka"
track: "TKA Matematika Lanjut"
prerequisites:
  - "01-konsep-dasar-polinomial"
  - "02-operasi-dan-nilai-polinomial"
  - "03-pembagian-polinomial"
  - "04-teorema-sisa-dan-faktor"
  - "05-persamaan-polinomial-dan-vieta"
competencies:
  - "K6: Menyelesaikan soal HOTS, kontekstual, & model TKA"
learning_objectives:
  - "Memilih metode tercepat melalui kerangka keputusan"
  - "Mengenali pola soal dari kata kunci"
  - "Menguraikan soal yang menggabungkan banyak konsep"
  - "Menyelesaikan soal kontekstual & pemodelan"
  - "Mengenali & menghindari jebakan khas TKA"
tags: ["hots", "tka", "strategi", "shortcut", "jebakan", "pemodelan"]
layout: "sub-materi"
sub_materi:
  - { id: "1", title: "Kerangka Keputusan" }
  - { id: "2", title: "Mengenali Pola Soal" }
  - { id: "3", title: "Soal Kombinasi Konsep" }
  - { id: "4", title: "Soal Kontekstual" }
  - { id: "5", title: "Cara Pintas & Jebakan" }
components:
  - "Info Cards"
  - "Sub Materi"
  - "Activity Guided"
  - "Activity Matching"
  - "Activity Categorize"
  - "Activity Ordering"
  - "Activity TrueFalse"
  - "Activity ErrorHunt"
  - "Quiz Cards"
  - "Tantangan Akhir Bab"
  - "Reflection"
activities:
  - "06-g1"
  - "06-m1"
  - "06-g2"
  - "06-m2"
  - "06-g3"
  - "06-m3"
  - "06-g4"
  - "06-m4"
  - "06-g5"
  - "06-m5"
challenge: "06-tantangan"
xp_available: 235
katex: true
---

# Bab 06 — Strategi HOTS dan TKA

<!-- COMPONENT: Info Cards
     DEVELOPER: enam bagian di bawah dirender sebagai KARTU berwarna berbeda; klik -> POP-UP.
     Ikon Lucide: target, puzzle, package, clock, map, flame. -->

<details data-card="tujuan" data-icon="target">
<summary>🎯 Tujuan Pembelajaran</summary>

Bab ini tidak menambah rumus baru, melainkan meningkatkan cara berpikir. Setelah mempelajarinya, peserta didik diharapkan mampu:

1. Memilih metode tercepat melalui kerangka keputusan.
2. Mengenali pola soal dari kata kuncinya.
3. Menguraikan soal yang menggabungkan beberapa konsep.
4. Menyelesaikan soal kontekstual dan pemodelan.
5. Mengenali serta menghindari jebakan khas TKA.

</details>

<details data-card="kompetensi" data-icon="puzzle">
<summary>🧩 Kompetensi</summary>

**K6 — Menyelesaikan soal HOTS, kontekstual, dan model TKA.**

</details>

<details data-card="prasyarat" data-icon="package">
<summary>📦 Prasyarat</summary>

Seluruh Bab 01–05. Bab ini merupakan titik temu semua materi.

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
Kerangka Keputusan → Pola Soal → Kombinasi Konsep → Kontekstual → Cara Pintas & Jebakan
```

</details>

<details data-card="motivasi" data-icon="flame">
<summary>🔥 Motivasi</summary>

Banyak siswa menguasai rumus tetapi kurang berhasil pada ujian, sebab TKA menguji **kualitas keputusan**: metode mana yang dipilih, langkah mana yang dapat dilewati, jebakan mana yang dihindari. Dua siswa berpengetahuan sama dapat berbeda belasan menit hanya karena satu memilih Horner sedangkan yang lain membagi panjang.

</details>

---

<!-- COMPONENT: Sub Materi
     DEVELOPER: judul sub-materi WAJIB sticky di bawah judul bab saat digulir. -->

## 1️⃣ Kerangka Keputusan

Sebelum menghitung apa pun, tanyakan lebih dahulu: **apa yang sebenarnya diminta?** Jawabannya menentukan alat yang dipakai.

<!-- VISUAL: Bagan alir keputusan
     DEVELOPER: WAJIB berupa bagan alir interaktif. Pengguna memilih jawaban atas dua pertanyaan
     ("apa yang diminta?" dan "apa bentuk pembaginya?"), lalu jalur yang sesuai menyala hingga
     berhenti pada metode tercepat beserta alasannya. Jangan ditampilkan sebagai daftar teks. -->

| Yang diminta | Alat tercepat |
|--------------|---------------|
| Sisa, pembagi $(x-k)$ | Hitung $f(k)$ |
| Sisa, pembagi $(ax-b)$ | Hitung $f\!\left(\tfrac{b}{a}\right)$ |
| Sisa, pembagi kuadrat | Sistem persamaan dari akar pembagi |
| Hasil bagi dan sisa | Horner (linear) atau bersusun |
| Akar atau titik potong sumbu $X$ | Akar rasional → uji → Horner → ulangi |
| Jumlah/hasil kali/ekspresi simetris akar | Teorema Vieta |
| Menyusun persamaan dari akar | $f(x)=a\prod(x-r_i)$ atau substitusi |
| Nilai fungsi pada $x$ tertentu | Substitusi |

> ⚡ **Aturan 1:** bila hanya sisa yang diminta, jangan membagi panjang.
> ⚡ **Aturan 2:** bila soal menyebut jumlah atau hasil kali akar, gunakan Vieta — bukan mencari akar.

### 📘 Contoh

Diminta menentukan sisa pembagian $x^{50}+3$ oleh $(x-1)$.

Karena yang diminta hanya sisa dan pembaginya linear, cukup hitung $f(1) = 1 + 3 = 4$. Membaginya secara bersusun sampai pangkat 50 akan memakan waktu sangat lama.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"06-g1", "competency":"K6",
  "title":"Memilih alat berdasarkan yang diminta",
  "prompt":"Soal: \"Akar-akar $2x^2-7x+3=0$ adalah $x_1$ dan $x_2$. Hitung $x_1^2+x_2^2$.\" Tentukan strategi tercepatnya.",
  "steps":[
    {"ask":"Langkah 1. Apa yang sebenarnya diminta soal?","type":"mc","options":["Ekspresi simetris akar","Akar-akarnya satu per satu","Sisa pembagian"],"answer":"Ekspresi simetris akar","feedback":"Benar. Bentuk x1^2+x2^2 bersifat simetris terhadap kedua akar."},
    {"ask":"Langkah 2. Alat yang tepat untuk ekspresi simetris adalah ….","type":"mc","options":["Teorema Vieta","Rumus abc","Skema Horner"],"answer":"Teorema Vieta","feedback":"Tepat. Kita tidak perlu mencari akarnya."},
    {"ask":"Langkah 3. Dengan $x_1+x_2=\\frac{7}{2}$ dan $x_1x_2=\\frac{3}{2}$, hitung $\\left(\\frac{7}{2}\\right)^2 - 2\\left(\\frac{3}{2}\\right)$.","type":"mc","options":["$\\frac{37}{4}$","$\\frac{49}{4}$","$\\frac{25}{4}$"],"answer":"$\\frac{37}{4}$","feedback":"Benar: 49/4 - 3 = 37/4."}
  ],
  "conclusion":"Kebiasaan yang menghemat waktu: tentukan dahulu apa yang diminta, baru pilih alatnya.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Matching -->

```json
{ "type":"activity", "widget":"matching", "id":"06-m1", "competency":"K6",
  "prompt":"Pasangkan setiap permintaan soal dengan alat tercepatnya.",
  "pairs":[
    ["Mencari sisa pembagian oleh $(x-k)$","Menghitung $f(k)$"],
    ["Mencari jumlah atau hasil kali akar","Teorema Vieta"],
    ["Mencari titik potong sumbu $X$","Faktorisasi"],
    ["Mencari hasil bagi dan sisa, pembagi linear","Skema Horner"]
  ],
  "reward":{"xp":15} }
```

---

## 2️⃣ Mengenali Pola Soal

Soal TKA sering tampil tidak langsung. Kenali **kata kunci pemicunya**.

<!-- VISUAL: Penyorot kata kunci
     DEVELOPER: tampilkan beberapa contoh kalimat soal. Saat pengguna mengarahkan kursor atau
     menyentuh kata kunci tertentu, sorot kata itu dan munculkan gelembung berisi konsep serta
     alat yang bersesuaian. -->

| Kata kunci | Konsep | Alat |
|------------|--------|------|
| "sisa", "bersisa" | Teorema Sisa | $f(k)$ |
| "habis dibagi", "faktor dari" | Teorema Faktor | $f(k)=0$ |
| "titik potong sumbu $X$" | Akar | Faktorisasi |
| "jumlah/hasil kali akar" | Vieta | Rumus Vieta |
| "akarnya … lebih besar" | Transformasi akar | Substitusi |
| "dinyatakan dengan fungsi", "model" | Pemodelan | Substitusi/operasi |
| "berlaku untuk semua $x$" | Identitas | Samakan koefisien |
| "nilai $a+b$" | Koefisien tak diketahui | Kesamaan |

> 💡 Kebiasaan efektif: garis bawahi kata kunci sebelum menghitung.

### 📘 Contoh

Soal: *"Diketahui $x^4+ax^3+bx^2+x-6$ dibagi $x^2+x+1$ **bersisa** $5x-1$. Tentukan **nilai $a+b$**."*

Dua kata kunci menuntun kita: **"bersisa"** menunjukkan Teorema Sisa/kesamaan, dan **"nilai $a+b$"** menunjukkan pencarian koefisien tak diketahui. Strateginya: bentuk sisa lalu samakan koefisien.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"06-g2", "competency":"K6",
  "title":"Membaca kata kunci pada soal",
  "prompt":"Soal: \"Di manakah koordinat titik potong grafik $f(x)=x^3+3x^2-10x-24$ terhadap sumbu $X$?\" Tentukan strateginya.",
  "steps":[
    {"ask":"Langkah 1. Kata kunci utama pada soal tersebut adalah ….","type":"mc","options":["Titik potong sumbu X","Grafik fungsi","Koordinat"],"answer":"Titik potong sumbu X","feedback":"Benar. Frasa inilah yang menentukan konsep yang diuji."},
    {"ask":"Langkah 2. Titik potong sumbu $X$ terjadi ketika ….","type":"mc","options":["$f(x)=0$","$x=0$","$f(x)$ maksimum"],"answer":"$f(x)=0$","feedback":"Tepat. Pada sumbu X, nilai fungsinya nol."},
    {"ask":"Langkah 3. Jadi, yang harus dicari adalah ….","type":"mc","options":["Akar-akar persamaan","Sisa pembagian","Jumlah koefisien"],"answer":"Akar-akar persamaan","feedback":"Benar, sehingga alat yang dipakai adalah faktorisasi."}
  ],
  "conclusion":"Kata kunci berperan sebagai penunjuk alat. Mengenalinya membuat penyelesaian jauh lebih terarah.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Categorize -->

```json
{ "type":"activity", "widget":"categorize", "id":"06-m2", "competency":"K6",
  "prompt":"Kelompokkan setiap tugas berdasarkan alat yang paling tepat.",
  "categories":["Teorema Sisa / Faktor","Teorema Vieta"],
  "items":[
    ["Mencari sisa $f(x)$ dibagi $(x-2)$","Teorema Sisa / Faktor"],
    ["Mencari jumlah akar persamaan","Teorema Vieta"],
    ["Memeriksa apakah $(x-1)$ merupakan faktor","Teorema Sisa / Faktor"],
    ["Menghitung $x_1^2+x_2^2$","Teorema Vieta"],
    ["Menghitung $f(3)$","Teorema Sisa / Faktor"],
    ["Menghitung hasil kali akar","Teorema Vieta"]
  ],
  "reward":{"xp":20} }
```

---

## 3️⃣ Soal Kombinasi Konsep

Soal HOTS umumnya menggabungkan 2–3 konsep. Kuncinya: **uraikan menjadi langkah, satu alat untuk tiap langkah**.

### 📘 Contoh 1 — Vieta dipadukan dengan Faktorisasi

Persamaan $x^3-7x^2+14x-8=0$ memiliki tiga akar yang membentuk **barisan geometri**. Tentukan akar-akarnya.

Misalkan akarnya $\frac{a}{r}$, $a$, dan $ar$. Hasil kali ketiganya adalah $a^3$. Dari Vieta, hasil kali akar $=8$, sehingga $a^3=8$ dan $a=2$ — inilah akar tengahnya.

Karena $2$ merupakan akar, bagi dengan Horner: hasilnya $x^2-5x+4=(x-1)(x-4)$. Jadi akar-akarnya $1$, $2$, dan $4$ — benar membentuk barisan geometri dengan rasio $2$.

### 📘 Contoh 2 — Sisa dipadukan dengan Sistem Persamaan

Diketahui $f(x)$ dibagi $(x-1)$, $(x-2)$, dan $(x-3)$ berturut-turut bersisa $2$, $3$, dan $6$. Tentukan sisa jika dibagi $(x-1)(x-2)(x-3)$.

Pembagi berderajat 3, sehingga sisanya berbentuk $ax^2+bx+c$. Substitusi ketiga nilai memberi sistem tiga persamaan yang menghasilkan $a=1$, $b=-2$, $c=3$. Sisanya **$x^2-2x+3$**.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"06-g3", "competency":"K6",
  "title":"Menguraikan soal barisan geometri",
  "prompt":"Persamaan $x^3-7x^2+14x-8=0$ memiliki tiga akar yang membentuk barisan geometri. Tentukan akar tengahnya.",
  "steps":[
    {"ask":"Langkah 1. Bila akar-akarnya dimisalkan $\\frac{a}{r}$, $a$, dan $ar$, maka hasil kali ketiganya adalah ….","type":"mc","options":["$a^3$","$3a$","$a^2r$"],"answer":"$a^3$","feedback":"Benar, karena faktor r saling menghilangkan."},
    {"ask":"Langkah 2. Dari Vieta, hasil kali akar $=-\\frac{d}{a}=8$. Maka $a = \\;?$","type":"mc","options":["$2$","$8$","$4$"],"answer":"$2$","feedback":"Tepat, karena akar pangkat tiga dari 8 adalah 2."},
    {"ask":"Langkah 3. Setelah akar tengah diketahui, langkah berikutnya adalah ….","type":"mc","options":["Bagi dengan $(x-2)$ memakai Horner","Menghitung diskriminan","Menyusun ulang persamaan"],"answer":"Bagi dengan $(x-2)$ memakai Horner","feedback":"Benar. Hasilnya x^2-5x+4=(x-1)(x-4), sehingga akarnya 1, 2, dan 4."}
  ],
  "conclusion":"Pola penyelesaiannya: Vieta untuk menemukan akar tengah, lalu Horner untuk mengupas sisanya. Dua alat dalam satu soal.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity Ordering -->

```json
{ "type":"activity", "widget":"ordering", "id":"06-m3", "competency":"K6",
  "prompt":"Urutkan langkah penyelesaian soal yang akar-akarnya membentuk barisan geometri.",
  "options":["Misalkan akar-akarnya $\\frac{a}{r}$, $a$, dan $ar$","Gunakan Vieta: hasil kali ketiga akar sama dengan $a^3$","Tentukan akar tengah dari akar pangkat tiga hasil kali","Bagi dengan $(x-a)$ memakai Horner, lalu faktorkan sisanya"],
  "answer_order":[0,1,2,3],
  "reward":{"xp":15} }
```

---

## 4️⃣ Soal Kontekstual

Soal cerita terasa sulit hanya sebelum diterjemahkan. Prosedurnya tetap sama:

1. **Terjemahkan** kalimat menjadi fungsi atau persamaan.
2. **Tentukan** apa yang dicari: nilai, akar, atau koefisien.
3. **Pilih alat** sesuai kerangka keputusan.
4. **Tafsirkan** kembali jawabannya ke konteks; buang solusi yang tidak bermakna.

<!-- VISUAL: Studi kasus bertahap
     DEVELOPER: tampilkan empat studi kasus TKA sebagai kartu yang dapat dibuka. Di dalamnya,
     tampilkan alur empat langkah di atas secara berurutan, dengan penekanan pada alasan
     pemilihan alat di tiap langkah. -->

**Studi kasus 1 — Drum (operasi).** Total 10 drum berarti $10 \times V(T)$, yaitu perkalian dengan konstanta. Hasilnya $0{,}5T^3+4T^2+200T$. Jebakannya: $10 \times 0{,}05 = 0{,}5$, bukan $50$ atau $5$.

**Studi kasus 2 — Saham (nilai/Vieta).** "Sesuai modal $2000$" berarti $f(x)=2000$. Bila hanya angka tertentu yang ditanya, gunakan substitusi; bila diminta semua kemungkinan, gunakan Vieta. Akarnya $40$, $60$, dan $-30$; yang negatif ditolak.

**Studi kasus 3 — Titik potong (akar).** Titik potong sumbu $X$ berarti $f(x)=0$. Faktorkan $x^3+3x^2-10x-24=(x+2)(x+4)(x-3)$, sehingga titiknya $(-2,0)$, $(-4,0)$, dan $(3,0)$.

**Studi kasus 4 — Sisa pembagian kuadrat (kesamaan).** Pembagi kuadrat memberi sisa $rx+s$; samakan dengan $5x-1$ untuk memperoleh $a=2$ dan $b=-3$.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"06-g4", "competency":"K6",
  "title":"Menafsirkan jawaban kembali ke konteks",
  "prompt":"Sebuah kotak tanpa tutup dibuat dari karton berukuran $10\\times10$ dengan memotong persegi bersisi $x$ pada tiap sudut. Volumenya $V(x)=x(10-2x)^2$. Tentukan nilai $x$ yang membuat $V=0$ dan mana yang bermakna secara fisik.",
  "steps":[
    {"ask":"Langkah 1. Selesaikan $x(10-2x)^2=0$. Nilai $x$ yang memenuhi adalah ….","type":"mc","options":["$x=0$ atau $x=5$","$x=0$ atau $x=10$","$x=5$ saja"],"answer":"$x=0$ atau $x=5$","feedback":"Benar. Faktor kedua memberi 10-2x=0 sehingga x=5."},
    {"ask":"Langkah 2. Secara fisik, apa yang terjadi saat $x=0$?","type":"mc","options":["Tidak ada potongan sehingga kotak tidak memiliki tinggi","Kotak berbentuk kubus","Alas kotak habis"],"answer":"Tidak ada potongan sehingga kotak tidak memiliki tinggi","feedback":"Tepat, sehingga volumenya nol."},
    {"ask":"Langkah 3. Jadi, rentang nilai $x$ yang bermakna adalah ….","type":"mc","options":["$0<x<5$","$x>5$","$x \\geq 0$"],"answer":"$0<x<5$","feedback":"Benar. Di luar rentang itu, ukuran kotak menjadi tidak masuk akal."}
  ],
  "conclusion":"Jawaban matematis belum tentu menjadi jawaban akhir. Selalu tafsirkan kembali ke konteks soal.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity TrueFalse -->

```json
{ "type":"activity", "widget":"truefalse", "id":"06-m4", "competency":"K6",
  "prompt":"Tentukan nilai kebenaran tiap pernyataan mengenai penyelesaian soal kontekstual.",
  "statements":[
    {"s":"Solusi bernilai negatif untuk banyak unit harus ditolak.","a":true,"why":"Banyak unit tidak mungkin negatif."},
    {"s":"Langkah pertama soal cerita adalah menerjemahkannya menjadi fungsi atau persamaan.","a":true,"why":"Terjemahan mendahului perhitungan."},
    {"s":"Jawaban matematis selalu langsung menjadi jawaban akhir tanpa ditafsirkan.","a":false,"why":"Solusi harus dikembalikan ke konteks soal."},
    {"s":"Pada soal 10 drum, koefisien pemimpinnya menjadi $50$.","a":false,"why":"10 dikali 0,05 sama dengan 0,5."}
  ],
  "reward":{"xp":15} }
```

---

## 5️⃣ Cara Pintas & Jebakan

**Sepuluh cara pintas yang menghemat waktu:**

1. Sisa pembagian oleh $(x-k)$ sama dengan $f(k)$.
2. $f(1)$ sama dengan jumlah seluruh koefisien.
3. $f(0)$ sama dengan konstanta.
4. $f(-1)$ sama dengan jumlah koefisien berselang tanda.
5. Ekspresi simetris akar diselesaikan dengan Vieta.
6. Kebalikan akar berarti membalik urutan koefisien.
7. Semua akar dikali $-1$ berarti mengganti $x$ dengan $-x$.
8. Tiga akar aritmetika: akar tengah $=-\dfrac{b}{3a}$.
9. Tiga akar geometri: akar tengah $=\sqrt[3]{\text{hasil kali}}$.
10. Pembagi kuadrat dan hanya sisa yang diminta: substitusikan kedua akar pembagi.

<!-- VISUAL: Radar jebakan
     DEVELOPER: tampilkan setiap jebakan sebagai kartu peringatan yang dapat dibalik. Sisi depan
     memuat jebakannya, sisi belakang memuat cara amannya. Sertakan kuis singkat "temukan
     jebakannya" setelah seluruh kartu dibuka. -->

| Jebakan | Cara aman |
|---------|-----------|
| Pembagi $(x+3)$ diuji dengan $f(3)$ | Gunakan $f(-3)$ |
| Lupa koefisien nol pada Horner | Tulis semua koefisien |
| Sisa ikut dibagi $a$ pada $(ax-b)$ | Hanya hasil bagi yang dibagi $a$ |
| "Pilih semua benar" berhenti di satu akar | Faktorkan tuntas, periksa tiap pilihan |
| Ekspresi simetris malah dicari akarnya | Gunakan Vieta |
| Solusi konteks mustahil diterima | Tolak nilai negatif bila tak bermakna |
| Salah arah substitusi transformasi | Akar $+k$ berarti $x \to x-k$ |
| Derajat $n$ dianggap pasti punya $n$ akar real | Paling banyak $n$ |
| Vieta tak monik lupa dibagi $a$ | Selalu bagi dengan $a$ |
| Salah kali pada pemodelan | Kalikan tiap koefisien dengan cermat |

### 📘 Contoh

Tentukan sisa pembagian $x^3+2x^2-x+5$ oleh $(x+2)$.

Karena pembaginya $(x+2)=(x-(-2))$, gunakan $k=-2$. Maka sisanya $f(-2) = -8+8+2+5 = 7$. Menggunakan $f(2)$ adalah jebakan tanda yang paling sering terjadi.

### 🎓 Latihan Terbimbing

<!-- COMPONENT: Activity Guided -->

```json
{ "type":"activity", "widget":"guided", "id":"06-g5", "competency":"K6",
  "title":"Memakai cara pintas pemeriksaan",
  "prompt":"Periksa apakah $(x-1)$ merupakan faktor dari $f(x)=3x^4-2x^3+5x-6$ menggunakan cara pintas.",
  "steps":[
    {"ask":"Langkah 1. Menurut Teorema Faktor, syarat $(x-1)$ menjadi faktor adalah ….","type":"mc","options":["$f(1)=0$","$f(-1)=0$","$f(0)=0$"],"answer":"$f(1)=0$","feedback":"Benar."},
    {"ask":"Langkah 2. Cara pintasnya: $f(1)$ sama dengan ….","type":"mc","options":["Jumlah seluruh koefisien","Konstanta","Koefisien pemimpin"],"answer":"Jumlah seluruh koefisien","feedback":"Tepat. Substitusi x=1 membuat semua pangkat bernilai 1."},
    {"ask":"Langkah 3. Jumlahkan: $3-2+0+5-6 = \\;?$","type":"mc","options":["$0$","$2$","$-1$"],"answer":"$0$","feedback":"Benar, sehingga $(x-1)$ memang merupakan faktor. Perhatikan koefisien 0 untuk suku x^2."}
  ],
  "conclusion":"Cara pintas f(1) sangat berguna untuk memeriksa keterbagian oleh (x-1) hanya dalam hitungan detik.",
  "reward":{"xp":15} }
```

### ✍️ Latihan Mandiri

<!-- COMPONENT: Activity ErrorHunt -->

```json
{ "type":"activity", "widget":"error-hunt", "id":"06-m5", "competency":"K6",
  "prompt":"Cermati pengerjaan mencari sisa pembagian $f(x)=x^3+2x^2-x+5$ oleh $(x+2)$ berikut. Terdapat satu langkah yang keliru.",
  "steps":[
    "Langkah 1. Pembagi $(x+2)$ setara dengan $(x-(-2))$, sehingga $k=-2$.",
    "Langkah 2. Menurut Teorema Sisa, sisanya sama dengan $f(-2)$.",
    "Langkah 3. Hitung $f(-2) = -8 + 8 + 2 + 5 = 7$.",
    "Langkah 4. Karena pembaginya $(x+2)$, gunakan $k=2$ sehingga sisanya $f(2)$."
  ],
  "wrong_index":3,
  "why":"Pembagi (x+2) memberi k=-2, bukan k=2. Langkah 4 bertentangan dengan langkah 1 yang sudah benar.",
  "reward":{"xp":15} }
```

---

## 📝 Latihan Bertingkat

<!-- COMPONENT: Quiz Cards
     DEVELOPER: render 5 paket sebagai KARTU (A-E); klik -> POP-UP. Paket D dan E OPSIONAL. -->

### 🟢 Paket A — Dasar (5 soal)

```json
{
  "set_id":"06-set-A-mudah","level":"mudah","optional": false,
  "items":[
    {"id":"A1","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Gunakan cara pintas untuk menentukan sisa pembagian $x^4 - x + 2$ oleh $(x-1)$.","answer":"2","explanation":"f(1) sama dengan jumlah koefisien: 1-1+2=2."},
    {"id":"A2","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan jumlah akar-akar persamaan $x^2 - 10x + 9 = 0$.","answer":"10","explanation":"-b/a=10."},
    {"id":"A3","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan nilai $f(0)$ dari $f(x)=x^3-4x+7$.","answer":"7","explanation":"f(0) sama dengan konstanta."},
    {"id":"A4","type":"mc","question":"Apakah $(x-2)$ merupakan faktor dari $x^3 - 8$?","options":["Ya","Tidak"],"answer":"Ya","explanation":"f(2)=8-8=0."},
    {"id":"A5","type":"mc","question":"Tentukan koordinat titik potong grafik $y=x^2-4$ terhadap sumbu $X$.","options":["$(2,0)$ dan $(-2,0)$","$(4,0)$ dan $(-4,0)$","$(0,2)$ dan $(0,-2)$","$(0,-4)$"],"answer":"$(2,0)$ dan $(-2,0)$","explanation":"Akar dari x^2-4=0 adalah 2 dan -2."}
  ]
}
```
<details><summary><strong>Pembahasan Paket A</strong></summary>

1. $f(1)=2$. 2. $10$. 3. $7$. 4. Ya. 5. $(\pm2,0)$.
</details>

### 🟡 Paket B — Menengah (5 soal)

```json
{
  "set_id":"06-set-B-sedang","level":"sedang","optional": false,
  "items":[
    {"id":"B1","type":"mc","question":"Diketahui $f(x)$ dibagi $(x-1)$ bersisa $3$ dan dibagi $(x+2)$ bersisa $0$. Tentukan sisa jika dibagi $(x-1)(x+2)$.","options":["$x+2$","$x-2$","$3x+2$","$2x+1$"],"answer":"$x+2$","explanation":"r+s=3 dan -2r+s=0 memberi r=1, s=2."},
    {"id":"B2","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Akar-akar $x^2-6x+7=0$ adalah $\\alpha$ dan $\\beta$. Hitung $\\alpha^2+\\beta^2$.","answer":"22","explanation":"36-14=22."},
    {"id":"B3","type":"mc","question":"Faktorkan $x^3-3x^2-4x+12$ hingga tuntas.","options":["$(x-3)(x-2)(x+2)$","$(x+3)(x-2)(x+2)$","$(x-3)(x-2)(x-2)$","$(x-3)(x+4)(x-1)$"],"answer":"$(x-3)(x-2)(x+2)$","explanation":"Akar-akarnya 3, 2, dan -2."},
    {"id":"B4","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan nilai $k$ agar $x^3-kx+6$ habis dibagi $(x-3)$.","answer":"11","explanation":"27-3k+6=0 sehingga k=11."},
    {"id":"B5","type":"mc","question":"Tiga akar $x^3-6x^2+11x-6=0$ membentuk barisan aritmetika. Tentukan akar tengahnya tanpa memfaktorkan.","options":["$2$","$3$","$1$","$6$"],"answer":"$2$","explanation":"Akar tengah sama dengan -b/(3a) = 6/3 = 2."}
  ]
}
```
<details><summary><strong>Pembahasan Paket B</strong></summary>

1. $x+2$. 2. $22$. 3. $(x-3)(x-2)(x+2)$. 4. $k=11$. 5. Akar tengah $2$.
</details>

### 🔴 Paket C — Lanjut (5 soal)

```json
{
  "set_id":"06-set-C-sulit","level":"sulit","optional": false,
  "items":[
    {"id":"C1","type":"mc","question":"Tiga akar $x^3-9x^2+23x-15=0$ membentuk barisan aritmetika. Tentukan ketiga akarnya.","options":["$1,\\ 3,\\ 5$","$2,\\ 3,\\ 4$","$1,\\ 5,\\ 9$","$3,\\ 5,\\ 7$"],"answer":"$1,\\ 3,\\ 5$","explanation":"Akar tengah 9/3=3; Horner memberi x^2-6x+5=(x-1)(x-5)."},
    {"id":"C2","type":"mc","question":"Diketahui $f(x)$ dibagi $(x-1)$, $(x-2)$, dan $(x-3)$ berturut-turut bersisa $1$, $4$, dan $9$. Tentukan sisa jika dibagi $(x-1)(x-2)(x-3)$.","options":["$x^2$","$x^2+1$","$2x-1$","$x^2-1$"],"answer":"$x^2$","explanation":"S(x)=x^2 melewati ketiga titik tersebut."},
    {"id":"C3","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Akar-akar $x^3-6x^2+11x-6=0$ adalah $p$, $q$, dan $r$. Hitung $p^2+q^2+r^2$.","answer":"14","explanation":"36 - 2(11) = 14."},
    {"id":"C4","type":"mc","question":"Susun persamaan kubik monik yang akar-akarnya dua kali akar-akar $x^3-x^2-4x+4=0$.","options":["$x^3-2x^2-16x+32=0$","$x^3-2x^2-8x+16=0$","$x^3-x^2-16x+32=0$","$x^3-4x^2-16x+32=0$"],"answer":"$x^3-2x^2-16x+32=0$","explanation":"Substitusi x menjadi x/2 lalu kalikan 8."},
    {"id":"C5","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Tentukan nilai $m$ agar $x^3-3x^2+mx-1=0$ memiliki sepasang akar yang saling berkebalikan.","answer":"3","explanation":"Hasil kali semua akar 1; sepasang berkebalikan berarti akar ketiga 1, sehingga f(1)=0."}
  ]
}
```
<details><summary><strong>Pembahasan Paket C</strong></summary>

1. $1,3,5$. 2. $x^2$. 3. $14$. 4. $x^3-2x^2-16x+32=0$. 5. $m=3$.
</details>

### 🧠 Paket D — HOTS (5 soal, opsional)

> Paket ini **opsional**. Mengerjakannya memberi XP bonus.

```json
{
  "set_id":"06-set-D-hots","level":"hots","optional": true, "bonus_xp": 20,
  "items":[
    {"id":"D1","type":"mc","question":"Persamaan $x^3-6x^2+3x+10=0$ memiliki satu akar yaitu $-1$. Tentukan dua akar lainnya menggunakan Vieta tanpa membagi.","options":["$2$ dan $5$","$1$ dan $10$","$-2$ dan $-5$","$3$ dan $4$"],"answer":"$2$ dan $5$","explanation":"Jumlah akar 6 memberi q+r=7; hasil kali -10 memberi qr=10."},
    {"id":"D2","type":"short","input_mode":"number","answer_format":"bilangan bulat","question":"Diketahui $f(x)$ bersisa $2x+1$ saat dibagi $(x^2-1)$. Hitung $f(1)+f(-1)$.","answer":"2","explanation":"f(1)=3 dan f(-1)=-1 sehingga jumlahnya 2."},
    {"id":"D3","type":"mc","question":"Susun persamaan kuartik monik yang akar-akarnya $1$, $-1$, $2$, dan $-2$.","options":["$x^4-5x^2+4=0$","$x^4+5x^2+4=0$","$x^4-5x^2-4=0$","$x^4-4x^2+5=0$"],"answer":"$x^4-5x^2+4=0$","explanation":"Hasil kali (x^2-1)(x^2-4)."},
    {"id":"D4","type":"mc","question":"Fungsi laba $L(x)=x^3-4x^2+x+6$ (juta rupiah). Tentukan produksi $x>0$ yang membuat laba bernilai nol beserta maknanya.","options":["$x=2$ dan $x=3$, yaitu titik impas","$x=1$ dan $x=6$, yaitu titik impas","$x=-1$ dan $x=2$, yaitu titik maksimum","$x=3$ saja, yaitu titik minimum"],"answer":"$x=2$ dan $x=3$, yaitu titik impas","explanation":"L(x)=(x+1)(x-2)(x-3); akar positifnya 2 dan 3."},
    {"id":"D5","type":"mc","question":"Persamaan $x^3-70x^2-600x+72{.}000=0$ berakar $40$, $60$, dan $-30$. Hitung hasil kali akar-akar positifnya.","options":["$2.400$","$-72.000$","$100$","$1.800$"],"answer":"$2.400$","explanation":"40 dikali 60 sama dengan 2.400."}
  ]
}
```
<details><summary><strong>Pembahasan Paket D</strong></summary>

1. $2$ dan $5$. 2. $2$. 3. $x^4-5x^2+4=0$. 4. $x=2$ dan $x=3$ (titik impas). 5. $2.400$.
</details>

### 🏆 Paket E — Model TKA (5 soal, opsional)

> Paket ini **opsional** dan memuat keempat soal TKA. Mengerjakannya memberi XP bonus.

```json
{
  "set_id":"06-set-E-tka","level":"tka","optional": true, "bonus_xp": 20,
  "items":[
    {"id":"E1","type":"multi","source":"TKA-2024-no5","question":"Tentukan koordinat titik potong grafik $f(x)=x^3+3x^2-10x-24$ terhadap sumbu $X$. Pilih SEMUA jawaban yang benar.","options":["$(-2,0)$","$(-1,0)$","$(3,0)$","$(4,0)$","$(5,0)$"],"answer":["$(-2,0)$","$(3,0)$"],"explanation":"Akarnya -2, -4, dan 3; yang tersedia pada pilihan hanya -2 dan 3."},
    {"id":"E2","type":"mc","source":"TKA-2024-no6","question":"Diketahui $x^4+ax^3+bx^2+x-6$ dibagi $x^2+x+1$ bersisa $5x-1$. Tentukan nilai $a+b$.","options":["$-1$","$11$","$5$","$-5$"],"answer":"$-1$","explanation":"Diperoleh a=2 dan b=-3."},
    {"id":"E3","type":"mc","source":"TKA-2024-no7","question":"Diketahui $V(T)=0{,}05T^3+0{,}4T^2+20T$. Total penambahan volume untuk 10 drum identik pada suhu sama adalah ….","options":["$0{,}5T^3+4T^2+200T$","$50T^3+40T^2+200T$","$5T^3+4T^2+200T$","$0{,}5T^3+0{,}4T^2+200T$"],"answer":"$0{,}5T^3+4T^2+200T$","explanation":"Kalikan tiap koefisien dengan 10."},
    {"id":"E4","type":"multi","source":"TKA-2024-no8","question":"Diketahui $f(x)=x^3-70x^2-600x+74{.}000$ dan modal $2.000$ juta. Penjualan manakah yang MUNGKIN terjadi? Pilih SEMUA jawaban yang benar.","options":["$30$ unit","$40$ unit","$60$ unit"],"answer":["$40$ unit","$60$ unit"],"explanation":"f(40)=f(60)=2000, sedangkan f(30)=20000."},
    {"id":"E5","type":"mc","question":"Sebuah kotak tanpa tutup dibuat dari karton $10\\times10$ dengan memotong persegi bersisi $x$ pada tiap sudut, sehingga $V(x)=x(10-2x)^2$. Rentang nilai $x$ yang bermakna secara fisik adalah ….","options":["$0<x<5$","$0 \\leq x \\leq 5$","$x>5$","$0<x<10$"],"answer":"$0<x<5$","explanation":"Pada x=0 kotak tidak memiliki tinggi; pada x=5 alasnya habis."}
  ]
}
```
<details><summary><strong>Pembahasan Paket E</strong></summary>

**E1.** $(-2,0)$ dan $(3,0)$. **E2.** $a+b=-1$. **E3.** $0{,}5T^3+4T^2+200T$. **E4.** 40 dan 60 unit. **E5.** $0<x<5$.
</details>

---

## ⚠️ Kesalahan Umum & ⚡ Tips Cepat

| Kesalahan | Perbaikan |
|-----------|-----------|
| Langsung menghitung tanpa membaca yang diminta | Tentukan dahulu alatnya |
| Memakai satu alat untuk semua soal | Fleksibilitas alat berarti kecepatan |
| Tidak menafsirkan jawaban ke konteks | Tolak solusi yang mustahil |
| Terpaku pada soal cerita | Terjemahkan dahulu menjadi persamaan |
| Melewatkan pemeriksaan cepat | Gunakan $f(0)$, $f(1)$, dan Vieta |

**Tips cepat:** garis bawahi kata kunci → tentukan alat → hitung → tafsirkan kembali. Simpan tiga pemeriksaan instan: $f(0)$, $f(1)$, dan verifikasi Vieta.

---

## ✅ Ringkasan

- **Kerangka keputusan** memandu pemilihan alat berdasarkan apa yang diminta.
- **Kata kunci** memicu konsep: "sisa" → $f(k)$, "faktor" → $f(k)=0$, "jumlah akar" → Vieta.
- **Soal kombinasi** diuraikan menjadi langkah, satu alat per langkah.
- **Soal kontekstual** diterjemahkan, diselesaikan, lalu ditafsirkan kembali.
- **Cara pintas** dan **radar jebakan** menghemat waktu serta mencegah kesalahan.

---

## 🏆 Tantangan Akhir Bab

<!-- COMPONENT: Tantangan Akhir Bab
     DEVELOPER: render sebagai KARTU; klik -> POP-UP layar penuh (modal) berisi sesi berwaktu.
     Seluruh butir mandiri - JANGAN menarik atau memecah aktivitas dari bagian materi. -->
> Sesi berwaktu berisi 10 soal (6 menit). Seluruh soal berbentuk pilihan sehingga dapat dikerjakan tanpa mengetik.

```json
{ "type":"challenge", "id":"06-tantangan", "competency":"K6",
  "title":"Tantangan Akhir Bab 6: Strategi HOTS dan TKA",
  "mode":"timed", "time_limit_sec":360, "display":"modal", "shuffle":true,
  "scoring":{"per_correct":10,"time_bonus":true},
  "stars":{"3":90,"2":70,"1":50},
  "reward":{"xp":80,"badge":"ahli-strategi"},
  "record":{"track_best_time":true,"track_best_score":true},
  "items":[
    {"id":"T1","type":"mc","question":"Soal meminta HANYA sisa pembagian oleh $(x-3)$. Metode tercepatnya adalah ….","options":["Menghitung $f(3)$","Pembagian bersusun","Horner lengkap","Faktorisasi"],"answer":"Menghitung $f(3)$","explanation":"Teorema Sisa untuk pembagi linear."},
    {"id":"T2","type":"mc","question":"Soal meminta nilai $x_1^2+x_2^2$ dari suatu persamaan kuadrat. Alat yang tepat adalah ….","options":["Teorema Vieta","Rumus abc lalu dikuadratkan","Skema Horner","Pembagian bersusun"],"answer":"Teorema Vieta","explanation":"Ekspresi simetris cukup dinyatakan lewat jumlah dan hasil kali."},
    {"id":"T3","type":"mc","question":"Frasa \"titik potong terhadap sumbu $X$\" menuntun kita untuk mencari ….","options":["Akar-akar persamaan","Nilai $f(0)$","Sisa pembagian","Koefisien pemimpin"],"answer":"Akar-akar persamaan","explanation":"Pada sumbu X nilai fungsinya nol."},
    {"id":"T4","type":"mc","question":"Gunakan cara pintas: berapakah nilai $f(1)$ dari $f(x)=x^3-2x^2+5x-1$?","options":["$3$","$1$","$5$","$7$"],"answer":"$3$","explanation":"f(1) sama dengan jumlah koefisien: 1-2+5-1=3."},
    {"id":"T5","type":"mc","question":"Tiga akar suatu persamaan kubik membentuk barisan aritmetika dengan jumlah $12$. Akar tengahnya adalah ….","options":["$4$","$3$","$6$","$12$"],"answer":"$4$","explanation":"Jumlah tiga akar aritmetika sama dengan 3 kali akar tengah."},
    {"id":"T6","type":"mc","question":"Diketahui $V(T)=0{,}05T^3+0{,}4T^2+20T$. Total penambahan volume untuk 10 drum identik adalah ….","options":["$0{,}5T^3+4T^2+200T$","$50T^3+40T^2+200T$","$5T^3+4T^2+200T$","$0{,}5T^3+0{,}4T^2+200T$"],"answer":"$0{,}5T^3+4T^2+200T$","explanation":"Perhatikan 10 dikali 0,05 sama dengan 0,5."},
    {"id":"T7","type":"multi","question":"Tentukan koordinat titik potong grafik $f(x)=x^3+3x^2-10x-24$ terhadap sumbu $X$. Pilih SEMUA jawaban yang benar.","options":["$(-2,0)$","$(-1,0)$","$(3,0)$","$(4,0)$","$(5,0)$"],"answer":["$(-2,0)$","$(3,0)$"],"explanation":"Akarnya -2, -4, dan 3."},
    {"id":"T8","type":"mc","question":"Seorang siswa mencari sisa pembagian $f(x)$ oleh $(x+2)$. Langkah 1: $(x+2)$ setara $(x-(-2))$ sehingga $k=-2$. Langkah 2: sisa sama dengan $f(-2)$. Langkah 3: hitung $f(-2)$. Langkah 4: karena pembaginya $(x+2)$, sebaiknya pakai $k=2$. Manakah langkah yang SALAH?","options":["Langkah 4, karena $k$ tetap $-2$","Langkah 1, karena penulisannya keliru","Langkah 2, karena seharusnya $f(2)$","Langkah 3, karena perhitungannya salah"],"answer":"Langkah 4, karena $k$ tetap $-2$","explanation":"Tanda k berlawanan dengan tanda pada pembagi."},
    {"id":"T9","type":"multi","source":"TKA-2024-no8","question":"Diketahui $f(x)=x^3-70x^2-600x+74{.}000$ dan modal $2.000$ juta. Penjualan manakah yang MUNGKIN terjadi? Pilih SEMUA jawaban yang benar.","options":["$30$ unit","$40$ unit","$60$ unit"],"answer":["$40$ unit","$60$ unit"],"explanation":"f(40)=f(60)=2000."},
    {"id":"T10","type":"mc","question":"Benar atau salah: pada soal kontekstual, solusi bernilai negatif untuk banyak unit tetap harus dilaporkan sebagai jawaban.","options":["Salah","Benar"],"answer":"Salah","explanation":"Solusi harus ditafsirkan kembali; nilai yang tak bermakna ditolak."}
  ] }
```

---

## 📝 Refleksi

<!-- COMPONENT: Reflection -->
1. Dari sepuluh cara pintas, tiga mana yang paling ingin Anda hafalkan lebih dahulu? Mengapa?
2. Jebakan mana yang paling sering menjebak Anda? Tuliskan rencana menghindarinya.
3. Setelah membahas keempat soal TKA, apa satu perubahan cara berpikir yang Anda rasakan?

---

## ➡️ Persiapan Menuju Bab Berikutnya

Kita kini mampu memilih alat, menguraikan soal kombinasi, dan menghindari jebakan. Keenam kompetensi (K1–K6) telah lengkap.

Pada **Bab 07 — Ringkasan & Bank Soal**, seluruh materi dirangkum menjadi lembar rumus, peta konsep akhir, FAQ, bank soal, dan simulasi TKA sebagai latihan penutup.

> Lanjutkan ke **Bab 07**.

<!-- COMPONENT: Summary -->
<!-- Progress bar: 7/8. -->
