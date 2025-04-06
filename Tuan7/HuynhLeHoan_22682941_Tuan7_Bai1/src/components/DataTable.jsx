// components/DataTable.jsx
import React from 'react';
import DataTable from 'react-data-table-component';

function CustomDataTable({ data, onEdit }) {
  const columns = [
    { name: 'Customer Name', selector: row => row.customerName, sortable: true },
    { name: 'Company', selector: row => row.company, sortable: true },
    { name: 'Order Value', selector: row => `${row.orderValue}$`, sortable: true },
    { name: 'Order Date', selector: row => row.orderDate, sortable: true },
    { name: 'Status', selector: row => row.status, sortable: true },
    {
      name: 'Action',
      cell: row => (
        <button
          onClick={() => onEdit(row)}
          className="text-blue-600 hover:underline"
        >
          Edit
        </button>
      )
    },
  ];

  return (
    <DataTable
      title="Orders"
      columns={columns}
      pagination
      noDataComponent="Không có dữ liệu để hiển thị"
      data={data}
    />
  );
}

export default CustomDataTable;
