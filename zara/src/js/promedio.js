import '../css/style.css'; 
import 'flowbite';

//DOM - SELECCIONAMOS ELEMENTOS HTML
//GETELEMENTBYID = SELECCIONA POR EL ID
const botonCalcular = document.getElementById("btn-calcular");
const informacionResultado = document.getElementById("resultados");


//FUNCION QUE NOS PERMITA CALCULAR EL PROMEDIO - funcion flecha
const calcularPromedio = () => {
    const nombre = document.getElementById("alumno").value;
    const calificacionTaller = parseFloat(document.getElementById("taller").value);
    const calificacionEvaluacion = parseFloat(document.getElementById("evaluacion").value);
    const calificacionProyecto = parseFloat(document.getElementById("proyecto").value);

    let promedio = (calificacionTaller+calificacionEvaluacion+calificacionProyecto)/3;

    informacionResultado.innerHTML=`<p>El alumno ${nombre} tiene un promedio de ${promedio.toFixed(2)}</p>`;
}

//AOSICIAR EL EVENTO Y EL EVENT HANDLER AL BOTON
//manejador de eventos semanticos
botonCalcular.onclick = calcularPromedio;