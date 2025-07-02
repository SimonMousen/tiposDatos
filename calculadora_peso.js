const limitePeso = 70

var entradaPeso = prompt("Por favor, ingrese su peso en kilogramos:")
let pesoKg = parseFloat(entradaPeso)
let pesoGramos = pesoKg * 1000
var esMayor = pesoKg > limitePeso
var combinacionLogica = esMayor && true

console.log("Peso en gramos:", pesoGramos)
console.log("¿Peso mayor a " + limitePeso + " kg?:", esMayor)
console.log("Resultado combinación lógica:", combinacionLogica)