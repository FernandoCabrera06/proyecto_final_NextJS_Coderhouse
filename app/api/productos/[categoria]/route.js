import { NextResponse } from "next/server"
import { collection, getDocs, query, where } from "firebase/firestore"
import { db } from "@/app/firebase/config"

export async function GET(_, { params }) {
  const { categoria } = params

  const productosReferencia = collection(db, "productos")

  const q =
    categoria === "todos"
      ? productosReferencia
      : query(productosReferencia, where("category", "==", categoria))

  const querySnapshot = await getDocs(q)

  const docs = querySnapshot.docs.map((doc) => doc.data())

  return NextResponse.json(docs)
}
