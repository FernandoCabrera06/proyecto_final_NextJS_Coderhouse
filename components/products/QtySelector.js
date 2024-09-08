"use client"
import { useState } from "react"
import Counter from "../ui/Counter"
import Boton from "../ui/Boton"
import { useCartContext } from "@/components/context/CartContext"

const QtySelector = ({ item, esCarrito }) => {
  const { addToCart, isInCart } = useCartContext()
  const [quantity, setQuantity] = useState(item.stock == 0 ? 0 : 1)
  const disabled = item.stock < 1

  const handleAdd = () => {
    addToCart({
      ...item,
      quantity,
    })
  }

  return (
    <div className="flex items-center gap-3">
      <Counter counter={quantity} setCounter={setQuantity} max={item.stock} />
      {!esCarrito && (
        <Boton onClick={handleAdd} disabled={disabled} style={ { background: disabled ?'#ccc':''}} className="text-xs/[22px]">
          Agregar al carrito
        </Boton>
      )}
    </div>
  )
}

export default QtySelector
