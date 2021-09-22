// TIPO DE DATOS PRIMITIVOS
let texto = 'texto';
let numero = 3.534;
let booleano = true;
let indefinido; // undefined
// no muy utilizados
let bigInt = BigInt(34565988745762345762345786);
let symbol = Symbol('Symbolo');

// TIPOS DE DATOS ESTRUCTURALES
// objetos
let objeto = { 0: 'Xavier' }; // Objet -> objecto[0] new Object()
let lista = ['Xavier']; // Array -> también es un objeto lista[0] new Array()
let regex = /asd/; // new RegExp()
// Otros objetos: Map, Set, WeakMap, WeakSet, Date, RegExp
let funcion = function() {};

// RAIZ ESTRUCTURAL PRIMITIVO
let nulo = null;

console.log('texto es: ' + typeof texto);
console.log('numero es: ' + typeof numero);
console.log('booleano es: ' + typeof booleano);
console.log('indefinido es: ' + typeof indefinido);
console.log('bigInt es: ' + typeof bigInt);
console.log('symbol es: ' + typeof symbol);
console.log('objeto es: ' + typeof objeto);
console.log('lista es: ' + typeof lista);
console.log('regex es: ' + typeof regex);
console.log('funcion es: ' + typeof funcion);
console.log('nulo es: ' + typeof nulo);
