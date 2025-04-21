import { configureStore } from '@reduxjs/toolkit'
import authReducer from './authSlice'

const storeAuthApp = configureStore({
  reducer: {
    auth: authReducer,
  },
})

export default storeAuthApp
