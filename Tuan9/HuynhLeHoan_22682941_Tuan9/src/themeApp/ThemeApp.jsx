import { useDispatch, useSelector } from 'react-redux'
import { toggleTheme } from './themeSlice'

function ThemeApp() {
  const mode = useSelector((state) => state.theme.mode)
  const dispatch = useDispatch()

  const themeClass =
    mode === 'dark' ? 'bg-gray-900 text-white' : 'bg-white text-black'

  return (
    <div className={`p-6  rounded-xl shadow-md w-full max-w-md ${themeClass}`}>
      <h2 className="text-xl font-bold mb-4">Toggle Theme</h2>
      <p className="mb-4">Hiện tại: {mode === 'dark' ? '🌙 Dark' : '☀️ Light'}</p>
      <button
        className="px-4 py-2  rounded border border-2 hover:bg-amber-200 ml-20"
        onClick={() => dispatch(toggleTheme())}
      >
        Đổi Theme
      </button>
    </div>
  )
}

export default ThemeApp
