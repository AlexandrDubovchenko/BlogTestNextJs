// You can include shared interfaces/types in a separate file
// and then use them in any component by importing them. For
// example, to import the interface below do:
//
export type Post = {
  id: number,
  title: string,
  body: string,
  data?: {
    title: string,
    body: string,
  }
}
export interface State {
  posts: Array<Post>;
}
