import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";

const barData = [
  { name: "Jan", orders: 30 },
  { name: "Feb", orders: 45 },
  { name: "Mar", orders: 65 },
  { name: "Apr", orders: 80 },
];

const pieData = [
  { name: "Orders", value: 100 },
  { name: "Customers", value: 75 },
  { name: "Users", value: 50 },
  { name: "Products", value: 120 },
];

const COLORS = ["#8884d8", "#82ca9d", "#ffc658", "#ff8042"];

const Analytics = () => {
  return (
    <div className="mt-8 grid gap-8 md:grid-cols-2">
      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">Monthly Orders</h2>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={barData}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="orders" fill="#3182ce" />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow">
        <h2 className="text-lg font-bold mb-2">CRM Stats</h2>
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((_, index) => (
                <Cell key={index} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend />
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Analytics;
