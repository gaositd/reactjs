import React from 'react';
import './starwarsPagination.css';

export const StarwarsPagination = () => {
  return (
    <div className='pagingButtonsDiv'>
      <div className='pagingButton'>
        <span className='linkNull'>Starwars Pagination previous</span>
      </div>
      <div></div>
      <div className='pagingButton'>
        <span className='link'>Starwars Pagination Next</span>
      </div>
    </div>
  )
}