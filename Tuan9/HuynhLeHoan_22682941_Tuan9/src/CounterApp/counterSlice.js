import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const incrementAsync = createAsyncThunk(
  'counter/incrementAsync',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return 1
  }
)

const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    value: 0,
    loading: false,
  },
  reducers: {
    decrement: (state) => {
      state.value -= 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(incrementAsync.pending, (state) => {
        state.loading = true
      })
      .addCase(incrementAsync.fulfilled, (state, action) => {
        state.value += action.payload
        state.loading = false
      })
  }
})

export const { decrement } = counterSlice.actions
export default counterSlice.reducer
