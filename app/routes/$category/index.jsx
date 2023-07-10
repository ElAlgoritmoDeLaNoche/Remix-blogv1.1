import { useLoaderData } from '@remix-run/react'
import { BasicLayout } from '~/layouts'

export default function Category() {

  const { category } = useLoaderData()

  return (
    <BasicLayout>
      <p>Hola estamos en {category}</p>
    </BasicLayout>
  )
}

export async function loader(data) {
  const { params } = data
  return {
    category: params.category
  }
}