import React, { useState } from 'react';
import Form from 'react-bootstrap/Form';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Col, Container, FormControl, FormGroup, FormLabel, Row } from 'react-bootstrap';
import {hacerPeticion, iniciarSesion} from './servicios/clienteaxios.js';

function App() {
  const [formulario, setFormulario] = useState({
    Usuarios: '',
    Chats: '',
    Mensajes: '',
    mensajeEnviar: '',
    nombre: '',
    apellido: '',
    usuarios: '',
    contrasena: '',
  });

  const [mensajesEnviados, setMensajesEnviados] = useState([]);

  const [sesionIniciada, setSesionIniciada] = useState(false);


  const handleChange = (event) => {
    const temporal = { ...formulario };
    temporal[event.target.name] = event.target.value;
    setFormulario(temporal);
  };

  const handleRegistro = async() => {
    const { nombre, apellido, usuarios, contrasena } = formulario;
    const usuarioRegistrado = {
      nombre,
      apellido,
      usuarios,
      contrasena
    };
    const respuesta = await hacerPeticion(usuarioRegistrado)
    console.log(respuesta.data)
    hacerPeticion(usuarioRegistrado)
      .then(response => {
        // Aquí puedes realizar acciones adicionales después de guardar el usuario
        console.log(response.data);
        alert('Registro exitoso');
      })
      .catch(error => {
        console.error(error);
        alert('Error al registrar el usuario');
      });
  };


  const handleInicioSesion = async () => {
    const { usuario, contraseña } = formulario;

    try {
      const token = await iniciarSesion(usuario, contraseña);
      // Realizar acciones adicionales después de iniciar sesión exitosamente
      console.log('Inicio de sesión exitoso');
      console.log('Token:', token);

      // Restablecer los campos del formulario
      setFormulario({
        // ...resto de los campos del formulario
        usuario: '',
        contraseña: '',
      });

      // Actualizar el estado de sesión iniciada
      setSesionIniciada(true);

      alert('Inicio de sesión exitoso');
    } catch (error) {
      // Manejar el error de inicio de sesión
      console.error(error.message);
      alert('Error al iniciar sesión');
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
                    name="usuarios"
                    placeholder="Usuario"
                    onChange={handleChange}
                    disabled={sesionIniciada}
                  />
                </FormGroup>
                {/* ... */}
                <FormGroup className='mb-3' controlId="formBasicPassword">
                  <FormControl
                    name="contrasena"
                    type="password"
                    placeholder="Contraseña"
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
                    name="usuarios"
                    placeholder="Ingrese su Usuario"
                    onChange={handleChange}
                    disabled={sesionIniciada}
                  />
                </FormGroup>
                {/* ... */}
                <FormGroup className='mb-3' controlId="formBasicPassword">
                  <FormControl
                    name="contrasena"
                    type="password"
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
