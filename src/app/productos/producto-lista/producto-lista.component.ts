import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from "../producto";

@Component({
  selector: 'ecom-producto-lista',
  templateUrl: './producto-lista.component.html'
})
export class ProductoListaComponent implements OnInit {

  productos: Producto[] = [];

  @Output() productoSelected = new EventEmitter<Producto>();

  producto = new Producto('Jhonny Walker', 'Jhonny Walker Black Label', 'https://img.clasf.com.ar/2015/09/06/Whisky-Johnny-Walker-Etiqueta-Negra-Colegiales-20150906234501.jpg');

  constructor() { }

  ngOnInit() {
  }

  onSelected(producto: Producto) {
    this.productoSelected.emit(producto);
  }

}
