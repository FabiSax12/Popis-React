import React from "react";
import "../stylesheets/Popis.css";
import data from "../data/Popis.json";
import BotonContador from "./BotonContador";

const Popis = ({ counter, add, subtract }) => {
  const amountAdd = (name) => {
    add(name);
  };
  const amountSubstract = (name) => {
    subtract(name);
  };

  return (
    <>
      <h3>Popis</h3>
      <div className="grid_container">
        {data.popis.map((i, idx) => (
          <div key={idx} className="card">
            <div className={i.stock === "0" ? "noStock" : "stock"}>
              {i.stock}
            </div>
            <img src={i.img} alt="imagen" id={i.id} />
            <h4 className="card_title">{i.name}</h4>
            <p className="card_text">${i.price}</p>
            <div className="contador">
              <BotonContador
                onClick={() => amountSubstract(i.name)}
                className="btn-contador substract"
                id={`${i.name}--1`}
                message="-"
              />
              <div className="amount-input" id={`amount-${i.name}`}>
                {counter[i.name] || 0}
              </div>
              <BotonContador
                onClick={() => amountAdd(i.name)}
                className="btn-contador add"
                id={`${i.name}++1`}
                message="+"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Popis;
