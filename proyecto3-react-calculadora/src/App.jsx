import { useState } from 'react';
import freeCodeCampLogo from './assets/images/FreeCodeCamp_logo.svg';
import './App.css';
import { Boton } from './components/boton';
import { Screen } from './components/screen';
import { BotonClear } from './components/botonClear';
import { evaluate} from 'mathjs';

function App() {
  const [input, setInput] = useState('');

  const agregarInput = (newValue) => setInput(input + newValue);
  const calcularResultado = () => {
    //evaluar division por cero
    if (typeof(input) !== 'number'){
      input === ''
        ? ''
        :setInput(evaluate(input));
    }
  };
//retos
//crear un componente para el logo
//detectar casos no identificados y corregirlos
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
        <Screen 
          input={input}
          onClick={agregarInput}
        />
        <div className='fila'>
          <Boton
            manejarClick={agregarInput}
          >
            7
          </Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className="fila">
        <BotonClear cleanScreen={() => setInput('')}>
          CLEAR
        </BotonClear>
        5:26:44
        </div>
      </div>
    </div>
  )
}

export default App
