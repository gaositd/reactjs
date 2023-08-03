import { useState } from 'react';
import { useSelector } from 'react-redux';
import './starwarsPagination.css';

export const StarwarsPagination = () => {
  const { next, previous }  = useSelector((state) => state.starWarsData);//estos datos salen del estore, concretamente del reducer
  
  return (
    <div className='pagingButtonsDiv'>
      {/* //este boton y el siguiente checan hacia donde va, es decir, si adelante o atras es null el boton esta apagado, si hay datos va hacia adelante o atas*/}
      <div className='pagingButton'>
        {/* va hacia atras */}
        <span 
          className={ previous ? 'link' :'linkNull' }
          title={previous ?  `${previous}` : null }
        >
          Starwars Pagination previous
        </span>
      </div>
      {/* solo es usado para dividir en tres el area de botones */}
      <div></div>
      <div className='pagingButton'>
        {/* va hacia adelante */}
        <span
          className= { next ? 'link' :'linkNull' } 
          title={next ? next : null }
        >
           Starwars Pagination Next 
         </span>
      </div>
    </div>
  )
}