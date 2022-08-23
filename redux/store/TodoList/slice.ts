import { todoList } from './data'

import { createSlice } from '@reduxjs/toolkit'

const initialState = todoList

const todoListSlice = createSlice({
  name: 'todoList',
  initialState: Object.values(initialState),
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload)
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => {
        if (todo.id === action.payload) {
          return todo
        }
      })

      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed
      }
    },
  },
})

const { addTodo, toggleTodoStatus } = todoListSlice.actions

export { addTodo, toggleTodoStatus }

export default todoListSlice.reducer
