import { useState,useEffect } from 'react'
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

import { NavLink } from 'react-router-dom'
import DataTable from 'react-data-table-component';
import axios from 'axios';




function App() {
  useEffect(() => {
    axios.get('http://localhost:3002/customers')
      .then(response => {
        setData(response.data); 
      })
      .catch(error => {
        console.error("Error loading data:", error); 
        console.log(error.response);  
      });
  }, []);
  

 const columns = [
  {
    name: 'Customer Name',
    selector: row => row.customerName,
    sortable: true,
  },
  { 
    name: 'Company', 
    selector: row => row.company, 
    sortable: true 
  },
  { 
    name: 'Order Value', 
    selector: row => `${row.orderValue}$`, 
    sortable: true 
  },
  { 
    name: 'Order Date', 
    selector: row => row.orderDate, 
    sortable: true 
  },
  { 
    name: 'Status', 
    selector: row => row.status, 
    sortable: true 
  },
  {
    name: 'Action',
    cell: row => <button>Edit</button>, 
  },
];

  const [data, setData] = useState([]);


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
    <div className="menu flex flex-col gap-4 p-4 bg-white">
      {/* Dashboard */}
      <NavLink 
        to="/" 
        className={({ isActive }) => 
          isActive 
            ? 'flex items-center gap-x-2 bg-pink-500 text-white font-bold px-3 py-2 rounded-lg' 
            : 'flex items-center gap-x-2 px-3 py-2'
        }
      >
        <img src={logo1} alt="" />
        Dashboard
      </NavLink>

      {/* Projects */}
      <NavLink 
        to="/project" 
        className={({ isActive }) => 
          isActive 
            ? 'flex items-center gap-x-2 bg-pink-500 text-white font-bold px-3 py-2 rounded-lg' 
            : 'flex items-center gap-x-2 px-3 py-2'
        }
      >
        <img src={logo2} alt="" />
        Projects
      </NavLink>

      {/* Teams */}
      <NavLink 
        to="/teams" 
        className={({ isActive }) => 
          isActive 
            ? 'flex items-center gap-x-2 bg-pink-500 text-white font-bold px-3 py-2 rounded-lg' 
            : 'flex items-center gap-x-2 px-3 py-2'
        }
      >
        <img src={logo3} alt="" />
        Teams
      </NavLink>

      {/* Analytics */}
      <NavLink 
        to="/analytics" 
        className={({ isActive }) => 
          isActive 
            ? 'flex items-center gap-x-2 bg-pink-500 text-white font-bold px-3 py-2 rounded-lg' 
            : 'flex items-center gap-x-2 px-3 py-2'
        }
      >
        <img src={logo4} alt="" />
        Analytics
      </NavLink>

      {/* Messages */}
      <NavLink 
        to="/messages" 
        className={({ isActive }) => 
          isActive 
            ? 'flex items-center gap-x-2 bg-pink-500 text-white font-bold px-3 py-2 rounded-lg' 
            : 'flex items-center gap-x-2 px-3 py-2'
        }
      >
        <img src={logo5} alt="" />
        Messages
      </NavLink>

      {/* Integrations */}
      <NavLink 
        to="/integrations" 
        className={({ isActive }) => 
          isActive 
            ? 'flex items-center gap-x-2 bg-pink-500 text-white font-bold px-3 py-2 rounded-lg' 
            : 'flex items-center gap-x-2 px-3 py-2'
        }
      >
        <img src={logo6} alt="" />
        Integrations
      </NavLink>

    {/* Hình + Button */}
      <img src={Group} alt="" className="mx-auto mt-4" />
      <button className="bg-white border border-blue-500 rounded-lg px-10 py-2 mx-auto mt-2">
        Try now
      </button>
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
    <DataTable
            title="Orders"
            columns={columns}
           
            pagination
            noDataComponent="Không có dữ liệu để hiển thị"
            data={data} // Truyền data từ state lên DataTable
         
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
};

export default App;
