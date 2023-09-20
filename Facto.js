// Definición de la función factorial que calcula el factorial de un número n
function factorial(n) {
  // Verifica si n es igual a 0
  if (n === 0) {
    // Si n es igual a 0, devuelve 1 (caso base del factorial)
    return 1;
  }
  // Si n no es igual a 0, calcula n multiplicado por el factorial de (n-1) recursivamente
  return n * factorial(n - 1);
}

// Solicita al usuario ingresar un número y almacena la entrada en la variable "numero"
let numero = prompt("Ingrese un número para calcular su factorial:");

// Convierte la entrada del usuario (que es una cadena) a un número entero
numero = parseInt(numero);

// Verifica si "numero" no es un número válido (isNaN devuelve true si no es un número)
if (isNaN(numero)) {
  // Si no es válido, muestra un mensaje en la consola
  console.log("Ingrese un número válido.");
} else {
  // Si "numero" es un número válido, calcula su factorial llamando a la función "factorial"
  let resultado = factorial(numero);
  
  // Muestra el resultado en la consola junto con un mensaje descriptivo
  console.log("El factorial de " + numero + " es: " + resultado);
}