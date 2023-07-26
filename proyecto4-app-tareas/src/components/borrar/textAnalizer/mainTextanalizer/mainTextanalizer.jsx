import { useState } from'react';
import HeaderTextAnalizer from'../headerTextAnalizer/headerTextAnalizer';

import'./mainTextAnalizer.css';

export const MainTextanalizer = () => {
  const [data, setData] = useState({
    character:'',
    counterCharacter: 0,
    counterRows:0,
    counterWords:0,
    counterParagraph:0,
    counterSpaces:0,
    counterPronouns: 0,
  });

  const arrPronouns = ['yo','me','mí','conmigo','tú','te','ti','contigo','usted','vos','él','lo','le','se','sí','consigo','ella','la','ello','lo','nosotros','nos','nosotras','vosotros','vosotras','os','ustedes','ellos','ellas','los','las','les','se','consigo'];

  let spaces = 0;
  let words = [];
  let pronouns = 0;
  let paragraph = 0;

  const findPronouns = (words) =>{
    let counter = 0;

    for(let i = 0; i < words.length - 1; i++){
      arrPronouns.includes(words[i].toLowerCase())
        ? counter ++
        : null
    };

    return counter;
  };

  const numRows = (value) =>{
    const characterPerRow = 46;
    return Math.trunc(value.length / characterPerRow);
  };

  const findParagraph = (value) =>{
    let counter = 0;
    for(let i = 0; i < value.length - 1; i++){
      value[i] === ("\n")
        ? counter ++
        : null
    };
    return counter;
  };
  
  const handleChange = (e) => {
    const { value, key } = e.target;
    
    spaces = value.split(' ').length - 1;//cuenta los espacios
    words = value.split(' ');            //cuenta palabras antes de espacios
    pronouns = findPronouns(words);     //cuenta los renglones
    paragraph = findParagraph(value);

    setData({
      character: value,
      counterCharacter: value.length,
      counterRows: numRows(value),
      counterWords:words.length - 1,
      counterParagraph:paragraph -1,
      counterSpaces:spaces,
      counterPronouns:pronouns,
    });
  };
  
  console.log(data.character);
  return (
    <div>
      <HeaderTextAnalizer data={data} />
      <textarea
        className='textarea'
        cols='45'
        rows='10'
        value={data.character}
        onChange={handleChange}
      ></textarea>
    </div>
  );
};
