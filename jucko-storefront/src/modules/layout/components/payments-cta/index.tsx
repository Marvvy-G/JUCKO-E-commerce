import { Text } from "@medusajs/ui"

import Visa from "../../../common/icons/visa"
import Mastercard from "../../../common/icons/mastercard"
import Paypal from "../../../common/icons/paypal"
import Stripe from "../../../common/icons/stripe"
import Flutterwave from "../../../common/icons/flutterwave"

const PaymentsCTA = () => {
  return (
    <Text className="flex gap-x-2 txt-compact-small-plus items-center">
         <Paypal />
         <Mastercard />
         <Visa />
         <Stripe />
         <Flutterwave />
    </Text>

    
  )
}

export default PaymentsCTA
