import {useReducer, useState } from 'react'
import Counter from './components/Counter';
import './App.css'
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {

  return (
   <>
   <Provider store={store}>
      <Counter/>
   </Provider>
   </>
  )
}

export default App
