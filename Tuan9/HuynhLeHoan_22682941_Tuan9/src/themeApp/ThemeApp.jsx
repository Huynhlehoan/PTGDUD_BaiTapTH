import { useDispatch, useSelector } from 'react-redux'
import { toggleThemeAsync } from './themeSlice'

export default function ThemeToggleAsync() {
  const dispatch = useDispatch()
  const { mode, loading } = useSelector(state => state.theme)

  const handleToggle = () => {
    dispatch(toggleThemeAsync(mode))
  }

  return (
    <div className={`p-6 rounded-xl shadow-md ${mode === 'dark' ? 'bg-gray-800 text-white' : 'bg-white text-black'}`}>
      <h1 className="text-2xl font-bold mb-4">Theme Toggle (Async)</h1>
      <p>Chế độ hiện tại: <strong>{mode.toUpperCase()}</strong></p>
      <button
        onClick={handleToggle}
        className="mt-4 px-4 py-2 rounded bg-indigo-500 text-white hover:bg-indigo-600"
      >
        {loading ? 'Đang đổi theme...' : 'Chuyển Theme'}
      </button>
    </div>
  )
}
