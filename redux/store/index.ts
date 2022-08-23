import { configureStore } from '@reduxjs/toolkit'
import sliceCounter from './Count/slice'
import slicePost from './features/slice'
import todoListSlice from './TodoList/slice'
import filterSlice from './Filter/slice'

const store = configureStore({
  reducer: {
    counter: sliceCounter,
    posts: slicePost,
    todoList: todoListSlice,
    filters: filterSlice,
  },
})

export default store
