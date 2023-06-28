import React from 'react'
import "../stylesheets/Pago.css"

const Pago = () => {
  return (
    <div className='container__pedido'>
      <h3>Realizar pedido</h3>
      <form className='form'>
        <div class="form__inputs">
          <div class="form__inputs__nombre">
            <label for="nombre" className='form__inputs__label'>Nombre:</label>
            <input type="text" class="form__inputs__input" id="nombre" />
          </div>

          <div class="form__inputs__metodo-pago">
            <label for="pago" className='form__inputs__label'>Forma de pago:</label>
            <select class="form__inputs__input" id="pago">
              <option selected>Escoja un método de pago</option>
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
          Enviar pedido
        </button>
      </form>
    </div>
  )
}

export default Pago