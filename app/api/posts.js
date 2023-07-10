import path from 'path'
import fs from 'fs/promises'
import fm from 'front-matter'
import { map } from 'lodash'

export async function createPost(post, category) {

  const postPath = path.join(__dirname, '..', `db/posts/${category}`)

  const md = `---
title: ${post.title}
description: ${post.description}
miniature: ${category}.png
slug: ${post.slug}
---

${post.content}
`

  const pathSaveFile = path.join(postPath, `${post.slug}.md`)
  await fs.writeFile(pathSaveFile, md)
}