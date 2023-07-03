import React, { useState, useEffect } from 'react';
import { Alert,Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Inicio(){
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
        setMensajes({mensaje: 'benvenuto nell altra pagina ' + usuario, error: false})
        }else{
          setSesion({usuario: ''})
          setMensajes({mensaje: 'accesso non effettuato' , error: true})
        }
    }, [setMensajes, setSesion])

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
                  {
                    sesion.usuario !=='' ?
                    <Link to='/Ventanota'>
                      <Button>
                        continuare ad andare avanti
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

export default Inicio