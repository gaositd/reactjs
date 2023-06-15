import { useState } from 'react';
import freeCodeCampLogo from './assets/images/FreeCodeCamp_logo.svg';
import './App.css';
import { Boton } from './components/boton';
import { Screen } from './components/screen';
import { BotonClear } from './components/botonClear';

function App() {

  return (
    <div className='App'>
      <div className='freecodeCampLogoContenedor'>
        <img
          src={freeCodeCampLogo}
          className='freecodeCampLogo'
          alt='Free Code Camp Logo'
        />
      </div>
      <div className='contenedorCalculadora'>
        <Screen />
        <div className='fila'>
          <Boton>7</Boton>
          <Boton>8</Boton>
          <Boton>9</Boton>
          <Boton>-</Boton>
        </div>
        <div className='fila'>
          <Boton>4</Boton>
          <Boton>5</Boton>
          <Boton>6</Boton>
          <Boton>+</Boton>
        </div>
        <div className='fila'>
          <Boton>1</Boton>
          <Boton>2</Boton>
          <Boton>3</Boton>
          <Boton>*</Boton>
        </div>
        <div className='fila'>
          <Boton>0</Boton>
          <Boton>.</Boton>
          <Boton>=</Boton>
          <Boton>/</Boton>
        </div>
        <div className="fila">
        <BotonClear>CLEAR</BotonClear>
        </div>
      </div>
    </div>
  )
}

export default App
