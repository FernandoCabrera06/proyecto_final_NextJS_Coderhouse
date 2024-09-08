import { Inter } from "next/font/google"
import "./globals.css"
import { CartProvider } from "@/components/context/CartContext"
import { AuthProvider } from "@/components/context/AuthContext"

const inter = Inter({ subsets: ["latin"] })

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        <CartProvider>{children}</CartProvider>
        </AuthProvider>
      </body>
    </html>
  )
}
