import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Producto } from '../../shared/producto';
import { Ingrediente } from '../../shared/ingrediente';
import { ProductoService } from '../../services/index';

@Component({
  selector: 'ecom-producto-lista',
  templateUrl: './producto-lista.component.html'
})
export class ProductoListaComponent implements OnInit {

  productos: Producto[] = [];

  @Output() productoSelected = new EventEmitter<Producto>();


  constructor(private productoService: ProductoService) { }

  ngOnInit() {
    this.productos = this.productoService.getProductos();
  }

  onSelected(producto: Producto) {
    this.productoSelected.emit(producto);
  }

}
