import { AnyAction } from "redux";
import { State } from "../../interfaces";
import { SET_POST, SET_POSTS } from "../actions/post-actions";


export const reducer = (state: State = { posts: [] }, action: AnyAction) => {
  switch (action.type) {
    case SET_POSTS:
      return { ...state, posts: action.posts };
    case SET_POST:
      return { ...state, posts: [action.post, ...state.posts] };
    default:
      return state;
  }
};
