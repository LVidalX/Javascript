/*El Instituto Sudamericano ha definido los criterios para otorgar las Becas
Estudiantiles, especificando que el estudiante debe mantener un promedio igual o superior a 8.5
y que los ingresos mensuales familiares no superen los 600 dolares. Se requiere un programa que
verifique estas condiciones ingresando la informacion correspondiente y muestre un mensaje de 
"Aprobado" o "Desaprobado".
*/

'use strict'

let ingresos;
let a;
let b; 
let c; 

function Promedio(a,b,c) {
    let sum;
    let promedio;

    sum=(a+b+c);
    promedio=(sum/3);

    if(promedio>=8.5 && ingresos < 600){
        alert("Aprobado");
    } else {
        alert("Desaprobado");
    }
}

a = Number(prompt("Ingrese la nota del primer momento"));
b = Number(prompt("Ingrese la nota del segundo momento"));
c = Number(prompt("Ingrese la nota del tercer momento"));
ingresos = Number(prompt("Ingrese los ingresos mensuales"));

Promedio(a,b,c);
