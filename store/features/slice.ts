import { createSlice } from '@reduxjs/toolkit'
import { PostType } from './data'

const PostList: PostType[] = [
  {
    id: '1',
    name: 'neko',
    content: 'Meo Meo',
  },
  {
    id: '2',
    name: 'inu',
    content: 'Gau Gau',
  },
]

const slicePost = createSlice({
  name: 'posts',
  initialState: { value: PostList },
  reducers: {
    addPost: (state, action) => {
      state.value.push(action.payload)
    },
    removePost: (state, action) => {
      state.value = state.value.filter((post) => post.id !== action.payload.id)
    },
  },
})

const { addPost, removePost } = slicePost.actions

export { addPost, removePost }

export default slicePost.reducer
