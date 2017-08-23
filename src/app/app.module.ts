import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoListaComponent } from './productos/producto-lista/producto-lista.component';
import { ProductoItemComponent } from './productos/producto-lista/producto-item.component';
import { ProductoDetalleComponent } from './productos/producto-detalle/producto-detalle.component';
import { CarritoListaComponent } from './carrito-lista/carrito-lista.component';
import { CarritoListaAgregarComponent } from './carrito-lista/carrito-lista-agregar.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductosComponent,
    ProductoListaComponent,
    ProductoItemComponent,
    ProductoDetalleComponent,
    CarritoListaComponent,
    CarritoListaAgregarComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
