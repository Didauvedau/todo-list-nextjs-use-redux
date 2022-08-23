import { filters } from './data'
import { createSlice } from '@reduxjs/toolkit'

const initialState = filters

const filterSlice = createSlice({
  name: 'filters',
  initialState: initialState,
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload
    }, // => tu dong tao mot action {type: 'filters/searchFilterChange'}
    statusFilterChange: (state, action) => {
      state.status = action.payload
    },
    prioritiesFilterChange: (state, action) => {
      state.priority = action.payload
    },
  },
})

const { searchFilterChange, statusFilterChange, prioritiesFilterChange } = filterSlice.actions

export { searchFilterChange, statusFilterChange, prioritiesFilterChange }

export default filterSlice.reducer
