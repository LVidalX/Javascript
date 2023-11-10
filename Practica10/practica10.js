'use strict'
//Muestre un mensaje de apto para vacuna si su edad es menor a 6 o mayor a 65

let edad ; 
let edad_n = 6;

edad = Number(prompt("Ingrese su edad"));
if(edad >=65 || edad <= edad_n) {
    alert("Apto para vacuna");
}  else {
    alert("No apto para vacuna");
}

/*Una oferta laboral menciona el rango de edad como requisito para el puesto. 
Esta es mayor a 18 y menor a 40.
Crear un programa que muestre un mensaje si es apto o no para la vacante.*/

let edad2;

edad2 = Number(prompt("Ingrese su edad"));

if(edad2 > 18 && edad2 <40){
    alert("Apto para la vacante");
}  else {
    alert("No apto para la vacante");
}
