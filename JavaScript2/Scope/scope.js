//Scope o alacanze es una coleccion de variables, funciones y objetos que estan a tu alacanze
// todo codigo que este alcanze de SCOPE le pertenece

var nombre = "uriel";        // scope universal

function switch_nombre() {
  var nombre = "marcos";       // scope local
  console.log(nombre);
}

switch_nombre();
console.log(nombre);
