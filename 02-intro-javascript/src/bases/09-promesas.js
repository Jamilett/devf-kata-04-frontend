/** Promesas
 * @description Se importarán las funciones del archivo bases/imp-exp para practicar las promesas * 
 * https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Promise
 * Son asíncronas, primero se ejecutará todo lo que es sincrono y los resultados de las promesas caen después
 */

import { getHeroeById } from './bases/08-imp-exp-find-filter'

const getHeroeByIdAsync = (id) => {

    // const promesa = new Promise()
    return new Promise((resolve, reject) => {
        // Después de 2 segundos se ejecutará la función getHeroe
        setTimeout(() => {
            const heroe = getHeroeById(id);
            if (heroe) {
                resolve(heroe); // Resolve: transfiere el valor de sus argumentos al "then"
            } else {
                reject("No se encontró heroe con ese id") // Transfiere el valor de sus args al catch
            }
        }, 2000)
    });
    // return promesa;
}

getHeroeByIdAsync(5).then((heroe) => console.log("Heroe", heroe))
    .catch((err) => console.log(err));