import { useState } from "react";
import { Formulario } from "./formulario";
import "./showHide.css";

export const HideShow = () => {
  const [estado, setEstado] = useState(false);

  const showHide = (estado) => {
    setEstado(!estado);
  };

  return (
    <div className="contenedorShowHide">
      <div>
        <p className="paragraph">Mostrar Ocultar</p>
        <button 
          className="boton"
          onClick={() => showHide(estado)}
        >
          {estado ? "Ocultar" : "Mostrar"}
        </button>
        {estado ? <Formulario /> : null}
      </div>
    </div>
  );
};
