import React, { useState } from 'react';
import { Nav } from './Nav';
import '../styles/contacto.css';
import { Footer } from './Footer';
import db from '../services/faribase-config';
import { collection, addDoc } from "firebase/firestore";

export const Contacto = async () => {

  return (  
       <><Nav />
  
       <section className='container-all-contacto'>
         <div className='container-conocernos'>
           <h2>Vamos a conocernos</h2>
           <p>Si desea mayor información acerca de nuestros servicios, contáctese con nosotros a cualquiera de nuestros canales de comunicación que a la brevedad nos pondremos en contacto con Ud.</p>
         </div>
         <form action="" className='container-formulario'>
           <div className='three-inputs'>
             <input name= 'name' type="text" placeholder='Nombre y Apellidos (*)' />
             <input name='telefono' type="number" placeholder='Telefono (*)' />
             <input name='email'type="text" placeholder='Email (*)' />
           </div>
           <div className='container-asunto'>
           <input name = 'asunto' type="text" placeholder='Asunto (*)' />
           </div>             
           <textarea name="mensaje" id="" cols="30" rows="10" placeholder='Escriba su mensaje'></textarea>
           <button>Enviar Mensaje</button>
         </form>                 
      </section>
      <Footer/>      
      </>
            
     
  );
};
