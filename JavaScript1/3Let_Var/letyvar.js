'use strict'

// Let and Var

alert("Hola");

var numero = 40;
console.log(numero); // valor 40

if(true){ // declaracion o expresion
    var numero = 50;
    console.log(numero); // valor 50
}

console.log(numero); // valor 50


//Prueba con LET

var texto = "cesar";
console.log(texto); // 

if(true){
    let texto = "agustin"; 
    console.log(texto);
} 

console.log(texto);
// let solo me permite mostrar una variable x bloque mientras que var es mas global
// let limita la variable mientras que var no 