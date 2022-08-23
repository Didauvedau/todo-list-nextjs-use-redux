import React from 'react'
import { Typography, Divider } from 'antd'
import TodoListComponent from '../../components/pages/TodoList'
import FiltersComponent from '../../components/pages/Filter'

const Todo = () => {
  return (
    <div
      style={{
        margin: '0 auto',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: 'white',
        padding: 20,
        boxShadow: '0 0 10px 4px #bfbfbf',
        borderRadius: 5,
        height: '90vh',
      }}
      className="container todo-list"
    >
      <FiltersComponent />
      <Divider />
      <TodoListComponent />
    </div>
  )
}

export default Todo
