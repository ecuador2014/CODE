let texto = "Hola mundo";
let texto1 = "Hola a todos";
let texto2 = "Hola a todas";
let texto3 = "Hola a todes";
let texto4 = "Hola al planeta";
let texto5 = "Hola a los planetas";
let texto6 = "Hola a la tierra";
let texto7 = "Hola a la tierras";

let regex = /Hola/;
let regex1 = /hola.$/i;
let regex2 = /hola/g;
let regex3 = /hola/gi;
let regex4 = /hola/g;
let regex5 = /hola/gi;
let regex6 = /hola/gi;
let regex7 = /hola/gi;

let regex = /^Hola/;

console.log(regex.test(texto));
console.log(regex1.test(texto));
console.log(regex2.test(texto));
console.log(regex3.test(texto));
console.log(regex4.test(texto));
console.log(regex5.test(texto));
console.log(regex6.test(texto));
console.log(regex7.test(texto));
