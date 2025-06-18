import React from "react";

const users = [
  { name: "Admin A", role: "Admin" },
  { name: "Editor B", role: "Editor" },
  { name: "Viewer C", role: "Viewer" },
];

const Users = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Users</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {users.map((user, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 p-6 rounded shadow text-center"
          >
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-500 dark:text-gray-300">{user.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Users;
