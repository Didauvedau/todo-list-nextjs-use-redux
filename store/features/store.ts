import { configureStore } from '@reduxjs/toolkit'
import slicePost from '../features/slice'

export const store = configureStore({
  reducer: {
    posts: slicePost,
  },
})
