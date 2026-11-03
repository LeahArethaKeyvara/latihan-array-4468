// Soal 5: Studi Kasus Data Siswa
const namaSiswa = [
  "Andi",
  "Budi",
  "Citra",
  "Dewi",
  "Eko"
];

const nilaiSiswa = [80, 75, 90, 85, 70];

// 1. Tampilkan jumlah siswa menggunakan properti length
console.log("1. Jumlah siswa:", namaSiswa.length);

// 2. Tampilkan nama dan nilai siswa pertama (indeks 0)
console.log(`2. Siswa pertama: ${namaSiswa[0]} dengan nilai ${nilaiSiswa[0]}`);

// 3. Tampilkan nama dan nilai siswa terakhir menggunakan length
const idxAkhir = namaSiswa.length - 1;
console.log(`3. Siswa terakhir: ${namaSiswa[idxAkhir]} dengan nilai ${nilaiSiswa[idxAkhir]}`);

// 4. Perbarui nilai Budi (indeks 1) dari 75 menjadi 88
nilaiSiswa[1] = 88;

// 5. Perbarui nilai Eko (indeks 4) dari 70 menjadi 82
nilaiSiswa[4] = 82;

// 6. Tampilkan nama dan nilai siswa ketiga (indeks 2)
console.log(`6. Siswa ketiga: ${namaSiswa[2]} dengan nilai ${nilaiSiswa[2]}`);

// 7. Tampilkan seluruh isi kedua Array setelah pembaruan
console.log("\n--- DATA SETELAH PEMBARUAN ---");
console.log("Daftar Nama Siswa:", namaSiswa);
console.log("Daftar Nilai Siswa:", nilaiSiswa);

// Tantangan tambahan (opsional): Cek ketersediaan indeks
const cekIndeks = 2;
if (cekIndeks >= 0 && cekIndeks < namaSiswa.length) {
  console.log(`\nIndeks ${cekIndeks} tersedia: ${namaSiswa[cekIndeks]}`);
} else {
  console.log(`\nIndeks ${cekIndeks} tidak tersedia.`);
}