

console.log("ejecutando algo en test.js")

const peli1 = {
  title: "Avengers Endgame",
  description: "Mejor peli ever"
}

const peli2 = {
  title: "Jurassic Park",
  description: "Dinosaurios libres"
}


// para exportar un elemento (modulo)
module.exports = {
  peli1: peli1,
  peli2: peli2
}

// cada archivo SOLO puede tener un module.exports