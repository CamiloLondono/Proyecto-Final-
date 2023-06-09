import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Col, Container, Row } from 'react-bootstrap';
import {hacerPeticion, traerTodo, traerLaSala, traerSalaYAsiento} from './servicios/clienteaxios.js';

function App() {
  const [formulario, setFormulario] = useState({
    sala: '',
    fila: '',
    asiento: '',
  });

  const [sala, setSala] = useState({
    sala: ''
  });

  const [asiento, setAsiento] = useState({
    asiento: '',
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
  
  const handleChangeBuscaSala = (event) => {
    const temporal = { ...sala };
    temporal[event.target.name] = event.target.value;
    setSala(temporal);
  };
  
  const handleChangeBuscaAsiento = (event) => {
    const temporal = { ...asiento };
    temporal[event.target.name] = event.target.value;
    setAsiento(temporal);
  };

  const reserva_asiento = async () => {
    await hacerPeticion(formulario)
    traeTodo()
  }

  const traeTodo =  async() => {
    const temporal = await traerTodo()
    setInformacion(temporal)
  }
  
  const traerSala =  async() => {
    const temporal = await traerLaSala(sala.sala)
    setInformacion(temporal)
  }
  
  const traerAsiento =  async() => {
    const temporal = await traerSalaYAsiento(sala.sala , asiento.asiento)
    setInformacion(temporal)
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
                name="sala"
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
                name="asiento"
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
                {elemento.sala}
              </Col>
              <Col>
                {elemento.fila}
              </Col>
              <Col>
                {elemento.asiento}
              </Col>
            </Row>
          })
        }

        <Button onClick={traeTodo}>
            traer todos
        </Button>

        <Form>
            <Form.Group className="mb-3">
              <Form.Label>Sala</Form.Label>
              <Form.Control
                onChange={handleChangeBuscaSala}
                name="sala"
                placeholder="Ingrese la sala"
              />
          </Form.Group>
        </Form>
        <Button onClick={traerSala}>
              Buscar la sala
            </Button>
            
        <Form>
            <Form.Group className="mb-3">
              <Form.Label>Asiento</Form.Label>
              <Form.Control
                onChange={handleChangeBuscaAsiento}
                name="asiento"
                placeholder="Ingrese asiento"
              />
          </Form.Group>
        </Form>
        <Button onClick={traerAsiento}>
              Buscar el Asiento
            </Button>

      </Container>
    </div>
  );
}

export default App;
