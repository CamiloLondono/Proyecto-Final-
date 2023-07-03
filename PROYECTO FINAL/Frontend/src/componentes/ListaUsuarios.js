import React, { useEffect, useState } from 'react';
import { obtenerUsuarios } from '../servicios/clienteaxios';

const ListaUsuarios = ({ handleUsuarioSeleccionado }) => {
  const [usuarios, setUsuarios] = useState([]);

  useEffect(() => {
    const obtenerUsuariosRegistrados = async () => {
      try {
        const usuariosObtenidos = await obtenerUsuarios();
        setUsuarios(usuariosObtenidos);
      } catch (error) {
        console.log(error);
      }
    };

    obtenerUsuariosRegistrados();
  }, []);

  return (
    <div
      className="card shadow border-0"
      style={{ position: 'fixed', top: '70px', right: '8px', maxWidth: '200px', zIndex: '1' }}
    >
      <div className="card-body">
        <h3 className="card-title">Usuarios Registrados</h3>
        <ul className="list-group">
          {usuarios.map((user) => (
            <li
              key={user.id}
              className="list-group-item"
              style={{ cursor: 'pointer' }}
              onClick={() => handleUsuarioSeleccionado(user.usuario)}
              onMouseEnter={(e) => e.target.classList.add('bg-success', 'text-white')}
              onMouseLeave={(e) => e.target.classList.remove('bg-success', 'text-white')}
            >
              {user.usuario}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ListaUsuarios;