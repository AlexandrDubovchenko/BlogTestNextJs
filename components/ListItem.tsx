import React from 'react'
import Link from 'next/link'

import { Post } from '../interfaces'
import { Description, CardTitle, StyledLink } from './StyledComponents'

type Props = {
  post: Post
}

const ListItem = ({ post }: Props) => (
  <Link href="/[id]" as={`/${post.id}`}>
    <StyledLink>
      <CardTitle>{post.title}</CardTitle>
      <Description>
        {post.body}
      </Description>
    </StyledLink>
  </Link>
)

export default ListItem
