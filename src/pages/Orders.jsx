import React, { useState } from "react";

const sampleOrders = [
  {
    id: "ORD1001",
    customer: "John Doe",
    date: "2025-06-20",
    status: "Delivered",
    total: "₹1,200",
  },
  {
    id: "ORD1002",
    customer: "Jane Smith",
    date: "2025-06-18",
    status: "Pending",
    total: "₹2,500",
  },
  {
    id: "ORD1003",
    customer: "Michael Brown",
    date: "2025-06-15",
    status: "Shipped",
    total: "₹980",
  },
  {
    id: "ORD1004",
    customer: "Emily Johnson",
    date: "2025-06-12",
    status: "Cancelled",
    total: "₹0",
  },
];

const Orders = () => {
  const [search, setSearch] = useState("");

  const filteredOrders = sampleOrders.filter(
    (order) =>
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.id.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Orders</h2>

      <input
        type="text"
        placeholder="Search by Order ID or Customer"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full max-w-sm"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded shadow">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left text-sm">
              <th className="p-3">Order ID</th>
              <th className="p-3">Customer</th>
              <th className="p-3">Date</th>
              <th className="p-3">Status</th>
              <th className="p-3">Total</th>
            </tr>
          </thead>
          <tbody>
            {filteredOrders.length > 0 ? (
              filteredOrders.map((order, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="p-3">{order.id}</td>
                  <td className="p-3">{order.customer}</td>
                  <td className="p-3">{order.date}</td>
                  <td className="p-3">{order.status}</td>
                  <td className="p-3">{order.total}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-3 text-center text-gray-500">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Orders;
