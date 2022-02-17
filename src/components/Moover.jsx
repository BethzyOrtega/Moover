import React, { useState } from 'react';
import { Nav } from './Nav';
import '../styles/moover.css';
import db from '../services/faribase-config';
import { collection, addDoc } from "firebase/firestore";
import swal from 'sweetalert';

export const Moover = () => {

  /**** Obteniendo los datos *******/
  const [datos, setDatos] = useState({
    nameOrigen:'',
    apellidoOrigen:'',
    telefonoOrigen:'',
    dniOrigen: '',
    peso:'',
    descripcion:'',
    nameDestino:'',
    apellidoDestino:'',
    telefonoDestino:'',
    dniDestino: '',
    direccion:'',
    distrito:'',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setDatos({
        ...datos,
        [e.target.name] : e.target.value,
    })
    console.log(datos);
};

/******Almacenado los datos *****************/

const btnEnviarPaquete = async (e) => {
  e.preventDefault();
   try {
    const docRef = await addDoc(collection(db, "envios"), {
      nameOrigen:datos.nameOrigen,
      apellidoOrigen:datos.apellidoOrigen,
      telefonoOrigen:datos.telefonoOrigen,
      dniOrigen: datos.dniOrigen,
      peso:datos.peso,
      descripcion:datos.descripcion,
      nameDestino:datos.nameDestino,
      apellidoDestino:datos.apellidoDestino,
      telefonoDestino:datos.telefonoDestino,
      dniDestino: datos.dniDestino,
      direccion:datos.direccion,
      distrito:datos.distrito,
      estado: 'En proceso',
    });
    console.log("Document written with ID: ", docRef.id);
    swal("Su envio se registro con extito!", `Hacer seguimiento con el codigo ${docRef.id}`, "success");
    document.getElementById('formularioOrigen').reset();
    document.getElementById('formularioDestino').reset();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

  return (
      <><Nav />
      <section className='container-datos'>
        <form action="" className='container-datos-origen' id='formularioOrigen'>
          <p>DATOS ORIGEN</p>
          <section>
            <input onChange={handleChange} name='nameOrigen' type="text" placeholder='Nombres' />
            <input onChange={handleChange} name='apellidoOrigen' type="text" placeholder='Apellidos' />
            <input onChange={handleChange} name = 'telefonoOrigen' type= "number" placeholder='Telefono' />
            <input onChange={handleChange} name='dniOrigen' type= "number" placeholder='DNI' />
            <input onChange={handleChange} name='peso' type= "number" placeholder='Peso' />
            <textarea onChange={handleChange} name='descripcion' id="" cols="30" rows="10" placeholder='Descripcion del paquete'></textarea>
          </section>
        </form>

        <form action="" className='container-datos-destino' id='formularioDestino'>
        <p>DATOS DESTINO</p>
          <section>
            <input onChange={handleChange} name= 'nameDestino' type="text" placeholder='Nombres' />
            <input onChange={handleChange} name='apellidoDestino' type="text" placeholder='Apellidos' />
            <input onChange={handleChange} name='telefonoDestino' type= "number" placeholder='Telefono' />
            <input onChange={handleChange} name='dniDestino' type= "number" placeholder='DNI' />
            <input onChange={handleChange} name='direccion' type="text" placeholder='Direccion' />
            <input onChange={handleChange} name = 'distrito' type="text" placeholder='Distrito' />
          </section>
        </form>
        <button onClick={btnEnviarPaquete} className='btnEnviarPaquete'>Enviar</button>
      </section></>

  );
};
