import { Component, OnInit } from '@angular/core';
import { Producto } from '../shared/producto';

@Component({
  selector: 'ecom-productos',
  templateUrl: './productos.component.html'
})
export class ProductosComponent implements OnInit {

  selectedProducto: Producto;

  constructor() { }

  ngOnInit() {
  }

}
