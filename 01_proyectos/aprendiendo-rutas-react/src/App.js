import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Home from "./Home";

function NotFound() {
  return <h2> 404 Not Found</h2>;
}

function App() {
  return (
    // Si voy a usar reac router dom, el primer componente que voy a llamar va a ser <Router/>
    // Router detectará las URL's (todo después del .com)
    <Router>
      {/* Switch permite identificar las URL y pintar el componente adecuado de acuerdo a la url (como un switch normal) */}
      <Switch>
        {/* Dentro de switch siempre va un route que pintará el componente seleccionado */}
        {/* Si solo está la / significa que solo es .com porque no tiene ruta */}
        <Route exact path="/">
          {/* Exact se refiere que sea la ruta exacta a donde lo enviaré, no similar */}
          <Home />
          {/* Si el caso es que la ruta no existe, me dirigirá al home */}
        </Route>
        <Route exact path="/404">
          {/* Exact se refiere que sea la ruta exacta a donde lo enviaré, no similar */}
          <NotFound /> {/* Si encuentra el caso 404 enviará a Not found */}
        </Route>
        <Redirect to="/" />{" "}
        {/* Si no encuentra ningun caso, sería el default del switch y se redirige al home, Redirect no llama a componentes solo a rutas y va al final*/}
      </Switch>
    </Router>
  );
}

export default App;
