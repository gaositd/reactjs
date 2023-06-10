import './App.css';
import { Testimonio } from './components/Testimonio';

function App() {

  return (
    <div className='app'>
      <div className="contenedorPrincipal">
        <h1>
          Esto es lo que dicen nuestros alumnos sobre freeCodeCamp:
        </h1>
        <Testimonio
          nombre='Shaw Wang'
          pais='Singapur'
          imagen={'shaw'}
          cargo='Ingeniero de software'
          empresa='Amazon'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin ante et massa bibendum condimentum. Aliquam dolor est, faucibus ac erat id, vestibulum interdum mi. Curabitur dignissim nisl non massa venenatis hendrerit. Quisque neque nunc, condimentum id rutrum sed, feugiat nec nunc. Cras in mauris fermentum, tempus nisl id, blandit sapien. Cras eget nunc eget orci malesuada maximus.'
        />
        <Testimonio
          nombre='Emma Bostian'
          pais='Suecia'
          imagen={'emma'}
          cargo='Ingeniero de software'
          empresa='Spotify'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin ante et massa bibendum condimentum. Aliquam dolor est, faucibus ac erat id, vestibulum interdum mi. Curabitur dignissim nisl non massa venenatis hendrerit. Quisque neque nunc, condimentum id rutrum sed, feugiat nec nunc. Cras in mauris fermentum, tempus nisl id, blandit sapien. Cras eget nunc eget orci malesuada maximus.'
        />
        <Testimonio
          nombre='Sara Chima'
          pais='Nigeria'
          imagen={'sara'}
          cargo='Ingeniero de software'
          empresa='ChatDesk'
          testimonio='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sollicitudin ante et massa bibendum condimentum. Aliquam dolor est, faucibus ac erat id, vestibulum interdum mi. Curabitur dignissim nisl non massa venenatis hendrerit. Quisque neque nunc, condimentum id rutrum sed, feugiat nec nunc. Cras in mauris fermentum, tempus nisl id, blandit sapien. Cras eget nunc eget orci malesuada maximus.'
        />
      </div>
    </div>
  )
}

export default App
