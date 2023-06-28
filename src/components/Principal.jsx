import React from 'react'
import "../stylesheets/Principal.css"
import Popis from "./Popis"
import Botonetas from "./Botonetas"
import Pago from "./Pago"
import Carrito from "./Carrito"

const Principal = () => {
  return (
    <main>
      <div className="grid_left-side">
        <Popis/>
        <Botonetas/>
      </div>
      <div className="grid_rigth-side">
        <div className="sticky_container">
        <Carrito/>
        <Pago/>
        </div>
      </div>
    </main>
  )
}

export default Principal