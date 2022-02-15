import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Inicio} from '../components/Inicio';
import {Moover} from '../components/Moover';
import {EstadoPaquete} from '../components/EstadoPaquete';
import {Contacto} from '../components/Contacto';


export const AppRouter = () => {
  return (
    <>
    <Router>
        <Routes>
            <Route exact path="/" element={<Inicio />  } />
            <Route path="/moover" element={ <Moover /> } />
            <Route path="/estado-paquete" element={ <EstadoPaquete /> } />
            <Route path="/contacto" element={ <Contacto /> } />
        </Routes>
    </Router>
</>
  );
};

