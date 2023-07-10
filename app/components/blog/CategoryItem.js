import { Link } from "@remix-run/react"

export function CategoryItem(props) {
  const { category } = props
  // console.log(category)

  return (
    <Link to={`/${category.slug}`}>
      <div className='bg-gray-600 rounded-md'>
        <h2 className='text-white text-center py-2 font-bold'>{category.title}</h2>
      </div>
    </Link>
  )
}