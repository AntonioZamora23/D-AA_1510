// Declarar el arreglo A con los elementos correspondientes
A = [7, 9, 8, 3, 1, 40];

// Inicializar el mínimo con el primer elemento y su índice con 0
ElementoMin = A[0];  // Inicializamos ElementoMin con el primer elemento del arreglo A
indiceMin = 0;       // Inicializamos indiceMin con 0, que es el índice del primer elemento

// Iterar a través de cada elemento del arreglo
for (i = 1; i < A.length; i++) {
    // Si el elemento actual es menor que el mínimo actual
    if (A[i] < ElementoMin) {
        // Actualizar el mínimo y su índice
        ElementoMin = A[i];  // Si encontramos un elemento menor, actualizamos ElementoMin
        indiceMin = i;       // y también actualizamos el índiceMin para guardar el nuevo índice
    }
}
// Mostrar el elemento con menos valor 
console.log("El numero minimo es : "+ ElementoMin)
// Mostrar el índice del elemento minimo
console.log("El índice del elemento con menor valor es: " + indiceMin);