import React, { useState, useEffect } from 'react';
import { Alert,Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Window(){
    const [sesion, setSesion] = useState ({
        usuario: ''
    })

    const [mensajes, setMensajes] = useState({
        mensaje: 'session not started',
        error: false
    })

    useEffect (()=>{
        const usuario = localStorage.getItem('usuario')
        if (!!usuario){
        setSesion({usuario: usuario})
        setMensajes({mensaje: 'Esta es la tarea en ingles de ' + usuario, error: false})
        }else{
          setSesion({usuario: ''})
          setMensajes({mensaje: 'still logged in' , error: true})
        }
    }, [setMensajes, setSesion])

    const cerrarSesion = () => {
        const usuario = localStorage.getItem('usuario')
        localStorage.removeItem('usuario')
        setSesion({usuario: ''})
        setMensajes({mensaje: 'see you later ' + usuario, error: false})
    }

    return (
        <Container>
          < Row>
                <Col>
                    {
                        sesion.usuario !=='' ?
                        <Link to='/'>
                        <Button onClick={cerrarSesion}>
                            Sign off
                        </Button>
                        </Link>
                        : null
                    }
                </Col>
                <Col>
                    <Alert variant={mensajes.error ? 'danger' : 'primary' }>
                    {mensajes.mensaje}
                    </Alert>
                </Col>
          </Row>
        </Container>
      );

}

export default Window