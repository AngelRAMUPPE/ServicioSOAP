const productos = require('./productos.json');

const TiendaService = {
  TiendaService: {
    TiendaPort: {
      obtenerTodosLosProductos: function (_, callback) {
        callback({
          productos: JSON.stringify(productos)
        });
      },

      buscarProductoPorId: function (args, callback) {
        const idBuscado = parseInt(args.id);
        const producto = productos.find(p => p.id === idBuscado);
        callback({
          producto: producto ? JSON.stringify(producto) : ''
        });
      }
    }
  }
};

module.exports = TiendaService;
