'use client'
import Boton from "@/components/ui/Boton"
import Footer from "@/components/ui/Footer"
import Header from "@/components/ui/Header"
import Image from "next/image"
import QtySelector from "../../components/products/QtySelector"
import "./page.css"
import { useCartContext } from "@/components/context/CartContext"

const Cart = () => {
  const {cart, emptyCart, totalSum}= useCartContext()

  const handleLimpiarCarrito = ()=>{
    emptyCart()
  }
  
  return (
    <>
      <Header />
      <section>
        <div className="text-3xl flex justify-center mt-3 mb-3">
          <h1> Carrito </h1>
        </div>
        { cart.map((item) => (
        <div key={item.id} className="card-compra-container">
          <div className="card-compra a">
            <div className="card-compra-info">
              <div>
                <Image
                  src={item.img}
                  alt="producto de catálogo"
                  width={140}
                  height={140}
                />
              </div>
              <div>
                <p>
                {item.description}
                </p>
                <h2>${item.price}</h2>
              </div>
            </div>
            <div>
              <QtySelector item={item} esCarrito />
            </div>
          </div>
          </div>
        ))}

          <div className="cuenta-total">
            <h1>Resumen del pedido</h1>
            <h2>Total: ${totalSum()}</h2>
            <div>
              <Boton>Comprar ahora</Boton>
              <Boton onClick={handleLimpiarCarrito}>Limpiar carrito</Boton>
            </div>
          
        </div>
      </section>
      <Footer />
    </>
  )
}
export default Cart
