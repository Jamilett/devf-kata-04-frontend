/* ------------------- FETCH API -------------------
Doc: https://developer.mozilla.org/es/docs/Web/API/Fetch_API
URL API Privada: https://developers.giphy.com/dashboard/
1. Es necesario crear una cuenta y crear una aplicación para obtener el apiKey 
2. API Endpoints -> Random Endpoint -> Copiar y pegar en nueva pestaña -> agregar ?api_key=apiKey
*/

const apiKey = "caDnwqUN7QRvftXNNnb5nKAFI0ijvZDM";
// Metodo fetch es una promesa que regresa un Response
const peticion = fetch(`http://api.giphy.com/v1/gifs/random?api_key=${ apiKey }`);

// json() Toma una Responsesecuencia y la lee hasta el final
// Es un metodo del body que retorna otra promesa que se resuelve con el resultado de analizar el cuerpo del texto como JSON, por lo cual se pueden encadenar
peticion
    .then(resp => resp.json())
    .then(({data}) => { // Usamos desestructuracion para no usar data.data
        const {url} = data.images.original; // Desestructuramos la URL
        console.log(url)
        // Crearemos una etiqueta "imagen" que se muestre en el body del HTML
        const img = document.createElement("img");
        img.src = url; // a la propiedad del tag le asignaremos la fuente de la API

        document.body.append(img); // Lo mostramos en el HTML
    }) 
    .catch(console.warn); // Cacha todos los errores 