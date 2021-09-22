'use strict'
// metodo de busqueda 

var numero = 111;
var texto1 = "dios lo maximo de mi vida";
var texto2 = "Ecuador lindo pais";

//var busqueda = texto1.indexOf("vida");  //indexOf me indica la posicion de la palabra
//var busqueda = texto1.lastIndexOf("vida"); // lastIndexOf me indica la ultima considencia

var busqueda = texto1.search("mi"); //  search es un alias es decir similar a indexOf
//var busqueda = texto1.match(/mi/g); // match cuando tenemos muchas palabras, la G = global
//var busqueda = texto1.substr(14,5); // me cuenta desde el caracter 14 a 5
//var busqueda = texto1.charAt(9); // me saca la letra deacuerdo al numero marcado
//var busqueda = texto1.startsWith("dios");// me dice si esta o no una plabra pero solo al comienzo
//var busqueda = texto1.includes("mi"); // me dice si esta o no una palabra pero en todo el string


console.log(busqueda);

