let tutor = {
  nombre: "cesar",
  apellido: "palacios",
  nombreCompleto: function(){
    setTimeout(()=>{
      console.log(this.nombre + " " + this.apellido);
    }, 1000 );
  }
}

tutor.nombreCompleto();
