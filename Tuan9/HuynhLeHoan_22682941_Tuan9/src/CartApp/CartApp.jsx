import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts, addItem, removeItem, updateQuantity  } from './cartSlice'

export default function CartAppAsync() {
  const dispatch = useDispatch()
  const { products, cartItems, loading } = useSelector(state => state.cart)

  useEffect(() => {
    dispatch(fetchProducts())
  }, [dispatch])

  const total = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0)

  return (
    <div className="p-6 mt-10 rounded-xl shadow-md bg-green-200 w-[500px] mx-auto">
      <h1 className="text-2xl text-center font-bold mb-4">🛒 Giỏ hàng (Async)</h1>

      {loading ? <p>Đang tải sản phẩm...</p> : (
        <div className="mb-4 space-y-2">
          <h2 className="text-lg font-semibold">Chọn sản phẩm:</h2>
          {products.map(p => (
            <button
              key={p.id}
              onClick={() => dispatch(addItem(p))}
              className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 ml-5"
            >
              Thêm {p.name}
            </button>
          ))}
        </div>
      )}

      <div className="mt-4">
        <h2 className="text-lg font-semibold">Sản phẩm đã chọn:</h2>
        {cartItems.length === 0 && <p className="text-gray-500">Chưa có sản phẩm nào</p>}
        {cartItems.map(item => (
  <div key={item.id} className="flex justify-between items-center border-b py-2">
    <div className="flex flex-col gap-1">
      <span>{item.name} x {item.quantity}</span>
      <div className="flex gap-2">
        <button
          className="bg-yellow-400 text-black px-2 rounded"
          onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
        >
          +
        </button>
        <button
          className="bg-yellow-400 text-black px-2 rounded"
          onClick={() =>
            item.quantity > 1
              ? dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))
              : dispatch(removeItem(item.id))
          }
        >
          -
        </button>
      </div>
    </div>
        <button
          onClick={() => dispatch(removeItem(item.id))}
          className="text-red-500 hover:underline"
        >
          Xoá
        </button>
      </div>
    ))}

        {cartItems.length > 0 && (
          <div className="mt-4 font-semibold">
            Tổng tiền: {total}đ
          </div>
        )}
      </div>
    </div>
  )
}
