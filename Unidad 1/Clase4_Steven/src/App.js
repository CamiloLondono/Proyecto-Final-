import './App.scss';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState } from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
function App() {
  const [formulario, setFormulario] = useState({
    numero1: "",
    numero2:""
  });

  const handleChange = (event) => {
    const temporal = {...formulario}
    temporal[event.target.name]=event.target.value
    setFormulario(temporal)
  }
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="purple-box">
            <Form>
              <Form.Group  controlId="formBasicEmail">
                <Form.Label>Número 1</Form.Label>
                <Form.Control onChange={handleChange} name="Número 1" type="input" placeholder="Digite su primer número" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Número 2</Form.Label>
                <Form.Control  onChange={handleChange} name="Número 2" type="input" placeholder="Digite su segundo número" />
              </Form.Group>
            </Form>
          </Col>
      
        
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Resultado suma</Form.Label>
                <Form.Control onChange={handleChange} name="suma" type="input"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Resultado resta</Form.Label>
                <Form.Control onChange={handleChange} name="resta" type="input"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Resultado multiplicación</Form.Label>
                <Form.Control onChange={handleChange} name="multiplicacion" type="input"/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Resultado división</Form.Label>
                <Form.Control onChange={handleChange} name="division" type="input"/>
              </Form.Group>

            </Form>
          </Col>
        </Row>
        {formulario.numero1}
        {formulario.numero2}
      </Container>
    </div> 

  );
}

export default App;
