import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { login, logout } from './authSlice'

function AuthApp() {
  const dispatch = useDispatch()
  const { user, isLoggedIn } = useSelector((state) => state.auth)

  const [username, setUsername] = useState('')

  const handleLogin = () => {
    if (username.trim()) {
      dispatch(login({ username }))
      setUsername('')
    }
  }

  const handleLogout = () => {
    dispatch(logout())
  }

  return (
    <div className="p-6 rounded-xl shadow-md bg-white border border-2 max-w-md w-full">
      <h2 className="text-xl font-bold mb-4">Đăng Nhập 🔐</h2>

      {!isLoggedIn ? (
        <div className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Nhập tên đăng nhập..."
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="border px-3 py-2 rounded"
          />
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
            onClick={handleLogin}
          >
            Đăng nhập
          </button>
        </div>
      ) : (
        <div className="flex flex-col gap-4 items-start">
          <p className="text-lg">👋 Xin chào, <strong>{user.username}</strong>!</p>
          <button
            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            onClick={handleLogout}
          >
            Đăng xuất
          </button>
        </div>
      )}
    </div>
  )
}

export default AuthApp
