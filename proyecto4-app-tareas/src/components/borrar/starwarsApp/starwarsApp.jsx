import React from 'react';
import { StarwarsTitle } from './starwarsTitle/starwarsTitle';
import { StarwarsCards } from './starwarsCards/starwarsCards';
import { StarwarsPagination } from './starwarsPagination/starwarsPagination';


export const StarwarsApp = () => {
  return (
    <div>
      <StarwarsTitle />
      <StarwarsCards />
      <StarwarsPagination />
    </div>
  )
}
