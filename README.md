# Kedai Mama Kyrel

Aplikasi ini adalah website untuk Kedai Mama Kyrel, sebuah tempat kuliner rumahan yang menyajikan makanan dan minuman favorit dengan harga bersahabat.

## Dibuat dengan apa

- React 19
- Vite 8
- Tailwind CSS 4
- React Icons

## Fitur

- Tampilan responsif dengan tema gelap/terang
- Tampilan utama (Hero) dengan call-to-action
- Daftar menu yang dapat difilter berdasarkan kategori (Makanan, Minuman)
- Detail menu dengan pilihan ukuran, topping, level pedas, dan catatan
- Keranjang belanja yang dapat ditambahkan, dikurangi, dan dihapus
- Checkout melalui WhatsApp dengan format pesanan otomatis
- Informasi tentang kedai dan lokasi melalui Google Maps
- Footer dengan hak cipta

## Cara menjalankannya

1. Pastikan Anda telah menginstal Node.js dan npm.
2. Clone repository ini.
3. Masuk ke direktori projekt dan jalankan `npm install` untuk menginstal dependensi.
4. Jalankan aplikasi dalam mode development dengan `npm dev`.
5. Buka browser dan akses `http://localhost:5173` (atau port yang ditampilkan di terminal).
6. Untuk produksi, jalankan `npm build` lalu `npm preview`.

## Struktur project

```
kedai-mama-kyrel-baru/
├── public/                    → Aset statik yang disajikan langsung oleh server
│   ├── assets/
│   │   ├── logo.png           → Logo kedai
│   │   ├── hero.webp          → Gambar hero utama
│   │   └── menu/              → Foto-foto menu makanan & minuman
│   ├── favicon.svg            → Icon browser tab
│   └── icons.svg              → Icon SVG
├── src/                       → Source code aplikasi
│   ├── components/            → Komponen UI React
│   │   ├── Navbar.jsx         → Navigasi atas (desktop + mobile)
│   │   ├── Hero.jsx           → Bagian hero/landing
│   │   ├── MenuSection.jsx    → Daftar menu dengan filter kategori
│   │   ├── MenuCard.jsx       → Kartu individu setiap menu
│   │   ├── OrderModal.jsx     → Modal pemesanan (ukuran, topping, level, catatan)
│   │   ├── CartDrawer.jsx     → Drawer keranjang belanja + checkout WhatsApp
│   │   ├── About.jsx          → Informasi tentang kedai + Google Maps embed
│   │   └── Footer.jsx         → Footer dengan hak cipta
│   ├── context/
│   │   └── CartContext.jsx    → State global keranjang (React Context)
│   ├── App.jsx                → Komponen root, mengatur tema & layout
│   ├── main.jsx               → Entry point React
│   └── index.css              → Style global + Tailwind
├── index.html                 → HTML template (entry point Vite)
├── vite.config.js             → Konfigurasi Vite + Tailwind plugin
├── package.json               → Dependensi & script npm
└── .oxlintrc.json             → Konfigurasi linter OxLint
```

## Kontribusi

Project ini dikembangkan secara individu dan hanya berpusat di branch `main`.