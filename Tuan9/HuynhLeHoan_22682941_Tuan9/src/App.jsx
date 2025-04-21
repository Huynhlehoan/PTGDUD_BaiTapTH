import './App.css'
import { Provider } from 'react-redux'
import { store } from './CounterApp/index'
import CounterApp from './CounterApp/CounterApp'

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
        <CounterApp />
      </div>
    </Provider>
  )
}

export default App
