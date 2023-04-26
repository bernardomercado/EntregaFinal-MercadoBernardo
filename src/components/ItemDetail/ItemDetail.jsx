import React from 'react'
import './ItemDetail.css'
import { ItemCount } from '../ItemCount/ItemCount'


export const ItemDetail = ({id, name, img, category, description, price, stock}) => {
  return (
    <article className="CardItem2">
        <header className="Header2">
            <h2 className="ItemHeader2">
                {name}
            </h2>
        </header>
        <picture>
            <img src={img} alt="name" className="ItemImg2"/>
        </picture>
        <section>
            <p className='Info2'>
                Categoria: {category}
            </p>
            <p className='Info2'>
                Descripción: {description}
            </p>
            <p className="Info2">
                Precio: ${price}
            </p>
        </section>
        <footer className="ItemFooter2">
            <ItemCount initial={1} stock={stock} onAdd={(quantity) => console.log('Cantidad agregada ', quantity)}/>
        </footer>
    </article>
  )
}
