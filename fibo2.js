// Función recursiva para calcular la serie de Fibonacci hasta el n-ésimo término
function fibonacci(n) {
  // Caso base: si n es menor o igual a 0, devolvemos una matriz vacía
  if (n <= 0) {
    return [];
  } 
  // Caso base: si n es igual a 1, devolvemos una matriz que contiene solo el valor 0
  else if (n === 1) {
    return [0];
  } 
  // Caso base: si n es igual a 2, devolvemos una matriz que contiene los dos primeros valores de Fibonacci
  else if (n === 2) {
    return [0, 1];
  } 
  // Caso recursivo: para n mayor que 2, llamamos a la función recursivamente para calcular los términos previos
  else {
    const fib = fibonacci(n - 1); // Calculamos los términos previos recursivamente
    const newTerm = fib[fib.length - 1] + fib[fib.length - 2]; // Calculamos el siguiente término
    fib.push(newTerm); // Agregamos el siguiente término a la matriz
    return fib; // Devolvemos la matriz de términos de Fibonacci
  }
}

const n = 10; // Cambia el valor de 'n' según cuántos términos de Fibonacci desees calcular
const fibonacciSequence = fibonacci(n); // Llamamos a la función para obtener la secuencia de Fibonacci
console.log(`Serie de Fibonacci de los primeros ${n} términos: ${fibonacciSequence.join(', ')}`); // Mostramos la secuencia en la consola