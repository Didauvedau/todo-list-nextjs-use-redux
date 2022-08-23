import { createSlice } from '@reduxjs/toolkit'
import { CountType } from './model'

const initialState: CountType = {
  value: 0,
}
const sliceCounter = createSlice({
  name: 'counter',
  initialState: initialState,
  reducers: {
    increment: (state) => {
      //mutation 
      state.value++
    }, //tự tạo ra một action creator => {type: 'counter/increment'}
    decrement: (state) => {
      state.value--
    },
    resetCount: (state) => {
      state.value = 0
    },
    amountAction: (state, action) => {
      state.value += action.payload
    },
  },
})

const { increment, decrement, resetCount, amountAction } = sliceCounter.actions

export { increment, decrement, resetCount, amountAction }

export default sliceCounter.reducer
