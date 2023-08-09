import './starwarsCard.css';

export const StarwarsCard = (props) => {
  const getImageUrl = (name) =>{
    const arrName = name.split(' ');

    // pasar de mayuscuylas a minusculas las primeras letas del nombre 
    for(let i = 0; i < arrName.length; i++) {
      arrName[i] = arrName[i][0].toUpperCase() + arrName[i].subString(1);
    }

    name = name.replace(' ','-');
    return 'a';
  }

  return (
    <article className='card'>
      <figure className='starw'>
        <img 
          className='imageCard' 
          // src={getImageUrl(props.character.name)}
        />
        <figcaption className='starWarsName'>Name: {props.character.name}</figcaption>
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
