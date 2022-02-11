import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { ShowUserComponent } from './usuario/show-user/show-user.component';
import { AddEditUserComponent } from './usuario/add-edit-user/add-edit-user.component';
import { SharedService} from './shared.service';
import { HttpClientModule} from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IngresoComponent } from './ingreso/ingreso.component';
import { HomeComponent } from './ingreso/home/home.component';
import { HomeCompradorComponent } from './ingreso/homeComprador/homeComprador.component';
import { MasterProductosComponent } from './masterproductos/masterproduct.component';
import { ShowMasterproductComponent } from './masterproductos/show-masterproduct/show-masterproduct.component';
import { AddEditMasterProductComponent } from './masterproductos/add-edit-masterproduct/add-edit-masterproduct.component';
import { ViewModalProductComponent } from './masterproductos/view-modal-product/view-modal-product.component';


@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    ShowUserComponent,
    AddEditUserComponent,
    IngresoComponent,
    HomeComponent,
    HomeCompradorComponent,
    MasterProductosComponent,
    ShowMasterproductComponent,
    AddEditMasterProductComponent,
    ViewModalProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent],
})
export class AppModule { }
