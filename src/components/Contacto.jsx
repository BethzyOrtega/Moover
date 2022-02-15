import React from 'react';
import { Nav } from './Nav';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import '../styles/contacto.css';

export const Contacto = () => {
  return (  
       <><Nav />
  
       <section className='container-all-contacto'>
         <div className='container-conocernos'>
           <h2>Vamos a conocernos</h2>
           <p>Si desea mayor información acerca de nuestros servicios, contáctese con nosotros a cualquiera de nuestros canales de comunicación que a la brevedad nos pondremos en contacto con Ud.</p>
         </div>
         <form action="" className='container-formulario'>
           <div className='three-inputs'>
             <input type="text" placeholder='Nombre y Apellidos (*)' />
             <input type="number" placeholder='Telefono (*)' />
             <input type="text" placeholder='Email (*)' />
           </div>
           <div className='container-asunto'>
           <input type="text" placeholder='Asunto (*)' />
           </div>     
           
           <textarea name="" id="" cols="30" rows="10" placeholder='Escriba su mensaje'></textarea>
           <button>Enviar Mensaje</button>
         </form>         
      </section>
      <footer className='container-redes-sociales'>
           <div>
           <FontAwesomeIcon className='icon' icon={faLocationDot} />
           <h2>Direccion</h2>
           <label htmlFor="">Av.Huarochirí 560 Piso 3 , San Isidro</label>
           </div>
           <div>
           <FontAwesomeIcon className='icon' icon={faPhone} />
           <h2>Telefono</h2>
           <label htmlFor="">+51 998767898</label>
           </div>
           <div>
           <FontAwesomeIcon className='icon' icon={faEnvelope} />
           <h2>Email</h2>
           <label htmlFor="">currier@enterprise.com</label>
           </div>
      </footer>
      </>
            
     
  );
};
