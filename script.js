console.log("ejecutando JS con node")
// en entorno de node, TODOS los console.log los veremos reflejados en el terminal

let someVar = 0;

someVar = 10;

for(let i = 0; i < someVar; i++) {
  console.log("ejecutando bucle")
}


// para importarlo/requerirlo => traerlo a este archivo

const patata = require("./test.js")
// el requiere hace 2 cosas
// 1. ejecuta TODO el código que haya en el archivo  ./test.js
// 2. (OPCIONAL) Si el archivo test.js está exportando un modulo, entonces lo almacena en la variable

console.log(patata)


// puedo hacer require sin guardar algo en la variable
require("./script2.js")
// 1. ejecuta TODO el código que haya en el archivo  ./script2.js


// quiero buscar algo en la BD


//* Instalar y usar paquetes de NPM

const superheroes = require('superheroes');
// cuando usamos require sin ruta, el sistema automaticamente lo busca en las instalaciones (node_modules)

let randomHero = superheroes.random()
console.log(`mi nombre de superheroe es: ${randomHero}`)


let cool = require('cool-ascii-faces')
console.log(cool())


const cows = require('cows');

const cowsArr = cows()
console.log(cowsArr[45])



// const { faker } = require('@faker-js/faker')
// const algo = require('@faker-js/faker')

// algo.faker