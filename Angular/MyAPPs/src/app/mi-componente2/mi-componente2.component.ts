import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mi-componente2',
  templateUrl: './mi-componente2.component.html',
  styleUrls: ['./mi-componente2.component.css']
})
export class MiComponente2Component implements OnInit {
  nombre="Cesar";
  apellido="Palacios";
  edad = 18;
  empresa="CAPAX";



  getEdad(){
    return this.edad;
  }
 enablesquard=false;

  userRegistrado=false;
  textoDeRegistro="No hay nadie registrado";

  getRegistroUsuario(){
    this.userRegistrado=false;
  }

  setusuarioRegistrado(event:Event){
    //alert("El usuario caba de ser registado");
    //this.textoDeRegistro="El usuario acaba de ser registrado";
    if((<HTMLInputElement>event.target).value=="si"){
      this.textoDeRegistro="El usuario acaba de ser registrado";
    }else{
      this.textoDeRegistro="No hay nadie registrado";
    }
  }




  constructor() { }

  ngOnInit(): void {
  }

}
