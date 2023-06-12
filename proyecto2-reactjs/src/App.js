import { useState } from 'react';
import './App.css';
import freeCodeCampLogo from './images/FreeCodeCamp_logo.svg';
import { Boton } from './components/Boton';
import { Contador } from './components/Contador';
import './css/boton.css';

function App() {

  const [numeroClicks, setNumeroClicks] = useState(0);

  const manejarClick = () =>{
    setNumeroClicks(numeroClicks + 1);
  };

  const restarClicks = () =>{
    setNumeroClicks(numeroClicks - 1);
  };

  const reiniciarContador = () =>{
    setNumeroClicks(0);
  };

  return (
    <div className="App">
      <div className='freecodeCampLogoContenedor'>
          <img
            src={freeCodeCampLogo}
            className='freecodeCampLogo'
            alt='Free Code Camp Logo'
          />
      </div>
      <div className='contenedorPrincipal'>
        <Contador 
          numeroClicks={numeroClicks}
        />
        <Boton 
          texto='Click +'
          esBotonClick={true}
          manejarClick={manejarClick}
        />
        <Boton 
          texto='Reiniciar'
          esBotonClick={false}
          manejarClick={reiniciarContador}
        />
        <Boton 
          texto='Clicks -'
          esBotonClick={true}
          manejarClick={restarClicks}
        />
      </div>
    </div>
  );
}

export default App;
