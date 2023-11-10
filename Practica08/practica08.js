'use strict'
 
let num;
let positivo;
let negativo;

num = Number(prompt("Ingresa un numero"));
if(num>=0) {
    alert(num+" Es un numero positivo");
  } else if(num<0) {
    alert(num+" Es un numero negativo");
}


//Notas
'use strict'

let momento;
let momento2;
let momento3;
let suma;
let promedio;

momento = Number(prompt("Ingresa la nota del primer momento"))
momento2 = Number(prompt("Ingresa la nota del segundo momento"))
momento3 = Number(prompt("Ingresa la nota del tercer momento"))

suma =(momento+momento2+momento3);
promedio =(suma/3);

if(promedio>=70) {
    alert("Aprobaste")
} else if(promedio<70) {
    alert("Reprobaste") 
}
    alert("Fin")

