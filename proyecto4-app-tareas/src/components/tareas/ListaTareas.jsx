import {Fragment, useState} from 'react';
import { TareaFormulario } from '../formulario/TareaFormulario';
import { Tarea } from './tarea';
import '../../styles/ListaDeTareas.css';

export const ListaDeTareas = () => {
  const [tareas, setTareas] = useState([]);

  const agregarTarea = tarea =>{
    
    if(tarea.texto.trim()){
      tarea.texto = tarea.texto.trim();
      // const tareasActualizadas = [ tarea, ...tareas ];
      // setTareas(tareasActualizadas);
      setTareas([ tarea, ...tareas ]);
    }

  };

  const eliminarTarea = id => {
    const tareasActualizadas = tareas.filter( tarea =>tarea.id !== id);
    setTareas(tareasActualizadas);
  };

  const completarTarea = id => {
    const tareasActualizadas = tareas.map(tarea =>{
      if(tarea.id === id){
        tarea.completarTarea = !tarea.completada;
        tarea.completada = !tarea.completada;
      }
      return tarea;
    });
    setTareas(tareasActualizadas);
  };
  

  return (
    <Fragment>
      <TareaFormulario 
        onSubmit={agregarTarea}
      />
      <div className="tareasListaContenedor">
        {
          tareas.map( (item) => {
            <>
            {
              console.log("item",item)
            }
            <Tarea 
              key={item.id}
              id={item.id}
              texto={item.texto}
              completada={item.completada}
              eliminarTarea={eliminarTarea}
              completarTarea={completarTarea}
            />
            </>
          })
        }
      </div>
    </Fragment>
  )
}