import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroeComponent } from './pages/heroe/heroe.component';
import { HomeComponent } from './pages/home/home.component';
import { ListadoComponent } from './pages/listado/listado.component';
import { BuscarComponent } from './pages/buscar/buscar.component';
import { AgregarComponent } from './pages/agregar/agregar.component';



@NgModule({
  declarations: [
    HeroeComponent,
    HomeComponent,
    ListadoComponent,
    BuscarComponent,
    AgregarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class HeroesModule { }
