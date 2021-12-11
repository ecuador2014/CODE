let indefinido = undefined;
// Los no muy utilizados
let bigInt = BigInt(123);
let symbol = Symbol("simbolo");
let nan = NaN;
let infinity = Infinity;
let minusInfinity = -Infinity;
let bigIntLiteral = BigInt(123);
let symbolLiteral = Symbol("simbolo");
let nanLiteral = NaN;
// Tipos de datos estruc
let objeto = {'cesar'}; // Objeto
let objeto2 = {0: 'cesar', 1: 'juan'}; //objeto [0]    
let array = [1, 2, 3]; // Array
let funcion = function () {}; // Funcion
let fecha = new Date(); // Fecha
let regex = /[a-z]/; // RegEx
let error = new Error(); // Error
let map = new Map(); // Map
let set = new Set(); // Set
let weakMap = new WeakMap(); // WeakMap
let weakSet = new WeakSet(); // WeakSet
let promise = new Promise(function (resolve, reject) {
    resolve();
}
); // Promise
let regExp = /[a-z]/; // RegEx crea una expresion regular
// Raiz de datos estructurados o primitivos
let nulo = null; // es un dato primitivo y a la vez estructural y no tiene valor
let falso = false;
let verdadero = true; 
// Conocer el tipo de datos que estoy trabajando
typeof (nulo); // null

console.log(typeof (nulo));
console.log('texto es: ' + typeof (texto));
console.log('numero es: ' + typeof (numero));
console.log('booleano es: ' + typeof (booleano));
console.log('objeto es: ' + typeof (objeto));
console.log('array es: ' + typeof (array));
console.log('funcion es: ' + typeof (funcion));
console.log('fecha es: ' + typeof (fecha));
console.log('regex es: ' + typeof (regex));
console.log('error es: ' + typeof (error));
console.log('map es: ' + typeof (map));
console.log('set es: ' + typeof (set));
console.log('weakMap es: ' + typeof (weakMap));
console.log('weakSet es: ' + typeof (weakSet));
console.log('promise es: ' + typeof (promise));
console.log('regExp es: ' + typeof (regExp));
console.log('nulo es: ' + typeof (nulo));
console.log('falso es: ' + typeof (falso));
console.log('verdadero es: ' + typeof (verdadero));
console.log('indefinido es: ' + typeof (indefinido));
console.log('bigInt es: ' + typeof (bigInt));
console.log('symbol es: ' + typeof (symbol));
console.log('nan es: ' + typeof (nan));
console.log('infinity es: ' + typeof (infinity));
console.log('minusInfinity es: ' + typeof (minusInfinity));
console.log('bigIntLiteral es: ' + typeof (bigIntLiteral));
console.log('symbolLiteral es: ' + typeof (symbolLiteral));
console.log('nanLiteral es: ' + typeof (nanLiteral));

