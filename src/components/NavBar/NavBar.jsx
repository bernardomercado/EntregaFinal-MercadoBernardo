import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import CartWidget from '../CartWidget/CartWidget'

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
      <CartWidget/>
    </nav>
  )
}
