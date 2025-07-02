const iguales = (numero1 === numero2)
const resultadoLogico = iguales || false

var entrada1 = prompt("Por favor, ingrese el primer número:")
var entrada2 = prompt("Por favor, ingrese el segundo número:")
let numero1 = parseFloat(entrada1)
let numero2 = parseFloat(entrada2)
var suma = numero1 + numero2
let diferencia = numero1 - numero2

console.log("Suma: " + suma)
console.log("Diferencia: " + diferencia)
console.log("¿Los números son estrictamente iguales? " + iguales)
console.log("Resultado de la combinación lógica (iguales || false): " + resultadoLogico)