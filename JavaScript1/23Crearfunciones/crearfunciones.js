'use strict'
/* Funciones
    Que son las funciones son un grupo de ordenes agrupados con un nombre concreto
se puede reutilizar cuantas veces requiera. */
// Una funcion es una agrupacion reutilizable de un conjunto de instruciones


// Defino la funcion
function calculadora(){                                // function me permite crear una funcion
    //conjunto de instruccion a ejecutar   
    console.log("Hola soy la ");
    console.log("calculadora");
    
    //return "Soy la calculadora";                      // devolver los valores
}

//console.log(calculadora(), calculadora(),calculadora());
// puedo llamar asi o como esta abajo


// invocar o llamar a la funcion y lo puedo hacer las veces que deseo
calculadora();
calculadora();

// tambien puedo meterla en una vaiable
//var resultado = calculadora();
//console.log(resultado)