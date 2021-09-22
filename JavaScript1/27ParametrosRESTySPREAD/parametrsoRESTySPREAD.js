'use strict'
/* Parametros REST y SPREAD
los 3 puntos me permiten usar el parametro REST
se guardan en un array o una lista */

function listadoFrutas(frutas1, frutas2, ...resto_de_frutas){
    console.log("frutas1",frutas1);
    console.log("frutas2",frutas2);
    console.log(resto_de_frutas);
}

listadoFrutas("Naranja, sandia, limon", "Melon", "coco","cana","pera");

var frutas = ["Tomate","limon","pepino","cebolla"];
listadoFrutas(...frutas, "Naranja, sandia, limon", "Melon", "coco","cana","pera");
//el SPREAD es una combinacin entre el ARRAY y el REST

