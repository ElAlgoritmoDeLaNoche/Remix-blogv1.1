import path from 'path'
import fs from 'fs/promises'

const categoriesPath = path.join(__dirname, '..', 'db/categories')

export async function createCategory(data) {

  const postPath = path.join('__dirname', '..', `db/posts/${data.slug}`)

  const md = `___
  title: ${data.title}
  slug: ${data.slug}
___
  `

  const pathSaveFile = path.join(categoriesPath, `${data.slug}.md`)

  await fs.writeFile(pathSaveFile, md)
  await fs.mkdir(postPath)
}