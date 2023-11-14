import type { UserResouce } from "./user.type";


export type PostResource = {
  id: number,
  title: string,
  type: string,
  content: string,
  author: Pick<UserResouce, 'id' | 'name'>,
  liked: boolean,
  likes: number,
  comments: []
}