import React from 'react'
import "../stylesheets/Pago.css"

const Pago = () => {
  return (
    <div className='container__pedido'>
      <h3>Realizar pedido</h3>
      <form className='form'>
        <div className="form__inputs">
          <div className="form__inputs__nombre">
            <label htmlFor="nombre" className='form__inputs__label'>Nombre:</label>
            <input type="text" className="form__inputs__input" id="nombre" />
          </div>

          <div className="form__inputs__metodo-pago">
            <label htmlFor="pago" className='form__inputs__label'>Forma de pago:</label>
            <select className="form__inputs__input" id="pago">
              <option value>Escoja un método de pago</option>
              <option value="Efectivo">Efectivo</option>
              <option value="SINPE móvil">SINPE móvil</option>
            </select>
          </div>
        </div>
        <button
          type="button"
          className="form__btn-enviar"
          id="botonPedido"
        >
          <span>Enviar pedido</span> 
        </button>
      </form>
    </div>
  )
}

export default Pago