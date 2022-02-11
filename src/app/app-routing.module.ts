import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UsuarioComponent } from './usuario/usuario.component';
import { IngresoComponent } from './ingreso/ingreso.component';
import { HomeComponent } from './ingreso/home/home.component';
import { HomeCompradorComponent } from './ingreso/homeComprador/homeComprador.component';
import { MasterProductosComponent } from './masterproductos/masterproduct.component';

const routes: Routes = [
  {path:'usuario', component:UsuarioComponent},
  {path:'ingreso', component:IngresoComponent},
  {path:'ingreso/home', component:HomeComponent},
  {path:'ingreso/homeComprador', component:HomeCompradorComponent},
  {path:'productos', component:MasterProductosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
