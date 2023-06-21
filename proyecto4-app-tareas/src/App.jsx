import { useState } from 'react'
import './App.css'

import {Logo} from './components/logo/Logo';

function App() {

  return (
    <div className='aplicacionTareas'>
      <Logo />
      <div className="tareasListaPrincipal">
        <h1>Mis tareas</h1>
      </div>
    </div>
  )
}

export default App
