import * as React from 'react'
import ListItem from './ListItem'
import { Post } from '../interfaces'
import { StyledList, StyledListItem } from './StyledComponents'

type Props = {
  posts: Post[]
}

const List = ({ posts }: Props) => (
  <StyledList>
    {posts.map((post) => (
      <StyledListItem key={post.id}>
        <ListItem post={post} />
      </StyledListItem>
    ))}
  </StyledList>
)

export default List
