import React, { useState, useEffect } from 'react';
import DataTable from 'react-data-table-component';
import axios from 'axios';

const columns = [
  { name: 'Customer Name', selector: row => row.customerName, sortable: true },
  { name: 'Company', selector: row => row.company, sortable: true },
  { name: 'Order Value', selector: row => row.orderValue, sortable: true },
  { name: 'Order Date', selector: row => row.orderDate, sortable: true },
  { name: 'Status', selector: row => row.status, sortable: true },
  {
    name: 'Action',
    cell: row => <button>Edit</button>,
  },
];

const DataTable = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:3001/customers')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        setError(error);
        setLoading(false);
      });
  }, []);
  

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="overflow-x-auto bg-white shadow-md rounded-lg p-4">
      <DataTable
        columns={columns}
        data={data}
        pagination
      />
    </div>
  );
};

export default DataTable;
