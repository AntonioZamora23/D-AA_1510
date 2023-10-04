// Definición de la función contarVocalesTildadas que toma una palabra como entrada
function contarVocalesTildadas(palabra) {
  // Definimos un arreglo de vocales con tilde en minúsculas y mayúsculas
  const vocalesTilde = ['á', 'é', 'í', 'ó', 'ú', 'Á', 'É', 'Í', 'Ó', 'Ú'];

  // Inicializamos un contador para llevar el registro del número de vocales con tilde
  let contador = 0;

  // Iniciamos un ciclo que recorre cada letra de la palabra
  for (let i = 0; i < palabra.length; i++) {
    // Comprobamos si la letra actual está en la lista de vocales con tilde
    if (vocalesTilde.includes(palabra[i])) {
      // Si la letra actual es una vocal con tilde, aumentamos el contador en 1
      contador++;
    }
  }

  // Devolvemos el valor del contador que representa el número de vocales con tilde en la palabra
  return contador;
}

// Solicitamos al usuario que ingrese una palabra y almacenamos su entrada en la variable palabra
const palabra = prompt("Ingresa una palabra:");

// Llamamos a la función contarVocalesTildadas con la palabra ingresada y almacenamos el resultado en numeroVocalesTilde
const numeroVocalesTilde = contarVocalesTildadas(palabra);

// Mostramos el resultado en la consola
console.log(`El número de vocales con tilde en la palabra '${palabra}' es: ${numeroVocalesTilde}`);