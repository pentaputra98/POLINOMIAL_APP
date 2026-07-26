# Polinomial Kelas XI — Modul Interaktif TKA Matematika Lanjut

Aplikasi web satu halaman (SPA) untuk pembelajaran polinomial, **tanpa backend,
tanpa basis data, dan dapat dipakai offline**. Seluruh materi dibaca dari folder
`content/`; aplikasi hanya menyajikannya.

---

## 1. Menjalankan di komputer sendiri

Aplikasi **harus** dibuka lewat server, bukan klik ganda berkas
(`file://` memblokir `fetch()` dan Service Worker).

```bash
cd "F:\MATERI MATEMATIKA\MATEMATIKA TINGKAT LANJUT\KELAS 11\POLINOMIAL\POLINOMIAL_APP" && python -m http.server 8899
```

Lalu buka `http://localhost:8899`.

Alternatif tanpa Python:

```bash
npx serve -l 8899
```

---

## 2. Menerbitkan (deploy)

Aplikasi ini **berkas statis murni**. Unggah **seluruh isi folder** apa adanya —
tidak ada langkah build, tidak ada dependensi yang perlu dipasang.

| Layanan | Cara |
|---|---|
| **GitHub Pages** | Unggah folder ke repositori → Settings › Pages › Source: `main` / root |
| **Netlify** | Seret folder ke dasbor Netlify (drag & drop), atau hubungkan repositori tanpa build command |
| **Vercel** | Import repositori → Framework Preset: **Other** → Build Command: kosongkan → Output Directory: `.` |
| **Server sekolah** | Salin folder ke direktori web (mis. `htdocs/polinomial`) |

**Tidak perlu aturan rewrite/redirect.** Navigasi memakai *hash routing*
(`#/bab/...`), sehingga semua rute dilayani oleh `index.html` yang sama.

### Syarat yang harus dipenuhi
- Disajikan lewat **HTTP/HTTPS** (Service Worker tidak jalan di `file://`).
- Struktur folder dipertahankan — `content/`, `js/`, `css/`, `lib/` harus ikut.
- Bila ditempatkan di **subfolder** (mis. `situs.com/polinomial/`), tidak perlu
  penyesuaian: seluruh path bersifat relatif.

---

## 3. Memperbarui materi

Materi ada di `content/*.md` beserta `content/content-manifest.json`.
Setelah mengedit materi, **tidak perlu menyentuh kode**.

Service Worker memakai strategi **network-first** untuk `content/`, sehingga
materi yang diperbarui langsung terbaca saat perangkat online.

> **Penting bila mengubah kode (`js/`, `css/`):** naikkan nomor versi
> `?b=N` pada `index.html` **dan** `sw.js`, serta nama `CACHE` di `sw.js`.
> Tanpa itu, perangkat siswa masih memakai berkas lama dari cache.

---

## 4. Offline

Saat pertama kali dibuka dalam keadaan online, Service Worker menyimpan:

- seluruh kerangka aplikasi (HTML, CSS, 16 berkas JS),
- **seluruh 10 berkas materi** + manifest,
- KaTeX beserta **20 berkas font**.

Sesudah itu aplikasi dapat dibuka tanpa internet, termasuk bab yang belum
pernah dikunjungi. Progres, XP, lencana, dan rekor tersimpan di
`localStorage` perangkat (kunci berawalan `poli.v1.`).

---

## 5. Struktur folder

```
POLINOMIAL_APP/
├─ index.html            kerangka aplikasi
├─ sw.js                 Service Worker (offline)
├─ css/style.css         seluruh gaya + tema terang/gelap
├─ js/
│  ├─ icons.js           ikon Lucide (inline SVG) + pemetaan emoji
│  ├─ markdown.js        parser Markdown + pemisah blok JSON
│  ├─ content.js         pemuat manifest & materi
│  ├─ store.js           penyimpanan berversi (poli.v1.*)
│  ├─ gamify.js          XP, level, lencana, bintang, rekor
│  ├─ quiz.js            mesin kuis (36 set / 295 soal)
│  ├─ keypad.js          papan tombol matematika dalam aplikasi
│  ├─ activity.js        8 widget Latihan Interaktif
│  ├─ challenge.js       Tantangan Akhir Bab berwaktu
│  ├─ examples.js        kartu contoh + pembahasan buka/tutup
│  ├─ diagrams.js        peta konsep & skema Horner interaktif
│  ├─ enhance.js         penyesuaian bagan & rumus agar tidak terpotong
│  ├─ scratchpad.js      papan coretan vektor
│  └─ app.js             router & kerangka tampilan
├─ content/              MATERI (sumber kebenaran)
└─ lib/                  KaTeX + ikon Lucide (lokal, offline)
```

---

## 6. Catatan

- `HANDOFF.md`, `RPD.MD`, `sub_1_*.md`–`sub_3_*.md`, dan folder `_legacy/`
  berasal dari versi aplikasi terdahulu dan **tidak lagi mencerminkan aplikasi
  ini**. Aman untuk dihapus.
- `lib/fontawesome/` sudah tidak digunakan (ikon kini memakai Lucide).

© 2026 · Penta Putra Purnomo, S.Pd., Gr.
