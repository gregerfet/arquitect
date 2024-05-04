'use client'

import Link from "next/link"
import CartSvgC from "../iconsSvg/CartSvgC"
import ConfigSvg from "../iconsSvg/ConfigSvg"
import { usePathname } from "next/navigation"
import HomeSvg from "../iconsSvg/HomeSvg"


const links = [
    
    {
        title: "Arquitect",
        href: "/arquitect",
    },
    {
        title: "Proyectos",
        href: "/proyectos",
    },
    {
        title: "Contacto",
        href: "/contacto",
    },
    
    {
        title:<CartSvgC />,
        href: "/cart",
    },
    {
        title: <ConfigSvg />,
        href: "/config",
    },
    {
        title: "Usuario",
        href: "/usuario",
    },
    
]

const Header = () => {
   const pathName = usePathname()
  return (
    <div className="flex absolute z-10 bg-white backdrop-blur-md bg-opacity-20 justify-between w-[70%] rounded-full mt-14 ml-[12%] px-3 items-center">
    
    <div className="ml-10">
        <HomeSvg />
    </div>
    <div className="w-fit flex gap-4 items-center">
       {links.map( link => (
        <li className="w-fit " key={link.title}>
            <div >
            <Link className={`text-white p-2 hover:font-bold transition-font-bold duration-300 ${pathName === link.href ? "bg-yellow-300" : ""}`} href={link.href} >
                {link.title}
            </Link>
            </div>

            <div className="flex justify-center items-center p-0 bg-yellow-300">
            <Link className="flex justify-center" href={link.href}>
                {link.href === <CartSvgC /> && <ConfigSvg /> } 
            </Link>
            </div>

            <Link href={link.href}>
                {link.title === "Usuario"}
            </Link>
        </li>
        
       ))}
       {/* <div className="flex">
        <CartSvgC />
        <ConfigSvg />
       </div> */}

    </div>

    </div>
    
  )
}

export default Header