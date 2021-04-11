import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

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


const routes: Routes = [
  { path: 'calculadora', component: CalculadoraComponent },
  { path: 'moneda', component: MonedaComponent },
  { path: 'longitud', component: LongitudComponent },
  { path: 'area', component: AreaComponent },
  { path: 'masa', component: MasaComponent },
  { path: 'volumen', component: VolumenComponent },
  { path: 'temperatura', component: TemperaturaComponent },
  { path: 'combustible', component: CombustibleComponent },
  { path: 'cocina', component: CocinaComponent },
  { path: 'velocidad', component: VelocidadComponent },
  { path: 'tiempo', component: TiempoComponent },
  { path: 'angulo', component: AnguloComponent },
  { path: 'densidad', component: DensidadComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
