import './starwarsCard.css';

export const StarwarsCard = (props) => {
  
  return (
    <article className='card'>
      <div>Name: {props.character.name}</div>
      <div>Birth year: {props.character.birth_year}</div>
      <div>Eye color: {props.character.eye_color}</div>
      <div>Hair color: {props.character.hair_color}</div>
      <div>Skin color: {props.character.skin_color}</div>
      <div>Gender: {props.character.gender}</div>
      <div>Height: {props.character.height}</div>
      <div>Homeworld {props.character.homeworld}</div>
      <div>Mass: {props.character.mass}</div>
    </article>
  )
}
