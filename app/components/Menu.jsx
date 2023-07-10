import React, { useState } from 'react'
import { Link, useParams } from '@remix-run/react'
import { ButtonPrimary, Modal } from '~/components/shared'
import AddCategoryForm from '~/routes/form/add-category-form'
import AddPostForm from '~/routes/form/add-post-form'

export function Menu() {

  const { category } = useParams()
  const [show, setShow] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const onOpenClodeModal = () => setShow((prevState) => !prevState)

  const addPost = () => {
    setModalContent(<AddPostForm />)
    onOpenClodeModal()
  }

  const addCategory = () => {
    setModalContent(<AddCategoryForm />)
    onOpenClodeModal()
  }

  return (
    <>
      <div className="bg-stone-800 flex items-center justify-between py-5 px-10">
        <div />
        <Link to='/'>
          <h1 className='text-white text 2xl'>DevBlog</h1>
        </Link>

        <div>
          {category ? (
            <ButtonPrimary onClick={addPost} className='bg-red-500'>Crear Post</ButtonPrimary>
          ) : (
            <ButtonPrimary onClick={addCategory} className='bg-slate-500'>Crear Categoría</ButtonPrimary>
          )}
        </div>
      </div>

      <Modal
        show={show}
        close={onOpenClodeModal}
        children={modalContent}
      />
    </>
  )
}