import { Text } from "@medusajs/ui"

import Visa from "../../../common/icons/visa"
import Mastercard from "../../../common/icons/mastercard"

const PaymentsCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
         <Mastercard />
         <Visa />     
    </Text>

    
  )
}

export default PaymentsCTA
