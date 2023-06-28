import React from 'react'
import { useState } from "react"
import "../stylesheets/Popis.css"
import data from "../data/Botonetas.json"

const Botonetas = () => {
  // Hooks
  const [contador, setClick] = useState({});

  // Funciones de Botón
  const amountAdd = (name) => {
    setClick((prevState) => ({
      ...prevState,
      [name]: (prevState[name] || 0) + 1
    }));
  };

  const amountSubstract = (name) => {
    setClick((prevState) => ({
      ...prevState,
      [name]: (prevState[name] || 0) - 1
    }));
  };

  return (
    <>
      <h3>Botonetas</h3>
      <div className="grid_container">
        {data.botonetas.map((i, idx) => (

          <div key={idx} className="card">
            <div className={i.stock == "0" ? "noStock" : "stock"}>{i.stock}</div>
            <img src={i.img} alt="imagen" id={i.id}/>
            <h4 className="card_title">{i.name}</h4>
            <p className="card_text">${i.price}</p>
            <div className="contador">
              <button 
                  onClick={() => amountSubstract(i.name)} 
                  type="button" 
                  className="btn-substract" 
                  id={`${i.name}--1`}
                >
                  -
                </button>
                <div 
                  className="amount-input" 
                  id={`amount-${i.name}`}
                >
                  {contador[i.name] || 0}
                </div>
                <button 
                  onClick={() => amountAdd(i.name)} 
                  type="button" 
                  className="btn-add" 
                  id={`${i.name}++1`}
                >
                  +
                </button>
            </div>
          </div>
        
        ))}
      </div>
    </>
  )
}

export default Botonetas