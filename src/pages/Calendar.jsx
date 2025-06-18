// src/pages/Calendar.jsx
import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css"; // Import default styles

const CalendarPage = () => {
  const [value, setValue] = useState(new Date());

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Monthly Calendar</h2>
      <div className="max-w-md mx-auto bg-white rounded shadow p-4 dark:bg-gray-800">
        <Calendar onChange={setValue} value={value} />
        <p className="mt-4 text-center dark:text-white">
          Selected Date: {value.toDateString()}
        </p>
      </div>
    </div>
  );
};

export default CalendarPage;
