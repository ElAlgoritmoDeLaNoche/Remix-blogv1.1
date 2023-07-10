import { useLoaderData } from '@remix-run/react'
import { BasicLayout } from '~/layouts'
import { getCategories } from '~/api'

export default function Index() {

  const categories = useLoaderData()
  console.log(categories)

  return (
    <BasicLayout>
      <h1 className="text-orange-600">Welcome to Remix</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem tenetur quaerat id inventore, magnam accusantium distinctio numquam cum autem, deserunt earum rem neque sapiente illum fugiat sequi quibusdam, nobis optio.</p>
    </BasicLayout>
  );
}

export function loader() {
  return getCategories()
}