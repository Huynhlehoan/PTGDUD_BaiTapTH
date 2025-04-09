import React, { useState } from "react";
import DataTable from "react-data-table-component";
import btnEdit from '../assets/Lab_05/create.png'

function CustomDataTable({ data, onEdit }) {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedUser, setSelectedUser] = useState(null);
  const rowsPerPage = 6;
  
  const columns = [
    {
      name: "Customer Name",
      selector: row => row.customerName,
      sortable: true,
      cell: row => (
        <div className="flex items-center gap-2">
          <img src={row.avatar || "https://via.placeholder.com/32"} alt={row.customerName} className="w-8 h-8 rounded-full object-cover" />
          <span className="font-semibold text-gray-800">{row.customerName}</span>
        </div>
      ),
    },
    {
      name: "Company",
      selector: row => row.company,
      sortable: true,
    },
    {
      name: "Order Value",
      selector: row => row.orderValue,
      sortable: true,
      cell: row => `$${row.orderValue}`,
    },
    {
      name: "Order Date",
      selector: row => row.orderDate,
      sortable: true,
    },
    {
      name: "Status",
      selector: row => row.status,
      sortable: true,
      cell: row => {
        const statusColors = {
          "New": "bg-blue-100 text-blue-600",
          "In-progress": "bg-yellow-100 text-yellow-700",
          "Completed": "bg-green-100 text-green-600",
        };
        return (
          <span className={`text-sm px-2 py-1 rounded-full font-medium ${statusColors[row.status] || "bg-gray-100 text-gray-600"}`}
          >
            {row.status}
          </span>
        );
      },
    },
    {
      name: "",
      cell: row => (
        <button onClick={() => onEdit(row)} className="text-blue-600 text-sm hover:underline">
          <img src={btnEdit} alt="" />
        </button>
      ),
      ignoreRowClick: true,
      allowOverflow: true,
      button: true,
    },
  ];

  const customStyles = {
    headCells: {
      style: {
        backgroundColor: "#f9fafb",
        color: "#6b7280",
        fontWeight: 600,
        fontSize: "13px",
        fontWeight: "bold",
        textTransform: "uppercase",
        paddingLeft: "16px",
        paddingRight: "16px",
      },
    },
    rows: {
      style: {
        fontSize: "14px",
        paddingTop: "14px",
        paddingBottom: "14px",
        borderBottom: "1px solid #e5e7eb",
      },
    },
    pagination: {
      style: {
        display: "none", 
      },
    },
  };

 
  const totalPages = Math.ceil(data.length / rowsPerPage);
  

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  const paginatedData = data.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );


  const getPageNumbers = () => {
    let pages = [];
    

    pages.push(1);
    

    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (!pages.includes(i)) pages.push(i);
    }
    

    if (totalPages > 1) pages.push(totalPages);
    
    pages = [...new Set(pages)].sort((a, b) => a - b);

    const result = [];
    let previousPage = 0;
    
    for (const page of pages) {
      if (page - previousPage > 1) {
        result.push("...");
      }
      result.push(page);
      previousPage = page;
    }
    
    return result;
  };

  const pageNumbers = getPageNumbers();

  return (
    <div className="rounded border border-gray-200 shadow-sm overflow-hidden">
      <DataTable 
        columns={columns} 
        data={paginatedData} 
        pagination={false}
        customStyles={customStyles}
        noDataComponent="Không có dữ liệu để hiển thị"
        selectableRows
        onSelectedRowsChange={({ selectedRows }) => console.log(selectedRows)}

      />
      <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-500 border-t border-gray-200">
        <div>{`${data.length} results`}</div>
        <div className="flex items-center">
          <button 
            onClick={() => handlePageChange(currentPage - 1)} 
            disabled={currentPage === 1}
            className="px-2 py-1 mx-1 rounded-full cursor-pointer disabled:opacity-50"
          >
            &lt;
          </button>
          
          {pageNumbers.map((page, index) => 
            page === "..." ? (
              <span key={`ellipsis-${index}`} className="px-2 py-1 mx-1">...</span>
            ) : (
              <button 
                key={`page-${page}`}
                onClick={() => handlePageChange(page)} 
                className={`w-8 h-8 flex items-center justify-center mx-1 rounded-full cursor-pointer ${
                  currentPage === page ? "bg-pink-500 text-white" : "hover:bg-gray-100"
                }`}
              >
                {page}
              </button>
            )
          )}
          
          <button 
            onClick={() => handlePageChange(currentPage + 1)} 
            disabled={currentPage === totalPages}
            className="px-2 py-1 mx-1 rounded-full cursor-pointer disabled:opacity-50"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default CustomDataTable;