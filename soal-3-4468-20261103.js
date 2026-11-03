// Soal 3: Mengubah Elemen Array
const nilaiSiswa = [75, 80, 65, 90, 85];

console.log("Array awal:", nilaiSiswa);

// 1. Ubah nilai kedua (indeks 1) menjadi 88
nilaiSiswa[1] = 88;

// 2. Ubah nilai ketiga (indeks 2) menjadi 78
nilaiSiswa[2] = 78;

// 3. Tampilkan seluruh Array setelah perubahan
console.log("Array setelah perubahan:", nilaiSiswa);

// 4. Tampilkan nilai pertama dan nilai terakhir setelah perubahan
console.log("Nilai pertama:", nilaiSiswa[0]);
console.log("Nilai terakhir:", nilaiSiswa[nilaiSiswa.length - 1]);