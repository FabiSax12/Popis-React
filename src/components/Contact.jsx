import React from 'react'
import redes from "../data/Redes.json"
import "../stylesheets/Contact.css"

const Footer = () => {
  return (
    <>
      <div className="redes">
        <div className="flex-container">
          {redes.Redes.map((i, idx) => (
            <a href={i.link} target="_blank">
              <img src={require(`../assets/${i.img}`)} alt={i.name} className="redes_img" />
            </a>
          ))}
        </div>
      </div>
    </>
  )
}

export default Footer