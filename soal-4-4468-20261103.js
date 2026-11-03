// Soal 4: Properti length
const daftarProduk = [
  "Keyboard",
  "Mouse",
  "Monitor",
  "Flashdisk",
  "Headset",
  "Webcam"
];

// 1. Jumlah seluruh produk
console.log("1. Jumlah seluruh produk:", daftarProduk.length);

// 2. Indeks produk terakhir
console.log("2. Indeks produk terakhir:", daftarProduk.length - 1);

// 3. Nama produk terakhir dengan menggunakan length
console.log("3. Nama produk terakhir:", daftarProduk[daftarProduk.length - 1]);

// 4. Nama produk yang berada pada indeks tengah sebelah kiri apabila jumlah elemen genap
// Menggunakan rumus: Math.floor((daftarProduk.length - 1) / 2)
const indeksTengah = Math.floor((daftarProduk.length - 1) / 2);
console.log("4. Indeks tengah:", indeksTengah);
console.log("   Nama produk di tengah:", daftarProduk[indeksTengah]);