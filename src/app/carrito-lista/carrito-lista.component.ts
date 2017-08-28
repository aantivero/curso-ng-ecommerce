import { Component, OnInit } from '@angular/core';
import { CarritoListaService } from '../services/index';
import { Ingrediente } from '../shared/ingrediente';

@Component({
  selector: 'ecom-carrito-lista',
  templateUrl: './carrito-lista.component.html'
})
export class CarritoListaComponent implements OnInit {

  items: Ingrediente[] = [];

  constructor(private carritoListaService: CarritoListaService) { }

  ngOnInit() {
    this.items = this.carritoListaService.getIngredientes();
  }

}
