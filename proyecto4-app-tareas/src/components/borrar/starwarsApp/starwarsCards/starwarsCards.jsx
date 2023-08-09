import React from 'react';
import {useSelector} from 'react-redux';
import { StarwarsCard } from '../starwarsCard/starwarsCard';
import './starwarsCards.css';
import starWarLogo from '../images/Star_Wars_Logo.svg';

export const StarwarsCards = () => {
  const { results } = useSelector(state => state.starWarsData);

  return (
    <div className='starwarsCards'>
      {
        results.map( character => {
          return <div key={character.name}>
              <StarwarsCard 
                character={character}
                starWarsJson={starWarsJson}
              />
            </div>
        })
      }
    </div>
  )
}
