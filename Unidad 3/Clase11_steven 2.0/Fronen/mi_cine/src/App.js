import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import {hacerPeticion} from './servicios/clienteaxios.js';

function App() {
  const [formulario, setFormulario] = useState({
    sala: '',
    fila: '',
    asientos: '',
  });

  const informacion = [
    {
      'titulo': '...'
    }, 
    {  
      'titulo': '...'
    }
  ]

  const handleChange = (event) => {
    const temporal = { ...formulario };
    temporal[event.target.name] = event.target.value;
    setFormulario(temporal);
  };

  const reserva_asiento = () => {
    hacerPeticion(formulario)
  }

  return (
    <div className="App">
      <Container>
        <Form>
          <Form.Text >Formulario de asiento</Form.Text>
            <Form.Group className="mb-3">
              <Form.Label>Sala</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="Sala"
                placeholder="Ingrese el número de la sala"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Fila</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="fila"
                placeholder="Ingrese la fila donde estará su asiento (A-Z)"
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>#Asiento</Form.Label>
              <Form.Control
                onChange={handleChange}
                name="Número de asiento"
                placeholder="ingrese el número de asiento"
              />
            </Form.Group>          
            <Button onClick={reserva_asiento}>
              Guardar Asiento
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
