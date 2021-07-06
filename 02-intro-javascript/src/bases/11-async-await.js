/* ------------------- ASYNC - AWAIT -------------------
Ver ejemplo Fetch API
@Returns Un objeto AsyncFunction, que representa una función asíncrona que ejecuta el código contenido dentro de la función.
Doc: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function
*/

// La palabra reservada async "convertirá" nuestra función en una promesa
const getImagen = async() => {

    try { // El manejo de errores aquí es con TRY y CATCH

        const apiKey = "caDnwqUN7QRvftXNNnb5nKAFI0ijvZDM";

        // El await indica que espere a que esa promesa termine antes de ejecutar la siguiente linea
        const response = await fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);
        const { data } = await response.json();
        // console.log(data);
        const { url } = data.images.original;
        // console.log(url);
        const img = document.createElement("img");
        img.src = url;

        document.body.append(img);

    } catch (e) {
        console.log(e);
    }

}

getImagen();

