import React, {Fragment, useState} from 'react';
import { TareaFormulario } from '../formulario/TareaFormulario';
import { Tarea } from '../tareas/tarea';
import '../../styles/ListaDeTareas.css';

export const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea =>{
    
    console.log(tarea);
  };

  return (
    <Fragment>
      <TareaFormulario 

      />
      <div className="tareasListaContenedor">
        {
          tareas.map(tarea => {
            <Tarea 
              texto={tarea.texto}
              completada={tarea.completada}
            />
          })
        }
      </div>
    </Fragment>
  )
}