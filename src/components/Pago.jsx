import "../stylesheets/Pago.css"
import { enviarPedido } from "../logic/enviarPedido"

const Pago = ({counter}) => {
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
          onClick={() => enviarPedido(counter, "Fabián", "Efectivo")}
        >
          <span>Enviar pedido</span> 
        </button>
        <p className="form__error">Porfavor introduzca un nombre y un método de pago</p>
      </form>
    </div>
  )
}

export default Pago