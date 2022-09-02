import {useState} from 'react';

export default function Item({prop, sumar}) {
  let [stock, setStock] = useState(prop.stock)
  function restar(){
    setStock(stock - 1)
    sumar()
  }

  return (
    <div className='producto'>
      <img src={`${prop.producto.imagen}`} alt="Zapatilla Nike" />
      <h3>{prop.producto.nombre}</h3>
      <p>{prop.producto.descripcion}</p>
      <h5>En stock {stock === 0 ? <span>agotado</span> : stock }</h5>
      <button onClick={restar} disabled={stock <1}>{stock >0 ? 'COMPRAR': "SIN STOCK"}</button>
    </div>
  )
}
