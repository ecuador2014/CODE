// let objeto = { 'uno': 1, 'dos dos': {} };
let objeto = { 
    numero: 1, 
    texto: 'texto', 
    'lista': [], 
    boolean: true, 
    objeto: {
        objeto2: 'Hola'
    } 
};

// console.log(objeto);
// console.log(objeto.numero);
// console.log(objeto.texto);
// console.log(objeto['objeto']['objeto2 dad']);
delete objeto['objeto'];
// console.log(objeto);

let usuario = {
    nombre: 'Xavier',
    apellidos: 'Reyes Ochoa',
    alias: 'Programador X',
};

let numero1 = 1;
let numero2 = numero1;
numero2 = 3;
// console.log(numero1, numero2);

let usuario2 = JSON.parse(JSON.stringify(usuario));
usuario2.alias = 'Programador Z';
console.log(usuario);
console.log(usuario2);

