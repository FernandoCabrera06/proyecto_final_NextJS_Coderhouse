import ProductCard from "./ProductCard"

const ProductList = async ({ category }) => {
  //cache configurado, para no cachear nunca y la informacion siempre este actulizada.
  let items = []

  try {

    const apiUrl = `https://${process.env.VERCEL_URL}/api/productos/${category}`;
console.log("Fetching from URL:", apiUrl);

     items = await fetch(apiUrl, {
        cache: 'no-cache',
    }).then(r => r.json())
    console.log("PRODUCT LIST")
    console.log(items);
  } catch (e) {
    console.log("Hubo un error al traer los datos: " + e)
    console.log("Fetching from URL:", apiUrl);
  }

  return (
    <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
      {console.table(items)}
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  )
}

export default ProductList
