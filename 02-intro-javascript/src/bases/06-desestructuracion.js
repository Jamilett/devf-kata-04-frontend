// Desestructuración de objetos
// --------------------- VARIABLES ---------------------

const persona = {
    nombre: "Jam",
    edad: 27,
    clave: "JAM0801"
};

// Forma tradicional de extraer los valores de un objeto
// console.log(persona.nombre);
// console.log(persona.edad);

// Desestructuración (No importa el nombre de la variable, va a tomar los valores correspondientes)
const { nombre, edad, clave } = persona;

console.log("Nombre:", nombre);
console.log("Edad:", edad);
console.log("Clave:", clave);

// Si ya tuvieramos una variable llamada nombre, podemos reenombrarla tomando el mismo valor:
const { nombre: nombre2 } = persona;
console.log("Nombre2 (asignando un nuevo nombre a la variable):", nombre2);

// --------------------- FUNCIONES ---------------------

// Función que desestructura el objeto persona dentro de los parametros y regresa un objeto con el detalle
const getPersona = ({ clave, nombre, edad, rango = "Programador" }) => {
    return {
        nombreClave: clave,
        anios: edad,
        nombre: nombre,
        rango: rango,
        direccion: {
            calle: "Cardenales",
            zip: 54935
        }
    }
}

const detallePersona = getPersona(persona); // Desestructuración del objeto completo
console.log("Desestructuración en una función", detallePersona);

const { nombreClave } = getPersona(persona); // Desestructuración del objeto creado en la función
console.log("Desestructuración del objeto creado en la función:", nombreClave);

// No es tan común la desestructuración anidada
// const { nombreClave, direccion: { calle } } = getPersona(persona);