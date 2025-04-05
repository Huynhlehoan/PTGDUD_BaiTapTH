import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import logo from './assets/Lab_05/Image 1858.png'
import bell from './assets/Lab_05/Bell 1.png'
import question from './assets/Lab_05/Question 1.png'
import search from './assets/Lab_05/Search.png'
import avatar1 from './assets/Lab_05/Avatar 313.png'
import Group from './assets/Lab_05/Group.png'
import logo1 from './assets/Lab_05/Squares four 1.png'
import logo2 from './assets/Lab_05/Folder.png'
import logo3 from './assets/Lab_05/Groups.png'
import logo4 from './assets/Lab_05/Pie chart.png'
import logo5 from './assets/Lab_05/Chat.png'
import logo6 from './assets/Lab_05/Code.png'

import logo7 from './assets/Lab_05/Button 1509.png'
import logo8 from './assets/Lab_05/Button 1529.png'
import logo9 from './assets/Lab_05/Button 1530.png'
import logo10 from './assets/Lab_05/File text 1.png'
import ava1 from './assets/Lab_05/Avatar (1).png'
import ava2 from './assets/Lab_05/Avatar (2).png'
import ava3 from './assets/Lab_05/Avatar (3).png'
import ava4 from './assets/Lab_05/Avatar (4).png'
import ava5 from './assets/Lab_05/Avatar (5).png'
import ava6 from './assets/Lab_05/Avatar.png'

import { Link } from 'react-router-dom'
import DataTable from 'react-data-table-component';
const columns = ["Customer Name", "Company", "Order Value", "Order Date", "Status", ""];

const dummyData = Array.from({ length: 5 }, () => ({
  customerName: "",
  company: "",
  orderValue: "",
  orderDate: "",
  status: ""
}));
function App() {
  const [data, setData] = useState(dummyData);

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
        <img src={Group} alt="" className='ms-10' />
        <button className='bg-white border border-blue-500 rounded-lg px-20 py-1 mt-2 ms-10'>
          Try now</button>
      </div>
      
  <div class="content">
    <div className='flex gap-x-2 mt-2 mb-2'>
      <img src={logo1} alt="" />
      <h2 className=' font-bold text-xl '>Overview</h2>
       
        </div>
         <div class="grid grid-cols-3 gap-4">
          <div className='bg-pink-100 rounded-md p-3 relative'> 
             
                <div class="absolute top-2 right-2">
                  <img src={logo7} alt="" />
                  </div>
           
              <h3 className='font-bold text-xl'>Turnover</h3>
              <h1 className='text-2xl font-bold'>$92,450</h1>
              <div className='flex'> <h3 className='text-green-700'>5.39%</h3>
              <h3 className='text-gray-600 ms-2'>Period of change</h3></div>

              
             
          </div>
          <div className='bg-blue-100 rounded-md p-3 relative'> 
             
             <div class="absolute top-2 right-2">
               <img src={logo8} alt="" />
               </div>
        
           <h3 className='font-bold text-xl'>Profit</h3>
           <h1 className='text-2xl font-bold'>$32,218</h1>
           <div className='flex'> <h3 className='text-green-700'>5.39%</h3>
           <h3 className='text-gray-600 ms-2'>Period of change</h3></div>

           
          
       </div>

       <div className='bg-blue-100 rounded-md p-3 relative'> 
             
             <div class="absolute top-2 right-2">
               <img src={logo9} alt="" />
               </div>
        
           <h3 className='font-bold text-xl'>New customer</h3>
           <h1 className='text-2xl font-bold'>298</h1>
           <div className='flex'> <h3 className='text-green-700'>6.84%</h3>
           <h3 className='text-gray-600 ms-2'>Period of change</h3></div>

           
          
       </div>
    </div>
    <div className='flex gap-x-2 mt-2 mb-2'>
      <img src={logo10} alt="" />
      <h2 className=' font-bold text-xl '>Detailed Report</h2>
        </div>

    <div className="p-5">
 
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-100">
            <th className="p-2"><input type="checkbox" /></th>
            {columns.map((col, idx) => (
              <th key={idx} className="p-2 text-left">{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr key={idx} className="border-t">
              <td className="p-2"><input type="checkbox" /></td>
              <td className="p-2">-</td>
              <td className="p-2">-</td>
              <td className="p-2">-</td>
              <td className="p-2">-</td>
              <td className="p-2">
                {row.status ? (
                  <span className={`px-2 py-1 text-xs rounded 
                    ${row.status === 'New' && 'bg-blue-100 text-blue-600'}`}
                  >
                    {row.status}
                  </span>
                ) : "-"}
              </td>
              <td className="p-2">
                <button className="text-gray-500 hover:text-black">
                  ✏️
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

      
      </div>
  
      <div className="footer flex justify-between items-center mt-4">
  {/* Kết quả bên trái */}
  <h4 className="ms-96 text-gray-700">63 results</h4>

  {/* Phân trang bên phải */}
  <div className="flex items-center space-x-2">
    {/* Nút Previous */}
    <button className="px-3 py-1 text-gray-500 hover:text-gray-700">&lt;</button>

    {/* Số trang */}
    <button className="w-8 h-8 bg-pink-500 text-white rounded-full font-semibold">1</button>
    <button className="w-8 h-8 text-gray-500 hover:text-gray-700">2</button>
    <button className="w-8 h-8 text-gray-500 hover:text-gray-700">3</button>
    <button className="w-8 h-8 text-gray-500 hover:text-gray-700">4</button>

    {/* Dấu ... */}
    <span className="px-2 text-gray-500">...</span>

    {/* Trang cuối */}
    <button className="w-8 h-8 text-gray-500 hover:text-gray-700">10</button>
    <button className="w-8 h-8 text-gray-500 hover:text-gray-700">11</button>

    {/* Nút Next */}
    <button className="px-3 py-1 text-gray-500 hover:text-gray-700">&gt;</button>
  </div>
</div>

    </div>
  )
}

export default App
