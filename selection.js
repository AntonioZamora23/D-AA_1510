function selectionSort(arr) {
  var len = arr.length; // Obtenemos la longitud del array

  // El primer bucle recorre el array desde el principio hasta el final
  for (var i = 0; i < len; i++) {
    var min = i; // Suponemos que el elemento actual es el mínimo

    // El segundo bucle busca el elemento mínimo en el subarray no ordenado
    for (var j = i + 1; j < len; j++) {
      if (arr[j] < arr[min]) {
        min = j; // Si encontramos un elemento más pequeño, actualizamos el índice del mínimo
      }
    }

    // Si el mínimo encontrado no es el elemento actual, intercambiamos los elementos
    if (min !== i) {
      var temp = arr[i];
      arr[i] = arr[min];
      arr[min] = temp;
    }
  }

  return arr; // Devolvemos el array ordenado
}

// Ejemplo de uso
var array = [64, 25, 12, 22, 11];
console.log("Array antes de ser ordenado: " + array);
var sortedArray = selectionSort(array);
console.log("Array después de ser ordenado: " + sortedArray)