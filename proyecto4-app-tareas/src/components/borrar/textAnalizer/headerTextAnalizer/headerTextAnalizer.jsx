import { useState, useEffect } from 'react'
import './headerTextAnalizer.css'

const HeaderTextAnalizer = (props) => {
  const [counter, setCounter] = useState(0);
  const { character, counterCharacter } = props;


    // useEffect(() => counterCharacter, []);
    // console.log("counterCharacter" + counterCharacter);
  return (
    // <div className='containerHeader'>
    //   <div>Total Palabras: {character}</div>
    //   <div>Total Caracteres: {counterCharacter}</div>
    //   <div>Total Renglones:</div>
    //   <div>Total Párrafos:</div>
    //   <div>Total Pronombres:</div>
    //   <div>Total Espacios:</div>
    // </div>
    <>
      {
        props.character
      }
    </>
  )
}

export default HeaderTextAnalizer