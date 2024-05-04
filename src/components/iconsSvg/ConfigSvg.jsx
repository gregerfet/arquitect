import Image from "next/image"
import configSvg from "../../../public/icons/config.svg"

const ConfigSvg = () => {
  return (
    <div>
        <Image src={configSvg} alt="configSvg" width={25} height={25} />
    </div>
  )
}

export default ConfigSvg