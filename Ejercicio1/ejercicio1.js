/*Una empresa esta en busqueda de un conductor y ha establecido dos requisitos fundamentales 
el candidato debe tener 25 años o mas, ademas de poseer una licencia profesional. 
Tu tarea es crear un programa que almacene estos dos datos en dos variables(una de tipo number y la otra boolean)
validarlos usando una sentencia if. Si el candidato cumple con ambos requisitos, mostrara        Nullist conshil 
*/

'use strict'

let edad; 
let li_pro = Boolean;

edad = Number(prompt("Ingresa tu edad"));
li_pro = (prompt("Tienes una licencia profesional?"));
if(li_pro =='si') {
    li_pro = true;
}  else {
    li_pro = false;
}


if(edad >=25 && li_pro == true) {
    alert("Apto");
}  else {
    alert("No apto");
}

