import React, { useState, useEffect } from 'react';
import { Alert,Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Ventanota(){
    const [sesion, setSesion] = useState ({
        usuario: ''
    })

    const [mensajes, setMensajes] = useState({
        mensaje: 'sessione non iniziata',
        error: false
    })

    useEffect (()=>{
        const usuario = localStorage.getItem('usuario')
        if (!!usuario){
        setSesion({usuario: usuario})
        setMensajes({mensaje: 'esta es mi tarea en italiano ' + usuario, error: false})
        }else{
          setSesion({usuario: ''})
          setMensajes({mensaje: 'non ancora loggato' , error: true})
        }
    }, [setMensajes, setSesion])

    const cerrarSesion = () => {
        const usuario = localStorage.getItem('usuario')
        localStorage.removeItem('usuario')
        setSesion({usuario: ''})
        setMensajes({mensaje: 'arrivederci' + usuario, error: false})
    }

    return (
        <Container>
          < Row>
                <Col>

                    {
                        sesion.usuario !=='' ?
                        <Link to='/'>
                        <Button onClick={cerrarSesion}>
                            cancella la sottoscrizione
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

export default Ventanota