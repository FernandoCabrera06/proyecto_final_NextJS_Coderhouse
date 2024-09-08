"use client"
import { useRouter } from "next/navigation"
import Image from "next/image"
import Boton from "@/components/ui/Boton"

export default function NotFound() {
  const router = useRouter()

  return (
    <main>
      <div className="error-container mt-30">
        <h1>⚠️Ups! Hubo un error⚠️</h1>
        <Image
          src="/error.jpg"
          alt="Imagen de perro tapandose los ojos"
          width={500}
          height={500}
        />
        <h2>Intente nuevamente mas tarde...</h2>
        <div>
          <Boton
            className="boton-volver"
            onClick={() => {
              router.back()
            }}
          >
            Volver
          </Boton>
        </div>
      </div>
    </main>
  )
}
