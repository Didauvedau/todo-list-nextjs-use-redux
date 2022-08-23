import { configureStore } from '@reduxjs/toolkit'
import sliceCounter from './slice'

export const store = configureStore({
  reducer: {
    counter: sliceCounter,
  },
})
