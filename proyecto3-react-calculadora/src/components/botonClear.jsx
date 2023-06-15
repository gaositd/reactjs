import React from 'react'
import '../css/botonClear.css';

export const BotonClear = (props) => {
  return (
    <div
      className='botonClear'
    >
      {props.children}
    </div>
  )
}
