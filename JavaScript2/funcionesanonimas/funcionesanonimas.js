function executor(funcion) {
  funcion();
}

function decirHola() {
  console.log("Hola");
}

executor(function() {
  // declaracion de funcion Anonima y la enviamos como argumento
  // en la declaracion de argumentos declaramos la funcion que vamos a enviar
  console.log("Hola");
});


/* en programacion cuando un tipo de dato puede ser asignado a una
variable, retornado, o enviado como un argumento se trata de un
first citizen class en javaScript las funciones tambien son FCC
es decir que se pueden almacenar como variable e incluse las funciones
pueden retornar otras funciones
*/
