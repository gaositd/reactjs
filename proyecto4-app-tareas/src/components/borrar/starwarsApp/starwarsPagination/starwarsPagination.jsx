import { useState } from 'react';
import { useSelector } from 'react-redux';
import './starwarsPagination.css';

export const StarwarsPagination = () => {
  const { next, previous } = useSelector((state) => state.getStarwarsData);

  // const previous = useSelector((state) => state.previous);
  // const [pagination, setPagination] = useState(false);
  // const {prevPage, nextpage} = props;
  console.log(next, previous);
  return (
    <div className='pagingButtonsDiv'>
      <div className='pagingButton'>
        {/* <span className=''link'Null'>Starwars Pagination previous</span> */}
        <span 
          className=
          {
            previous
              ? 'link'
              :'linkNull'
          }
        >
          Starwars Pagination previous
        </span>
      </div>
      <div></div>
      <div className='pagingButton'>
        {/* <span className='link'>Starwars Pagination Next</span> */}
        <span className=
          {
            next
              ? 'link'
              :'linkNull'
          }
        >
          Starwars Pagination Next
        </span>
      </div>
    </div>
  )
}