let usuario = { nombre: "Juan", 
edad: 20,
alis: "Alis",
apellido: "Perez",
 direccion: {
    calle: "Calle falsa",
    numero: 123
}
};

let usuario2 = JSON.parse(JSON.stringify(usuario));
usuario2.nombre = "Pedro"
console.log(usuario);
console.log(usuario2);

// simplemente copia el objeto, no modifica el original
