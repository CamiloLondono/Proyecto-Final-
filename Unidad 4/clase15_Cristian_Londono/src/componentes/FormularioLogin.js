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
        setMensajes({mensaje: 'BENVENUTO ' + formulario.usuario, error: false})
        }
    }, [setMensajes, setSesion])

    const handleChange = (event) => {
        const temporal = { ...formulario };
        temporal[event.target.name] = event.target.value;
        setFormulario(temporal);
    };

    const iniciarSesion = () => {
        if (!!formulario.usuario && !!formulario.contraseña){
        if(formulario.usuario == 'VladTepes' && formulario.contraseña == '3104186055'){
            localStorage.setItem('usuario', formulario.usuario)
            localStorage.setItem('contraseña', formulario.contraseña)
            setSesion({usuario: formulario.usuario})
            setSesion({contraseña: formulario.contraseña})
            setMensajes({mensaje: 'BENVENUTO ' + formulario.usuario, error: false})
        }else{
            setMensajes({mensaje: 'nome utente o password ERRATI', error: true})
        }
        }else {
        setMensajes({mensaje: 'Devi inserire nome utente e password', error: true})
        }
    };

    const cerrarSesion = () => {
        const usuario = localStorage.getItem('usuario')
        localStorage.removeItem('usuario')
        setSesion({usuario: ''})
        setMensajes({mensaje: 'arrivederci ' + usuario, error: false})
    }

    return (
        <Container>
          < Row>
            <Col>
              < Form>
                < Form.Group>
                <Form.Label>Utente</Form.Label>
                <Form.Control name="usuario" onChange={handleChange} placeholder="inserire l'utente:" />
                </Form.Group>
                < Form.Group>
                <Form.Label>parola d'ordine</Form.Label>
                <Form.Control name="contraseña" type='password' onChange={handleChange} placeholder="inserire la parola d'ordine: " />
                </Form.Group>
              </Form>
    
              < Row>
                <Col>
                  <Button onClick={iniciarSesion}>
                    login
                  </Button>
                </Col>
    
                <Col>
                  {
                    sesion.usuario !=='' ?
                    <Link to='/Inicio'>
                      <Button>
                        avanzare
                      </Button>
                    </Link>
                    : null
                  }
                </Col>
    
                <Col>
                  {
                    sesion.usuario !=='' ?
                      <Button onClick={cerrarSesion}>
                        cancella la sottoscrizione
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