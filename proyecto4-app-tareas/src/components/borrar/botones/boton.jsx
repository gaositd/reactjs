import React from 'react';
import './boton.css';

export const Boton = (props) => {
  const { children } = props;

  // const botonPrecionado = () =>{
  //   alert(`Fue precionado el botón ${children}`);
  // };

  return (
    <button
      className='horizontal'
      id={children}
      onClick={ () => {
          alert(`Fue precionado el botón ${children}`)
        }
      }
    >
      {children}
    </button>
  )
}
