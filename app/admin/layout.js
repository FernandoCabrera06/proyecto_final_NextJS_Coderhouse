"use client"
import { useEffect, useState } from "react"
import { useAuthContext } from "@/components/context/AuthContext"
import Loading from "@/app/catalogo/detail/loading"

const AdminLayout = ({ children, login }) => {
  const [isUserLogged, setIsUserLogged] = useState(null)
  
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userLogged = localStorage.getItem("userLogged") === "true"
      setIsUserLogged(userLogged)
    }
  }, [])

  if (isUserLogged === null) {
    return <Loading/>
  }

  return <>{isUserLogged ? children : login}</>
}

export default AdminLayout
