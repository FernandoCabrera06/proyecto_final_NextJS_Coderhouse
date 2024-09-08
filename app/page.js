import Footer from "@/components/ui/Footer"
import Header from "@/components/ui/Header"
import Image from "next/image"
import "./page.css"

export const metadata = {
  title: "Rocco Alimentos",
  description: "E-commerce de alimentos para mascotas",
  keywords: ["coderhouse", "e-commerce", "nextjs", "mascotas", "alimento"],
  openGraph: {
    title: "Next.js",
    description: "The react framework for the web",
    type: "article",
    publishedTime: "2023-01-01T00:00:00.000Z",
    aythors: ["Fernando Cabrera"],
  },
}

const CATEGORY_CIRCLES = ["Perros", "Aves", "Gatos", "Reptiles", "Peces"]
export default function Home() {
  return (
    <>
      <Header />
      <main className="flex flex-col p-8">
        <section className="section-banner">
          <div
            className="banner-container"
            data-aos="fade-up"
            data-aos-easing="linear"
            data-aos-duration="1500"
          >
            <Image src="/banner.png" alt="banner" width={600} height={600} />
          </div>
        </section>

        <section className="category-circle-section">
          {CATEGORY_CIRCLES.map((categoryName) => (
            <div className="category-circle-container">
              <a
                href={`/catalogo/${categoryName.toLocaleLowerCase()}`}
                title={categoryName}
              >
                <Image
                  className="category-circle"
                  src={`/${categoryName}.jpg`}
                  alt={categoryName}
                  width={400}
                  height={400}
                />
              </a>
            </div>
          ))}
        </section>
      </main>
      <Footer />
    </>
  )
}
