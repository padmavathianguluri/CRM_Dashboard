import React from "react";
import {
  FaTachometerAlt,
  FaShoppingCart,
  FaUsers,
  FaUser,
  FaBox,
  FaCog,
} from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

const Sidebar = () => {
  const location = useLocation();

  const menuItems = [
    { name: "Dashboard", icon: <FaTachometerAlt />, path: "/" },
    { name: "Orders", icon: <FaShoppingCart />, path: "/orders" },
    { name: "Customers", icon: <FaUsers />, path: "/customers" },
    { name: "Users", icon: <FaUser />, path: "/users" },
    { name: "Products", icon: <FaBox />, path: "/products" },
    { name: "Settings", icon: <FaCog />, path: "/settings" },
  ];

  return (
    <div className="bg-gray-100 text-gray-900 h-screen px-4 fixed w-16 md:w-64 border-rborder-gray-300">
      <h1 className="text-2xl font-bold hidden md:block mt-4 text-center italic">
        CWY Shop
      </h1>
      <ul className="flex flex-col mt-5 text-xl">
        {/* <li
          className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
        >
          <FaTachometerAlt />
          <span className="hidden md:inline">Dashboard</span>
        </li>
        <li
          className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
        >
          <FaShoppingCart />
          <span className="hidden md:inline ">Orders</span>
        </li>
        <li
          className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
        >
          <FaUsers />
          <span className="hidden md:inline ">Customers</span>
        </li>
        <li
          className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
        >
          <FaUser />
          <span className="hidden md:inline ">Users</span>
        </li>
        <li
          className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
        >
          <FaBox />
          <span className="hidden md:inline ">Products</span>
        </li>
        <li
          className="flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
        hover:text-white hover:bg-blue-600"
        >
          <FaCog />
          <span className="hidden md:inline ">Settings</span>
        </li>*/}
        {menuItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className={`flex items-center py-3 px-2 space-x-4 hover:rounded hover:cursor-pointer 
              hover:bg-blue-600 hover:text-white transition-all duration-200 ${
                location.pathname === item.path
                  ? "bg-blue-600 text-white rounded"
                  : ""
              }`}
            >
              {item.icon}
              <span className="hidden md:inline">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
