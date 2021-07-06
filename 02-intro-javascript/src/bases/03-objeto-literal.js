// Objetos literales

const persona = {
    nombre: "Jamilett",
    apellido: "Samperio",
    edad: 27,
    direccion: {
        cuidad: "Mexico",
        pais: "Mexico",
        zip: 55930,
    }
};

// Se crea una copia de persona a persona2
// Espacio en memoria nuevo con función spread (...)
const persona2 = {...persona};
persona2.nombre = "Andres";
persona2.apellido = "Ramos";

console.table(persona);
console.table(persona2);