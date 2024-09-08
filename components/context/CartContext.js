"use client"
import React, { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext)

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([])

  const addToCart = (item) => {
    if(item.stock > 0) setCart([...cart, item])
  }

  const isInCart = (id) => {
    return cart.some((item) => item.id === id)
  }

  const totalQty = () => {
    return cart.reduce((acumulador, item) => acumulador + item.quantity, 0)
  }

  const totalSum = () => {
    return cart.reduce((acumulador, item) => item.quantity > 0 ? (acumulador + item.price * item.quantity):(acumulador + item.price) , 0)
  }

  const emptyCart = () => {
    setCart([])
  }

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        isInCart,
        totalQty,
        emptyCart,
        totalSum
      }}
    >
      {children}
    </CartContext.Provider>
  )
}