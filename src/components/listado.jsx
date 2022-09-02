import React from 'react';
import Item from './item.jsx';
import data from './data.json';

export default function Listado({sumar}) {
  return (
    <div className='container'>
          {data.map(dato => <Item prop={dato} sumar={sumar} key={dato.id}></Item>)}
    </div>
  )
}
