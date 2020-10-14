// No cambies los nombres de las funciones.

función crearUsuario() {
    // Crea una Clase de ES6 o una función constructor llamada "Usuario"
    // Debe aceptar un objeto "opciones" con las propiedades "usuario", "nombre", "email" y "contraseña"
    // En el `contructor`, define el usuario, el nombre, el email y la contraseña
    // El `contructor` debe tener un método llamado" saludar "en su` prototype` que devuelva una string 'Hola, mi nombre es {{nombre}}'
    // {{nombre}} debe ser el nombre definido en cada instancia
    // Devuelve la clase
    // Tu código:

    function Usuario(opciones) {

        esto.usuario = opciones.usuario;
        esto.nombre = opciones.nombre;
        esto.email = opciones.correo electrónico;
        esto.contraseña = opciones.contraseña;
    };
    Usuario.prototipo.saludar = función() {
        return 'Hola, mi nombre es' + esto.nombre
    };

    volver Usuario;

}

function agregarMetodoPrototype(Constructor) {
    // Agrega un método al Constructor del `prototype`
    // El método debe llamarse "saludar" y debe devolver la string "Hello World!"
    // Tu código:

    Constructor.prototipo.saludar = función() {
        volver '¡Hola mundo!'
    };

}

function agregarStringInvertida() {
    // Agrega un método al prototype de String que devuelva la misma cadena de caracteres, pero invertida.
    // El método debe llamarse "reverse"
    // Ej: 'menem'.reverse () => menem
    // 'toni'.reverse () =>' inot '
    // Pista: Necesitarás usar "this" dentro de "reverse"

    Cadena.prototipo.reverse = function() {

        var str1 = '';
        var str2 = '';
        str1 = esto.dividir('')
        str1.reverso()
        str2 = str1.unirse('')


        volver str2
    }



}

// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
    crearUsuario,
    agregarMetodoPrototype,
    agregarStringInvertida
};