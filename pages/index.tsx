import Layout from '../components/Layout'
import List from '../components/List'
import { useSelector } from 'react-redux';
import { Post, State } from '../interfaces';

const HomePage = () => {
  const posts: Post[] = useSelector<State, Post[]>((state): Post[] => state.posts);
  return (
    <Layout title="Blog | Main Page">
      <h1>Posts List</h1>
      <List posts={posts} />
    </Layout>
  )
}

export default HomePage
