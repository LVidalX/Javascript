alert("Tomar la taza");
   cafe = prompt("El cafe esta frio?");
    if (cafe == "si") 
       alert("calentar cafe*");
       cafe++;
       if (cafe == 1) {
        alert("El cafe esta caliente");
    } else {
        alert("El cafe esta listo para servir en la taza");
}

//Operador de comparacion  04
let a = 9;
let b = 4;
let c = 2;

//alert (/a < b);
//alert (a <= c);

if( (a < b)>c){
   alert("a menor que b");
}
else {
    alert("a es mayor que c");
}

//Practica 06
/* 
Crear dos variables para almacenar las edades de 2 personas,
y luego comparar las edades y mostrar en pantalla quien es mayor
*/
'use strict'
let edad;
let edad2;
let mayor;

edad = prompt("Ingresa la edad de la primera persona")
edad2 = prompt("Ingresa la edad de la segunda persona")
if(edad<edad2){
    alert("La primera persona es mayor");

}   else if(edad>edad2) {
    alert("La segunda persona es mayor")
}   else if(edad==edad2) {
    alert("Edad de la primera persona: "+edad+" / Edad de la segunda persona: "+edad2);
    let mayor = confirm("Las 2 personas tienen la misma edad?");
    if (mayor==true) {
       alert("Verificado"); 
    }
    else if(mayor==false) {
    alert("Las 2 personas no tienen la misma edad");
}
}



