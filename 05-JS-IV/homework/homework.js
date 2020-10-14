// No cambies los nombres de las funciones.

function crearGato(nombre, edad) {
    // Crear un nuevo objeto con la propiedad "nombre" y el valor definido como el argumento "nombre".
    // Agrega una propiedad al objeto con el nombre "edad" y usa el valor definido en el argumento "edad"
    // Agrega un método (función) llamado "meow" que devuelva el string "Meow!"
    // Devuelve el objeto
    // Tu código:

    var obj = {
        nombre: nombre,
        edad: edad,
        miau: function(str) { return str = '¡Miau!' }
    }
    return obj;
}


función agregarPropiedad(objeto, propiedad) {
    // Agrega una propiedad al objeto (argumento "objeto") con el valor `null`
    // Devuelve el objeto
    // NOTA: El nombre de la propiedad no es "propiedad", el nombre es el valor del argumento llamado "propiedad" (una cadena / string)
    // Tu código:

    objeto[propiedad] = nulo
    devolver objeto

}

function invocarMetodo(objeto, metodo) {
    // "metodo" es una cadena que contiene el nombre de un método (funcion) en el objeto
    // Invoca ese método
    // Nada necesita ser devuelto ("devuelto")
    // Tu código:

    objeto[metodo]();

}

function multiplicarNumeroDesconocidoPorCinco(objetoMisterioso) {
    // "objetoMisterioso" tiene una propiedad llamada "numeroMisterioso"
    // Multiplica el numeroMisterioso por 5 y devuelve el producto
    // Tu código:
    devolver objetoMisterioso.numeroMisterioso * 5;

}

function eliminarPropiedad(objeto, propiedad) {
    // Elimina la propiedad "propiedad" de "objeto"
    // Devuelve el objeto
    // Tu código:

    objeto[propiedad] = indefinido;
    devolver objeto;

}

function nuevoUsuario(nombre, email, contraseña) {
    // Crea un nuevo objeto con las propiedades coincidiendo con los argumentos que se pasan a la función
    // Devuelve el objeto
    // Tu código:
    var obj = {
        nombre,
        enviar por correo electrónico,
        contraseña
    }

    volver obj


}

function tieneEmail(usuario) {
    // Devuelve "true" si el usuario tiene un valor definido para la propiedad "email"
    // De lo contratio, devuelve "false"
    // Tu código:

    devolver usuario.correo electrónico! = null;

}


function tienePropiedad(objeto, propiedad) {
    // Devuelve "true" si el objeto tiene el valor del argumento "propiedad"
    // "propiedad" es un string
    // De lo contrario, devuelve "false"
    // Tu código:

    return objeto[propiedad] ! = null;

}

function verificarPassword(usuario, contraseña) {
    // Comprueba si la "contraseña" enviada coincide con la propiedad "contraseña" del objeto "usuario"
    // Devuelve "true" si coinciden
    // De lo contrario, devuelve "false"
    // // Tu código:

    devolver usuario.contraseña === contraseña;

}

function actualizarPassword(usuario, nuevaPassword) {
    // Reemplaza la contraseña existente en el objeto "usuario" con el valor de "nuevagPassword"
    // Devuelve el objeto
    // Tu código:

    usuario.contraseña = nuevaPassword;

    return usuario;

}

función agregarAmigo(usuario, nuevoAmigo) {
    // "usuario" tiene una propiedad llamada "amigos" que es un array
    // Agrega "nuevoAmigo" al final de ese array
    // Devuelve el objeto "usuario"
    // // Tu código:
    usuario.amigos.empujar(nuevoAmigo);
    return usuario;
}

function pasarUsuarioAPremium(usuarios) {
    // "usuarios" es un arreglo de objetos "usuario"
    // Cada objeto "usuario" tiene la propiedad "esPremium"
    // Definir cada propiedad "esPremium" de cada objeto como "true"
    // Devuelve el array de usuarios
    // Tu código:

    res = usuarios.map(function() { return { "esPremium": true } })


    return res;
}

function sumarLikesDeUsuario(usuario) {
    // "usuario" tiene una propiedad llamada "posts" que es un array
    // "posts" es un array de objetos "post"
    // Cada objeto "post" tiene una propiedad llamada "likes" que es un entero (int / integer)
    // Suma todos los likes de todos los objetos "post"
    // Devuelve la suma
    // Tu código:

    / * var suma = 0 
    para(var i = 0; i < usuario.posts.length; i++) {

        suma = suma + usuario.posts[i].likes
    }
    return suma; * /
    devolver usuario.puestos.reduce(función(acc, act, indice) { return acc + usuario.posts[indice].likes }, 0);

}

function agregarMetodoCalculoDescuento(producto) {
    // Agregar un método (función) al objeto "producto" llamado "calcularPrecioDescuento"
    // Este método debe multiplicar el "precio" del "producto" ("producto.precio" o "producto [precio]") y "porcentajeDeDescuento" para obtener el descuento
    // El método resta el descuento del precio y devuelve el precio con descuento
    // Devuelve el objeto "producto" al final de la función
    // Ejemplo:
    // producto.precio -> 20
    // producto.porcentajeDeDescuento -> 0.2 (o simplemente ".2")
    // producto.calcularPrecioDescuento () -> 20 - (20 * 0.2)
    // Tu código:


    producto.calcularPrecioDescuento = function() { devuelve esto.precio - (este.precio * este.porcentajeDeDescuento) };

    devolver producto

}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    crearGato,
    agregarPropiedad,
    invocarMetodo,
    multiplicarNumeroDesconocidoPorCinco,
    eliminarPropiedad,
    nuevoUsuario,
    tieneEmail,
    tienePropiedad,
    verificarPassword,
    actualizarPassword,
    agregarAmigo,
    pasarUsuarioAPremium,
    sumarLikesDeUsuario,
    agregarMetodoCalculoDescuento
};