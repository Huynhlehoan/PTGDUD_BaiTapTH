import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './cartSlice'

const storeCartApp = configureStore({
  reducer: {
    cart: cartReducer,
  },
})

export default storeCartApp
