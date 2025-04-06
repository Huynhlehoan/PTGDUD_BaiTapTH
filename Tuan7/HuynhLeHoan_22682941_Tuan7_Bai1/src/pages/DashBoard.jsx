// pages/Dashboard.jsx
import React, { useState, useEffect } from 'react';
import logo1 from '../assets/Lab_05/Squares four 1.png';
import CustomDataTable from '../components/DataTable';
import EditUserModal from '../components/EditUserModal';
import AddUserModal from '../components/AddUserModal';
import axios from 'axios';

function Dashboard() {
  const [data, setData] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [addModalOpen, setAddModalOpen] = useState(false);

  const fetchData = () => {
    axios.get('http://localhost:3002/customers')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error loading data:", error);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEditClick = (user) => {
    setSelectedUser(user);
    setEditModalOpen(true);
  };
  const handleAddClick = () => {
    setAddModalOpen(true);
  };

  return (
    <div>
      <div className='flex gap-x-2 mt-2 mb-2'>
        <img src={logo1} alt="" />
        <h2 className='font-bold text-xl'>Detail Report</h2>
      </div>
    {/* Add user button */}
    <div className="flex justify-end gap-2 mb-4">
        <button
          className="bg-pink-400 text-white px-4 py-2 rounded"
          onClick={() => setAddModalOpen(true)}
        >
          Add User
        </button>
        <button className="border border-pink-600 text-pink-600 px-3 py-2 rounded">Import</button>
        <button className="border border-pink-600 text-pink-600 px-3 py-2 rounded">Export</button>
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
        onUpdate={fetchData} 
      />
       <AddUserModal
        isOpen={addModalOpen}
        onClose={() => setAddModalOpen(false)}
        onAdd={fetchData}
      />
    </div>
  );
}

export default Dashboard;
