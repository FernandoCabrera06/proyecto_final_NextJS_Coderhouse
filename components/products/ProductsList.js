import ProductCard from "./ProductCard"

const ProductList = async ({ category }) => {
  //cache configurado, para no cachear nunca y la informacion siempre este actulizada.
  let items = []

  try {
    items = await fetch(`http://localhost:3000/api/productos/${category}`, {
      cache: "force-cache",
      next: {
        tags: ["productos"],
      },
    }).then((r) => r.json())
  } catch (e) {
    console.log("Hubo un error al traer los datos: " + e)
  }

  return (
    <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  )
}

export default ProductList
