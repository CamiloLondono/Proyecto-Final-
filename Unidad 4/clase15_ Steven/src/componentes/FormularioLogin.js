import React, { useState, useEffect } from 'react';
import { Alert,Col, Container, Row, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function FormularioLogin(){
    const [sesion, setSesion] = useState ({
        usuario: ''
    })

    const [formulario, setFormulario] = useState({
        usuario: '',
        contraseña: ''
    })

    const [mensajes, setMensajes] = useState({
        mensaje: '',
        error: false
    })

    useEffect (()=>{
        const usuario = localStorage.getItem('usuario')
        if (!!usuario){
        setSesion({usuario: usuario})
        setMensajes({mensaje: 'BIENVENIDO' + formulario.usuario, error: false})
        }
    }, [setMensajes, setSesion])

    const handleChange = (event) => {
        const temporal = { ...formulario };
        temporal[event.target.name] = event.target.value;
        setFormulario(temporal);
    };

    const iniciarSesion = () => {
        if (!!formulario.usuario && !!formulario.contraseña){
        if(formulario.usuario == 'stevenco' && formulario.contraseña == '123'){
            localStorage.setItem('usuario', formulario.usuario)
            localStorage.setItem('contraseña', formulario.contraseña)
            setSesion({usuario: formulario.usuario})
            setSesion({contraseña: formulario.contraseña})
            setMensajes({mensaje: 'BIENVENIDO ' + formulario.usuario, error: false})
        }else{
            setMensajes({mensaje: 'Usuario o Contraseña INCORRECTOS', error: true})
        }
        }else {
        setMensajes({mensaje: 'Debe ingresar usuario y contraseña', error: true})
        }
    };

    const cerrarSesion = () => {
        const usuario = localStorage.getItem('usuario')
        localStorage.removeItem('usuario')
        setSesion({usuario: ''})
        setMensajes({mensaje: 'Hasta Luego ' + usuario, error: false})
    }

    return (
        <Container>
          < Row>
            <Col>
              < Form>
                < Form.Group>
                <Form.Label>Usuario</Form.Label>
                <Form.Control name="usuario" onChange={handleChange} placeholder="Ingrese el Usuario: " />
                </Form.Group>
                < Form.Group>
                <Form.Label>Contraseña</Form.Label>
                <Form.Control name="contraseña" type='password' onChange={handleChange} placeholder="Ingrese la contraseña: " />
                </Form.Group>
              </Form>
    
              < Row>
                <Col>
                  <Button onClick={iniciarSesion}>
                    Iniciar Sesion
                  </Button>
                </Col>
    
                <Col>
                  {
                    sesion.usuario !=='' ?
                    <Link to='/Inicio'>
                      <Button>
                        Avanzar
                      </Button>
                    </Link>
                    : null
                  }
                </Col>
    
                <Col>
                  {
                    sesion.usuario !=='' ?
                      <Button onClick={cerrarSesion}>
                       Cerrar Sesion
                      </Button>
                      : null
                  }
                </Col>
    
                <Col>
                  <Alert variant={mensajes.error ? 'danger' : 'primary' }>
                    {mensajes.mensaje}
                  </Alert>
                </Col>
              </Row>
    
            </Col>
    
          </Row>
        </Container>
      );

}

export default FormularioLogin