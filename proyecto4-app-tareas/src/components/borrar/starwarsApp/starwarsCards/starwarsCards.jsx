import React from 'react';
import { StarwarsCard } from '../starwarsCard/starwarsCard';
import './starwarsCards.css';

export const StarwarsCards = () => {
  return (
    <div className='starwarsCards'>
      <div><StarwarsCard /></div>
      <div><StarwarsCard /></div>
      <div><StarwarsCard /></div>
      <div><StarwarsCard /></div>
      <div><StarwarsCard /></div>
      <div><StarwarsCard /></div>
      <div><StarwarsCard /></div>
      <div><StarwarsCard /></div>
      <div><StarwarsCard /></div>
      <div><StarwarsCard /></div>
    </div>
  )
}
