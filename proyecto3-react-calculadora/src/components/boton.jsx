import React from "react";
import '../css/boton.css';

export const Boton = (props) =>{
  const esOperador = (valor) =>{
    return isNaN(valor) && (valor !== '.') &&( valor !== '=');
  };

  return(
    <div
      className={`botonContenedor
      ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClick(props.children)}
    >
      {props.children}
    </div>
  );
};