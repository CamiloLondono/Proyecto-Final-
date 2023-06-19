import axios from "axios";

const baseurl = "http://localhost:8000/api/";

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
        const configuracion = crearConfiguracion("post" , "cine/", informacion)
        const respuesta =await axios(configuracion);
        if(respuesta.status === 201){
            console.log(respuesta);
        }
        return respuesta.status;
    } catch(error) {
        console.log(error)
    }
};

export const traerTodo = async (informacion) => {
  try {
    const configuracion = crearConfiguracionSinInformacion("get", "cine/");
    const respuesta = await axios(configuracion);
    if (respuesta.status === 200) {
      console.log(respuesta.data);
    }
    return respuesta.data;
  } catch (error) {
    console.log(error);
  }
};

export const traerLaSala = async (sala) => {
  try {
    const configuracion = crearConfiguracionSinInformacion("get", "cine/?sala="+sala);
    const respuesta = await axios(configuracion);
    if (respuesta.status === 200) {
      console.log(respuesta.data);
    }
    return respuesta.data;
  } catch (error) {
    console.log(error);
  }
};

export const traerSalaYAsiento = async (sala, asiento) => {
    try {
      const configuracion = crearConfiguracionSinInformacion("get", "cine/?sala="+sala+"&asiento="+asiento);
      const respuesta = await axios(configuracion);
      if (respuesta.status === 200) {
        console.log(respuesta.data);
      }
      return respuesta.data;
    } catch (error) {
      console.log(error);
    }
  };