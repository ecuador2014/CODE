import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiNuevoComponenteComponent } from './mi-nuevo-componente/mi-nuevo-componente.component';

@NgModule({
  declarations: [
    AppComponent,
    MiNuevoComponenteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
