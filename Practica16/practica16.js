'use strict'

/*Escribe una funcion que tome el año de nacimiento como argumento 
y muestre en un alert la edad correspondiente*/

let suma; 
let ingresos;

function getProm(a,b,c){
    let promedio;
    let suma =(a+b+c);
    promedio = (suma/3); 
    alert("Promedio: "+promedio);

    if(promedio>=8.5 && ingresos < 600){
        alert("Aprobado");
    } else {
        alert("Desaprobado");
    }
}

let a = Number(prompt("Ingresa la nota del primero momento"));
let b = Number(prompt("Ingresa la nota del segundo momento")); 
let c = Number(prompt("Ingresa la nota del tercer momento")); 
ingresos = Number(prompt("Ingresa tus ingresos"));

getProm(a,b,c);
