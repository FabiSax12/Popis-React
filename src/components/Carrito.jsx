import React from 'react'
import dataPopis from "../data/Popis.json"
import dataBotonetas from "../data/Botonetas.json"
import "../stylesheets/Carrito.css"

const Carrito = () => {
    return (
    <>
    <div className="container-carrito">
        <h3>Carrito</h3>

        {dataPopis.popis.map((i, idx) => (
            <div key={idx} className={`carrito-counter ${i.display}`} id={i.id} >
                {i.name}: <span className='amount'>{i.amount}</span>
            </div>
        ))}
        {dataBotonetas.botonetas.map((i, idx) => (
            <div key={idx} className={`carrito-counter ${i.display}`} id={i.id} >
                {i.name}: <span className='amount'>{i.amount}</span>
            </div>
        ))}
    </div>
    </>
  )
}

export default Carrito