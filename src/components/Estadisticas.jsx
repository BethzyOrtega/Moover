import React, { useState } from 'react';
import { Nav } from './Nav';
import db from '../services/faribase-config';
import { collection, getDocs } from "firebase/firestore";
import {Bar} from 'react-chartjs-2';
import '../styles/estadisticas.css'

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler,
  } from 'chart.js'  
  
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    BarElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    Filler
  )

export const Estadisticas = () => {  

    const [show, setShow] = useState(false);
    const [showKeys, setShowKeys] = useState ([]);
    const [showValues, setShowValues] = useState ([]);
    
    const getStatistics = async() => {

        let arrayData = [];
        const querySnapshot = await getDocs(collection(db, "envios"));
        querySnapshot.forEach((doc) => {
           const dato = doc.data().distrito;
           arrayData.push(dato);
        });

        const resultado = arrayData.reduce((prev, cur) => ((prev[cur] = prev[cur] + 1 || 1), prev), {});
        setShowKeys(Object.keys(resultado));
        setShowValues(Object.values(resultado));
        setShow(true);
    
    }

    const data = {
        labels: showKeys,
        datasets: [
          {
            data: showValues,
            label: 'Distritos',
            backgroundColor: [
                '#FF6384',
                '#36A2EB',
                '#FFCE56'
            ],
            hoverBackgroundColor: [
                '#FF635d',
                '#36A2EB',
                '#FFCE56'
            ],
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,        
            
          }
        ]
      };

      const opciones ={
          maintainAspectRatio: false,
          responsive: true
      }

  return (
      <><Nav />
      <section className='container-button'>
        <button onClick={getStatistics}>Ver Estadísticas</button>
      </section>
      
      <section className='container-estadisticas' style={{ display: show ? "flex" : "none" }}>
          <h2>CANTIDAD DE ENVIOS POR DISTRITO</h2>
        <div>
          <Bar data={data} options={opciones}/>  
        </div>
      </section>      
      </>

  )
}
