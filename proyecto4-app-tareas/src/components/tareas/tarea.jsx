import React from 'react';
import { VscError } from 'react-icons/vsc';

export const Tarea = (props) => {
  const { 
      id,
      texto, 
      completada,
      completarTarea,
      eliminarTarea,
    } = props;

  return (
    <div className={
        completada 
          ? 'tareaContenedor completada' 
          : 'tareaContenedor'
        }
      >
      <div 
        className='tareaTexto'
        onClick={() =>completarTarea(id)}
      >
        {texto}
      </div>
      <div 
        className='tareaContenedorIconos'
        onClick={() => eliminarTarea(id)}
      >
        <VscError 
          className='tareaIcono'
        />
      </div>
    </div>
  )
}
