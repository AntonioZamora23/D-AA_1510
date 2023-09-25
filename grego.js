// Función para calcular una aproximación de π utilizando la serie de Leibniz-gregory 
function calcularPi(iteraciones) {
   pi = 0;          // Inicializamos la variable pi en 0
   denominador = 1; // Inicializamos el denominador en 1
   signo = 1;       // Inicializamos el signo en 1

  // Iniciamos un bucle que realizará 'iteraciones' iteraciones
  for (let i = 0; i < iteraciones; i++) {
    pi += signo * (1 / denominador); // Añadimos el término actual a la aproximación de pi
    denominador += 2;               // Incrementamos el denominador en 2 para el siguiente término
    signo *= -1;                    // Cambiamos el signo para el siguiente término
  }

  return pi * 4; // Multiplicamos por 4 para obtener una mejor aproximación de π
}

const numIteraciones = 1000000;     // Número de iteraciones para calcular π
const resultado = calcularPi(numIteraciones); // Llamamos a la función para calcular π

// Mostramos el resultado en la consola
console.log(`El valor aproximado de PI con ${numIteraciones} iteraciones es: ${resultado}`);