/** ---------- OPERADOR TERNARIO ----------
 * Forma corta de hacer una validación
 */

const activo = true;

// Tradicional IF
// let mensaje = "";

// if (activo) {
//     mensaje = "Activo";
// } else {
//     mensaje = "Innactivo";
// }

// El operador ternario necesita su "if" y su "else" necesariamente
// const mensaje = (activo) ? "Activo" : "Inactivo";

// Forma corta de hacer un Operador Ternario
// Si deseamos solo validar que se cumpla una condición y no hacer nada si no se cumple
// La condición && si detecta la primera condicion como falso, no evalúa lo demás
const mensaje = activo && "ACTIVO";

console.log(mensaje);