'use client'

import { usePathname } from 'next/navigation'
import Link from 'next/link'
import '@/styles/navigation.scss'

type Props = {
  href: string
  name: string
}

export default function CustomLink({ href, name }: Props) {
  const pathname = usePathname()
  return (
    <Link className={`link ${pathname === href ? 'active' : ''}`} href={href}>
      {name}
    </Link>
  )
}
