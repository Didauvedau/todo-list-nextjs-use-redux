import { createSelector } from '@reduxjs/toolkit'

export const searchTextSelector = (state) => state.filters.search

export const filterStatusSelector = (state) => state.filters.status

export const filterPrioritiesSelector = (state) => state.filters.priority

export const todoListSelector = (state) => state.todoList

// moọt selector mà phụ thuộc vào một selector khác thì vào làm thamm số của createSelector
export const todoRemainingSelector = createSelector(
  todoListSelector,
  searchTextSelector,
  filterStatusSelector,
  filterPrioritiesSelector,

  //tham số cuối là một function có có giá trị phụ thuộc vào 2 selector trước
  (todoList, searchText, status, priority) => {
    // console.log('todoList', todoList)
    // console.log('searchText', searchText)
    // console.log('status', status)
    // console.log('priority', priority)

    return todoList.filter((todo) => {
      if (status === 'All') {
        return priority.length
          ? todo.content.includes(searchText) && priority.includes(todo.priority)
          : todo.content.includes(searchText)
      }
      return (
        todo.content.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priority.length ? priority.includes(todo.priority) : true)
      )
    })
  }
)
