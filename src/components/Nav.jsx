import React from 'react';
import { Link } from "react-router-dom";

export const Nav = () => {
    return (
        <>
            <nav className='navigation'>
                <div className='container-navigator'>
                    <Link className='link-navigator' to="/">Inicio</Link>
                    <Link className='link-navigator' to="/moover">Moover</Link>
                    <Link className='link-navigator' to="/estado-paquete">Estado de Paquete</Link>                    
                    <Link className='link-navigator' to="/contacto">Contacto</Link>
                </div>
            </nav>
        </>
    )
};
