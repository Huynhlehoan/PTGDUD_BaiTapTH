
import React from 'react';

const EditUserModal = ({ isOpen, onClose, user }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-lg shadow-xl w-[400px] space-y-4">
        <h2 className="text-xl font-semibold">Edit User</h2>

        <input
          className="w-full border p-2 rounded"
          placeholder="Customer Name"
          defaultValue={user?.customerName}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Company"
          defaultValue={user?.company}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Order Value"
          defaultValue={user?.orderValue}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Order Date"
          defaultValue={user?.orderDate}
        />
        <input
          className="w-full border p-2 rounded"
          placeholder="Status"
          defaultValue={user?.status}
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
            onClick={() => alert('Chua co API')}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditUserModal;
