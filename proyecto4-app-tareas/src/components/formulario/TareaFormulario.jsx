import React, {useState} from 'react';
import '../../styles/TareaFormulario.css';

export function TareaFormulario (props) {
  const [input, setInput] = useState('');

  const manejarCambio = e =>{
    setInput(e.target.value);
    console.log(input);
  };

  const manejarEnvio = e => {
    const tareaNueva = {
      id:'132',
      texto: input,
    }
  };

  return (
    <form
      className='tareaFormulario'
    >
      <input 
        type="text" 
        name="texto" 
        className="tareaInput" 
        placeholder='Tarea a realizar'
        onChange={manejarCambio}
      />
      <button
        className='tareaBoton'
        manejarEnvio
      >
        Agregar tarea
      </button>
    </form>
  )
}
