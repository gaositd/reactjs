import { useState, useEffect } from "react";
import { ViewQuote } from "./viewQuote/viewQuote";

export const Quote = () => {
  const [quote, setQuote] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  // const urlApi = "https://zenquotes.io/api/quotes";
  const urlApi = "https://type.fit/api/quotes";
  const getData = async () => {
    try {
      const response = await fetch(urlApi);
      const data = await response.json();
      setQuote(data);
      setLoading(false);
    } catch (err) {
      console.error(err);
      setError(true);
      setLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {loading ? (
        <p>Cargando...</p>
      ) : error ? (
        <p>Error al obtener los datos de la API</p>
      ) : (
        <ViewQuote quote={quote} />
      )}
    </div>
  );
};
