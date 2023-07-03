import React, { useState, useEffect } from "react";
import { hacerPeticionChats, obtenerMensajesChats } from '../servicios/clienteAxiosChats';

function Chat({ usuarioSeleccionado, usuarioLogeado, cerrarSesion }) {
  const [mensaje, setMensaje] = useState("");
  const [mensajes, setMensajes] = useState([]);
  const [mensajesRecibidos, setMensajesRecibidos] = useState([]);

  const enviarMensaje = async (mensaje) => {
    try {
      const remitente = usuarioLogeado;
      const destinatario = usuarioSeleccionado;
      const contenido = mensaje;
  
      const informacion = {
        remitente: remitente,
        destinatario: destinatario,
        contenido: contenido
      };
  
      await hacerPeticionChats(informacion);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const obtenerMensajes = async () => {
      try {
        const respuesta = await obtenerMensajesChats();
        setMensajes(respuesta);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerMensajes();

    const intervalo = setInterval(() => {
      obtenerMensajes();
    }, 100);

    return () => {
      clearInterval(intervalo);
    };
  }, []);

  useEffect(() => {
    if (usuarioSeleccionado) {
      const mensajesFiltrados = mensajes.filter(
        mensaje =>
          (mensaje.remitente === usuarioLogeado && mensaje.destinatario === usuarioSeleccionado) ||
          (mensaje.remitente === usuarioSeleccionado && mensaje.destinatario === usuarioLogeado)
      );
      setMensajesRecibidos(mensajesFiltrados);
    }
  }, [usuarioSeleccionado, usuarioLogeado, mensajes]);

  return (
    <div
      style={{
        position: "fixed",
        top: "20px",
        right: "50px",
        width: "750px",
        maxHeight: "650px",
        overflow: "auto",
      }}
    >
      {usuarioSeleccionado && (
        <div className="text-center mb-3">
          <h3>{usuarioSeleccionado}</h3>
        </div>
      )}

      <div className="container mt-3">
        <div className="card mt-3 mb-3 shadow border-0" id="contenido-chat">
          <div className="card-body">
            {mensajesRecibidos.map((mensaje, index) => (
              <div
                key={index}
                className={`d-flex p-3 ${
                  mensaje.remitente === usuarioLogeado
                    ? "justify-content-end"
                    : "justify-content-start"
                }`}
              >
                <div
                  className={`card mb-3 shadow border-1 ${
                    mensaje.remitente === usuarioLogeado
                      ? "bg-success bg-opacity-25"
                      : "bg-light"
                  }`}
                >
                  <div className="card-body">
                    <div className="d-flex align-items-center">
                      <div className="profile-image">
                        
                      </div>
                      <div className="mensaje-texto">
                        <small className="">
                          {mensaje.remitente}: {mensaje.contenido}
                        </small>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card shadow border-0">
          <div className="card-body">
            <h5 className="text-center mb-2">Chat</h5>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                enviarMensaje(mensaje);
                setMensaje("");
              }}
            >
              <div className="d-flex">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Ingrese un Mensaje..."
                  onChange={(e) => setMensaje(e.target.value)}
                  value={mensaje}
                />
                <button className="btn btn-success mx-3" type="submit">
                  Enviar
                </button>
              </div>
            </form>
            <div className="text-center mt-3">
              <button className="btn btn-danger" onClick={cerrarSesion}>
                Cerrar sesión
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chat;