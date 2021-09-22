// Operadores Logicos y Condicional

/* 
AND(Y): &&
OR(O): ||
NEGACION: !
*/

// Negacion
var year = 2018;
if (year != 2016){
    console.log("No es realmente 2016 es: " +year);
}

// AND 
if (year >= 2000 && year <= 2020 && year != 2018){     // concateno estos operadores logicos concateno varias condiciones
    console.log("Estamos en la era actual");
} else{
    console.log("Estamos en la era postmoderna");
}

//OR
if (year == 2008 || year == 2018){
    console.log("El year acaba en 18");
} else {
    console.log("El year acaba en 08");
}


