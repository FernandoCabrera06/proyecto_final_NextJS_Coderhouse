import ProductCard from "./ProductCard"

const ProductList = async ({ category }) => {
  let items = [];

  try {
    const apiUrl = `https://${process.env.VERCEL_URL}/api/productos/${category}`;
    console.log("Fetching from URL:", apiUrl);

    const response = await fetch(apiUrl, {
      cache: 'no-cache',
    });

    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }

    const contentType = response.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      const text = await response.text(); // Leer la respuesta como texto
      console.error(`Expected JSON response, but got ${contentType}: ${text}`);
      return; // O lanzar un error
    }

    items = await response.json();
    console.log("PRODUCT LIST");
    console.log(items);
  } catch (e) {
    console.error("Hubo un error al traer los datos: " + e.message);
  }

  return (
    <section className="container m-auto flex justify-center items-center gap-12 flex-wrap">
      {console.table(items)}
      {items.map((item) => (
        <ProductCard key={item.id} item={item} />
      ))}
    </section>
  );
};

export default ProductList;
