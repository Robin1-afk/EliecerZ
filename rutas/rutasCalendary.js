const rutas = require('express').Router();
const methods = require('../controller/agendaController');

rutas.get('/', methods.getProductos); //get Consulta
rutas.get('/:id', methods.getProductosId); //get Consulta ID
rutas.post('/', methods.addProductos);//post Agregar
// rutas.put('/:Id', methods.updateProductos);//post Actualizar
rutas.delete('/:id', methods.deleteProductos);//delete Eliminar

//

module.exports = rutas;
    