import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const loginAsync = createAsyncThunk(
  'auth/login',
  async ({ username, password }) => {
    await new Promise(resolve => setTimeout(resolve, 1000)) 

    
    if (username === 'lehoan' && password === '123') {
      return { username: 'lehoan', name: 'Hello Le Hoan' }
    } else {
      throw new Error('Sai tài khoản hoặc mật khẩu')
    }
  }
)

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    isLoggedIn: false,
    loading: false,
    error: null
  },
  reducers: {
    logout: (state) => {
      state.user = null
      state.isLoggedIn = false
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginAsync.pending, (state) => {
        state.loading = true
        state.error = null
      })
      .addCase(loginAsync.fulfilled, (state, action) => {
        state.user = action.payload
        state.isLoggedIn = true
        state.loading = false
      })
      .addCase(loginAsync.rejected, (state, action) => {
        state.loading = false
        state.error = action.error.message
      })
  }
})

export const { logout } = authSlice.actions
export default authSlice.reducer
