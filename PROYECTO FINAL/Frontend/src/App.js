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

  const [sesionIniciada, setSesionIniciada] = useState(false);

  const handleChange = (event) => {
    const temporal = { ...formulario };
    temporal[event.target.name] = event.target.value;
    setFormulario(temporal);
  };

  const handleRegistro = () => {
    const { nombre, apellido, usuario, contraseña } = formulario;

    // Aquí puedes implementar la lógica para registrar el usuario
    // ...

    // Almacenar el usuario registrado en el localStorage
    const usuarioRegistrado = {
      nombre,
      apellido,
      usuario,
      contraseña
    };
    localStorage.setItem('usuario', JSON.stringify(usuarioRegistrado));

    // Mostrar mensaje de éxito o redirigir a otra página
    alert('Registro exitoso');
  };

  const handleInicioSesion = () => {
    const { usuario, contraseña } = formulario;

    // Verificar las credenciales del usuario registrado
    const usuarioAlmacenado = JSON.parse(localStorage.getItem('usuario'));

    if (usuario === usuarioAlmacenado.usuario && contraseña === usuarioAlmacenado.contraseña) {
      // Credenciales válidas, iniciar sesión
      setSesionIniciada(true);
      alert('Inicio de sesión exitoso');
    } else {
      // Credenciales inválidas, mostrar mensaje de error
      alert('Credenciales incorrectas');
    }
  };

  const handleCerrarSesion = () => {
    // Cerrar sesión y establecer la variable de estado como false
    setSesionIniciada(false);
    alert('Sesión cerrada');
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
                {/* ... */}
                <FormGroup>
                  <Button onClick={handleCerrarSesion}>
                    Cerrar Sesion
                  </Button>
                </FormGroup>
              </Col>
              {/* ... */}
              <Col>
                <Form.Group className="mb-3">
                  <Form.Label>Chats</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="Chats"
                  />
                </Form.Group>
                {/* ... */}
                <Form.Group className="mb-3">
                  <Form.Label>Mensajes Enviados</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="Mensajes"
                  />
                </Form.Group>
                {/* ... */}
                <Form.Group className="mb-3">
                  <Form.Label>Mensaje a Enviar</Form.Label>
                  <Form.Control
                    onChange={handleChange}
                    name="Mensaje a Enviar"
                    placeholder='Escribe el mensaje que deseas enviar'
                  />
                </Form.Group>
                {/* ... */}
                <FormGroup>
                  <Button>
                    Enviar
                  </Button>
                </FormGroup>
              </Col>
              {/* ... */}
              <Col>
                <FormGroup className='mb-3'>
                  <FormLabel>Registrarse</FormLabel>
                </FormGroup>
                {/* ... */}
                <FormGroup className='mb-3'>
                  <FormControl
                    name="nombre"
                    placeholder="Nombre"
                    onChange={handleChange}
                    disabled={sesionIniciada}
                  />
                </FormGroup>         
                {/* ... */}       
                <FormGroup className='mb-3'>
                  <FormControl
                    name="apellido"
                    placeholder="apellido"
                    onChange={handleChange}
                    disabled={sesionIniciada}
                  />
                </FormGroup>
                {/* ... */}
                <FormGroup className='mb-3'>
                  <FormControl
                    name="usuario"
                    placeholder="Usuario"
                    onChange={handleChange}
                    disabled={sesionIniciada}
                  />
                </FormGroup>
                {/* ... */}
                <FormGroup className='mb-3'>
                  <FormControl
                    name="contraseña"
                    placeholder="contraseña"
                    onChange={handleChange}
                    disabled={sesionIniciada}
                  />
                </FormGroup>
                {/* ... */}
                <FormGroup>
                  <Button onClick={handleRegistro} disabled={sesionIniciada}>
                    Registrarse
                  </Button>
                </FormGroup>
                {/* ... */}
                <FormGroup className='mb-3'>
                  <FormLabel>Login</FormLabel>
                </FormGroup>
                {/* ... */}
                <FormGroup className='mb-3'>
                  <FormControl
                    name="usuario"
                    placeholder="Ingrese su Usuario"
                    onChange={handleChange}
                    disabled={sesionIniciada}
                  />
                </FormGroup>
                {/* ... */}
                <FormGroup className='mb-3'>
                  <FormControl
                    name="contraseña"
                    placeholder="Ingrese su contraseña"
                    onChange={handleChange}
                    disabled={sesionIniciada}
                  />
                </FormGroup>
                {/* ... */}
                <FormGroup>
                  <Button onClick={handleInicioSesion} disabled={sesionIniciada}>
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
