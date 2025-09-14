# Aplikasi Pemesanan Makanan Mixue (CLI)

Ini adalah aplikasi Pemesanan Makanan berbasis CLI (Command-Line Interface) sederhana untuk mensimulasikan proses pemesanan makanan di Mixue. Aplikasi ini dibangun menggunakan Node.js dan memungkinkan pengguna untuk melihat menu, memilih item, menambahkannya ke keranjang, dan melihat riwayat pesanan.

## Fitur Utama

Aplikasi ini memiliki beberapa fitur inti:

1. Cari Menu
   - Menampilkan semua menu yang tersedia beserta harganya.
   - Pengguna dapat memilih menu berdasarkan nomor dan memasukkan jumlah yang ingin dipesan.
   - Item yang sama jika dipesan ulang akan diperbarui jumlahnya di keranjang.
2. Lihat Keranjang
   - Menampilkan semua item yang telah ditambahkan ke keranjang.
   - Detail yang ditampilkan meliputi nama item, harga satuan, jumlah, dan subtotal per item.
   - Menghitung dan menampilkan total keseluruhan harga dari semua item di keranjang.
   - Menghapus salah satu item di keranjang
   - Dapat melakukan konfirmasi checkout.
3. Lihat History
   - Menampilkan riwayat semua pesanan yang telah berhasil dikonfirmasi dan dibayar.
   - Memberikan catatan pesanan yang sudah selesai.
4. Keluar
   - Opsi untuk menghentikan dan keluar dari aplikasi.
   - Memberikan peringatan jika masih ada item di dalam keranjang sebelum keluar, untuk memastikan pengguna tidak kehilangan pesanannya secara tidak sengaja.

## Cara Menjalanlan Aplikasi

1. Buka terminal atau command prompt Anda.
2. Pindah ke direktori tempat Anda menyimpan file program
3. Eksekusi file menggunakan Node.js dengan perintah "node index.js"
4. Aplikasi akan berjalan di terminal, dan Anda bisa berinteraksi dengan memasukkan angka sesuai menu yang tersedia.
