import React from 'react'
import { CartGidget } from '../CartGidget/CartGidget'
import { Link, NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className='navegador'>
      <Link to='/'>
        <h3>Tienda de MMA</h3>
      </Link>
      <div className='navegador-botones'>
        <NavLink to={`/category/remera`} className={({ isActive}) => isActive ? 'ActiveOption' :  'Option'}>Remeras</NavLink>
        <NavLink to={`/category/buzo`} className={({ isActive}) => isActive ? 'ActiveOption' :  'Option'}>Buzos</NavLink>
        <NavLink to={`/category/short`} className={({ isActive}) => isActive ? 'ActiveOption' :  'Option'}>Shorts</NavLink>
      </div>
      <CartGidget/>
    </nav>
  )
}
