import './ItemDetail.css'
import React, { useContext, useState } from 'react'
import { ItemCount } from '../ItemCount/ItemCount'
import { Link } from 'react-router-dom'
import { CartContext } from '../../context/CartContext'


export const ItemDetail = ({id, name, img, category, description, price, stock}) => {
    const [quantityAdded, setQuantityAdded] = useState(0)

    const { addItem } = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)

        const item = {
            id, name, price
        }

        addItem(item, quantity)
    }

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
            {
                quantityAdded > 0 ? (
                    <Link to='/cart' className='Option'>Terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd}/>
                )
            }
        </footer>
    </article>
  )
}
