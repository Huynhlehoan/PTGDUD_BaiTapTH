import { createSlice } from '@reduxjs/toolkit';

// Tạo slice cho counter
const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 }, // Giá trị ban đầu
  reducers: {
    increment: (state) => {
      state.value += 1; // Tăng 1
    },
    decrement: (state) => {
      state.value -= 1; // Giảm 1
    },
  },
});

// Export các action và reducer
export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
