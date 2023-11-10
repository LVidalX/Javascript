'use strict'
// Tienda de viveres
let tarifa = 1;
let promocion = 0;
let valor_gnrl = 3;
let valor_agregado;
let n_productos;

alert("Tienda de Viveres")
n_productos = Number(prompt("Ingresa el numero de productos que lleva el Cliente"));
valor_pagar = (valor_gnrl*n_productos);
alert("Ingresando numero de productos***")
alert("Ingresando productos a pagar***")
alert("Procesando***")
if(valor_pagar<20 ) {
    alert("Felicidades!")
    alert("No se te cobrara por el uso del parqueadero")
    alert("El monto a pagar es: "+valor_pagar+"$")
   }else if(valor_pagar<20) {
    alert("No recibes la promocion")
    valor_agregado = valor_pagar+tarifa
    alert("El monto a pagar es: "+valor_agregado+"$")
   }

