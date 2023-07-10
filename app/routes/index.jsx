import { useLoaderData } from '@remix-run/react'
import { map } from 'lodash'
import { BasicLayout } from '~/layouts'
import { CategoryItem } from '~/components'
import { getCategories } from '~/api'

export default function Index() {

  const categories = useLoaderData()
  // console.log(categories)

  return (
    <BasicLayout>
      <div className='grid grid-cols-4 gap-4 mt-10'>
        {map(categories, (category, index) => (
          <CategoryItem key={index} category={category} />
        ))}
      </div>
    </BasicLayout>
  );
}

export function loader() {
  return getCategories()
}