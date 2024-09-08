'use client'
import {useAuthContext} from "../context/AuthContext"
import Boton from "../ui/Boton"


const LogoutButton = ()=>{
    const {logout} = useAuthContext()
    return <Boton onClick={logout} className=" text-sm mr-20 bg-red-600 text-white rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500">Cerrar Sesion</Boton>
}

export default LogoutButton