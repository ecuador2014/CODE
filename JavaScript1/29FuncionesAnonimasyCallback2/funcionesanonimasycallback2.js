'use strict'
function sumane(numero1, numero2, sumaymuestra, sumapordos){
    var sumar = numero1 + numero2;

    sumaymuestra(sumar);
    sumapordos(sumar);

    return sumar;
}


sumane(5, 7, function(dato){
    console.log("la suma es: ", dato);
},
function(dato){
    console.log("la suma por dos es: ", (dato*2));
});


// Funcion de FLECHAS
//sumane(5, 7, dato => {
//    console.log("la suma es: ", dato);
//},
//dato => {
//    console.log("la suma por dos es: ", (dato*2));
//});

// en otras palabras sustituimos la palabra function x =>

