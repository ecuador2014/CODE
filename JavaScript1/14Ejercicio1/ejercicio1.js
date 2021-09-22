'use strict'
/*Programa que pida dos numeros y que nos diga cual es el mayor y cual es el menor 
y si son iguales */
// si los numeros no son numeros o son iguales a 0 que me vuelva a pedir.

var numero1 = parseInt(prompt('Introduce el primer numero', 0));
var numero2 = parseInt(prompt('Introduce el segundo numero', 0));

while(numero1 <= 0 || numero2 <= 0 ||  isNaN(numero1) || isNaN(numero2)){
    numero1 = parseInt(prompt('Introduce el primer numero', 0));
    numero2 = parseInt(prompt('Introduce el segundo numero', 0));
}
console.log(numero1, numero2);

if(numero1 == numero2){
    alert("Los numeros son iguales");

} else if( numero1 > numero2){ 
    alert("El numero Myor es: "+ numero1);
    alert("El numero Menor es: "+ numero2);
} else if( numero2 > numero1){
    alert("El numero Myor es: "+ numero2);
    alert("El numero Menor es: "+ numero1);
} else {( numero1 > numero2)
    alert("Introduce los numeros correctos");
}


