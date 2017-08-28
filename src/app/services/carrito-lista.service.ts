
import { Ingrediente } from '../shared/ingrediente';

export class CarritoListaService {
    private ingredientes: Ingrediente[] = [];

    constructor() {}

    getIngredientes() {
        return this.ingredientes;
    }

    addIngredientes(ingredientes: Ingrediente[]) {
        Array.prototype.push.apply(this.ingredientes, ingredientes);
    }
}
