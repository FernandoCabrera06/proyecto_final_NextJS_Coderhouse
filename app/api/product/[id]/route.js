import { NextResponse } from "next/server"
import { doc, getDoc } from "firebase/firestore"
import { db } from "@/app/firebase/config"

export async function GET(_, { params }) {
  const { id } = params

  const docReferencia = doc(db, "productos", id)

  const docSnapshot = await getDoc(docReferencia)

  return NextResponse.json(docSnapshot.data())
}
