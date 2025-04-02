import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/Lab_05/Image 1858.png'
import bell from './assets/Lab_05/Bell 1.png'
import question from './assets/Lab_05/Question 1.png'
import search from './assets/Lab_05/Search.png'
import avatar1 from './assets/Lab_05/Avatar 313.png'
import logo1 from './assets/Lab_05/Squares four 1.png'
import logo2 from './assets/Lab_05/Folder.png'
import logo3 from './assets/Lab_05/Groups.png'
import logo4 from './assets/Lab_05/Pie chart.png'
import logo5 from './assets/Lab_05/Chat.png'
import logo6 from './assets/Lab_05/Code.png'

import { Link } from 'react-router-dom'
function App() {


  return (
    <div className='container'>
       <div class="header flex space-x-3">
       
        <img className='logo' src={logo} alt="logo" />
        <h2 className='text-pink-500 font-bold text-2xl'>Dashboard</h2>
        <div className='flex' style={{marginLeft:'650px'}} >
          <img src={search} alt="search" className='ava' style={{marginTop:'5px'}} />
        <input className='inpSearch px-24 py-1 bg-gray-200 rounded-lg' 
        type="text" name="" id="" placeholder='search...' /></div>
        
        <img src={bell} alt="bell" className='ava' />
        <img src={question} alt="question" className='ava' />
        <img src={avatar1} alt="ava" className='ava' />
        </div>
  <div class="menu">
    <div style={{margin:'15px'}} className='flex gap-x-2 bg-pink-500 rounded-lg'>
        <img src={logo1} alt="" />
        <a href="#" style={{color:'white'}}>Dashboard</a></div>
    <div style={{margin:'15px'}} className='flex gap-x-2'>
        <img src={logo2} alt="" />
        <a href="#">Project</a></div>
    <div style={{margin:'15px'}} className='flex gap-x-2'>
        <img src={logo3} alt="" />
        <a href="#">Teams</a></div>
    <div style={{margin:'15px'}} className='flex gap-x-2'>
        <img src={logo4} alt="" />
        <a href="#">Analytics</a></div>
    <div style={{margin:'15px'}} className='flex gap-x-2'>
        <img src={logo5} alt="" />
        <a href="#">Messages</a></div>
    <div style={{margin:'15px'}} className='flex gap-x-2'>
        <img src={logo6} alt="" />
        <a href="#">Integrations</a></div>
      </div>
      
  <div class="content">
    <div className='flex gap-x-2 mt-2 mb-2'>
      <img src={logo1} alt="" />
      <h2 className=' font-bold text-xl '>Overview</h2>
       
        </div>
         <div class="grid grid-cols-3 gap-4">
          <div className='bg-pink-100 rounded-md p-3'>
              <h3 className='font-bold text-xl'>Turnover</h3>
              <h1 className='text-2xl font-bold'>$92,450</h1>
              <div className='flex'> <h3 className='text-green-700'>5.39%</h3>
              <h3 className='text-gray-600 ms-2'>Period of change</h3></div>
             
          </div>
          <div className='bg-blue-200 rounded-md'>02
          
          </div>
          <div className='bg-blue-100 rounded-md'>03
          
          </div>
    </div>
  
   
      
      </div>
  
  
  <div class="footer"><h4>Footer</h4></div>
    </div>
  )
}

export default App
