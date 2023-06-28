import React from 'react'
import dataPopis from "../data/Popis.json"
import "../stylesheets/Carrito.css"

const Carrito = () => {
    return (
    <>
    <div className="container-carrito">
        <h3>Carrito</h3>

        {dataPopis.popis.map((i, idx) => (
            <div className={`carrito-counter ${i.display}`} id={i.id} >
            {i.name}: <span className='amount'>{i.amount}</span>
         </div>
        ))}


        {/* <div className={`carrito-counter `} id="cereza" >
           Cereza: <span className='amount'>{Amounts.cereza}</span>
        </div>
        <div className={`carrito-counter `} id="" >
            Menta: <span className='amount'>{Amounts.menta}</span>
        </div>
        <div className={`carrito-counter `} id="" >
            Pasas: <span className='amount'>{Amounts.pasas}</span>
        </div>
        <div className={`carrito-counter `} id="" >
            Chocomaní: <span className='amount'>{Amounts.chocomani}</span>
        </div>
        <div className={`carrito-counter `} id="" >
            Galleta: <span className='amount'>{Amounts.galleta}</span>
        </div> */}
    </div>
    </>
  )
}

export default Carrito