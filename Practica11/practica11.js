'use strict'
let nota;
nota = 70; 

let validaNota = nota ?? 0; 

alert(validaNota);

let suma = 0;

while(true) {
    let value = +prompt("Ingresa un numero",'');
    if(!value) break;

        suma += value;
}
alert('Suma: '+suma)
