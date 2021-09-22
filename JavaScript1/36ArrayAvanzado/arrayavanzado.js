'use strict'
//

var nombre = "cesar";
var nombres = ["juan", "david", 34, true, "Pc"];
var nombres1 = new Array ("linux", "windows", "mac", 5, false); 

//console.log(nombres.length); muestra el numero de elementos

var elemento = parseInt(prompt("Que elemento del array quieres??", 0));
if(elemento >= nombres.length){
    alert("introduce el numero correcto" + nombres.length);
}else{
    alert("Elusuario seleccionado es: "+nombres[elemento]);
}

