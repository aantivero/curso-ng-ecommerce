import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../shared/producto';

@Component({
  selector: 'ecom-producto-detalle',
  templateUrl: './producto-detalle.component.html'
})
export class ProductoDetalleComponent implements OnInit {

  @Input() selectedProducto: Producto;

  constructor() { }

  ngOnInit() {
  }

}
