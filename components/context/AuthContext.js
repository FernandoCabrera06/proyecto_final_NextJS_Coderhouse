"use client"
import { auth, provider } from "@/app/firebase/config"
import { signInWithPopup, signOut, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"
import { createContext, useContext, useState, useEffect } from "react"
const AuthContext = createContext()

export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    logged: false,
    emaiL: null,
    uid: null
})

const registerUser = async (values) =>{
    try {
    await createUserWithEmailAndPassword(auth, values.email, values.password)

} catch (error) {
    console.error("Error al registrar:", error);
  }
}

const loginUser = async (values)=>{
    try {
await signInWithEmailAndPassword(auth, values.email, values.password)
document.location.reload();

} catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
}

const logout = async () => {
  await signOut(auth)
  document.location.reload();
}

const googleLogin = async () => {
  await signInWithPopup(auth, provider)
}

useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if(user){
      if (typeof window !== 'undefined') {
        localStorage.setItem("userLogged", true)
      }
      setUser({
        email: user.email,
        uid: user.uid
    })
    }else{
      if (typeof window !== 'undefined') {
        localStorage.setItem("userLogged", false)
      }
      setUser({
        emaiL: null,
        uid: null
    })
    }
  })
},[])

  return (
    <AuthContext.Provider value={{ registerUser, loginUser, logout, googleLogin}}>{children}</AuthContext.Provider>
  )
}
