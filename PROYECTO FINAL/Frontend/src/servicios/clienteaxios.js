import axios from "axios";

const baseurl = "http://localhost:8000/api/";

export const crearConfiguracion = (metodo, url, informacion) => {
    return {
        method : metodo,
        url: baseurl + url,
        data: informacion
    }
}

export const hacerPeticion = async (informacion) => {
    try {
      const configuracion = crearConfiguracion("post", "usuarios/", informacion);
      const respuesta = await axios(configuracion);
      if (respuesta && respuesta.data === 201) {
        console.log(respuesta.data);
        return respuesta
        // Hacer algo con los datos de la respuesta
      }
    } catch (error) {
      console.log(error);
    }
  };

export const obtenerUsuarios = async () => {
  try {
      const configuracion = crearConfiguracion("get", "usuarios/");
      const respuesta = await axios(configuracion);
      if (respuesta.status === 200) {
          console.log(respuesta.data);
      }
      return respuesta.data;
  } catch (error) {
      console.log(error);
  }
};
  