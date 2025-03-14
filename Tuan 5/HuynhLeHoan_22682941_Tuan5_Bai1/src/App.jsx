import { useState } from 'react'
import Header from './components/Header'
import MainContent from './components/MainContent'
import Footer from './components/Footer'

import "./styles.css";
import Aside from './components/aside'

function App() {


  return (
    <>
     <Header></Header>
     <div className="flex">
        <Aside />
        <MainContent />
      </div>
     
     <Footer></Footer>
    </>
  )
}

export default App
