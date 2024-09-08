import ProductsTable from "@/components/admin/ProductsTable"
import Footer from "@/components/ui/Footer"
import Header from "@/components/ui/Header"
import React from "react"
import LogoutButton from "@/components/admin/LogoutButton"

export const metadata = {
  title: "Rocco Alimentos - Administrador",
  description: "E-commerce de alimentos para mascotas",
  keywords: ["coderhouse", "e-commerce", "nextjs", "mascotas", "alimento"],
  openGraph: {
    title: "Next.js",
    type: "article",
    publishedTime: "2023-01-01T00:00:00.000Z",
    aythors: ["Fernando Cabrera"],
  },
}

const Admin = () => {
  return (
    <main>
      <Header />
      <div className="text-3xl flex justify-center mt-3 mb-8">
      <LogoutButton/>
        <h1> Cargar/Editar productos</h1>
      </div>
      <div className="flex justify-center border-solid mt-18">
        <ProductsTable/>
      </div>
      <Footer />
    </main>
  )
}

export default Admin
