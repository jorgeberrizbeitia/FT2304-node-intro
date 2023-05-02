var http = require('http');



http.createServer( (req, res) => {
  // que va a ocurrir cuando reciba una solicitud de un cliente
  // req => toda la información de la solicitud
  console.log(req.url)
  // res => toda la información de la respuesta
  if (req.url === "/") {
    // que es lo que vamos a enviar al cliente.
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Bienvenido a mi pagina');
    res.end();
  } else if (req.url === "/profile") {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Bienvenido a tu perfil');
    res.end();
  }
})

// continuamente escucha en el puerto 8080 cualquier solicitud de un cliente
.listen(8080);