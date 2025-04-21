import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const toggleThemeAsync = createAsyncThunk(
  'theme/toggleAsync',
  async (currentTheme) => {
    await new Promise(resolve => setTimeout(resolve, 1000)) 
    return currentTheme === 'light' ? 'dark' : 'light'
  }
)

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: 'light',
    loading: false
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(toggleThemeAsync.pending, (state) => {
        state.loading = true
      })
      .addCase(toggleThemeAsync.fulfilled, (state, action) => {
        state.mode = action.payload
        state.loading = false
      })
      .addCase(toggleThemeAsync.rejected, (state) => {
        state.loading = false
      })
  }
})

export default themeSlice.reducer
