import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './todoSlice'

export const storeToDoApp = configureStore({
  reducer: {
    todos: todoReducer,
  },
})
