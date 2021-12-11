let objeto = { 
    nombre: 'Juan',
    apellido: 'Perez',
    edad: 30,
    lista: [1,2,3,4,5],
    Boolean: true,
    objeto: {objeto2: 'hola'},
}

console.log(objeto.nombre);
console.log(objeto.apellido);
console.log(objeto.edad);
console.log(objeto.lista);
console.log(objeto.Boolean);
console.log(objeto.objeto.objeto2);
delete objeto.objeto;
console.log(objeto);

