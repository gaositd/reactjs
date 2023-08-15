import { useState } from 'react';
import './starwarsCard.css';
import StarWarsModal from '../starWarModal/starWarsModal';

export const StarwarsCard = (props) => {
  const [modalOpen, setModalOpen] = useState(false);
  const { character, starWarsJson, starWarLogo } = props;
  const getImageUrl = (name) =>{
    let imageUrl = "";

    name = name.replace(/\s/g, '-'); 

    imageUrl = starWarsJson.find(igmPath =>{
      return name === igmPath.id;
    });

    if(imageUrl) {
      return imageUrl.imagePath;
    }else {
      return starWarLogo;
    }
  }

  return (
    <>
      <article className='card'>
        <figure className='starw'>
          <img 
            className='imageCard' 
            src={getImageUrl(props.character.name)}
            onClick={setModalOpen(!modalOpen)}
          />
          <figcaption className='starWarsName'>{props.character.name}</figcaption>
        </figure>
      </article>
      {
        modalOpen
        ? <StarWarsModal />
        :null        
      }
    </>
  )
}
