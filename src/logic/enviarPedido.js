import dataPopis from "../data/Popis.json"
import dataBotonetas from "../data/Botonetas.json"

const enviarPedido = (counter) => {
  const pago = document.getElementById("pago")
  const nombre = document.getElementById("nombre")
  let msj = `${nombre.value} paga con ${pago.value}`

  dataPopis.popis.map(i => (
    counter[i.name] > 0 ? msj += `\n ${i.name}: ${counter[i.name]}` : null
  ))
  dataBotonetas.botonetas.map(i => (
    counter[i.name] > 0 ? msj += `\n ${i.name}: ${counter[i.name]}` : null
  ))
  
  if(nombre.value && pago.value != "true"){
    console.log(pago.value)
    document.querySelector(".form__error").classList.remove("active")
    const telefono = "+50685160370";
    const url = `https://wa.me/${telefono}?text=${encodeURIComponent(msj)}`;
    window.open(url);
  } else { 
    document.querySelector(".form__error").classList.add("active")
  }
};

export { enviarPedido }