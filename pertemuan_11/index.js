/*
    Arrow function
*/

// function ucapkanSalam(){
//    return "Selamat Pagi";
//};

// fungsi dengan parameter
// const operasiPenjumlahan = (bilangan1, bilangan2) => {
//    const hasil =  bilangan1 + bilangan2;
//    return hasil;
//  };
  
//  console.log(operasiPenjumlahan(3, 4)); // Output: 7
  
  // fungsi yang tidak memiliki parameter
//  const namaJenisAnjing = () => {
//    const anjing = ["Pug", "Bulldog", "Poodle"];
//    return anjing[Math.floor(Math.random()*(anjing.length))];
//  }
  
//  console.log(namaJenisAnjing()); // Output: Pug (hasil random)


// Implicit return value
//function panggilan(nama) {
//    return `Hay ${nama}`;
// }
 
// console.log(panggilan('Laureenanda')); // Output: Hay Laureenanda

 //cara singkat
 // const panggilan = (nama) => `Hay ${nama}`;
// console.log(panggilan('Laureenanda')); // Output: Hay Laureenanda

  // exercise
  // Convert to ES6 syntax
  // function yearUntilRetirement(year, firstName) {
  //  var age = 28;
  //    va retirement = 65 - age;
  //    if(retirement > 0) {
  //    console.log(firstName + " retired in " + retirement + "years");
  //  } else {
  //    console.log(firstName + " is alreadu retired. ");
  //  }
  // } 

  //ES6
  // Exercise 3

  const yearUntilRetirement = (year, firstName) => {
    let age = 28;
    const retirement = 65 - age;
    if(retirement > 0){
        console.log(`${firstName} will retire in ${retirement} years.`);
    }
    else{
        console.log(`${firstName} has already retired.`);
    }
}

console.log(yearUntilRetirement(2020, "laureen"));
