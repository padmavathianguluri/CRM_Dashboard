import React, { useState, useEffect } from "react";

const Tasks = () => {
  const [tasks, setTasks] = useState(
    () => JSON.parse(localStorage.getItem("tasks")) || []
  );
  const [newTask, setNewTask] = useState("");
  const [editingIndex, setEditingIndex] = useState(null);
  const [filter, setFilter] = useState("all");

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (!newTask.trim()) return;

    const taskObject = {
      text: newTask,
      completed: false,
    };

    if (editingIndex !== null) {
      const updated = [...tasks];
      updated[editingIndex].text = newTask;
      setTasks(updated);
      setEditingIndex(null);
    } else {
      setTasks([...tasks, taskObject]);
    }

    setNewTask("");
  };

  const toggleStatus = (index) => {
    const updated = [...tasks];
    updated[index].completed = !updated[index].completed;
    setTasks(updated);
  };

  const editTask = (index) => {
    setNewTask(tasks[index].text);
    setEditingIndex(index);
  };

  const deleteTask = (index) => {
    const updated = tasks.filter((_, i) => i !== index);
    setTasks(updated);
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "all") return true;
    if (filter === "completed") return task.completed;
    if (filter === "pending") return !task.completed;
  });

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Tasks</h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Enter task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          onClick={addTask}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {editingIndex !== null ? "Update" : "Add"}
        </button>
      </div>

      <div className="flex gap-2 mb-4">
        <button
          onClick={() => setFilter("all")}
          className={`px-3 py-1 rounded ${
            filter === "all" ? "bg-blue-600 text-white" : "bg-gray-200"
          }`}
        >
          All
        </button>
        <button
          onClick={() => setFilter("completed")}
          className={`px-3 py-1 rounded ${
            filter === "completed" ? "bg-green-600 text-white" : "bg-gray-200"
          }`}
        >
          Completed
        </button>
        <button
          onClick={() => setFilter("pending")}
          className={`px-3 py-1 rounded ${
            filter === "pending" ? "bg-yellow-500 text-white" : "bg-gray-200"
          }`}
        >
          Pending
        </button>
      </div>

      <ul className="space-y-2">
        {filteredTasks.map((task, index) => (
          <li
            key={index}
            className="flex justify-between items-center bg-white dark:bg-gray-800 p-3 rounded shadow"
          >
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => toggleStatus(index)}
              />
              <span
                className={`${
                  task.completed ? "line-through text-gray-500" : ""
                }`}
              >
                {task.text}
              </span>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => editTask(index)}
                className="text-blue-500 hover:underline"
              >
                Edit
              </button>
              <button
                onClick={() => deleteTask(index)}
                className="text-red-500 hover:underline"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tasks;
