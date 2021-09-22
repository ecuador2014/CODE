'use strict'
// plantillas de texto

var nombre = prompt("Ingrese su nombre");
var apellido = prompt("Ingrese su apellido");

var texto = "Mi nombre es:  "+nombre+" <br/> Mis apellidos son: "+apellido;

var texto = `
    <h1> Hola que tal </h1>
    <h3> Mi nombre es: ${nombre}</h3>          
    <h3> Mi apellido es: ${apellido}</h3>
`;

document.write(texto);

// $() se interpolo o imprimo.

