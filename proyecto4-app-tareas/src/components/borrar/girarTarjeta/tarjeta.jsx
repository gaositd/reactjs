import React from "react";
import "./girarTarjeta.css";

export const Tarjeta = (props) => {
  const { getApi } = props;
  return (
    <div className="cartas">
      {getApi.map((dato) => (
        <div key={dato.id} className="carta-box">
          <div className="carta">
            <div className="cara">
              <img
                src="https://via.placeholder.com/100/171600"
                width="100"
                height="150px"
              />
            </div>
            <div className="cara detras">
              <img src={dato.avatar} width="100" height="150px" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
