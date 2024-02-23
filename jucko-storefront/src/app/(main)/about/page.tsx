import { Metadata } from 'next'
import AboutTemplate from '@modules/policy/templates/about-template'
export const metadata: Metadata = {
  title: "About Us",
  description: "Learn About Us",
}

export default function Privacy() {
  return <AboutTemplate />
}