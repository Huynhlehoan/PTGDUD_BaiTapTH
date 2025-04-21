import { configureStore } from '@reduxjs/toolkit';
import counterReducer from './counterSlice';

// Tạo store
export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
