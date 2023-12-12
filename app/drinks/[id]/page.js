import Link from 'next/link'
import drinkImg from './drink.jpg'
import Image from 'next/image'
const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

console.log(drinkImg)
const getSingleDrink = async (id) => {
  const res = await fetch(`${url}${id}`)

  if (!res.ok) {
    throw new Error('Failed to fetch a drink...')
  }
  return res.json()
}

const SingleDrinkPage = async ({ params }) => {
  const data = await getSingleDrink(params.id)
  const title = data?.drinks[0]?.strDrink
  const imgSrc = data?.drinks[0]?.strDrinkThumb

  // console.log(imgSrc)

  // console.log('Response ===========>>>')
  // console.log(title)
  // console.log(imgSrc)
  return <div>
    <Link  href='/drinks' className='btn btn-primary mt-8 mb-12' >
    Back to Drinks</Link>
    {/* Local Image */}
  {/* <Image src={drinkImg} className='w-80 h-auto rounded-lg' alt='drink' /> */}

  <Image src={imgSrc} height={200} width={200}  priority alt={title}  className='w-48 h-48 rounded-lg shadow-lg mb-8'/>
    <h1 className="text-4xl mb-8">{title}</h1>
  </div>
}

export default SingleDrinkPage
