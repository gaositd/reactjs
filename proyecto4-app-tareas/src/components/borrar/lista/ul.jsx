import React from 'react';
import { Li } from './li';

export const Ul = () => {
  const listArray = ['🐶  Perro', '😺  Gato', '🐔  Gallina', '🐮  Vaca', '🐑  Oveja', '🐴  Caballo']
  return (
    <>
      <table
        className='table'
      >
        <thead>
          <tr>
            <td>Animales</td>
          </tr>
        </thead>
        <tbody>
        {
          listArray.map((list, i) => (
            <Li
              index={i}
            >
              {list}
            </Li>
          ))
          }
        </tbody>
      </table>
    </>
  )
}
