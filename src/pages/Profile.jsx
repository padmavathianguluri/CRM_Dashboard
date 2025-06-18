import React, { useEffect, useState } from "react";

const Profile = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const loggedUserEmail = JSON.parse(
      localStorage.getItem("loggedInUserEmail")
    );

    const currentUser = users.find((u) => u.email === loggedUserEmail);
    setUser(currentUser);
  }, []);

  if (!user) {
    return (
      <div className="p-6">
        <h2 className="text-xl">No user profile found.</h2>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">User Profile</h2>

      <div className="bg-white dark:bg-gray-800 p-6 rounded shadow-md max-w-md">
        <p className="mb-4">
          <strong>Full Name:</strong> {user.fullName}
        </p>
        <p className="mb-4">
          <strong>Email:</strong> {user.email}
        </p>
      </div>
    </div>
  );
};

export default Profile;
