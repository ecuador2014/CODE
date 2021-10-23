import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MiNuevoComponenteComponent } from './mi-nuevo-componente/mi-nuevo-componente.component';
import { MiComponente2Component } from './mi-componente2/mi-componente2.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MiNuevoComponenteComponent,
    MiComponente2Component
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
