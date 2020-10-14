// No cambies los nombres de las funciones.

function devolverPrimerElemento(matriz) {
    // Devuelve el primer elemento de un array
    // Tu código:
    matriz de retorno[0]
}

function devolverUltimoElemento(array) {
    // Devuelve el último elemento de un array
    // Tu código:
    return matriz[matriz.longitud - 1]

}

función obtenerLargoDelArray(matriz) {
    // Devuelve el largo de un array
    // Tu código:

    matriz de retorno.longitud
}

función incrementarPorUno(matriz) {
    // "array" debe ser una matriz de enteros (int / integers)
    // Aumenta cada entero por 1
    // y devuelve el array
    // Tu código:

    / * var arr = []
    para(var i = 0; i < array.length; i++) {
        arr.push(matriz[i] + 1)
    }
    return arr * /

    matriz de retorno.mapa(función(elemento, iAct) {
        devolver artículo + 1
    });

}

function agregarItemAlFinalDelArray(array, elemento) {
    // Agrega el "elemento" al final del array
    // y devuelve el array
    // Tu código:

    matriz.empujar(elemento);
    matriz de retorno

}

function agregarItemAlComienzoDelArray(array, elemento) {
    // Agrega el "elemento" al comienzo del array
    // y devuelve el array
    // Pista: usa el método `.unshift`
    // Tu código:
    matriz.unshift(elemento);
    matriz de retorno

}

function dePalabrasAFrase(palabras) {
    // "palabras" es un array de strings / cadenas
    // Devuelve un string donde todas las palabras estén concatenadas
    // con espacios entre cada palabra
    // Ejemplo: ['¡Hola', 'mundo!'] -> '¡Hola mundo!'
    // Tu código:

    volver palabras.unirse('');
}

function arrayContiene(array, elemento) {
    // Comprueba si el elemento existe dentro de "array"
    // Devuelve "true" si está, o "false" si no está
    // Tu código:

    var res = matriz.encontrar(función(elemento) {
        elemento de retorno === elemento
    })

    if (res! == indefinido) {
        volver verdadero
    }
    si no devuelve falso

}

función agregarNumeros(numeros) {
    // "array" debe ser una matriz de enteros (int / integers)
    // Suma todos los enteros y devuelve el valor
    // Tu código:

    var res = numeros.reducir(función(acum, actuar) { volver acum + actuar })
    volver res
}

function promedioResultadosTest(resultadosTest) {
    // "resultadosTest" debe ser una matriz de enteros (int / integers)
    // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
    // Tu código:

    var res = resultadosTest.reducir(función(acum, actuar) { volver acum + actuar })
    return res / resultadosTest.longitud
}

function numeroMasGrande(numeros) {
    // "numeros" debe ser una matriz de enteros (int / integers)
    // Devuelve el número más grande
    // Tu código:

    devolver numeros.ordenar((a, b) => b - a)[0]
}

function multiplicarArgumentos() {
    // Usa la palabra clave ʻarguments` para multiplicar todos los argumentos y devolver el producto
    // Si no se pasan argumentos devuelve 0
    // Si se pasa un argumento, simplemente devuélvelo
    // Tu código:
    if (argumentos.longitud == 0) { return 0 }
    if (argumentos.longitud == 1) { devolver argumentos[0] }

    var arr = Matriz.from(argumentos) // transfomra los argumentos pasados ​​a la funcion en un array real
    var res = arr.reducir(función(acc, actuar) { retorno acc * actuar });
    volver res

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    devolverPrimerElemento,
    devolverUltimoElemento,
    obtenerLargoDelArray,
    incrementarPorUno,
    agregarItemAlFinalDelArray,
    agregarItemAlComienzoDelArray,
    dePalabrasAFrase,
    arrayContiene,
    agregarNumeros,
    promedioResultadosTest,
    numeroMasGrande,
    multiplicarArgumentos,
};