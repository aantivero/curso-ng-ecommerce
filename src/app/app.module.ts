import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header.component';
import { DropDownDirective} from './dropdown.directive';
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
    DropDownDirective,
    ProductosComponent,
    ProductoListaComponent,
    ProductoItemComponent,
    ProductoDetalleComponent,
    CarritoListaComponent,
    CarritoListaAgregarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterialModule,
    FlexLayoutModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
