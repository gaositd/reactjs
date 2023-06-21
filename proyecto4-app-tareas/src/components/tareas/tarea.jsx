import React from 'react';
import { VscError } from 'react-icons/vsc';

export const Tarea = (props) => {
  const { texto, completada } = props;

  return (
    <div className={
        completada 
          ? 'tareaContenedor completada' 
          : 'tareaContenedor'
        }
      >
      <div className='tareaTexto'>
        {texto}
      </div>
      <div className='tareaContenedorIconos'>
        <VscError 
          className='tareaIcono'
        />
      </div>
    </div>
  )
}
