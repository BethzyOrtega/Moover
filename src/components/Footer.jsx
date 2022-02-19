import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faLocationDot, faPhone, faEnvelope} from '@fortawesome/free-solid-svg-icons';
import '../styles/footer.css';

export const Footer = () => {
  return (
    <footer className='container-redes-sociales'>
    <div>
    <FontAwesomeIcon className='icon' icon={faLocationDot} />
    <h2>Dirección</h2>
    <label htmlFor="">Av.Huarochirí 560 Piso 3 , San Isidro</label>
    </div>
    <div>
    <FontAwesomeIcon className='icon' icon={faPhone} />
    <h2>Teléfono</h2>
    <label htmlFor="">+51 998767898</label>
    </div>
    <div>
    <FontAwesomeIcon className='icon' icon={faEnvelope} />
    <h2>Email</h2>
    <label htmlFor="">currier@enterprise.com</label>
    </div>
</footer>
  )
}
