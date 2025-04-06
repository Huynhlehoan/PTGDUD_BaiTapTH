// components/AddUserModal.jsx
import React, { useState } from 'react';
import axios from 'axios';

const AddUserModal = ({ isOpen, onClose, onAdd }) => {
  const [form, setForm] = useState({
    customerName: '',
    company: '',
    orderValue: '',
    orderDate: '',
    status: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAdd = async () => {
    try {
      await axios.post('http://localhost:3002/customers', form);
      onAdd(); 
      onClose();
    } catch (err) {
      alert("Thêm thất bại");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[400px] space-y-4">
        <h2 className="text-xl font-semibold">Add New User</h2>

        <input
          name="customerName"
          className="w-full border p-2 rounded"
          placeholder="Customer Name"
          value={form.customerName}
          onChange={handleChange}
        />
        <input
          name="company"
          className="w-full border p-2 rounded"
          placeholder="Company"
          value={form.company}
          onChange={handleChange}
        />
        <input
          name="orderValue"
          className="w-full border p-2 rounded"
          placeholder="Order Value"
          value={form.orderValue}
          onChange={handleChange}
        />
        <input
          name="orderDate"
          className="w-full border p-2 rounded"
          placeholder="Order Date"
          value={form.orderDate}
          onChange={handleChange}
        />
        <input
          name="status"
          className="w-full border p-2 rounded"
          placeholder="Status"
          value={form.status}
          onChange={handleChange}
        />

        <div className="flex justify-end gap-2">
          <button
            className="px-4 py-2 bg-gray-300 rounded"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="px-4 py-2 bg-pink-300 text-black rounded"
            onClick={handleAdd}
          >
            Add
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddUserModal;
