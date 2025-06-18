import React from "react";
import Card from "./Card";
import { FaBox, FaCog, FaShoppingCart, FaUsers } from "react-icons/fa";
import { dataLine, dataBar } from "../assets/chartData";
import { Line, Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from "chart.js";

// Register chart components
ChartJS.register(
  LineElement,
  BarElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title
);

const Dashboard = () => {
  return (
    <div className="grow p-6">
      <h2 className="text-2xl font-bold mb-6">Dashboard Overview</h2>

      {/* Summary Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <Card icon={<FaShoppingCart />} title="Orders" value="140" />
        <Card icon={<FaBox />} title="Products" value="120" />
        <Card icon={<FaUsers />} title="Users" value="30" />
        <Card icon={<FaCog />} title="Settings" value="11" />
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-5 rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-4">
            Sales Trend (Line Chart)
          </h3>
          <Line data={dataLine} options={{ responsive: true }} />
        </div>

        <div className="bg-white p-5 rounded-lg shadow dark:bg-gray-800">
          <h3 className="text-lg font-semibold mb-4">
            Products Sold (Bar Chart)
          </h3>
          <Bar data={dataBar} options={{ responsive: true }} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
