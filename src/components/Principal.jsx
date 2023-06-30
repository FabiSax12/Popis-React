import React, { useState } from "react";
import "../stylesheets/Principal.css";
import Popis from "./Popis";
import Botonetas from "./Botonetas";
import Pago from "./Pago";
import Carrito from "./Carrito";

const Principal = () => {
  // Hooks
  const [contador, setContador] = useState({});

  // Funciones de Sumar y Restar 1
  const amountAdd = (name) => {
    setContador((prevState) => ({
      ...prevState,
      [name]: Math.max((prevState[name] || 0) + 1, 0),
    }));
  };

  const amountSubstract = (name) => {
    setContador((prevState) => ({
      ...prevState,
      [name]: Math.max((prevState[name] || 0) - 1, 0),
    }));
  };

  return (
    <main>
      <div className="grid_left-side">
        <Popis 
          contador={contador} 
          sumar={amountAdd} 
          restar={amountSubstract} 
        />
        <Botonetas
          contador={contador}
          sumar={amountAdd}
          restar={amountSubstract}
        />
      </div>
      <div className="grid_rigth-side">
        <div className="sticky_container">
          <Carrito contador={contador} />
          <Pago />
        </div>
      </div>
    </main>
  );
};

export default Principal;
