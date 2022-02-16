import React from 'react';
import { Nav } from './Nav';
import '../styles/moover.css';

export const Moover = () => {
  return (
      <><Nav />
      <section className='container-datos'>
        <form action="" className='container-datos-origen'>
          <p>DATOS ORIGEN</p>
          <section>
            <input type="text" placeholder='Nombres' />
            <input type="text" placeholder='Apellidos' />
            <input type= "number" placeholder='Telefono' />
            <input type= "number" placeholder='DNI' />
            <input type= "number" placeholder='Peso' />
            <textarea name="" id="" cols="30" rows="10" placeholder='Descripcion del paquete'></textarea>
          </section>
        </form>

        <form action="" className='container-datos-destino'>
        <p>DATOS DESTINO</p>
          <section>
            <input type="text" placeholder='Nombres' />
            <input type="text" placeholder='Apellidos' />
            <input type= "number" placeholder='Telefono' />
            <input type= "number" placeholder='DNI' />
            <input type="text" placeholder='Direccion' />
            <input type="text" placeholder='Distrito' />
          </section>
        </form>
        <button>Enviar</button>
      </section></>

  );
};
