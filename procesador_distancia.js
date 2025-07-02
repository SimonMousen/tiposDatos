const metrosKilometro = 1000
const centimetrosMetro = 100

let distanciaKm = parseFloat(prompt("Ingresar la distancia en kilómetros:"))
let distanciaMetros = distanciaKm * metrosKilometro
let distanciaCentimetros = distanciaMetros * centimetrosMetro
var esMenorQueUnKm = distanciaKm < 1
var valorNulo = null

console.log("Distancia en metros: " + distanciaMetros)
console.log("Distancia en centímetros: " + distanciaCentimetros)
console.log("¿La distancia es menor que 1 km? " + esMenorQueUnKm)
console.log("Valor nulo: " + valorNulo)