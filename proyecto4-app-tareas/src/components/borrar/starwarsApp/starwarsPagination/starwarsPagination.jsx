import { useState } from 'react';
import { useSelector } from 'react-redux';
import './starwarsPagination.css';

export const StarwarsPagination = () => {
  const { next, previous }  = useSelector((state) => state.starWarsData);//estos datos salen del estore, concretamente del reducer
  
  const Next = next ? next.split('=') : "";
  const Previous = previous ? previous.split('=') : "";
  return (
    <div className='pagingButtonsDiv'>
      {/* //este boton y el siguiente checan hacia donde va, es decir, si adelante o atras es null el boton esta apagado, si hay datos va hacia adelante o atas*/}
      <div className='pagingButton'>
        {/* va hacia atras */}
        <span 
          className={ Previous[1] ? 'link' :'linkNull' }
          title={Previous[1] ?  `${Previous[1]}` : null }
        >
          Starwars Pagination previous
        </span>
      </div>
      {/* solo es usado para dividir en tres el area de botones */}
      <div></div>
      <div className='pagingButton'>
        {/* va hacia adelante */}
        <span
          className= { Next[1] ? 'link' :'linkNull' } 
          title={Next[1] ? Next[1] : null }
        >
           Starwars Pagination Next 
         </span>
      </div>
    </div>
  )
}