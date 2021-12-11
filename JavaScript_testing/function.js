// Primer ejemplo
function multiplicar() { // Función que multiplica dos números
    return 4 * 5;         // Devuelve el resultado
}                         // Fin de la función
console.log(multiplicar()); // la llamada a la función multiplicar()
console.log(multiplicar());



// segundo ejemplo
let inicial = 3; // variable global

function sumar() { // Función que suma dos números
    inicial += 4;  // Modifica la variable global
    return inicial; // Devuelve el resultado
}                    // Fin de la función
console.log(sumar()); // la llamada a la función sumar()
console.log(sumar());
console.log(sumar());

// tercer ejemplo
function sumar(num1, num2) { // Función que suma dos números
    return num1 + num2;      // Devuelve el resultado
}                         // Fin de la función
console.log(sumar(3, 8)); // la llamada a la función sumar()
console.log(sumar(3, 10));
console.log(sumar(3, 14));

// cuarto ejemplo
function sumar(a=0, b=0) { // Función que suma dos números
    return a + b;          // Devuelve el resultado
}                         // Fin de la función
console.log(sumar(3, 8)); // la llamada a la función sumar()
console.log(sumar(3, 10));

// quinto ejemplo
function sumar(a=0, b=0) { // Función que suma dos números
    return a + b;          // Devuelve el resultado
}                         // Fin de la función
console.log(sumar()); // la llamada a la función sumar()
console.log(sumar(3));

// sexto ejemplo
function sumar() {
    let suma = 0;
    for (let i = 0; i < arguments.length; i++) {
        suma += arguments[i];
    }
    return suma;
}

console.log(sumar(1, 2, 3, 4, 5));


// septimo ejemplo
function sumar() {
    let suma = 0;
    for (let i of arguments) {
        suma += i;
    }
    return suma;
}

console.log(sumar(5, 5, 5, 5, 5));
