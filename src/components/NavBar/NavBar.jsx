import React from 'react'
import { CartGidget } from '../CartGidget/CartGidget'

export const NavBar = () => {
  return (
    <nav className='navegador'>
        <h3>Tienda de ropa</h3>
        <div className='navegador-botones'>
            <button>Remeras</button>
            <button>Buzos</button>
            <button>Pantalones</button>
            <button>Zapatillas</button>
        </div>
        <CartGidget/>
    </nav>
  )
}
