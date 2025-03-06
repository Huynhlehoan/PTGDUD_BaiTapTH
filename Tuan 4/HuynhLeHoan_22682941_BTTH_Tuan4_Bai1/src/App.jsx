import { useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'
import "./styles.css";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Header></Header>
     <MainContent></MainContent>
     
     <Footer></Footer>
    </>
  )
}

export default App
