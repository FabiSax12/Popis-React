import React from "react"
import "./App.css"
import Header from "./components/Header"
import Popis from "./components/Popis"
import Botonetas from "./components/Botonetas"
import Contact from "./components/Contact"
import Carrito from "./components/Pago"

const App = () => {
  return (
    <>
    <Header/>
    <Popis/>
    <Botonetas/>
    <Carrito/>
    <Contact/>
    </>
  )
}

export default App