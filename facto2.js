// Función recursiva para calcular el factorial de un número 'n'
function factorial(n) {
  // Verifica si el número es negativo
  if (n < 0) {
    return -1; // Si el número es negativo, devuelve -1 para indicar un error
  } else if (n === 0) {
    return 1; // El factorial de 0 es 1
  } else {
    // Caso recursivo: multiplica 'n' por el factorial de 'n-1' (llamada recursiva)
    return n * factorial(n - 1);
  }
}

const numero = 5; // Cambia el valor de 'numero' según el número del que deseas calcular el factorial
const resultado = factorial(numero); // Llamamos a la función para calcular el factorial
console.log(`El factorial de ${numero} es: ${resultado}`); // Mostramos el resultado en la consola