import React, { useState } from "react";
import FormRegistro from "./componentes/FormRegistro";
import FormLogin from "./componentes/FormLogin";
import Chat from "./componentes/Chat";
import ListaUsuarios from "./componentes/ListaUsuarios";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const Loguearse = () => {
  const [activeTab, setActiveTab] = useState("registro");
  const [usuarioSeleccionado, setUsuarioSeleccionado] = useState(null);
  const [usuarioLogeado, setUsuarioLogeado] = useState(null);


  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleUsuarioSeleccionado = (usuario) => {
    setUsuarioSeleccionado(usuario);
  };

  const handleUsuarioLogeado = (usuario) => {
    setUsuarioLogeado(usuario);
  };

  const handleCerrarSesion = () => {
    setUsuarioLogeado(null);
    setUsuarioSeleccionado(null);
    alert('Cierre de Sesion Exitoso!')
  };

  return (
    <div className="container" style={{ position: "relative", top: "30px" }}>
      <div className="btn-group">
        <button
          className={`btn btn-success mx-3 ${
            activeTab === "registro" ? "active" : ""
          }`}
          onClick={() => handleTabChange("registro")}
        >
          Registro
        </button>
        <button
          className={`btn btn-success mx-3 ${
            activeTab === "inicioSesion" ? "active" : ""
          }`}
          onClick={() => handleTabChange("inicioSesion")}
        >
          Inicio de Sesión
        </button>
      </div>

      {activeTab === "registro" && (
        <div>
          <h1>Registro de Usuario</h1>
          <FormRegistro />
        </div>
      )}

      {activeTab === "inicioSesion" && (
        <div>
          <h2>Inicio Sesión</h2>
          <FormLogin handleUsuarioLogeado={handleUsuarioLogeado} isLoggedIn={usuarioLogeado !== null} handleCerrarSesion={handleCerrarSesion} />
        </div>
      )}

      {usuarioLogeado && (
        <div>
          <ListaUsuarios handleUsuarioSeleccionado={handleUsuarioSeleccionado} />
          <Chat
            usuarioSeleccionado={usuarioSeleccionado}
            usuarioLogeado={usuarioLogeado}
            cerrarSesion={handleCerrarSesion}
          />
          
        </div>
      )}
    </div>
  );
};

export default Loguearse;