// Arreglo
const arreglo = [1, 2, 3, 4];
// arreglo.push(1); // No se recomienda usar el push porque modifica al objeto principal, en su lugar usaremos spread

// Copiaremos los valores de arreglo a una nueva variable adicionando el valor 5
let arreglo2 = [...arreglo, 5];

// Multiplicar cada uno de los valores del arreglo * 2, con el método map que tiene un callback
// La función map crea un nuevo arreglo
const arreglo3 = arreglo2.map(function(numero) {
    return numero * 2;
})

console.log("Arreglo", arreglo);
console.log("Arreglo2", arreglo2);
console.log("Arreglo3", arreglo3);