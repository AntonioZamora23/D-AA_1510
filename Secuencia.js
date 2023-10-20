// Definición de la función SecuenciaDesc que recibe un número como parámetro.
function SecuenciaDesc(numero) {
    // Verifica si el número actual es mayor o igual a cero.
    if (numero >= 0) {
        // Imprime el número actual en la consola.
        console.log(numero);

        // Realiza una llamada recursiva a la función con el número reducido en 1.
        SecuenciaDesc(numero - 1);
    }
}

// Llamada a la función SecuenciaDesc con un número inicial, por ejemplo, 15.
SecuenciaDesc(15);
