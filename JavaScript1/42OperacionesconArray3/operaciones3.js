'use strict'

var categorias = ["juan", "pedro", "Marcos", 12];
var peliculas = ["La verdad duele", "la vida es bella", "gran torino"];

var cine = [categorias, peliculas];

var indice = peliculas.indexOf("gran torino");
if(indice > -1){
    peliculas.slice(indice, 1);
}

var peliculas_string = peliculas.join(); // convertir un array en un string

console.log(peliculas_string);

