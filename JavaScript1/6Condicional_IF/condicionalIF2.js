'use strcit'
// Condicional IF
// SI A es igual a B entonces haz algo

var edad = 34;
var nombre = 'cesar';

if (edad >= 18 ){
    console.log(nombre+" tiene "+edad+" ages, es mayor de edad");
    
    if(edad == 33){
        console.log("todavia eres milleniam");
    }else if(edad>=70){
        console.log("Eres viejo");
    }else{
        console.log("ya no eres milleniam");
    }
}

else{
    console.log(nombre+ " tiene " +edad+ " ages, menor de edad");
}

