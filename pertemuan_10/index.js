//var, Let, Conts

//let nama = "lauree";
//let nama = "mea";

//console.log(nama);

//Scope dalam javascript
//1. Function script (var)
//2. Block scope

// (function tes(){
//   for (var i = 0; i < 0; i++){
//       console.log(i)
//   }
// })();
// console.log(i);

//{
//    let i;
//    for (let i=0; i<0; i++){
//        console.log(i)
//    }
//}
//console.log(i);


//Template Literal

conts person = {
    firstName: "Meldiva",
    lastName: "Mea",
    age: 19,
};

console.log(
    "Hello nama saya" +
     person.firstName +
     " " + 
     person.lastName +
     ". Umur saya adalah " + 
     person.age + 
     " tahun."
     );

console.log(
    `Hallo nama saya ${person.firstName} ${apersmon.lastName}. Umur saya adalah ${person.age}. `
);