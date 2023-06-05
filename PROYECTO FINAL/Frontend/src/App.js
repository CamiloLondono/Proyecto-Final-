import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';


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

  return (
    <div className="App">
      <Container>
        <Form>
          <Row>
              <Col>
              <Form.Text ></Form.Text>
                <Form.Group className="mb-3">
                  <Form.Label>Usuarios</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="Usuarios"
                  />
                </Form.Group>
                <Button>
                  Cerrar Sesion
                </Button>
              </Col>
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Chats</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="Chats"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mensajes Enviados</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="Mensajes"
                  />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Mensaje a Enviar</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="Mensaje a Enviar"
                    placeholder='Escribe el mensaje que deseas enviar'
                  />
                </Form.Group>
                <FormGroup>
                  <Button>
                    Enviar
                  </Button>
                </FormGroup>
              </Col>
              <Col>
                <FormGroup className='mb-3'>
                  <FormLabel>Registrarse</FormLabel>
                </FormGroup>
                <FormGroup className='mb-3'>
                  <FormControl
                    name="nombre"
                    placeholder="Nombre"
                  />
                </FormGroup>                
                <FormGroup className='mb-3'>
                  <FormControl
                    name="apellido"
                    placeholder="apellido"
                  />
                </FormGroup>
                <FormGroup className='mb-3'>
                  <FormControl
                    name="usuario"
                    placeholder="Usuario"
                  />
                </FormGroup>
                <FormGroup className='mb-3'>
                  <FormControl
                    name="contraseña"
                    placeholder="contraseña"
                  />
                </FormGroup>
                <FormGroup>
                  <Button>
                    Registrarse
                  </Button>
                </FormGroup>
                <FormGroup className='mb-3'>
                  <FormLabel>Login</FormLabel>
                </FormGroup>
                <FormGroup className='mb-3'>
                  <FormControl
                    name="usuario"
                    placeholder="Ingrese su Usuario"
                  />
                </FormGroup>                
                <FormGroup className='mb-3'>
                  <FormControl
                    name="contraseña"
                    placeholder="Ingrese su contraseña"
                  />
                </FormGroup>
                <FormGroup>
                  <Button>
                    Iniciar Sesion
                  </Button>
                </FormGroup>
              </Col>
            </Row>      
          </Form>
        </Container>
    </div>
  );
}

export default App;
