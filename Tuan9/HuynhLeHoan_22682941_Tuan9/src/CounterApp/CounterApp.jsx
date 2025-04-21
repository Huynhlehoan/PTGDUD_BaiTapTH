import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement } from './counterSlice'


function CounterApp() {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()

  return (
    <div className="flex flex-col items-center gap-4 p-6 rounded-xl shadow-md bg-blue-500">
      <h1 className="text-2xl font-bold">Counter App</h1>
      <p className="text-xl">{count}</p>
      <div className="flex gap-4">
        <button
          className="bg-pink-500  px-4 py-2 rounded hover:bg-blue-600"
          onClick={() => dispatch(increment())}
        >
          Tăng
        </button>
        <button
          className="bg-red-500  px-4 py-2 rounded hover:bg-red-600"
          onClick={() => dispatch(decrement())}
        >
          Giảm
        </button>
      </div>
    </div>
  )
}

export default CounterApp
