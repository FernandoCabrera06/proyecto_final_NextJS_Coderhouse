import ProductDetail from "@/components/products/ProductDetail"
import Footer from "@/components/ui/Footer"
import Header from "@/components/ui/Header"

export async function generateMetadata({ params }) {
  const { id } = params
  let producto = {}
  try {
    producto = await fetch(
      `https://${process.env.VERCEL_URL}/api/product/${id}`,
      {
        cache: "no-cache",
        next: {
          revalidate: 0,
        },
      }
    ).then((r) => r.json())
    console.log(producto);
  } catch (e) {
    console.log("Hubo un error el producto: " + e)
  }

  return {
    title: `Rocco alimentos - ${producto.category}`,
    description: `${producto.description}`,
    brand: `${producto.brand}`,
  }
}

const Catalogo = ({ params }) => {
  const { id } = params
  return (
    <main>
      <Header />
      <div className="text-3xl flex justify-center mt-3">
        <h1> Detalle Producto </h1>
      </div>
      <div>
        <ProductDetail id={id} />
      </div>
      <Footer />
    </main>
  )
}

export default Catalogo
