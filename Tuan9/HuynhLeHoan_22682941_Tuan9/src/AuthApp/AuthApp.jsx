import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginAsync, logout } from './authSlice'

export default function AuthAsync() {
  const dispatch = useDispatch()
  const { user, isLoggedIn, loading, error } = useSelector(state => state.auth)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = () => {
    dispatch(loginAsync({ username, password }))
  }

  return (
    <div className="p-6 rounded-xl shadow-md bg-red-100 w-[400px] mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">🔐 Đăng nhập (Async)</h1>

      {isLoggedIn ? (
        <div>
          <p className="mb-2">Xin chào, <strong>{user.name}</strong>!</p>
          <button
            onClick={() => dispatch(logout())}
            className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
          >
            Đăng xuất
          </button>
        </div>
      ) : (
        <div className="space-y-3">
          <input
            className="w-full border px-3 py-2 rounded bg-white"
            placeholder="Tên đăng nhập"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
          <input
            className="w-full border px-3 py-2 rounded bg-white"
            placeholder="Mật khẩu"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          {error && <p className="text-red-500 text-sm">{error}</p>}
          <button
            onClick={handleLogin}
            className="w-full px-4 py-2 bg-red-300 text-white rounded hover:bg-red-400"
            disabled={loading}
          >
            {loading ? 'Đang đăng nhập...' : 'Đăng nhập'}
          </button>
        </div>
      )}
    </div>
  )
}
