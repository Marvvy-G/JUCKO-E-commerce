import { Metadata } from 'next'
import { ReturnsRefundsTemplate } from '@modules/policy/templates/returns-and-refunds'
export const metadata: Metadata = {
  title: "Returns and Refunds",
  description: "Returns and Refunds",
}

export default function Returnsandrefunds() {
  return <ReturnsRefundsTemplate />
}