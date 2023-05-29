import "./App.scss";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Button, Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
//import Row from "react-bootstrap/Row";
//import Col from "react-bootstrap/Col";

function App() {

  const [formulario, setFormulario] = useState({
    email: "",
    password: ""
  });

  const handleChange = (event) => {
    const temporal = {...formulario} //copia el objeto que esta dentro de las llaves, quitando referencia
    temporal[event.target.name] = event.target.value 
    setFormulario(temporal)
  } //el target.name es como los get y set, y el .value sirve para cambiar el valor 

  return (
    <div className="App">
      <Container>
        <Form> 
          <Form.Group className="mb-3"> 
            <Form.Label>Nombre Pelicula</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="Pelicula"
              placeholder="Introducir Nombre Pelicula"
            />
            <Form.Text className="text-muted">
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Actores</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="Actores"
              placeholder="Introducir Actor Principal"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Genero Pelicula</Form.Label>
            <Form.Control
              onChange={handleChange}
              name="Genero"
              placeholder="Introducir Genero"
            />
          </Form.Group>
          <Button>
            Enviar
          </Button>
        </Form> 
      </Container>
    </div>
  );
}

export default App;
