import { Component, OnInit, Input } from '@angular/core';
import { Producto } from "../producto";

@Component({
  selector: 'ecom-producto-item',
  templateUrl: './producto-item.component.html'
})
export class ProductoItemComponent implements OnInit {

  @Input() producto: Producto;

  productoId: number;

  constructor() { }

  ngOnInit() {
  }

}
