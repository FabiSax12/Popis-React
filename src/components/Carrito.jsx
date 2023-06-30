import React from "react";
import dataPopis from "../data/Popis.json";
import dataBotonetas from "../data/Botonetas.json";
import "../stylesheets/Carrito.css";

const Carrito = ({ contador }) => {
  return (
    <>
      <div className="container-carrito">
        <h3>Carrito</h3>

        {dataPopis.popis.map((i, idx) => (
          <div
            key={idx}
            className={`carrito-counter ${
              contador[i.name] > 0 ? "active" : "inactive"
            }`}
            id={i.id}
          >
            {i.name}: <span className="amount">{contador[i.name] || 0}</span>
          </div>
        ))}
        {dataBotonetas.botonetas.map((i, idx) => (
          <div
            key={idx}
            className={`carrito-counter ${
              contador[i.name] > 0 ? "active" : "inactive"
            }`}
            id={i.id}
          >
            {i.name}: <span className="amount">{contador[i.name] || 0}</span>
          </div>
        ))}
      </div>
    </>
  );
};

export default Carrito;
