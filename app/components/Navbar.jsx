import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  const links = [
    { href: '/client', label: 'client' },
    { href: '/drinks', label: 'drinks' },
    { href: '/prisma-example', label: 'prisma' },
    { href: '/tasks', label: 'tasks' },
  ]

  return (
    <div className='bg-base-300 py-4'>
      <div className='navbar px-8 max-w-6xl mx-auto flex-col sm:flex-row'>
        <Link href='/' className='btn btn-primary'>
          Home
        </Link>
        <ul className='menu menu-horizontal md:ml-8'>
          {links.map((link) => (
            <li key={link.label}>
              <Link className='capitalize' href={link.href}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Navbar
