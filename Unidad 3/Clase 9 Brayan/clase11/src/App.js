import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import {hacerPeticion, traerTodo, traerDiseño, traerColor} from './servicios/clienteaxios.js';

function App() {
  const [formulario, setFormulario] = useState({
    diseño: '',
    color: '',
    talla: '',
  });

  const [diseño, setDiseño] = useState({
    diseño: ''
  });

  const [color, setColor] = useState({
    color: '',
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

  const handleChangeBuscaDiseño = (event) => {
    const temporal = { ...diseño };
    temporal[event.target.name] = event.target.value;
    setDiseño(temporal);
  };

  const handleChangeBuscaColor = (event) => {
    const temporal = { ...color };
    temporal[event.target.name] = event.target.value;
    setColor(temporal);
  };

  const guardarRopa = async () => {
    await hacerPeticion(formulario)
    traerTodo()
  }

  const traerTodo =  async() => {
    const temporal = await traerTodo()
    setInformacion(temporal)
  }

  const traerDiseño =  async() => {
    const temporal = await traerDiseño(diseño.diseño)
    setInformacion(temporal)
  }

  const traerColor =  async() => {
    const temporal = await traerColor(diseño.diseño, color.color)
    setInformacion(temporal)
  }

  return (
    <div className="App">
      <Container>
        <Form>
          <Form.Text >Formulario pedir ropa</Form.Text>
            <Form.Group className="mb-3">
              <Form.Label>Diseño Ropa</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="diseño"
                placeholder="Ingrese el nombre del diseño de la ropa"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Color</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="color"
                placeholder="Ingrese el color de la prenda"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Talla</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="talla"
                placeholder="ingrese la talla"
              />
            </Form.Group>          
            <Button onClick={guardarRopa}>
              Guardar Pedido
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
        <Button onClick={traerTodo}>
            traer todos
        </Button>
        <Form>
            <Form.Group className="mb-3">
              <Form.Label>Diseño</Form.Label>
              <Form.Control
                onChange={handleChangeBuscaDiseño}
                name="diseño"
                placeholder="Ingrese el diseño de ropa"
              />
          </Form.Group>
        </Form>
        <Button onClick={traerDiseño}>
          Buscar Diseño
        </Button>
        <Form>
            <Form.Group className="mb-3">
              <Form.Label>Color</Form.Label>
              <Form.Control
                onChange={handleChangeBuscaColor}
                name="color"
                placeholder="Ingrese el color de ropa"
              />
          </Form.Group>
        </Form>
        <Button onClick={traerColor}>
          Buscar el Color
        </Button>
      </Container>
    </div>
  );
}

export default App;
