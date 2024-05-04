import Prueba from "@/components/prueba/Prueba";
import "./home.css"
import CartSvgC from "@/components/iconsSvg/CartSvgC";
import localFont from 'next/font/local'


const myFont = localFont({
  src: [
    {
      path:"../fonts/nimbus-black.ttf"
    }
  ]
})

export default function Home() {

  return (
    <div className="backgroundC">
      <div className="absolute flex justify-center items-center top-0 bottom-[15vh] right-0 left-0">
        <h2 className={`${myFont.className} text-[20em] animate-color-change `}>ARQ TEC</h2>
      </div>
       
    </div>
  )
}