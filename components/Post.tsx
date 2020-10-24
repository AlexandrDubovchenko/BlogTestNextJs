import * as React from 'react'

import { Post } from '../interfaces'
import { PostBody, Title, Wrapper } from './StyledComponents'

type PostComponentProps = {
  post: Post
}

const PostComponent = ({ post }: PostComponentProps) => (
  <Wrapper>
    <Title>{post.title}</Title>
    <PostBody>{post.body}</PostBody>
  </Wrapper>
)

export default PostComponent
