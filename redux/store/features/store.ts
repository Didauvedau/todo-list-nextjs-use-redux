import { configureStore } from '@reduxjs/toolkit'
import slicePost from './slice'

export const store = configureStore({
  reducer: {
    posts: slicePost,
  },
})
