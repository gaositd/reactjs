import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { StarwarsTitle } from './starwarsTitle/starwarsTitle';
import { StarwarsCards } from './starwarsCards/starwarsCards';
import { StarwarsPagination } from './starwarsPagination/starwarsPagination';

import './starwarsTitle/starwarsTitle.css';

export const StarwarsApp = () => {
  const dispatch = useDispatch();
  const arrStarwars = useSelector(state => state.fullDataStarWars);
  const [starwarsData, setStarwarsdata] = useState({
    count:0,
    netx:null,
    previous:null,
    results:[],
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const urlApi = 'https://swapi.dev/api/people';//dirección de la api

  const getStarWarsData = async () =>{//obtener datos de la api
    try{
      const resp = await fetch(urlApi);
      const data = await resp.json();
      // setStarwarsdata(data);
      // setStarwarsdata
      dispatch(data);
      setLoading(false);//ya cargo los datos y permite pasar
    }catch (err){
      setStarwarsdata(err);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() =>{//carga de datos la pimera vez
    getStarWarsData();
  },[]);

  return (//en caso de no encontrar datos marcará error
    <>
      {//primero mostrará un mensaje indicando la carga
        loading 
          ? <span className="starwarsTitle">Star Wars Cards Is Loading</span>
          : error //si no respinde la api dará error
            ? <span className="starwarsTitle">Error loading from api</span>
            :(//mada los datos a sus direrentes objetos (buscar usar rtk) 
              <div>
                <StarwarsTitle />
                <StarwarsCards 
                  data={starwarsData.results}
                />
                <StarwarsPagination 
                  prevPage = {starwarsData.previous}
                  nextPage = {starwarsData.next}
                />
              </div>
            )
      }
    </>
  )
}
