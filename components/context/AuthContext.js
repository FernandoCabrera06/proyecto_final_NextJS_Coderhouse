"use client"

import { createContext, useContext, useState, useEffect } from "react"
import { auth, provider } from "@/app/firebase/config"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, signInWithPopup} from "firebase/auth"

const AuthContext = createContext()
  
export const useAuthContext = () => useContext(AuthContext)

export const AuthProvider = ({ children }) => {
    const [userLogin, setUserLogin] = useState({
      logged: false,
      email: null,
      uid: null,
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

} catch (error) {
    console.error("Error al iniciar sesión:", error);
  }
}

const logout = async ()=>{
  await signOut(auth)
}

const googleLogin = async ()=>{
  await signInWithPopup(auth, provider)
}

useEffect(()=>{
  onAuthStateChanged(auth, (user)=>{
    console.log(user)

    if(user){
      setUserLogin({
        logged:true,
        email:user.email,
        uid:user.uid
      })
    }else{
      setUserLogin({
        logged:false,
        email:null,
        uid:null
      })
    }
  })
},[])

  return (
    <AuthContext.Provider value={{ userLogin, registerUser, loginUser, logout, googleLogin}}>{children}</AuthContext.Provider>
  )
}
