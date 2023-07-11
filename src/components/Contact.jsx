import React from 'react'
import redes from "../data/Redes.json"
import "../stylesheets/Contact.css"

const Contact = () => {
  return (
    <>
      <footer  className="redes">
        <div className="flex-container">
          {redes.Redes.map((i, idx) => (
            <a href={i.link} target="_blank" key={idx}>
              <img src={require(`../assets/${i.img}`)} alt={i.name} className="redes_img" />
            </a>
          ))}
        </div>
      </footer>
    </>
  )
}

export default Contact