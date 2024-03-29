import {useState} from 'react';
import { v4 as uuidv4 } from 'uuid';
import '../../styles/TareaFormulario.css';

export function TareaFormulario (props) {
  
  const [input, setInput] = useState('');

  const manejarCambio = e =>{
    setInput(e.target.value);
  };

  const manejarEnvio = e => {
    const uuid = uuidv4();

    e.preventDefault();
    const tareaNueva = {
      id:uuid,
      texto: input,
      completada:false,
    }
    props.onSubmit(tareaNueva);
  };

  return (
    <form
      className='tareaFormulario'
      onSubmit={manejarEnvio}
    >
      <input 
        type="text" 
        name="texto" 
        className="tareaInput" 
        placeholder='Tarea a realizar'
        onChange={manejarCambio}
      />
      <button
        type='submit'
        className='tareaBoton'
      >
        Agregar tarea
      </button>
    </form>
  )
}
