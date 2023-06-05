import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';


function App() {
  const [formulario, setFormulario] = useState({
    Usuarios: '',
    Chats: '',
    Mensajes: '',
    mensajeEnviar: '',
    nombre: '',
    apellido: '',
    usuario: '',
    contraseña: '',
  });

  const [mensajesEnviados, setMensajesEnviados] = useState([]);

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

  const handleEnviarMensaje = () => {
    const mensaje = `${formulario.usuarioSeleccionado}: ${formulario.mensajeEnviar}`;
  // Añade el mensaje a la lista de mensajes enviados
  setMensajesEnviados([...mensajesEnviados, mensaje]);
  // Limpia el campo de texto de "Mensaje a Enviar"
  setFormulario({ ...formulario, mensajeEnviar: '' });
  };

  const handleCerrarSesion = () => {
    // Cerrar sesión y establecer la variable de estado como false
    setSesionIniciada(false);
    alert('Sesión cerrada');
  };

  const handleLimpiarMensajes = () => {
    // Limpiar la lista de mensajes enviados
    setMensajesEnviados([]);
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
                  <FormControl
                    as="select" 
                    onChange={handleChange} 
                    name="usuarioSeleccionado"
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
                </Form.Group>
                {/* ... */}
                <Form.Group className="mb-3">
                  <Form.Label>Mensajes Enviados</Form.Label>
                  <Form.Control
                    as="textarea"
                    rows={5}
                    value={mensajesEnviados.join('\n')}
                    disabled
                  />
                </Form.Group>
                {/* ... */}
                <Form.Group className="mb-3">
                  <Form.Label>Mensaje a Enviar</Form.Label>
                  <Form.Control
                    name="mensajeEnviar"
                    value={formulario.mensajeEnviar}
                    onChange={handleChange}
                    placeholder='Escribe el mensaje que deseas enviar'
                    disabled={!sesionIniciada}
                  />
                </Form.Group>
                {/* ... */}
                <FormGroup>
                  <Button onClick={handleEnviarMensaje} disabled={!sesionIniciada}>
                    Enviar
                  </Button>
                  {/* ... */}
                  <Button onClick={handleLimpiarMensajes} disabled={!sesionIniciada}>
                    Limpiar
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
