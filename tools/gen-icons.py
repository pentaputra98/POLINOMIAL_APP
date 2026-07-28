#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
gen-icons.py — bangkitkan ulang blok PATHS di js/icons.js dari lib/lucide/icons/*.svg

Mengapa ada skrip ini
---------------------
`js/icons.js` menanamkan ikon Lucide sebagai inline SVG supaya aplikasi tetap
berjalan offline dan ikon mewarisi `currentColor` (otomatis benar di mode terang
maupun gelap). Berkas itu DIBANGKITKAN — jangan disunting tangan.

Cara pakai
----------
    python tools/gen-icons.py                 # pratinjau, tidak menulis
    python tools/gen-icons.py --apply         # tulis js/icons.js
    python tools/gen-icons.py --add sigma,table --apply

Perilaku
--------
* Nama ikon yang SUDAH ada di PATHS dipertahankan (dibaca ulang dari SVG).
* Nama dari --add dan dari daftar EXTRA di bawah ditambahkan.
* Hasil selalu urut abjad agar diff-nya bersih.
* Hanya blok `var PATHS = { ... };` yang disentuh; sisa berkas tidak berubah.
* Nama memakai konvensi Lucide TERBARU (triangle-alert, circle-check,
  circle-question-mark). Alias nama lama ditangani di icons.js, bukan di sini.

Prasyarat: lib/lucide/icons/ (1756 SVG). Folder itu di-gitignore karena hanya
dibutuhkan saat membangkitkan, bukan saat aplikasi berjalan.
"""
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SVGDIR = os.path.join(ROOT, "lib", "lucide", "icons")
TARGET = os.path.join(ROOT, "js", "icons.js")

# Ikon yang dibutuhkan aplikasi tetapi mungkin belum tercatat di PATHS.
EXTRA = [
    "clipboard-check",   # pemetaan emoji 🩺
    "arrow-down",        # kendali animasi visual (turun pada skema Horner)
    "step-forward",      # tombol "langkah berikutnya" pada visual bertahap
    "equal",             # penanda ruas pada penyamaan koefisien
]


def inner_svg(name):
    """Ambil isi <svg>…</svg> sebuah berkas Lucide, dirapikan satu baris."""
    path = os.path.join(SVGDIR, name + ".svg")
    if not os.path.isfile(path):
        return None
    raw = open(path, encoding="utf-8").read()
    m = re.search(r"<svg\b[^>]*>(.*?)</svg>", raw, re.S)
    if not m:
        return None
    body = re.sub(r"\s+", " ", m.group(1)).strip()
    # rapatkan antar-elemen menjadi satu spasi, seragamkan penutup " />"
    body = re.sub(r">\s*<", "> <", body)
    body = re.sub(r"\s*/>", " />", body)
    if "'" in body:                       # akan merusak string ber-kutip tunggal
        raise SystemExit("!! %s memuat kutip tunggal; perlu penanganan khusus" % name)
    return body


def main():
    apply_ = "--apply" in sys.argv
    tambah = []
    if "--add" in sys.argv:
        tambah = [s.strip() for s in sys.argv[sys.argv.index("--add") + 1].split(",") if s.strip()]

    if not os.path.isdir(SVGDIR):
        raise SystemExit("!! %s tidak ada. Folder SVG Lucide dibutuhkan untuk membangkitkan." % SVGDIR)

    src = open(TARGET, encoding="utf-8").read()
    m = re.search(r"(var PATHS = \{)(.*?)(\n  \};)", src, re.S)
    if not m:
        raise SystemExit("!! blok 'var PATHS = { ... };' tidak ditemukan di js/icons.js")

    lama = re.findall(r'"([a-z0-9-]+)":', m.group(2))
    nama = sorted(set(lama) | set(EXTRA) | set(tambah))

    entri, hilang, baru = [], [], []
    for n in nama:
        body = inner_svg(n)
        if body is None:
            hilang.append(n)
            continue
        entri.append('    "%s": \'%s\',' % (n, body))
        if n not in lama:
            baru.append(n)

    if hilang:
        raise SystemExit("!! tidak ada SVG-nya: %s" % ", ".join(hilang))

    entri[-1] = entri[-1].rstrip(",")     # jangan ada koma menggantung
    blok = m.group(1) + "\n" + "\n".join(entri) + m.group(3)
    out = src[:m.start()] + blok + src[m.end():]

    print("ikon sebelumnya : %d" % len(lama))
    print("ikon sesudah    : %d" % len(entri))
    print("ditambahkan (%d) : %s" % (len(baru), ", ".join(baru) or "-"))

    if not apply_:
        print("\n(pratinjau — jalankan dengan --apply untuk menulis)")
        return
    open(TARGET, "w", encoding="utf-8", newline="\n").write(out)
    print("\njs/icons.js ditulis ulang.")


if __name__ == "__main__":
    main()
