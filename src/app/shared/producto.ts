import { Ingrediente } from './ingrediente';

export class Producto {
    constructor(public nombre, public descripcion, public imagen, public ingredientes: Ingrediente[]) {
    }
}
