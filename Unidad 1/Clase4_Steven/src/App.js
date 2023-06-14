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

  const [resultado, setResultado] = useState({
    suma: 0,
    resta:0,
    multiplicacion:0,
    division:0
  });

  const [validacion, setValidacion] = useState({
    suma: 0,
    resta:0,
    multiplicacion:0,
    division:0
  });

  const handleChange = (event) => {
    const temporal = {...formulario}
    temporal[event.target.name]=event.target.value
    setFormulario(temporal)
    const sumaTemp = parseFloat(temporal.numero1) + parseFloat(temporal.numero2)
    const restaTemp = parseFloat(temporal.numero1) - parseFloat(temporal.numero2)
    const multiTemp = parseFloat(temporal.numero1) * parseFloat(temporal.numero2)
    const diviTemp = parseFloat(temporal.numero1) / parseFloat(temporal.numero2)
    console.log(temporal)
    console.log(sumaTemp)
    setResultado({
     suma: sumaTemp,
     resta: restaTemp,
     multiplicacion: multiTemp,
     division: diviTemp
    })
  }
  return (
    <div className="App">
      <Container>
        <Row>
          <Col className="purple-box">
            <Form>
              <Form.Group  controlId="formBasicEmail">
                <Form.Label>Número 1</Form.Label>
                <Form.Control onChange={handleChange} name="numero1" type="input" placeholder="Digite su primer número" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Número 2</Form.Label>
                <Form.Control  onChange={handleChange} name="numero2" type="input" placeholder="Digite su segundo número" />
              </Form.Group>
            </Form>
          </Col>
      
        
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Resultado suma</Form.Label>
                <Form.Control onChange={handleChange}
                value={resultado.suma}
                type="input"
                placecholder="Suma"
                disabled/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Resultado resta</Form.Label>
                <Form.Control onChange={handleChange}
                value={resultado.resta}
                type="input"
                placecholder="Resta"
                disabled/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Resultado multiplicación</Form.Label>
                <Form.Control onChange={handleChange}
                  value={resultado.multiplicacion}
                  type="input"
                  placecholder="Multiplicación"
                  disabled/>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Resultado división</Form.Label>
                <Form.Control onChange={handleChange}
                value={resultado.division}
                type="input"
                placecholder="División"
                disabled/>
              </Form.Group>

            </Form>
          </Col>
        </Row>
      </Container>
    </div> 

  );
}

export default App;
