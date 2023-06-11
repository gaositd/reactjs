import './App.css';
import { Testimonio } from './components/Testimonio';
import data from './json/data.json'

function App() {

  return (
    <div className='app'>
      <div className="contenedorPrincipal">
        <h1>
          Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
        </h1>
        <Testimonio 
          testimonio={data}
        />
      </div>
    </div>
  )
}

export default App