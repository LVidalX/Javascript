/*Hacer una funcion que diga calcular porcentaje y que reciba como argumento el numero de estudiantes 
de un ciclo, recibir parametro, calcular porcentaje if 34 = 100%, este curso representa el 15% o curso
*/

let estds;

estds = Number(prompt("Ingresa el numero de estudiantes de primer ciclo"));
Get_Porcentaje(estds);

function Get_Porcentaje(estds){
    let porcentaje;
    if(estds >= 100 && estds < 500){
        porcentaje = (estds*0.100);
        alert("Representa el: "+porcentaje+"% de estudiantes");
    } else {
        alert("Fin");
    }
}


   

