import React from 'react'
import "../stylesheets/BotonContador.css"

const BotonContador = ( {onClick, className, id, message } ) => {
  return (
    <button 
        onClick={onClick} 
        type="button"
        className={className} 
        id={id}
    >
        {message}
    </button>
  )
}

export default BotonContador