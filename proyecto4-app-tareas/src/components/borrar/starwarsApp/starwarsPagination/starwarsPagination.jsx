import { useState } from 'react';
import './starwarsPagination.css';

export const StarwarsPagination = (props) => {
  const [pagination, setPagination] = useState(false);
  const {prevPage, nextpage} = props;

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