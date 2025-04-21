import { useDispatch, useSelector } from 'react-redux'

import { incrementAsync, decrement } from './counterSlice'

export default function CounterAppAsync() {
  const dispatch = useDispatch()

  const { value, loading } = useSelector((state) => state.counter)

  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-xl shadow-md bg-blue-300">
      <h1 className="text-2xl font-bold">Counter Async</h1>
      <p className="text-xl">{value}</p>
      {loading && <p className="text-gray-500">Đang tăng...</p>}
      <div className="flex gap-4">
        <button
          className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
          onClick={() => dispatch(incrementAsync())}
        >
          Tăng sau 1 giây
        </button>
        <button
          className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
          onClick={() => dispatch(decrement())}
        >
          Giảm ngay
        </button>
      </div>
    </div>
  )
}
