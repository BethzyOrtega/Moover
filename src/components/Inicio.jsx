import React from 'react';
import { Nav } from './Nav';
import '../styles/navigator.css';

export const Inicio = () => {
  return (
    <section className='container-nav-text'>
       <Nav/>
       <h2>MOOVER</h2>
         <div className='text-inicio'>
         <p>Brindamos soluciones logística de traslado y distribución inmediata de mercadería, documentos y paquetes menores a tiempo completo o tiempoparcial.</p>
         </div>               
    </section>
     
  );
};
