import React from "react";

export function Boton(props){
  const { texto, esBotonClick, manejarClick } = props;
  return(
    <button
      className={ esBotonClick ? 'botonClick' : 'botonReiniciar' }
      onClick={manejarClick}
    >
      {texto}
    </button>
  );
}