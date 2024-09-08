import CategoriesMenu from "@/components/products/CategoriesMenu"
import ProductsList from "@/components/products/ProductsList"
import Footer from "@/components/ui/Footer"
import Header from "@/components/ui/Header"
import { Suspense } from "react"

export async function generateMetadata({ params, searchParams }, parents) {
  return {
    title: `Rocco alimentos - ${params.category}`,
    description: "E-commerce de alimentos para mascotas",
    keywords: ["alimento", "Perros", "Aves", "Gatos", "Reptiles", "Peces"],
  }
}

export function generateStaticParams() {
  return [
    { category: "todos" },
    { category: "perros" },
    { category: "aves" },
    { category: "gatos" },
    { category: "reptiles" },
    { category: "peces" },
  ]
}

export const revalidate = 3600

const Catalogo = ({ params }) => {
  const { category } = params

  return (
    <main>
      <Header />
      <div className="text-3xl flex justify-center mt-3 mb-3">
        <h1> Catálogo</h1>
      </div>
      <div className="flex flex-row">
        <CategoriesMenu />
        <Suspense fallback={<h3>Cargando...</h3>}>
        <ProductsList category={category.toLocaleLowerCase()} />
        </Suspense>
      </div>
      <Footer />
    </main>
  )
}

export default Catalogo
