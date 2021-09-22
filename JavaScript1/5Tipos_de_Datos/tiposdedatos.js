'use strict'
// operadores 

var numero1 = 7;
var numero2 = 9;
var resultado = numero1 + numero2; 
// se puede restar, dividir y multiplicar var resultado = numero1 + numero2; 

alert("el resultado de esta suma es: " +resultado);// el signo + me sirve para concatenar dos stream


// tipos de datos
var numero_enteros = 8;
var cadena_de_textos = 'hola "que" tal'; // las comillas ' tienen prioridad sobre ".
var valor_boleano = true;
var numero_falso = "33";
// numero falso que es es un numero que tiene las "" de cadena de texto pero para darle su valkor de numero
// hay que convertirlo con la funcion NUMBER = esta funcion es amplia xq puede darle su propia estructura
// si es decimal trabajara como decimal si es entero como entero
// mientras que la funciones de acuerdo a las estructura del numero si es entero se debe usar
// PARSEINT = entero, PARSEFLOAT= decimal. ejemplo: console.log(parseInt(numero_falso)+7);
// console.log(parseFloat(numero_falso)+7);


//console.log(Number(numero_falso)+7);
console.log(String(numero_enteros)+7); // convierto el string en numeros.

console.log(typeof numero_enteros); // me permite ver que tipo de variable uso con typeof.
console.log(typeof numero_enteros);
console.log(typeof cadena_de_textos);
console.log(typeof valor_boleano);

