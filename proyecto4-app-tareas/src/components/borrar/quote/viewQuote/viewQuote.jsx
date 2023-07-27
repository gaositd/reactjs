import { useState, useEffect } from 'react';
import './viewQuote.css';

export const ViewQuote = ({ quote }) => {
  // const [classButton, setClassButton] = useState('botonQuote');
  const [isButtonHovered1, setIsButtonHovered1] = useState( false );
  const [isButtonHovered2, setIsButtonHovered2] = useState( false );
  const [position, setPosition] = useState(0);

  useEffect(() => {
    setPosition(Math.trunc(Math.random() * quote.length));
  }, []);

  const mouseOut = (buttonNumber) => {
    // setClassButton('botonQuote');
    if (buttonNumber === 1) {
      setIsButtonHovered1(false );
    } else if (buttonNumber === 2) {
      setIsButtonHovered2( false );
    }
  };

  const mouseOver = (buttonNumber) => {
    // setClassButton('botonQuote_hover');
    if (buttonNumber === 1) {
      setIsButtonHovered1(true);
    } else if (buttonNumber === 2) {
      setIsButtonHovered2(true);
    }
    setPosition(Math.trunc(Math.random() * quote.length));
  };

  return (
    <div className='container'>
      <div className='textFormatQuote'>
        {quote[position].text}
      </div>
      <div className='textFormatAuthor'>
        {quote[position].author}
      </div>
      <div></div>
      <div className='buttons'>
        <button
          className={isButtonHovered1 ? 'botonQuote_hover' : 'botonQuote'}
          onMouseOut={() =>mouseOut(1)}
          onMouseOver={() =>mouseOver(1)}
        >
          Pasar el ratón por aquí para ver la siguiente cita
        </button>
        <button
          className={isButtonHovered2 ? 'botonQuote_hover' : 'botonQuote'}
          onClick={() => mouseOver(2)}
          onMouseOut={() =>mouseOut(2)}
        >
          Click con el ratón aquí para ver la siguiente cita
        </button>
      </div>
    </div>
  );
};
