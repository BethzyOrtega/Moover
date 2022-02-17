import React, { useState } from 'react';
import { Nav } from './Nav';
import '../styles/seguimiento.css';
import db from '../services/faribase-config';
import { doc, getDoc } from "firebase/firestore";

export const EstadoPaquete = () => {

  const [show, setShow] = useState(false);

  const [showData, setShowData] = useState({});

  const [codigo, setCodigo] = useState({
    codigo :'',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setCodigo({
        ...codigo,
        [e.target.name] : e.target.value,
    })
};

const btnSeguimiento = async (e) => {
  e.preventDefault();

  const docRef = doc(db, "envios", codigo.codigo);
  const docSnap = await getDoc(docRef);
  
  if (docSnap.exists()) {
    setShow(true);
    setShowData(docSnap.data());

  } else {

    console.log("No such document!");
  }
  
}

  return (
    <><Nav />
    <section className='container-seguimiento'>
      <h2>Ingrese Numero de seguimiento</h2>
      <div>
      <input onChange={handleChange} name='codigo' type="text" placeholder='Ingrese numero de seguimiento'/>
      <button onClick={btnSeguimiento} className=''>Ver</button>
      </div>      
    </section>

    <section className='container-table' style={{ display: show ? "block" : "none" }}>
      <table>
        <thead>
          <tr>
          <th scope="col">Nombre Destinatario</th>
          <th scope="col">Apelllido Destinatario</th>
          <th scope="col">Direccion</th>
          <th scope="col">Estado</th>
          </tr>
        </thead>
        <tbody>
          {

            <tr>
            <td>{showData.nameDestino}</td>
            <td>{showData.apellidoDestino}</td>
            <td>{showData.direccion}</td>
            <td>{showData.estado}</td>            
            </tr>

          }

        </tbody>
      </table>


    </section>
    </>
  );
};
