import React, { useState, useEffect } from "react";
import AlbumJson from "../../../assets/json/fakeJson.json";
import "./boton.css";
import './leerJson.css';
import { Paginador } from "./paginador";

import { createBrowserRouter } from 'react-router-dom';

export const LeerJson = () => {
  const [albumJsonIDArray, setAlbumJsonIDArray] = useState([]);

  useEffect(() =>{},[albumJsonIDArray]);

  const getAlbumId = () => {
    const arrayTemp = AlbumJson.map((album) => album.albumId);
    const uniqueIds = [...new Set(arrayTemp)];
    setAlbumJsonIDArray(uniqueIds);
  };

  const closeAlbumId = () =>{
    setAlbumJsonIDArray([]);
    return albumJsonIDArray;
  }

  return (
    <div>
      <br />
      <button id="boton" className="horizontal" onClick={getAlbumId}>
        Abrir JSON
      </button>
      <button id="boton" className="horizontal" onClick={closeAlbumId}>
        Cerrar JSON
      </button>
      <div className="lista">
      </div>
      <div className='direccionPaginacion'>
        <Paginador 
          albumJsonIDArray = {albumJsonIDArray}
        />
      </div>
    </div>
  );
};