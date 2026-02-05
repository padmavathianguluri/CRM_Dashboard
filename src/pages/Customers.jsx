import React, { useState } from "react";

const sampleCustomers = [
  {
    name: "Nagendra",
    email: "nag@example.com",
    phone: "9876543210",
    orders: 5,
  },
  {
    name: "Jaya",
    email: "jaya@example.com",
    phone: "9123456780",
    orders: 8,
  },
  {
    name: "Eekshitha",
    email: "ekshitha@example.com",
    phone: "9898989898",
    orders: 3,
  },
  {
    name: "Madhavi",
    email: "madhavis@example.com",
    phone: "9789456123",
    orders: 2,
  },
];

const Customers = () => {
  const [search, setSearch] = useState("");

  const filteredCustomers = sampleCustomers.filter(
    (customer) =>
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Customers</h2>

      <input
        type="text"
        placeholder="Search by name or email"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="mb-4 p-2 border rounded w-full max-w-sm"
      />

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white dark:bg-gray-800 rounded shadow">
          <thead>
            <tr className="bg-gray-200 dark:bg-gray-700 text-left text-sm">
              <th className="p-3">Name</th>
              <th className="p-3">Email</th>
              <th className="p-3">Phone</th>
              <th className="p-3">Total Orders</th>
            </tr>
          </thead>
          <tbody>
            {filteredCustomers.length > 0 ? (
              filteredCustomers.map((cust, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="p-3">{cust.name}</td>
                  <td className="p-3">{cust.email}</td>
                  <td className="p-3">{cust.phone}</td>
                  <td className="p-3">{cust.orders}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-3 text-center text-gray-500">
                  No customers found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Customers;
