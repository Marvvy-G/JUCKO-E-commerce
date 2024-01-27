import { Text } from "@medusajs/ui"

import Instagram from "../../../common/icons/instagram"
import Facebook from "../../../common/icons/facebook"
import Whatsapp from "../../../common/icons/whatsapp"

const SocialsCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
        <a href="https://www.instagram.com/mar.vie_gram/" target="_blank" rel="noreferrer">
         <Instagram fill="#C13584" className="fill-[#C13584]" />
        </a>
        <a href="https://web.facebook.com/mervertboutique/?_rdc=1&_rdr" target="_blank" rel="noreferrer">
         <Facebook />
        </a>
        <a href="https://wa.me/2348037210361/" target="_blank" rel="noreferrer">
         <Whatsapp fill="#5BD066" />
        </a>
       
    </Text>

    
  )
}

export default SocialsCTA
