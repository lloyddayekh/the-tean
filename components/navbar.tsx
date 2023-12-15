import Link from 'next/link'
import CustomLink from './custom-link'

export default function Navbar() {
  return (
    <nav className='p-5 flex gap-5 items-center border-b'>
      <CustomLink href={'/'} name='Home' />
      <CustomLink href={'/page-one'} name='Page One'></CustomLink>
    </nav>
  )
}
