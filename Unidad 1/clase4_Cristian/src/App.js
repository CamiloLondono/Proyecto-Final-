import "./App.scss";
import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function App() {
  const [formulario, setFormulario] = useState({
    numero1: "",
    numero2: "",
  });

  const [resultado, setResultado] = useState({
    suma: 0,
    resta: 0,
    multiplicacion: 0,
    division: 0,
  })

  const handleChange = (event) => {
    const temporal = { ...formulario }; //copia el objeto que esta dentro de las llaves, quitando referencia
    temporal[event.target.name] = event.target.value;
    setFormulario(temporal);
    //el target.name es como los get y set, y el .value sirve para cambiar el valor
    const sumaTemp = parseFloat(temporal.numero1) + parseFloat(temporal.numero2)
    const restaTemp = parseFloat(temporal.numero1) - parseFloat(temporal.numero2)
    const multiplicacionTemp = parseFloat(temporal.numero1) * parseFloat(temporal.numero2)
    const divisionTemp = parseFloat(temporal.numero2) !==0 ? parseFloat(temporal.numero1) / parseFloat(temporal.numero2): 'No definido'
    setResultado({
      suma: sumaTemp,
      resta: restaTemp,
      multiplicacion: multiplicacionTemp,
      division: divisionTemp
    })
  }

  return (
    <div className="App">
      <Container>
        <Form>
          <Row>
            <Col>
              <Form.Group>
                <Form.Label>Ingrese el numero</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="numero1"
                  type="input"
                  placeholder="Introducir Numero 1"
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Ingrese el numero</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="numero2"
                  type="input"
                  placeholder="Introducir Numero 2"
                />
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Resultado Suma</Form.Label>
                <Form.Control
                  value={resultado.suma}
                  name='numero1'
                  type="input"
                  placeholder="Suma"
                  disabled //comando disabled, es para desibilitar el campo de texto
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Resultado Resta</Form.Label>
                <Form.Control
                  value={resultado.resta}
                  name='numero1'
                  type="input"
                  placeholder="Resta"
                  disabled
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Resultado Multiplicacion</Form.Label>
                <Form.Control
                  value={resultado.multiplicacion}
                  name='numero1'
                  type="input"
                  placeholder="Multiplicacion"
                  
                />
              </Form.Group>
              <Form.Group>
                <Form.Label>Resultado Division</Form.Label>
                <Form.Control
                  value={resultado.division}
                  type="input"
                  placeholder="Division"
                  disabled
                />
              </Form.Group>
            </Col>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default App;
