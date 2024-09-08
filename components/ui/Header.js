import Image from "next/image"
import "./Header.css"
import CartWidget from "./CartWidget"

const Header = () => {
  return (
    <header className="w-full bg-sky-700">
      <div className="container m-auto py-6 flex justify-between items-center">
        <a href="/">
          <div className="logo-sitio-container">
            <Image
              src="/logo.png"
              id="logo-sitio"
              alt="logo sitio"
              width={50}
              height={50}
            />
            <p className="text-base text-slate-100">
              Rocco - Alimentos para mascotas
            </p>
          </div>
        </a>
        <nav className="flex justify-between gap-2">
          <a className="text-base text-slate-100 p-3" href="/">
            Inicio
          </a>

          <a className="text-base text-slate-100 p-3" href="/catalogo/todos">
            Catálogo
          </a>

          <a className="text-base text-slate-100 p-3" href="/admin">
            Administrador
          </a>

          <div>
            <span id="contadorCarrito" className="badge text-bg-danger"><CartWidget/></span>
          </div>

        </nav>
      </div>
    </header>
  )
}

export default Header
