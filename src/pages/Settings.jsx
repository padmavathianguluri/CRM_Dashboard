import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContextProvider";

const Settings = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const [userInfo, setUserInfo] = useState(() => {
    const saved = localStorage.getItem("userInfo");
    return saved
      ? JSON.parse(saved)
      : { username: "admin", email: "admin@example.com" };
  });

  const [editableInfo, setEditableInfo] = useState(userInfo);

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(userInfo));
  }, [userInfo]);

  const handleChange = (e) => {
    setEditableInfo({ ...editableInfo, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    setUserInfo(editableInfo);
    alert("Settings saved locally!");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Settings</h2>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow mb-6 max-w-md">
        <h3 className="text-lg font-semibold mb-3">User Information</h3>

        <div className="mb-4">
          <label className="block text-sm mb-1">Username</label>
          <input
            name="username"
            value={editableInfo.username}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm mb-1">Email</label>
          <input
            name="email"
            value={editableInfo.email}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>

        <button
          onClick={handleSave}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Save Changes
        </button>
      </div>

      <div className="bg-white dark:bg-gray-800 p-4 rounded shadow max-w-md">
        <h3 className="text-lg font-semibold mb-3">Appearance</h3>
        <button
          onClick={toggleTheme}
          className="bg-gray-200 dark:bg-gray-600 text-black dark:text-white px-4 py-2 rounded"
        >
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </div>
  );
};

export default Settings;
