import React, { useState, useEffect } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CalendarPage = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [events, setEvents] = useState(() => {
    const saved = localStorage.getItem("calendarEvents");
    return saved ? JSON.parse(saved) : {};
  });
  const [newEvent, setNewEvent] = useState("");

  // Save events to localStorage
  useEffect(() => {
    localStorage.setItem("calendarEvents", JSON.stringify(events));
  }, [events]);

  const formatDate = (date) => date.toISOString().split("T")[0];

  const handleAddEvent = () => {
    const key = formatDate(selectedDate);
    if (!newEvent.trim()) return;
    const updated = {
      ...events,
      [key]: [...(events[key] || []), newEvent],
    };
    setEvents(updated);
    setNewEvent("");
  };

  const handleDeleteEvent = (dateKey, index) => {
    const updated = { ...events };
    updated[dateKey].splice(index, 1);
    if (updated[dateKey].length === 0) delete updated[dateKey];
    setEvents(updated);
  };

  // Custom tile content: highlight days with events
  const tileContent = ({ date, view }) => {
    const key = formatDate(date);
    if (view === "month" && events[key]) {
      return <div className="text-xs text-blue-600 text-center">•</div>;
    }
    return null;
  };

  const selectedKey = formatDate(selectedDate);

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Event Calendar</h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Calendar */}
        <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
          <Calendar
            onChange={setSelectedDate}
            value={selectedDate}
            tileContent={tileContent}
          />
        </div>

        {/* Add + Show Events */}
        <div className="bg-white dark:bg-gray-800 rounded shadow p-4">
          <h3 className="text-lg font-semibold mb-2">
            Events on {selectedDate.toDateString()}
          </h3>

          <div className="flex gap-2 mb-4">
            <input
              type="text"
              value={newEvent}
              onChange={(e) => setNewEvent(e.target.value)}
              placeholder="Enter event"
              className="border p-2 rounded w-full"
            />
            <button
              onClick={handleAddEvent}
              className="bg-blue-600 text-white px-4 rounded"
            >
              Add
            </button>
          </div>

          <ul className="space-y-2">
            {(events[selectedKey] || []).map((event, index) => (
              <li
                key={index}
                className="flex justify-between items-center bg-gray-100 dark:bg-gray-700 px-3 py-2 rounded"
              >
                <span>{event}</span>
                <button
                  onClick={() => handleDeleteEvent(selectedKey, index)}
                  className="text-red-500 text-sm"
                >
                  Delete
                </button>
              </li>
            ))}
            {!(events[selectedKey] || []).length && (
              <p className="text-gray-500 text-sm italic">
                No events for this day
              </p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;
