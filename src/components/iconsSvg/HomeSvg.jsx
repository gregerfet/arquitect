import Image from "next/image"
import homeSvg from "@/../../public/icons/home.svg"
import Link from "next/link"


const HomeSvg = () => {
  return (
    <Link href="/" className="flex justify-center w-28 pr-8">
        <Image src={homeSvg} width={100} height={100} alt="homeSvg" />
    </Link>
  )
}

export default HomeSvg