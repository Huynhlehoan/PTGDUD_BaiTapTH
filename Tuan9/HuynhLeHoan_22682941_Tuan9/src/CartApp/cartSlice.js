import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

// Giả lập gọi API lấy danh sách sản phẩm
export const fetchProducts = createAsyncThunk(
  'cart/fetchProducts',
  async () => {
    await new Promise(resolve => setTimeout(resolve, 1000))
    return [
      { id: 'A', name: 'Sản phẩm A', price: 100 },
      { id: 'B', name: 'Sản phẩm B', price: 200 }
    ]
  }
)

const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cartItems: [],
    products: [],
    loading: false
  },
  reducers: {
    addItem: (state, action) => {
      const item = state.cartItems.find(i => i.id === action.payload.id)
      if (item) {
        item.quantity += 1
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 })
      }
    },
    removeItem: (state, action) => {
      state.cartItems = state.cartItems.filter(i => i.id !== action.payload)
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload
      const item = state.cartItems.find((i) => i.id === id)
      if (item) {
        item.quantity = quantity
      }
    }
  }
  ,
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.products = action.payload
        state.loading = false
      })
      .addCase(fetchProducts.rejected, (state) => {
        state.loading = false
      })
  }
})

export const { addItem, removeItem, updateQuantity } = cartSlice.actions
export default cartSlice.reducer
