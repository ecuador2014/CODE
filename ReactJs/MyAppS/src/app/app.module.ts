import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { AlumnosComponent } from './alumnos/alumnos.component';

@NgModule({
  declarations: [
    AppComponent,
    AlumnoComponent,
    AlumnosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
