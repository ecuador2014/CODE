'use strict'
// Mostrar todos numeros impares que hay entre dos numeros introducidos por el usuario

var numero1 = parseInt(prompt("Introducir el numero 1",0));
var numero2 = parseInt(prompt("Introducir el numero 2",0));

while(numero1 < numero2){
    numero1 ++;
    
    if(numero1%2 != 0){
        console.log("El " + numero1 +" es impar");
    }
}