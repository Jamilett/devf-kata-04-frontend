// Importamos el archivo heroes de la carpeta "Data", para usarlo en el archivo debemos colocar export
import { heroes } from "../data/heroes";

/** Función que retornará el heroe con el ID que buscamos * 
 * @param {*} id 
 * @returns array
 */
export const getHeroeById = (id) => {
    return heroes.find((heroe) => heroe.id === id); // find utiliza un callback que se detendrá cuando la condición sea true
    // Sólo regresa 1 valor
    // Doc: find() -> https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/find
}

// console.log(getHeroeById(5));

/** Función que buscará todos los heroes que correspondan al OWNER correspondiente
 * @param {} owner 
 * @returns array
 */
export const getHeroesByOwner = (owner) => {
    return heroes.filter((heroe) => heroe.owner === owner) // filter crea un nuevo array con todos los elementos que cumplan la condición
    // Regresa 1 nuevo array https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
}

// console.log(getHeroesByOwner("Marvel"));