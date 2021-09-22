// let inicial = 3;
// function sumar() {
//     inicial += 4;
//     return inicial;
// }
// console.log(sumar());
// console.log(sumar());
// console.log(sumar());

// function sumar(a = 0,b = 0) {
//     return a + b;
// }

// console.log(sumar(0,3));
// console.log(sumar(4,5));
// console.log(sumar(100,2));
// console.log(sumar());

function sumar() {
    let suma = 0;
    for (let numero of arguments) {
        suma += numero;
    }
    return suma;
}

console.log(sumar(1,2,3,4,5,6,7,8));