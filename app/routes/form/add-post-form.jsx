import { Form } from '@remix-run/react'
import { ButtonPrimary, Input, Textarea } from '~/components/shared'

export default function AddPostForm() {
  return (
    <Form
      method="POST"
      action="/form/add-category-form"
      className="flex flex-col"
    >
      <Input name="title" placeholder="Titulo" className="my-2" />
      <Input name="description" placeholder="Descripción" />
      <Input name="slug" placeholder="Slug" />

      {/* <Input name="category" value={category} /> */}

      <Textarea name="content" placeholder="Contenido del post" rows="6" />

      <ButtonPrimary type='submit' className='mt-3 bg-slate-500'>
        Crear Post
      </ButtonPrimary>
    </Form>
  )
}
