import React, { useState } from "react";
import "../stylesheets/Principal.css";
import Popis from "./Popis";
import Botonetas from "./Botonetas";
import Pago from "./Pago";
import Carrito from "./Carrito";

const Principal = () => {
  // Hooks
  const [cantidad, setCantidad] = useState({});

  // Funciones de Sumar y Restar 1
  const amountAdd = (name) => {
    setCantidad((prevState) => ({
      ...prevState,
      [name]: Math.max((prevState[name] || 0) + 1, 0),
    }));
  };

  const amountSubstract = (name) => {
    setCantidad((prevState) => ({
      ...prevState,
      [name]: Math.max((prevState[name] || 0) - 1, 0),
    }));
  };

  return (
    <main>
      <div className="grid_left-side">
        <Popis 
          counter={cantidad} 
          add={amountAdd} 
          subtract={amountSubstract} 
        />
        <Botonetas
          counter={cantidad}
          add={amountAdd}
          subtract={amountSubstract}
        />
      </div>
      <div className="grid_rigth-side">
        <div className="sticky_container">
          <Carrito counter={cantidad} />
          <Pago counter={cantidad}/>
        </div>
      </div>
    </main>
  );
};

export default Principal;
