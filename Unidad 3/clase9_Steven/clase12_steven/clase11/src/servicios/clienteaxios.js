import axios from "axios";

const baseurl = "http://localhost:8000/api/";

export const crearConfiguracion = (method, url,informacion) => {
  return {
    method: method,
    url: baseurl + url,
    data: informacion
  }
}

export const crearConfiguracionSinInformacion = (method, url) => {
  return {
    method: method,
    url: baseurl + url,
    
  }
}

export const guardarLibro = async (informacion) => {
  try {
    const configuracion = crearConfiguracion("post", "biblioteca/", informacion);
    console.log(informacion) //es como un print en python 
    const respuesta = await axios(configuracion);
    if (respuesta.status === 201) {
      console.log(respuesta);
    }
    return respuesta.status;
  } catch (error) {
    console.log(error);
  }
};

export const traerTodosLosLibros = async (informacion) => {
  try {
    const configuracion = crearConfiguracionSinInformacion("get", "biblioteca/");
    const respuesta = await axios(configuracion);
    if (respuesta.status === 200) {
      console.log(respuesta.data);
    }
    return respuesta.data;
  } catch (error) {
    console.log(error);
  }
};

export const traerTodosPorTitulo = async (titulo) => {
  try {
    const configuracion = crearConfiguracionSinInformacion("get", "biblioteca/?titulo="+titulo);
    const respuesta = await axios(configuracion);
    if (respuesta.status === 200) {
      console.log(respuesta.data);
    }
    return respuesta.data;
  } catch (error) {
    console.log(error);
  }
};

export const traerTodosPorTituloYAutor = async (titulo, autor) => {
  try {
    const configuracion = crearConfiguracionSinInformacion("get", "biblioteca/?titulo="+titulo+"&autor="+autor);
    const respuesta = await axios(configuracion);
    if (respuesta.status === 200) {
      console.log(respuesta.data);
    }
    return respuesta.data;
  } catch (error) {
    console.log(error);
  }
};

