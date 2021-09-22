'use strict'
// Parametros que son variables que alteran la logica o el resultado que nos devuleve la funcion

function calculadora(numero1, numero2){
    console.log("Suma: " + (numero1+numero2));
    console.log("Resta: " + (numero1-numero2));
    console.log("Multiplicacion: " + (numero1*numero2));
    console.log("Division: " + (numero1/numero2));
    console.log("******************");

    return "Hola soy una calculadora";
}


calculadora(4,7);
calculadora(8,9);

for(var i = 1; i <= 10; i++){
    console.log(i);
    calculadora(i, 8);
}
