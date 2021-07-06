// Desestructuración de Arreglos

const personajes = ["Nemo", "Dory", "Marlin"];

// La desestructuración de un arreglo no se indica por {}, sino por []
const [personaje1] = personajes; // Esto extraerá a "Nemo"
console.log(personaje1);

// Las , en la desestructuración indican a JS que ignore los otros elementos del arreglo
const [, personaje2] = personajes; // Esto extraerá únicamente a "Dory" 
console.log(personaje2);

const [, , personaje3] = personajes; // Extrareá únicamente a "Marlin"
console.log(personaje3);

// Función que regresa un arreglo de 2 elementos
const retornaArreglo = () => {
    return ["ABC", 123];
}

// Desestructuración de cada tipo de dato
const [letras, numeros] = retornaArreglo();
console.log("Letras:", letras);
console.log("Números:", numeros);

// Tarea: crear una función que reciba un valor y retorne un arreglo con el mismo valor y una función que muestra "Hola Mundo"
const retornaArrFuncion = (valor) => {
    return [valor, () => { console.log("Hola Mundo"); }];
}

// const arr = retornaArrFuncion("Jamilett"); // Le asignamos un valor al parámetro
// arr[1](); // Aquí estoy apuntando a la posición 1 del arreglo y llamando a la función con los () para que se ejecute, se imprimirá solo la función

// Tarea1: Imprimir el primer valor del arreglo que se llame "Nombre" y el 2do "SetNombre" (que será la función)
const [nombre, setNombre] = retornaArrFuncion("Andrés");
console.log("Nombre:", nombre);
setNombre();