import {useState} from 'react';
import HeaderTextAnalizer from '../headerTextAnalizer/headerTextAnalizer';

import './mainTextAnalizer.css';

export const MainTextanalizer = () => {
  const [data, setData] = useState({
    character:'',
    counterCharacter: 0,
  });

  const handleChange = e =>{
    const { value } = e.target;
    data.character = value;
    data.counterCharacter++;
    setData(data);
    return data;
  };

  return (
    <div>
      <HeaderTextAnalizer 
        data={data}
      />
      <textarea 
        className='textarea'
        cols="74"
        rows="15"
        onChange={handleChange}
      ></textarea>
    </div>
  )
}
