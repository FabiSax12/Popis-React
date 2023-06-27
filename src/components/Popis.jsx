import React from 'react'
import "../stylesheets/Popis.css"
import data from "../data/Popis.json"

const Popis = () => {

  return (
    <>
      <h3>Popis</h3>
      <div className="grid_container">
        {data.popis.map((i, idx) => (

          <div key={idx} className="card">
            <div className={i.stock === "0" ? "noStock" : "stock"}>{i.stock}</div>
            <img src={i.img} alt="imagen" id={i.id}/>
            <h4 className="card_title">{i.name}</h4>
            <p className="card_text">${i.price}</p>
            <div className="contador">
              <input type="number" value="0" step="1" />
            </div>
          </div>
        
        ))}
      </div>
    </>
  )
}

export default Popis