const MESES_POR_AÑO = 12;

let nombre = prompt("Ingresa tu nombre:")
var edadInput = prompt("Ingresa tu edad:")
var pesoInput = prompt("Ingresa tu peso (kg):")
let edad = parseInt(edadInput)
let peso = parseFloat(pesoInput)
var gramos = peso * 1000
let edadEnMeses = edad * MESES_POR_AÑO
let nombreVacio = nombre === ""
let edadPar = edad % 2 === 0
let resultadoLogico = nombreVacio || edadPar

console.log("Nombre: " + nombre)
console.log("Edad en meses: " + edadEnMeses)
console.log("Peso en gramos: " + gramos)
console.log("¿El nombre está vacío? " + nombreVacio)
console.log("¿La edad es par? " + edadPar)
console.log("Resultado lógico (nombre vacío O edad par): " + resultadoLogico)