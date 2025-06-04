const fs = require('fs');
const http = require('http');
const soap = require('strong-soap').soap;

const servicio = require('./servicio');
const wsdlXml = fs.readFileSync('tienda.wsdl', 'utf8');

const server = http.createServer(function (req, res) {
  res.end('Servidor SOAP activo');
});

const PORT = 8000;

soap.listen(server, '/tienda', servicio, wsdlXml);
server.listen(PORT, () => {
  console.log(`Servidor SOAP corriendo en http://localhost:${PORT}/tienda?wsdl`);
});
