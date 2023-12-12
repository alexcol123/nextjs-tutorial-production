'use client'
import Link from 'next/link'
import { useState } from 'react'

const ClientPage = () => {
  const [count, setcount] = useState(0)
  // console.log('client component')

  return (
    <div>
      <h1 className='text-7xl font-bold mb-4'>{count}</h1>

      <button
        onClick={() => setcount((count +1))}
        className='btn btn-primary'
      >
        increase
      </button>
    </div>
  )
}

export default ClientPage
