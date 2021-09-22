function executor(funcion){
  funcion.apply(tutor);
}

let tutor = {
  nombre: "Cesar",
  apellido: "palacios",
  nombreCompleto: function(){
    console.log(this.nombre + " " + this.apellido);
  }
}

executor(tutor.nombreCompleto);
function saluda(nombre){ console.log("hola " + nombre);}
saluda.apply(window, ["cesar"]);
