import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const monthlySalesData = {
  labels: [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ],
  datasets: [
    {
      label: "Monthly Revenue (₹)",
      data: [
        25000, 30000, 27000, 32000, 31000, 35000, 40000, 39000, 37000, 41000,
        43000, 45000,
      ],
      backgroundColor: "#2563eb",
    },
  ],
};

const SalesAnalytics = () => {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Monthly Sales Analytics</h2>
      <div className="bg-white p-4 rounded shadow dark:bg-gray-800">
        <Bar data={monthlySalesData} />
      </div>
    </div>
  );
};

export default SalesAnalytics;
