import './headerTextAnalizer.css';

const HeaderTextAnalizer = (props) => {
  const { 
    character, 
    counterCharacter,
    counterRows,
    counterWords,
    counterParagraph,
    counterSpaces,
    counterPronouns,
   } = props.data;
  const lastCharacter = character.slice(-1);  
  
  return (
    <div className='containerHeader'>
      <div>Total Palabras: {counterWords}</div>
      <div>Total Caracteres: {counterCharacter}</div>
      <div>Total Renglones: {counterRows}</div>
      <div>Total Párrafos: {counterParagraph}</div>
      <div>Total Pronombres: {counterPronouns}</div>
      <div>Total Espacios: {counterSpaces}</div>
    </div>
  );
};

export default HeaderTextAnalizer;
