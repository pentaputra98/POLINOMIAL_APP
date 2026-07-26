---
id: "06-strategi-hots-dan-tka"
slug: "strategi-hots-dan-tka"
title: "Strategi HOTS dan TKA"
order: 6
duration_min: 110
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
  - "Memilih metode tercepat lewat kerangka keputusan"
  - "Mengenali pola soal & mengurai soal multi-konsep"
  - "Menyelesaikan soal kontekstual & pemodelan"
  - "Mengenali & menghindari jebakan khas TKA"
tags: ["hots", "tka", "strategi", "shortcut", "jebakan", "pemodelan", "kombinasi-konsep"]
components:
  - "Concept Map Mini"
  - "Decision Flow Interactive"
  - "Case Study Walkthrough"
  - "Trap Radar"
  - "Quiz"
  - "Reflection"
  - "Activity Matching"
  - "Activity Categorize"
  - "Activity Ordering"
  - "Activity TrueFalse"
  - "Activity Cloze"
  - "Activity ErrorHunt"
  - "Tantangan Akhir Bab"
activities:
  - "06-act-alat"
  - "06-act-katakunci"
  - "06-act-kombinasi"
  - "06-act-konteks"
  - "06-act-shortcut"
  - "06-act-trap"
challenge: "06-tantangan"
xp_available: 210
katex: true
---

# Bab 06 — Strategi HOTS dan TKA

<!-- COMPONENT: Concept Map Mini
     DEVELOPER: WAJIB dirender sebagai kartu/diagram interaktif bergaya Soft Neo Brutalism,
     BUKAN menyalin blok teks ASCII apa adanya. Simpul bertahap:
     Kerangka keputusan -> Pola soal -> Kombinasi konsep -> Kontekstual/Pemodelan -> Jebakan -> Studi kasus TKA,
     dapat diklik menuju sub-bagian terkait. Blok teks di bawah HANYA rujukan struktur. -->

## 🎯 Tujuan Pembelajaran

Bab ini **tidak** menambah rumus baru. Tujuannya meningkatkan **cara berpikir** dalam menyelesaikan soal:

1. Memilih **metode tercepat** memakai kerangka keputusan yang jelas.
2. **Mengenali pola** soal dan mengurai soal yang menggabungkan banyak konsep.
3. Menyelesaikan soal **kontekstual & pemodelan**.
4. Mengenali & menghindari **jebakan** khas TKA.

## 🧩 Kompetensi yang Dipelajari
- **K6 — Menyelesaikan soal HOTS, kontekstual, & model TKA.**

## 📦 Prasyarat
- **Seluruh** Bab 01–05. Bab ini merupakan titik temu seluruh materi.

## ⏱️ Estimasi Waktu Belajar
**±110 menit.**

## 🗺️ Peta Konsep Kecil

<!-- COMPONENT: Concept Map Mini (lanjutan)
     DEVELOPER: tampilkan sebagai alur kartu interaktif, bukan teks ASCII mentah. -->

```
STRATEGI HOTS & TKA
├─ 1. Kerangka keputusan (metode tercepat)
├─ 2. Membaca & mengenali pola soal
├─ 3. Soal kombinasi banyak konsep
├─ 4. Soal kontekstual & pemodelan
├─ 5. Katalog shortcut
├─ 6. Radar jebakan
└─ 7. Studi kasus TKA #5–#8
```

## 🔥 Motivasi

Sebagian besar siswa **menguasai rumus** tetapi kurang berhasil pada ujian. Penyebabnya, TKA menguji **kualitas keputusan**, bukan sekadar hafalan: metode mana yang dipilih, langkah mana yang dapat dilewati, dan jebakan mana yang perlu dihindari. Dua siswa dengan pengetahuan yang sama dapat berbeda belasan menit hanya karena yang satu memilih Horner sementara yang lain membagi panjang.

Bab ini melatih **kemampuan pengambilan keputusan** tersebut. Setelah mempelajarinya, pertanyaan pertama saat melihat soal bukan lagi "apakah saya mampu?", melainkan **"alat mana yang paling cepat untuk soal ini?"**

---

## 1️⃣ Kerangka Keputusan: Memilih Metode Tercepat

Sebelum menghitung apa pun, **baca soal dan tanyakan**: *apa yang sebenarnya diminta?* Jawabannya menentukan alat.

<!-- COMPONENT: Decision Flow Interactive
     DEVELOPER: WAJIB dirender sebagai bagan alir (flowchart) interaktif; pengguna menjawab
     pertanyaan (yang diminta apa? bentuk pembagi apa?) lalu diarahkan ke metode tercepat.
     Blok teks ASCII di bawah HANYA rujukan struktur, jangan ditampilkan mentah. -->

```
APA YANG DIMINTA?
│
├─ SISA saja (bukan hasil bagi)?
│     ├─ pembagi (x−k)      → Teorema Sisa: hitung f(k)          [tercepat]
│     ├─ pembagi (ax−b)     → f(b/a)
│     └─ pembagi kuadrat    → sisa rx+s via substitusi akar / sistem
│
├─ HASIL BAGI + sisa?
│     ├─ pembagi (x−k)/(ax−b) → Horner
│     ├─ kuadrat terfaktor     → Horner bertingkat
│     └─ kuadrat tak terfaktor → Horner-Kino / bersusun
│
├─ AKAR / FAKTOR?
│     → Teorema Akar Rasional → uji f(kandidat) → Horner → ulangi
│
├─ JUMLAH / HASIL KALI / EKSPRESI SIMETRIS akar?
│     → Vieta (jangan cari akar!)
│
├─ MENYUSUN persamaan dari akar/syarat?
│     → f=a·∏(x−rᵢ)  atau  substitusi transformasi akar
│
└─ NILAI fungsi pada x tertentu / konteks nyata?
      → Substitusi (Horner untuk hitung cepat)
```

> ⚡ **Aturan hemat waktu 1:** apabila soal hanya meminta **sisa**, jangan membagi panjang. Hitung $f(k)$.

> ⚡ **Aturan hemat waktu 2:** apabila soal menyebut **"jumlah akar", "hasil kali akar", $x_1^2+x_2^2$**, dan sejenisnya, gunakan **Vieta**, bukan mencari akar.

---

<!-- COMPONENT: Activity Matching -->
> **Latihan Interaktif — Menjodohkan.** Pasangkan tiap permintaan soal dengan alat/metode tercepatnya.

```json
{ "type":"activity", "widget":"matching", "id":"06-act-alat", "competency":"K6",
  "prompt":"Jodohkan yang diminta soal dengan metode tercepatnya",
  "pairs":[
    ["Mencari sisa pembagian oleh (x-k)","Hitung f(k)"],
    ["Mencari jumlah atau hasil kali akar","Teorema Vieta"],
    ["Mencari titik potong sumbu X","Faktorisasi (mencari akar)"],
    ["Mencari nilai fungsi pada x tertentu","Substitusi"]
  ],
  "reward":{"xp":20} }
```

## 2️⃣ Membaca & Mengenali Pola Soal

Soal TKA sering tampil dalam bentuk yang tidak langsung. Kenali **kata kunci pemicu** berikut:

| Kata kunci di soal | Konsep yang diuji | Alat |
|--------------------|-------------------|------|
| "sisa", "bersisa" | Teorema Sisa | $f(k)$ |
| "habis dibagi", "faktor dari" | Teorema Faktor | $f(k)=0$ |
| "titik potong sumbu X", "grafik memotong" | Akar | faktorisasi |
| "jumlah/hasil kali akar" | Vieta | rumus Vieta |
| "akar-akarnya … lebih/kali" | Transformasi akar | substitusi |
| "dinyatakan dengan fungsi", "model" | Pemodelan | substitusi/operasi |
| "berlaku untuk semua x", "≡" | Identitas/kesamaan | samakan koefisien |
| "nilai a+b", "tentukan konstanta" | Koefisien tak diketahui | kesamaan/substitusi |

> 💡 **Kebiasaan efektif:** garis bawahi kata kunci sebelum menghitung. Kata kunci berperan sebagai penunjuk alat yang tepat.

---

<!-- COMPONENT: Activity Categorize -->
> **Latihan Interaktif — Kategorisasi.** Kelompokkan tiap tugas berdasarkan alat yang paling tepat.

```json
{ "type":"activity", "widget":"categorize", "id":"06-act-katakunci", "competency":"K6",
  "prompt":"Kelompokkan tiap tugas ke alat yang tepat",
  "categories":["Gunakan f(k) / Teorema Sisa","Gunakan Teorema Vieta"],
  "items":[
    ["Mencari sisa f(x) dibagi (x-2)","Gunakan f(k) / Teorema Sisa"],
    ["Mencari jumlah akar persamaan","Gunakan Teorema Vieta"],
    ["Memeriksa apakah (x-1) faktor","Gunakan f(k) / Teorema Sisa"],
    ["Menghitung x1^2+x2^2 dari akar","Gunakan Teorema Vieta"],
    ["Menghitung f(3)","Gunakan f(k) / Teorema Sisa"],
    ["Mencari hasil kali akar","Gunakan Teorema Vieta"]
  ],
  "reward":{"xp":25} }
```

## 3️⃣ Soal Kombinasi Beberapa Konsep

Soal HOTS jarang hanya menguji satu konsep; umumnya menggabungkan 2–3 konsep. Kuncinya: **uraikan menjadi langkah-langkah, satu alat untuk tiap langkah**.

**Contoh kombinasi (Faktor + Vieta).**
Diketahui $x^3 - 7x^2 + 14x - 8 = 0$ memiliki tiga akar yang membentuk **barisan geometri**. Tentukan akar-akarnya.

*Strategi:* "barisan geometri" → misalkan akar $\frac{a}{r}, a, ar$. Hasil kali ketiganya (Vieta) $= a^3$.
Dari Vieta: hasil kali $= -\frac{-8}{1} = 8 \Rightarrow a^3 = 8 \Rightarrow a = 2$ (akar tengah).
Karena $a=2$ akar, cek: $f(2)=8-28+28-8=0$ ✔. Horner bagi $(x-2)$: $x^2-5x+4=(x-1)(x-4)$. Akar $1,2,4$ — dan benar $1,2,4$ barisan geometri rasio $2$. ✔

> 💡 Perhatikan alurnya: **Vieta** (temukan akar tengah dari hasil kali) → **Teorema Faktor/Horner** (kupas sisanya). Dua alat, satu soal.

**Contoh kombinasi (Sisa + Sistem).**
$f(x)$ dibagi $(x-1)$ sisa $2$, dibagi $(x-2)$ sisa $3$, dibagi $(x-3)$ sisa $6$. Tentukan sisa jika $f(x)$ dibagi $(x-1)(x-2)(x-3)$.

*Strategi:* pembagi derajat 3 → sisa derajat $\le 2$: $S(x)=ax^2+bx+c$. Substitusi tiga akar:
$$a+b+c=2,\quad 4a+2b+c=3,\quad 9a+3b+c=6$$
Selisih berurutan: $3a+b=1$ dan $5a+b=3$ → $a=1,\ b=-2,\ c=3$. **Sisa $=x^2-2x+3$.**

---

<!-- COMPONENT: Activity Ordering -->
> **Latihan Interaktif — Mengurutkan.** Susun langkah menyelesaikan soal "tiga akar membentuk barisan geometri".

```json
{ "type":"activity", "widget":"ordering", "id":"06-act-kombinasi", "competency":"K6",
  "prompt":"Urutkan langkah penyelesaian soal barisan geometri",
  "options":["Misalkan akar-akarnya a/r, a, dan ar","Gunakan Vieta: hasil kali ketiga akar sama dengan a^3","Tentukan akar tengah a dari akar pangkat tiga hasil kali","Bagi dengan (x-a) memakai Horner, lalu faktorkan sisanya"],
  "answer_order":[0,1,2,3],
  "reward":{"xp":20} }
```

## 4️⃣ Soal Kontekstual & Pemodelan

Soal cerita terasa sulit **hanya sebelum** diterjemahkan ke dalam bentuk matematika. Prosedurnya tetap:

1. **Terjemahkan** kalimat → fungsi/persamaan.
2. **Tentukan** apa yang dicari (nilai? akar? koefisien?).
3. **Pilih alat** (kerangka keputusan bagian 1).
4. **Tafsirkan** kembali jawaban ke konteks (buang solusi tak masuk akal, mis. jumlah negatif).

<!-- COMPONENT: Case Study Walkthrough -->
<!-- Studi kasus langkah-demi-langkah untuk 4 soal TKA; tiap langkah punya "kenapa memilih ini". -->

### 🏭 Studi Kasus TKA #7 — Drum (Operasi)

> Total penambahan volume 10 drum, $V(T)=0{,}05T^3+0{,}4T^2+20T$.

- **Terjemahan:** 10 drum identik → total $=10\cdot V(T)$.
- **Yang dicari:** ekspresi polinomial baru → **operasi (perkalian konstanta)**.
- **Eksekusi:** $10\cdot V(T)=0{,}5T^3+4T^2+200T$ → **D**.
- **Jebakan:** pilihan pengecoh menaruh $50$/$5$ sebagai koefisien utama. Kalikan $10\times0{,}05=0{,}5$ dengan teliti.

### 📈 Studi Kasus TKA #8 — Saham (Nilai / Vieta)

> $f(x)=x^3-70x^2-600x+74{.}000$; modal $2000$ juta; unit $30,40,60$?

- **Terjemahan:** "cocok modal $2000$" berarti $f(x)=2000$.
- **Dua jalur:**
  - *Jalur cepat cek angka (Bab 02):* substitusi $f(30)=20000$ (tidak), $f(40)=2000$ (ya), $f(60)=2000$ (ya).
  - *Jalur pemahaman penuh (Bab 05):* selesaikan $x^3-70x^2-600x+72000=0$; Vieta beri akar $40,60,-30$.
- **Tafsir konteks:** $-30$ ditolak (unit negatif). **30→Salah, 40→Benar, 60→Benar.**
- **Pemilihan jalur:** apabila soal hanya menanyakan angka tertentu, gunakan substitusi; apabila menanyakan "semua kemungkinan", gunakan Vieta/faktorisasi.

### 📉 Studi Kasus TKA #5 — Titik Potong Sumbu X (Akar)

> $f(x)=x^3+3x^2-10x-24$; pilih semua titik potong sumbu $X$.

- **Terjemahan:** titik potong sumbu $X$ ⟺ $f(x)=0$ → **akar**.
- **Eksekusi:** Akar Rasional → $f(-2)=0$ → Horner → $x^2+x-12=(x+4)(x-3)$ → akar $-2,-4,3$.
- **Cocokkan opsi** $\{(-2,0),(-1,0),(3,0),(4,0),(5,0)\}$ → **$(-2,0)$ & $(3,0)$**.
- **Jebakan "pilih semua benar":** faktorkan penuh; jangan berhenti di satu akar; abaikan akar valid yang tak ada di opsi; verifikasi tiap opsi.

### 🧮 Studi Kasus TKA #6 — Sisa Pembagian Kuadrat (Kesamaan)

> $x^4+ax^3+bx^2+x-6$ dibagi $x^2+x+1$ sisa $5x-1$; $a+b$?

- **Terjemahan:** pembagi kuadrat → sisa $rx+s$; cocokkan dengan $5x-1$.
- **Dua jalur:**
  - *Bersusun simbolik (Bab 03):* sisa $=(2-b)x+(a-b-6)$ → $b=-3,a=2$.
  - *Akar kompleks (Bab 04):* $x=\omega$, $\omega^3=1$, $\omega^2=-\omega-1$ → hasil sama, lebih cepat.
- **Jawaban:** $a+b=-1$ (C).
- **Jebakan:** membagi penuh untuk cari hasil bagi padahal cukup **dua persamaan sisa**.

---

<!-- COMPONENT: Activity TrueFalse -->
> **Latihan Interaktif — Benar/Salah.** Tentukan nilai kebenaran tiap pernyataan tentang penyelesaian soal.

```json
{ "type":"activity", "widget":"truefalse", "id":"06-act-konteks", "competency":"K6",
  "prompt":"Benar atau salah?",
  "statements":[
    {"s":"Pada soal kontekstual, solusi bernilai negatif untuk banyak unit harus ditolak.","a":true,"why":"Banyak unit tidak boleh negatif."},
    {"s":"Langkah pertama soal cerita adalah menerjemahkannya menjadi fungsi atau persamaan.","a":true,"why":"Terjemahan mendahului perhitungan."},
    {"s":"Jawaban matematis selalu langsung menjadi jawaban akhir tanpa perlu ditafsirkan ke konteks.","a":false,"why":"Solusi harus ditafsirkan kembali ke konteks."},
    {"s":"f(1) sama dengan jumlah seluruh koefisien polinomial.","a":true,"why":"Substitusi x=1."}
  ],
  "reward":{"xp":20} }
```

## 5️⃣ Katalog Shortcut (Kumpulan Jalan Pintas)

Kuasai daftar berikut; masing-masing menghemat waktu pengerjaan:

1. **Sisa $\div(x-k)$** $= f(k)$. Tak perlu membagi.
2. **Jumlah semua koefisien** $= f(1)$. (Berguna cek "habis dibagi $(x-1)$".)
3. **$f(0)=$ konstanta.** Cek instan konstanta / suku bebas.
4. **$f(-1)=$ jumlah koefisien berselang tanda.** Cek "habis dibagi $(x+1)$".
5. **Ekspresi simetris akar** → Vieta, jangan cari akar.
6. **Kebalikan akar** = **balik urutan koefisien**.
7. **Akar negatif semua** ($x\to -x$) = ganti tanda koefisien suku berpangkat ganjil.
8. **Barisan aritmetika 3 akar** → akar tengah $=\frac{\text{jumlah}}{3}=-\frac{b}{3a}$.
9. **Barisan geometri 3 akar** → akar tengah $=\sqrt[3]{\text{hasil kali}}$.
10. **Pembagi kuadrat, hanya butuh sisa** → substitusi kedua akar pembagi, selesaikan sistem.

---

<!-- COMPONENT: Activity Cloze -->
> **Latihan Interaktif — Melengkapi.** Lengkapi tiga pemeriksaan instan berikut.

```json
{ "type":"activity", "widget":"cloze", "id":"06-act-shortcut", "competency":"K6",
  "prompt":"Lengkapi cara pintas pemeriksaan",
  "template":"f(0) sama dengan {{0}} polinomial; f(1) sama dengan {{1}} seluruh koefisien; membalik akar setara dengan membalik urutan {{2}}.",
  "answers":["konstanta","jumlah","koefisien"],
  "reward":{"xp":20} }
```

## 6️⃣ Radar Jebakan (Trap Radar)

<!-- COMPONENT: Trap Radar -->
<!-- Tampilkan tiap jebakan sebagai kartu peringatan; kuis mini "spot the trap". -->

| # | Jebakan | Cara aman |
|---|---------|-----------|
| 1 | Salah tanda $k$: pembagi $(x+3)$ diuji $f(3)$ | Pembagi $(x-k)$ → $k$ tanda **berlawanan**: $(x+3)\to k=-3$ |
| 2 | Lupa koefisien nol suku hilang di Horner | Tulis **semua** koefisien, termasuk $0$ |
| 3 | Membagi sisa dengan $a$ pada pembagi $(ax-b)$ | Hanya **hasil bagi** dibagi $a$; sisa tetap |
| 4 | "Pilih semua benar" berhenti di satu akar | Faktorkan **penuh**, cek tiap opsi |
| 5 | Ekspresi simetris → malah cari akar | Pakai identitas jumlah/hasil kali |
| 6 | Solusi konteks tak masuk akal diterima | Buang akar negatif/pecahan bila konteks menuntut |
| 7 | Salah arah substitusi transformasi akar | Akar baru $=p+k$ → substitusi $x\to x-k$ |
| 8 | Mengira derajat $n$ pasti $n$ akar real | **Paling banyak** $n$; kompleks berpasangan |
| 9 | Koefisien utama dianggap $1$ padahal bukan | Vieta wajib bagi $a$ |
| 10 | Salah kali di pemodelan (mis. $10\times0{,}05$) | Kalikan tiap koefisien perlahan |

---

<!-- COMPONENT: Activity ErrorHunt -->
> **Latihan Interaktif — Menemukan Kesalahan.** Cermati pengerjaan berikut; terdapat satu langkah yang keliru.

```json
{ "type":"activity", "widget":"error-hunt", "id":"06-act-trap", "competency":"K6",
  "prompt":"Seorang siswa mencari sisa pembagian f(x)=x^3+2x^2-x+5 oleh (x+2). Manakah langkah yang salah?",
  "steps":[
    "Pembagi (x+2) berarti k = -2.",
    "Gunakan Teorema Sisa: sisa sama dengan f(-2).",
    "Hitung f(-2) = (-2)^3 + 2(-2)^2 - (-2) + 5.",
    "Karena pembagi (x+2), gunakan k = 2 sehingga sisa = f(2)."
  ],
  "wrong_index":3,
  "why":"Pembagi (x+2) = (x-(-2)), sehingga k = -2 dan sisa = f(-2). Langkah 4 keliru karena memakai k = 2.",
  "reward":{"xp":25} }
```

## 📘 Contoh Bertingkat

### 🟢 Sederhana

**S1.** Cepat: sisa $x^5-3x+1$ dibagi $(x-1)$.
*Pembahasan.* $=f(1)=1-3+1=-1$ (jumlah koefisien).

**S2.** Cepat: apakah $(x+1)$ faktor $x^3+2x^2-x-2$?
*Pembahasan.* $f(-1)=-1+2+1-2=0$ → ya.

**S3.** Tanpa cari akar: jumlah akar $3x^2-9x+6=0$.
*Pembahasan.* $-\frac{-9}{3}=3$.

### 🟡 Sedang

**M1.** $f(x)$ dibagi $(x-2)$ sisa $5$, dibagi $(x+1)$ sisa $-1$. Sisa dibagi $(x-2)(x+1)$?
*Pembahasan.* $2r+s=5$, $-r+s=-1$ → $3r=6, r=2, s=1$. Sisa $2x+1$.

**M2.** Akar $x^2-4x+1=0$ adalah $\alpha,\beta$. Hitung $\frac{\alpha}{\beta}+\frac{\beta}{\alpha}$.
*Pembahasan.* $\frac{\alpha^2+\beta^2}{\alpha\beta}=\frac{(4)^2-2(1)}{1}=14$.

**M3.** Tiga akar $x^3-6x^2+11x-6=0$ membentuk barisan aritmetika. Tentukan akar tengah tanpa faktorisasi.
*Pembahasan.* Akar tengah $=-\frac{b}{3a}=\frac{6}{3}=2$. (Akar $1,2,3$.)

### 🧠 HOTS

**H1.** $f(x)=x^3+ax^2+bx+c$ habis dibagi $(x-1)$, bersisa $4$ saat dibagi $(x-2)$, dan $f(0)=-2$. Tentukan $a,b,c$.
*Pembahasan.* $c=f(0)=-2$. $f(1)=1+a+b+c=0 \Rightarrow a+b=1$. $f(2)=8+4a+2b+c=4 \Rightarrow 4a+2b=-2 \Rightarrow 2a+b=-1$. Kurangkan dari $a+b=1$: $a=-2$, lalu $b=3$. Jadi $a=-2,b=3,c=-2$.

**H2.** Persamaan $x^3-70x^2-600x+72000=0$ (dari soal saham). Tanpa faktorisasi penuh, tentukan **hasil kali akar-akar positifnya**.
*Pembahasan.* Vieta: hasil kali **semua** akar $=-72000$. Akar $40,60,-30$; hasil kali akar positif $=40\cdot60=2400$. (Bisa juga: $\frac{-72000}{-30}=2400$.)

**H3.** Akar $x^2-px+q=0$ adalah $\alpha,\beta$. Persamaan baru berakar $\alpha+\beta$ dan $\alpha\beta$. Susun persamaannya (dalam $p,q$).
*Pembahasan.* Akar baru: $\alpha+\beta=p$ dan $\alpha\beta=q$. Jumlah $=p+q$, hasil kali $=pq$. Persamaan: $x^2-(p+q)x+pq=0$.

---

## ⚠️ Kesalahan yang Sering Dilakukan Siswa (Level Strategi)

1. **Langsung menghitung tanpa membaca "yang diminta".** Sering membagi panjang saat cukup $f(k)$.
2. **Memakai satu alat untuk semua soal.** Fleksibilitas alat = kecepatan.
3. **Tidak menafsirkan jawaban ke konteks.** Menerima unit/panjang negatif.
4. **Terpaku pada soal cerita.** Padahal soal tersebut hanya perlu diterjemahkan.
5. **Melewatkan verifikasi cepat** ($f(1)$, Vieta) yang bisa menangkap salah hitung.

---

## ⚡ Tips Cepat (Meta)

- Baca soal → **garis bawahi kata kunci** → tentukan alat → baru hitung.
- Simpan **3 cek instan**: $f(0)$, $f(1)$, Vieta.
- Soal kombinasi? **Pecah jadi langkah**, satu alat per langkah.
- Selalu **tafsir ulang** jawaban konteks; buang solusi mustahil.
- Apabila menemui kesulitan, tanyakan: *"apa bentuk pembaginya?"* dan *"apa tepatnya yang diminta?"*

---

## ✅ Ringkasan Sub Materi

- **Kerangka keputusan** memandu pilihan alat dari "apa yang diminta".
- **Kata kunci** memicu konsep: sisa→$f(k)$, faktor→$f(k)=0$, jumlah akar→Vieta, dst.
- Soal **kombinasi** = tumpukan langkah; **kontekstual** = terjemah lalu tafsir ulang.
- **Katalog shortcut** & **radar jebakan** menghemat waktu dan mencegah salah.

---

## 📝 Latihan Bertingkat

<!-- COMPONENT: Quiz -->

### 🟢 Set A — 10 Soal Mudah (pilih alat & jawab cepat)
1. Sisa $x^4-x+2$ ÷ $(x-1)$.
2. Jumlah akar $x^2-10x+9=0$.
3. Apakah $(x-2)$ faktor $x^3-8$?
4. $f(0)$ dari $x^3-4x+7$.
5. Hasil kali akar $2x^2-6x+4=0$.
6. Sisa $x^3+1$ ÷ $(x+1)$.
7. Titik potong sumbu X dari $x^2-4$.
8. Jumlah koefisien $x^3-2x^2+5x-1$.
9. Akar tengah barisan aritmetika 3 akar, jumlah $=12$.
10. Persamaan berakar $2,3$.

```json
{
  "set_id":"06-set-A-mudah","level":"mudah",
  "items":[
    {"id":"A1","type":"short","question":"Sisa $x^4-x+2 \\div (x-1)$","answer":"2","explanation":"f(1)=1-1+2=2."},
    {"id":"A2","type":"short","question":"Jumlah akar $x^2-10x+9$","answer":"10","explanation":"-b/a=10."},
    {"id":"A3","type":"mc","question":"(x-2) faktor $x^3-8$?","options":["Ya","Tidak"],"answer":"Ya","explanation":"f(2)=0."},
    {"id":"A4","type":"short","question":"f(0) dari $x^3-4x+7$","answer":"7","explanation":"konstanta."},
    {"id":"A5","type":"short","question":"Hasil kali akar $2x^2-6x+4$","answer":"2","explanation":"c/a=4/2=2."},
    {"id":"A6","type":"short","question":"Sisa $x^3+1 \\div (x+1)$","answer":"0","explanation":"f(-1)=0."},
    {"id":"A7","type":"short","question":"Titik potong X dari $x^2-4$","answer":"(2,0),(-2,0)","explanation":"akar ±2."},
    {"id":"A8","type":"short","question":"Jumlah koefisien $x^3-2x^2+5x-1$","answer":"3","explanation":"f(1)=1-2+5-1=3."},
    {"id":"A9","type":"short","question":"Akar tengah aritmetika, jumlah 12","answer":"4","explanation":"12/3=4."},
    {"id":"A10","type":"short","question":"Persamaan berakar 2,3","answer":"x^2-5x+6=0","explanation":"jumlah 5, kali 6."}
  ]
}
```
<details><summary><strong>Pembahasan Set A</strong></summary>

1. $f(1)=2$. 2. $10$. 3. ya. 4. $7$. 5. $2$. 6. $0$. 7. $(\pm2,0)$. 8. $f(1)=3$. 9. $4$. 10. $x^2-5x+6=0$.
</details>

### 🟡 Set B — 10 Soal Sedang
1. $f$ dibagi $(x-1)$ sisa $3$, $(x+2)$ sisa $0$. Sisa dibagi $(x-1)(x+2)$.
2. Akar $x^2-6x+7=0$: hitung $\alpha^2+\beta^2$.
3. Faktorkan penuh $x^3-3x^2-4x+12$.
4. Nilai $a+b$ jika $x^4+ax^3+bx^2+x-6$ ÷ $(x^2+x+1)$ sisa $5x-1$.
5. Jumlah akar positif dari $x^3-70x^2-600x+72000=0$ (akar $40,60,-30$).
6. Susun persamaan berakar $1$ kurang dari akar $x^2-6x+8=0$.
7. Hasil kali akar $x^3-2x^2-5x+6=0$.
8. Tentukan $k$ agar $x^3-kx+6$ habis dibagi $(x-3)$.
9. Sisa $x^{50}-x^{25}+1$ ÷ $(x-1)$.
10. Akar $x^2-3x+1=0$: hitung $\frac1\alpha+\frac1\beta$.

```json
{
  "set_id":"06-set-B-sedang","level":"sedang",
  "items":[
    {"id":"B1","type":"short","question":"Sisa dibagi (x-1)(x+2); f(1)=3,f(-2)=0","answer":"x+2","explanation":"r+s=3,-2r+s=0→r=1,s=2."},
    {"id":"B2","type":"short","question":"$α^2+β^2$ dari $x^2-6x+7$","answer":"22","explanation":"36-14=22."},
    {"id":"B3","type":"short","question":"Faktorkan $x^3-3x^2-4x+12$","answer":"(x-3)(x-2)(x+2)","explanation":"akar 3,2,-2."},
    {"id":"B4","type":"mc","question":"a+b jika sisa 5x-1","options":["11","5","-1","-5"],"answer":"-1","explanation":"a=2,b=-3."},
    {"id":"B5","type":"short","question":"Jumlah akar positif (40,60,-30)","answer":"100","explanation":"40+60."},
    {"id":"B6","type":"short","question":"Persamaan berakar 1 kurang dari akar $x^2-6x+8$","answer":"x^2-4x+3=0","explanation":"x→x+1."},
    {"id":"B7","type":"short","question":"Hasil kali akar $x^3-2x^2-5x+6$","answer":"-6","explanation":"-d/a=-6."},
    {"id":"B8","type":"short","question":"k agar $x^3-kx+6$ habis dibagi (x-3)","answer":"11","explanation":"27-3k+6=0→k=11."},
    {"id":"B9","type":"short","question":"Sisa $x^{50}-x^{25}+1 \\div (x-1)$","answer":"1","explanation":"1-1+1=1."},
    {"id":"B10","type":"short","question":"$1/α+1/β$ dari $x^2-3x+1$","answer":"3","explanation":"(α+β)/(αβ)=3/1=3."}
  ]
}
```
<details><summary><strong>Pembahasan Set B</strong></summary>

1. $r+s=3$, $-2r+s=0$ → $3r=3, r=1, s=2$. Sisa $x+2$.
2. $(6)^2-2(7)=22$.
3. $f(3)=27-27-12+12=0$; Horner → $x^2-4=(x-2)(x+2)$; jadi $(x-3)(x-2)(x+2)$.
4. $a=2,b=-3$ → $a+b=-1$.
5. Akar positif $40,60$ → jumlah $100$.
6. $x\to x+1$: $(x+1)^2-6(x+1)+8 = x^2+2x+1-6x-6+8 = x^2-4x+3=0$.
7. Hasil kali akar $=-\frac{d}{a}=-\frac{6}{1}=-6$.
8. $f(3)=27-3k+6=0 \Rightarrow 33=3k \Rightarrow k=11$.
9. $f(1)=1-1+1=1$.
10. $\frac{\alpha+\beta}{\alpha\beta}=\frac{3}{1}=3$.
</details>

### 🔴 Set C — 10 Soal Sulit (kombinasi konsep)
1. Tiga akar $x^3-9x^2+23x-15=0$ barisan aritmetika. Tentukan akar-akarnya.
2. $f$ dibagi $(x-1)$ sisa $1$, $(x-2)$ sisa $4$, $(x-3)$ sisa $9$. Sisa dibagi $(x-1)(x-2)(x-3)$.
3. Akar $x^2-5x+3=0$: susun persamaan berakar $\alpha^2,\beta^2$.
4. $x^3+ax^2+bx+c$ berakar $-1,2,3$. Tentukan $a+b+c$.
5. Persamaan berakar kebalikan dari $2x^3-3x^2+4x-1=0$.
6. Jumlah kuadrat akar $x^3-6x^2+11x-6=0$.
7. $f(x)=x^3-70x^2-600x+74{.}000$. Berapa $f(x)$ minimum lokal secara nilai di $x=40$? (hitung $f(40)$ dan bandingkan $f(60)$).
8. Tentukan $m$ agar $x^3-3x^2+mx-1=0$ punya sepasang akar berkebalikan (hasil kali sepasang $=1$).
9. Akar $x^4-10x^2+9=0$. Tentukan keempat akar & jumlahnya (verifikasi Vieta).
10. Susun kubik monik yang akarnya $2$ kali akar $x^3-x^2-4x+4=0$.

```json
{
  "set_id":"06-set-C-sulit","level":"sulit",
  "items":[
    {"id":"C1","type":"short","question":"3 akar aritmetika $x^3-9x^2+23x-15$","answer":"1,3,5","explanation":"tengah=9/3=3; Horner → 1,5."},
    {"id":"C2","type":"short","question":"Sisa dibagi (x-1)(x-2)(x-3); f=1,4,9","answer":"x^2","explanation":"S(x)=x^2 melewati (1,1),(2,4),(3,9)."},
    {"id":"C3","type":"short","question":"Persamaan berakar $α^2,β^2$ dari $x^2-5x+3$","answer":"x^2-19x+9=0","explanation":"jumlah 25-6=19, kali 9."},
    {"id":"C4","type":"short","question":"a+b+c jika akar -1,2,3","answer":"3","explanation":"f(x)=(x+1)(x-2)(x-3)=x^3-4x^2+x+6 → a=-4,b=1,c=6 → a+b+c=3."},
    {"id":"C5","type":"short","question":"Persamaan berakar kebalikan $2x^3-3x^2+4x-1$","answer":"x^3-4x^2+3x-2=0","explanation":"balik urutan koefisien: -1,4,-3,2 → x^3-4x^2+3x-2."},
    {"id":"C6","type":"short","question":"Jumlah kuadrat akar $x^3-6x^2+11x-6$","answer":"14","explanation":"36-2·11=14."},
    {"id":"C7","type":"short","question":"f(40) & f(60) dari saham","answer":"keduanya 2000","explanation":"lihat Bab 02."},
    {"id":"C8","type":"short","question":"m agar $x^3-3x^2+mx-1$ punya sepasang akar berkebalikan","answer":"m=3","explanation":"hasil kali semua akar=1; sepasang berkebalikan → akar ketiga=1; f(1)=0→m=3."},
    {"id":"C9","type":"short","question":"Akar $x^4-10x^2+9$ & jumlah","answer":"±1,±3; jumlah 0","explanation":"(x^2-1)(x^2-9)."},
    {"id":"C10","type":"short","question":"Kubik monik akar 2× akar $x^3-x^2-4x+4$","answer":"x^3-2x^2-16x+32=0","explanation":"x→x/2 lalu monik-kan."}
  ]
}
```
<details><summary><strong>Pembahasan Set C</strong></summary>

1. Akar tengah $=\frac{9}{3}=3$; $f(3)=27-81+69-15=0$ ✔. Horner bagi $(x-3)$: $x^2-6x+5=(x-1)(x-5)$. Akar $1,3,5$ (beda $2$).
2. Tebak $S(x)=x^2$: $S(1)=1,S(2)=4,S(3)=9$ cocok. Sisa $=x^2$.
3. $x^2-5x+3$: $\alpha+\beta=5,\alpha\beta=3$. Akar baru: jumlah $=25-6=19$, kali $=9$. → $x^2-19x+9=0$.
4. $f(x)=(x+1)(x-2)(x-3)=x^3-4x^2+x+6$ → $a=-4,b=1,c=6$; $a+b+c=3$. Cek cepat: $a+b+c=f(1)-1=[(2)(-1)(-2)]-1=4-1=3$. **Jadi $a+b+c=3$.**
5. Balik urutan koefisien $2,-3,4,-1 \to -1,4,-3,2$, yaitu $-x^3+4x^2-3x+2=0$; kali $-1$: $x^3-4x^2+3x-2=0$.
6. $(6)^2-2(11)=14$.
7. $f(40)=2000$ dan $f(60)=2000$ (Bab 02). Keduanya sama.
8. Sepasang akar berkebalikan → hasil kali sepasang $=1$. Hasil kali **semua** akar $=-\frac{-1}{1}=1$, jadi akar ketiga $=1$. Maka $f(1)=0$: $1-3+m-1=0\Rightarrow m=3$.
9. $x^4-10x^2+9=(x^2-1)(x^2-9)$ → akar $\pm1,\pm3$; jumlah $=0=-\frac{0}{1}$ ✔.
10. Substitusi $x\to\frac{x}{2}$ ke $x^3-x^2-4x+4$: $\frac{x^3}{8}-\frac{x^2}{4}-2x+4=0$; kali $8$: $x^3-2x^2-16x+32=0$.
</details>

### 🧠 Set D — 5 Soal HOTS
1. Akar $x^3-6x^2+3x+10=0$: satu akar $=-1$. Tentukan dua lainnya via Vieta (tanpa Horner).
2. $f(x)$ bersisa $2x+1$ saat dibagi $(x^2-1)$. Tentukan $f(1)+f(-1)$.
3. Persamaan monik derajat 4 berakar $1,-1,2,-2$. Tuliskan bentuk bakunya dan jumlah akarnya.
4. Susun kubik berakar $\alpha^2,\beta^2,\gamma^2$ jika $\alpha,\beta,\gamma$ akar $x^3-2x^2+3x-4=0$ (petunjuk: gunakan simetri; cukup jumlah, jumlah pasangan, hasil kali).
5. Fungsi laba $L(x)=x^3-4x^2+x+6$ (juta). Tentukan produksi $x>0$ agar $L(x)=0$ dan tafsirkan.

```json
{
  "set_id":"06-set-D-hots","level":"hots",
  "items":[
    {"id":"D1","type":"short","question":"Dua akar lain jika satu = -1 (x^3-6x^2+3x+10)","answer":"2 dan 5","explanation":"jumlah 6→ q+r=7; hasil kali -10→ qr=10; t^2-7t+10=(t-2)(t-5)."},
    {"id":"D2","type":"short","question":"f(1)+f(-1) jika sisa 2x+1 dibagi (x^2-1)","answer":"2","explanation":"f(1)=3, f(-1)=-1 → jumlah 2."},
    {"id":"D3","type":"short","question":"Kuartik monik akar ±1,±2 & jumlah","answer":"x^4-5x^2+4=0; jumlah 0","explanation":"(x^2-1)(x^2-4)."},
    {"id":"D4","type":"short","question":"Kubik berakar α^2,β^2,γ^2 dari x^3-2x^2+3x-4","answer":"x^3+2x^2-7x-16=0","explanation":"Σα^2=-2, Σα^2β^2=-7, (αβγ)^2=16."},
    {"id":"D5","type":"short","question":"x>0 agar L=x^3-4x^2+x+6=0","answer":"x=2 dan x=3","explanation":"(x+1)(x-2)(x-3)."}
  ]
}
```
<details><summary><strong>Pembahasan Set D</strong></summary>

1. Akar $-1,q,r$. Vieta: jumlah $=6 \Rightarrow q+r=7$; hasil kali $=-\frac{10}{1}=-10 \Rightarrow (-1)qr=-10 \Rightarrow qr=10$. Maka $q,r$ akar $t^2-7t+10=(t-2)(t-5)$ → $2$ dan $5$.
2. Sisa $2x+1$: $f(1)=2(1)+1=3$; $f(-1)=2(-1)+1=-1$. $f(1)+f(-1)=3+(-1)=2$.
3. $(x^2-1)(x^2-4)=x^4-5x^2+4=0$; jumlah akar $=-\frac{0}{1}=0$.
4. $\alpha+\beta+\gamma=2$, $\sum\alpha\beta=3$, $\alpha\beta\gamma=4$.
   - Jumlah akar baru $=\sum\alpha^2=(2)^2-2(3)=-2$.
   - Jumlah pasangan baru $=\sum\alpha^2\beta^2=(\sum\alpha\beta)^2-2\alpha\beta\gamma(\alpha+\beta+\gamma)=9-2(4)(2)=9-16=-7$.
   - Hasil kali baru $=(\alpha\beta\gamma)^2=16$.
   Persamaan: $x^3-(-2)x^2+(-7)x-16=0 \Rightarrow x^3+2x^2-7x-16=0$.
5. $L(-1)=0$ → $(x+1)$ faktor; Horner → $x^2-5x+6=(x-2)(x-3)$. Akar $>0$: $x=2,3$. Tafsir: pada produksi 2 atau 3 unit, laba $=0$ (titik impas).
</details>

### 🏆 Set E — 5 Soal Model TKA (studi kasus penuh)
1. **(TKA #5)** Titik potong sumbu X dari $x^3+3x^2-10x-24$; pilih dari $(-2,0),(-1,0),(3,0),(4,0),(5,0)$.
2. **(TKA #6)** $a+b$ jika $x^4+ax^3+bx^2+x-6$ ÷ $(x^2+x+1)$ sisa $5x-1$.
3. **(TKA #7)** Total volume 10 drum, $V(T)=0{,}05T^3+0{,}4T^2+20T$.
4. **(TKA #8)** Modal $2000$ juta, $f(x)=x^3-70x^2-600x+74{.}000$; nilai kebenaran untuk $30,40,60$ unit.
5. **(Sintesis baru)** Sebuah kotak tanpa tutup dibuat dari karton $10\times10$ dengan memotong persegi sisi $x$ di tiap sudut. Volume $V(x)=x(10-2x)^2$. Untuk $x$ berapa $V=0$, dan mengapa hanya sebagian yang bermakna fisik?

```json
{
  "set_id":"06-set-E-tka","level":"tka",
  "items":[
    {"id":"E1","type":"multi","source":"TKA-2024-no5","question":"Titik potong sumbu X x^3+3x^2-10x-24","options":["(-2,0)","(-1,0)","(3,0)","(4,0)","(5,0)"],"answer":["(-2,0)","(3,0)"],"explanation":"akar -2,-4,3."},
    {"id":"E2","type":"mc","source":"TKA-2024-no6","question":"a+b (sisa 5x-1)","options":["11","5","-1","-5","-7"],"answer":"-1","explanation":"a=2,b=-3."},
    {"id":"E3","type":"mc","source":"TKA-2024-no7","question":"Total 10 drum V(T)","options":["50T^3+40T^2+200T","50T^3+4T^2+200T","5T^3+4T^2+200T","0,5T^3+4T^2+200T","0,5T^3+0,4T^2+200T"],"answer":"0,5T^3+4T^2+200T","explanation":"10×tiap koefisien."},
    {"id":"E4","type":"multi","source":"TKA-2024-no8","question":"Unit mungkin dijual (Benar)","options":["30 unit","40 unit","60 unit"],"answer":["40 unit","60 unit"],"explanation":"f(40)=f(60)=2000; f(30)=20000."},
    {"id":"E5","type":"short","question":"V(x)=x(10-2x)^2=0","answer":"x=0 dan x=5; hanya 0<x<5 bermakna","explanation":"x=0 tak ada potongan; x=5 alas habis."}
  ]
}
```
<details><summary><strong>Pembahasan Set E</strong></summary>

**E1.** Akar $-2,-4,3$ → opsi benar **$(-2,0)$ & $(3,0)$**.

**E2.** $a=2,b=-3 \Rightarrow a+b=-1$ (C).

**E3.** $10\cdot V(T)=0{,}5T^3+4T^2+200T$ (D).

**E4.** $f(30)=20000\neq2000$ (Salah); $f(40)=2000$ (Benar); $f(60)=2000$ (Benar).

**E5.** $V(x)=x(10-2x)^2=0 \Rightarrow x=0$ atau $x=5$. Secara fisik hanya $0<x<5$ bermakna: pada $x=0$ tak ada potongan (kotak tanpa tinggi), pada $x=5$ seluruh alas habis terpotong (lebar $10-2(5)=0$). Ini contoh **menafsir akar ke konteks** — jebakan #6 di Radar.
</details>

---

## 🏆 Tantangan Akhir Bab 6 — Uji Kompetensi

<!-- COMPONENT: Tantangan Akhir Bab
     DEVELOPER: render sebagai sesi soal berwaktu dengan rekap capaian (bintang, poin, waktu terbaik).
     Framing tetap sebagai asesmen/umpan balik belajar, bukan permainan peran. -->
> Kerjakan rangkaian soal berikut dalam mode berwaktu untuk menguji penguasaan Anda atas strategi penyelesaian soal HOTS dan TKA. Perolehan bintang dan poin merupakan umpan balik atas ketepatan serta kecepatan; sistem menyimpan capaian terbaik Anda sebagai catatan kemajuan belajar.

```json
{ "type":"challenge", "id":"06-tantangan", "competency":"K6",
  "title":"Tantangan Akhir Bab 6: Strategi HOTS dan TKA",
  "mode":"timed", "time_limit_sec":210, "shuffle":true,
  "pool":["06-act-alat","06-act-katakunci","06-act-kombinasi","06-act-konteks","06-act-shortcut","06-act-trap","06-set-A-mudah"],
  "scoring":{"per_correct":10,"time_bonus":true},
  "stars":{"3":90,"2":70,"1":50},
  "reward":{"xp":80,"badge":"ahli-strategi"},
  "record":{"track_best_time":true,"track_best_score":true} }
```

---

## 📝 Refleksi

<!-- COMPONENT: Reflection -->
1. Dari 10 cara pintas tersebut, **tiga** mana yang paling ingin Anda hafalkan lebih dahulu? Mengapa?
2. Jebakan mana yang paling sering menjebak Anda? Tuliskan rencana untuk menghindarinya.
3. Setelah membahas empat soal TKA, apa satu perubahan cara berpikir yang Anda rasakan?

---

## ➡️ Persiapan Menuju Sub Materi Berikutnya

Pada bab ini, kita telah mampu **memilih alat**, **menguraikan soal kombinasi**, dan **menghindari jebakan**—inti dari kesiapan menghadapi TKA. Keenam kompetensi (K1–K6) kini telah lengkap.

Pada **Bab 07 — Ringkasan & Bank Soal**, seluruh materi dirangkum menjadi **lembar rumus (cheat sheet)**, **peta konsep akhir**, kumpulan **kesalahan umum & FAQ**, lalu **bank soal bertingkat** dan **simulasi mini TKA** sebagai latihan penutup. Bab ini menjadi sarana untuk memantapkan kesiapan dan mengukur diri.

> Lanjutkan ke **Bab 07**.

<!-- COMPONENT: Summary -->
<!-- Progress bar: 7/8. -->
