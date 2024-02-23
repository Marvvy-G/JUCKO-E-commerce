import { Metadata } from 'next'
import ShippingDeliveryTemplate from '@modules/policy/templates/shipping-and-delivery'
export const metadata: Metadata = {
  title: "Shipping And Delivery",
  description: "Shipping and delivery",
}

export default function Shippinganddelivery() {
  return <ShippingDeliveryTemplate />
}