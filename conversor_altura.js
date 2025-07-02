const RefAltura = 1.5
const Esalto = AlturaMetro > RefAltura

let AlturaMetro = prompt("Por favor, ingresa tu altura en metros:")
AlturaMetro = parseFloat(AlturaMetro)
let AlturaCm = AlturaMetro * 100
var AlturaMl = AlturaCm * 10
let undefinedVar

console.log("Altura en centímetros:", AlturaCm)
console.log("Altura en milímetros:", AlturaMl)
console.log("¿Es alta?:", Esalto)
console.log("Valor de la variable sin asignar:", undefinedVar)