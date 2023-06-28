import axios from "axios";

const baseurl = "http://localhost:8000/api2/";

export const crearConfiguracion = (metodo, url, informacion) => {
    return {
        method : metodo,
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

export const hacerPeticion = async (informacion) => {
    try {
        const configuracion = crearConfiguracion("post" , "peliculas/", informacion)
        console.log(informacion)
        const respuesta =await axios(configuracion)
        if(respuesta.status === 201){
            console.log(respuesta)
        }
        return respuesta.status;
    } catch(error) {
        console.log(error)
    }
};

export const traerTodo = async (informacion) => {
    try {
      const configuracion = crearConfiguracionSinInformacion("get", "peliculas/");
      const respuesta = await axios(configuracion);
      if (respuesta.status === 200) {
        console.log(respuesta.data);
      }
      return respuesta.data;
    } catch (error) {
      console.log(error);
    }
};

export const traerTitulo = async (titulo) => {
    try {
      const configuracion = crearConfiguracionSinInformacion("get", "peliculas/?titulo="+titulo);
      const respuesta = await axios(configuracion);
      if (respuesta.status === 200) {
        console.log(respuesta.data);
      }
      return respuesta.data;
    } catch (error) {
      console.log(error);
    }
};

export const traerGenero = async (titulo, genero) => {
    try {
      const configuracion = crearConfiguracionSinInformacion("get", "peliculas/?titulo="+titulo+"&genero="+genero);
      const respuesta = await axios(configuracion);
      if (respuesta.status === 200) {
        console.log(respuesta.data);
      }
      return respuesta.data;
    } catch (error) {
      console.log(error);
    }
};