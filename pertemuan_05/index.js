/*
    1. Array
*/
//Deklarasi Arraay
let angka = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(angka);
let buah =["Mangga", "Apple", "Jeruk"];
console.log(buah);

let arr = ['text', 1, true];
console.log(arr);

let myFunc = function (){
    return "Hello Array";
};

let arr2 = ["text", 1, true, myFunc(), [1, 2, 3, 4, 5]];
//Mengakses element dalam array
console.log(arr2[2]);
console.log(arr2[3]);
console.log(arr2[4][2]);