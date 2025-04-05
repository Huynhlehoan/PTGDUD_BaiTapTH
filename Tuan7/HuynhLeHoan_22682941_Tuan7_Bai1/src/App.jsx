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
function App() {

  const columns = [
    { name: 'Customer Name', selector: row => row.customerName },
    { name: 'Company', selector: row => row.company },
    { name: 'Order Value', selector: row => row.orderValue },
    { name: 'Order Date', selector: row => row.orderDate },
    { name: 'Status', selector: row => row.status },
    { name: 'Action', cell: () => <button>Edit</button> },
  ];
  const dummyData = [];
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
        
    {/* <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
      <table className="w-full border-collapse"> */}
        {/* Header */}
        {/* <thead>
          <tr className="bg-gray-100 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6">
              <input type="checkbox" className="w-4 h-4" />
            </th>
            <th className="py-3 px-6 text-left">Customer Name</th>
            <th className="py-3 px-6 text-left">Company</th>
            <th className="py-3 px-6 text-left">Order Value</th>
            <th className="py-3 px-6 text-left">Order Date</th>
            <th className="py-3 px-6 text-left">Status</th>
            <th className="py-3 px-6"></th>
          </tr>
        </thead>
       */}
        {/* Body */}
        {/* <tbody className="text-gray-700 text-sm"> */}
          {/* Row 1 */}
          {/* <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-3 px-6"><input type="checkbox" className="w-4 h-4" /></td>
            <td className="py-3 px-6 flex items-center space-x-3">
              <img src={ava6} className="w-8 h-8 rounded-full" />
              <span className="font-semibold">Elizabeth Lee</span>
            </td>
            <td className="py-3 px-6">AvatarSystems</td>
            <td className="py-3 px-6">$359</td>
            <td className="py-3 px-6">10/07/2023</td>
            <td className="py-3 px-6">
              <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-xs font-semibold">New</span>
            </td>
            <td className="py-3 px-6 text-gray-400 hover:text-gray-600 cursor-pointer">✏️</td>
          </tr> */}

          {/* Row 2 */}
          {/* <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-3 px-6"><input type="checkbox" className="w-4 h-4" /></td>
            <td className="py-3 px-6 flex items-center space-x-3">
              <img src={ava4} className="w-8 h-8 rounded-full" />
              <span className="font-semibold">Carlos Garcia</span>
            </td>
            <td className="py-3 px-6">SmoozeShift</td>
            <td className="py-3 px-6">$747</td>
            <td className="py-3 px-6">24/07/2023</td>
            <td className="py-3 px-6">
              <span className="bg-blue-100 text-blue-600 py-1 px-3 rounded-full text-xs font-semibold">New</span>
            </td>
            <td className="py-3 px-6 text-gray-400 hover:text-gray-600 cursor-pointer">✏️</td>
          </tr> */}

          {/* Row 3 */}
          {/* <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-3 px-6"><input type="checkbox" className="w-4 h-4" /></td>
            <td className="py-3 px-6 flex items-center space-x-3">
              <img src={ava1} className="w-8 h-8 rounded-full" />
              <span className="font-semibold">Elizabeth Bailey</span>
            </td>
            <td className="py-3 px-6">Prime Time Telecom</td>
            <td className="py-3 px-6">$564</td>
            <td className="py-3 px-6">08/08/2023</td>
            <td className="py-3 px-6">
              <span className="bg-yellow-100 text-yellow-600 py-1 px-3 rounded-full text-xs font-semibold">In-progress</span>
            </td>
            <td className="py-3 px-6 text-gray-400 hover:text-gray-600 cursor-pointer">✏️</td>
          </tr> */}

          {/* Row 4 */}
          {/* <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-3 px-6"><input type="checkbox" className="w-4 h-4" /></td>
            <td className="py-3 px-6 flex items-center space-x-3">
              <img src={ava2} className="w-8 h-8 rounded-full" />
              <span className="font-semibold">Ryan Brown</span>
            </td>
            <td className="py-3 px-6">OmniTech Corporation</td>
            <td className="py-3 px-6">$541</td>
            <td className="py-3 px-6">31/08/2023</td>
            <td className="py-3 px-6">
              <span className="bg-yellow-100 text-yellow-600 py-1 px-3 rounded-full text-xs font-semibold">In-progress</span>
            </td>
            <td className="py-3 px-6 text-gray-400 hover:text-gray-600 cursor-pointer">✏️</td>
          </tr> */}

          {/* Row 5 */}
          {/* <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-3 px-6"><input type="checkbox" className="w-4 h-4" /></td>
            <td className="py-3 px-6 flex items-center space-x-3">
              <img src={ava3} className="w-8 h-8 rounded-full" />
              <span className="font-semibold">Ryan Young</span>
            </td>
            <td className="py-3 px-6">DataStream Inc.</td>
            <td className="py-3 px-6">$769</td>
            <td className="py-3 px-6">01/05/2023</td>
            <td className="py-3 px-6">
              <span className="bg-green-100 text-green-600 py-1 px-3 rounded-full text-xs font-semibold">Completed</span>
            </td>
            <td className="py-3 px-6 text-gray-400 hover:text-gray-600 cursor-pointer">✏️</td>
          </tr> */}
            {/* Row 6 */}
            {/* <tr className="border-b border-gray-200 hover:bg-gray-50">
            <td className="py-3 px-6"><input type="checkbox" className="w-4 h-4" /></td>
            <td className="py-3 px-6 flex items-center space-x-3">
              <img src={ava5} className="w-8 h-8 rounded-full" />
              <span className="font-semibold">Hailey Adams</span>
            </td>
            <td className="py-3 px-6">FlowRush</td>
            <td className="py-3 px-6">$922</td>
            <td className="py-3 px-6">10/06/2023</td>
            <td className="py-3 px-6">
              <span className="bg-green-100 text-green-600 py-1 px-3 rounded-full text-xs font-semibold">Completed</span>
            </td>
            <td className="py-3 px-6 text-gray-400 hover:text-gray-600 cursor-pointer">✏️</td>
          </tr>
        </tbody>
      </table>
    </div> */}
    <div className="max-w-5xl mx-auto p-4">
      <DataTable
        title="Orders"
        columns={columns}
        data={dummyData}
        pagination
      />
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
