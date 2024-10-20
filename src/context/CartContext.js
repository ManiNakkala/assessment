// src/context/CartContext.js
import {createContext, useState} from 'react'

export const CartContext = createContext()

export const CartProvider = ({children}) => {
  const [cart, setCart] = useState([])
  const [orderPlaced, setOrderPlaced] = useState(false)

  const addToCart = product => {
    setCart(prevCart => [...prevCart, product])
  }

  const clearCart = () => {
    setCart([])
    setOrderPlaced(true) // This will trigger the order placed modal
  }

  return (
    <CartContext.Provider value={{cart, addToCart, clearCart, orderPlaced}}>
      {children}
    </CartContext.Provider>
  )
}
