import Link from 'next/link'
import React from 'react'

export default function FooterLink({li,link}) {
  return (
   <li>
   <Link href={link}>{li}</Link>
   </li>
  )
}
