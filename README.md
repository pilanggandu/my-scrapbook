# Birthday Scrapbook for My Future Wife

Album scrapbook ulang tahun fisik dan digital yang didedikasikan khusus untuk **calon istri tercinta** dalam rangka merayakan hari lahirnya, tepat satu bulan menjelang pernikahan (road to our wedding day). Didesain dengan estetika kolase kertas pastel, huruf kliping potongan kertas, foto polaroid, ilustrasi stiker tematik, surat cinta, dan kit cetak DIY terpisah berdasarkan jenis kertas.

## Membuka Aplikasi

Buka `index.html` di browser apa pun, atau jalankan `npm run dev` lalu buka http://localhost:4173. Tidak ada dependensi npm eksternal yang perlu diinstal. Server lokal berjalan dengan modul standar Node.js.

### Akses Publik (Cloudflare Tunnel)

Untuk membuka scrapbook dari HP atau internet publik tanpa perlu port forwarding atau setup router:

```powershell
npm run tunnel
# atau langsung: .\bin\cloudflared.exe tunnel --url http://localhost:4173
```

URL publik yang sedang aktif:
`https://adapters-wrestling-nightlife-anyone.trycloudflare.com`

## Konsep dan Narasi 5 Halaman Album

Album ini terbagi menjadi 5 babak perjalanan cinta menyambut hari pernikahan:

1. **Halaman 1 : Hari Istimewa (Milestone Ulang Tahun Terakhir sebagai Calon Istri & Kalender)**
   - *Default Layout*: **1 Foto Gedhe + Mini Overlay** (Potret megah calon istri tercinta di tengah dengan mini candid snapshot di sudut).
   - Perayaan ulang tahun terakhir berstatus sebagai calon pengantin sebelum sah menjadi istri bulan depan. Dilengkapi kalender interaktif yang menandai tanggal ulang tahun dan hitung mundur menuju hari akad.
2. **Halaman 2 : Perjalanan Cinta (Our Journey: From Dating Days to Wedding Day)**
   - *Default Layout*: **2 Foto Bertumpuk (Overlay)** (Foto kencan pertama di bawah, foto momen spesial menimpa di atasnya dengan perekat washi tape).
   - Kilas balik momen kencan pertama, tawa berdua, dan komitmen melangkah bersama. Dilengkapi boarding pass vintage: *Destination Forever*, dari Calon Pengantin menuju Suami & Istri Sah di pelaminan bulan depan.
3. **Halaman 3 : Surat Calon Istri (Love Letter & Wedding Vows)**
   - *Default Layout*: **1 Foto Gedhe + Surat Cinta Overlay** (Foto romantis calon istri di atas, dan kartu surat cinta tumpang tindih menimpa sudut foto dengan penjepit kertas vintage).
   - Surat cinta dan ikrar tulus dari calon suami: ungkapan terima kasih telah memilihnya sebagai teman hidup, janji menjaga dan membimbing seumur hidup, serta perangko pos romantis *Wedding 2026*.
4. **Halaman 4 : Kado Pernikahan (The Maroon Gift Bundle & Celebration)**
   - *Default Layout*: **2 Foto Bertumpuk (Overlay)** (Foto calon istri berbusana serba maroon dan foto kado sepatu maroon bersanding tumpang tindih).
   - Pengungkapan kado fisik istimewa:
     - **Sepatu Merah Maroon**: Sepatu cantik untuk melangkah anggun ke pelaminan dan hari-hari bahagia bersama.
     - **Cardigan Rajut Kimi**: Cardigan rajut motif bunga warna dusty pink & maroon yang manis dan hangat.
     - **Buket Bunga**: Rangkaian mawar mekar sebagai lambang cinta yang senantiasa bertumbuh.
     - **Birthday Cake**: Kue ulang tahun manis untuk meniup lilin terakhir sebelum resmi menjadi nyonya.
5. **Halaman 5 : Janji & Doa (Wishes & Vows: Building Our Home Together)**
   - *Default Layout*: **1 Foto Gedhe Menuju Pelaminan** (Foto berdua penuh senyum diiringi kaset mixtape pernikahan dan checklist janji suci).
   - Doa kelancaran ijab kabul, checklist impian berumah tangga sakinah mawaddah warahmah, rencana bulan madu, serta kaset mixtape lagu cinta perjalanan hidup berdua hingga jannah.

## Fitur Fleksibilitas Tata Letak Foto (Layout & Overlay)

Setiap halaman tidak harus berisi 3 foto. Kamu bebas memilih tata letak foto sesuai keinginan:

- **1 Foto Gedhe + Overlay**: Menampilkan 1 foto polaroid berukuran besar di bagian tengah (hero portrait), dipadukan dengan mini polaroid snapshot di sudut bawah foto yang menumpuk secara artistik.
- **1 Foto Gedhe Utuh**: Menampilkan 1 foto besar megah yang mendominasi halaman secara bersih dengan hiasan washi tape dan stiker bunga pastel.
- **2 Foto Bertumpuk (Overlay Romantis)**: Menampilkan 2 foto polaroid yang saling tumpang-tindih (foto 2 menimpa sudut foto 1) lengkap dengan bayangan fisik dan selotip washi yang merekatkan keduanya.
- **3 Foto Kolase**: Format kolase polaroid klasik (atas, kiri, dan kanan).

Tombol pilihan tata letak (pills) dapat langsung diklik pada navigasi atas scrapbook, atau dipilih melalui dialog **Ubah isi buku**. Tata letak ini otomatis mengubah lembar cetak foto polaroid dan kotak panduan tempel (*paste guide*) di lembar dasar.

## Mengisi dan Mempersonalisasi Album

- **Navigasi Halaman**: Gunakan tab halaman di atas scrapbook (Hal 1 sampai Hal 5) atau panah navigasi untuk berpindah antar halaman.
- **Ubah Isi Buku**: Klik tombol **Ubah isi buku** di pojok kanan atas untuk mengganti:
  - Tata letak foto per halaman (1 Foto Gedhe, 2 Foto Bertumpuk, 3 Foto Kolase).
  - Panggilan sayang calon istri (otomatis menghiasi judul kliping huruf potongan kertas).
  - Tanggal lahir (otomatis memperbarui bulan dan lingkaran kalender).
  - Catatan caption foto di setiap halaman (Hal 1-5).
  - Teks surat cinta personal di Halaman 3.
  - Pesan kartu kado dan buket bunga di Halaman 4.
- **Pilih Foto**: Klik bingkai foto polaroid di layar untuk memilih foto dari perangkat (JPG, PNG, WebP, AVIF, maksimal 15 MB per foto). Foto otomatis tersinkronisasi ke lembar cetak polaroid.

## Format Cetak DIY (Dipisah per Jenis Kertas)

Untuk mewujudkan scrapbook fisik yang autentik, gunakan fitur **Simpan PDF** dengan 4 opsi pilihan:

1. **Kit Lengkap Seluruh Buku (15 Halaman PDF)**
   Mencetak seluruh komponen untuk ke-5 halaman terpisah berdasarkan jenis kertas yang tepat:
   - **5 Lembar Dasar (Hal 1 - 5)**: Dicetak pada kertas bertekstur tebal seperti **Linen / Concorde / Karton 220 - 260 gsm**. Dilengkapi panduan kotak gunting (*paste guide*) yang menyesuaikan tata letak foto yang dipilih.
   - **5 Lembar Foto Polaroid (Hal 1 - 5)**: Dicetak pada **Photo Paper Glossy / Silky / Matte 200 - 230 gsm** untuk ketajaman warna foto kenangan. Menampilkan ukuran polaroid besar, polaroid bertumpuk, atau polaroid kolase sesuai pilihanmu.
   - **5 Lembar Stiker Tematik (Hal 1 - 5)**: Dicetak pada **Kertas Stiker HVS / Vinyl Matte A4**. Berisi stiker cincin kawin, buket bunga, sepatu maroon, gaun, kue ultah, pita kado, dan washi tape siap kelupas.
2. **Buku Album Utuh Siap Jilid (5 Halaman PDF)**
   Mencetak Halaman 1 sampai 5 dalam wujud kolase jadi yang sudah memadukan latar, foto, stiker, dan widget secara utuh dengan efek overlay yang nyata. Siap dijilid spiral, distaples buku, atau dibundel pita cantik sebagai hadiah kejutan.
3. **Kit DIY Halaman Aktif Saja (3 Halaman PDF)**
   Mencetak 3 lembar (Lembar Dasar, Lembar Foto, Lembar Stiker) khusus untuk halaman yang sedang dipilih.
4. **Halaman Aktif Saja (1 Halaman Poster A4)**
   Mencetak halaman yang dipilih sebagai lembar pajangan tunggal.

### Panduan Cetak di Browser
- Gunakan ukuran kertas **A4** dan orientasi **Portrait**.
- Pastikan opsi **Grafik latar belakang (Background graphics)** dicentang agar palet warna pastel dan stiker tercetak utuh.
- Matikan opsi **Header dan footer** agar tidak ada tanggal atau URL web peramban yang tercetak di pinggir kertas.

## Struktur Berkas

- `index.html`: Struktur semantik album multi-halaman, formulir personalisasi, layout switcher, dan dialog cetak.
- `styles.css`: Tata letak scrapbook, variasi layout 1 foto gedhe & overlay tumpang tindih, tekstur kertas, tipografi tulisan tangan Caveat, komponen interaktif, dan aturan cetak `@media print`.
- `scrapbook.js`: State manager 5 halaman cerita dan layout, pemrosesan foto lokal, kalender dinamis, generator tiket, surat cinta, widget kado maroon, checklist doa, dan perakit lembar PDF multi-halaman.
- `stickers.js`: Pustaka ilustrasi SVG bertema pernikahan, bunga mekar, fashion maroon, perayaan ultah, washi tape berpola, serta konfeti pastel.
- `server.mjs`: Server HTTP lokal berbasis Node.js murni untuk pratinjau instan.
