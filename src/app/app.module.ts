import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgForm } from  '@angular/forms/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { MonedaComponent } from './moneda/moneda.component';
import { LongitudComponent } from './longitud/longitud.component';
import { AreaComponent } from './area/area.component';
import { MasaComponent } from './masa/masa.component';
import { VolumenComponent } from './volumen/volumen.component';
import { TemperaturaComponent } from './temperatura/temperatura.component';
import { CombustibleComponent } from './combustible/combustible.component';
import { CocinaComponent } from './cocina/cocina.component';
import { VelocidadComponent } from './velocidad/velocidad.component';
import { TiempoComponent } from './tiempo/tiempo.component';
import { AnguloComponent } from './angulo/angulo.component';
import { DensidadComponent } from './densidad/densidad.component';

@NgModule({
  declarations: [
    AppComponent,
    CalculadoraComponent,
    MonedaComponent,
    LongitudComponent,
    AreaComponent,
    MasaComponent,
    VolumenComponent,
    TemperaturaComponent,
    CombustibleComponent,
    CocinaComponent,
    VelocidadComponent,
    TiempoComponent,
    AnguloComponent,
    DensidadComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
