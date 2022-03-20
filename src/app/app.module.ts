import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { PaisModule } from './pais/pais.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // Todos los módulos van aqui
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    // Se importan los módulos shared, paises
    SharedModule,
    PaisModule,
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { 

}
