import React, { useState } from 'react';
import './formulario.css';

export const Formulario = () => {
  const [values, setValues] = useState({
    nombre:"",
    apellidos:"",
  });
  let fullName = '';

  const handleClick = (e) =>{
    e.preventDefault();
    fullName = `${values.nombre} ${values.apellidos}`;
    alert(`Hola ${fullName}`);
  };

  const handleChange = (e) =>{
    const newValues = {
      ...values,
      [e.target.name]:e.target.value,
    }
    setValues(newValues);
  };

  return (
    <div className='centrarFormulario'>
      <form>

        <div className="columna">
            <input 
              type="text" 
              name="nombre" 
              id="nombre" 
              className="input inputTexto" 
              placeholder='Nombre' 
              onChange={handleChange}
              value={values.nombre}
            />
        </div>

        <div className="columna">
            <input 
              type="text" 
              name="apellidos" 
              id="apellidos" 
              className="input inputTexto" 
              placeholder='Apellidos'
              onChange={handleChange}
              value={values.apellidos}
            />
        </div>

        <div className="columna">
          <input 
            type='submit' 
            name='enviar' 
            value='Saludar' 
            className='input inputBoton'
            onClick={handleClick}
          />
        </div>

      </form>
    </div>
  )
}
