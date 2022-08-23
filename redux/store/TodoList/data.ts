export type todoListType = {
  id: string
  content: string
  completed: boolean
  priority: string
}

export const todoList: todoListType[] = [
  {
    id: '0',
    content: 'Learn HTML',
    completed: false,
    priority: 'High',
  },
  {
    id: '1',
    content: 'Learn CSS',
    completed: false,
    priority: 'Medium',
  },
  {
    id: '2',
    content: 'Learn JavaScript',
    completed: false,
    priority: 'Low',
  },
]
