// Función para generar la secuencia de Fibonacci hasta un número dado n
function fibonacci(n) {
  fibArray = []; // Array para almacenar la secuencia de Fibonacci

  // Caso base: los primeros dos números de Fibonacci son 0 y 1
  fibArray.push(0);
  fibArray.push(1);

  // Generar la secuencia de Fibonacci hasta n
  while (fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2] <= n) {
    nextFib = fibArray[fibArray.length - 1] + fibArray[fibArray.length - 2]; // Calcular el siguiente número de Fibonacci
    fibArray.push(nextFib); // Agregarlo al array
  }

  return fibArray; // Devuelve la secuencia de Fibonacci hasta el número n
}

// Solicitar al usuario que ingrese hasta qué número desea generar la secuencia de Fibonacci
n = prompt("Ingrese hasta qué número desea generar la secuencia de Fibonacci:");

// Convertir la entrada del usuario a un número entero
n = parseInt(n);

if (isNaN(n)) {
  console.log("El elemento agregado no es válido.");
} else {
  // Llamar a la función para generar la secuencia de Fibonacci hasta n
  resultado = fibonacci(n);

  // Mostrar la secuencia de Fibonacci en la consola
  console.log("Secuencia de Fibonacci hasta el número " + n + ":");
  console.log(resultado.join(", ")); // Imprimir la secuencia como una cadena separada por comas
}