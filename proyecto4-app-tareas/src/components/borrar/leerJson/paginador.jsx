import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SeeAlbum } from './seeAlbum';
import './leerJson.css';

export const Paginador = (props) => {
  const { albumJsonIDArray, closeArr } = props;
  const [block, setBlock] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [albumId, setAlbumId] = useState(0);
  const [arrPhotos, setArrPhotos] = useState([]);
  const maxPages = 10;

  useEffect(() => nextBlock, []);

  const nextBlock = (block) => {
    currentPage === albumJsonIDArray.length
      ? setCurrentPage(0)
      :null;
    console.log(currentPage);
    if (currentPage < albumJsonIDArray.length) {
      const newArrPhotos = [];
      for (let i = currentPage; i < maxPages + currentPage; i++) {
        newArrPhotos.push(albumJsonIDArray[i]);
      }
      setCurrentPage(currentPage + maxPages);
      setArrPhotos(newArrPhotos);
      setBlock(block + 1);
    } else {
      if(albumJsonIDArray.length > 0){
        setCurrentPage(0);
        nextBlock(block);
      }
    }
  };

  const prevBlock = (block) => {
    const currentBlock = ( block -1 ) * 10;
    const newArrPhotos = [];

    // if(block === 0){

    // }

    for(let i = currentBlock; i < (block * 10); i++){
      newArrPhotos.push(albumJsonIDArray[i]);
    }
    setCurrentPage(currentPage - maxPages);
    setArrPhotos(newArrPhotos);
    setBlock(block -1);

  };

  const verPhoto = (lista) =>{
    setAlbumId(lista);
  };

  return (
    <>
      <div>
        <div className="direccionPaginacion">
        <button 
          className='botonPaginacion'
          onClick={() => prevBlock(block)}
        >
          👈🔙
        </button>
        {
          arrPhotos.map((lista) => (  
            <p 
              key={lista}
              onClick={() => verPhoto(lista)}
            >
              {lista}
            </p>
          ))
        } 
        <button 
          className='botonPaginacion'
          onClick={() =>nextBlock(block)}
        >
          👉🔜
        </button> 
        </div>
        <div className='seeMiniPhotos'>
          <SeeAlbum 
            albumId={albumId}
            closeArr={closeArr}
          />
        </div>
      </div>
    </>
  )
}