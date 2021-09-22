'use strict'

function porpantalla(numero1,numero2){
    console.log("suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1/numero2));
    console.log("************");
}

function porconsola(numero1, numero2){
    document.write("suma: " + (numero1+numero2)+"<br/>");
    document.write("Resta: " + (numero1-numero2)+"<br/>");
    document.write("Multiplicacion: " + (numero1*numero2)+"<br/>");
    document.write("Division: " + (numero1/numero2)+"<br/>");
    document.write("************"+"<br/>");
}

function calculadora(numero1, numero2, mostrar = false){

if(mostrar == false){
    porconsola(numero1,numero2);
}else{
    porpantalla(numero1,numero2);
}

return true;

}
calculadora(8, 8);
calculadora(7, 6, true);
calculadora(5, 8, true);
calculadora(6,7);
