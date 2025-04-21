import './App.css'
import { Provider } from 'react-redux'
import { store } from './CounterApp/index'
import CounterApp from './CounterApp/CounterApp'


import { storeToDoApp } from './ToDoApp/store'
import TodoApp from './ToDoApp/TodoApp'

import storeThemeApp from './themeApp/store'
import ThemeApp from './themeApp/ThemeApp'

import storeCartApp from './CartApp/store'
import CartApp from './CartApp/CartApp'

import storeAuthApp from './AuthApp/store'
import AuthApp from './AuthApp/AuthApp'


function App() {
  return (
    <div className='flex flex-wrap space-x-10 items-center'>
      <Provider store={store}>
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <CounterApp />
        </div>
      </Provider>

      <Provider store={storeToDoApp}>
        <div className="flex flex-col items-center justify-center min-h-screen">
          <TodoApp />
        </div>
      </Provider>

      <Provider store={storeThemeApp}>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
          <ThemeApp />
        </div>
      </Provider>

      <Provider store={storeCartApp}>
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <CartApp />
        </div>
      </Provider>

      <Provider store={storeAuthApp}>
        <div className="flex flex-col items-center justify-center min-h-screen ">
          <AuthApp />
        </div>
      </Provider>
    </div>
  )
}

export default App

