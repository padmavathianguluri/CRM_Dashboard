import React, { useState } from "react";

const sampleUsers = [
  {
    name: "Admin User",
    email: "admin@example.com",
    role: "Admin",
    access: "Full",
  },
  {
    name: "Padma",
    email: "padma@example.com",
    role: "Manager",
    access: "Moderate",
  },
  {
    name: "Support Agent",
    email: "support@example.com",
    role: "Support",
    access: "Limited",
  },
  {
    name: "Guest User",
    email: "guest@example.com",
    role: "Viewer",
    access: "Read Only",
  },
];

const Users = () => {
  const [search, setSearch] = useState("");

  const filteredUsers = sampleUsers.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Users</h2>

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
              <th className="p-3">Role</th>
              <th className="p-3">Access Level</th>
            </tr>
          </thead>
          <tbody>
            {filteredUsers.length > 0 ? (
              filteredUsers.map((user, index) => (
                <tr
                  key={index}
                  className="border-b dark:border-gray-700 text-sm hover:bg-gray-50 dark:hover:bg-gray-700"
                >
                  <td className="p-3">{user.name}</td>
                  <td className="p-3">{user.email}</td>
                  <td className="p-3">{user.role}</td>
                  <td className="p-3">{user.access}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-3 text-center text-gray-500">
                  No users found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Users;
