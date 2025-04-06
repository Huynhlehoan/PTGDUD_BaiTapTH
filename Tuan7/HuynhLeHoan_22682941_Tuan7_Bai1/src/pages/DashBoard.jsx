// pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import logo1 from '../assets/Lab_05/Squares four 1.png';
import CustomDataTable from '../components/DataTable';
import EditUserModal from '../components/EditUserModal';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3002/customers')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error loading data:", error);
      });
  }, []);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };

  return (
    <div>
      <div className='flex gap-x-2 mt-2 mb-2'>
        <img src={logo1} alt="" />
        <h2 className='font-bold text-xl'>Detail Report</h2>
      </div>

      {data.length > 0 ? (
        <CustomDataTable data={data} onEdit={handleEditClick} />
      ) : (
        <p>Đang tải dữ liệu...</p>
      )}

      <EditUserModal
        isOpen={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        user={selectedUser}
      />
    </div>
  );
}

export default Dashboard;
