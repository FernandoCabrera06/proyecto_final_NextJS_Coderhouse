import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"
import { getAuth, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAYDVA2nZ5sps5aFNHZneZQ0_-4hzNuyU4",
  authDomain: "codernext-app-51fc9.firebaseapp.com",
  projectId: "codernext-app-51fc9",
  storageBucket: "codernext-app-51fc9.appspot.com",
  messagingSenderId: "355954847648",
  appId: "1:355954847648:web:dfe3a53425dea26c22fec5",
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)
export const storage = getStorage(app)
export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()