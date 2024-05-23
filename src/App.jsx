import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { Form } from "./components/Form";

function App() {
  const [peliculas, setPeliculas] = useState([]);
  return (
    <div className="App">
      <h1>Mi Coleccion de Peliculas</h1>
      <p>Ingresa tus peliculas favoritas a la colección</p>
      <Form 
      peliculas={peliculas} 
      setPeliculas={setPeliculas} />
      {peliculas.map((movie, index) => (
        <Card key={index} movie={movie} />
      ))}
    </div>
  );
}

export default App;
