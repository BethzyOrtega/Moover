import React, { useState } from 'react';
import { Nav } from './Nav';
import '../styles/contacto.css';
import { Footer } from './Footer';
import db from '../services/faribase-config';
import { collection, addDoc } from "firebase/firestore";
import swal from 'sweetalert';

export const Contacto = () => {

  /**** Obteniendo los datos *******/

    const [datosContacto, setDatosContacto] = useState({
    name:'',
    telefono:'',
    email:'',
    asunto: '',
    mensaje:'',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setDatosContacto({
        ...datosContacto,
        [e.target.name] : e.target.value,
    })
    console.log(datosContacto);
};

/******Almacenado los datos *****************/

const btnEnviarContacto = async (e) => {
  e.preventDefault();
   try {
    const docRef = await addDoc(collection(db, "contactos"), {
      nombre: datosContacto.name,
      telefono: datosContacto.telefono,
      email: datosContacto.email,
      asunto: datosContacto.asunto,
      mensaje: datosContacto.mensaje
    });
    console.log("Document written with ID: ", docRef.id);
    swal("Su mensaje fue enviado con extito!", "Nos comunicaremos a la brevedad!", "success");
    document.getElementById('formulario').reset();
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}

  return (  
       <><Nav />
  
       <section className='container-all-contacto'>
         <div className='container-conocernos'>
           <h2>Vamos a conocernos</h2>
           <p>Si desea mayor información acerca de nuestros servicios, contáctese con nosotros a cualquiera de nuestros canales de comunicación que a la brevedad nos pondremos en contacto con Ud.</p>
         </div>
         <form action="" className='container-formulario' id='formulario'>
           <div className='three-inputs'>
             <input onChange={handleChange} name= 'name' type="text" placeholder='Nombre y Apellidos (*)' />
             <input onChange={handleChange} name='telefono' type="text" placeholder='Telefono (*)' />
             <input onChange={handleChange} name='email'type="text" placeholder='Email (*)' />
           </div>
           <div className='container-asunto'>
           <input onChange={handleChange} name = 'asunto' type="text" placeholder='Asunto (*)' />
           </div>             
           <textarea onChange={handleChange} name="mensaje" id="" cols="30" rows="10" placeholder='Escriba su mensaje'></textarea>
           <button onClick={btnEnviarContacto} className='btnEnviarContacto'>Enviar Mensaje</button>
         </form>                 
      </section>
      <Footer/>      
      </>
            
     
  );
};
