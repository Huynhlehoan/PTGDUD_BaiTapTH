import { useState, useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { fetchTodos, toggleTodo, removeTodo } from './todoSlice'

export default function ToDoAppAsync() {
  const dispatch = useDispatch()
  const { todos, loading } = useSelector((state) => state.todos)
  const [text, setText] = useState('')
  useEffect(() => {
    dispatch(fetchTodos())
  }, [dispatch])
  const handleAdd = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text))
      setText('')
    }
  }
  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-xl shadow-md bg-pink-300 mt-10">
      <h1 className="text-2xl font-bold">To-do App (Async)</h1>
      <div className='flex items-center gap-4'> <input
          className="flex-grow bg-white border border-gray-300 rounded px-3 py-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nhập công việc..."
        />
        <button
          className="text-red px-4 py-2 rounded bg-pink-500 hover:bg-gray-300"
          onClick={handleAdd}
        >Thêm
        </button></div>
     
      {loading && <p className="text-gray-500">Đang tải danh sách...</p>}

      <ul className="w-full max-w-md">
        {todos.map(todo => (
          <li
            key={todo.id}
            className={`flex justify-between items-center p-2 border-b ${
              todo.completed ? 'line-through text-gray-500' : ''
            }`}
          >
            <span onClick={() => dispatch(toggleTodo(todo.id))} className="cursor-pointer">
              {todo.title}
            </span>
            <button
              className="text-red-500 border border-2 rounded-2xl px-2 py-1.5 hover:underline"
              onClick={() => dispatch(removeTodo(todo.id))}
            >
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
