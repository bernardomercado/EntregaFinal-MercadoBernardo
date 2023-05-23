import { createContext, useState, useEffect } from "react"

export const CartContext = createContext({
    cart: [],
    total: 0,
})

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([])
    const [total, setTotal] = useState(0)

    console.log(cart)

    const addItem = (item, quantity) => {
        if(!isInCart(item.id)) {
            setCart(prev => [...prev, {...item, quantity}])
        } else {
            console.error('El producto ya fue agregado')
        }
    }

    const removeItem = (itemId) => {
        const cartUpdated = cart.filter(prod => prod.id !== itemId)
        setCart(cartUpdated)
    }

    const clearCart = () => {
        setCart([])
    }

    const isInCart = (itemId) => {
        return cart.some(prod => prod.id === itemId)
    }

    const getTotalQuantity = () => {
        let totalQuantity = 0;
        cart.forEach((item) => {
          totalQuantity += item.quantity;
        });
        return totalQuantity;
    };

    const calculateTotal = () => {
        let calculatedTotal = 0;
        cart.forEach((item) => {
            calculatedTotal += item.quantity * item.price;
        });
        setTotal(calculatedTotal);
    };

    useEffect(() => {
        calculateTotal();
    }, [cart]);

    return (
        <CartContext.Provider value={{ cart, addItem, removeItem, clearCart, getTotalQuantity, total }}>
            { children }
        </CartContext.Provider>
    )
}