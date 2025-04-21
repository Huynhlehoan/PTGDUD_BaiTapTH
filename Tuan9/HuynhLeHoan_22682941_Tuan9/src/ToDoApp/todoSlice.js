import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchTodos = createAsyncThunk(
  'todos/fetchTodos',
  async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
    const data = await res.json()
    return data
  }
)

const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    todos: [],
    loading: false,
  },
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: nextId++,
        text: action.payload,
        completed: false,
      })
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find(t => t.id === action.payload)
      if (todo) {
        todo.completed = !todo.completed
      }
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(t => t.id !== action.payload)
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state) => {
        state.loading = true
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.todos = action.payload
        state.loading = false
      })
      .addCase(fetchTodos.rejected, (state) => {
        state.loading = false
      })
  }
})

export const { toggleTodo, removeTodo } = todoSlice.actions
export default todoSlice.reducer
