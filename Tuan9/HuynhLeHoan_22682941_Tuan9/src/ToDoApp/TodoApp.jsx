import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, toggleTodo, removeTodo } from './todoSlice'

function TodoApp() {
  const todos = useSelector((state) => state.todos)
  const dispatch = useDispatch()
  const [text, setText] = useState('')

  const handleAdd = () => {
    if (text.trim() !== '') {
      dispatch(addTodo(text))
      setText('')
    }
  }

  return (
    <div className="p-6 rounded-xl bg-pink-300 shadow-md w-full max-w-md mt-10">
      <h2 className="text-xl font-bold mb-4">To-Do List</h2>
      <div className="flex gap-2 mb-4">
        <input
          className="flex-grow bg-white border border-gray-300 rounded px-3 py-2"
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Nhập công việc..."
        />
        <button
          className="text-red px-4 py-2 rounded hover:bg-green-600"
          onClick={handleAdd}
        >
          Thêm
        </button>
      </div>
      <ul>
        {todos.map((todo) => (
          <li
            key={todo.id}
            className="flex justify-between items-center py-5 border-b"
          >
            <span
              onClick={() => dispatch(toggleTodo(todo.id))}
              className={`cursor-pointer ${
                todo.completed ? 'line-through text-gray-400 bg-white' : ''
              }`}
            >
              {todo.text}
            </span>
            <button
              className="text-red-500 hover:text-red-700"
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

export default TodoApp
