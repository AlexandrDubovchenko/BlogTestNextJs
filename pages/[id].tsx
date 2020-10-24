import { useRouter } from 'next/router'
import { Post, State } from '../interfaces'
import Layout from '../components/Layout'
import PostComponent from '../components/Post'
import { useSelector } from 'react-redux'

const PostPage = () => {
  const router = useRouter()
  const { id } = router.query
  const post = useSelector<State, Post | undefined>(state => {
    const posts = [...state.posts];
    return posts.find(post => post.id === +id)
  })
  return (
    <Layout
      title={`${post ? post.title : 'Post Title'
        } | Blog Test Task`}
    >
      <>
        {post && <PostComponent post={post} />}
      </>
    </Layout>
  )
}

export default PostPage

