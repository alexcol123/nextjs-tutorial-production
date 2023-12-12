import Image from 'next/image'
import Link from 'next/link'

//  Smilga source   https://github.com/john-smilga/nextjs-course-openai/blob/main/02-gptgenius/README.md
export default function HomePage() {
  // console.log('HomePage 1')
  return (
    <div className=''>
      <h1 className='text-5xl mb-8 font-bold'>Next.js Tutorial</h1>

        <Link className='btn btn-accent w-fit' href='/client'>
          Get Started
        </Link>
    
    </div>
  )
}
