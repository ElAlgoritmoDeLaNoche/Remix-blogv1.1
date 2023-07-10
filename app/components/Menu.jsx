import React, { useState } from 'react'
import { Link } from '@remix-run/react'
import { ButtonPrimary, Modal } from '~/components/shared'
import AddCategoryForm from '~/routes/form/add-category-form'

export function Menu() {

  const [show, setShow] = useState(false)
  const [modalContent, setModalContent] = useState(null)

  const onOpenClodeModal = () => setShow((prevState) => !prevState)

  const addPost = () => {
    setModalContent(<p>Add post form</p>)
    onOpenClodeModal()
  }

  const addCategory = () => {
    setModalContent(<AddCategoryForm />)
    onOpenClodeModal()
  }

  return (
    <>
      <div className="bg-stone-800 flex items-center justify-between py-5 px-10">
        <Link to='/'>
          <h1 className='text-white text 2xl'>DevBlog</h1>
        </Link>

        <div>
          <ButtonPrimary onClick={addPost} className='bg-red-500'>Crear Post</ButtonPrimary>
          <ButtonPrimary onClick={addCategory}>Crear Categoría</ButtonPrimary>
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