import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { SeeAlbum } from './seeAlbum';
import './leerJson.css';

export const Paginador = (props) => {
  const { albumJsonIDArray } = props;
  const [block, setBlock] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [arrPhotos, setArrPhotos] = useState([]);
  const maxPages = 10;
  let albumId = 0;

  useEffect(() => nextBlock, []);

  const nextBlock = (block) => {
    currentPage === albumJsonIDArray.length
      ? setCurrentPage(0)
      :null;

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
    currentPage === 0
      ? setCurrentPage(10)
      :null;

    if (currentPage < albumJsonIDArray.length) {
      const newArrPhotos = [];
      for (let i = currentPage - maxPages; i < currentPage; i++) {
        newArrPhotos.push(albumJsonIDArray[i]);
      }
      setCurrentPage(currentPage - maxPages);
      setArrPhotos(newArrPhotos);
      setBlock(block - 1);
    } else {
      if(albumJsonIDArray.length < 0){
        setCurrentPage(0);
        prevBlock(block);
      }
    }
  };

  const verPhoto = (lista) =>{
    albumId = lista;
    alert(albumId);
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
        <div>
          <SeeAlbum 
            albumId={albumId}
            albumJsonIDArray={albumJsonIDArray}
          />
        </div>
      </div>
    </>
  )
}