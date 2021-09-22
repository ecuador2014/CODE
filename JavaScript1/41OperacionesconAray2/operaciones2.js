'use strict'

var categorias = ["juan", "pedro", "Marcos", 12];
var peliculas = ["La verdad duele", "la vida es bella", "gran torino"];

var cine = [categorias, peliculas];

var elemento = "";

do{
    elemento = prompt("Introduce tu pelicula: ");
    peliculas.push(elemento);
}while(elemento != "ACABAR");

peliculas.pop(); 
// elimina el ultimo elemento del array si comtinuo colocando pop() se sigen eliminado los elementos

peliculas[0] = undefined; // reemplazar un elemento de mi array por undefined

console.log(peliculas);
