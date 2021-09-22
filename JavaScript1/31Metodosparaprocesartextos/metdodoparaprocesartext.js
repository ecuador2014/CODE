'use strict'
// transformacion de textos

var numero = 445;
var texto1 = "ecuador lindo";
var texto2 = "Dios lo maximo";

var dato = numero.toString();
    dato = texto2.toUpperCase(); // covertir en string pero solo letra mayuscula
    dato = texto1.toLowerCase();
    dato = ["hola", "te", "hi"];

console.log(dato);


// Calcular la longitud de un texto

console.log(texto2.length);

// concatenar = unir textos

var textototal = texto2 + " " + texto1;
//var textototal = texto2.concat(" " + texto1);  el metodo concat

console.log(textototal);

