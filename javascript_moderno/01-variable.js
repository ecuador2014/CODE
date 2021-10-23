// ECMA 2021 / E12 / ES.NEXT

// variable: var, let, const
// contenedor de informacion, caja para guardar dato
// VAR ambito global o funcional
// LET ambito de bloque
// CONST es una variable que su contenido no es variable

var nombre = 'cesar palacios';
const edad = 10;

function mostrarNombre(){
  let nombre = 'juan';
  let apellido = 'palacios';
  console.log('dentro:', nombre);
  console.log('dentro:', apellido);
}

console.log(edad);
mostrarNombre();
console.log('fuera:', nombre);
