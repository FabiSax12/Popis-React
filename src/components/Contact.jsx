import React from 'react'
import redes from "../data/Redes.json"
import "../stylesheets/Contact.css"

const Footer = () => {
  return (
    <>
      <h3 id="contact_info">Información de Contacto</h3>
      <div className="redes">
        {redes.Redes.map((i, idx) => (
          <div key={idx} className="redes_item" id={i.name}>
            <img src= {require(`../assets/${i.img}`)} alt="" className="redes_img"/>
            <a href={i.link} target="_blank" className='redes_name'>{i.name}</a>
          </div>
        ))}
      </div>
    </>
  )
}

export default Footer