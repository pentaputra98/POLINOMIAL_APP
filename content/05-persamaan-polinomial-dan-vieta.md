---
id: "05-persamaan-polinomial-dan-vieta"
slug: "persamaan-polinomial-dan-vieta"
title: "Persamaan Polinomial dan Teorema Vieta"
order: 5
duration_min: 100
level: "Kelas XI - Kurikulum Merdeka"
track: "TKA Matematika Lanjut"
prerequisites:
  - "04-teorema-sisa-dan-faktor"
competencies:
  - "K5: Menyelesaikan persamaan polinomial & Teorema Vieta"
learning_objectives:
  - "Menyelesaikan persamaan polinomial melalui faktorisasi"
  - "Menggunakan Teorema Vieta menghubungkan akar & koefisien"
  - "Menyusun persamaan polinomial dari akar-akarnya"
  - "Menyusun persamaan baru dari syarat/transformasi akar"
tags: ["persamaan-polinomial", "vieta", "akar", "jumlah-akar", "hasil-kali-akar", "menyusun-persamaan"]
components:
  - "Concept Map Mini"
  - "Vieta Explorer"
  - "Root Transform Interactive"
  - "Quiz"
  - "Reflection"
  - "Activity TrueFalse"
  - "Activity Cloze"
  - "Activity Matching"
  - "Activity ErrorHunt"
  - "Tantangan Akhir Bab"
activities:
  - "05-act-persamaan"
  - "05-act-faktor"
  - "05-act-vieta"
  - "05-act-menyusun"
  - "05-act-transform"
  - "05-act-trap"
challenge: "05-tantangan"
xp_available: 205
katex: true
---

# Bab 05 — Persamaan Polinomial dan Teorema Vieta

<!-- COMPONENT: Concept Map Mini
     DEVELOPER: WAJIB dirender sebagai kartu/diagram interaktif bergaya Soft Neo Brutalism,
     BUKAN menyalin blok teks ASCII apa adanya. Simpul bertahap:
     Persamaan -> Akar via faktorisasi -> Teorema Vieta -> Susun dari akar -> Susun dari syarat,
     dapat diklik menuju sub-bagian terkait. Blok teks di bawah HANYA rujukan struktur. -->

## 🎯 Tujuan Pembelajaran

Setelah mempelajari bab ini, peserta didik diharapkan mampu:

1. Menyelesaikan **persamaan polinomial** dengan faktorisasi.
2. Menggunakan **Teorema Vieta** untuk mengaitkan **akar** dan **koefisien** tanpa mencari akar satu per satu.
3. **Menyusun** persamaan polinomial jika akar-akarnya diketahui.
4. Menyusun persamaan **baru** dari **transformasi akar** (mis. tiap akar ditambah/dikali/dibalik).

## 🧩 Kompetensi yang Dipelajari
- **K5 — Menyelesaikan persamaan polinomial & Teorema Vieta.**

## 📦 Prasyarat
- Bab 04 (akar, faktor, faktorisasi). Vieta adalah "sisi lain koin" dari Teorema Faktor.

## ⏱️ Estimasi Waktu Belajar
**±100 menit.**

## 🗺️ Peta Konsep Kecil

<!-- COMPONENT: Concept Map Mini (lanjutan)
     DEVELOPER: tampilkan sebagai alur kartu interaktif, bukan teks ASCII mentah. -->

```
PERSAMAAN & VIETA
├─ 1. Persamaan polinomial     f(x)=0
├─ 2. Akar via faktorisasi     kupas dengan Horner (Bab 04)
├─ 3. Teorema Vieta            jumlah & hasil kali akar dari koefisien
├─ 4. Susun dari akar          f(x)=a(x-r1)(x-r2)...
└─ 5. Susun dari syarat        transformasi akar → substitusi
```

## 🔥 Motivasi

Pada Bab 04, akar dicari melalui proses bertahap (menebak, menguji, membagi, mengulang). Sekarang, tinjau pertanyaan berikut:

> "Berapa jumlah akar-akar persamaan ini?" atau "Berapa hasil kali akarnya?"

Ternyata pertanyaan tersebut dapat dijawab **hanya dengan melihat koefisien**—**tanpa mencari akar sama sekali**. Itulah kekuatan **Teorema Vieta**: teorema ini mengubah pertanyaan yang tampak sulit tentang akar menjadi perhitungan sederhana pada koefisien. Pada akhir bab, kita juga akan menyelesaikan **soal saham #8** dengan cara yang jauh lebih ringkas daripada substitusi coba-coba pada Bab 02.

---

## 1️⃣ Persamaan Polinomial

> **Persamaan polinomial** adalah persamaan berbentuk $f(x) = 0$, dengan $f(x)$ sebuah polinomial.

Contoh: $x^3 - 6x^2 + 11x - 6 = 0$. **Menyelesaikan** persamaan berarti mencari semua nilai $x$ (akar) yang membuatnya benar.

**Fakta pengunci (dari Bab 04):**
- Persamaan polinomial derajat $n$ punya **paling banyak $n$ akar**.
- Jika koefisien real, **akar kompleks selalu berpasangan** (kalau $a+bi$ akar, maka $a-bi$ juga akar).

---

<!-- COMPONENT: Activity TrueFalse -->
> **Latihan Interaktif — Benar/Salah.** Tentukan nilai kebenaran tiap pernyataan berikut.

```json
{ "type":"activity", "widget":"truefalse", "id":"05-act-persamaan", "competency":"K5",
  "prompt":"Benar atau salah?",
  "statements":[
    {"s":"Persamaan polinomial berderajat n memiliki paling banyak n akar.","a":true,"why":"Tiap akar menyumbang satu faktor linear."},
    {"s":"Jika koefisien real dan $a+bi$ adalah akar, maka $a-bi$ juga akar.","a":true,"why":"Akar kompleks selalu berpasangan."},
    {"s":"Setiap persamaan berderajat 3 pasti memiliki tiga akar real yang berbeda.","a":false,"why":"Sebagian akar dapat kembar atau kompleks."},
    {"s":"Menyelesaikan $f(x)=0$ berarti mencari nilai x yang membuat f bernilai nol.","a":true,"why":"Itu definisi akar."}
  ],
  "reward":{"xp":20} }
```

## 2️⃣ Menentukan Akar via Faktorisasi

Metodenya persis Bab 04: **faktorkan**, lalu setiap faktor linear $(x-r)$ memberi akar $x=r$.

**Contoh.** Selesaikan $x^3 - 6x^2 + 11x - 6 = 0$.
Faktornya $(x-1)(x-2)(x-3)=0$ (dari Bab 04). Maka akar-akarnya $x=1,\ 2,\ 3$.

**Contoh (dengan faktor kuadrat tak terfaktorkan).** Selesaikan $x^3 - 1 = 0$.
$x^3-1=(x-1)(x^2+x+1)=0$. Faktor $(x-1)$ beri $x=1$. Faktor $x^2+x+1=0$ diselesaikan dengan rumus $abc$:
$$x=\frac{-1\pm\sqrt{1-4}}{2}=\frac{-1\pm\sqrt{-3}}{2}=\frac{-1\pm i\sqrt3}{2}$$
Jadi satu akar real ($x=1$) dan dua akar kompleks.

> 💡 Apabila sisa faktor berbentuk kuadrat, selesaikan dengan pemfaktoran biasa atau rumus $abc$: $x=\dfrac{-b\pm\sqrt{b^2-4ac}}{2a}$.

---

<!-- COMPONENT: Activity Cloze -->
> **Latihan Interaktif — Melengkapi.** Selesaikan persamaan berikut melalui faktorisasi.

```json
{ "type":"activity", "widget":"cloze", "id":"05-act-faktor", "competency":"K5",
  "prompt":"Selesaikan $x^3-4x=0$",
  "template":"Faktorkan: $x(x-2)(x+2)=0$. Urut dari terkecil, akar-akarnya adalah {{0}}, {{1}}, {{2}}.",
  "answers":["-2","0","2"],
  "reward":{"xp":20} }
```

## 3️⃣ Teorema Vieta — Jantung Bab Ini

Vieta menghubungkan **akar** dengan **koefisien** secara langsung. Konsep ini dibangun dari materi yang telah dipelajari.

### Dari mana rumus Vieta berasal? (Agar tidak sekadar hafal)

Ambil kuadrat monik dengan akar $p,q$. Dari Teorema Faktor:
$$x^2+bx+c = (x-p)(x-q) = x^2 - (p+q)x + pq$$
Samakan koefisien (Bab 02!):
$$p+q = -b, \qquad pq = c$$

**Itulah Vieta.** Jumlah akar $=-b$, hasil kali $=c$ (untuk kuadrat monik). Untuk yang tak monik $ax^2+bx+c$, bagi dulu dengan $a$.

### Rumus Vieta lengkap

**Kuadrat** $ax^2+bx+c=0$, akar $x_1,x_2$:
$$x_1+x_2 = -\frac{b}{a}, \qquad x_1 x_2 = \frac{c}{a}$$

**Kubik** $ax^3+bx^2+cx+d=0$, akar $p,q,r$:
$$p+q+r = -\frac{b}{a}$$
$$pq+qr+rp = \frac{c}{a}$$
$$pqr = -\frac{d}{a}$$

**Kuartik** $ax^4+bx^3+cx^2+dx+e=0$, akar $p,q,r,s$:
$$\textstyle\sum p = -\frac{b}{a},\quad \sum pq = \frac{c}{a},\quad \sum pqr = -\frac{d}{a},\quad pqrs = \frac{e}{a}$$

<!-- COMPONENT: Vieta Explorer -->
<!-- Slider akar p,q,r; app tampilkan koefisien hasil (x-p)(x-q)(x-r) dan verifikasi rumus Vieta secara live. -->

> 💡 **Pola tanda mudah diingat:** tanda berselang-seling mulai dari $-$. Jumlah tunggal $=-\frac{b}{a}$; jumlah pasangan $=+\frac{c}{a}$; jumlah triple $=-\frac{d}{a}$; dst. "Genap plus, ganjil minus" mengikuti banyaknya akar yang dikalikan.

### Contoh penggunaan langsung

**Contoh.** Tanpa mencari akar, tentukan jumlah dan hasil kali akar $2x^2 - 7x + 3 = 0$.
$$x_1+x_2 = -\frac{-7}{2} = \frac{7}{2}, \qquad x_1 x_2 = \frac{3}{2}$$

**Contoh (kubik).** Akar-akar $x^3 - 4x^2 + 5x - 2 = 0$ adalah $p,q,r$. Tentukan $p+q+r$, $pq+qr+rp$, $pqr$.
$$p+q+r = 4, \qquad pq+qr+rp = 5, \qquad pqr = 2$$
(Diperoleh langsung dari koefisien, tanpa perlu mengetahui akarnya.)

### Ekspresi turunan yang sering ditanya

Soal TKA sering menanyakan ekspresi seperti $x_1^2+x_2^2$ atau $\frac{1}{x_1}+\frac{1}{x_2}$. Ubahlah ke dalam bentuk jumlah dan hasil kali akar:

$$x_1^2 + x_2^2 = (x_1+x_2)^2 - 2x_1x_2$$
$$\frac{1}{x_1}+\frac{1}{x_2} = \frac{x_1+x_2}{x_1x_2}$$
$$x_1^3+x_2^3 = (x_1+x_2)^3 - 3x_1x_2(x_1+x_2)$$
$$(x_1-x_2)^2 = (x_1+x_2)^2 - 4x_1x_2$$

> ⚡ **Strategi utama:** apabila soal menanyakan ekspresi simetris akar, **jangan mencari akarnya**. Nyatakan ekspresi tersebut dalam jumlah dan hasil kali, lalu substitusikan nilai dari Vieta.

---

<!-- COMPONENT: Activity Matching -->
> **Latihan Interaktif — Menjodohkan.** Pasangkan tiap besaran Vieta dengan nilainya.

```json
{ "type":"activity", "widget":"matching", "id":"05-act-vieta", "competency":"K5",
  "prompt":"Untuk $x^3-4x^2+5x-2=0$, jodohkan besaran Vieta dengan nilainya",
  "pairs":[
    ["Jumlah akar $(p+q+r)$","4"],
    ["Jumlah hasil kali pasangan $(pq+qr+rp)$","5"],
    ["Hasil kali akar (pqr)","2"],
    ["Jumlah akar $2x^2-7x+3=0$","7/2"]
  ],
  "reward":{"xp":20} }
```

## 4️⃣ Menyusun Persamaan dari Akar-Akarnya

Ini kebalikan Vieta: diberi akar, cari persamaannya.

**Cara 1 (faktor).** Apabila akar-akarnya $r_1,\dots,r_n$, maka
$$f(x) = a(x-r_1)(x-r_2)\cdots(x-r_n)$$
Pilih $a=1$ untuk persamaan monik.

**Cara 2 (Vieta).** Susun langsung dari jumlah & hasil kali. Untuk kuadrat berakar $x_1,x_2$:
$$x^2 - (x_1+x_2)x + x_1x_2 = 0$$

**Contoh.** Susun persamaan kuadrat berakar $3$ dan $-5$.
Jumlah $=3+(-5)=-2$; hasil kali $=3\cdot(-5)=-15$. Persamaan:
$$x^2 - (-2)x + (-15) = 0 \;\Rightarrow\; x^2 + 2x - 15 = 0$$

**Contoh (kubik).** Susun persamaan kubik monik berakar $1, 2, -3$.
$$f(x)=(x-1)(x-2)(x+3)$$
$(x-1)(x-2)=x^2-3x+2$; kali $(x+3)$: $x^3+3x^2-3x^2-9x+2x+6 = x^3 - 7x + 6$. Persamaan: $x^3 - 7x + 6 = 0$.

---

<!-- COMPONENT: Activity Cloze -->
> **Latihan Interaktif — Melengkapi.** Susun persamaan kuadrat dari akar yang diketahui.

```json
{ "type":"activity", "widget":"cloze", "id":"05-act-menyusun", "competency":"K5",
  "prompt":"Susun persamaan berakar 3 dan $-5$",
  "template":"Jumlah akar = {{0}}, hasil kali akar = {{1}}. Maka persamaannya adalah $x^2+2x-15=0$.",
  "answers":["-2","-15"],
  "reward":{"xp":20} }
```

## 5️⃣ Menyusun Persamaan dari Syarat Tertentu (Transformasi Akar)

Kasus yang sering muncul pada TKA: *"Persamaan $A$ berakar $p,q,r$. Susun persamaan yang berakar $(p+2),(q+2),(r+2)$"*—tanpa mencari $p,q,r$ terlebih dahulu.

**Kunci: substitusi terbalik.** Apabila akar baru $y = p+2$, maka $p = y - 2$. Karena $p$ akar persamaan lama, substitusikan $x = y-2$ ke persamaan lama, lalu ganti $y\to x$.

<!-- COMPONENT: Root Transform Interactive -->
<!-- Pilih transformasi (geser, skala, balik) -> app tunjukkan substitusi yang tepat & persamaan hasil. -->

### Tabel transformasi cepat

| Akar baru | Substitusi ke persamaan lama |
|-----------|------------------------------|
| tiap akar $+k$ | ganti $x \to x-k$ |
| tiap akar $-k$ | ganti $x \to x+k$ |
| tiap akar $\times k$ | ganti $x \to \dfrac{x}{k}$ |
| kebalikan ($\tfrac1{\text{akar}}$) | ganti $x \to \dfrac{1}{x}$ lalu kalikan agar polinomial |
| tiap akar $\times(-1)$ | ganti $x \to -x$ |

**Contoh.** Persamaan $x^2 - 5x + 6 = 0$ berakar $2,3$. Susun persamaan berakar $2$ lebihnya (yaitu $4,5$).
Substitusi $x \to x-2$:
$$(x-2)^2 - 5(x-2) + 6 = x^2 - 4x + 4 - 5x + 10 + 6 = x^2 - 9x + 20 = 0$$
Cek dengan Vieta: akar $4,5$ → jumlah $9$, hasil kali $20$ → $x^2-9x+20=0$ ✔.

**Contoh (kebalikan akar).** $x^2 - 5x + 6=0$ berakar $2,3$. Susun persamaan berakar $\tfrac12,\tfrac13$.
Ganti $x\to \tfrac1x$: $\tfrac{1}{x^2} - \tfrac{5}{x} + 6 = 0$. Kalikan $x^2$: $1 - 5x + 6x^2 = 0 \Rightarrow 6x^2 - 5x + 1 = 0$.
Cek: akar $\tfrac12,\tfrac13$ → jumlah $\tfrac56$, hasil kali $\tfrac16$; dari $6x^2-5x+1$: jumlah $\tfrac56$, hasil kali $\tfrac16$ ✔.

> ⚡ **Pola pintas kebalikan akar:** membalik akar setara dengan **membalik urutan koefisien**. Dari $6x^2-5x+1$ diperoleh $x^2-5x+6$, dan sebaliknya.

<!-- COMPONENT: Activity Matching -->
> **Latihan Interaktif — Menjodohkan.** Pasangkan tiap transformasi akar dengan substitusi yang tepat.

```json
{ "type":"activity", "widget":"matching", "id":"05-act-transform", "competency":"K5",
  "prompt":"Jodohkan transformasi akar dengan substitusinya",
  "pairs":[
    ["Tiap akar bertambah k","ganti x menjadi $x-k$"],
    ["Tiap akar dikali k","ganti x menjadi $x/k$"],
    ["Kebalikan akar","balik urutan koefisien"],
    ["Tiap akar dikali $-1$","ganti x menjadi $-x$"]
  ],
  "reward":{"xp":20} }
```

### 🎯 Menyelesaikan Soal TKA #8 dengan Vieta (Cara Elegan)

> **Soal.** $f(x)=x^3-70x^2-600x+74{.}000$, modal $2000$ juta. Unit mana yang **mungkin** dijual: $30, 40, 60$?

Pada Bab 02, tiap nilai disubstitusikan satu per satu. Kali ini kita gunakan **Vieta**. Penjualan $x$ unit sesuai dengan modal apabila $f(x)=2000$, yaitu:
$$x^3 - 70x^2 - 600x + 74{.}000 = 2000 \;\Rightarrow\; x^3 - 70x^2 - 600x + 72000 = 0$$

Sebut akar-akarnya $p,q,r$. Dari Vieta (monik, $a=1$):
$$p+q+r = 70, \qquad pq+qr+rp = -600, \qquad pqr = -72000$$

Kita menduga terdapat akar bilangan bulat sederhana. Tinjau pasangan $40$ dan $60$: jumlah keduanya $100$, sehingga akar ketiga $= 70 - 100 = -30$. **Verifikasi melalui hasil kali:**
$$pqr = 40 \cdot 60 \cdot (-30) = -72000$$ ✔
Nilai tersebut sesuai. Jadi, akar-akarnya adalah $40, 60, -30$.

Karena banyak unit **tidak boleh negatif**, $x=-30$ ditolak. Maka nilai $x$ yang mungkin: **$40$ dan $60$**.

| Pernyataan | Mungkin? | Alasan |
|-----------|:--------:|--------|
| 30 unit | ❌ Tidak | $30$ bukan akar (bukan solusi $f(x)=2000$) |
| 40 unit | ✅ Ya | akar valid, positif |
| 60 unit | ✅ Ya | akar valid, positif |

> 💡 **Mengapa Vieta lebih unggul di sini?** Substitusi hanya menjawab "ya/tidak" untuk angka yang *sudah* ditanyakan. Vieta memberikan **seluruh himpunan akar** sekaligus ($40,60,-30$)—termasuk akar yang tidak bermakna dalam konteks—sehingga gambaran persoalannya menjadi utuh.

---

<!-- COMPONENT: Activity ErrorHunt -->
> **Latihan Interaktif — Menemukan Kesalahan.** Cermati pengerjaan berikut; terdapat satu langkah yang keliru.

```json
{ "type":"activity", "widget":"error-hunt", "id":"05-act-trap", "competency":"K5",
  "prompt":"Persamaan $x^2-5x+6=0$ berakar 2 dan 3. Susun persamaan yang akarnya 2 lebih besar (yaitu 4 dan 5). Manakah langkah yang salah?",
  "steps":[
    "Akar baru = akar lama + 2, sehingga substitusinya x menjadi $x-2$.",
    "Substitusikan: $(x-2)^2 - 5(x-2) + 6$.",
    "Jabarkan dan sederhanakan: $x^2 - 9x + 20 = 0$.",
    "Karena akar bertambah 2, substitusi yang benar adalah x menjadi $x+2$."
  ],
  "wrong_index":3,
  "why":"Untuk akar yang bertambah k, substitusinya adalah x menjadi $x-k$ (bukan x+k). Langkah 4 bertentangan dengan langkah 1 yang sudah benar.",
  "reward":{"xp":25} }
```

## 📘 Contoh Bertingkat

### 🟢 Sederhana

**S1.** Jumlah & hasil kali akar $x^2-7x+10=0$.
*Pembahasan.* Jumlah $=7$, hasil kali $=10$. (Cek: akar $2,5$.)

**S2.** Susun persamaan kuadrat berakar $1$ dan $4$.
*Pembahasan.* Jumlah $5$, hasil kali $4$ → $x^2-5x+4=0$.

**S3.** Selesaikan $x^3-4x=0$.
*Pembahasan.* $x(x^2-4)=x(x-2)(x+2)=0$ → $x=0,2,-2$.

### 🟡 Sedang

**M1.** Akar $2x^2-3x-2=0$ adalah $x_1,x_2$. Hitung $x_1+x_2$ dan $x_1x_2$.
*Pembahasan.* $x_1+x_2=\tfrac32$, $x_1x_2=-1$.

**M2.** Akar $x^2-6x+4=0$ adalah $p,q$. Hitung $p^2+q^2$.
*Pembahasan.* $p+q=6$, $pq=4$. $p^2+q^2=(p+q)^2-2pq=36-8=28$.

**M3.** Kubik $x^3-2x^2-5x+6=0$ berakar $p,q,r$. Hitung $p+q+r$ dan $pqr$.
*Pembahasan.* $p+q+r=2$, $pqr=-6$. (Faktornya $(x-1)(x+2)(x-3)$.)

### 🧠 HOTS

**H1.** Akar $x^2-5x+2=0$ adalah $\alpha,\beta$. Susun persamaan kuadrat berakar $\alpha^2,\beta^2$.
*Pembahasan.* $\alpha+\beta=5$, $\alpha\beta=2$. Jumlah akar baru $=\alpha^2+\beta^2=(5)^2-2(2)=21$. Hasil kali baru $=\alpha^2\beta^2=(\alpha\beta)^2=4$. Persamaan: $x^2 - 21x + 4 = 0$.

**H2.** Kubik $x^3+px^2+qx+r=0$ berakar $1,2,4$. Tentukan $p,q,r$.
*Pembahasan.* Vieta: $p=-(1+2+4)=-7$; $q=(1\cdot2+2\cdot4+1\cdot4)=2+8+4=14$; $r=-(1\cdot2\cdot4)=-8$. Jadi $x^3-7x^2+14x-8=0$.

**H3.** Jika satu akar $x^3-6x^2+11x-6=0$ adalah $1$, gunakan Vieta untuk mencari dua akar lain **tanpa** membagi.
*Pembahasan.* Misal akar $1,q,r$. Vieta: $1+q+r=6\Rightarrow q+r=5$; $1\cdot q r=6\Rightarrow qr=6$? Cek: $pqr=6$ dan $p=1$ → $qr=6$. Jadi $q,r$ akar $t^2-5t+6=0=(t-2)(t-3)$ → $q,r=2,3$.

---

## ⚠️ Kesalahan yang Sering Dilakukan Siswa

1. **Lupa membagi dengan $a$** pada persamaan tak monik. Jumlah akar $=-\frac{b}{a}$, bukan $-b$.
2. **Salah tanda Vieta.** Jumlah akar bertanda **minus** $\frac{b}{a}$; sering ketinggalan tandanya.
3. **Mencari akar padahal yang ditanyakan ekspresi simetris.** Gunakan identitas jumlah/hasil kali—lebih cepat.
4. **Salah arah substitusi transformasi.** Akar baru $=p+2$ berarti substitusi $x\to x-2$ (mundur), bukan $x+2$.
5. **Menyertakan akar tak valid dalam konteks** (mis. jumlah unit negatif) tanpa menolaknya.
6. **Lupa akar kompleks berpasangan** saat menghitung banyak akar real.

---

## ⚡ Tips Cepat

- Jumlah akar $=-\frac{b}{a}$, hasil kali (semua akar) $=\pm\frac{\text{konstanta}}{a}$ (tanda $= (-1)^n$).
- Ekspresi simetris ($x_1^2+x_2^2$, $\frac1{x_1}+\frac1{x_2}$)? Ubah ke jumlah & hasil kali.
- Menyusun dari akar: $f(x)=a\prod(x-r_i)$; monik ambil $a=1$.
- Transformasi akar: **substitusi terbalik**. Kebalikan akar = **balik urutan koefisien**.
- Verifikasi jawaban dengan Vieta — pengecekan instan.

---

## ✅ Ringkasan Sub Materi

- **Persamaan polinomial** $f(x)=0$; derajat $n$ → maksimal $n$ akar; akar kompleks berpasangan.
- **Vieta (kuadrat):** $x_1+x_2=-\frac{b}{a}$, $x_1x_2=\frac{c}{a}$. **(Kubik):** $\sum=-\frac{b}{a}$, $\sum$pasangan$=\frac{c}{a}$, hasil kali$=-\frac{d}{a}$.
- **Menyusun dari akar:** $f(x)=a\prod(x-r_i)$ atau lewat jumlah/hasil kali.
- **Transformasi akar:** substitusi terbalik ($x\to x-k$, $x\to\frac1x$, dst.).

---

## 📝 Latihan Bertingkat

<!-- COMPONENT: Quiz -->

### 🟢 Set A — 10 Soal Mudah
1. Jumlah akar $x^2-8x+15=0$.
2. Hasil kali akar $x^2-8x+15=0$.
3. Susun persamaan kuadrat berakar $2,6$.
4. Jumlah akar $2x^2-4x+1=0$.
5. Hasil kali akar $3x^2+6x-9=0$.
6. Jumlah akar $x^3-5x^2+\dots$ (koef $x^2=-5$, monik).
7. Selesaikan $x^2-9=0$.
8. Susun persamaan berakar $0,4$.
9. Hasil kali ketiga akar $x^3-2x^2+x-8=0$.
10. Jumlah akar $x^2+3x=0$.

```json
{
  "set_id":"05-set-A-mudah","level":"mudah",
  "items":[
    {"id":"A1","type":"short","question":"Jumlah akar $x^2-8x+15$","answer":"8","explanation":"-b/a=8."},
    {"id":"A2","type":"short","question":"Hasil kali akar $x^2-8x+15$","answer":"15","explanation":"c/a=15."},
    {"id":"A3","type":"short","question":"Persamaan berakar 2,6","answer":"x^2-8x+12=0","explanation":"jumlah 8, kali 12."},
    {"id":"A4","type":"short","question":"Jumlah akar $2x^2-4x+1$","answer":"2","explanation":"-(-4)/2=2."},
    {"id":"A5","type":"short","question":"Hasil kali akar $3x^2+6x-9$","answer":"-3","explanation":"c/a=-9/3=-3."},
    {"id":"A6","type":"short","question":"Jumlah akar kubik monik, koef $x^2=-5$","answer":"5","explanation":"-b/a=5."},
    {"id":"A7","type":"short","question":"Selesaikan $x^2-9=0$","answer":"x=3, x=-3","explanation":"(x-3)(x+3)."},
    {"id":"A8","type":"short","question":"Persamaan berakar 0,4","answer":"x^2-4x=0","explanation":"jumlah 4, kali 0."},
    {"id":"A9","type":"short","question":"Hasil kali akar $x^3-2x^2+x-8$","answer":"8","explanation":"-d/a=-(-8)=8."},
    {"id":"A10","type":"short","question":"Jumlah akar $x^2+3x=0$","answer":"-3","explanation":"-b/a=-3."}
  ]
}
```
<details><summary><strong>Pembahasan Set A</strong></summary>

1. $8$. 2. $15$. 3. $x^2-8x+12=0$. 4. $2$. 5. $-3$. 6. $5$. 7. $x=\pm3$. 8. $x^2-4x=0$. 9. $-d/a=-(-8)=8$. 10. $-3$.
</details>

### 🟡 Set B — 10 Soal Sedang
1. Akar $x^2-6x+4=0$ adalah $p,q$. Hitung $p^2+q^2$.
2. Susun persamaan kuadrat berakar $-1,7$.
3. Akar $2x^2-5x+1=0$ adalah $\alpha,\beta$. Hitung $\frac1\alpha+\frac1\beta$.
4. Kubik $x^3-3x^2-x+3=0$ berakar $p,q,r$. Hitung $p+q+r$ dan $pqr$.
5. Susun persamaan kubik monik berakar $-1,2,3$.
6. Akar $x^2-4x+2=0$: susun persamaan berakar $1$ lebihnya.
7. Hasil kali dua akar dari $x^3-6x^2+11x-6=0$ jika akar ketiga $=3$.
8. Akar $x^2+kx+9=0$ sama (kembar). Tentukan $k$.
9. Jika jumlah akar $x^2-(m+1)x+6=0$ adalah $5$, tentukan $m$.
10. Susun persamaan berakar kebalikan dari akar $x^2-7x+3=0$.

```json
{
  "set_id":"05-set-B-sedang","level":"sedang",
  "items":[
    {"id":"B1","type":"short","question":"$p^2+q^2$ dari $x^2-6x+4$","answer":"28","explanation":"36-8=28."},
    {"id":"B2","type":"short","question":"Persamaan berakar $-1,7$","answer":"x^2-6x-7=0","explanation":"jumlah 6, kali $-7$."},
    {"id":"B3","type":"short","question":"$1/α+1/β$ dari $2x^2-5x+1$","answer":"5","explanation":"(α+β)/(αβ)=(5/2)/(1/2)=5."},
    {"id":"B4","type":"short","question":"$p+q+r$ & pqr dari $x^3-3x^2-x+3$","answer":"3 dan $-3$","explanation":"-b/a=3; -d/a=-3."},
    {"id":"B5","type":"short","question":"Kubik monik berakar $-1,2,3$","answer":"x^3-4x^2+x+6=0","explanation":"(x+1)(x-2)(x-3)."},
    {"id":"B6","type":"short","question":"$x^2-4x+2$, akar +1","answer":"x^2-6x+7=0","explanation":"x→x-1."},
    {"id":"B7","type":"short","question":"Hasil kali 2 akar jika akar ke-3=3 (dari $x^3-6x^2+11x-6$)","answer":"2","explanation":"$pqr=6, r=3 → pq=2$."},
    {"id":"B8","type":"short","question":"k agar $x^2+kx+9$ akar kembar","answer":"k=±6","explanation":"diskriminan 0: $k^2=36$."},
    {"id":"B9","type":"short","question":"m jika jumlah akar $x^2-(m+1)x+6=5$","answer":"m=4","explanation":"m+1=5."},
    {"id":"B10","type":"short","question":"Persamaan berakar kebalikan dari $x^2-7x+3$","answer":"3x^2-7x+1=0","explanation":"Balik urutan koefisien."}
  ]
}
```
<details><summary><strong>Pembahasan Set B</strong></summary>

1. $(6)^2-2(4)=28$.
2. Jumlah $6$, kali $-7$ → $x^2-6x-7=0$.
3. $\frac{\alpha+\beta}{\alpha\beta}=\frac{5/2}{1/2}=5$.
4. $p+q+r=3$; $pqr=-\frac{3}{1}=-3$.
5. $(x+1)(x-2)(x-3)$: $(x-2)(x-3)=x^2-5x+6$; kali $(x+1)$: $x^3-4x^2+x+6$.
6. Substitusi $x\to x-1$: $(x-1)^2-4(x-1)+2 = x^2-2x+1-4x+4+2 = x^2-6x+7=0$.
7. $pqr=6$; jika $r=3$ maka $pq=2$.
8. Kembar → diskriminan $0$: $k^2-4(9)=0\Rightarrow k^2=36\Rightarrow k=\pm6$.
9. Jumlah akar $=m+1=5\Rightarrow m=4$.
10. Balik urutan koefisien $1,-7,3 \to 3,-7,1$: $3x^2-7x+1=0$.
</details>

### 🔴 Set C — 10 Soal Sulit
1. Akar $x^3-6x^2+11x-6=0$ adalah $p,q,r$. Hitung $\frac1p+\frac1q+\frac1r$.
2. Akar $x^2-3x+1=0$ adalah $\alpha,\beta$. Hitung $\alpha^3+\beta^3$.
3. Susun persamaan kuadrat berakar kuadrat dari akar $x^2-4x+1=0$.
4. Kubik $x^3+ax^2+bx+c=0$ berakar $1,-2,k$ dan jumlah akar $=2$. Tentukan $k$, lalu $c$.
5. Akar $2x^3-x^2-5x+3=0$ berakar $p,q,r$. Hitung $pq+qr+rp$.
6. Susun persamaan berakar $2$ kali akar-akar $x^2-3x+2=0$.
7. Jika $\alpha,\beta$ akar $x^2-px+q=0$ dan $\alpha=2\beta$, nyatakan hubungan $p,q$.
8. Sebuah kubik monik berakar $r, r, s$ (satu akar kembar). Dari Vieta diperoleh dua hubungan: $2r+s=5$ dan $r+s=4$. Tentukan $r$ dan $s$.
9. Persamaan $x^3-70x^2-600x+72000=0$ berakar $p,q,r$. Diketahui dua akar $40,60$. Tentukan akar ketiga lewat Vieta dua cara (jumlah & hasil kali) dan tunjukkan konsisten.
10. Akar $x^2+bx+c=0$ adalah $\alpha,\beta$. Jika $\alpha+\beta=\alpha\beta$, nyatakan hubungan $b,c$.

```json
{
  "set_id":"05-set-C-sulit","level":"sulit",
  "items":[
    {"id":"C1","type":"short","question":"$1/p+1/q+1/r$ dari $x^3-6x^2+11x-6$","answer":"11/6","explanation":"$(pq+qr+rp)/(pqr)=11/6$."},
    {"id":"C2","type":"short","question":"$α^3+β^3$ dari $x^2-3x+1$","answer":"18","explanation":"3^3-3·1·3=27-9=18."},
    {"id":"C3","type":"short","question":"Persamaan berakar kuadrat dari akar $x^2-4x+1$","answer":"x^2-14x+1=0","explanation":"jumlah $16-2=14$, kali 1."},
    {"id":"C4","type":"short","question":"k & c jika akar $1,-2,k$, jumlah=2","answer":"k=3, c=6","explanation":"1-2+k=2→k=3; c=-(1·-2·3)=6."},
    {"id":"C5","type":"short","question":"$pq+qr+rp$ dari $2x^3-x^2-5x+3$","answer":"-5/2","explanation":"c/a=-5/2."},
    {"id":"C6","type":"short","question":"Persamaan berakar 2× akar $x^2-3x+2$","answer":"x^2-6x+8=0","explanation":"$x→x/2$ lalu kalikan."},
    {"id":"C7","type":"short","question":"$α=2β$, akar $x^2-px+q$","answer":"2p^2=9q","explanation":"α+β=3β=p, αβ=2β^2=q → β=p/3, q=2p^2/9."},
    {"id":"C8","type":"short","question":"r,s jika $2r+s=5$ & $r+s=4$","answer":"r=1, s=3","explanation":"kurangkan → $r=1$."},
    {"id":"C9","type":"short","question":"Akar ketiga $x^3-70x^2-600x+72000$ jika 40,60","answer":"-30","explanation":"jumlah $70→ -30$; hasil kali $-72000$ konsisten."},
    {"id":"C10","type":"short","question":"$α+β=αβ$ untuk $x^2+bx+c$","answer":"$-b=c$ (yaitu b+c=0)","explanation":"α+β=-b, αβ=c → -b=c."}
  ]
}
```
<details><summary><strong>Pembahasan Set C</strong></summary>

1. $\frac1p+\frac1q+\frac1r=\frac{pq+qr+rp}{pqr}=\frac{11}{6}$.
2. $\alpha+\beta=3,\ \alpha\beta=1$. $\alpha^3+\beta^3=(\alpha+\beta)^3-3\alpha\beta(\alpha+\beta)=27-3(1)(3)=18$.
3. $x^2-4x+1$: $\alpha+\beta=4,\ \alpha\beta=1$. Akar baru $\alpha^2,\beta^2$: jumlah $=16-2=14$, kali $=1$. → $x^2-14x+1=0$.
4. $1+(-2)+k=2\Rightarrow k=3$. $c=-(1)(-2)(3)=6$. (Persamaan $x^3-2x^2-5x+6=0$.)
5. $pq+qr+rp=\frac{c}{a}=\frac{-5}{2}$.
6. $x\to \frac{x}{2}$: $\left(\frac x2\right)^2-3\left(\frac x2\right)+2=0 \Rightarrow \frac{x^2}{4}-\frac{3x}{2}+2=0$; kali 4: $x^2-6x+8=0$. (Akar $2,4$ = $2\times$ akar $1,2$.)
7. $\alpha+\beta=3\beta=p\Rightarrow\beta=\frac{p}{3}$; $\alpha\beta=2\beta^2=q\Rightarrow q=2\left(\frac p3\right)^2=\frac{2p^2}{9}$. Jadi $9q=2p^2$.
8. Kurangkan $(2r+s)-(r+s)=5-4\Rightarrow r=1$; $s=3$.
9. Jumlah akar $=70$; dua akar $40+60=100$, jadi akar ketiga $=70-100=-30$. Cek hasil kali: $pqr=-72000$; $40\cdot60\cdot(-30)=-72000$ ✔. Konsisten.
10. $\alpha+\beta=-b$, $\alpha\beta=c$; syarat $\alpha+\beta=\alpha\beta$ → $-b=c$, yaitu $b+c=0$.
</details>

### 🧠 Set D — 5 Soal HOTS
1. Akar $x^3-4x^2+5x-2=0$ adalah $p,q,r$. Hitung $p^2+q^2+r^2$.
2. Susun persamaan kubik berakar $\alpha+1,\beta+1,\gamma+1$ jika $\alpha,\beta,\gamma$ akar $x^3-3x+1=0$.
3. Jika $\alpha,\beta$ akar $x^2-6x+c=0$ dan $\alpha-\beta=4$, tentukan $c$.
4. Persamaan $x^3+px^2+qx+r=0$ berakar dalam barisan aritmetika. Jika jumlah akar $=6$, tentukan akar tengahnya.
5. Akar $x^4-5x^2+4=0$: gunakan Vieta untuk memverifikasi jumlah & hasil kali keempat akar.

```json
{
  "set_id":"05-set-D-hots","level":"hots",
  "items":[
    {"id":"D1","type":"short","question":"$p^2+q^2+r^2$ dari $x^3-4x^2+5x-2$","answer":"6","explanation":"(4)^2-2(5)=16-10=6."},
    {"id":"D2","type":"short","question":"Kubik berakar $α+1,β+1,γ+1$ dari $x^3-3x+1$","answer":"x^3-3x^2+3=0","explanation":"substitusi $x→x-1$."},
    {"id":"D3","type":"short","question":"c jika $α-β=4$, $x^2-6x+c$","answer":"5","explanation":"(α-β)^2=36-4c=16→c=5."},
    {"id":"D4","type":"short","question":"Akar tengah barisan aritmetika, jumlah 6","answer":"2","explanation":"3×tengah=6→tengah=2."},
    {"id":"D5","type":"short","question":"Jumlah & hasil kali 4 akar $x^4-5x^2+4$","answer":"jumlah 0, hasil kali 4","explanation":"-b/a=0; e/a=4."}
  ]
}
```
<details><summary><strong>Pembahasan Set D</strong></summary>

1. $p+q+r=4$, $pq+qr+rp=5$. $p^2+q^2+r^2=(p+q+r)^2-2(pq+qr+rp)=16-10=6$.
2. Substitusi $x\to x-1$ ke $x^3-3x+1$: $(x-1)^3-3(x-1)+1 = (x^3-3x^2+3x-1)-3x+3+1 = x^3-3x^2+0x+3 = x^3-3x^2+3=0$.
3. $(\alpha-\beta)^2=(\alpha+\beta)^2-4\alpha\beta=36-4c$. Set $=16$: $36-4c=16\Rightarrow c=5$.
4. Barisan aritmetika $a-d, a, a+d$; jumlah $=3a=6\Rightarrow a=2$. Akar tengah $=2$.
5. $x^4-5x^2+4=0$: koef $x^3$ dan $x$ $=0$. Jumlah akar $=-\frac{0}{1}=0$; hasil kali $=\frac{4}{1}=4$. (Akar $\pm1,\pm2$: jumlah $0$, hasil kali $4$ ✔.)
</details>

### 🏆 Set E — 5 Soal Model TKA
1. **(TKA #8, via Vieta)** $f(x)=x^3-70x^2-600x+74{.}000$, modal $2000$ juta. Tentukan semua unit yang mungkin dijual, lalu nilai kebenaran untuk $30,40,60$.
2. **(Konteks)** Sebuah balok bervolume $V=x^3-6x^2+11x-6$ (cm³). Untuk nilai $x$ berapa volume $=0$? Apa maknanya?
3. **(Simetris)** Akar $x^2-2x-1=0$ adalah $\alpha,\beta$. Hitung $\alpha^2+\beta^2$ dan $\frac1\alpha+\frac1\beta$.
4. **(Menyusun)** Susun persamaan kuadrat yang akarnya $3$ lebih besar dari akar-akar $x^2-2x-8=0$.
5. **(Penalaran)** Persamaan $x^3-70x^2-600x+72000=0$ berakar $40,60,-30$. Verifikasi ketiga hubungan Vieta.

```json
{
  "set_id":"05-set-E-tka","level":"tka",
  "items":[
    {"id":"E1","type":"short","source":"TKA-2024-no8","question":"Unit mungkin dijual (modal 2000 juta)","answer":"40 dan 60 (30 tidak)","explanation":"Akar $f(x)=2000$ adalah $40,60,-30$; $-30$ ditolak."},
    {"id":"E2","type":"short","question":"x agar $V=x^3-6x^2+11x-6=0$","answer":"x=1,2,3","explanation":"$(x-1)(x-2)(x-3)$; volume nol saat dimensi menghilang."},
    {"id":"E3","type":"short","question":"$α^2+β^2$ & $1/α+1/β$ dari $x^2-2x-1$","answer":"6 dan $-2$","explanation":"α+β=2,αβ=-1; 4+2=6; 2/(-1)=-2."},
    {"id":"E4","type":"short","question":"Persamaan akar 3 lebih dari $x^2-2x-8$","answer":"x^2-8x+7=0","explanation":"x→x-3."},
    {"id":"E5","type":"short","source":"TKA-2024-no8","question":"Verifikasi Vieta akar $40,60,-30$","answer":"jumlah 70, Σpasangan $-600$, hasil kali $-72000$","explanation":"Cocok dengan koefisien."}
  ]
}
```
<details><summary><strong>Pembahasan Set E</strong></summary>

**E1.** $f(x)=2000 \Rightarrow x^3-70x^2-600x+72000=0$, berakar $40,60,-30$. Unit tak boleh negatif → **$40$ dan $60$ mungkin; $30$ tidak** (bukan akar). Tabel Benar/Salah: 30→Salah, 40→Benar, 60→Benar.

**E2.** $V=(x-1)(x-2)(x-3)=0 \Rightarrow x=1,2,3$. Secara konteks, volume balok "nol" saat parameter dimensi mencapai nilai-nilai itu (batas geometris).

**E3.** $\alpha+\beta=2,\ \alpha\beta=-1$. $\alpha^2+\beta^2=(2)^2-2(-1)=6$. $\frac1\alpha+\frac1\beta=\frac{\alpha+\beta}{\alpha\beta}=\frac{2}{-1}=-2$.

**E4.** Substitusi $x\to x-3$ ke $x^2-2x-8$: $(x-3)^2-2(x-3)-8 = x^2-6x+9-2x+6-8 = x^2-8x+7=0$. (Cek: akar lama $-2,4$; akar baru $1,7$; jumlah $8$, kali $7$ ✔.)

**E5.** Akar $40,60,-30$: jumlah $=70=-(-70)$ ✔; $\sum$pasangan $=40\cdot60+60\cdot(-30)+40\cdot(-30)=2400-1800-1200=-600$ ✔; hasil kali $=40\cdot60\cdot(-30)=-72000=-(72000)$ ✔. Ketiganya cocok dengan koefisien.
</details>

---

## 🏆 Tantangan Akhir Bab 5 — Uji Kompetensi

<!-- COMPONENT: Tantangan Akhir Bab
     DEVELOPER: render sebagai sesi soal berwaktu dengan rekap capaian (bintang, poin, waktu terbaik).
     Framing tetap sebagai asesmen/umpan balik belajar, bukan permainan peran. -->
> Kerjakan rangkaian soal berikut dalam mode berwaktu untuk menguji penguasaan Anda atas persamaan polinomial dan Teorema Vieta. Perolehan bintang dan poin merupakan umpan balik atas ketepatan serta kecepatan; sistem menyimpan capaian terbaik Anda sebagai catatan kemajuan belajar.

```json
{ "type":"challenge", "id":"05-tantangan", "competency":"K5",
  "title":"Tantangan Akhir Bab 5: Persamaan Polinomial dan Teorema Vieta",
  "mode":"timed", "time_limit_sec":210, "shuffle":true,
  "pool":["05-act-persamaan","05-act-faktor","05-act-vieta","05-act-menyusun","05-act-transform","05-act-trap","05-set-A-mudah"],
  "scoring":{"per_correct":10,"time_bonus":true},
  "stars":{"3":90,"2":70,"1":50},
  "reward":{"xp":80,"badge":"penakluk-vieta"},
  "record":{"track_best_time":true,"track_best_score":true} }
```

---

## 📝 Refleksi

<!-- COMPONENT: Reflection -->
1. Menurut Anda, kapan Vieta **lebih cepat** daripada mencari akar secara langsung?
2. Jelaskan dengan bahasa Anda sendiri: mengapa membalik akar setara dengan membalik urutan koefisien?
3. Pada soal saham, apa keuntungan mengetahui **semua** akar (termasuk $-30$) dibandingkan hanya memeriksa satu nilai?

---

## ➡️ Persiapan Menuju Sub Materi Berikutnya

Pada bab ini, kita telah menguasai Teorema Vieta serta mampu menyusun persamaan dari akar maupun dari syarat tertentu—termasuk menyelesaikan soal saham secara ringkas. Kelima kompetensi inti (K1–K5) kini telah lengkap.

Pada **Bab 06 — Strategi HOTS & TKA**, tidak ada teori baru; kita **menggabungkan** seluruh alat (nilai, pembagian, Teorema Sisa/Faktor, Vieta) untuk menyelesaikan soal-soal tersulit: soal kombinasi banyak konsep, soal kontekstual/pemodelan, dan soal model TKA—lengkap dengan **cara pintas** serta pemetaan **jebakan**.

> Lanjutkan ke **Bab 06**.

<!-- COMPONENT: Summary -->
<!-- Progress bar: 6/8. -->
