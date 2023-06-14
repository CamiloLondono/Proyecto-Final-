import './App.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function App() {
  const [formulario, setFormulario] = useState({
    email: '',
    password: ''
  });

  const handleChange = (event) => {
    const temporal = {...formulario}
    temporal[event.target.name] = event.target.value
    setFormulario(temporal)
  }

  return (
    <div className="App">
      <Container>
         <Row>

          <Col><Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Numero 1</Form.Label>
            <Form.Control onChange= {handleChange} name= "email" type="email" placeholder=" Ingrese Numero" />
            <Form.Text className="text-muted">
            </Form.Text>

          <Row><Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Numero 2</Form.Label>
            <Form.Control onChange= {handleChange} name= "password" type="password" placeholder="Ingrese Numero" />
          </Form.Group></Row>
          <Button variant="primary" type="Resultado">
            Resultado
          </Button>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          </Form.Group></Col>

          <Col><Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Suma</Form.Label>
            <Form.Control onChange= {handleChange} name= "email" type="email" placeholder=" Resultado Suma" />
            <Form.Text className="text-muted">
            </Form.Text>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Resta</Form.Label>
            <Form.Control onChange= {handleChange} name= "password" type="password" placeholder="Resultado Resta" />
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Multiplicacion</Form.Label>
            <Form.Control onChange= {handleChange} name= "password" type="password" placeholder="Resultado Multiplicacion" />
          </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Division</Form.Label>
            <Form.Control onChange= {handleChange} name= "password" type="password" placeholder="Resultado Division" />
          </Form.Group>
          </Form.Group></Col>
         
          {formulario.email}
          {formulario.password}
          
          
          
        </Row>
        <Form>
        </Form>
      </Container>
    </div>
  );
}

export default App;
