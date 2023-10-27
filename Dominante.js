// Definimos una función llamada "dominant" que toma un arreglo "arr" como argumento.
function dominant(arr) {
    // Creamos un arreglo vacío llamado "dominants" para almacenar los elementos dominantes.
    const dominants = [];
    // Inicializamos la variable "maxRight" con un valor muy pequeño (negativo infinito).
    let maxRight = -Infinity;
  
    // Recorremos el arreglo "arr" desde el final hacia el principio.
    for (let i = arr.length - 1; i >= 0; i--) {
      // Verificamos si el elemento actual (arr[i]) es mayor que el "maxRight" y si está en el rango de -1000 a 1000.
      if (arr[i] > maxRight && arr[i] >= -1000 && arr[i] <= 1000) {
        // Si cumple con ambas condiciones, agregamos el elemento al arreglo de "dominants".
        dominants.push(arr[i]);
        // Actualizamos el valor de "maxRight" con el valor del elemento actual.
        maxRight = arr[i];
      }
    }
  
    // Invertimos el arreglo "dominants" para que los elementos estén en el orden correcto (de izquierda a derecha).
    return dominants.reverse();
  }
  
  // Ejemplos de uso:
  console.log(dominant([100, 2, 410, 5, 111])); // Debería imprimir [410,111]
  console.log(dominant([555, 444, 333, 222, 111,101]));  // Debería imprimir [555, 444, 333, 222, 111,101]
  