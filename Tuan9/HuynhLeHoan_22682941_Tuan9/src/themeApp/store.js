import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'

const storeThemeApp = configureStore({
  reducer: {
    theme: themeReducer,
  },
})

export default storeThemeApp
