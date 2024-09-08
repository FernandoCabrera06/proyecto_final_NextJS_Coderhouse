"use client"
import { useAuthContext } from "@/components/context/AuthContext"

const AdminLayout = ({ children, login }) => {
  const { userLogin } = useAuthContext()

  return <>{ userLogin ? children : login}</>
}

export default AdminLayout
