import React from "react";
import DataTable from "react-data-table-component";

function CustomDataTable({ data, onEdit }) {
  const columns = [
    {
      name: "Customer Name",
      selector: row => row.customerName,
      sortable: true,
      cell: row => (
        <div className="flex items-center gap-2">
          <img
            src={row.avatar || "https://via.placeholder.com/32"}
            alt={row.customerName}
            className="w-8 h-8 rounded-full object-cover"
          />
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
          <span
            className={`text-sm px-2 py-1 rounded-full font-medium ${statusColors[row.status] || "bg-gray-100 text-gray-600"}`}
          >
            {row.status}
          </span>
        );
      },
    },
    {
      name: "",
      cell: row => (
        <button
          onClick={() => onEdit(row)}
          className="text-blue-600 text-sm hover:underline"
        >
          Edit
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
        borderTop: "1px solid #e5e7eb",
        padding: "16px",
        justifyContent: "right",
      },
      pageButtonsStyle: {
        borderRadius: "9999px",
        padding: "6px 12px",
        margin: "0 4px",
        cursor: "pointer",
        color: "#6b7280",
        '&:hover': {
          backgroundColor: "#f3f4f6",
        },
        '&.selected': {
          backgroundColor: "#ec4899",
          color: "#fff",
        },
      },
    },
  };

  return (
    <div className="rounded border border-gray-200 shadow-sm overflow-hidden">
      <DataTable
        columns={columns}
        data={data}
        pagination
        paginationPerPage={6}
        customStyles={customStyles}
        noDataComponent="Không có dữ liệu để hiển thị"
      />
       <div className="flex justify-between items-center px-4 py-3 text-sm text-gray-500">
      <div>{`${data.length} results`}</div>
   
    </div>
    </div>
  );
}

export default CustomDataTable;
