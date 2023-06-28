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
    <>
    {console.log("props" + props)}
    <div className='tareaContenedor'
      >
      <div 
        className={
          completada
            ? 'tareaTexto completada'
            : 'tareaTexto'
        }
        onClick={() => completarTarea(id)}
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
    </>
  )
}
