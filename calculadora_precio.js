const descuento = prompt("Ingrese el descuento (en 0. y algo)")

var precioOriginal = parseFloat(prompt("Ingrese el precio del producto:"))
let precioDescuento = precioOriginal * (1 - descuento)
var MayorCien = precioOriginal > 100
let negacion = !MayorCien
var variableSinAsignar

console.log("Precio con descuento: $" + precioDescuento)
console.log("¿El precio original es mayor a $100?: " + MayorCien)
console.log("Negación de la comparación: " + negacion)
console.log("Variable sin asignar: " + variableSinAsignar)