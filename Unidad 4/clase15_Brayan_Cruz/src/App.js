//import logo from './logo.svg';
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Routes, Route } from 'react-router-dom';
import FormularioLogin from './componentes/FormularioLogin';
import Window from './componentes/Window';
import Inicio from './componentes/Inicio';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path = '/'>
          <Route index element = {<FormularioLogin/>} />
          <Route path = 'Inicio' element = {<Inicio/>} />
          <Route path = 'Window' element = {<Window/>} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
