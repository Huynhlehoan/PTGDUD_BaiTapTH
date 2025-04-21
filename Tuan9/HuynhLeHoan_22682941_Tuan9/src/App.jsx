import './App.css'
import { Provider } from 'react-redux'
import { store } from './CounterApp/index'
import CounterApp from './CounterApp/CounterApp'


import { storeToDoApp } from './ToDoApp/store'
import TodoApp from './ToDoApp/TodoApp'

function App() {
  return (
    <>
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
    </>
  )
}

export default App

