'use strict'
/* el break dentro de una estructura de control nos ayuda a salir 
detro la estructura de control y dejar de ejecutar */

// bucle While
var year = 2018;

while(year != 1991){
    // ejecuta esto
    console.log("estamos en el year: " +year);

    if (year == 2000){
        break; // corta la ejecucion
    }

    year --;
}

// Do while 
var years = 30;
do{
    alert("Solo cuando sea diferente a 20");
    years --;
} while(years > 25 )

