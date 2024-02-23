import { Metadata } from 'next'
import PrivacyTemplate from '@modules/policy/templates/privacy-template'
export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Explore all of our products.",
}

export default function Privacy() {
  return <PrivacyTemplate />
}