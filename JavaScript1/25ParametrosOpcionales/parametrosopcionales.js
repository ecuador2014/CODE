'use strict'

function calculadora(numero1, numero2, mostrar = false){

if(mostrar == false){
    console.log("suma: "+(numero1+numero2));
    console.log("Resta: "+(numero1-numero2));
    console.log("Multiplicacion: "+(numero1*numero2));
    console.log("Division: "+(numero1/numero2));
    console.log("************");
}else{
    document.write("suma: " + (numero1+numero2)+"<br/>");
    document.write("Resta: " + (numero1-numero2)+"<br/>");
    document.write("Multiplicacion: " + (numero1*numero2)+"<br/>");
    document.write("Division: " + (numero1/numero2)+"<br/>");
    document.write("************"+"<br/>");
}


}
calculadora(8, 8);
calculadora(7, 6, true);
