---
id: "cheat-sheet"
slug: "cheat-sheet"
title: "Cheat Sheet Rumus Polinomial"
type: "reference"
tags: ["cheat-sheet", "rumus", "ringkas"]
katex: true
---

# ⚡ Cheat Sheet Polinomial

<!-- COMPONENT: Cheat Sheet Card -->
<!-- Tampilkan sebagai kartu yang bisa dipin & diunduh. Kelompokkan per warna kategori. -->

Lembar sakti satu halaman. Hafalkan yang bertanda ⭐.

---

## 🧱 Konsep Dasar
- Bentuk umum: $a_nx^n+\dots+a_1x+a_0$, pangkat **bilangan bulat $\ge0$**, $a_n\neq0$.
- Derajat = pangkat tertinggi. Koef pemimpin = $a_n$. Konstanta = $a_0$.
- ⭐ **Bukan polinomial:** pangkat negatif/pecahan, variabel di penyebut, variabel di dalam akar.
- Jenis (suku): monomial (1), binomial (2), trinomial (3).
- Jenis (derajat): konstan (0), linear (1), kuadrat (2), kubik (3), kuartik (4).

## ➕ Operasi
- Jumlah/kurang: gabung suku sejenis (kurang → **balik tanda pengurang**).
- ⭐ Kali: distributif; **derajat hasil = jumlah derajat**.
- Identitas:
$$(a\pm b)^2=a^2\pm2ab+b^2$$
$$a^2-b^2=(a-b)(a+b)$$
$$(a\pm b)^3=a^3\pm3a^2b+3ab^2\pm b^3$$
$$a^3\pm b^3=(a\pm b)(a^2\mp ab+b^2)$$

## 🎯 Cek Instan (hemat waktu!)
- ⭐ $f(0)=$ konstanta.
- ⭐ $f(1)=$ jumlah semua koefisien.
- $f(-1)=$ jumlah koefisien berselang tanda.

## ➗ Pembagian
- ⭐ Algoritma: $f(x)=P(x)H(x)+S(x)$, $\deg S<\deg P$.
- Horner $(x-k)$: **turun–kali–jumlah**; angka terakhir $=$ sisa $=f(k)$.
- $(ax-b)$: Horner $k=\frac{b}{a}$; **hasil bagi ÷ $a$**, sisa **tetap**.
- Pembagi kuadrat → sisa berbentuk $rx+s$.
- Suku hilang → tulis koefisien **0**.

## 📐 Teorema
- ⭐ **Sisa:** sisa $f\div(x-k)=f(k)$; $f\div(ax-b)=f\!\left(\tfrac{b}{a}\right)$.
- ⭐ **Faktor:** $(x-k)$ faktor $\iff f(k)=0 \iff k$ akar.
- **Akar Rasional:** kandidat $=\pm\dfrac{\text{faktor konstanta}}{\text{faktor koef pemimpin}}$.
- Faktorisasi: cari akar → Horner → ulangi.

## 🔗 Vieta
Kuadrat $ax^2+bx+c=0$:
$$x_1+x_2=-\frac{b}{a},\qquad x_1x_2=\frac{c}{a}$$
Kubik $ax^3+bx^2+cx+d=0$:
$$\sum x=-\frac{b}{a},\quad \sum_{\text{pasang}}xy=\frac{c}{a},\quad \prod x=-\frac{d}{a}$$
Kuartik $ax^4+bx^3+cx^2+dx+e=0$:
$$\sum x=-\tfrac{b}{a},\ \sum xy=\tfrac{c}{a},\ \sum xyz=-\tfrac{d}{a},\ \prod x=\tfrac{e}{a}$$
Identitas turunan:
$$x_1^2+x_2^2=(\textstyle\sum)^2-2\prod,\quad \frac1{x_1}+\frac1{x_2}=\frac{\sum}{\prod}$$
$$x_1^3+x_2^3=(\textstyle\sum)^3-3\prod(\textstyle\sum),\quad (x_1-x_2)^2=(\textstyle\sum)^2-4\prod$$

## 🏗️ Menyusun & Transformasi Akar
- Dari akar: $f(x)=a\prod(x-r_i)$ (monik → $a=1$).
- Akar $+k$ → substitusi $x\to x-k$.
- Akar $\times k$ → substitusi $x\to \dfrac{x}{k}$.
- ⭐ Kebalikan akar → **balik urutan koefisien**.
- Akar $\times(-1)$ → $x\to -x$ (ganti tanda suku pangkat ganjil).
- 3 akar aritmetika → tengah $=-\dfrac{b}{3a}$.
- 3 akar geometri → tengah $=\sqrt[3]{\text{hasil kali}}$.

## 🧭 Pilih Metode (yang diminta → alat)
| Diminta | Alat tercepat |
|---------|---------------|
| Sisa oleh $(x-k)$ | $f(k)$ |
| Sisa oleh $(ax-b)$ | $f(\tfrac{b}{a})$ |
| Sisa oleh kuadrat | sistem dari akar pembagi → $rx+s$ |
| Hasil bagi + sisa, pembagi linear | Horner |
| Akar / titik potong X | faktorisasi (akar rasional + Horner) |
| Jumlah/hasil kali/ekspresi simetris akar | Vieta |
| Menyusun dari akar/syarat | $\prod(x-r_i)$ / substitusi |
| Nilai / konteks | substitusi |

## 🚫 Jebakan Teratas
1. $(x+3)\Rightarrow k=-3$ (tanda berlawanan).
2. Lupa koefisien 0 di Horner.
3. Membagi **sisa** dengan $a$ (jangan — hanya hasil bagi).
4. "Pilih semua benar" berhenti di satu akar.
5. Vieta tak monik lupa bagi $a$.
6. Terima solusi konteks mustahil (unit negatif).

## 🏆 Empat Soal TKA (rujukan cepat)
- **#5** $x^3+3x^2-10x-24$ → akar $-2,-4,3$ → titik potong $(-2,0),(3,0)$.
- **#6** $x^4+ax^3+bx^2+x-6 \div (x^2+x+1)$ sisa $5x-1$ → $a=2,b=-3$, $a+b=-1$.
- **#7** $10\cdot(0{,}05T^3+0{,}4T^2+20T)=0{,}5T^3+4T^2+200T$ (D).
- **#8** $f(x)=2000 \Rightarrow$ akar $40,60,-30$ → **40 & 60 mungkin**, 30 tidak.
