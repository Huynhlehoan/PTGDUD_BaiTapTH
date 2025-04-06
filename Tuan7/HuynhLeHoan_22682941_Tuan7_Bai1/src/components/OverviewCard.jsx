import React from 'react';
import useOverviewData from '../api/overview';  // Import custom hook
import logo1 from '../assets/Lab_05/Squares four 1.png';
const Overview = () => {
  const { turnover, profit, newCustomer } = useOverviewData();  // Lấy dữ liệu từ custom hook

  return (
    <div className="content">
      <div className='flex gap-x-2 mt-2 mb-2'>
        <img src={logo1} alt="Logo" />
        <h2 className='font-bold text-xl'>Overview</h2>
      </div>

      {/* Grid layout for the cards */}
      <div className="grid grid-cols-3 gap-4">
        {/* Turnover Card */}
        {turnover && (
          <div className='bg-pink-100 rounded-md p-3 relative'>
            <div className="absolute top-2 right-2">
              <img src={turnover.img} alt="Turnover Icon" />
            </div>
            <h3 className='font-bold text-xl'>Turnover</h3>
            <h1 className='text-2xl font-bold'>{turnover.value}</h1>
            <div className='flex'>
              <h3 className='text-green-700'>{turnover.percent}</h3>
              <h3 className='text-gray-600 ms-2'>Period of change</h3>
            </div>
          </div>
        )}

        {/* Profit Card */}
        {profit && (
          <div className='bg-blue-100 rounded-md p-3 relative'>
            <div className="absolute top-2 right-2">
              <img src={profit.img} alt="Profit Icon" />
            </div>
            <h3 className='font-bold text-xl'>Profit</h3>
            <h1 className='text-2xl font-bold'>{profit.value}</h1>
            <div className='flex'>
              <h3 className='text-green-700'>{profit.percent}</h3>
              <h3 className='text-gray-600 ms-2'>Period of change</h3>
            </div>
          </div>
        )}

        {/* New Customer Card */}
        {newCustomer && (
          <div className='bg-blue-100 rounded-md p-3 relative'>
            <div className="absolute top-2 right-2">
              <img src={newCustomer.img} alt="New Customer Icon" />
            </div>
            <h3 className='font-bold text-xl'>New Customer</h3>
            <h1 className='text-2xl font-bold'>{newCustomer.value}</h1>
            <div className='flex'>
              <h3 className='text-green-700'>{newCustomer.percent}</h3>
              <h3 className='text-gray-600 ms-2'>Period of change</h3>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Overview;  // Export component Overview
