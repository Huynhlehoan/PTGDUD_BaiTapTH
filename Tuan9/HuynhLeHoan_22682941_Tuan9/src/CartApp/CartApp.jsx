import { useDispatch, useSelector } from 'react-redux'
import { addItem, removeItem, updateQuantity } from './cartSlice'

function CartApp() {
  const dispatch = useDispatch()
  const cartItems = useSelector((state) => state.cart.cartItems)

  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0)
  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0)

  const handleAdd = () => {
    dispatch(addItem({ id: 1, name: 'Sản phẩm A', price: 100, quantity: 1 }))
  }

  return (
    <div className="p-6 rounded-xl shadow-md bg-green-200 max-w-xl w-full">
      <h2 className="text-xl text-center font-bold mb-4">Giỏ hàng 🛒</h2>
      <button
        className="px-4 py-2 text-white bg-green-600 text-red-500 rounded hover:bg-gray-400 mb-4"
        onClick={handleAdd}
      >
        Thêm SP A
      </button>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 ml-2"
        onClick={() => dispatch(addItem({ id: 2, name: 'Sản phẩm B', price: 150, quantity: 1 }))}
       >
        Thêm SP B
    </button>

      {cartItems.map((item) => (
        <div key={item.id} className="flex justify-between items-center mb-2 border-b pb-2">
          <div>
            <p className="font-semibold">{item.name}</p>
            <p>{item.price}đ x {item.quantity}</p>
          </div>
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
            <button
              className=" text-red-500 px-2 rounded"
              onClick={() => dispatch(removeItem(item.id))}
            >
              X
            </button>
          </div>
        </div>
      ))}

      <hr className="my-4" />
      <p>Tổng số lượng: <strong>{totalQuantity}</strong></p>
      <p>Tổng tiền: <strong>{totalPrice}đ</strong></p>
    </div>
  )
}

export default CartApp
