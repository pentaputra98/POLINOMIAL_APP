---
id: "00-intro"
slug: "pengantar-polinomial"
title: "Pengantar Pembelajaran Polinomial"
order: 0
duration_min: 25
level: "Kelas XI - Kurikulum Merdeka"
track: "TKA Matematika Lanjut"
prerequisites:
  - "Operasi aljabar dasar (suku, koefisien, variabel)"
  - "Perkalian bentuk aljabar / distributif"
  - "Persamaan kuadrat & pemfaktoran dasar"
competencies:
  - "Mengenali peta besar materi polinomial"
  - "Mengetahui target kompetensi akhir & alur belajar"
  - "Mengukur kesiapan awal melalui tes prasyarat"
tags: ["intro", "peta-konsep", "motivasi", "prasyarat", "cara-belajar"]
components:
  - "Hero"
  - "Concept Map Interactive"
  - "Diagnostic Quiz"
  - "Progress Onboarding"
  - "Interactive Example"
  - "Reflection"
quiz_sets:
  - "00-diagnostik"
katex: true
---

<!-- COMPONENT: Hero -->
<!-- Judul besar + subjudul + tombol "Mulai Belajar". Latar Soft Neo Brutalism: blok warna solid, border tebal 2-3px, shadow keras (offset, tanpa blur). -->

# Selamat Datang di Dunia Polinomial 🎓

> "Dengan kemampuan menjumlahkan, mengalikan, dan sedikit membagi, Anda telah memiliki seluruh bekal untuk menguasai bab ini. Selebihnya adalah persoalan **cara berpikir**."

Halaman ini merupakan **pengantar** sebelum memasuki materi. Ibarat membaca peta sebelum memulai perjalanan, di sini Anda akan mengetahui **tujuan**, **jalur yang ditempuh**, dan **bekal yang telah dimiliki**.

Bacalah dengan saksama. Tidak ada rumus rumit di sini—hanya gambaran besar agar seluruh materi berikutnya terasa saling terhubung, bukan bagian-bagian yang berdiri sendiri.

---

## 🎯 Tujuan Pembelajaran

Setelah menyelesaikan halaman pengantar ini, peserta didik diharapkan mampu:

1. Menjelaskan **apa itu polinomial** secara intuitif (secara formal dibahas pada Bab 01).
2. Melihat **gambaran besar** seluruh materi dan keterhubungan tiap bagiannya.
3. Mengetahui **kompetensi akhir** yang perlu dikuasai untuk TKA Matematika Lanjut.
4. Memastikan **prasyarat** telah terpenuhi melalui tes diagnostik singkat.
5. Memahami **cara menggunakan aplikasi** ini agar proses belajar berlangsung efisien.

---

## 🧭 Kompetensi yang Akan Dikuasai

Di akhir seluruh rangkaian (Bab 00 → 07), peserta didik ditargetkan mampu:

| Kode | Kompetensi | Level |
|------|-----------|-------|
| K1 | Mengidentifikasi unsur & jenis polinomial | Dasar |
| K2 | Melakukan operasi & menghitung nilai polinomial | Dasar |
| K3 | Membagi polinomial (bersusun, Horner, Horner-Kino) | Menengah |
| K4 | Menerapkan Teorema Sisa & Teorema Faktor | Menengah |
| K5 | Menyelesaikan persamaan polinomial & Teorema Vieta | Menengah–Lanjut |
| K6 | Menyelesaikan soal HOTS, kontekstual, & model TKA | Lanjut |

> **Target akhir:** mampu mengerjakan soal TKA Matematika Lanjut bertipe polinomial **dengan percaya diri dan cepat**, bukan sekadar menghafal rumus.

---

## 📦 Prasyarat — Bekal yang Perlu Dimiliki

Materi ini **tidak** menuntut banyak. Cukup menguasai tiga hal berikut:

**1. Bahasa aljabar dasar.** Memahami bahwa pada $3x^2$, angka $3$ adalah **koefisien**, huruf $x$ adalah **variabel**, dan $2$ adalah **pangkat**.

**2. Perkalian bentuk aljabar (sifat distributif).** Mampu menjabarkan:
$$(x+2)(x+3) = x^2 + 5x + 6$$

**3. Persamaan kuadrat & pemfaktoran.** Mengingat bahwa $x^2 - 5x + 6 = 0$ dapat difaktorkan menjadi $(x-2)(x-3)=0$, sehingga $x=2$ atau $x=3$.

Apabila ketiga hal ini terasa asing, tidak menjadi masalah—materi akan mengingatkan kembali seperlunya di tiap bab. Namun, untuk mengukur kesiapan, kerjakan **Tes Diagnostik** di bawah.

---

## 🗺️ Peta Konsep Keseluruhan

<!-- COMPONENT: Concept Map Interactive
     DEVELOPER: WAJIB dirender sebagai node-graph interaktif yang dapat diklik (kartu bergaya
     Soft Neo Brutalism, garis penghubung tebal), BUKAN menyalin blok teks ASCII apa adanya.
     Tiap simpul menautkan ke bab terkait; simpul "terkunci" hingga prasyaratnya selesai
     (dibaca dari progres Local Storage). Blok teks/ASCII di bawah HANYA rujukan struktur
     dan TIDAK boleh ditampilkan sebagai teks mentah kepada pengguna. -->

Polinomial dapat diibaratkan sebuah **pohon**: akarnya adalah konsep dasar, batangnya operasi, dan cabang-cabangnya adalah teorema serta aplikasi.

```
                        ┌─────────────────────────────┐
                        │   POLINOMIAL (Suku Banyak)  │
                        └──────────────┬──────────────┘
                                       │
        ┌──────────────┬───────────────┼───────────────┬──────────────┐
        │              │               │               │              │
   ┌────▼────┐   ┌─────▼─────┐   ┌─────▼─────┐   ┌─────▼─────┐  ┌─────▼─────┐
   │ 01      │   │ 02        │   │ 03        │   │ 04        │  │ 05        │
   │ Konsep  │──▶│ Operasi & │──▶│ Pembagian │──▶│ Teorema   │─▶│ Persamaan │
   │ Dasar   │   │ Nilai     │   │ Polinomial│   │ Sisa &    │  │ & Vieta   │
   │         │   │           │   │           │   │ Faktor    │  │           │
   └─────────┘   └───────────┘   └───────────┘   └───────────┘  └─────┬─────┘
                                                                      │
                                              ┌───────────────────────┴───────┐
                                              │  06  Strategi HOTS & TKA       │
                                              └───────────────┬───────────────┘
                                                              │
                                              ┌───────────────▼───────────────┐
                                              │  07  Ringkasan & Bank Soal     │
                                              └────────────────────────────────┘
```

**Cara membaca peta ini:**

- **Panah (→)** menunjukkan urutan yang sebaiknya dikuasai lebih dahulu. Melompati bab diperbolehkan, namun tiap bab dirancang berdiri di atas bab sebelumnya.
- Bab **01–02** merupakan *fondasi*: tanpa keduanya, materi berikutnya akan sulit dipahami.
- Bab **03** (pembagian) merupakan *inti* materi. Banyak siswa menganggapnya sulit, padahal setelah memahami **Horner**, bab ini menjadi mudah.
- Bab **04–05** merupakan bagian yang menghubungkan banyak konsep: dari sisa pembagian dapat ditentukan **akar**, dan dari akar dapat **disusun kembali** persamaannya (Vieta).
- Bab **06–07** merupakan *bagian latihan*: menggabungkan seluruh konsep untuk soal HOTS & TKA.

---

## 🔗 Bagaimana Semua Bab Saling Terhubung (Alur Logika)

Bagian ini penting. Banyak siswa mengalami kesulitan bukan karena kurang mampu, melainkan karena memandang materi sebagai **bagian-bagian yang terpisah**. Padahal, alurnya merupakan satu kesatuan:

1. Kita **mengenali** terlebih dahulu apa itu polinomial (01).
2. Kita **mengoperasikan** dan **menghitung nilainya** untuk $x$ tertentu (02).
3. Ternyata, menghitung nilai polinomial $f(k)$ memiliki hubungan erat dengan **membagi** polinomial oleh $(x-k)$ (03).
4. Hubungan itu diformalkan menjadi **Teorema Sisa**: sisa pembagian $f(x)$ oleh $(x-k)$ ternyata **sama dengan** $f(k)$ (04).
5. Apabila sisanya $0$, maka $(x-k)$ merupakan **faktor** dan $k$ merupakan **akar**—inilah **Teorema Faktor** (04).
6. Kumpulan akar membentuk **persamaan polinomial**, dan hubungan akar dengan koefisien dirumuskan oleh **Teorema Vieta** (05).
7. Seluruh alat ini kemudian digunakan untuk menyelesaikan **soal HOTS & TKA** (06–07).

> 💡 **Inti utamanya:** *Menghitung nilai, membagi, mencari sisa, dan mencari akar merupakan **satu ide yang sama** dilihat dari sudut yang berbeda.* Memahami kalimat ini di akhir pembelajaran menandakan penguasaan materi yang baik.

---

## 🔥 Mengapa Belajar Polinomial? (Motivasi)

"Untuk apa mempelajari $x^3 - 70x^2 - 600x + 74{.}000$?" merupakan pertanyaan yang wajar. Jawabannya: polinomial adalah **bahasa untuk memodelkan keadaan yang tidak linear**.

<!-- COMPONENT: Interactive Example -->
<!-- Tampilkan 3 kartu konteks nyata di bawah ini sebagai "flip cards": depan = pertanyaan dunia nyata, belakang = model polinomialnya. -->

**Contoh nyata #1 — Bisnis & saham.**
Sebuah perusahaan memodelkan banyak saham yang dapat dijual dengan
$$f(x) = x^3 - 70x^2 - 600x + 74{.}000$$
Dengan polinomial, perusahaan dapat menghitung: "Apabila modalnya 2 miliar, berapa unit yang mungkin dijual?" Ini bukan soal rekaan, melainkan soal TKA yang akan dibahas pada Bab 02 & 06.

**Contoh nyata #2 — Teknik & material.**
Sebuah drum bahan bakar memuai saat dipanaskan. Penambahan volumenya dimodelkan oleh
$$V(T) = 0{,}05\,T^3 + 0{,}4\,T^2 + 20\,T$$
Para insinyur menggunakannya untuk menghitung risiko drum meledak pada suhu tertentu. Soal ini dibahas pada Bab 02.

**Contoh nyata #3 — Kurva & desain.**
Lintasan roller coaster, bentuk badan mobil, animasi permainan, hingga huruf yang sedang dibaca ini—semuanya digambar komputer menggunakan **kurva polinomial (Bézier)**.

> Polinomial terdapat di mana-mana. Mempelajarinya bukan sekadar untuk lulus ujian, melainkan untuk memahami **cara dunia dimodelkan dengan angka**.

---

## 📱 Cara Menggunakan Aplikasi Ini

Aplikasi ini dirancang untuk **belajar mandiri** melalui ponsel, tablet, atau laptop. Berikut cara memanfaatkannya secara maksimal:

<!-- COMPONENT: Progress Onboarding -->
<!-- Tampilkan 6 poin ini sebagai checklist onboarding. Simpan status "sudah dibaca" ke Local Storage. -->

1. **Belajar berurutan.** Ikuti nomor bab 00 → 07. Tiap bab dibangun di atas bab sebelumnya.
2. **Jangan melewati contoh.** Setiap konsep memiliki contoh **Dasar → Menengah → HOTS**. Kerjakan terlebih dahulu di kertas, baru buka pembahasan.
3. **Manfaatkan komponen interaktif.** Apabila tersedia kalkulator langsung, animasi langkah, atau kartu bolak-balik, gunakanlah. Pemahaman terbentuk lebih baik saat belajar secara aktif.
4. **Kerjakan latihan bertingkat.** Tiap bab memiliki latihan Mudah → Sedang → Sulit → HOTS → TKA. Jangan beralih ke tingkat sulit sebelum lancar pada tingkat mudah.
5. **Progres tersimpan otomatis.** Kemajuan disimpan di perangkat (Local Storage). Aplikasi dapat ditutup dan dilanjutkan kapan saja—tanpa login dan tanpa internet setelah termuat.
6. **Refleksi itu penting.** Di akhir tiap bab terdapat pertanyaan refleksi. Menuliskan "apa yang telah dipelajari" membuat ingatan bertahan jauh lebih lama.

### Legenda ikon yang sering digunakan

| Ikon | Arti |
|------|------|
| 🎯 | Tujuan belajar |
| 💡 | Ide kunci / "aha moment" |
| ⚠️ | Kesalahan umum — hati-hati |
| ⚡ | Tips cepat / shortcut |
| 🧠 | Soal HOTS |
| 🏆 | Soal model TKA |
| ✅ | Ringkasan / poin penting |
| 📝 | Refleksi |

---

## 🧮 Konvensi Penulisan (Penting untuk Konsistensi)

Agar tidak menimbulkan kebingungan, berikut kesepakatan penulisan di seluruh materi:

- **Polinomial** dan **suku banyak** adalah **istilah yang sama**. Keduanya digunakan bergantian.
- Notasi $f(x)$, $g(x)$, $P(x)$ semua berarti "sebuah polinomial dalam variabel $x$".
- **Desimal memakai koma**, sesuai kebiasaan Indonesia. Contoh: $0{,}5$ berarti setengah.
- **Pemisah ribuan memakai titik.** Contoh: $74{.}000$ berarti tujuh puluh empat ribu.
- Tanda $\times$ atau penulisan berdampingan sama-sama berarti perkalian: $2 \times x = 2x$.

---

## 🩺 Tes Diagnostik Prasyarat

Kerjakan 5 soal berikut **sebelum** memasuki Bab 01. Tujuannya bukan untuk menilai, melainkan menunjukkan bagian mana yang perlu disegarkan. Kerjakan dengan jujur.

<!-- COMPONENT: Diagnostic Quiz -->
<!-- Render blok JSON di bawah sebagai kuis. Setelah selesai, tampilkan rekomendasi: skor <3 -> sarankan tinjau ulang aljabar dasar; skor >=3 -> "Anda siap, lanjutkan ke Bab 01." Simpan skor ke Local Storage. -->

**Soal 1.** Pada bentuk $-4x^5$, tentukan koefisien dan pangkatnya.

**Soal 2.** Jabarkan $(x+2)(x+3)$.

**Soal 3.** Jabarkan $(x-1)(x^2+x+1)$.

**Soal 4.** Faktorkan $x^2 - 5x + 6$, lalu tentukan akar-akarnya.

**Soal 5.** Jika $f(x) = x^2 - 3x + 1$, hitung $f(2)$.

```json
{
  "set_id":"00-diagnostik","level":"mudah",
  "items":[
    {"id":"D1","type":"short","question":"Pada $-4x^5$, tentukan koefisien dan pangkatnya","answer":"koefisien -4, pangkat 5","explanation":"Koefisien membawa tandanya sendiri; pangkat = 5."},
    {"id":"D2","type":"short","question":"Jabarkan $(x+2)(x+3)$","answer":"x^2 + 5x + 6","explanation":"Distributif lalu gabungkan 3x+2x."},
    {"id":"D3","type":"short","question":"Jabarkan $(x-1)(x^2+x+1)$","answer":"x^3 - 1","explanation":"Pola selisih pangkat tiga $a^3-b^3$."},
    {"id":"D4","type":"short","question":"Faktorkan $x^2-5x+6$ dan tentukan akar-akarnya","answer":"(x-2)(x-3); x=2 atau x=3","explanation":"Dua bilangan berkali 6 berjumlah -5, yaitu -2 dan -3."},
    {"id":"D5","type":"short","question":"Jika $f(x)=x^2-3x+1$, hitung $f(2)$","answer":"-1","explanation":"4-6+1=-1."}
  ]
}
```

<details>
<summary><strong>Buka Pembahasan Tes Diagnostik</strong></summary>

**Soal 1.** Koefisien = $-4$, pangkat (derajat suku) = $5$. Ingat: koefisien membawa tandanya sendiri, jadi negatifnya ikut.

**Soal 2.**
$$(x+2)(x+3) = x^2 + 3x + 2x + 6 = x^2 + 5x + 6$$
Kita kalikan tiap suku di kurung pertama ke tiap suku di kurung kedua (distributif), lalu gabungkan suku sejenis $3x+2x=5x$.

**Soal 3.**
$$(x-1)(x^2+x+1) = x^3 + x^2 + x - x^2 - x - 1 = x^3 - 1$$
Perhatikan banyak suku yang saling meniadakan. Ini pola istimewa **selisih pangkat tiga**: $a^3 - b^3 = (a-b)(a^2+ab+b^2)$.

**Soal 4.**
Cari dua bilangan yang **dikali $=6$** dan **dijumlah $=-5$**, yaitu $-2$ dan $-3$.
$$x^2 - 5x + 6 = (x-2)(x-3)$$
Akar-akarnya: $x=2$ atau $x=3$. (Gagasan "hasil kali dan jumlah" ini akan berkembang menjadi **Teorema Vieta** pada Bab 05.)

**Soal 5.**
$$f(2) = (2)^2 - 3(2) + 1 = 4 - 6 + 1 = -1$$
Kita cukup **mengganti** setiap $x$ dengan $2$. Proses "mengganti nilai" ini disebut **substitusi**, dan menjadi konsep utama pada Bab 02.

</details>

**Cara menafsirkan hasil:**

- **Benar 4–5:** Prasyarat Anda kuat. Lanjutkan ke Bab 01.
- **Benar 2–3:** Cukup untuk memulai; baca ulang bagian yang keliru saat ditemui kembali.
- **Benar 0–1:** Sebaiknya segarkan dahulu aljabar dasar dan pemfaktoran kuadrat. Materi akan mengingatkan kembali secara bertahap.

---

## ✅ Ringkasan Pengantar

- **Polinomial** adalah bentuk aljabar dengan pangkat bilangan bulat tak negatif—bahasa untuk memodelkan keadaan yang "tidak linear".
- Materi terbagi **8 bab (00–07)** yang saling terhubung: konsep → operasi → pembagian → teorema → persamaan → strategi → bank soal.
- **Ide besar** yang akan menyatukan semuanya: *menghitung nilai, membagi, mencari sisa, dan mencari akar adalah satu ide yang sama.*
- Prasyaratnya ringan: aljabar dasar, perkalian bentuk aljabar, dan pemfaktoran kuadrat.
- Belajar **berurutan**, kerjakan **semua contoh & latihan**, dan **refleksikan** tiap bab.

---

## 📝 Refleksi Awal

<!-- COMPONENT: Reflection -->
<!-- Textarea + simpan ke Local Storage. Tidak ada jawaban benar/salah. -->

Sebelum melanjutkan, luangkan 30 detik untuk menjawab (dalam hati atau tuliskan di aplikasi):

1. Dari peta konsep tersebut, bab mana yang menurut Anda paling **menantang**? Mengapa?
2. Kapan terakhir Anda melihat matematika digunakan di dunia nyata? Apakah contoh saham/drum tersebut mengubah pandangan Anda?
3. Satu target pribadi Anda dalam menyelesaikan materi ini: _______________

---

## ➡️ Menuju Bab Berikutnya

Peta materi telah dipahami. Kini saatnya melangkah ke fondasi.

Pada **Bab 01 — Konsep Dasar Polinomial**, kita akan menjawab secara tuntas: *"Apa sebenarnya polinomial itu?"* Kita akan mengenali unsur-unsurnya (variabel, koefisien, konstanta, suku, derajat), membedakan mana yang polinomial dan mana yang **bukan** (bagian yang sering menjadi jebakan), serta mengenali jenis-jenisnya.

> Siapkan kertas dan pensil, lalu mulai dari **Bab 01**.

<!-- COMPONENT: Summary -->
<!-- Tombol besar "Lanjut ke Bab 01 →" + progress bar keseluruhan (1/8 selesai). -->
