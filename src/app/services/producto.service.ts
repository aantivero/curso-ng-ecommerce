import { Injectable } from '@angular/core';
import { Producto } from '../shared/producto';
import { Ingrediente } from '../shared/ingrediente';

@Injectable()
export class ProductoService {

  static milanesa = new Ingrediente('Milanesa');
  static papasFritas = new Ingrediente('Papas Fritas');
  static pizza = new Ingrediente('Pizza');
  static tomate = new Ingrediente('Tomate');
  static jyq = new Ingrediente('Jamon y Queso');

  private productos: Producto[] = [
    new Producto('milanesa & papas fritas', 'milanesa de carne vacuna con papas fritas',
    'https://www.viajejet.com/wp-content/viajes/Plato-de-milanesa-con-papas-ti%CC%81pico-de-Argentina.jpg', [
      ProductoService.milanesa, ProductoService.papasFritas
    ]),
    new Producto('milanesa napolitana', 'milanesa de carne vacuna a la napolitana con papas fritas',
    'http://chajarivirtual.com.ar/wp-content/uploads/2014/01/milanesa-a-la-napolitana.jpg', [
      ProductoService.milanesa, ProductoService.papasFritas, ProductoService.tomate, ProductoService.jyq
    ]),
    new Producto('pizza napolitana', 'pizza a la napolitana',
    'https://t2.rg.ltmcdn.com/es/images/8/5/2/img_pizza_napolitana_con_anchoas_13258_300_150.jpg', [
      ProductoService.pizza, ProductoService.tomate, ProductoService.jyq
    ])
];

  constructor() { }

  getProductos() {
    return this.productos;
  }
}
