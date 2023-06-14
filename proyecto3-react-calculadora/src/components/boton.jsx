import React from "react";

export const Boton = (props) =>{

  const esOperador = (valor) =>{
    return isNaN(valor) && (valor !== '.') &&( valor !== '=');
  };



  return(
    <div className={`botonContenedor ${esOperador(props.children) ? 'operador' : null}`}>
      {props.children}
    </div>
  );
};