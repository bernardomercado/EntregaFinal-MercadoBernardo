import './CartWidget.css'
import cartImg from './icons/shopping-cart_icon-icons.com_72552.png'
import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
  
  const { cart } = useContext(CartContext)
  
  const getTotalQuantity = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.quantity;
    });
    return total;
  };


  return (
    <Link to='/cart' className='CartWidget'>
        { getTotalQuantity() }
        <img className='CartImg' src={cartImg} alt="cart-widget" />
    </Link>
  )
}

export default CartWidget