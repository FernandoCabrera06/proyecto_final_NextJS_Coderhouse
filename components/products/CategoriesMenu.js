"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const links = [
  { label: "Todos", href: "/catalogo/todos" },
  { label: "Perros", href: "/catalogo/perros" },
  { label: "Aves", href: "/catalogo/aves" },
  { label: "Gatos", href: "/catalogo/gatos" },
  { label: "Reptiles", href: "/catalogo/reptiles" },
  { label: "Peces", href: "/catalogo/peces" },
]

const CategoriesMenu = () => {
  const pathname = usePathname()

  return (
    <>
      <aside className="flex flex-col ml-4">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className={`${
              pathname === link.href ? "font-semibold bg-blue-700" : ""
            } m-1 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded`}
          >
            {link.label}
          </Link>
        ))}
      </aside>
    </>
  )
}

export default CategoriesMenu
