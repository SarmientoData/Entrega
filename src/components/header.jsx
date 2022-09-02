import React from 'react';

export default function header({prop}) {
  return (
    <header>
      <h1>Carrito de compras</h1>
      <p>Cantidad de productos <span>{prop}</span></p>
    </header>
  )
}
