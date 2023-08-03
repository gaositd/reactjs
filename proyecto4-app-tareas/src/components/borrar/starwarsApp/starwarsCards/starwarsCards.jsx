import React from 'react';
import {useSelector} from 'react-redux';
import { StarwarsCard } from '../starwarsCard/starwarsCard';
import './starwarsCards.css';

export const StarwarsCards = () => {
  const { results } = useSelector(state => state.starWarsData);

  return (
    <div className='starwarsCards'>
      {
        results.map( character => {
          return <div key={character.name}>
              <StarwarsCard 
                character={character}
              />
            </div>
        })
      }
    </div>
  )
}
