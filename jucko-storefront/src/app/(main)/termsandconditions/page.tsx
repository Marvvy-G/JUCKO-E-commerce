
import { Metadata } from 'next'
import TermsAndConditionsTemplate from '@modules/policy/templates/terms-and-conditions'
export const metadata: Metadata = {
  title: "Terms and Conditions",
  description: "Read Terms and Conditions",
}

export default function Termsandconditions() {
  return <TermsAndConditionsTemplate />
}