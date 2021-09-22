
let i = 0;

// while (i < 100) {
//     console.log(i);
//     i++;
// }

let lista = [3,6,4,8,2,9,4,7,6,1,0,33,8,9,3,546,7,87];

let numero = 0;
while (numero < 30) {
    numero = lista.shift();
    console.log(numero);
}
console.log(lista);
