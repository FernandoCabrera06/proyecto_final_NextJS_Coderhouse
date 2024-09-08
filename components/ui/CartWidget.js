'use client'
import Image from "next/image"
import { useCartContext } from "@/components/context/CartContext"
import Link from "next/link"


const CartWidget = () =>{
const { totalQty } = useCartContext()

return(
    <Link href={"/carrito"} className={"text-base text-slate-100 p-3 flex items-center"}>
        <Image
        src={"/cart-icon.svg"}
        alt="Cart icon"
        width={30}
        height={30}
        />
        <span>{totalQty()}</span>
    </Link>
)
}

export default CartWidget