import React, { useState, useEffect } from 'react';
import logo1 from '../assets/Lab_05/Squares four 1.png';
import CustomDataTable from '../components/DataTable';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3002/customers')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error loading data:", error);
      });
  }, []);

  return (
    <div>
      <div className='flex gap-x-2 mt-2 mb-2'>
        <img src={logo1} alt="" />
        <h2 className='font-bold text-xl'>Detail Report</h2>
      </div>

      {/* Chỉ hiển thị bảng khi có dữ liệu */}
      {data.length > 0 ? (
        <CustomDataTable data={data} />
      ) : (
        <p>Đang tải dữ liệu...</p>
      )}
    </div>
  );
}

export default Dashboard;
