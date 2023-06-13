import React from 'react'
import '../css/contador.css';

export const Contador = ({ numeroClicks }) => {
  return (
    <div
      className='contador'
    >
      {numeroClicks}
    </div>
  )
}
