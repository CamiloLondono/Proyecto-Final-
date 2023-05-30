import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import {hacerPeticion} from './servicios/clienteaxios.js';

function App() {
  const [formulario, setFormulario] = useState({
    titulo: '',
    genero: '',
    actores: '',
  });

  const handleChange = (event) => {
    const temporal = { ...formulario };
    temporal[event.target.name] = event.target.value;
    setFormulario(temporal);
  };

  const guardarPelicula = () => {
    hacerPeticion(formulario)
  }

  return (
    <div className="App">
      <Container>
        <Form>
          <Form.Text >Formulario guardar pelicula</Form.Text>
            <Form.Group className="mb-3">
              <Form.Label>Titulo Pelicula</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="titulo"
                placeholder="Ingrese el nombre de la pelicula"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Genero</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="genero"
                placeholder="Ingrese el genero de la pelicula"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Actores</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="actores"
                placeholder="ingrese el actor principal"
              />
            </Form.Group>          
            <Button onClick={guardarPelicula}>
              Guardar Pelicula
            </Button>
        </Form>
      </Container>
    </div>
  );
}

export default App;
