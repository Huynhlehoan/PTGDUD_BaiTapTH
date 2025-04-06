// components/EditUserModal.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const EditUserModal = ({ isOpen, onClose, user, onUpdate }) => {
  const [form, setForm] = useState({
    customerName: '',
    company: '',
    orderValue: '',
    orderDate: '',
    status: '',
  });

  useEffect(() => {
    if (user) {
      setForm({
        customerName: user.customerName,
        company: user.company,
        orderValue: user.orderValue,
        orderDate: user.orderDate,
        status: user.status,
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSave = async () => {
    try {
      await axios.put(`http://localhost:3002/customers/${user.id}`, form);
      onUpdate(); // gọi lại dữ liệu cha
      onClose();
    } catch (err) {
      alert("Cập nhật thất bại");
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[400px] space-y-4">
        <h2 className="text-xl font-semibold">Edit User</h2>

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
            className="px-4 py-2 bg-blue-600 text-white rounded"
            onClick={handleSave}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
