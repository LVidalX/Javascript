/*Se solicita el desarrollo de una aplicacion que permita a los usuarios establecer un apodo utilizando
un prompt. En caso de que el usuario no elija un apodo, se asignara automaticamente el valor predeterminado
"anonymus". Una vez finalizado, se mostrara el apodo ingresado o el valor predeterminado en un alert.
*/

'use strict'
let apodo;

apodo = String(prompt("Ingrese un apodo"));

if(apodo == '' || apodo == null) {
        apodo = 'Anonymous';
        alert(apodo);
}  else {
    alert(apodo);
}
