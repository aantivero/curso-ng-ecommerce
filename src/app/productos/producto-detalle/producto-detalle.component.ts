import { Component, OnInit, Input } from '@angular/core';
import { Producto } from '../../shared/producto';
import { CarritoListaService } from '../../services/index';

@Component({
  selector: 'ecom-producto-detalle',
  templateUrl: './producto-detalle.component.html'
})
export class ProductoDetalleComponent implements OnInit {

  @Input() selectedProducto: Producto;

  constructor(private carritoListaService: CarritoListaService) { }

  ngOnInit() {
  }

  onAddToCarritoLista() {
    this.carritoListaService.addIngredientes(this.selectedProducto.ingredientes);
  }
}
