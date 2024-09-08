import Image from "next/image"
import Link from "next/link"

const ProductCard = ({ item }) => {
  return (
    <Link href={`/catalogo/detail/${item.id}`}>
      <article className={item.stock > 0 ? "CardItem" : "CardItem SinStock"}>
        <header className="Header">
          <h6 className="ItemHeader">{item.description}</h6>
        </header>
        <div className="flex justify-center mt-2 mb-2">
          <Image
            src={item.img}
            alt={item.description}
            className="ItemImg"
            width={140}
            height={140}
          />
        </div>
        <section>
          <p className="Info">Precio: ${item.price}</p>
          <p className="Info">
            {item.stock > 0 ? (
              "Stock disponible: " + item.stock
            ) : (
              <span className="SpanSinStock">Sin stock</span>
            )}
          </p>
        </section>
      </article>
    </Link>
  )
}

export default ProductCard
