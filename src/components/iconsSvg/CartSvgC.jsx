import Image from "next/image"
import cartIcon from "../../../public/icons/cart.svg"

const CartSvgC = () => {
  return (
    
        <Image className="m-0 p-0" src={cartIcon} alt="cartIcon" width={25} height={25} />
    
  )
}

export default CartSvgC