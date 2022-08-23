import { configureStore } from '@reduxjs/toolkit'
import sliceCounter from './Count/slice'
import slicePost from './features/slice'

const store = configureStore({
  reducer: {
    counter: sliceCounter,
    posts: slicePost,
  },
})

export default store
