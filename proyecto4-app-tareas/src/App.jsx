import { useState } from 'react'
import './App.css';
import './styles/tarea.css';

import { Tarea } from './components/tareas/tarea';

import {Logo} from './components/logo/Logo';

function App() {

  return (
    <div className='aplicacionTareas'>
      <Logo />
      <div className="tareasListaPrincipal">
        <h1>Mis tareas</h1>
        <Tarea 
          texto="6:07:33"
        />
      </div>
    </div>
  )
}

export default App
