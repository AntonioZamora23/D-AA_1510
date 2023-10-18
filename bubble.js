function bubbleSort(array) {
  var len = array.length; // Obtenemos la longitud del array

  // El primer bucle recorre el array desde el principio hasta el final
  for (var i = 0; i < len; i++) {
    // El segundo bucle compara los elementos y los ordena
    // Se resta 'i' porque después de cada iteración, el elemento más grande ya está en su posición correcta
    for (var j = 0; j < len - i - 1; j++) {
      // Comparamos el elemento actual con el siguiente
      if (array[j] > array[j + 1]) {
        // Si el elemento actual es mayor que el siguiente, los intercambiamos
        var temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }
  return array; // Devolvemos el array ordenado
}

// Prueba del algoritmo de Bubble Sort
var array = [64, 34, 25, 12, 22, 11, 90];
console.log("Array original: " + array);
console.log("Array ordenado: " + bubbleSort(array));