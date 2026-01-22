import '../css/style.css'; 
import 'flowbite';

//declaracion de variables
let nombre;
nombre="Juanito";
let edad=20;
const carrera="Desarrollo de software";

//template o interpolacion de cadenas
console.log(`Mi nombre es ${nombre}, tengo ${edad} años y estudio ${carrera}`);
document.writeln(`Mi nombre es ${nombre}, tengo ${edad} años y estudio ${carrera}`);
alert(`Mi nombre es ${nombre}, tengo ${edad} años y estudio ${carrera}`);

//pedir datos al usuario
let alumno = prompt("Ingrese el nombre del alumno");
let taller = parseFloat (prompt("Ingrese la calificacion del taller"));
let evaluacion = parseFloat (prompt("Ingrese la calificacion de la evaluacion"));
let proyecto = parseFloat (prompt("Ingrese la calificacion del proyecto"));
let suma = taller + evaluacion +proyecto;
let promedio = (suma / 3);
if(promedio >= 7){
    alert("Aprobado")
} else{
    alert("Reprobado")
}
//alert(promedio>= ? "aprobado" : "Reprobado")//solo si la condicion es corta se llama ternaria
//if(promedio>=7){
// alert(`El alumno ${alumno} tiene un promedio de ${promedio.toFixed(2)}, por lo tanto aprueba`);
//}else{
//  alert(`El alumno ${alumno} tiene un promedio de ${promedio.toFixed(2)}, por lo tanto reprueba`)};
//}