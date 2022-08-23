import { Col, Row, Input, Typography, Radio, Select, Tag, Image } from 'antd'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  prioritiesFilterChange,
  searchFilterChange,
  statusFilterChange,
} from '../../../redux/store/Filter/slice'
import todoImage from '../../../public/images/todo.png'

const { Search } = Input

const FiltersComponent: React.FC = () => {
  const [searchText, setSearchText] = useState<string>('')

  const dispatch = useDispatch()

  const [filterStatus, setFilterStatus] = useState<string>('All')

  const [filterPriority, setFilterPriority] = useState([])

  const handleSearchTextChange = (e) => {
    setSearchText(e.target.value)
    dispatch(searchFilterChange(e.target.value))
  }
  // console.log(searchText)

  const handleStatusChange = (e) => {
    setFilterStatus(e.target.value)
    dispatch(statusFilterChange(e.target.value))
  }

  const handlePriorityChange = (value) => {
    setFilterPriority(value)
    dispatch(prioritiesFilterChange(value))
  }

  return (
    <Row justify="center">
      <Col span={24}>
        <Image src={todoImage.src} alt="todoImage" width={180} height={150} />
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Search
        </Typography.Paragraph>
        <Search
          value={searchText}
          onChange={handleSearchTextChange}
          placeholder="input search text"
        />
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Status
        </Typography.Paragraph>
        <Radio.Group value={filterStatus} onChange={handleStatusChange}>
          <Radio value="All">All</Radio>
          <Radio value="Completed">Completed</Radio>
          <Radio value="Todo">To do</Radio>
        </Radio.Group>
      </Col>
      <Col sm={24}>
        <Typography.Paragraph style={{ fontWeight: 'bold', marginBottom: 3, marginTop: 10 }}>
          Filter By Priority
        </Typography.Paragraph>
        <Select
          value={filterPriority}
          onChange={handlePriorityChange}
          mode="multiple"
          allowClear
          placeholder="Please select"
          style={{ width: '100%' }}
        >
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
      </Col>
    </Row>
  )
}
export default FiltersComponent
