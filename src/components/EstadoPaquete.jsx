import React from 'react';
import { Nav } from './Nav';
import '../styles/seguimiento.css'

export const EstadoPaquete = () => {
  return (
    <><Nav />
    <section className='container-seguimiento'>
      <h2>Ingrese Numero de seguimiento</h2>
      <div>
      <input type="text" placeholder='Ingrese numero de seguimiento'/>
      <button>Ver</button>
      </div>
      
    </section></>
  );
};
