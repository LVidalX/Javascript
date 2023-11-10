
let nombre;          
nombre = "Luis";        //asigna un tipo de dato texto dentro de la variable        
let Fecha_nacimiento;
Fecha_nacimiento = "23/12/2003"
let edad = 19;
length = 1.63;
email = "luisvidalpuma@gmail.com";
cedla = "0705654432";
pstmps = "Componer, tocar guitarra, escuchar un poco de música";
instrument = "Lira, Bajo, Guitarra";
Program = "Javascript, Python";
E_civil_s = "Si"
let lastname = "Vidal";
let completeName = `Soy Luis ${lastname}`; 
alert(completeName)
let a = 4;
a++;
++a;
--a;
alert(a + 2)

let año = prompt('Ingresa tu edad');
if (año >=18) 
    alert('Eres mayor de edad');
    else
    alert('Eres menor de edad');
let x = 8
let b = 2
x = -x;
let result = b*10;
let c = 10
alert(c%30)
alert(result+x);
let login = prompt('Ingrese su cargo');
if (login == 'Empleado') {
    message = 'Hola';
    alert(message);
}   else if(login == 'Director') {
    login = 'Bienvenido';
    message = 'Bienvenido';
    alert(message);
}   else { 
    message = 'No se ha podido iniciar sesión';
    alert(message);
}

alert("hola soy "+ nombre + ",tengo "+edad+" años");
alert("Mido aproximadamente: "+length);
alert("Fecha de nacimiento: "+Fecha_nacimiento);
alert("¿Soltero?")
alert(E_civil_s);
alert("Correo electronico: "+email);
alert("Cedula: "+cedla);
alert("Mis pasatiempos: "+pstmps);
alert("Instrumentos que he tocado: "+instrument);
alert("Tengo un poco de experiencia en los siguientes lenguajes de programacion: "+Program);







