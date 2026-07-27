---
id: "07-ringkasan-dan-bank-soal"
slug: "ringkasan-dan-bank-soal"
title: "Ringkasan dan Bank Soal"
order: 7
duration_min: 120
level: "Kelas XI - Kurikulum Merdeka"
track: "TKA Matematika Lanjut"
prerequisites:
  - "06-strategi-hots-dan-tka"
competencies:
  - "K1-K6 (konsolidasi seluruh kompetensi)"
learning_objectives:
  - "Merangkum seluruh materi polinomial dalam satu tempat"
  - "Menghafal cheat sheet rumus & pola penting"
  - "Menguji diri lewat bank soal campur & simulasi mini TKA"
  - "Merefleksikan kesiapan & merencanakan langkah lanjut"
tags: ["ringkasan", "cheat-sheet", "peta-konsep", "faq", "bank-soal", "simulasi-tka", "refleksi"]
components:
  - "Concept Map Full"
  - "Cheat Sheet Card"
  - "FAQ Accordion"
  - "Mixed Quiz"
  - "TKA Simulation Timer"
  - "Reflection"
  - "Activity Matching"
  - "Activity Cloze"
  - "Activity TrueFalse"
  - "Activity Categorize"
  - "Tantangan Akhir Bab"
activities:
  - "07-act-rumus"
  - "07-act-cek"
  - "07-act-faq"
  - "07-act-alat"
challenge: "07-tantangan"
xp_available: 185
katex: true
---

# Bab 07 — Ringkasan dan Bank Soal

<!-- COMPONENT: Concept Map Full
     DEVELOPER: WAJIB dirender sebagai peta konsep interaktif (kartu/diagram bergaya Soft Neo Brutalism)
     yang menggabungkan seluruh bab 01-06 dan dapat diklik menuju tiap bab, BUKAN teks ASCII mentah.
     Blok teks di bawah HANYA rujukan struktur. -->

## 🎯 Tujuan Pembelajaran

Bab penutup ini membantu peserta didik untuk:

1. **Merangkum** seluruh materi 01–06 dalam satu pandangan.
2. **Menghafal** cheat sheet rumus & pola.
3. **Menguji diri** lewat bank soal campur & **simulasi mini TKA** berwaktu.
4. **Merefleksi** kesiapan dan merencanakan langkah berikut.

## 🧩 Kompetensi
- Konsolidasi **K1–K6**.

## 📦 Prasyarat
- Sudah menempuh Bab 01–06 (idealnya).

## ⏱️ Estimasi Waktu Belajar
**±120 menit** (baca ringkasan ±30, bank soal ±50, simulasi ±40).

---

## 🗺️ Peta Konsep Akhir

<!-- COMPONENT: Concept Map Full (lanjutan)
     DEVELOPER: tampilkan sebagai peta konsep interaktif, bukan teks ASCII mentah. -->

```
                       POLINOMIAL (Suku Banyak)
                                │
   ┌───────────────┬────────────┼────────────┬───────────────┐
   │               │            │            │               │
 KONSEP         OPERASI     PEMBAGIAN     TEOREMA         PERSAMAAN
 DASAR          & NILAI                   SISA/FAKTOR     & VIETA
   │               │            │            │               │
 unsur         jumlah        bersusun     sisa=f(k)       jumlah akar
 derajat       kurang        Horner       faktor⟺akar     hasil kali
 jenis         kali          Horner-Kino  akar rasional   susun persamaan
 poli/bukan    nilai/subst.  pilih metode faktorisasi     transformasi
                                │            │               │
                                └──── IDE PEMERSATU ─────────┘
                         nilai = pembagian = sisa = akar
                                     │
                            STRATEGI HOTS & TKA
                       (pilih alat · pola · jebakan)
```

> 💡 **Kalimat yang menyatukan semuanya:** *Menghitung nilai $f(k)$, membagi oleh $(x-k)$, mencari sisa, dan mencari akar adalah satu ide yang dilihat dari empat sisi.*

---

## 📋 Lembar Rumus (Cheat Sheet)

<!-- COMPONENT: Cheat Sheet Card -->
<!-- Kartu ringkas yang bisa dipin/diunduh; tampil sebagai flashcard rumus. -->

### Definisi & Unsur
- Polinomial: $a_nx^n+\dots+a_1x+a_0$, pangkat **bilangan bulat $\ge0$**, $a_n\neq0$.
- Derajat = pangkat tertinggi. Koefisien utama = $a_n$. Konstanta = $a_0=f(0)$.
- **Bukan polinomial:** pangkat negatif/pecahan, variabel di penyebut, atau di dalam akar.

### Operasi
- Jumlah/kurang: gabung suku sejenis (kurang = balik tanda pengurang).
- Kali: distributif; **derajat hasil = jumlah derajat**.
- Identitas: $(a\pm b)^2$, $a^2-b^2=(a-b)(a+b)$, $a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)$.

### Nilai & Cek Instan
- $f(0)=$ konstanta. $f(1)=$ jumlah semua koefisien. $f(-1)=$ jumlah koefisien berselang tanda.

### Pembagian
- Algoritma: $f(x)=P(x)H(x)+S(x)$, derajat $S<$ derajat $P$.
- Horner $(x-k)$: turun–kali–jumlah; angka terakhir $=$ sisa $=f(k)$.
- Pembagi $(ax-b)$: Horner dengan $k=\frac{b}{a}$, lalu **hasil bagi dibagi $a$** (sisa tetap).
- Pembagi kuadrat → sisa $rx+s$.

### Teorema
- **Sisa:** sisa $f\div(x-k)=f(k)$; $f\div(ax-b)=f(\frac{b}{a})$.
- **Faktor:** $(x-k)$ faktor $\iff f(k)=0 \iff k$ akar.
- **Akar Rasional:** kandidat $=\pm\frac{\text{faktor konstanta}}{\text{faktor koef utama}}$.

### Vieta
- Kuadrat $ax^2+bx+c$: $\sum x=-\frac{b}{a}$, $\prod x=\frac{c}{a}$.
- Kubik $ax^3+bx^2+cx+d$: $\sum=-\frac{b}{a}$, $\sum_{\text{pasang}}=\frac{c}{a}$, $\prod=-\frac{d}{a}$.
- Identitas turunan: $x_1^2+x_2^2=(\sum)^2-2\prod$; $\frac1{x_1}+\frac1{x_2}=\frac{\sum}{\prod}$; $(x_1-x_2)^2=(\sum)^2-4\prod$.

### Menyusun / Transformasi
- Dari akar: $f(x)=a\prod(x-r_i)$.
- Akar $+k$ → $x\to x-k$. Akar $\times k$ → $x\to\frac{x}{k}$. Kebalikan akar → **balik urutan koefisien**.

---

<!-- COMPONENT: Activity Matching -->
> **Latihan Interaktif — Menjodohkan.** Pasangkan tiap teorema/besaran dengan pernyataannya.

```json
{ "type":"activity", "widget":"matching", "id":"07-act-rumus", "competency":"K1-K6",
  "prompt":"Jodohkan konsep dengan rumus/pernyataannya",
  "pairs":[
    ["Teorema Sisa","sisa f dibagi (x-k) sama dengan f(k)"],
    ["Teorema Faktor","(x-k) faktor jika dan hanya jika f(k)=0"],
    ["Vieta: jumlah akar kuadrat","-b/a"],
    ["Vieta: hasil kali akar kuadrat","c/a"]
  ],
  "reward":{"xp":20} }
```

## 🧠 Rumus-Rumus Penting

$$f(x)=P(x)\,H(x)+S(x), \quad \deg S<\deg P$$
$$\text{Sisa } f\div(x-k)=f(k)$$
$$(x-k)\text{ faktor}\iff f(k)=0\iff k\text{ akar}$$
$$x_1+x_2=-\tfrac{b}{a},\qquad x_1x_2=\tfrac{c}{a}$$
$$p+q+r=-\tfrac{b}{a},\quad pq+qr+rp=\tfrac{c}{a},\quad pqr=-\tfrac{d}{a}$$

---

<!-- COMPONENT: Activity Cloze -->
> **Latihan Interaktif — Melengkapi.** Lengkapi tiga pemeriksaan instan berikut.

```json
{ "type":"activity", "widget":"cloze", "id":"07-act-cek", "competency":"K1-K6",
  "prompt":"Lengkapi pemeriksaan instan",
  "template":"f(0) sama dengan {{0}}; f(1) sama dengan {{1}} seluruh koefisien; sisa f dibagi (x-k) sama dengan f({{2}}).",
  "answers":["konstanta","jumlah","k"],
  "reward":{"xp":20} }
```

## ⚠️ Kesalahan Umum (Kompilasi Seluruh Bab)

1. Pangkat pecahan/negatif dikira polinomial.
2. Lupa tanda negatif pada koefisien.
3. Tak menulis koefisien nol suku hilang di Horner.
4. Salah tanda $k$: $(x+3)\to k=-3$.
5. Membagi sisa dengan $a$ pada pembagi $(ax-b)$.
6. "Pilih semua benar" berhenti di satu akar.
7. Ekspresi simetris akar → malah mencari akar.
8. Lupa membagi $a$ pada Vieta tak monik.
9. Menerima solusi konteks yang mustahil (unit/panjang negatif).
10. Salah arah substitusi transformasi akar.

---

## ❓ FAQ

<!-- COMPONENT: FAQ Accordion -->

**Q: Kapan pakai Horner, kapan bersusun?**
A: Pembagi linear $(x-k)$ atau $(ax-b)$ → Horner (tercepat). Pembagi kuadrat tak terfaktor atau derajat $\ge3$ → bersusun. Kuadrat terfaktor → Horner bertingkat.

**Q: Apabila hanya diminta sisa, apakah harus membagi?**
A: Tidak perlu. Gunakan Teorema Sisa: $f(k)$. Ini cara pintas yang paling sering digunakan.

**Q: Bagaimana cara mengetahui sebuah bentuk merupakan polinomial atau bukan?**
A: Tuliskan tiap suku sebagai $x^{\text{pangkat}}$. Apabila terdapat pangkat negatif/pecahan, variabel di penyebut, atau variabel di dalam akar, bentuk tersebut bukan polinomial.

**Q: Apakah polinomial berderajat $n$ pasti memiliki $n$ akar?**
A: **Paling banyak** $n$ akar. Sebagian dapat kembar atau kompleks (akar kompleks selalu berpasangan apabila koefisiennya real).

**Q: Menggunakan Vieta atau faktorisasi?**
A: Apabila yang ditanyakan jumlah/hasil kali/ekspresi simetris akar, gunakan Vieta (tanpa mencari akar). Apabila yang ditanyakan akar tertentu atau titik potong, gunakan faktorisasi.

**Q: Sisa saat dibagi kuadrat bentuknya apa?**
A: $rx+s$ (derajat $\le1$). Cari $r,s$ lewat substitusi akar pembagi atau menyamakan koefisien.

**Q: Bagaimana mencegah kesalahan hitung yang sering terjadi?**
A: Gunakan pemeriksaan instan: $f(0)$, $f(1)$, dan verifikasi Vieta. Hanya perlu beberapa detik, namun mencegah kehilangan banyak poin.

---

<!-- COMPONENT: Activity TrueFalse -->
> **Latihan Interaktif — Benar/Salah.** Tentukan nilai kebenaran tiap pernyataan berikut.

```json
{ "type":"activity", "widget":"truefalse", "id":"07-act-faq", "competency":"K1-K6",
  "prompt":"Benar atau salah?",
  "statements":[
    {"s":"Apabila hanya diminta sisa pembagian oleh (x-k), cukup hitung f(k).","a":true,"why":"Teorema Sisa."},
    {"s":"Polinomial berderajat n selalu memiliki tepat n akar real.","a":false,"why":"Paling banyak n; sebagian dapat kompleks atau kembar."},
    {"s":"Sisa pembagian oleh polinomial kuadrat berbentuk rx+s.","a":true,"why":"Derajat sisa lebih kecil dari 2."},
    {"s":"Bentuk dengan variabel di penyebut termasuk polinomial.","a":false,"why":"Melanggar aturan pangkat bilangan bulat tak negatif."}
  ],
  "reward":{"xp":20} }
```

## 📝 Bank Soal Bertingkat (Campur Semua Bab)

<!-- COMPONENT: Mixed Quiz -->

### 🟢 Set A — 10 Soal Mudah
1. Derajat $x^4-2x+1$.
2. Sisa $x^2+x+1$ ÷ $(x-1)$.
3. Jumlah akar $x^2-9x+20=0$.
4. Apakah $\frac{3}{x}+2$ polinomial?
5. $10\cdot(0{,}05T^3+0{,}4T^2+20T)=?$
6. Hasil kali akar $x^2-5x+6=0$.
7. $f(0)$ dari $x^3-x+4$.
8. Titik potong sumbu X $x^2-1$.
9. Apakah $(x-1)$ faktor $x^3-1$?
10. Persamaan berakar $0,3$.

```json
{
  "set_id":"07-bank-A-mudah","level":"mudah",
  "items":[
    {"id":"A1","type":"short","question":"Derajat $x^4-2x+1$","answer":"4","explanation":"pangkat tertinggi 4."},
    {"id":"A2","type":"short","question":"Sisa $x^2+x+1 \\div (x-1)$","answer":"3","explanation":"f(1)=3."},
    {"id":"A3","type":"short","question":"Jumlah akar $x^2-9x+20$","answer":"9","explanation":"-b/a=9."},
    {"id":"A4","type":"mc","question":"$3/x+2$ polinomial?","options":["Ya","Tidak"],"answer":"Tidak","explanation":"3/x=3x^{-1}."},
    {"id":"A5","type":"short","question":"$10(0{,}05T^3+0{,}4T^2+20T)$","answer":"0,5T^3+4T^2+200T","explanation":"kali 10 tiap koef."},
    {"id":"A6","type":"short","question":"Hasil kali akar $x^2-5x+6$","answer":"6","explanation":"c/a=6."},
    {"id":"A7","type":"short","question":"f(0) dari $x^3-x+4$","answer":"4","explanation":"konstanta."},
    {"id":"A8","type":"short","question":"Titik potong X $x^2-1$","answer":"(1,0),(-1,0)","explanation":"akar ±1."},
    {"id":"A9","type":"mc","question":"(x-1) faktor $x^3-1$?","options":["Ya","Tidak"],"answer":"Ya","explanation":"f(1)=0."},
    {"id":"A10","type":"short","question":"Persamaan berakar 0,3","answer":"x^2-3x=0","explanation":"jumlah 3, kali 0."}
  ]
}
```
<details><summary><strong>Pembahasan Set A</strong></summary>

1. $4$. 2. $3$. 3. $9$. 4. Tidak. 5. $0{,}5T^3+4T^2+200T$. 6. $6$. 7. $4$. 8. $(\pm1,0)$. 9. Ya. 10. $x^2-3x=0$.
</details>

### 🟡 Set B — 10 Soal Sedang
1. Sisa $2x^3-x+1$ ÷ $(x+1)$.
2. Faktorkan $x^3-4x^2+x+6$.
3. $\alpha^2+\beta^2$ dari $x^2-4x+2=0$.
4. $a$ agar $(x-2)$ faktor $x^3-3x^2+ax-2$.
5. Bagi $x^3+2x^2-5x+1$ oleh $(x-2)$ (Horner).
6. Susun persamaan berakar $-2,5$.
7. Sisa $x^{2026}$ ÷ $(x-1)$.
8. Jumlah akar $3x^2-12x+7=0$.
9. Sisa $x^4-3x^2+2$ ÷ $(x^2-1)$.
10. Persamaan berakar kebalikan dari $x^2-5x+2=0$.

```json
{
  "set_id":"07-bank-B-sedang","level":"sedang",
  "items":[
    {"id":"B1","type":"short","question":"Sisa $2x^3-x+1 \\div (x+1)$","answer":"0","explanation":"f(-1)=-2+1+1=0."},
    {"id":"B2","type":"short","question":"Faktorkan $x^3-4x^2+x+6$","answer":"(x+1)(x-2)(x-3)","explanation":"akar -1,2,3."},
    {"id":"B3","type":"short","question":"$α^2+β^2$ dari $x^2-4x+2$","answer":"12","explanation":"16-4=12."},
    {"id":"B4","type":"short","question":"a agar (x-2) faktor $x^3-3x^2+ax-2$","answer":"3","explanation":"f(2)=8-12+2a-2=0→a=3."},
    {"id":"B5","type":"short","question":"$x^3+2x^2-5x+1 \\div (x-2)$","answer":"H=x^2+4x+3, S=7","explanation":"Horner k=2."},
    {"id":"B6","type":"short","question":"Persamaan berakar -2,5","answer":"x^2-3x-10=0","explanation":"jumlah 3, kali -10."},
    {"id":"B7","type":"short","question":"Sisa $x^{2026} \\div (x-1)$","answer":"1","explanation":"f(1)=1."},
    {"id":"B8","type":"short","question":"Jumlah akar $3x^2-12x+7$","answer":"4","explanation":"12/3=4."},
    {"id":"B9","type":"short","question":"Sisa $x^4-3x^2+2 \\div (x^2-1)$","answer":"0","explanation":"(x^2-1)(x^2-2)."},
    {"id":"B10","type":"short","question":"Persamaan berakar kebalikan $x^2-5x+2$","answer":"2x^2-5x+1=0","explanation":"balik koefisien."}
  ]
}
```
<details><summary><strong>Pembahasan Set B</strong></summary>

1. $f(-1)=2(-1)-(-1)+1=-2+1+1=0$.
2. $f(-1)=-1-4-1+6=0$; Horner → $x^2-5x+6=(x-2)(x-3)$; jadi $(x+1)(x-2)(x-3)$.
3. $(4)^2-2(2)=12$.
4. $f(2)=8-12+2a-2=2a-6=0\Rightarrow a=3$.
5. $k=2$: $1;\ 2+2=4;\ -5+8=3;\ 1+6=7$. $H=x^2+4x+3,\ S=7$.
6. Jumlah $3$, kali $-10$ → $x^2-3x-10=0$.
7. $f(1)=1$.
8. $\frac{12}{3}=4$.
9. $x^4-3x^2+2=(x^2-1)(x^2-2)$ → sisa $0$.
10. Balik koefisien $1,-5,2\to2,-5,1$: $2x^2-5x+1=0$.
</details>

### 🔴 Set C — 10 Soal Sulit
1. Tiga akar $x^3-6x^2+11x-6=0$ — hitung $\sum\frac{1}{\text{akar}}$.
2. $f$ dibagi $(x-1)$ sisa $2$, $(x-2)$ sisa $5$, $(x-3)$ sisa $10$. Sisa dibagi $(x-1)(x-2)(x-3)$.
3. Faktorkan $2x^3+x^2-13x+6$.
4. Susun persamaan berakar $\alpha^2,\beta^2$ dari $x^2-6x+4=0$.
5. $m$ agar $x^3-70x^2-600x+m=0$ punya akar $40$.
6. Jumlah kuadrat akar $x^4-5x^2+4=0$.
7. Persamaan berakar $2$ lebih dari akar $x^3-3x^2+2x=0$.
8. $x^4+ax^3+bx^2+x-6 \div (x^2+x+1)$ sisa $5x-1$; $a\cdot b$.
9. Sisa $x^{100}+x+1$ ÷ $(x^2-1)$.
10. Kubik monik berakar barisan geometri, akar tengah $3$, hasil kali $27$. Tuliskan satu kemungkinan persamaannya.

```json
{
  "set_id":"07-bank-C-sulit","level":"sulit",
  "items":[
    {"id":"C1","type":"short","question":"$Σ1/akar$ dari $x^3-6x^2+11x-6$","answer":"11/6","explanation":"(pq+qr+rp)/(pqr)=11/6."},
    {"id":"C2","type":"short","question":"Sisa dibagi (x-1)(x-2)(x-3); f=2,5,10","answer":"x^2+1","explanation":"melewati (1,2),(2,5),(3,10)."},
    {"id":"C3","type":"short","question":"Faktorkan $2x^3+x^2-13x+6$","answer":"(x-2)(2x-1)(x+3)","explanation":"akar 2,1/2,-3."},
    {"id":"C4","type":"short","question":"Persamaan berakar α^2,β^2 dari $x^2-6x+4$","answer":"x^2-28x+16=0","explanation":"jumlah 36-8=28, kali 16."},
    {"id":"C5","type":"short","question":"m agar $x^3-70x^2-600x+m=0$ berakar 40","answer":"72000","explanation":"substitusi x=40."},
    {"id":"C6","type":"short","question":"Jumlah kuadrat akar $x^4-5x^2+4$","answer":"10","explanation":"$(Σ)^2$-2Σpasang$=0-2(-5)=10$."},
    {"id":"C7","type":"short","question":"Persamaan berakar +2 dari $x^3-3x^2+2x$","answer":"x^3-9x^2+26x-24=0","explanation":"x→x-2."},
    {"id":"C8","type":"short","question":"a·b jika sisa 5x-1","answer":"-6","explanation":"a=2,b=-3 → ab=-6."},
    {"id":"C9","type":"short","question":"Sisa $x^{100}+x+1 \\div (x^2-1)$","answer":"x+2","explanation":"x^{100}≡1 → 1+x+1."},
    {"id":"C10","type":"short","question":"Kubik geometri, tengah 3, hasil kali 27","answer":"contoh: $x^3-13x^2+39x-27=0$ (akar 1,3,9)","explanation":"tengah=∛27=3; ambil rasio 3 → akar 1,3,9."}
  ]
}
```
<details><summary><strong>Pembahasan Set C</strong></summary>

1. $\frac{pq+qr+rp}{pqr}=\frac{11}{6}$.
2. Tebak $S(x)=x^2+1$: $S(1)=2,S(2)=5,S(3)=10$ cocok. Sisa $x^2+1$.
3. Kandidat $\pm1,\pm2,\pm3,\pm6,\pm\tfrac12,\pm\tfrac32$. $f(2)=16+4-26+6=0$→akar $2$. Horner $(k=2)$ pada $2,1,-13,6$: $2,5,-3\,|\,0$ → $2x^2+5x-3=(2x-1)(x+3)$. Jadi $(x-2)(2x-1)(x+3)$.
4. $x^2-6x+4$: $\sum=6,\prod=4$. Akar baru: jumlah $=36-8=28$, kali $=16$. → $x^2-28x+16=0$.
5. Akar $40$ → $f(40)=0$: $64000-112000-24000+m=0\Rightarrow m=72000$.
6. $x^4-5x^2+4$: $\sum$akar$=0$, $\sum$pasang$=-5$. $\sum\text{akar}^2=(0)^2-2(-5)=10$.
7. $x^3-3x^2+2x$ berakar $0,1,2$. Substitusi $x\to x-2$: $(x-2)^3-3(x-2)^2+2(x-2)$. Jabarkan: $(x^3-6x^2+12x-8)-3(x^2-4x+4)+(2x-4)=x^3-9x^2+26x-24=0$. (Akar baru $2,3,4$ ✔.)
8. $a=2,b=-3$ → $a\cdot b=-6$.
9. $x^{100}=(x^2)^{50}\equiv1$; jadi $\equiv1+x+1=x+2$.
10. Geometri: $\frac{a}{r},a,ar$; tengah $a=3$; hasil kali $a^3=27$ ✔. Contoh $r=3$: akar $1,3,9$ → $f(x)=(x-1)(x-3)(x-9)=x^3-13x^2+39x-27=0$.
</details>

### 🧠 Set D — 5 Soal HOTS
1. Akar $x^3-2x^2-x+2=0$: buktikan membentuk himpunan $\{-1,1,2\}$ lalu hitung $\sum\text{akar}^3$.
2. $f(x)$ berderajat 3, $f(1)=f(2)=f(3)=0$, $f(0)=6$. Tentukan $f(x)$.
3. Jika $\alpha,\beta,\gamma$ akar $x^3+px+q=0$, tunjukkan $\alpha^2+\beta^2+\gamma^2=-2p$.
4. Persamaan $x^3-70x^2-600x+72000=0$ (saham). Hitung $\frac1{40}+\frac1{60}+\frac1{-30}$ lewat Vieta & verifikasi.
5. Susun kubik berakar $\alpha+\beta,\beta+\gamma,\gamma+\alpha$ jika $\alpha,\beta,\gamma$ akar $x^3-6x^2+11x-6=0$.

```json
{
  "set_id":"07-bank-D-hots","level":"hots",
  "items":[
    {"id":"D1","type":"short","question":"$Σakar^3$ dari akar {-1,1,2}","answer":"8","explanation":"-1+1+8=8."},
    {"id":"D2","type":"short","question":"f derajat 3, f(1)=f(2)=f(3)=0, f(0)=6","answer":"-(x-1)(x-2)(x-3)","explanation":"a·(-1)(-2)(-3)=6→a=-1."},
    {"id":"D3","type":"proof","question":"Buktikan Σα^2=-2p untuk $x^3+px+q$","answer":"(Σα)^2-2Σαβ=0-2p","explanation":"Σα=0, Σαβ=p."},
    {"id":"D4","type":"short","question":"$1/40+1/60+1/(-30)$ via Vieta","answer":"1/120","explanation":"Σpasang/hasilkali=-600/-72000=1/120."},
    {"id":"D5","type":"short","question":"Kubik berakar $α+β,β+γ,γ+α$ dari $x^3-6x^2+11x-6$","answer":"x^3-12x^2+47x-60=0","explanation":"akar 5,4,3 (yaitu 6-akar)."}
  ]
}
```
<details><summary><strong>Pembahasan Set D</strong></summary>

1. $f(x)=(x+1)(x-1)(x-2)$ (cek: $f(1)=0$, dst). Akar $-1,1,2$. $\sum\text{akar}^3=(-1)^3+1^3+2^3=-1+1+8=8$.
2. $f(x)=a(x-1)(x-2)(x-3)$; $f(0)=a(-1)(-2)(-3)=-6a=6\Rightarrow a=-1$. Jadi $f(x)=-(x-1)(x-2)(x-3)$.
3. Untuk $x^3+px+q$: $\sum\alpha=0$ (tak ada suku $x^2$), $\sum\alpha\beta=p$. $\sum\alpha^2=(\sum\alpha)^2-2\sum\alpha\beta=0-2p=-2p$. ∎
4. $\frac1{40}+\frac1{60}+\frac1{-30}=\frac{\sum\text{pasang}}{\prod}=\frac{-600}{-72000}=\frac1{120}$. Verifikasi manual: $\frac{3}{120}+\frac{2}{120}-\frac{4}{120}=\frac{1}{120}$ ✔.
5. Karena $\alpha+\beta+\gamma=6$, tiap akar baru $=6-(\text{akar lama})$. Akar lama $1,2,3$ → akar baru $5,4,3$. Persamaan: $(x-3)(x-4)(x-5)=x^3-12x^2+47x-60=0$.
</details>

---

<!-- COMPONENT: Activity Categorize -->
> **Latihan Interaktif — Kategorisasi.** Kelompokkan tiap tugas berdasarkan alat yang paling tepat.

```json
{ "type":"activity", "widget":"categorize", "id":"07-act-alat", "competency":"K1-K6",
  "prompt":"Kelompokkan tiap tugas ke alat yang tepat",
  "categories":["Teorema Sisa/Faktor","Teorema Vieta"],
  "items":[
    ["Menentukan sisa f(x) dibagi (x-3)","Teorema Sisa/Faktor"],
    ["Menentukan jumlah akar persamaan","Teorema Vieta"],
    ["Memeriksa apakah (x-2) faktor","Teorema Sisa/Faktor"],
    ["Menghitung hasil kali akar","Teorema Vieta"],
    ["Memeriksa apakah f(k)=0","Teorema Sisa/Faktor"],
    ["Menghitung $x1^2+x2^2$ dari akar","Teorema Vieta"]
  ],
  "reward":{"xp":25} }
```

## ⏱️ Simulasi Mini TKA (Paket Latihan Berwaktu)

<!-- COMPONENT: TKA Simulation Timer -->
<!-- Timer 30 menit, 15 soal, auto-skor dari blok JSON. Tampilkan analisis per kompetensi (K1-K6) di akhir. -->

> **Petunjuk:** 15 soal, target **30 menit**. Kerjakan tanpa melihat pembahasan. Termasuk keempat soal TKA asli (#5–#8) + soal setara. Kunci di akhir.

**Bagian I — Pilihan Ganda**

1. Derajat dan koefisien utama $V(T)=0{,}05T^3+0{,}4T^2+20T$ berturut-turut adalah ….
2. Total penambahan volume **10 drum** $V(T)=0{,}05T^3+0{,}4T^2+20T$ adalah …. *(TKA #7)*
3. $x^4+ax^3+bx^2+x-6$ dibagi $x^2+x+1$ bersisa $5x-1$. Nilai $a+b$ adalah …. *(TKA #6)*
4. Sisa $x^3-2x^2+4x-1$ dibagi $(x-2)$ adalah ….
5. Jumlah akar $2x^2-8x+6=0$ adalah ….
6. Salah satu faktor $x^3-6x^2+11x-6$ adalah ….
7. Banyak titik potong sumbu X dari $x^3-3x^2+2x$ adalah ….

**Bagian II — Pilih Semua yang Benar**

8. Titik potong sumbu X grafik $f(x)=x^3+3x^2-10x-24$ adalah …. *(TKA #5)*
   (a) $(-2,0)$ (b) $(-1,0)$ (c) $(3,0)$ (d) $(4,0)$ (e) $(5,0)$

9. Untuk modal $2000$ juta dan $f(x)=x^3-70x^2-600x+74{.}000$, penjualan yang **mungkin** adalah …. *(TKA #8)*
   (a) 30 unit (b) 40 unit (c) 60 unit

**Bagian III — Isian Singkat**

10. Hasil kali semua akar $x^3-2x^2-5x+6=0$.
11. Sisa $x^{50}-1$ dibagi $(x+1)$.
12. Nilai $k$ agar $(x-1)$ faktor $x^3-kx+2$.
13. $\alpha^2+\beta^2$ jika $\alpha,\beta$ akar $x^2-5x+3=0$.
14. Persamaan kuadrat berakar $1$ lebih dari akar $x^2-4x+3=0$.
15. Sisa $f(x)$ dibagi $(x-1)(x+1)$ jika $f(1)=4$ dan $f(-1)=0$.

```json
{
  "set_id":"07-simulasi-tka","level":"tka","time_limit_min":30,
  "items":[
    {"id":"Q1","type":"mc","competency":"K1","question":"Derajat & koef utama $V(T)=0{,}05T^3+0{,}4T^2+20T$","options":["3 dan 0,05","3 dan 0,4","2 dan 0,4","3 dan 20"],"answer":"3 dan 0,05","explanation":"pangkat tertinggi 3, koef 0,05."},
    {"id":"Q2","type":"mc","competency":"K2","source":"TKA-no7","question":"Total 10 drum","options":["50T^3+40T^2+200T","5T^3+4T^2+200T","0,5T^3+4T^2+200T","0,5T^3+0,4T^2+200T"],"answer":"0,5T^3+4T^2+200T","explanation":"10×tiap koefisien."},
    {"id":"Q3","type":"mc","competency":"K3","source":"TKA-no6","question":"a+b jika sisa 5x-1","options":["11","5","-1","-5","-7"],"answer":"-1","explanation":"a=2,b=-3."},
    {"id":"Q4","type":"mc","competency":"K4","question":"Sisa $x^3-2x^2+4x-1 \\div (x-2)$","options":["7","5","3","-1"],"answer":"7","explanation":"f(2)=8-8+8-1=7."},
    {"id":"Q5","type":"mc","competency":"K5","question":"Jumlah akar $2x^2-8x+6$","options":["4","3","8","-4"],"answer":"4","explanation":"-(-8)/2=4."},
    {"id":"Q6","type":"mc","competency":"K4","question":"Salah satu faktor $x^3-6x^2+11x-6$","options":["(x-1)","(x+1)","(x-4)","(x+2)"],"answer":"(x-1)","explanation":"f(1)=0."},
    {"id":"Q7","type":"mc","competency":"K4","question":"Banyak titik potong X $x^3-3x^2+2x$","options":["1","2","3","0"],"answer":"3","explanation":"x(x-1)(x-2): akar 0,1,2."},
    {"id":"Q8","type":"multi","competency":"K4","source":"TKA-no5","question":"Titik potong X $x^3+3x^2-10x-24$","options":["(-2,0)","(-1,0)","(3,0)","(4,0)","(5,0)"],"answer":["(-2,0)","(3,0)"],"explanation":"akar -2,-4,3."},
    {"id":"Q9","type":"multi","competency":"K6","source":"TKA-no8","question":"Penjualan mungkin (modal 2000 juta)","options":["30 unit","40 unit","60 unit"],"answer":["40 unit","60 unit"],"explanation":"f(40)=f(60)=2000."},
    {"id":"Q10","type":"short","competency":"K5","question":"Hasil kali akar $x^3-2x^2-5x+6$","answer":"-6","explanation":"-d/a=-6."},
    {"id":"Q11","type":"short","competency":"K4","question":"Sisa $x^{50}-1 \\div (x+1)$","answer":"0","explanation":"f(-1)=1-1=0."},
    {"id":"Q12","type":"short","competency":"K4","question":"k agar (x-1) faktor $x^3-kx+2$","answer":"3","explanation":"f(1)=1-k+2=0→k=3."},
    {"id":"Q13","type":"short","competency":"K5","question":"$α^2+β^2$ dari $x^2-5x+3$","answer":"19","explanation":"25-6=19."},
    {"id":"Q14","type":"short","competency":"K5","question":"Persamaan berakar +1 dari $x^2-4x+3$","answer":"x^2-6x+8=0","explanation":"x→x-1."},
    {"id":"Q15","type":"short","competency":"K4","question":"Sisa dibagi (x-1)(x+1); f(1)=4,f(-1)=0","answer":"2x+2","explanation":"r+s=4,-r+s=0→r=2,s=2."}
  ]
}
```

<details><summary><strong>🔑 Kunci & Pembahasan Simulasi</strong></summary>

1. **3 dan $0{,}05$** (K1).
2. **$0{,}5T^3+4T^2+200T$** (K2, TKA #7).
3. **$-1$** — $a=2,b=-3$ (K3, TKA #6).
4. $f(2)=8-8+8-1=\mathbf{7}$ (K4).
5. $-\frac{-8}{2}=\mathbf{4}$ (K5).
6. $f(1)=0\Rightarrow$ **$(x-1)$** (K4).
7. $x(x-1)(x-2)$ → **3** titik (K4).
8. Akar $-2,-4,3$ → **$(-2,0)$ & $(3,0)$** (K4, TKA #5).
9. $f(40)=f(60)=2000$; $f(30)=20000$ → **40 & 60 unit** (K6, TKA #8).
10. $-\frac{6}{1}=\mathbf{-6}$ (K5).
11. $f(-1)=1-1=\mathbf{0}$ (K4).
12. $f(1)=1-k+2=0\Rightarrow\mathbf{k=3}$ (K4).
13. $(5)^2-2(3)=\mathbf{19}$ (K5).
14. $x\to x-1$: $x^2-6x+8=0$ (K5).
15. $r+s=4,\ -r+s=0\Rightarrow r=2,s=2$; sisa **$2x+2$** (K4).

**Penilaian:** benar 13–15 → **siap TKA** 🏆; 9–12 → **hampir siap**, ulang bab lemah; ≤8 → ulang materi dari kompetensi yang banyak salah (lihat label `competency` tiap soal).
</details>

---

## 🏆 Tantangan Master — Simulasi TKA Berwaktu

<!-- COMPONENT: Tantangan Akhir Bab
     DEVELOPER: jalankan sebagai sesi berwaktu memakai 15 soal pada set '07-simulasi-tka';
     tampilkan rekap capaian per kompetensi (K1-K6), bintang, poin, dan waktu terbaik.
     Framing sebagai asesmen puncak, bukan permainan peran. -->
> Simulasi Mini TKA di atas dapat dijalankan sebagai **tantangan master berwaktu**. Menyelesaikannya dengan capaian tinggi membuka lencana **Master Polinomial**. Sistem menyimpan capaian terbaik Anda sebagai catatan kemajuan belajar.

```json
{ "type":"challenge", "id":"07-tantangan", "competency":"K1-K6",
  "title":"Simulasi TKA Master: Polinomial",
  "mode":"timed", "time_limit_sec":1800, "shuffle":false,
  "pool":["07-simulasi-tka"],
  "scoring":{"per_correct":10,"time_bonus":true},
  "stars":{"3":90,"2":70,"1":50},
  "reward":{"xp":100,"badge":"master-polinomial"},
  "record":{"track_best_time":true,"track_best_score":true} }
```

---

## 📝 Refleksi Belajar (Penutup)

<!-- COMPONENT: Reflection -->

Selamat, seluruh materi polinomial telah dituntaskan. Sebelum menutup, renungkan hal berikut:

1. **Kompetensi mana (K1–K6)** yang paling Anda kuasai? Mana yang masih perlu diulang?
2. Tuliskan **tiga rumus/cara pintas** yang paling sering membantu Anda.
3. Dari empat soal TKA (#5–#8), mana yang **sebelumnya** paling sulit dan kini terasa mudah?
4. Apa **satu kebiasaan berpikir** baru yang Anda peroleh dari pembelajaran ini (misalnya "baca dahulu apa yang diminta")?
5. Rencana lanjut: kapan Anda akan **mengulang** simulasi ini untuk mengukur kemajuan?

> 🎓 **Pesan penutup:** Polinomial mengajarkan hal yang lebih luas daripada sekadar $x$ dan pangkat—yaitu bahwa **masalah yang rumit selalu dapat diuraikan** menjadi bagian-bagian sederhana yang saling terhubung. Terapkan cara berpikir ini pada berbagai persoalan. Anda telah siap.

<!-- COMPONENT: Summary -->
<!-- Progress bar: 8/8 SELESAI. Tampilkan badge "Master Polinomial" + tombol ulang simulasi. -->
