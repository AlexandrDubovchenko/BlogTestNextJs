import { Post } from '../../interfaces';
import axios from 'axios';
import { AnyAction, Dispatch, ActionCreator } from 'redux'
import { ThunkAction } from 'redux-thunk';
import { State } from '../../interfaces';


export const SET_POSTS: string = "SET_POSTS"
export const SET_POST: string = "SET_POST"

const setPosts = (posts: Array<Post>): AnyAction => ({ type: SET_POSTS, posts })
const setPost = (post: Post): AnyAction => ({ type: SET_POST, post })

export const fetchPostsAC: ActionCreator<ThunkAction<Promise<void>, State, unknown, AnyAction>> = () => async (dispatch: Dispatch): Promise<void> => {
  const postsJson = await axios("https://simple-blog-api.crew.red/posts");
  const posts: Post[] = await postsJson.data;
  dispatch(setPosts(posts.sort((a: Post, b: Post) => b.id - a.id)));
}
export const sendPostsAC: ActionCreator<ThunkAction<Promise<void>, State, unknown, AnyAction>> = (title, body) => async (dispatch: Dispatch): Promise<void> => {
  const postJson = await axios.post("https://simple-blog-api.crew.red/posts", {
    title, body
  })
  const post: Post = await postJson.data;
  dispatch(setPost(post));
}
