import { Metadata } from 'next'
import FaqTemplate from '@modules/policy/templates/faq-template'
export const metadata: Metadata = {
  title: "FAQ",
  description: "Frequently Asked Questions",
}

export default function Privacy() {
  return <FaqTemplate />
}