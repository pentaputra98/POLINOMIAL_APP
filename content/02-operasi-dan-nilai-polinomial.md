---
id: "02-operasi-dan-nilai-polinomial"
slug: "operasi-dan-nilai-polinomial"
title: "Operasi dan Nilai Polinomial"
order: 2
duration_min: 100
level: "Kelas XI - Kurikulum Merdeka"
track: "TKA Matematika Lanjut"
prerequisites:
  - "01-konsep-dasar-polinomial"
competencies:
  - "K2: Melakukan operasi & menghitung nilai polinomial"
learning_objectives:
  - "Menjumlah & mengurangkan polinomial dengan menggabungkan suku sejenis"
  - "Mengalikan polinomial menggunakan sifat distributif"
  - "Menghitung nilai polinomial melalui substitusi"
  - "Menyelesaikan kesamaan polinomial & mencari koefisien tak diketahui"
  - "Membedakan persamaan biasa dari identitas polinomial"
tags: ["operasi", "penjumlahan", "perkalian", "nilai", "substitusi", "kesamaan", "identitas"]
components:
  - "Concept Map Mini"
  - "Live Calculation"
  - "Step by Step Animation"
  - "Interactive Example"
  - "Quiz"
  - "Reflection"
  - "Activity ErrorHunt"
  - "Activity Matching"
  - "Activity Slider"
  - "Activity Cloze"
  - "Activity Categorize"
  - "Activity TrueFalse"
  - "Tantangan Akhir Bab"
activities:
  - "02-act-kurang"
  - "02-act-identitas"
  - "02-act-slider"
  - "02-act-cloze"
  - "02-act-identitas-kategori"
  - "02-act-tf"
challenge: "02-tantangan"
xp_available: 205
katex: true
---

# Bab 02 — Operasi dan Nilai Polinomial

<!-- COMPONENT: Concept Map Mini
     DEVELOPER: WAJIB dirender sebagai kartu/diagram interaktif bergaya Soft Neo Brutalism,
     BUKAN menyalin blok teks ASCII apa adanya ke aplikasi.
     Buat 5 simpul bertahap: Penjumlahan & Pengurangan → Perkalian → Nilai & Substitusi
     → Kesamaan → Identitas. Tiap simpul berupa kartu yang dapat diklik menuju sub-bagian
     terkait; sorot simpul aktif saat halaman digulir. Blok di bawah HANYA rujukan struktur. -->

## 🎯 Tujuan Pembelajaran

Setelah mempelajari bab ini, peserta didik diharapkan mampu:

1. **Menjumlahkan** dan **mengurangkan** polinomial dengan tepat (kunci: suku sejenis).
2. **Mengalikan** polinomial menggunakan sifat distributif secara sistematis.
3. **Menghitung nilai** polinomial $f(k)$ melalui **substitusi** serta memahami maknanya.
4. Menyelesaikan **kesamaan polinomial** untuk menentukan **koefisien yang belum diketahui**.
5. Membedakan **persamaan** biasa dari **identitas** polinomial.

## 🧩 Kompetensi yang Dipelajari
- **K2 — Melakukan operasi dan menghitung nilai polinomial.**

## 📦 Prasyarat
- Bab 01 (unsur, derajat, suku sejenis).
- Sifat distributif $a(b+c)=ab+ac$.

## ⏱️ Estimasi Waktu Belajar
**±100 menit.**

## 🗺️ Peta Konsep Kecil

<!-- COMPONENT: Concept Map Mini (lanjutan)
     DEVELOPER: tampilkan sebagai alur kartu interaktif, bukan teks ASCII mentah. -->

```
OPERASI & NILAI
├─ 1. Penjumlahan & Pengurangan ─► gabungkan suku sejenis
├─ 2. Perkalian                 ─► distributif; derajat hasil = jumlah derajat
├─ 3. Nilai & Substitusi        ─► ganti x dengan bilangan  (★ soal saham & drum)
├─ 4. Kesamaan Polinomial       ─► koefisien sepadan → cari yang belum diketahui
└─ 5. Identitas                 ─► benar untuk SEMUA x
```

## 🔥 Motivasi

Pada Bab 01, kita telah mengenali polinomial beserta unsur-unsurnya. Pada bab ini, kita mempelajari cara **menggunakannya**. Operasi polinomial merupakan keterampilan dasar yang perlu dikuasai dengan lancar—sebagaimana perkalian bersusun pada bilangan—karena seluruh bab berikutnya dibangun di atasnya.

Konsep terpenting pada bab ini adalah **nilai polinomial**. Dengan kemampuan menghitung $f(40)$, kita dapat menjawab persoalan nyata, misalnya *"berapa juta rupiah nilai saham jika terjual 40 unit?"* Pada bab ini pula, kita akan menyelesaikan **dua soal TKA**.

---

## 1️⃣ Penjumlahan & Pengurangan Polinomial

Prinsipnya hanya satu: **gabungkan suku-suku sejenis**. Suku sejenis adalah suku dengan variabel dan pangkat yang **sama** (misalnya $3x^2$ dan $-5x^2$ sejenis; $3x^2$ dan $3x$ tidak sejenis).

### Penjumlahan

Jumlahkan koefisien dari suku-suku sejenis; suku yang tidak memiliki pasangan dituliskan apa adanya.

**Contoh.** $(2x^3 + 3x^2 - x + 5) + (x^3 - 3x^2 + 4x - 2)$

<!-- COMPONENT: Step by Step Animation -->
<!-- Animasikan pengelompokan suku sejenis dengan warna: x^3 biru, x^2 hijau, x kuning, konstanta abu. -->

Kelompokkan berdasarkan pangkat:
$$
\begin{aligned}
x^3 &: \; 2x^3 + x^3 = 3x^3\\
x^2 &: \; 3x^2 + (-3x^2) = 0\\
x   &: \; -x + 4x = 3x\\
\text{konstanta} &: \; 5 + (-2) = 3
\end{aligned}
$$
Hasil: $\;3x^3 + 3x + 3$.

> ⚡ **Tips penataan:** susunlah **bersusun ke bawah** dengan pangkat sejajar (seperti penjumlahan bilangan) sehingga suku $x^2$ tepat berada di atas $x^2$. Cara ini mencegah kesalahan penggabungan.

### Pengurangan

Kunci pengerjaan: **ubah tanda seluruh suku** polinomial pengurang, kemudian jumlahkan. Langkah ini merupakan sumber kesalahan yang paling sering terjadi.

**Contoh.** $(4x^2 + 2x - 1) - (x^2 - 3x + 6)$

Distribusikan tanda negatif ke **setiap** suku pengurang:
$$= 4x^2 + 2x - 1 - x^2 + 3x - 6$$
Perhatikan bahwa $-(-3x) = +3x$ dan $-(+6) = -6$. Selanjutnya gabungkan:
$$= (4-1)x^2 + (2+3)x + (-1-6) = 3x^2 + 5x - 7$$

> ⚠️ **Kesalahan umum:** hanya mengubah tanda suku **pertama** pengurang. Tanda negatif harus didistribusikan ke **seluruh** suku pengurang.

<!-- COMPONENT: Activity ErrorHunt -->
> **Latihan Interaktif — Menemukan Kesalahan.** Cermati pengerjaan berikut, lalu tandai langkah yang keliru.

```json
{ "type":"activity", "widget":"error-hunt", "id":"02-act-kurang", "competency":"K2",
  "prompt":"Seorang siswa menghitung $(4x^2+2x-1)-(x^2-3x+6)$. Langkah manakah yang salah?",
  "steps":[
    "Ubah tanda pengurang: $4x^2+2x-1-x^2+3x-6$.",
    "Gabungkan suku $x^2$: $4x^2-x^2=3x^2$.",
    "Gabungkan suku $x$: $2x+3x=5x$.",
    "Gabungkan konstanta: $-1+6=5$."
  ],
  "wrong_index":3,
  "why":"Konstanta pengurang $+6$ berubah tanda menjadi $-6$, sehingga $-1-6=-7$, bukan $+5$.",
  "reward":{"xp":25} }
```

---

## 2️⃣ Perkalian Polinomial

Gunakan sifat **distributif**: kalikan **setiap** suku polinomial pertama dengan **setiap** suku polinomial kedua, kemudian gabungkan suku-suku sejenis.

### Perkalian dengan konstanta (bentuk paling sederhana)

$$3(2x^2 - 4x + 5) = 6x^2 - 12x + 15$$
Setiap suku dikalikan $3$. Operasi ini persis digunakan pada **soal drum** (mengalikan $V(T)$ dengan 10).

### Perkalian dua binomial

$$(x+4)(x-2) = x\cdot x + x\cdot(-2) + 4\cdot x + 4\cdot(-2) = x^2 - 2x + 4x - 8 = x^2 + 2x - 8$$

### Perkalian binomial dengan trinomial

**Contoh.** $(x - 3)(x^2 + 2x + 5)$
$$
\begin{aligned}
&= x(x^2 + 2x + 5) - 3(x^2 + 2x + 5)\\
&= (x^3 + 2x^2 + 5x) - (3x^2 + 6x + 15)\\
&= x^3 + 2x^2 + 5x - 3x^2 - 6x - 15\\
&= x^3 - x^2 - x - 15
\end{aligned}
$$

> 💡 **Pemeriksaan cepat derajat:** derajat hasil kali sama dengan **jumlah** derajat kedua faktor. Pada contoh ini $1+2=3$, dan hasilnya memang berderajat 3. Jika derajat hasil tidak sesuai, tentu terdapat kekeliruan.

### Identitas perkalian yang perlu dikuasai

Penguasaan pola berikut mempercepat pengerjaan secara signifikan:

$$(a+b)^2 = a^2 + 2ab + b^2$$
$$(a-b)^2 = a^2 - 2ab + b^2$$
$$(a+b)(a-b) = a^2 - b^2$$
$$(a+b)^3 = a^3 + 3a^2b + 3ab^2 + b^3$$
$$(a-b)^3 = a^3 - 3a^2b + 3ab^2 - b^3$$
$$a^3 - b^3 = (a-b)(a^2+ab+b^2)$$
$$a^3 + b^3 = (a+b)(a^2-ab+b^2)$$

<!-- COMPONENT: Activity Matching -->
> **Latihan Interaktif — Menjodohkan.** Pasangkan setiap bentuk dengan hasil penjabarannya.

```json
{ "type":"activity", "widget":"matching", "id":"02-act-identitas", "competency":"K2",
  "prompt":"Jodohkan identitas aljabar dengan hasilnya",
  "pairs":[
    ["$(a+b)^2$","$a^2+2ab+b^2$"],
    ["$(a-b)^2$","$a^2-2ab+b^2$"],
    ["$(a+b)(a-b)$","$a^2-b^2$"],
    ["$a^3-b^3$","$(a-b)(a^2+ab+b^2)$"]
  ],
  "reward":{"xp":20} }
```

---

## 3️⃣ Nilai Polinomial & Substitusi ★

Konsep ini merupakan yang paling banyak digunakan pada bab ini.

> **Nilai polinomial** $f(x)$ untuk $x = k$, ditulis $f(k)$, diperoleh dengan **mengganti setiap $x$ dengan $k$** lalu menghitungnya. Proses ini disebut **substitusi**.

**Contoh.** Jika $f(x) = 2x^3 - 5x^2 + 3x - 4$, hitung $f(2)$.
$$f(2) = 2(2)^3 - 5(2)^2 + 3(2) - 4 = 2(8) - 5(4) + 6 - 4 = 16 - 20 + 6 - 4 = -2$$

<!-- COMPONENT: Live Calculation -->
<!-- Slider nilai x; tampilkan f(x) dihitung real-time + grafik titik pada kurva, agar siswa mengamati perubahan nilai polinomial. -->

<!-- COMPONENT: Activity Slider -->
> **Latihan Interaktif — Geser Nilai.** Geser nilai $x$ dan amati perubahan nilai $f(x)$ serta titiknya pada grafik. Perhatikan khususnya nilai pada $x=0$.

```json
{ "type":"activity", "widget":"slider", "id":"02-act-slider", "competency":"K2",
  "prompt":"Amati perubahan nilai $f(x)=2x^3-5x^2+3x-4$ saat $x$ digeser",
  "poly":[2,-5,3,-4], "x_min":-3, "x_max":4, "step":0.5, "show_graph":true,
  "checkpoints":[
    {"x":0,"fx":-4,"note":"f(0) sama dengan konstanta."},
    {"x":2,"fx":-2,"note":"Sesuai perhitungan contoh."}
  ],
  "reward":{"xp":15} }
```

> 💡 **Makna $f(0)$:** substitusi $x=0$ menghilangkan seluruh suku bervariabel sehingga menyisakan **konstanta**. Dengan demikian $f(0) = $ konstanta (sesuai yang telah disinggung pada Bab 01).

> ⚠️ **Kehati-hatian tanda saat $k$ negatif.** Perhatikan bahwa $(-2)^2 = 4$ (positif), sedangkan $(-2)^3 = -8$ (negatif). Selalu gunakan tanda kurung: tulis $(-2)$, bukan $-2^2$.

### 🏭 Penyelesaian Soal TKA #7 — Drum Bahan Bakar

> **Soal.** Penambahan volume sebuah drum saat dipanaskan dinyatakan oleh $V(T) = 0{,}05\,T^3 + 0{,}4\,T^2 + 20\,T$ (liter), dengan $T$ suhu dalam derajat Celsius. Jika terdapat **10 drum identik** pada suhu yang sama, total penambahan volume dapat dinyatakan dengan ....

**Gagasan utama:** "10 drum identik pada suhu sama" berarti setiap drum menambah $V(T)$ liter, sehingga total $= 10 \times V(T)$. Ini merupakan **perkalian polinomial dengan konstanta**.

$$
\begin{aligned}
\text{Total} &= 10 \cdot V(T) = 10\big(0{,}05\,T^3 + 0{,}4\,T^2 + 20\,T\big)\\
&= (10)(0{,}05)T^3 + (10)(0{,}4)T^2 + (10)(20)T\\
&= 0{,}5\,T^3 + 4\,T^2 + 200\,T
\end{aligned}
$$

**Jawaban: $0{,}5\,T^3 + 4\,T^2 + 200\,T$ (pilihan D).**

> ⚠️ **Jebakan soal:** pilihan A, B, dan C dirancang menyerupai jawaban benar dengan menaikkan koefisien utama menjadi $50$ atau $5$. Kuncinya: $10 \times 0{,}05 = 0{,}5$, bukan $50$ atau $5$. Kalikan setiap koefisien dengan teliti.

### 📈 Penyelesaian Soal TKA #8 — Modal Saham

> **Soal.** Banyak saham dimodelkan oleh $f(x) = x^3 - 70x^2 - 600x + 74{.}000$, dengan $f(x)$ dalam **jutaan rupiah** dan $x$ menyatakan banyak unit saham. Jika modal saham $= 2$ miliar $= 2.000$ juta, tentukan **mungkin atau tidak mungkin** perusahaan menjual: **30 unit**, **40 unit**, dan **60 unit**.

**Gagasan utama:** penjualan $x$ unit sesuai dengan modal $2.000$ juta apabila $f(x) = 2000$. Oleh karena itu, kita **substitusikan** tiap nilai lalu bandingkan dengan $2000$.

**Pemeriksaan 30 unit:**
$$f(30) = 30^3 - 70(30)^2 - 600(30) + 74{.}000 = 27000 - 63000 - 18000 + 74{.}000 = 20000$$
Karena $20000 \neq 2000$, maka **tidak mungkin**.

**Pemeriksaan 40 unit:**
$$f(40) = 40^3 - 70(40)^2 - 600(40) + 74{.}000 = 64000 - 112000 - 24000 + 74{.}000 = 2000$$
Karena $2000 = 2000$, maka **mungkin**.

**Pemeriksaan 60 unit:**
$$f(60) = 60^3 - 70(60)^2 - 600(60) + 74{.}000 = 216000 - 252000 - 36000 + 74{.}000 = 2000$$
Karena $2000 = 2000$, maka **mungkin**.

**Kesimpulan:**

| Pernyataan | Mungkin? |
|-----------|:--------:|
| 30 unit | Tidak (Salah) |
| 40 unit | Ya (Benar) |
| 60 unit | Ya (Benar) |

> 💡 **Wawasan tambahan (bekal Bab 05):** menyelesaikan $f(x)=2000$ setara dengan mencari akar $x^3 - 70x^2 - 600x + 72000 = 0$, yaitu $40$, $60$, dan $-30$. Karena $-30$ tidak bermakna dalam konteks (banyak unit tidak boleh negatif), hanya $40$ dan $60$ yang berlaku—sesuai hasil substitusi. Pada Bab 05, persoalan semacam ini dapat diselesaikan tanpa mencoba-coba, yaitu melalui Teorema Vieta.

---

## 4️⃣ Kesamaan Polinomial & Koefisien Tak Diketahui

> **Dua polinomial dikatakan sama** apabila **koefisien suku-suku yang sepadan** (berderajat sama) **bernilai sama**.

Dengan demikian, apabila
$$a x^2 + b x + c = 3x^2 - 5x + 7 \quad \text{untuk semua } x,$$
maka **haruslah** $a=3$, $b=-5$, dan $c=7$. Proses ini disebut **menyamakan koefisien**, dilakukan pangkat demi pangkat.

**Contoh.** Tentukan $p$ dan $q$ apabila
$$(x+p)(x+2) = x^2 + 5x + q \quad \text{(untuk semua } x).$$

Jabarkan ruas kiri:
$$(x+p)(x+2) = x^2 + 2x + px + 2p = x^2 + (2+p)x + 2p$$
Samakan koefisien dengan ruas kanan $x^2 + 5x + q$:
- Koefisien $x$: $\;2 + p = 5 \Rightarrow p = 3$.
- Konstanta: $\;2p = q \Rightarrow q = 2(3) = 6$.

Jadi $p=3$ dan $q=6$.

<!-- COMPONENT: Interactive Example -->
<!-- Sediakan slider p,q; overlay kurva ruas kiri & kanan; siswa mengamati kedua kurva berimpit hanya saat p=3, q=6. -->

<!-- COMPONENT: Activity Cloze -->
> **Latihan Interaktif — Melengkapi.** Lengkapi pernyataan berikut dengan nilai yang tepat.

```json
{ "type":"activity", "widget":"cloze", "id":"02-act-cloze", "competency":"K2",
  "prompt":"Lengkapi kalimat kunci tentang nilai polinomial",
  "template":"Untuk $f(x)=x^3-2x^2+5$: nilai $f(0)$ sama dengan konstanta, yaitu {{0}}; sedangkan $f(-1)={{1}}$.",
  "answers":["5","2"],
  "reward":{"xp":20} }
```

---

## 5️⃣ Identitas Polinomial

Terdapat perbedaan yang halus namun penting:

- **Persamaan (biasa):** benar hanya untuk **sebagian** nilai $x$. Contoh: $x^2 = 4$ hanya benar saat $x = \pm 2$.
- **Identitas:** benar untuk **semua** nilai $x$. Contoh: $(x+1)^2 = x^2 + 2x + 1$ benar untuk sembarang $x$.

Apabila soal menyatakan "berlaku untuk semua $x$" atau menggunakan tanda $\equiv$, maka soal tersebut merupakan **identitas** dan diselesaikan dengan **menyamakan koefisien**.

**Contoh.** Tentukan $A$ dan $B$ apabila
$$\frac{3x + 1}{(x)(x+1)} = \frac{A}{x} + \frac{B}{x+1} \quad \text{untuk semua } x.$$

Kalikan kedua ruas dengan $x(x+1)$:
$$3x + 1 = A(x+1) + Bx = (A+B)x + A$$
Samakan koefisien:
- Koefisien $x$: $A + B = 3$.
- Konstanta: $A = 1$.

Maka $A = 1$ dan $B = 2$. (Teknik ini disebut **pecahan parsial**, yang banyak digunakan pada kalkulus.)

> 💡 **Strategi substitusi nilai untuk identitas:** karena identitas benar untuk **semua** $x$, kita dapat memilih nilai $x$ yang memudahkan perhitungan. Dari $3x+1 = A(x+1)+Bx$: pilih $x=0 \Rightarrow 1 = A$; pilih $x=-1 \Rightarrow -2 = -B \Rightarrow B=2$. Cara ini lebih efisien.

<!-- COMPONENT: Activity Categorize -->
> **Latihan Interaktif — Kategorisasi.** Tentukan apakah setiap pernyataan merupakan **identitas** (benar untuk semua $x$) atau **persamaan biasa** (benar untuk nilai $x$ tertentu).

```json
{ "type":"activity", "widget":"categorize", "id":"02-act-identitas-kategori", "competency":"K2",
  "prompt":"Kelompokkan tiap pernyataan",
  "categories":["Identitas","Persamaan biasa"],
  "items":[
    ["$(x+1)^2=x^2+2x+1$","Identitas"],
    ["$x^2=9$","Persamaan biasa"],
    ["$(x-2)(x+2)=x^2-4$","Identitas"],
    ["$2x+1=7$","Persamaan biasa"],
    ["$x^3-1=(x-1)(x^2+x+1)$","Identitas"]
  ],
  "reward":{"xp":25} }
```

---

## 📘 Contoh Bertingkat

### 🟢 Sederhana

**S1.** Hitung $(3x^2 - x + 2) + (x^2 + 4x - 5)$.
*Pembahasan.* $= (3+1)x^2 + (-1+4)x + (2-5) = 4x^2 + 3x - 3$.

**S2.** Jika $f(x) = x^2 - 4x + 1$, hitung $f(3)$.
*Pembahasan.* $f(3) = 9 - 12 + 1 = -2$.

**S3.** Kalikan $2x(x^2 - 3x + 4)$.
*Pembahasan.* $= 2x^3 - 6x^2 + 8x$.

### 🟡 Sedang

**M1.** Diketahui $f(x) = x^3 - 2x + 5$. Hitung $f(-2)$.
*Pembahasan.* $f(-2) = (-2)^3 - 2(-2) + 5 = -8 + 4 + 5 = 1$. (Perhatikan $(-2)^3=-8$.)

**M2.** Hitung $(x - 3)^2 - (x+1)(x-1)$.
*Pembahasan.*
$(x-3)^2 = x^2 - 6x + 9$; $(x+1)(x-1) = x^2 - 1$.
Selisih: $(x^2 - 6x + 9) - (x^2 - 1) = -6x + 10$.

**M3.** Tentukan $a$ apabila $(2x + a)(x - 1) = 2x^2 - 5x + 3$ untuk semua $x$.
*Pembahasan.* Ruas kiri $= 2x^2 - 2x + ax - a = 2x^2 + (a-2)x - a$.
Samakan: konstanta $-a = 3 \Rightarrow a = -3$. Periksa koefisien $x$: $a-2 = -5$ ✔. Jadi $a=-3$.

### 🧠 HOTS

**H1.** Jika $f(x) = x^3 - 70x^2 - 600x + 74{.}000$, tunjukkan bahwa $f(40) = f(60)$ tanpa menghitung keduanya secara terpisah. Apa makna geometrisnya?
*Pembahasan.* Hitung sekali $f(40) = 2000$. Karena $f(x) - 2000$ memiliki akar $40, 60, -30$ (jumlah akar $=70$, sesuai $-\frac{-70}{1}$), maka $f(60)$ juga bernilai $2000$. Secara geometris, garis mendatar $y = 2000$ memotong kurva di $x = 40$ dan $x = 60$ (serta $x=-30$)—ketiganya memberikan nilai $f$ yang sama. *(Pratinjau Vieta, Bab 05.)*

**H2.** Diketahui $g(x) = x^2 + bx + c$ memenuhi $g(1) = 0$ dan $g(2) = 3$. Tentukan $b$ dan $c$.
*Pembahasan.*
$g(1) = 1 + b + c = 0 \Rightarrow b + c = -1$.
$g(2) = 4 + 2b + c = 3 \Rightarrow 2b + c = -1$.
Kurangkan: $(2b+c) - (b+c) = -1 - (-1) \Rightarrow b = 0$. Maka $c = -1$.
Jadi $g(x) = x^2 - 1$.

**H3.** Buktikan identitas $(x+1)(x+2)(x+3) = x^3 + 6x^2 + 11x + 6$ dengan menyamakan nilai di beberapa titik, lalu jelaskan mengapa pemeriksaan beberapa titik sudah memadai.
*Pembahasan.* Kedua ruas merupakan polinomial berderajat 3. **Fakta penting:** dua polinomial berderajat $\leq 3$ yang bernilai sama di **4 titik berbeda** pasti identik. Periksa $x=0$: kiri $=1\cdot2\cdot3=6$, kanan $=6$ ✔. $x=1$: kiri $=2\cdot3\cdot4=24$, kanan $=1+6+11+6=24$ ✔. $x=-1$: kiri $=0$, kanan $=-1+6-11+6=0$ ✔. $x=-2$: kiri $=0$, kanan $=-8+24-22+6=0$ ✔. Keempat titik cocok sehingga kedua ruas identik. (Menjabarkan secara langsung juga dapat dilakukan; cara ini merupakan alternatif yang efisien.)

---

## ⚠️ Kesalahan yang Sering Dilakukan Siswa

1. **Pengurangan:** hanya membalik tanda suku pertama pengurang, bukan seluruhnya.
2. **Menggabungkan suku tak sejenis:** menuliskan $3x^2 + 2x = 5x^3$ (salah). Suku berbeda pangkat tidak dapat digabungkan.
3. **Kesalahan tanda pada substitusi negatif:** menuliskan $-2^2 = -4$ padahal yang dimaksud $(-2)^2 = 4$.
4. **Perkalian tidak lengkap:** terlewat mengalikan salah satu suku (khususnya konstanta).
5. **Menyamakan kesamaan dengan persamaan biasa:** untuk identitas, yang disamakan adalah **koefisien**, bukan mencari satu nilai $x$.
6. **Tidak memeriksa derajat hasil kali** ($=$ jumlah derajat) sebagai kontrol kesalahan.

<!-- COMPONENT: Activity TrueFalse -->
> **Latihan Interaktif — Benar/Salah.** Tentukan nilai kebenaran tiap pernyataan berikut.

```json
{ "type":"activity", "widget":"truefalse", "id":"02-act-tf", "competency":"K2",
  "prompt":"Benar atau salah?",
  "statements":[
    {"s":"Derajat hasil kali dua polinomial sama dengan jumlah derajat keduanya.","a":true,"why":"Suku pemimpin saling dikalikan sehingga pangkatnya bertambah."},
    {"s":"$(-2)^2 = -4$.","a":false,"why":"$(-2)^2=4$; tanda negatif ikut dikuadratkan."},
    {"s":"$f(0)$ selalu sama dengan konstanta polinomial.","a":true,"why":"Substitusi x=0 menghilangkan seluruh suku bervariabel."},
    {"s":"Pada pengurangan, hanya suku pertama pengurang yang berubah tanda.","a":false,"why":"Seluruh suku pengurang berubah tanda."}
  ],
  "reward":{"xp":20} }
```

---

## ⚡ Tips Cepat

- Susun **bersusun** dengan pangkat sejajar saat menjumlahkan atau mengurangkan.
- Untuk pengurangan, **ubah tanda terlebih dahulu**, kemudian jumlahkan.
- Untuk identitas, gunakan **substitusi nilai yang memudahkan** ($x=0$, akar-akar penyebut) agar lebih cepat.
- $f(0) = $ konstanta; ini merupakan pemeriksaan instan.
- Selalu gunakan **tanda kurung** pada bilangan negatif saat substitusi.

---

## ✅ Ringkasan Sub Materi

- **Penjumlahan/pengurangan:** gabungkan suku sejenis; pengurangan dilakukan dengan mengubah tanda pengurang lalu menjumlahkan.
- **Perkalian:** gunakan sifat distributif; derajat hasil $=$ jumlah derajat. Kuasai identitas $(a\pm b)^2$, $a^2-b^2$, dan $a^3\pm b^3$.
- **Nilai $f(k)$:** diperoleh melalui substitusi. $f(0)=$ konstanta. Gunakan tanda kurung pada bilangan negatif.
- **Kesamaan:** samakan koefisien pangkat demi pangkat untuk menentukan nilai yang belum diketahui.
- **Identitas:** benar untuk semua $x$; pemilihan nilai $x$ yang memudahkan mempercepat penyelesaian.

---

## 📝 Latihan Bertingkat

<!-- COMPONENT: Quiz -->

### 🟢 Set A — 10 Soal Mudah
1. $(x^2 + 2x) + (3x^2 - x)$
2. $(5x - 4) - (2x + 1)$
3. $3(x^2 - 2x + 4)$
4. $f(x)=x^2+1$, hitung $f(3)$.
5. $(x+2)(x+5)$
6. $f(x)=2x-7$, hitung $f(0)$.
7. $(x-1)(x+1)$
8. $(4x^3 - x) + (x^3 + x)$
9. $f(x)=x^3$, hitung $f(-1)$.
10. $-2(3x^2 - x + 5)$

```json
{
  "set_id": "02-set-A-mudah", "level": "mudah",
  "items": [
    {"id":"A1","type":"short","question":"$(x^2+2x)+(3x^2-x)$","answer":"4x^2 + x","explanation":"Gabung suku sejenis."},
    {"id":"A2","type":"short","question":"$(5x-4)-(2x+1)$","answer":"3x - 5","explanation":"Balik tanda pengurang: 5x-4-2x-1."},
    {"id":"A3","type":"short","question":"$3(x^2-2x+4)$","answer":"3x^2 - 6x + 12","explanation":"Distribusi ke tiap suku."},
    {"id":"A4","type":"short","question":"$f(x)=x^2+1,\\ f(3)$","answer":"10","explanation":"9+1=10."},
    {"id":"A5","type":"short","question":"$(x+2)(x+5)$","answer":"x^2 + 7x + 10","explanation":"Distributif."},
    {"id":"A6","type":"short","question":"$f(x)=2x-7,\\ f(0)$","answer":"-7","explanation":"f(0)=konstanta."},
    {"id":"A7","type":"short","question":"$(x-1)(x+1)$","answer":"x^2 - 1","explanation":"Selisih kuadrat."},
    {"id":"A8","type":"short","question":"$(4x^3-x)+(x^3+x)$","answer":"5x^3","explanation":"x saling hapus."},
    {"id":"A9","type":"short","question":"$f(x)=x^3,\\ f(-1)$","answer":"-1","explanation":"(-1)^3=-1."},
    {"id":"A10","type":"short","question":"$-2(3x^2-x+5)$","answer":"-6x^2 + 2x - 10","explanation":"Distribusi tanda negatif."}
  ]
}
```
<details><summary><strong>Pembahasan Set A</strong></summary>

1. $4x^2 + x$. 2. $3x-5$. 3. $3x^2-6x+12$. 4. $10$. 5. $x^2+7x+10$. 6. $-7$. 7. $x^2-1$. 8. $5x^3$. 9. $-1$. 10. $-6x^2+2x-10$.
</details>

### 🟡 Set B — 10 Soal Sedang
1. $(2x^2 - 3x + 1) - (x^2 - x - 4)$
2. $(x - 2)(x^2 + 2x + 4)$
3. $f(x)=x^3 - 2x^2 + 5$, hitung $f(-1)$.
4. $(2x+1)^2$
5. Tentukan $a$ jika $(x+a)(x+3)=x^2+7x+12$.
6. $(x^2+1)(x^2-1)$
7. $f(x)=x^4 - 3x^2 + 2$, hitung $f(2)$.
8. $(3x - 2)(3x + 2)$
9. $(x+1)^3$
10. $g(x)=ax+b$, $g(1)=5$, $g(2)=8$. Tentukan $a,b$.

```json
{
  "set_id":"02-set-B-sedang","level":"sedang",
  "items":[
    {"id":"B1","type":"short","question":"$(2x^2-3x+1)-(x^2-x-4)$","answer":"x^2 - 2x + 5","explanation":"Balik tanda pengurang lalu gabung."},
    {"id":"B2","type":"short","question":"$(x-2)(x^2+2x+4)$","answer":"x^3 - 8","explanation":"Pola $a^3-b^3$ dengan $a=x,b=2$."},
    {"id":"B3","type":"short","question":"$f(x)=x^3-2x^2+5,\\ f(-1)$","answer":"2","explanation":"-1-2+5=2."},
    {"id":"B4","type":"short","question":"$(2x+1)^2$","answer":"4x^2 + 4x + 1","explanation":"(a+b)^2."},
    {"id":"B5","type":"short","question":"$(x+a)(x+3)=x^2+7x+12$, a=","answer":"4","explanation":"a+3=7 → a=4."},
    {"id":"B6","type":"short","question":"$(x^2+1)(x^2-1)$","answer":"x^4 - 1","explanation":"Selisih kuadrat dgn $a=x^2$."},
    {"id":"B7","type":"short","question":"$f(x)=x^4-3x^2+2,\\ f(2)$","answer":"6","explanation":"16-12+2=6."},
    {"id":"B8","type":"short","question":"$(3x-2)(3x+2)$","answer":"9x^2 - 4","explanation":"Selisih kuadrat."},
    {"id":"B9","type":"short","question":"$(x+1)^3$","answer":"x^3 + 3x^2 + 3x + 1","explanation":"(a+b)^3."},
    {"id":"B10","type":"short","question":"$g(x)=ax+b,\\ g(1)=5,\\ g(2)=8$","answer":"a=3, b=2","explanation":"a+b=5, 2a+b=8 → a=3,b=2."}
  ]
}
```
<details><summary><strong>Pembahasan Set B</strong></summary>

1. $x^2 - 2x + 5$. 2. $x^3 - 8$ (pola $a^3-b^3$). 3. $-1-2+5=2$. 4. $4x^2+4x+1$. 5. $a=4$. 6. $x^4-1$. 7. $16-12+2=6$. 8. $9x^2-4$. 9. $x^3+3x^2+3x+1$. 10. Dari $a+b=5$ & $2a+b=8$: $a=3, b=2$.
</details>

### 🔴 Set C — 10 Soal Sulit
1. Sederhanakan $(x+2)^3 - (x-2)^3$.
2. $f(x)=2x^3 - x^2 + 4x - 3$, hitung $f\!\left(\tfrac12\right)$.
3. Tentukan $a,b$ jika $x^3 + ax + b = (x-1)(x^2 + x + b)$ untuk semua $x$.
4. Jika $(x^2 + px + 2)(x + 3) = x^3 + 4x^2 + 5x + 6$, tentukan $p$.
5. Diketahui $f(x)=x^2+bx+c$, $f(2)=0$, $f(5)=0$. Tentukan $b,c$.
6. Sederhanakan $\dfrac{x^3 - 8}{x - 2}$ (asumsikan $x\neq2$).
7. Tentukan $A,B$: $\dfrac{5}{(x-1)(x+4)} = \dfrac{A}{x-1} + \dfrac{B}{x+4}$.
8. Jika $f(x)=x^3 - 70x^2 - 600x + 74{.}000$, hitung $f(50)$ dan bandingkan dengan $2000$.
9. Buktikan $(a+b+c)^2 = a^2+b^2+c^2 + 2(ab+bc+ca)$.
10. Tentukan konstanta $k$ agar $x^3 + kx^2 + 2x + 8$ bernilai $0$ saat $x = -2$.

```json
{
  "set_id":"02-set-C-sulit","level":"sulit",
  "items":[
    {"id":"C1","type":"short","question":"$(x+2)^3-(x-2)^3$","answer":"12x^2 + 16","explanation":"2(3x^2·2 + 2^3)=... = 12x^2+16."},
    {"id":"C2","type":"short","question":"$f(x)=2x^3-x^2+4x-3,\\ f(1/2)$","answer":"-1","explanation":"2(1/8)-1/4+2-3 = 1/4-1/4+2-3 = -1."},
    {"id":"C3","type":"short","question":"$x^3+ax+b=(x-1)(x^2+x+b)$","answer":"a=b-1, b bebas; jabaran: $x^3+(b-1)x-b$, jadi a=b-1 dan b=-b→b=0,a=-1","explanation":"Samakan: $(x-1)(x^2+x+b)=x^3+(b-1)x-b$. Konstanta: $b=-b$→$b=0$; $a=b-1=-1$."},
    {"id":"C4","type":"short","question":"$(x^2+px+2)(x+3)=x^3+4x^2+5x+6$, p=","answer":"1","explanation":"Koef $x^2$: $p+3=4$ → $p=1$."},
    {"id":"C5","type":"short","question":"$f(x)=x^2+bx+c,\\ f(2)=f(5)=0$","answer":"b=-7, c=10","explanation":"Akar 2 dan 5 → $x^2-7x+10$."},
    {"id":"C6","type":"short","question":"$\\frac{x^3-8}{x-2}$","answer":"x^2 + 2x + 4","explanation":"a^3-b^3=(a-b)(a^2+ab+b^2)."},
    {"id":"C7","type":"short","question":"$\\frac{5}{(x-1)(x+4)}=\\frac{A}{x-1}+\\frac{B}{x+4}$","answer":"A=1, B=-1","explanation":"x=1: 5=5A→A=1; x=-4: 5=-5B→B=-1."},
    {"id":"C8","type":"short","question":"$f(50)$ vs 2000","answer":"f(50)=-6000, ≠2000 (lebih kecil)","explanation":"125000-175000-30000+74000=-6000."},
    {"id":"C9","type":"proof","question":"Buktikan $(a+b+c)^2=a^2+b^2+c^2+2(ab+bc+ca)$","answer":"jabarkan (a+b+c)(a+b+c)","explanation":"Distribusi penuh menghasilkan 3 kuadrat + 2× tiap hasil kali silang."},
    {"id":"C10","type":"short","question":"$x^3+kx^2+2x+8=0$ saat $x=-2$, k=","answer":"1","explanation":"-8+4k-4+8=0 → 4k-4=0 → k=1."}
  ]
}
```
<details><summary><strong>Pembahasan Set C</strong></summary>

1. $(x+2)^3-(x-2)^3$. Gunakan $ (a+b)^3-(a-b)^3 = 2(3a^2b + b^3)$ dengan $a=x,b=2$: $2(3x^2\cdot2 + 8)=2(6x^2+8)=12x^2+16$.
2. $f(\tfrac12)$: $2(\tfrac18)=\tfrac14$; $-(\tfrac12)^2=-\tfrac14$; $4(\tfrac12)=2$; lalu $-3$. Total $\tfrac14-\tfrac14+2-3=\mathbf{-1}$.
3. $(x-1)(x^2+x+b)=x^3+x^2+bx-x^2-x-b = x^3+(b-1)x - b$. Samakan dengan $x^3+ax+b$: konstanta $-b=b\Rightarrow b=0$; lalu $a=b-1=-1$. Jadi $a=-1,\,b=0$.
4. Koef $x^2$ ruas kiri $= p+3$; samakan $=4 \Rightarrow p=1$.
5. Akar $2$ dan $5$ → $x^2-(2+5)x+2\cdot5 = x^2-7x+10$, jadi $b=-7,\,c=10$.
6. $\frac{x^3-8}{x-2}=\frac{(x-2)(x^2+2x+4)}{x-2}=x^2+2x+4$.
7. $x=1$: $5=A(5)\Rightarrow A=1$. $x=-4$: $5=B(-5)\Rightarrow B=-1$.
8. $f(50)=125000-175000-30000+74{.}000=-6000$. $-6000\neq2000$ → nilainya jauh lebih kecil dari modal.
9. $(a+b+c)(a+b+c)$ dijabarkan: tiap suku kiri dikali tiap suku kanan → $a^2+ab+ac+ab+b^2+bc+ac+bc+c^2 = a^2+b^2+c^2+2(ab+bc+ca)$. ∎
10. Substitusi $x=-2$: $-8+4k-4+8=0 \Rightarrow 4k-4=0 \Rightarrow k=1$.
</details>

### 🧠 Set D — 5 Soal HOTS
1. Diketahui $f(x)=x^3 - 70x^2 - 600x + 74{.}000$. Tanpa menghitung ulang penuh, jelaskan mengapa $f(40)=f(60)$.
2. Jika $f(x)+g(x)=3x^2 - x + 4$ dan $f(x)-g(x)=x^2+3x-2$, tentukan $f(x)$ dan $g(x)$.
3. Polinomial $f$ memenuhi $f(x+1)-f(x)=2x+3$ untuk semua $x$, dan $f(0)=1$. Tentukan $f(x)$ (petunjuk: coba $f$ kuadrat).
4. Tentukan $A,B,C$: $\dfrac{x^2+1}{x(x-1)(x+1)} = \dfrac{A}{x}+\dfrac{B}{x-1}+\dfrac{C}{x+1}$.
5. Jika $(x^2+ax+1)$ adalah faktor dari $x^3 + bx + c$ dan hasil bagi lainnya $(x+2)$, tentukan $a,b,c$.

```json
{
  "set_id":"02-set-D-hots","level":"hots",
  "items":[
    {"id":"D1","type":"short","question":"Mengapa f(40)=f(60)?","answer":"karena f(x)-2000 berakar 40,60,-30","explanation":"f(40)=2000 dan 60 juga akar f(x)-2000 → f(60)=2000."},
    {"id":"D2","type":"short","question":"f+g=3x^2-x+4, f-g=x^2+3x-2","answer":"f=2x^2+x+1, g=x^2-2x+3","explanation":"Jumlah/2 dan selisih/2."},
    {"id":"D3","type":"short","question":"f(x+1)-f(x)=2x+3, f(0)=1","answer":"x^2 + 2x + 1","explanation":"$f(x)=x^2+2x+1$ memenuhi selisih & $f(0)=1$."},
    {"id":"D4","type":"short","question":"pecahan parsial $x^2+1$ / $x(x-1)(x+1)$","answer":"A=-1, B=1, C=1","explanation":"x=0→A=-1; x=1→B=1; x=-1→C=1."},
    {"id":"D5","type":"short","question":"(x^2+ax+1)(x+2)=x^3+bx+c","answer":"a=-2, b=-3, c=2","explanation":"Koef $x^2$ harus 0: $a+2=0$→$a=-2$; jabarkan sisanya."}
  ]
}
```
<details><summary><strong>Pembahasan Set D</strong></summary>

1. Hitung $f(40)=2000$. Karena $f(x)-2000$ berderajat 3 dengan jumlah akar $=70$, dan $40$ salah satu akarnya, dua akar lain berjumlah $30$; ternyata $60$ dan $-30$. Maka $60$ juga akar → $f(60)-2000=0 \Rightarrow f(60)=2000=f(40)$.
2. Jumlahkan kedua persamaan: $2f = 4x^2+2x+2 \Rightarrow f=2x^2+x+1$. Kurangkan: $2g = 2x^2-4x+6 \Rightarrow g=x^2-2x+3$.
3. Misalkan $f(x)=x^2+2x+1$. Periksa: $f(x+1)-f(x) = [(x+1)^2+2(x+1)+1]-[x^2+2x+1] = (x^2+4x+4)-(x^2+2x+1)=2x+3$ ✔, dan $f(0)=1$ ✔.
4. Kalikan penyebut: $x^2+1 = A(x-1)(x+1)+Bx(x+1)+Cx(x-1)$. $x=0$: $1=A(-1)(1)\Rightarrow A=-1$. $x=1$: $2=B(1)(2)\Rightarrow B=1$. $x=-1$: $2=C(-1)(-2)\Rightarrow C=1$.
5. $(x^2+ax+1)(x+2)=x^3+2x^2+ax^2+2ax+x+2 = x^3+(a+2)x^2+(2a+1)x+2$. Karena hasilnya $x^3+bx+c$ (tanpa suku $x^2$): $a+2=0\Rightarrow a=-2$. Lalu $b=2a+1=-3$, $c=2$.
</details>

### 🏆 Set E — 5 Soal Model TKA
1. **(Drum, no.7)** Jika terdapat **8 drum** (bukan 10) dengan $V(T)=0{,}05T^3+0{,}4T^2+20T$, nyatakan total penambahan volume.
2. **(Saham, no.8)** Untuk $f(x)=x^3-70x^2-600x+74{.}000$ (juta rupiah), apakah menjual **20 unit** menghasilkan modal yang **lebih besar** dari $2000$ juta? Hitung $f(20)$.
3. **(Pemodelan)** Biaya produksi $C(x)=x^2+10x+25$ (ribu). Jika diproduksi $x=15$, berapa biayanya? Kenali bentuk $C(x)$.
4. **(Kesamaan)** Diketahui $x^3 - 6x^2 + 11x - 6 = (x-1)(x-2)(x-r)$ untuk semua $x$. Tentukan $r$.
5. **(Penalaran)** Jika $f(x)=2x^3 + ax^2 + bx + 6$ dan $f(1)=f(-1)$, tentukan nilai $b$ (petunjuk: suku ganjil vs genap).

```json
{
  "set_id":"02-set-E-tka","level":"tka",
  "items":[
    {"id":"E1","type":"short","source":"TKA-drum","question":"Total 8 drum V(T)","answer":"0,4T^3 + 3,2T^2 + 160T","explanation":"Kalikan tiap koefisien dengan 8."},
    {"id":"E2","type":"short","source":"TKA-saham","question":"f(20) vs 2000","answer":"f(20)=42000, jauh lebih besar dari 2000","explanation":"8000-28000-12000+74000=42000."},
    {"id":"E3","type":"short","question":"C(x)=x^2+10x+25, C(15)","answer":"400","explanation":"(x+5)^2 → (20)^2=400."},
    {"id":"E4","type":"short","question":"x^3-6x^2+11x-6=(x-1)(x-2)(x-r)","answer":"r=3","explanation":"Konstanta: (-1)(-2)(-r)=-6 → r=3."},
    {"id":"E5","type":"short","question":"$f(1)=f(-1)$ untuk $2x^3+ax^2+bx+6$ (cari b; a bebas)","answer":"b=-2","explanation":"f(1)-f(-1)=4+2b=0 → b=-2; nilai a bebas karena suku genap otomatis sama."}
  ]
}
```
<details><summary><strong>Pembahasan Set E</strong></summary>

**E1.** $8\cdot V(T) = 0{,}4\,T^3 + 3{,}2\,T^2 + 160\,T$. (Kalikan tiap koefisien dengan 8: $8\cdot0{,}05=0{,}4$; $8\cdot0{,}4=3{,}2$; $8\cdot20=160$.)

**E2.** $f(20)=8000 - 70(400) - 600(20) + 74{.}000 = 8000 - 28000 - 12000 + 74{.}000 = 42000$. Jauh **lebih besar** dari $2000$.

**E3.** $C(x)=(x+5)^2$. $C(15)=(20)^2=400$ (ribu rupiah).

**E4.** Konstanta ruas kanan $=(-1)(-2)(-r) = -2r$; samakan dengan $-6 \Rightarrow -2r=-6 \Rightarrow r=3$. (Sesuai: akar-akarnya $1,2,3$.)

**E5.** $f(1)=2+a+b+6$; $f(-1)=-2+a-b+6$. Selisih $f(1)-f(-1)=4+2b=0 \Rightarrow b=-2$. Jadi syaratnya $b=-2$ (suku pangkat-ganjil seimbang). *(Nilai $a$ bebas karena suku genap otomatis sama di $x=\pm1$.)*
</details>

---

## 🏆 Tantangan Akhir Bab 2 — Uji Kompetensi

<!-- COMPONENT: Tantangan Akhir Bab
     DEVELOPER: render sebagai sesi soal berwaktu dengan rekap capaian (bintang, poin, waktu terbaik).
     Framing tetap sebagai asesmen/umpan balik belajar, bukan permainan peran. -->
> Kerjakan rangkaian soal berikut dalam mode berwaktu untuk menguji penguasaan Anda atas operasi dan nilai polinomial. Perolehan bintang dan poin merupakan umpan balik atas ketepatan serta kecepatan; sistem menyimpan capaian terbaik Anda sebagai catatan kemajuan belajar.

```json
{ "type":"challenge", "id":"02-tantangan", "competency":"K2",
  "title":"Tantangan Akhir Bab 2: Operasi dan Nilai Polinomial",
  "mode":"timed", "time_limit_sec":180, "shuffle":true,
  "pool":["02-act-kurang","02-act-identitas","02-act-cloze","02-act-identitas-kategori","02-act-tf","02-set-A-mudah"],
  "scoring":{"per_correct":10,"time_bonus":true},
  "stars":{"3":90,"2":70,"1":50},
  "reward":{"xp":80,"badge":"operator-polinomial"},
  "record":{"track_best_time":true,"track_best_score":true} }
```

---

## 📝 Refleksi

<!-- COMPONENT: Reflection -->
1. Saat mengurangkan polinomial, langkah apa yang paling sering terlewat?
2. Jelaskan dengan bahasa Anda sendiri: apa perbedaan antara **persamaan** dan **identitas**?
3. Setelah menyelesaikan soal saham dan drum, dapatkah Anda mengenali kapan sebuah persoalan nyata pada dasarnya merupakan proses substitusi?

---

## ➡️ Persiapan Menuju Sub Materi Berikutnya

Pada bab ini, kita telah mempelajari operasi dan penghitungan nilai polinomial, termasuk menyelesaikan dua soal TKA.

Pada **Bab 03 — Pembagian Polinomial**, kita akan menemukan sebuah hubungan penting antara penghitungan nilai $f(k)$ (yang baru saja dipelajari) dan **pembagian** $f(x)$ oleh $(x-k)$. Kita akan mempelajari **pembagian bersusun** dan **skema Horner** yang efisien.

Bekal penting dari bab ini:
- Perkalian polinomial (untuk memeriksa hasil bagi × pembagi + sisa).
- Substitusi $f(k)$—yang akan muncul kembali sebagai **sisa pembagian**.

> Lanjutkan ke **Bab 03**.

<!-- COMPONENT: Summary -->
<!-- Progress bar: 3/8. -->
