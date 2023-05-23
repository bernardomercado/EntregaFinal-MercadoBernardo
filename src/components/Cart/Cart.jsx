import './Cart.css'
import { useContext } from "react"
import { CartContext } from "../../context/CartContext"
import CartItem from '../CartItem/CartItem'
import { Link } from 'react-router-dom'

const Cart = () =>{
    const { cart, clearCart, getTotalQuantity, total: cartTotal} = useContext(CartContext)

    if (getTotalQuantity() === 0){
        return (
            <div className='no-hay-productos'>
                <h1>No hay productos en el carrito</h1>
                <Link to= '/' className='Option'>Productos</Link>
            </div>
        )
    }

    return (
        <div className='limpiar-carrito-checkout'>
            { cart.map(p => <CartItem key={p.id} {...p}/>) }
            <h3>Total: ${cartTotal}</h3>
            <button onClick={() => clearCart()} className="Button">Limpiar carrito</button>
            <Link to='/checkout' className= 'Option'>Checkout</Link>
        </div>
    )
}

export default Cart