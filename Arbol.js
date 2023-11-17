// Definición de la clase NodoArbol
class NodoArbol {
    // Constructor de la clase NodoArbol
    constructor(dato, izq = null, der = null) {
        this.dato = dato;  // Valor del nodo
        this.izq = izq;    // Referencia al subárbol izquierdo
        this.der = der;    // Referencia al subárbol derecho
    }
}

// Función de inserción en un árbol binario de búsqueda
function insertarNodo(raiz, dato) {
    // Caso base: si la raíz es nula, creamos un nuevo nodo con el dato
    if (raiz === null) {
        return new NodoArbol(dato);
    }

    // Si el dato es menor que el valor de la raíz, lo insertamos en el subárbol izquierdo
    if (raiz.dato > dato) {
        raiz.izq = insertarNodo(raiz.izq, dato);
    } else {
        // Si el dato es mayor o igual al valor de la raíz, lo insertamos en el subárbol derecho
        raiz.der = insertarNodo(raiz.der, dato);
    }

    // Devolvemos la raíz actualizada después de la inserción
    return raiz;
}

// Creamos el árbol
let raizArbol = new NodoArbol(10);        // Nodo raíz con valor 10
raizArbol = insertarNodo(raizArbol, 9);   // Insertamos el nodo con valor 9
raizArbol = insertarNodo(raizArbol, 8);   // Insertamos el nodo con valor 8
raizArbol = insertarNodo(raizArbol, 2);   // Insertamos el nodo con valor 2
raizArbol = insertarNodo(raizArbol, 1);   // Insertamos el nodo con valor 1

// Mostramos la raíz del árbol en la consola
console.log(raizArbol);
