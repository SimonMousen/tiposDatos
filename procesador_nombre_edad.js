const DiasAño = 365

var nombre = prompt("Por favor, ingresa tu nombre:")
let edadStr = prompt("Por favor, ingresa tu edad:")
let edad = parseInt(edadStr)
let edadDias = edad * DiasAño
let nombreCorto = nombre.length < 5
let valorNulo = null

console.log("Nombre: " + nombre)
console.log("Edad en días: " + edadDias)
console.log("¿El nombre tiene menos de 5 caracteres?: " + nombreCorto)
console.log("Valor nulo: " + valorNulo)