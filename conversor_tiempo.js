const MINUTOS_POR_HORA = 60
const SEGUNDOS_POR_MINUTO = 60

var horas = parseFloat(prompt("Ingresa una cantidad de horas:"))
let minutos = horas * MINUTOS_POR_HORA
var segundos = minutos * SEGUNDOS_POR_MINUTO
let esMayorAUnaHora = horas > 1

console.log("Horas ingresadas: " + horas)
console.log("Minutos: " + minutos)
console.log("Segundos: " + segundos)
console.log("¿Es mayor a 1 hora? " + esMayorAUnaHora)