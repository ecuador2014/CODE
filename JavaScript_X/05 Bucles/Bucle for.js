let lista = ['gato', 'perro', 'elefante', 'dinosaurio', 'tortuga'];
// for (let i = 6; i <= 10; i += 2) {
//     console.log(i);
// }
for (let i = 0; i < lista.length; i++) {
    let animal = lista[i];

    if (animal === 'dinosaurio') {
        console.log(animal + ' es un animal extinto');
    } else {
        console.log(animal + ' es un animal');
    }
}

let indiceDePerro;
for (let i = 0; i < lista.length; i++) {
    let animal = lista[i];

    if (animal === 'dinosaurio') {
        // break;
        continue;
    }
    console.log('animal vivo: ' + animal);

}
console.log(indiceDePerro);

for (let i = 0; i < 10000; i++) {
    console.log(i);
}
