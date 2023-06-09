import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import {hacerPeticion, traerTodo, traerTitulo, traerGenero} from './servicios/clienteaxios.js';

function App() {
  const [formulario, setFormulario] = useState({
    titulo: '',
    genero: '',
    actores: '',
  });

  const [titulo, setTitulo] = useState({
    titulo: ''
  });

  const [genero, setGenero] = useState({
    genero: '',
  });

  const [informacion, setInformacion] = useState([
    {
      'titulo': '...'
    }, 
    {  
      'titulo': '...'
    }
  ])

  const handleChange = (event) => {
    const temporal = { ...formulario };
    temporal[event.target.name] = event.target.value;
    setFormulario(temporal);
  };

  const handleChangeBuscaTitulo = (event) => {
    const temporal = { ...titulo };
    temporal[event.target.name] = event.target.value;
    setTitulo(temporal);
  };

  const handleChangeBuscaGenero = (event) => {
    const temporal = { ...genero };
    temporal[event.target.name] = event.target.value;
    setGenero(temporal);
  };

  const guardar_pelicula = async () => {
    await hacerPeticion(formulario)
    traeTodo()
  }

  const traeTodo =  async() => {
    const temporal = await traerTodo()
    setInformacion(temporal)
  }

  const traerTitulo2 =  async() => {
    const temporal = await traerTitulo(titulo.titulo)
    setInformacion(temporal)
  }

  const traerGenero2 =  async() => {
    const temporal = await traerGenero(titulo.titulo, genero.genero)
    setInformacion(temporal)
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
            <Button onClick={guardar_pelicula}>
              Guardar Pelicula
            </Button>
        </Form>
        {
          informacion.map((elemento) => {
          return <Row>
              <Col>
                {elemento.titulo}
              </Col>
              <Col>
                {elemento.genero}
              </Col>
              <Col>
                {elemento.actores}
              </Col>
            </Row>
          })
        }
        <Button onClick={traeTodo}>
            traer todos
        </Button>
        <Form>
            <Form.Group className="mb-3">
              <Form.Label>Titulo</Form.Label>
              <Form.Control
                onChange={handleChangeBuscaTitulo}
                name="titulo"
                placeholder="Ingrese el titulo de la pelicula"
              />
          </Form.Group>
        </Form>
        <Button onClick={traerTitulo2}>
          Buscar Titulo
        </Button>
        <Form>
            <Form.Group className="mb-3">
              <Form.Label>Genero</Form.Label>
              <Form.Control
                onChange={handleChangeBuscaGenero}
                name="genero"
                placeholder="Ingrese el genero de la pelicula"
              />
          </Form.Group>
        </Form>
        <Button onClick={traerGenero2}>
          Buscar el Genero
        </Button>
      </Container>
    </div>
  );
}

export default App;
