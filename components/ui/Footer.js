"use client"
import Image from "next/image"
import Link from "next/link"

const socials = [
  {
    href: "https://web.whatsapp.com/",
    src: "/whatsapp.png",
    alt: "Logo Whatsapp",
  },
  {
    href: "https://www.facebook.com/",
    src: "/facebook.png",
    alt: "Logo Facebook",
  },
  {
    href: "https://www.instagram.com/",
    src: "/instagram.png",
    alt: "Logo Instagram",
  },
  {
    href: "https://twitter.com/",
    src: "/xcorp.png",
    alt: "Logo X corp",
  },
]

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <div className="socials-icon-container">
          {socials.map((item) => (
            <Link key={item.href} href={item.href} target="_blank">
              <Image
                className="socials-icon"
                src={item.src}
                alt={item.alt}
                width={50}
                height={50}
              />
            </Link>
          ))}
        </div>
        <p>Todos los derechos reservados - Alimentos Rocco ®</p>
      </div>
    </footer>
  )
}

export default Footer
