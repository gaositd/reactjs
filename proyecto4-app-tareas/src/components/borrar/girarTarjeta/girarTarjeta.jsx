import { useState, useEffect } from 'react';
import { Tarjeta } from './tarjeta';
import "./girarTarjeta.css";

export const GirarTarjeta = () => {
  const [getApi, setGetApi] = useState([]);

  const getData = () =>{
    fetch('https://random-data-api.com/api/users/random_user?size=10')
      .then(res => res.json())
      .then(data => setGetApi(data))
      .catch(err => setGetApi(err))
  };
  useEffect(
    getData,[]
  );

   const botonPresionado = () =>{
    setGetApi([]);
    getData()
   };

  return (
    <div>
      <div className='centrarBoton'>
        <button
          className='botonAleatorio'
          onClick={botonPresionado}
        >
          Precionar para obtener datos aleatorios
        </button>
      </div>
      <Tarjeta
        getApi={getApi}
      />
    </div>
  )
}
