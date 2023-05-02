const express = require('express')
const app = express() // app será todo el objeto de nuestro servidor

// Una ruta que va a escuchar cuando el usuario vaya a el path "/"
app.get('/', (req, res) => {

  // 1. req => toda la info de la solicitud del cliente
  // 2. res => toda la info de la respuesta al cliente

  // res.send enviar un mensaje sencillo el cliente
  res.send('Respuesta del servidor Express')
})

// Otra ruta para "/patata"
app.get("/patata", (req, res) => {
  res.send("Aqui tienes una patata")
})

app.get("/friends/all", (req, res) => {
  res.send("Esta es la info de todos mis amigos")
})

// Rutas dinamicas => "/:nombreDeCajitaQueAlmacenaValor"
// req.params es donde estan las cajitas de parametros dinamicos
// ruta sea para cada amigo en especifico
app.get("/friends/:friendName", (req, res) => {

  console.log(req.params)
  // console.log(friendName)
  if (req.params.friendName === "caro") {
    res.send("Esta es la info de Caro")
  } else if (req.params.friendName === "ruth") {
    res.send("Esta es la info de Ruth")
  } else {
    res.send("Lo siento, no tengo más amigos :(")
  }


})

const port = 3000
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})