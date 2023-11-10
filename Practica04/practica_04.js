// Realizar un programa que calcule el valor a pagar de una carrera en un taxi

'use strict'

const kilometro_r = 0.55;
const tarifa_arranque = 0.25; 
const carrera_i = 1.50
let km ;
let mult;
let t_pagar;

alert("Taximetro");
km=Number(prompt("Ingrese los kilometros recorridos"));
mult=(km*kilometro_r);
t_pagar=(mult+tarifa_arranque);
if(t_pagar>carrera_i){
   alert("El valor a pagar es: "+t_pagar+"$");
  }else if(t_pagar<carrera_i) {
    alert("El valor a pagar es: "+carrera_i+"$");
    alert("Fin");
}













