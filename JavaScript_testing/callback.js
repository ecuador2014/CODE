function llamar(callback) { // callback es una argumento
  callback();               // callback() es una funcion
}                            
llamar(function() {       
  console.log("Hola");       
}
);


// otro ejemplo
function llamar2(callback) {
    callback("Hola");
    }
llamar2(console.log);


// otro ejemplo
function llamar3(callback) {
    callback("Hola" + " " + "Mundo");
    }
llamar3(console.log);


// otro ejemplo
function llamar4(enExito, enError) {
    enExito("Hola");
    enError("Mundo");
    }
llamar4(console.log, console.error);

// otro ejemplo
function llamar5(enExito, enError) {
    let exito = true;
    if (exito) { 
        enExito();
    } else {
        enError();
    }
    }
llamar5(
    function() { console.log("Exito"); },
    function() { console.log("Error"); }
);
// este ejemplo es el mas comun en la vida real

// otro ejemplo
