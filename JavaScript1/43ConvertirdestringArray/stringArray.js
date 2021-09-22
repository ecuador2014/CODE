'use strict'

var categorias = ["juan", "pedro", "Marcos", 12];
var peliculas = ["La verdad duele", "la vida es bella", "gran torino"];

var cine = [categorias, peliculas];

var indice = peliculas.indexOf("gran torino");
if(indice > -1){
    peliculas.slice(indice, 1);
}

var peliculas_string = peliculas.join(); 

var cadena = "texto1, texto2, texto3";
var cadena_array = cadena.split(", ");

console.log(cadena_array);

