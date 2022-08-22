import { combineReducers } from 'redux'
import sliceCounter from './Count/slice'
import slicePost from './features/slice'

const reducer = combineReducers({
  counter: sliceCounter,
  posts: slicePost,
})

export type RootState = ReturnType<typeof reducer>
