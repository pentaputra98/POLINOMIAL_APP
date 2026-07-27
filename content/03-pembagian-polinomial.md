---
id: "03-pembagian-polinomial"
slug: "pembagian-polinomial"
title: "Pembagian Polinomial"
order: 3
duration_min: 110
level: "Kelas XI - Kurikulum Merdeka"
track: "TKA Matematika Lanjut"
prerequisites:
  - "02-operasi-dan-nilai-polinomial"
competencies:
  - "K3: Membagi polinomial (bersusun, Horner, Horner-Kino)"
learning_objectives:
  - "Memahami algoritma pembagian polinomial: f = pembagi·hasil bagi + sisa"
  - "Melakukan pembagian bersusun (porogapit)"
  - "Menggunakan skema Horner untuk pembagi (x-k) dan (ax-b)"
  - "Menggunakan Horner-Kino untuk pembagi kuadrat"
  - "Memilih metode tercepat sesuai bentuk pembagi"
tags: ["pembagian", "bersusun", "porogapit", "horner", "horner-kino", "hasil-bagi", "sisa"]
components:
  - "Concept Map Mini"
  - "Step by Step Animation"
  - "Horner Interactive"
  - "Method Comparator"
  - "Quiz"
  - "Reflection"
  - "Activity TrueFalse"
  - "Activity Ordering"
  - "Activity HornerSteps"
  - "Activity ErrorHunt"
  - "Activity Cloze"
  - "Activity Matching"
  - "Tantangan Akhir Bab"
activities:
  - "03-act-algoritma"
  - "03-act-bersusun"
  - "03-act-horner"
  - "03-act-axb"
  - "03-act-kino"
  - "03-act-metode"
challenge: "03-tantangan"
xp_available: 215
katex: true
---

# Bab 03 — Pembagian Polinomial

<!-- COMPONENT: Concept Map Mini
     DEVELOPER: WAJIB dirender sebagai kartu/diagram interaktif bergaya Soft Neo Brutalism,
     BUKAN menyalin blok teks ASCII apa adanya. Simpul bertahap:
     Algoritma pembagian -> Bersusun -> Horner (x-k) -> Horner (ax-b) -> Horner-Kino -> Memilih metode,
     dapat diklik menuju sub-bagian terkait. Blok teks di bawah HANYA rujukan struktur. -->

## 🎯 Tujuan Pembelajaran

Setelah mempelajari bab ini, peserta didik diharapkan mampu:

1. Menuliskan & memahami **algoritma pembagian**: $f(x) = P(x)\cdot H(x) + S(x)$.
2. Membagi polinomial dengan **pembagian bersusun (porogapit)**.
3. Menggunakan **skema Horner** untuk pembagi $(x-k)$ dan $(ax-b)$.
4. Menggunakan **Horner-Kino** untuk pembagi **kuadrat**.
5. **Memilih metode tercepat** sesuai bentuk soal.

## 🧩 Kompetensi yang Dipelajari
- **K3 — Membagi polinomial (bersusun, Horner, Horner-Kino).**

## 📦 Prasyarat
- Bab 02 (perkalian polinomial & substitusi — untuk mengecek hasil).
- Menulis polinomial dengan **koefisien nol** untuk suku yang hilang (Bab 01).

## ⏱️ Estimasi Waktu Belajar
**±110 menit** — bab terpanjang dan terpenting; kerjakan dengan cermat.

## 🗺️ Peta Konsep Kecil

<!-- COMPONENT: Concept Map Mini (lanjutan)
     DEVELOPER: tampilkan sebagai alur kartu interaktif, bukan teks ASCII mentah. -->

```
PEMBAGIAN POLINOMIAL
├─ 1. Algoritma pembagian   f = P·H + S,  derajat S < derajat P
├─ 2. Bersusun (porogapit)  ─► universal, untuk pembagi apa pun
├─ 3. Horner (x - k)        ─► super cepat untuk pembagi linear monik
├─ 4. Horner (ax - b)       ─► sedikit penyesuaian
├─ 5. Horner-Kino (kuadrat) ─► untuk pembagi berderajat 2
└─ 6. Memilih metode        ─► mana tercepat?
```

## 🔥 Motivasi

Banyak siswa merasa bab ini sulit. Namun, setelah memahami **Horner**, pembagian polinomial menjadi salah satu bagian yang **paling cepat dikerjakan** dalam materi ini—polinomial berderajat 5 pun dapat dibagi dalam waktu singkat.

Terdapat pula temuan penting: pada Bab 02, nilai $f(k)$ dihitung melalui substitusi. Ternyata **angka terakhir pada skema Horner ketika membagi dengan $(x-k)$ tepat sama dengan $f(k)$**. Dengan demikian, menghitung nilai dan membagi pada dasarnya merupakan **proses yang sama**. Inilah cikal bakal Teorema Sisa (Bab 04).

---

## 1️⃣ Algoritma Pembagian Polinomial

Perhatikan kembali pembagian bilangan: $17 \div 5 = 3$ sisa $2$, yang dapat ditulis $17 = 5\times 3 + 2$. Polinomial bekerja dengan cara yang **serupa**.

> **Algoritma Pembagian.** Untuk polinomial $f(x)$ (yang dibagi) dan $P(x)$ (pembagi, $P\neq0$), selalu ada polinomial **hasil bagi** $H(x)$ dan **sisa** $S(x)$ tunggal sehingga
> $$f(x) = P(x)\cdot H(x) + S(x)$$
> dengan **derajat sisa $<$ derajat pembagi**.

Konsekuensi penting dari "derajat sisa < derajat pembagi":

| Pembagi | Derajat pembagi | Bentuk sisa maksimum |
|---------|:---------------:|----------------------|
| $(x-k)$ | 1 | konstanta (derajat 0), misal $S = c$ |
| $(ax-b)$ | 1 | konstanta |
| kuadrat ($x^2+bx+c$) | 2 | linear (derajat $\leq 1$), misal $S = rx+s$ |
| kubik | 3 | derajat $\leq 2$ |

> 💡 **Kunci untuk soal TKA #6.** Karena dibagi $x^2+x+1$ (derajat 2), sisanya pasti berbentuk $rx+s$—dan soal memang memberikan sisa $5x-1$. Penyelesaian lengkap dibahas pada bagian Horner-Kino.

### Nama-nama bagian
$$\underbrace{f(x)}_{\text{yang dibagi}} = \underbrace{P(x)}_{\text{pembagi}}\cdot \underbrace{H(x)}_{\text{hasil bagi}} + \underbrace{S(x)}_{\text{sisa}}$$

**Cara memeriksa hasil:** hitung $P(x)\cdot H(x) + S(x)$; apabila hasilnya kembali menjadi $f(x)$, pekerjaan benar. Pemeriksaan ini dianjurkan, terutama pada tahap awal belajar.

---

<!-- COMPONENT: Activity TrueFalse -->
> **Latihan Interaktif — Benar/Salah.** Tentukan nilai kebenaran tiap pernyataan berikut.

```json
{ "type":"activity", "widget":"truefalse", "id":"03-act-algoritma", "competency":"K3",
  "prompt":"Benar atau salah?",
  "statements":[
    {"s":"Sisa pembagian selalu berderajat lebih kecil daripada pembagi.","a":true,"why":"Ini definisi algoritma pembagian."},
    {"s":"Membagi dengan pembagi berderajat 2 dapat menghasilkan sisa berbentuk rx+s.","a":true,"why":"Derajat sisa < 2, jadi paling tinggi berderajat 1."},
    {"s":"Membagi dengan (x-k) selalu menghasilkan sisa berupa konstanta.","a":true,"why":"Derajat sisa < 1 berarti berderajat 0 (konstanta)."},
    {"s":"Sisa boleh berderajat sama dengan pembagi.","a":false,"why":"Sisa harus berderajat lebih kecil daripada pembagi."}
  ],
  "reward":{"xp":20} }
```

## 2️⃣ Pembagian Bersusun (Porogapit)

Metode ini **paling universal**—dapat digunakan untuk pembagi berbentuk apa pun (linear, kuadrat, kubik). Caranya menyerupai pembagian bersusun pada bilangan.

**Contoh.** Bagi $f(x) = 2x^3 - 3x^2 + 4x - 5$ oleh $x - 2$.

<!-- COMPONENT: Step by Step Animation -->
<!-- Animasikan langkah bersusun: bagi suku pemimpin, kali, kurang, turunkan. Sorot suku aktif. -->

**Langkah 1.** Bagi suku pemimpin yang dibagi dengan suku pemimpin pembagi: $\dfrac{2x^3}{x} = 2x^2$. Tulis $2x^2$ sebagai suku pertama hasil bagi.

Kalikan $2x^2 \cdot (x-2) = 2x^3 - 4x^2$, lalu kurangkan:
$$(2x^3 - 3x^2) - (2x^3 - 4x^2) = x^2$$
Turunkan suku berikutnya: $x^2 + 4x$.

**Langkah 2.** $\dfrac{x^2}{x} = x$. Suku kedua hasil bagi: $+x$.
Kalikan $x(x-2) = x^2 - 2x$, kurangkan:
$$(x^2 + 4x) - (x^2 - 2x) = 6x$$
Turunkan: $6x - 5$.

**Langkah 3.** $\dfrac{6x}{x} = 6$. Suku ketiga: $+6$.
Kalikan $6(x-2) = 6x - 12$, kurangkan:
$$(6x - 5) - (6x - 12) = 7$$
Derajat $7$ (yaitu 0) sudah lebih kecil dari derajat pembagi (1) → **berhenti**.

**Hasil:** hasil bagi $H(x) = 2x^2 + x + 6$, sisa $S = 7$. Jadi
$$2x^3 - 3x^2 + 4x - 5 = (x-2)(2x^2 + x + 6) + 7$$

> ⚡ **Pemeriksaan dengan substitusi:** $f(2) = 2(8) - 3(4) + 8 - 5 = 16 - 12 + 8 - 5 = 7$. Ternyata **sisa $= f(2)$**. Fakta penting ini dibahas pada bagian Horner dan Bab 04.

> ⚠️ **Penting:** tuliskan **koefisien nol** untuk suku yang hilang sebelum membagi. Sebagai contoh, saat membagi $x^3 - 1$ oleh $x-1$, tuliskan $x^3 + 0x^2 + 0x - 1$. Kelalaian ini merupakan sumber kesalahan terbesar.

---

<!-- COMPONENT: Activity Ordering -->
> **Latihan Interaktif — Mengurutkan.** Susun langkah satu siklus pembagian bersusun secara berurutan.

```json
{ "type":"activity", "widget":"ordering", "id":"03-act-bersusun", "competency":"K3",
  "prompt":"Urutkan langkah satu siklus pembagian bersusun",
  "options":["Bagi suku pemimpin yang dibagi dengan suku pemimpin pembagi","Kalikan hasilnya dengan seluruh pembagi","Kurangkan dari polinomial yang dibagi","Turunkan suku berikutnya"],
  "answer_order":[0,1,2,3],
  "reward":{"xp":20} }
```

## 3️⃣ Skema Horner untuk Pembagi $(x - k)$

Pembagian bersusun memberikan hasil yang benar, namun relatif lambat. Untuk pembagi **linear monik** $(x-k)$, terdapat cara yang jauh lebih cepat: **skema Horner** (pembagian sintetik).

### Aturan Horner (hafalkan iramanya: *turun → kali → jumlah*)

1. Tulis **semua koefisien** $f(x)$ (termasuk nol) berurutan.
2. Tulis nilai $k$ di kiri.
3. **Turunkan** koefisien pertama.
4. **Kalikan** dengan $k$, tulis di bawah koefisien berikutnya.
5. **Jumlahkan** kolom itu. Ulangi kali–jumlah sampai habis.
6. Angka-angka hasil (kecuali yang terakhir) = **koefisien hasil bagi**; angka **terakhir = sisa**.

**Contoh (sama seperti sebelumnya).** Bagi $2x^3 - 3x^2 + 4x - 5$ oleh $x - 2$, jadi $k = 2$.

<!-- COMPONENT: Horner Interactive -->
<!-- Tabel Horner interaktif: user isi tiap sel; app validasi langkah turun-kali-jumlah. Sisa disorot beda warna. -->

```
        │   2     -3      4      -5
   k=2  │           4      2      12
        └──────────────────────────────
            2      1      6      | 7   ← sisa
        (koef. hasil bagi)      (sisa)
```

Bacalah hasilnya: koefisien hasil bagi $2, 1, 6$ menghasilkan $H(x) = 2x^2 + x + 6$ (turun satu derajat), dengan **sisa $= 7$**. Hasilnya sama persis dengan pembagian bersusun, namun jauh lebih cepat.

> 💡 **Mengapa derajat hasil bagi turun 1?** Karena pembaginya berderajat 1. Empat koefisien masukan menghasilkan tiga koefisien hasil bagi dan satu sisa.

> 💡 **Mengapa sisa $= f(k)$?** Hal ini dibuktikan pada Bab 04 (Teorema Sisa). Untuk saat ini, gunakan sebagai **alat pemeriksaan** dan penghitungan cepat.

### Contoh Horner dengan suku hilang

Bagi $x^3 - 7x + 6$ oleh $x - 1$. Tuliskan koefisien lengkap: $1, 0, -7, 6$ (perhatikan koefisien $0$ untuk $x^2$), $k=1$.

```
        │   1      0     -7      6
   k=1  │           1      1     -6
        └──────────────────────────────
            1      1     -6     | 0   ← sisa 0!
```

Hasil bagi $x^2 + x - 6$, sisa $0$. Sisa $0$ berarti $(x-1)$ merupakan **faktor** dari $f(x)$ (dibahas pada Bab 04). Bahkan $x^2+x-6=(x+3)(x-2)$, jadi $x^3-7x+6=(x-1)(x+3)(x-2)$.

---

<!-- COMPONENT: Activity HornerSteps
     DEVELOPER: render tabel Horner interaktif; validasi tiap sel dengan pola turun-kali-jumlah. -->
> **Latihan Interaktif — Melengkapi Skema Horner.** Isilah tiap sel skema Horner mengikuti pola *turun → kali → jumlah*.

```json
{ "type":"activity", "widget":"horner-steps", "id":"03-act-horner", "competency":"K3",
  "prompt":"Lengkapi skema Horner untuk membagi $2x^3-3x^2+4x-5$ oleh $(x-2)$.",
  "poly":[2,-3,4,-5], "k":2,
  "expected_quotient":[2,1,6], "expected_remainder":7,
  "reward":{"xp":30} }
```

## 4️⃣ Skema Horner untuk Pembagi $(ax - b)$

Bagaimana jika pembaginya bukan monik, misalnya $2x - 3$? Strateginya: ubah terlebih dahulu menjadi bentuk $(x - k)$.

$$2x - 3 = 2\left(x - \tfrac{3}{2}\right)$$

Dengan demikian, pembaginya setara dengan $x - \tfrac32$ (yaitu $k=\tfrac32$), namun terdapat faktor $2$ yang harus diperhitungkan.

**Aturan Horner-$(ax-b)$:**
1. Lakukan Horner biasa dengan $k = \dfrac{b}{a}$.
2. **Sisa** yang didapat sudah benar (tak perlu diubah).
3. **Hasil bagi** yang benar $= \dfrac{\text{hasil bagi dari Horner}}{a}$ (bagi setiap koefisiennya dengan $a$).

**Contoh.** Bagi $2x^3 + 3x^2 - 4x + 1$ oleh $2x - 1$. Maka $k = \tfrac12$, $a=2$.

Koefisien: $2, 3, -4, 1$.
```
         │   2      3     -4      1
  k=1/2  │           1      2     -1
         └──────────────────────────────
             2      4     -2     | 0   ← sisa 0
```
Hasil bagi "mentah": $2x^2 + 4x - 2$. Bagi tiap koefisien dengan $a=2$:
$$H(x) = x^2 + 2x - 1, \qquad S = 0$$
Cek: $(2x-1)(x^2+2x-1) = 2x^3+4x^2-2x - x^2-2x+1 = 2x^3+3x^2-4x+1$ ✔.

> ⚠️ **Jebakan:** yang dibagi dengan $a$ **hanya hasil bagi**, **bukan** sisa. Sisa dari Horner sudah merupakan sisa yang benar.

> **Alasannya:** $f(x) = (2x-1)H(x) + S = 2\left(x-\tfrac12\right)H(x) + S = \left(x-\tfrac12\right)\underbrace{[2H(x)]}_{\text{hasil bagi Horner}} + S$. Jadi hasil bagi Horner $= 2H(x)$, sehingga $H(x) = \frac{1}{2}\times(\text{hasil bagi Horner})$. Sisa $S$ tak tersentuh.

---

<!-- COMPONENT: Activity ErrorHunt -->
> **Latihan Interaktif — Menemukan Kesalahan.** Cermati pengerjaan berikut; terdapat satu langkah yang keliru.

```json
{ "type":"activity", "widget":"error-hunt", "id":"03-act-axb", "competency":"K3",
  "prompt":"Membagi $6x^3-5x^2+4x-1$ oleh $(2x-1)$ dengan Horner ($k=1/2$). Manakah langkah yang salah?",
  "steps":[
    "Horner dengan k=1/2 memberi baris hasil 6, -2, 3 dan sisa 1/2.",
    "Hasil bagi mentah: $6x^2-2x+3$.",
    "Bagi hasil bagi dengan $a=2$: menjadi $3x^2-x+3/2$.",
    "Bagi sisa dengan a=2: sisa menjadi 1/4."
  ],
  "wrong_index":3,
  "why":"Hanya hasil bagi yang dibagi dengan a. Sisa dari Horner sudah benar (1/2) dan tidak boleh diubah.",
  "reward":{"xp":25} }
```

## 5️⃣ Horner-Kino untuk Pembagi Kuadrat

Apabila pembaginya **kuadrat** (misalnya $x^2 + x + 1$ pada soal TKA #6), terdapat dua pilihan: **bersusun** (selalu dapat digunakan) atau **Horner-Kino** (lebih cepat dan rapi). Karena pembaginya berderajat 2, ingat bahwa **sisanya berbentuk $rx + s$**.

### Cara Horner-Kino (pembagi $x^2 + bx + c$)

Gagasannya: pada tiap langkah, tiap koefisien hasil bagi menyumbang **dua** nilai ke bawah — dikali $-b$ (geser 1 kolom) dan dikali $-c$ (geser 2 kolom) — lalu semua dijumlahkan.

**Contoh.** Bagi $x^4 + 2x^3 - 3x^2 + x + 5$ oleh $x^2 + x + 1$. Di sini $b=1,\ c=1$, jadi pengalinya $-b=-1$ dan $-c=-1$.

Koefisien $f$: $\;1,\ 2,\ -3,\ 1,\ 5$.

```
              │   1      2     -3      1      5
  −b = −1     │         −1     −1     +5          (geser 1 kolom, kali q sebelumnya)
  −c = −1     │                −1     −1     +5   (geser 2 kolom)
              └───────────────────────────────────────
   hasil bagi     1      1     −5   |  5      10
                 (q2)   (q1)  (q0)  |  r      s
```

Cara membaca langkah demi langkah:
- **$q_2 = 1$** (turunkan koefisien pertama).
- **$q_1 = 2 + (-1)(1) = 1$.** [tambahkan $-b\cdot q_2$]
- **$q_0 = -3 + (-1)(1) + (-1)(1) = -5$.** [tambahkan $-b\cdot q_1$ dan $-c\cdot q_2$]
- **$r = 1 + (-1)(-5) + (-1)(1) = 1 + 5 - 1 = 5$.**
- **$s = 5 + (-1)(-5) = 5 + 5 = 10$.**

Hasil: $H(x) = x^2 + x - 5$, sisa $S = 5x + 10$. (Sudah kita verifikasi lewat perkalian — hasilnya benar.)

> 💡 **Alternatif:** apabila Horner-Kino terasa rumit, gunakan **bersusun**—hasilnya identik. Horner-Kino hanya mempercepat proses.

### 🎯 Menyelesaikan Soal TKA #6

> **Soal.** $f(x) = x^4 + ax^3 + bx^2 + x - 6$ dibagi $x^2 + x + 1$ menghasilkan **sisa $5x - 1$**. Nilai $a + b = \dots$

Karena $a$ dan $b$ belum diketahui, $f(x)$ dibagi oleh $x^2+x+1$ **secara simbolik** (menggunakan pembagian bersusun agar transparan), kemudian sisanya ditetapkan sama dengan $5x-1$.

**Pembagian bersusun (simbolik):**

*Langkah 1.* $\dfrac{x^4}{x^2}=x^2$. Kalikan $x^2(x^2+x+1)=x^4+x^3+x^2$. Kurangkan:
$$(x^4+ax^3+bx^2) - (x^4+x^3+x^2) = (a-1)x^3 + (b-1)x^2$$
Turunkan: $(a-1)x^3 + (b-1)x^2 + x - 6$.

*Langkah 2.* $\dfrac{(a-1)x^3}{x^2}=(a-1)x$. Kalikan $(a-1)x(x^2+x+1)=(a-1)x^3+(a-1)x^2+(a-1)x$. Kurangkan:
$$\big[(b-1)-(a-1)\big]x^2 + \big[1-(a-1)\big]x - 6 = (b-a)x^2 + (2-a)x - 6$$

*Langkah 3.* $\dfrac{(b-a)x^2}{x^2}=(b-a)$. Kalikan $(b-a)(x^2+x+1)=(b-a)x^2+(b-a)x+(b-a)$. Kurangkan:
$$\text{sisa} = \big[(2-a)-(b-a)\big]x + \big[-6-(b-a)\big] = (2-b)x + (a-b-6)$$

**Tetapkan sisa $= 5x - 1$** (samakan koefisien—konsep kesamaan polinomial pada Bab 02):
$$
\begin{cases}
2 - b = 5 &\Rightarrow\ b = -3\\[2pt]
a - b - 6 = -1 &\Rightarrow\ a - (-3) - 6 = -1 \ \Rightarrow\ a = 2
\end{cases}
$$

Maka $a = 2,\ b = -3$, sehingga
$$a + b = 2 + (-3) = \boxed{-1} \quad\text{(pilihan C).}$$

> ⚡ **Strategi TKA:** ketika soal menyatakan "dibagi kuadrat, sisa $rx+s$", cukup bentuk **dua persamaan** dari penyamaan koefisien sisa. Hasil bagi lengkap tidak perlu dicari apabila yang ditanyakan hanya $a+b$. *(Pada Bab 04 akan ditunjukkan cara yang lebih cepat menggunakan akar kompleks dari $x^2+x+1$.)*

---

<!-- COMPONENT: Activity Cloze -->
> **Latihan Interaktif — Melengkapi.** Lengkapi penyelesaian soal TKA #6 berikut.

```json
{ "type":"activity", "widget":"cloze", "id":"03-act-kino", "competency":"K3",
  "prompt":"Lengkapi penyelesaian soal TKA #6",
  "template":"$f(x)=x^4+ax^3+bx^2+x-6$ dibagi $x^2+x+1$ memberi sisa $(2-b)x+(a-b-6)$. Agar sisa = $5x-1$: b = {{0}}, a = {{1}}, sehingga a+b = {{2}}.",
  "answers":["-3","2","-1"],
  "reward":{"xp":20} }
```

## 6️⃣ Memilih Metode Tercepat

<!-- COMPONENT: Method Comparator -->
<!-- Tabel interaktif: user pilih bentuk pembagi -> app rekomendasikan metode tercepat + alasan. -->

| Bentuk pembagi | Metode tercepat | Catatan |
|----------------|-----------------|---------|
| $(x-k)$ | **Horner** | Paling cepat. Sisa $=f(k)$. |
| $(ax-b)$ | **Horner** dengan $k=\tfrac{b}{a}$ | Bagi hasil bagi dengan $a$; sisa tetap. |
| Kuadrat yang **bisa difaktorkan** $(x-p)(x-q)$ | **Horner bertingkat** | Horner oleh $(x-p)$, lalu hasilnya Horner oleh $(x-q)$. |
| Kuadrat **tak terfaktorkan** ($x^2+x+1$) | **Horner-Kino / bersusun** | Sisa berbentuk $rx+s$. |
| Pembagi derajat $\geq 3$ | **Bersusun** | Paling aman & jelas. |
| Hanya butuh **sisa** (bukan hasil bagi) | **Teorema Sisa** (Bab 04) | Sering kali tanpa perlu membagi. |

### Perbandingan singkat tiap metode

| Aspek | Bersusun | Horner | Horner-Kino |
|-------|----------|--------|-------------|
| Berlaku untuk | pembagi apa pun | $(x-k)$, $(ax-b)$ | kuadrat |
| Kecepatan | lambat | sangat cepat | cepat |
| Risiko salah | sedang | rendah | sedang |
| Kejelasan langkah | tinggi | sedang | perlu latihan |

> ⚡ **Aturan praktis:** *Pembagi linear → Horner. Pembagi kuadrat terfaktorkan → Horner dua kali. Kuadrat tak terfaktorkan atau berderajat tinggi → bersusun. Hanya butuh sisa → Teorema Sisa.*

---

<!-- COMPONENT: Activity Matching -->
> **Latihan Interaktif — Menjodohkan.** Pasangkan tiap bentuk pembagi dengan metode tercepatnya.

```json
{ "type":"activity", "widget":"matching", "id":"03-act-metode", "competency":"K3",
  "prompt":"Jodohkan bentuk pembagi dengan metode tercepatnya",
  "pairs":[
    ["Pembagi (x-k)","Horner"],
    ["Pembagi (ax-b)","Horner dengan k=b/a"],
    ["Kuadrat terfaktorkan","Horner bertingkat"],
    ["Kuadrat tak terfaktorkan","Horner-Kino atau bersusun"]
  ],
  "reward":{"xp":20} }
```

## 📘 Contoh Bertingkat

### 🟢 Sederhana

**S1.** Bagi $x^2 + 5x + 6$ oleh $x + 2$ (Horner, $k=-2$).
*Pembahasan.* Koef $1,5,6$.
```
  k=-2 │  1    5    6
       │      -2   -6
       │  1    3  | 0
```
Hasil bagi $x+3$, sisa $0$. ($x^2+5x+6=(x+2)(x+3)$.)

**S2.** Bagi $x^3 - 1$ oleh $x - 1$.
*Pembahasan.* Koef lengkap $1,0,0,-1$, $k=1$: turun $1$; $1$; $1$; sisa $0$. Hasil bagi $x^2+x+1$, sisa $0$.

**S3.** Tentukan sisa pembagian $x^2 - 4$ oleh $x - 3$.
*Pembahasan.* $k=3$: $1,\ 0\!+\!3\!=\!3,\ -4\!+\!9\!=\!5$. Sisa $5$ (yaitu $f(3)=9-4=5$).

### 🟡 Sedang

**M1.** Bagi $2x^3 + x^2 - 8x + 5$ oleh $x + 2$.
*Pembahasan.* $k=-2$, koef $2,1,-8,5$:
```
  -2 │ 2    1    -8    5
     │     -4     6    4
     │ 2   -3    -2  | 9
```
Hasil bagi $2x^2 - 3x - 2$, sisa $9$.

**M2.** Bagi $3x^3 - 2x^2 + x - 4$ oleh $3x - 2$.
*Pembahasan.* $k=\tfrac23$, $a=3$. Horner koef $3,-2,1,-4$:
```
 2/3 │ 3    -2     1     -4
     │       2     0    2/3
     │ 3     0     1  | -10/3
```
Hasil bagi mentah $3x^2 + 0x + 1$; bagi dengan $3$: $H(x)=x^2+\tfrac13$. Sisa $-\tfrac{10}{3}$.

**M3.** Bagi $x^3 + 2x^2 - x + 4$ oleh $x^2 - 1$ (bersusun).
*Pembahasan.*
- $x^3 \div x^2 = x$. Kalikan $x(x^2-1)=x^3-x$. Kurangkan: $(x^3+2x^2-x+4)-(x^3-x)=2x^2+0x+4$ (suku $-x$ dan $-(-x)$ saling meniadakan).
- $2x^2 \div x^2 = 2$. Kalikan $2(x^2-1)=2x^2-2$. Kurangkan: $(2x^2+0x+4)-(2x^2-2)=0x+6$.
- Derajat $6$ (yaitu 0) $<$ derajat pembagi (2) → berhenti.

Hasil: $H(x)=x+2$, sisa $S=6$. Cek: $(x^2-1)(x+2)+6 = x^3+2x^2-x-2+6 = x^3+2x^2-x+4$ ✔.

### 🧠 HOTS

**H1.** Jika $x^3 + px^2 + qx + 6$ habis dibagi $(x-1)$ dan $(x-2)$, tentukan $p,q$.
*Pembahasan.* "Habis dibagi" → sisa $0$ → $f(1)=0$ dan $f(2)=0$.
$f(1)=1+p+q+6=0 \Rightarrow p+q=-7$.
$f(2)=8+4p+2q+6=0 \Rightarrow 4p+2q=-14 \Rightarrow 2p+q=-7$.
Kurangkan: $p=0$, lalu $q=-7$. Jadi $p=0,\ q=-7$.

**H2.** Tentukan sisa jika $x^{100} - 1$ dibagi $x - 1$, dan jika dibagi $x + 1$.
*Pembahasan.* Sisa $=f(1)=1-1=0$ (dibagi $x-1$). Sisa $=f(-1)=(-1)^{100}-1=1-1=0$ (dibagi $x+1$). Keduanya $0$ → $x^{100}-1$ habis dibagi $(x-1)$ dan $(x+1)$.

**H3.** Soal TKA #6 (versi cepat). $f(x)=x^4+ax^3+bx^2+x-6$ dibagi $x^2+x+1$ bersisa $5x-1$. Tanpa pembagian penuh, tentukan $a+b$ hanya dari **dua persamaan sisa**.
*Pembahasan.* Sisa hasil pembagian $= (2-b)x + (a-b-6)$ (diturunkan di bagian 5). Samakan $=5x-1$: $2-b=5\Rightarrow b=-3$; $a-b-6=-1\Rightarrow a=2$. $a+b=-1$.

---

## ⚠️ Kesalahan yang Sering Dilakukan Siswa

1. **Lupa menuliskan koefisien nol** untuk suku hilang → seluruh Horner meleset.
2. **Pada pembagi $(ax-b)$: membagi sisa dengan $a$** (SALAH). Hanya hasil bagi yang dibagi $a$.
3. **Salah tanda $k$.** Pembagi $(x+3)$ berarti $k=-3$, bukan $+3$.
4. **Menghentikan pembagian terlalu dini/lambat.** Berhenti saat derajat sisa $<$ derajat pembagi.
5. **Pada pengurangan bersusun, lupa membalik tanda** seluruh baris pengurang.
6. **Menganggap derajat hasil bagi salah.** Pembagi derajat 1 → hasil bagi turun 1 derajat; pembagi derajat 2 → turun 2.

---

## ⚡ Tips Cepat

- Pembagi $(x-k)$? **Selalu Horner.** Angka terakhir $=f(k)$ → cek instan.
- Tulis **semua** koefisien termasuk nol, selalu.
- Kuadrat yang bisa difaktorkan → **Horner dua kali** lebih cepat dari bersusun.
- Apabila hanya **sisa** yang diminta, Bab 04 menyediakan cara yang lebih singkat.
- Cek hasil dengan $P\cdot H + S = f$ atau substitusi.

---

## ✅ Ringkasan Sub Materi

- **Algoritma:** $f = P\cdot H + S$, derajat $S <$ derajat $P$.
- **Bersusun:** universal, untuk pembagi apa pun.
- **Horner $(x-k)$:** turun–kali–jumlah; angka terakhir $= f(k) =$ sisa.
- **Horner $(ax-b)$:** pakai $k=\tfrac{b}{a}$; **hasil bagi dibagi $a$**, sisa tetap.
- **Horner-Kino (kuadrat):** sisa berbentuk $rx+s$; atau pakai bersusun.
- Pilih metode sesuai bentuk pembagi & apa yang ditanya.

---

## 📝 Latihan Bertingkat

<!-- COMPONENT: Quiz -->

### 🟢 Set A — 10 Soal Mudah (tentukan hasil bagi & sisa, kecuali disebut lain)
1. $x^2 + 3x + 2$ ÷ $(x+1)$
2. $x^2 - 5x + 6$ ÷ $(x-2)$
3. Sisa $x^2 + 1$ ÷ $(x-1)$
4. $x^3 - 1$ ÷ $(x-1)$
5. Sisa $x^3$ ÷ $(x-2)$
6. $2x^2 + 7x + 3$ ÷ $(x+3)$
7. $x^2 - 9$ ÷ $(x+3)$
8. Sisa $x^4 - 16$ ÷ $(x-2)$
9. $x^3 + x^2 - x - 1$ ÷ $(x+1)$
10. Nilai $k$ pada Horner jika pembagi $(x-5)$.

```json
{
  "set_id":"03-set-A-mudah","level":"mudah",
  "items":[
    {"id":"A1","type":"short","question":"$x^2+3x+2 \\div (x+1)$","answer":"H=x+2, S=0","explanation":"k=-1 Horner: 1,2 | 0."},
    {"id":"A2","type":"short","question":"$x^2-5x+6 \\div (x-2)$","answer":"H=x-3, S=0","explanation":"k=2: 1,-3 | 0."},
    {"id":"A3","type":"short","question":"Sisa $x^2+1 \\div (x-1)$","answer":"2","explanation":"f(1)=2."},
    {"id":"A4","type":"short","question":"$x^3-1 \\div (x-1)$","answer":"H=x^2+x+1, S=0","explanation":"Koef 1,0,0,-1."},
    {"id":"A5","type":"short","question":"Sisa $x^3 \\div (x-2)$","answer":"8","explanation":"f(2)=8."},
    {"id":"A6","type":"short","question":"$2x^2+7x+3 \\div (x+3)$","answer":"H=2x+1, S=0","explanation":"k=-3: 2,1 | 0."},
    {"id":"A7","type":"short","question":"$x^2-9 \\div (x+3)$","answer":"H=x-3, S=0","explanation":"Selisih kuadrat."},
    {"id":"A8","type":"short","question":"Sisa $x^4-16 \\div (x-2)$","answer":"0","explanation":"f(2)=16-16=0."},
    {"id":"A9","type":"short","question":"$x^3+x^2-x-1 \\div (x+1)$","answer":"H=x^2-1, S=0","explanation":"k=-1: 1,0,-1 | 0."},
    {"id":"A10","type":"short","question":"k pada Horner pembagi (x-5)","answer":"5","explanation":"(x-k) → k=5."}
  ]
}
```
<details><summary><strong>Pembahasan Set A</strong></summary>

1. $H=x+2,\ S=0$. 2. $H=x-3,\ S=0$. 3. $f(1)=2$. 4. $H=x^2+x+1,\ S=0$. 5. $f(2)=8$. 6. $H=2x+1,\ S=0$. 7. $H=x-3,\ S=0$. 8. $f(2)=0$. 9. $H=x^2-1,\ S=0$. 10. $k=5$.
</details>

### 🟡 Set B — 10 Soal Sedang
1. $2x^3 - 3x^2 + 4x - 5$ ÷ $(x-2)$
2. $x^3 + 4x^2 - x + 6$ ÷ $(x+1)$
3. $3x^3 + 2x^2 - x + 1$ ÷ $(3x-1)$
4. Sisa $2x^4 - x^2 + 3$ ÷ $(x-1)$
5. $x^4 - 2x^3 + x - 1$ ÷ $(x-2)$
6. $6x^2 - x - 2$ ÷ $(2x+1)$
7. $x^3 - 6x^2 + 11x - 6$ ÷ $(x-1)$
8. Sisa $x^5 + 1$ ÷ $(x+1)$
9. $x^4 - 1$ ÷ $(x^2 - 1)$ (bersusun)
10. $2x^3 + 5x^2 - 3$ ÷ $(x+3)$

```json
{
  "set_id":"03-set-B-sedang","level":"sedang",
  "items":[
    {"id":"B1","type":"short","question":"$2x^3-3x^2+4x-5 \\div (x-2)$","answer":"H=2x^2+x+6, S=7","explanation":"Horner k=2."},
    {"id":"B2","type":"short","question":"$x^3+4x^2-x+6 \\div (x+1)$","answer":"H=x^2+3x-4, S=10","explanation":"k=-1: 1,3,-4 | 10."},
    {"id":"B3","type":"short","question":"$3x^3+2x^2-x+1 \\div (3x-1)$","answer":"H=x^2+x+0, S=1","explanation":"$k=1/3$, hasil mentah 3,3,0|1; bagi 3 → $x^2+x$, $S=1$."},
    {"id":"B4","type":"short","question":"Sisa $2x^4-x^2+3 \\div (x-1)$","answer":"4","explanation":"f(1)=2-1+3=4."},
    {"id":"B5","type":"short","question":"$x^4-2x^3+x-1 \\div (x-2)$","answer":"H=x^3+0x^2+0x+1, S=1","explanation":"k=2: 1,0,0,1 | 1."},
    {"id":"B6","type":"short","question":"$6x^2-x-2 \\div (2x+1)$","answer":"H=3x-2, S=0","explanation":"k=-1/2 mentah 6,-4|0; bagi 2 →3x-2."},
    {"id":"B7","type":"short","question":"$x^3-6x^2+11x-6 \\div (x-1)$","answer":"H=x^2-5x+6, S=0","explanation":"k=1: 1,-5,6 | 0."},
    {"id":"B8","type":"short","question":"Sisa $x^5+1 \\div (x+1)$","answer":"0","explanation":"f(-1)=-1+1=0."},
    {"id":"B9","type":"short","question":"$x^4-1 \\div (x^2-1)$","answer":"H=x^2+1, S=0","explanation":"(x^2-1)(x^2+1)=x^4-1."},
    {"id":"B10","type":"short","question":"$2x^3+5x^2-3 \\div (x+3)$","answer":"H=2x^2-x+3, S=-12","explanation":"koef 2,5,0,-3, k=-3."}
  ]
}
```
<details><summary><strong>Pembahasan Set B</strong></summary>

1. $H=2x^2+x+6,\ S=7$.
2. $k=-1$: $1;\ 4-1=3;\ -1-3=-4;\ 6+4=10$. $H=x^2+3x-4,\ S=10$.
3. $k=\tfrac13$: mentah $3;\ 2+1=3;\ -1+1=0;\ 1+0=1$. Bagi $3$: $H=x^2+x,\ S=1$.
4. $f(1)=2-1+3=4$.
5. Koef $1,-2,0,1,-1$, $k=2$: $1;\ -2+2=0;\ 0+0=0;\ 1+0=1;\ -1+2=1$. $H=x^3+1,\ S=1$.
6. $k=-\tfrac12$: mentah $6;\ -1-3=-4;\ -2+2=0$. Bagi $2$: $H=3x-2,\ S=0$.
7. $k=1$: $1;\ -6+1=-5;\ 11-5=6;\ -6+6=0$. $H=x^2-5x+6,\ S=0$.
8. $f(-1)=-1+1=0$.
9. $(x^2-1)(x^2+1)=x^4-1$ → $H=x^2+1,\ S=0$.
10. Koef $2,5,0,-3$, $k=-3$: $2;\ 5-6=-1;\ 0+3=3;\ -3-9=-12$. $H=2x^2-x+3,\ S=-12$.
</details>

### 🔴 Set C — 10 Soal Sulit
1. $x^4 + 2x^3 - 3x^2 + x + 5$ ÷ $(x^2 + x + 1)$ (Horner-Kino).
2. $2x^4 - 3x^3 + x - 4$ ÷ $(x-1)(x+2)$ (Horner bertingkat).
3. Tentukan $H(x)$ & $S(x)$ dari $x^4 - 1$ ÷ $(x^2 + 1)$.
4. Bagi $x^5 - 2x^3 + x - 1$ oleh $(x-1)$; lalu bagi hasilnya oleh $(x-1)$ lagi.
5. $x^3 + 2x^2 - x + 4$ ÷ $(x^2 - 1)$ (bersusun, hati-hati).
6. Tentukan sisa $x^{10}$ ÷ $(x^2 - 1)$.
7. $6x^3 - 5x^2 + 4x - 1$ ÷ $(2x - 1)$.
8. Bagi $x^4$ oleh $(x^2 + 1)$.
9. Jika $x^3 - 2x^2 + ax + b$ dibagi $(x^2 + 1)$ bersisa $3x - 2$, tentukan $a,b$.
10. Sisa $x^4 + x^3 + x^2 + x + 1$ ÷ $(x^2 + 1)$.

```json
{
  "set_id":"03-set-C-sulit","level":"sulit",
  "items":[
    {"id":"C1","type":"short","question":"$x^4+2x^3-3x^2+x+5 \\div (x^2+x+1)$","answer":"H=x^2+x-5, S=5x+10","explanation":"Horner-Kino b=1,c=1."},
    {"id":"C2","type":"short","question":"$2x^4-3x^3+x-4 \\div (x-1)(x+2)$","answer":"H=2x^2-5x+9, S=-18x+14","explanation":"Horner bertingkat: bagi (x-1) sisa -4, hasilnya bagi (x+2) sisa -18; rekonstruksi S=-18(x-1)-4."},
    {"id":"C3","type":"short","question":"$x^4-1 \\div (x^2+1)$","answer":"H=x^2-1, S=0","explanation":"(x^2+1)(x^2-1)=x^4-1."},
    {"id":"C4","type":"short","question":"$x^5-2x^3+x-1$ dibagi (x-1) dua kali","answer":"sisa pertama -1; hasil bagi lalu dibagi (x-1) sisa 2","explanation":"f(1)=-1; lihat pembahasan."},
    {"id":"C5","type":"short","question":"$x^3+2x^2-x+4 \\div (x^2-1)$","answer":"H=x+2, S=6","explanation":"Sisa: 0x+6."},
    {"id":"C6","type":"short","question":"Sisa $x^{10} \\div (x^2-1)$","answer":"1","explanation":"$x^{10}=(x^2)^5$; pakai $x^2≡1$ → sisa 1."},
    {"id":"C7","type":"short","question":"$6x^3-5x^2+4x-1 \\div (2x-1)$","answer":"H=3x^2-x+3/2, S=1/2","explanation":"k=1/2 mentah 6,-2,3,1/2; hasil bagi dibagi 2."},
    {"id":"C8","type":"short","question":"$x^4 \\div (x^2+1)$","answer":"H=x^2-1, S=1","explanation":"x^4=(x^2+1)(x^2-1)+1."},
    {"id":"C9","type":"short","question":"$x^3-2x^2+ax+b \\div (x^2+1)$ sisa 3x-2","answer":"a=4, b=-4","explanation":"Bagi bersusun → sisa (a-1)x+(b+2); samakan 3x-2 → a=4, b=-4."},
    {"id":"C10","type":"short","question":"Sisa $x^4+x^3+x^2+x+1 \\div (x^2+1)$","answer":"1","explanation":"Ganti $x^2≡-1$: $1 + (-x) + (-1) + x + 1 = 1$."}
  ]
}
```
<details><summary><strong>Pembahasan Set C</strong></summary>

1. Horner-Kino ($b=1,c=1$): $H=x^2+x-5,\ S=5x+10$ (diturunkan penuh di bagian 5).
2. **Horner bertingkat.** Bagi oleh $(x-1)$: koef $2,-3,0,1,-4$, $k=1$ → $2,-1,-1,0\ |\ -4$. Jadi $Q_1=2x^3-x^2-x$, sisa $s_1=-4$. Bagi $Q_1$ oleh $(x+2)$, $k=-2$: $2,-5,9\ |\ -18$. Jadi $H=2x^2-5x+9$, sisa $s_2=-18$. **Rekonstruksi sisa** terhadap $(x-1)(x+2)$: $S(x)=s_2(x-1)+s_1 = -18(x-1)+(-4) = -18x+14$. Maka $H=2x^2-5x+9,\ S=-18x+14$.
3. $x^4-1=(x^2+1)(x^2-1)$ → $H=x^2-1,\ S=0$.
4. $f(1)=1-2+1-1=-1$ (sisa pertama). Koef $1,0,-2,0,1,-1$, $k=1$: $1,1,-1,-1,0\ |\ -1$, jadi $Q_1=x^4+x^3-x^2-x+0$. Bagi lagi $(x-1)$: $1,2,1,0\ |\ 0$ → sisa kedua $0$. *(Jadi $(x-1)^2$ membagi $Q_1\cdot$…; sisa tahap dua $=0$.)*
5. $x^3+2x^2-x+4 \div (x^2-1)$: $x^3\div x^2=x$; $x(x^2-1)=x^3-x$; kurang → $2x^2+0x+4$. Lalu $2x^2\div x^2=2$; $2(x^2-1)=2x^2-2$; kurang → $0x^2+0x+6$. Karena kita bagi dengan derajat 2, sisa boleh $\le$ derajat 1: **$S=6$** (yaitu $0\cdot x+6$), $H=x+2$. *(Ini memperbaiki catatan M3.)*
6. $x^{10}=(x^2)^5$. Karena $x^2 \equiv 1 \pmod{x^2-1}$, maka $x^{10}\equiv 1^5=1$. Sisa $=1$.
7. $k=\tfrac12$: mentah $6;\ -5+3=-2;\ 4-1=3;\ -1+\tfrac32=\tfrac12$. Bagi $2$: $H=3x^2-x+\tfrac32,\ S=\tfrac12$.
8. $x^4=(x^2+1)(x^2-1)+1$ → $H=x^2-1,\ S=1$.
9. Bersusun $x^3-2x^2+ax+b \div (x^2+1)$: $x(x^2+1)=x^3+x$; kurang → $-2x^2+(a-1)x+b$. $-2(x^2+1)=-2x^2-2$; kurang → $(a-1)x+(b+2)$. Samakan $=3x-2$: $a-1=3\Rightarrow a=4$; $b+2=-2\Rightarrow b=-4$.
10. Ganti $x^2\to -1$: $x^4=1,\ x^3=x\cdot x^2=-x,\ x^2=-1$. Maka $x^4+x^3+x^2+x+1 \to 1 + (-x) + (-1) + x + 1 = 1$. Sisa $=1$.
</details>

### 🧠 Set D — 5 Soal HOTS
1. Tentukan $a$ agar $x^3 - 2x^2 + ax - 6$ habis dibagi $(x-3)$.
2. Jika $f(x)$ dibagi $(x-2)$ sisa $3$ dan dibagi $(x-3)$ sisa $5$, tentukan sisa jika dibagi $(x-2)(x-3)$.
3. Buktikan: sisa pembagian $f(x)$ oleh $(x-k)$ selalu berupa konstanta.
4. $x^3 + bx^2 + cx + d$ dibagi $(x^2+1)$ bersisa $x+1$ dan $f(0)=2$. Tentukan $d$, lalu satu hubungan $b,c$.
5. Sisa $x^{2026}$ dibagi $(x^2-1)$.

```json
{
  "set_id":"03-set-D-hots","level":"hots",
  "items":[
    {"id":"D1","type":"short","question":"a agar $x^3-2x^2+ax-6$ habis dibagi (x-3)","answer":"a=-1","explanation":"f(3)=27-18+3a-6=3+3a=0 → a=-1."},
    {"id":"D2","type":"short","question":"Sisa f dibagi (x-2)(x-3), tahu f(2)=3,f(3)=5","answer":"2x-1","explanation":"S=px+q; 2p+q=3, 3p+q=5 → p=2,q=-1."},
    {"id":"D3","type":"proof","question":"Buktikan sisa oleh (x-k) konstanta","answer":"derajat sisa < 1 → derajat 0","explanation":"Pembagi derajat 1 → sisa derajat <1 = konstanta."},
    {"id":"D4","type":"short","question":"$x^3+bx^2+cx+d \\div (x^2+1)$ sisa x+1, f(0)=2","answer":"b=1, c=2, d=2","explanation":"f(0)=d=2; sisa bersusun (c-1)x+(d-b)=x+1 → c=2, b=d-1=1."},
    {"id":"D5","type":"short","question":"Sisa $x^{2026} \\div (x^2-1)$","answer":"1","explanation":"x^{2026}=(x^2)^{1013}≡1."}
  ]
}
```
<details><summary><strong>Pembahasan Set D</strong></summary>

1. Habis dibagi $(x-3)$ → $f(3)=0$: $27 - 18 + 3a - 6 = 0 \Rightarrow 3 + 3a = 0 \Rightarrow a=-1$.
2. Sisa oleh $(x-2)(x-3)$ berderajat $\le1$: $S(x)=px+q$. Dari $f(2)=3$: $2p+q=3$. Dari $f(3)=5$: $3p+q=5$. Kurangkan: $p=2$, lalu $q=-1$. **Sisa $=2x-1$.** *(Teknik ini dijelaskan penuh di Bab 04.)*
3. Pembagi $(x-k)$ berderajat 1. Algoritma pembagian menuntut derajat sisa $<1$, jadi derajat $0$ → **konstanta**. ∎
4. $f(0)=d=2$. Bersusun $x^3+bx^2+cx+d \div(x^2+1)$: $x(x^2+1)=x^3+x$; kurang → $bx^2+(c-1)x+d$; $b(x^2+1)=bx^2+b$; kurang → $(c-1)x+(d-b)$. Samakan $=x+1$: $c-1=1\Rightarrow c=2$; $d-b=1\Rightarrow b=d-1=1$. Jadi $d=2,\ b=1,\ c=2$.
5. $x^{2026}=(x^2)^{1013}\equiv 1^{1013}=1 \pmod{x^2-1}$. Sisa $=1$.
</details>

### 🏆 Set E — 5 Soal Model TKA
1. **(TKA #6)** $f(x)=x^4+ax^3+bx^2+x-6$ dibagi $x^2+x+1$ bersisa $5x-1$. Nilai $a+b$?
2. **(Pilih metode)** Untuk membagi $x^7 - 1$ oleh $(x-1)$, metode apa tercepat & berapa sisanya?
3. **(Analisis)** Diberi $f(x)=2x^3 - kx^2 + 3x - 1$ habis dibagi $(2x-1)$. Tentukan $k$.
4. **(Sisa berderajat 1)** $f(x)$ dibagi $(x+1)$ sisa $2$, dibagi $(x-1)$ sisa $6$. Sisa jika dibagi $(x^2-1)$?
5. **(Kombinasi)** Bagi $x^4 - 5x^2 + 4$ oleh $(x^2-1)$; kaitkan hasilnya dengan pemfaktoran $x^4-5x^2+4$.

```json
{
  "set_id":"03-set-E-tka","level":"tka",
  "items":[
    {"id":"E1","type":"mc","source":"TKA-2024-no6","question":"a+b jika sisa 5x-1","options":["11","5","-1","-5","-7"],"answer":"-1","explanation":"b=-3,a=2 → a+b=-1."},
    {"id":"E2","type":"short","question":"$x^7-1 \\div (x-1)$ metode & sisa","answer":"Horner; sisa 0","explanation":"f(1)=0."},
    {"id":"E3","type":"short","question":"k agar $2x^3-kx^2+3x-1$ habis dibagi (2x-1)","answer":"k=3","explanation":"f(1/2)=1/4 - k/4 + 3/2 - 1 = 3/4 - k/4 = 0 → k=3."},
    {"id":"E4","type":"short","question":"Sisa $f \\div (x^2-1)$; f(-1)=2,f(1)=6","answer":"2x+4","explanation":"S=px+q; -p+q=2, p+q=6 → p=2,q=4."},
    {"id":"E5","type":"short","question":"$x^4-5x^2+4 \\div (x^2-1)$","answer":"$H=x^2-4$, S=0; faktor $(x^2-1)(x^2-4)$","explanation":"x^4-5x^2+4=(x^2-1)(x^2-4)."}
  ]
}
```
<details><summary><strong>Pembahasan Set E</strong></summary>

**E1.** Sisa pembagian $=(2-b)x+(a-b-6)=5x-1 \Rightarrow b=-3,\ a=2$. $a+b=\mathbf{-1}$ (pilihan C).

**E2.** Pembagi linear $(x-1)$ → **Horner** tercepat. Sisa $=f(1)=1-1=0$. (Bahkan $x^7-1=(x-1)(x^6+x^5+\dots+1)$.)

**E3.** Habis dibagi $(2x-1)$ → $f(\tfrac12)=0$: $2(\tfrac18) - k(\tfrac14) + 3(\tfrac12) - 1 = \tfrac14 - \tfrac{k}{4} + \tfrac32 - 1 = \tfrac34 - \tfrac{k}{4} = 0 \Rightarrow k=3$.

**E4.** $S(x)=px+q$. $f(-1)=-p+q=2$; $f(1)=p+q=6$. Jumlahkan: $2q=8\Rightarrow q=4$; $p=2$. **Sisa $=2x+4$.**
**E5.** $x^4-5x^2+4=(x^2-1)(x^2-4)$ → $H=x^2-4,\ S=0$. Lengkapnya $=(x-1)(x+1)(x-2)(x+2)$.
</details>

---

## 🏆 Tantangan Akhir Bab 3 — Uji Kompetensi

<!-- COMPONENT: Tantangan Akhir Bab
     DEVELOPER: render sebagai sesi soal berwaktu dengan rekap capaian (bintang, poin, waktu terbaik).
     Framing tetap sebagai asesmen/umpan balik belajar, bukan permainan peran. -->
> Kerjakan rangkaian soal berikut dalam mode berwaktu untuk menguji penguasaan Anda atas pembagian polinomial. Perolehan bintang dan poin merupakan umpan balik atas ketepatan serta kecepatan; sistem menyimpan capaian terbaik Anda sebagai catatan kemajuan belajar.

```json
{ "type":"challenge", "id":"03-tantangan", "competency":"K3",
  "title":"Tantangan Akhir Bab 3: Pembagian Polinomial",
  "mode":"timed", "time_limit_sec":210, "shuffle":true,
  "pool":["03-act-algoritma","03-act-bersusun","03-act-horner","03-act-axb","03-act-kino","03-act-metode","03-set-A-mudah"],
  "scoring":{"per_correct":10,"time_bonus":true},
  "stars":{"3":90,"2":70,"1":50},
  "reward":{"xp":80,"badge":"pembagi-ulung"},
  "record":{"track_best_time":true,"track_best_score":true} }
```

---

## 📝 Refleksi

<!-- COMPONENT: Reflection -->
1. Menurut Anda, kapan Horner **lebih unggul** daripada bersusun, dan kapan sebaliknya?
2. "Angka terakhir Horner $= f(k)$." Apa manfaat fakta ini untuk memeriksa jawaban dengan cepat?
3. Bagian mana dari Horner-Kino yang masih terasa sulit? Catat agar dapat Anda tinjau kembali.

---

## ➡️ Persiapan Menuju Sub Materi Berikutnya

Pada bab ini, kita telah menguasai tiga metode pembagian, termasuk menyelesaikan soal TKA #6. Kita juga telah beberapa kali mengamati fenomena penting: **sisa pembagian oleh $(x-k)$ selalu sama dengan $f(k)$**.

Pada **Bab 04 — Teorema Sisa & Teorema Faktor**, fenomena tersebut akan **dibuktikan** dan dijadikan alat utama:
- **Teorema Sisa:** sisa $f(x) \div (x-k)$ adalah $f(k)$—mencari sisa **tanpa membagi**.
- **Teorema Faktor:** apabila $f(k)=0$, maka $(x-k)$ merupakan faktor—pintu menuju **faktorisasi dan akar** (yang menyelesaikan soal no. 5).

Bekal dari bab ini: Horner (untuk faktorisasi cepat) dan pemahaman tentang sisa berbentuk $rx+s$.

> Lanjutkan ke **Bab 04**.

<!-- COMPONENT: Summary -->
<!-- Progress bar: 4/8. -->
