import React from 'react'
import './headerTextAnalizer.css'

const HeaderTextAnalizer = () => {
  return (
    <div className='containerHeader'>
      <div>Palabras:</div>
      <div>Caracteres:</div>
      <div>Renglones:</div>
      <div>Párrafos:</div>
      <div>Pronombres:</div>
      <div>Espacios:</div>
    </div>
  )
}

export default HeaderTextAnalizer