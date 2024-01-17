import React from 'react'
import BlogPostItem from '@theme-original/BlogPostItem'
import { useBlogPost } from '@docusaurus/theme-common/internal'
import GiscusComment from '@site/src/components/GiscusComment'

export default function BlogPostItemWrapper(props) {
  const {
    metadata: { frontMatter },
  } = useBlogPost()
  const { hide_comment = false } = frontMatter
  return (
    <>
      <BlogPostItem {...props} />
      {!hide_comment && <GiscusComment />}
    </>
  )
}
