const saludo = "¡Tu texto es: "

let texto = prompt("Por favor, ingresa un texto:")
let textoLargo = texto.length > 10
var textoCompleto = saludo + texto
var valorNulo = null
let negacion = !textoLargo

console.log(textoCompleto)
console.log("¿El texto es largo? " + textoLargo)
console.log("Negación: " + negacion)
console.log("Valor nulo: " + valorNulo)