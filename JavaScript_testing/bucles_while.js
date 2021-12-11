let i = 0; // Inicializamos la variable i a 0
while (i < 100) { // Mientras i sea menor que 10
    console.log(i); // Imprimimos i
    i++; // Incrementamos i
}

let lista = [1, 2, 3, 4, 5, 30, 40, 44, 55]; // Inicializamos la variable j con un array
let numero = 0; // Inicializamos la variable k a 0
while (numero < 30){
    numero = lista.shift(); // Sacamos el primer elemento del array
    console.log(numero); // Imprimimos el elemento
}

console.log(lista); // Imprimimos el array
