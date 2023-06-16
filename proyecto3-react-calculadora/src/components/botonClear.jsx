import React from 'react'
import '../css/botonClear.css';

export const BotonClear = (props) => {
  
  return (
    <div
      className='botonClear'
      onClick={props.cleanScreen}
    >
      {props.children}
    </div>
  )
}
