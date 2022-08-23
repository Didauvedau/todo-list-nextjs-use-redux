import { Col, Row, Input, Button, Select, Tag } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { v4 as uuidv4 } from 'uuid'
import { useState } from 'react'
import { addTodo } from '../../../redux/store/TodoList/slice'
import TodoComponent from '../../base/Todo'
import { todoRemainingSelector } from '../../../redux/selector/selectors'

const TodoListComponent: React.FC = () => {
  const dispatch = useDispatch()

  const [nameTodo, setNameTodo] = useState('')

  const [priorityTodo, setPriorityTodo] = useState('Medium')

  const todoList = useSelector(todoRemainingSelector)
  
  const handleChangeNameTodo = (e) => {
    setNameTodo(e.target.value)
  }

  const handleChangePriorityTodo = (value) => {
    setPriorityTodo(value)
  }

  const handleAddButtonClick = () => {
    //dispatch de ban di 1 function
    dispatch(
      addTodo({
        id: uuidv4(),
        content: nameTodo,
        priority: priorityTodo,
        completed: false,
      })
    )

    setNameTodo('')
    setPriorityTodo('Medium')
  }

  // console.log('name: ', nameTodo)

  // console.log('priority: ', priorityTodo)

  return (
    <Row style={{ height: 'calc(100% - 40px)' }}>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo) => (
          <TodoComponent
            key={todo.id}
            id={todo.id}
            name={todo.content}
            priority={todo.priority}
            completed={todo.completed}
          />
        ))}
      </Col>
      <Col span={24}>
        <Input.Group style={{ display: 'flex' }} compact>
          <Input value={nameTodo} onChange={handleChangeNameTodo} />
          <Select defaultValue="Medium" value={priorityTodo} onChange={handleChangePriorityTodo}>
            <Select.Option value="High" label="High">
              <Tag color="red">High</Tag>
            </Select.Option>
            <Select.Option value="Medium" label="Medium">
              <Tag color="blue">Medium</Tag>
            </Select.Option>
            <Select.Option value="Low" label="Low">
              <Tag color="gray">Low</Tag>
            </Select.Option>
          </Select>
          <Button type="primary" onClick={handleAddButtonClick}>
            Add
          </Button>
        </Input.Group>
      </Col>
    </Row>
  )
}

export default TodoListComponent
