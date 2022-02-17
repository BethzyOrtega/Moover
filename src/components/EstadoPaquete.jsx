import React, { useState } from 'react';
import { Nav } from './Nav';
import '../styles/seguimiento.css';
import db from '../services/faribase-config';
import { doc, getDoc } from "firebase/firestore";

export const EstadoPaquete = () => {

  const [codigo, setCodigo] = useState({
    codigo :'',
  });

  const handleChange = (e) => {
    e.preventDefault();
    setCodigo({
        ...codigo,
        [e.target.name] : e.target.value,
    })
    console.log(codigo);
};

const btnSeguimiento = async (e) => {
  e.preventDefault();

  const docRef = doc(db, "envios", codigo.codigo);
  const docSnap = await getDoc(docRef);
  console.log(docSnap);
  
  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
  } else {
    // doc.data() will be undefined in this case
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
      
    </section></>
  );
};
