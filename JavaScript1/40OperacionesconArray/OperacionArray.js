'use strict'

var categorias = ["juan", "pedro", "Marcos", 12];
var peliculas = ["La verdad duele", "la vida es bella", "gran torino"];

var cine = [categorias, peliculas];

//console.log(cine[0][1]);
//console.log(cine[1][2]);

var elemento = prompt("Introduce tu pelicula");

while(elemento != "ACABAR"){
    elemento = prompt("Introduce tu pelicula favorita");
    peliculas.push(elemento);
}


//peliculas.push("Batman");  // agrego un elemento al array peliculas
console.log(peliculas); 

