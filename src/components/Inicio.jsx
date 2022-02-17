import React from 'react';
import { Nav } from './Nav';
import '../styles/navigator.css';
import logo from '../images/generatedtext9.png';
import logo2 from '../images/imagen-inicio.jpg'

export const Inicio = () => {
  return (
    <><Nav />
    <section className='container-allImages-text'>
      <section className='container-logo1-text'>
        <img src={logo} alt="Moover" />
        <div className='text-inicio'>
        <p>Brindamos soluciones logística de traslado y distribución inmediata de mercadería, documentos y paquetes menores a tiempo completo o tiempoparcial.</p>
        </div>
      </section>      
      <section className='container-logo2'>
         <img src={logo2} alt="Logo-portada" />
      </section>      
    </section></>
     
  );
};
