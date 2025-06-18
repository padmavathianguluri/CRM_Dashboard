import React from "react";

const customers = ["Alice", "Bob", "Charlie", "David"];

const Customers = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Customers</h1>
      <ul className="space-y-2">
        {customers.map((name, i) => (
          <li key={i} className="bg-white dark:bg-gray-800 p-4 rounded shadow">
            {name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Customers;
