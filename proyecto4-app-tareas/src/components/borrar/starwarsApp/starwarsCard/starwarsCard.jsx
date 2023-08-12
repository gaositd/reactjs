import './starwarsCard.css';

export const StarwarsCard = (props) => {
  const { character, starWarsJson, starWarLogo } = props;
  const getImageUrl = (name) =>{
    let imageUrl = "";
    //const arrName = name.split(' ');
    // pasar de mayúsculas a minúsculas las primeras letas del nombre 
    //for(let i = 0; i < arrName.length; i++) {
      //arrName[i] = arrName[i][0].toLowerCase() + arrName[i].subString(1);
    //}

    name = name.replace(/\s/g, '-');
    //nombreImage.replace(/\s/g, '') 

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
    <article className='card'>
      <figure className='starw'>
        <img 
          className='imageCard' 
          src={getImageUrl(props.character.name)}
        />
        <figcaption className='starWarsName'>{props.character.name}</figcaption>
      </figure>
      {/* <div>Name: {props.character.name}</div>
      <div>Birth year: {props.character.birth_year}</div>
      <div>Eye color: {props.character.eye_color}</div>
      <div>Hair color: {props.character.hair_color}</div>
      <div>Skin color: {props.character.skin_color}</div>
      <div>Gender: {props.character.gender}</div>
      <div>Mass: {props.character.mass}</div>
      <div>Homeworld {props.character.homeworld}</div> 
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>

      </div>
      <div>
        
      </div>
      <div>Height: {props.character.height}</div>*/}
    </article>
  )
}
