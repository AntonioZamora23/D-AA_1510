// Definición de la función calcularPromedio que toma un arreglo como argumento
function calcularPromedio(arreglo) {
  // Inicialización de la variable suma para acumular la suma de los elementos
  let suma = 0;

  // Bucle for para iterar a través de los elementos del arreglo
  for (let i = 0; i < arreglo.length; i++) {
    // Suma el elemento actual al valor acumulado en suma
    suma += arreglo[i];
  }

  // Cálculo del promedio dividiendo la suma total por la longitud del arreglo
  let promedio = suma / arreglo.length;

  // Devuelve el resultado del cálculo del promedio
  return promedio;
}

// Creación de un arreglo llamado A con valores [1, 2, 3, 4, 5]
let A = [1, 2, 3, 4, 5];

// Llama a la función calcularPromedio pasando el arreglo A como argumento
let resultado = calcularPromedio(A);

// Imprime el resultado en la consola
console.log("El promedio de los elementos en el arreglo es:", resultado);