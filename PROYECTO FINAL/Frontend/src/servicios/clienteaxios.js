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
      if (respuesta && respuesta.data) {
        console.log(respuesta.data);
        return respuesta
        // Hacer algo con los datos de la respuesta
      }
    } catch (error) {
      console.log(error);
    }
  };

export const iniciarSesion = async (usuario, contraseña) => {
  try {
    const configuracion = crearConfiguracion("post", "usuarios/", { usuario, contraseña });
    const respuesta = await axios(configuracion);
    if (respuesta && respuesta.data) {
      console.log(respuesta.data);
      // Extraer el token de la respuesta y devolverlo
      const token = respuesta.data.token;
      return token;
    }
  } catch (error) {
    console.log(error);
    throw new Error("Error al iniciar sesión");
  }
};
  