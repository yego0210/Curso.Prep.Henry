// Do not change any of the function names

function invocarCallback(cb) {
    // Invoca al callback `cb`

    cb();

}

function sumarArray(numeros, cb) {
    // Suma todos los números enteros (int/integers) de un array ("numeros")
    // Pasa el resultado a `cb`
    // No es necesario devolver nada

    cb(numeros.reduce(function(acc, act) { return acc + act }));

}

function forEach(array, cb) {
    // Itera sobre la matriz "array" y pasa los valores al callback uno por uno
    // Pista: Estarás invocando a `cb` varias veces (una por cada valor en la matriz)

    array.forEach(function(element) {
        cb(element);
    });
}

function map(array, cb) {
    // Crea un nuevo array
    // Itera sobre cada valor en "array", pásalo a `cb` y luego ubicar el valor devuelto por `cb` en un nuevo array
    // El nuevo array debe tener la misma longitud que el array del argumento


    var arr = array.map(cb);

    return arr

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    invocarCallback,
    sumarArray,
    forEach,
    map,
};