import React from 'react'
import './CartItem.css'
import { CartContext } from '../../context/CartContext'
import { useContext } from 'react'

const CartItem = ({name, price, quantity, id}) => {

  const {removeItem} = useContext (CartContext)

  return (
    <div>
      <section className='producto-carrito'>
        <h4>{name}</h4>
        <h6>Cantidad: {quantity}</h6>
        <h6>Precio por unidad: ${price}</h6>
        <button onClick={()=> removeItem(id)} className='boton'>Eliminar producto</button>
      </section>
    </div>
  )
}

export default CartItem