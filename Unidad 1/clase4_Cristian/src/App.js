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

  const handleChange = (event) => {
    const temporal = { ...formulario }; //copia el objeto que esta dentro de las llaves, quitando referencia
    temporal[event.target.numero] = event.target.value;
    setFormulario(temporal);
  }; //el target.name es como los get y set, y el .value sirve para cambiar el valor

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
                  onChange={handleChange}
                  name="numero1"
                  type="input"
                  placeholder="Suma"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Resultado Resta</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="numero1"
                  type="input"
                  placeholder="Resta"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Resultado Multiplicacion</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="numero1"
                  type="input"
                  placeholder="Multiplicacion"
                />
              </Form.Group>

              <Form.Group>
                <Form.Label>Resultado Division</Form.Label>
                <Form.Control
                  onChange={handleChange}
                  name="numero1"
                  type="input"
                  placeholder="Division"
                />
              </Form.Group>
            </Col>
          </Row>

          {formulario.numero1}
          {formulario.numero2}
        </Form>
      </Container>
    </div>
  );
}

export default App;
