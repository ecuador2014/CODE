function sumar(a, b) {
  return a + b;
}
console.log(sumar(1, 2));


// hay funciones que no devuelven nada
function sumar2(a, b) {
    console.log(a + b);
  }
  sumar2(1, 2);


// otro ejemplo
function imprimir() {
    console.log("Hola");
  }
  imprimir();

// ahora usando una funcion cambiamos un objeto
let usuario = {
    nombre: "Juan",
    apellido: "Perez",
};

function cambiarApellido(objeto) {
    objeto.apellido = "Palacios";
}
cambiarApellido(usuario);
console.log(usuario);

// haciendo una copia del objeto
et usuario2 = {
    nombre: "Pedro",
    apellido: "Perez",
};

function cambiarApellido(objeto) {
    objeto.apellido = "Palacios";
    let copia = JSON.parse(JSON.stringify(objeto));
}
cambiarApellido(usuario2);
console.log(usuario2);

