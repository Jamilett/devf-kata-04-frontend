// Funciones
// OJO: Ya no se recomienda realizar funciones asi porque es muy facil sobreescribirlas 
// function saludar(nombre) {
//     return `Hola ${nombre} :)`;
// }
// saludar = 30; // Aqui ya no sería una función 

// Primera opción para crear funciones
const saludar = function saludar(nombre) {
    return `Hola ${nombre} :)`;
}

// Arrow functions
const saludar2 = (nombre) => {
    return `Hola ${nombre} desde Arrow Function :)`;
}

// (En datos primitivos) si la función solamente nos servirá para hacer un return, la podemos simplificar
const saludar3 = (nombre) => `Hola ${nombre} desde Arrow Function simplificada :)`;

// Podemos simplificar una función que retorne un objeto literal poniendo el "return" entre ()
const getUsuarioActivo = (nombre) => ({
    id: "AND08",
    nombre: nombre
})
const usuarioActivo = getUsuarioActivo("Andres Ramos")

console.log(saludar("Jamilett"));
console.log(saludar2("Jamilett"));
console.log(saludar3("Jam"));
console.log("Objeto usuario desde arrow function simplificada", usuarioActivo);

