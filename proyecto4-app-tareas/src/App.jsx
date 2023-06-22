import './App.css';
import './styles/tarea.css';

import { ListaDeTareas } from './components/tareas/ListaTareas';

import {Logo} from './components/logo/Logo';

function App() {

  return (
    <div className='aplicacionTareas'>
      <Logo />
      <div className="tareasListaPrincipal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
        6:40:00
      </div>
    </div>
  )
}

export default App
