import './App.css';
import './styles/tarea.css';

import { ListaDeTareas } from './components/tareas/ListaTareas';

import { Test } from './components/borrar/test';
import { BotonCliqueado } from './components/borrar/botones/botonCliqueado';
import { Ul } from './components/borrar/lista/ul';
import { Formulario } from './components/borrar/fomulario/formulario';
import { LeerJson } from './components/borrar/leerJson/leerJson';

import {Logo} from './components/logo/Logo';
import { GirarTarjeta } from './components/borrar/girarTarjeta/girarTarjeta';
import { HideShow } from './components/borrar/hideShow/hideShow';
import { TextAnalizer } from './components/borrar/textAnalizer/textAnalizer';
import { Quote } from './components/borrar/quote/quote';

function App() {

  return (
    <div className='aplicacionTareas'>
      <Logo />
      <div className="tareasListaPrincipal">
        <h1>Mis tareas</h1>
        <ListaDeTareas />
        {/* <Test />
        <BotonCliqueado /> 
        <Ul />
        <Formulario />
         <LeerJson /> 
        <GirarTarjeta />
        <HideShow />
         <LeerJson />
        <GirarTarjeta /> 
        <TextAnalizer />*/}
        <Quote />
      </div>
    </div>
  )
}

export default App
