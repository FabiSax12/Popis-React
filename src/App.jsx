import React from "react"
import "./App.css"
import Header from "./components/Header"
import Popis from "./components/Popis"
import Botonetas from "./components/Botonetas"
import Contact from "./components/Contact"
import Pago from "./components/Pago"

const App = () => {
  return (
    <>
    <Header/>
    <main>
      <div className="grid_left-side">
        <Popis/>
        <Botonetas/>
      </div>
      <div className="grid_rigth-side">
      <Pago/>
      </div>
    </main>
    <Contact/>
    </>
  )
}

export default App