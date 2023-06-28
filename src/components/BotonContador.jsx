import React from 'react'
import "../stylesheets/BotonContador.css"

const BotonContador = ( {onClick, className, id, mensage } ) => {
  return (
    <button 
        onClick={onClick} 
        type="button"
        className={className} 
        id={id}
    >
        {mensage}
    </button>
  )
}

export default BotonContador