/**
 * Servicio REST de Productos
 */
var faker = require('faker');
faker.locale = 'es';

function generarProductos() {
    var productos = [];

    for (var id = 0; id < 100; id++) {
        var nombre = faker.commerce.productName();
        var descripcion = faker.commerce.product();
        var imagen = faker.image.imageUrl()

        productos.push({
            "id": id,
            "nombre": nombre,
            "descripcion": descripcion,
            "imagen": imagen
        });
    }
    return {"productos": productos}
}

module.exports = generarProductos;