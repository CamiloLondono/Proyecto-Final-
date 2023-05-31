import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import {hacerPeticion} from './servicios/clienteaxios.js';

function App() {
  const [formulario, setFormulario] = useState({
    diseño: '',
    color: '',
    talla: '',
  });

  const informacion = [
    {
      'titulo': 'el irlandes herrante'
    }, 
    {  
      'titulo': 'el barco volador'
    }
  ]

  const handleChange = (event) => {
    const temporal = { ...formulario };
    temporal[event.target.name] = event.target.value;
    setFormulario(temporal);
  };

  const guardarRopa = () => {
    hacerPeticion(formulario)
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
                titulo
              </Col>
              <Col>
                {elemento.titulo}
              </Col>
            </Row>
          })
        }
      </Container>
    </div>
  );
}

export default App;
