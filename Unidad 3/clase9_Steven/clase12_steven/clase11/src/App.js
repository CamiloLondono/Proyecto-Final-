import React, { useState } from 'react';
import './App.scss'
import 'bootstrap/dist/css/bootstrap.min.css'
import {doRequest} from "./servicios/clienteaxios"
import { guardarLibro, traerTodosLosLibros, traerTodosPorTitulo, traerTodosPorTituloYAutor } from './servicios/clienteaxios';
import { Button, Form, Container,Row, Col } from 'react-bootstrap'

function App() {

  const [formulario, setFormulario] = useState({ 
    titulo: '',
    resumen: '' 
  });
  
  const [titulo, setTitulo] = useState({ 
    titulo: ''
  })
  
  const [autor, setAutor] = useState({ 
    autor: ''
  })

  const [informacion, setInformacion] = useState([

    {
      'titulo': ' el irlandez herrante'
    }, 
    { 
      'titulo': 'el barco volador' 
    } , 
    { 
      'titulo': 'el barco volador 2' 
    } 
  ])

  
  const handleChange = (event) => {
    const temporal = {...formulario} // Copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setFormulario(temporal)
  }
   
  const handleChangeBuscar = (event) => {
    const temporal = {...titulo} // Copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setTitulo(temporal)
  }


  const handleChangeBuscaAutor = (event) => {
    const temporal = {...autor} // Copia el objeto quitando la referencia
    temporal[event.target.name] = event.target.value
    setAutor(temporal)
  }

  const guardar =async () => {
    await guardarLibro(formulario)
    traerTodos()
  }
  
  const traerTodos =  async() => {
    const temporal = await traerTodosLosLibros()
    setInformacion(temporal)
  }
  const traerTITULO =  async() => {
    const temporal = await traerTodosPorTitulo(titulo.titulo)
    setInformacion(temporal)
  }
  const traerAutor =  async() => {
    const temporal = await traerTodosPorTituloYAutor(titulo.titulo, autor.autor)
    setInformacion(temporal)
  }

  return (
    <div>
      <Container>
        <Form>
          <Form.Group>
            <Form.Label>Titulo</Form.Label>
            <Form.Control onChange={handleChange} name="titulo" placeholder="Titulo"/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Resumen</Form.Label>
            <Form.Control onChange={handleChange} name="resumen" placeholder="resumen" />
          </Form.Group>
          {formulario.email}
          {formulario.password}
          <Button onClick={guardar}>
            Guardar Libro
          </Button>
        </Form>

        {
        informacion.map((elemento) => {
            return <Row>
              <Col>
                titulo
              </Col>
              <Col>
                {elemento.autor}
              </Col>
            </Row>
          })
        }
        <Button onClick={traerTodos}>
            traer todos
          </Button>

          <Form>
            <Form.Group>
              <Form.Label>Titulo</Form.Label>
              <Form.Control onChange={handleChangeBuscar} name="titulo" placeholder="Titulo"/>
            </Form.Group>
          </Form>
          <Button onClick={traerTITULO}>
            Buscar por titulo
          </Button>

          <Form>
            <Form.Group>
              <Form.Label>Autor</Form.Label>
              <Form.Control onChange={handleChangeBuscaAutor} name="titulo" placeholder="Titulo"/>
            </Form.Group>
          </Form>
          <Button onClick={traerAutor}>
          Buscar por titulo y autor
          </Button>
        
      </Container>
    </div>
  )
}

export default App