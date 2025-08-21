# MoodFlix

MoodFlix is a lightweight React app (Vite) for browsing movies — a small demo that shows searching, listing, and rendering movie cards with a clean, responsive UI.

Live demo: https://moodflix-blush.vercel.app/

## Ringkasan

- Framework: React (Vite)
- Tujuan: Demo UI untuk menampilkan daftar film dan fitur pencarian.
- Status: Siap dideploy / sudah dideploy (lihat link di atas).

## Screenshot / Preview

Lihat aplikasi yang sudah dideploy di: https://moodflix-blush.vercel.app/

## Fitur

- Pencarian film
- Kartu film responsif
- Spinner/loading state
- Asset statis untuk placeholder dan ikon

## Teknologi

- React
- Vite
- (Opsional) Appwrite client (file `appwrite.js` ada di repository)

## Struktur proyek (ringkasan)

Beberapa file/komponen penting:

- `src/main.jsx` — entry point
- `src/App.jsx` — komponen utama aplikasi
- `src/components/MovieCard.jsx` — render tiap kartu film
- `src/components/Search.jsx` — komponen pencarian
- `src/components/Spinner.jsx` — indikator loading
- `src/appwrite.js` — inisialisasi Appwrite (jika digunakan)
- `public/` — aset gambar dan ikon

## Cara menjalankan secara lokal

Persyaratan: Node.js (LTS) dan npm atau pnpm/yarn.

1. Pasang dependency

```powershell
npm install
```

2. Jalankan mode development (Vite + HMR)

```powershell
npm run dev
```

3. Membuat build produksi

```powershell
npm run build
```

4. Menjalankan preview build

```powershell
npm run preview
```

## Environment / Konfigurasi

Jika Anda menggunakan Appwrite atau layanan pihak ketiga lainnya, pastikan menambahkan variabel lingkungan yang diperlukan (contoh: endpoint, project ID) sesuai isi `src/appwrite.js`.

## Deployment

Proyek ini mudah dideploy ke Vercel, Netlify, atau layanan static hosting lain yang mendukung build berbasis Node/Vite.

- Contoh: proyek sudah dideploy ke Vercel pada

	https://moodflix-blush.vercel.app/

## Catatan pengembang / pengujian cepat

- Periksa `src/components` untuk menambah atau mengubah perilaku UI.
- Jika menambahkan API key atau secret, jangan commit ke repository — gunakan environment variables.

## Kontribusi

PR sederhana diterima: perbaiki bug kecil, tambah test, atau perbaiki penamaan komponen.

## Lisensi

Cantumkan lisensi proyek Anda sesuai kebutuhan (mis. MIT). Jika belum ada, tambahkan file `LICENSE`.

---

Jika Anda mau, saya bisa:

- Menambahkan badge build/deploy (Vercel) di README
- Menyertakan contoh .env.example jika ada variabel lingkungan
- Menulis small tests untuk komponen utama

Beri tahu saya mana yang Anda mau saya tambahkan.
