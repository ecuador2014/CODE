function sumar(a,b) {
    console.log(a + b);
}

//sumar(1,2);
// console.log(sumar(1,2));

let usuario = {
    nombre: 'Ana',
    apellido: 'Perez'
};

function cambiarApellido(objecto) {
    let copia = JSON.parse(JSON.stringify(objecto));
    copia.apellido = 'Ochoa';
    return copia;
}

console.log(cambiarApellido(usuario));
console.log(usuario);