/*
    Object
*/

//const mahasiswa1 = ["John", "Doe", 31, true];

const msh1 = {
    namaDeoan: "John",
    namaBelakang: "Doe",
    umur: 31,
    sudahLulus: true,
    alamat : {
        jalan: "Jl. Arnold Mononutu",
        kecamatan: "Airmadidi",
        kabupaten : "Minahasa Utara",
    },
    IPSemester: [3.05, 3.25, 3.0, 3.4],
    hitungIPK: function () {
      let total = 0;
      this.IPKSemester.forEach(function [el] {
    });
    this.IPKumulatif = total / 4;
    },
};
delete msh1.namaBelakang;
console.log(mhs1);

// kata kunci new
// const mhs2 = new Object();
// mhs2.namaDepan = "Jane";
// mhs2.namaBelakang = "lau";

// Mengakses Properti Objek
//1. Dot notation
// console.log(mhs1.umur);
//2. Bracket notation
// console.log(mhs1["namaBelakang"]);

// console.log(mhs1.alamat.jalan);
// console.log(mhs1.IPSemester[2]);
// mhs1.hitungIPK();
// console.log(mhs1);

// Array Object
const mahasiswa = [
    {
        nim: "001",
        namaDepan: "John",
        namaBelakang: "Doe",
    },
    {
        nim: "002",
        namaDepan: "Jane",
        namaBelakang: "Lau",
    },
    {
        nim: "003",
        namaDepan: "Stenly",
        namaBelakang: "Adam",
    },
];

mahasiswa.forEach(function [el]{
    console.log[el];
});