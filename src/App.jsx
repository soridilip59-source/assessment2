import { useState } from "react";

import Navbar from "./components/Navbar";
import Button from "./components/Button";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import "./App.css"
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      title: "Learn React",
      description: "Practice props and state",
      priority: "High",
      status: "Pending",
    },
    {
      id: 2,
      title: "Learn JavaScript",
      description: "Practice arrays and objects",
      priority: "Medium",
      status: "Completed",
    },
  ]);

  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  // Add task
  function addTask(newTask) {
    setTasks([...tasks, newTask]);
  }

  // Delete task
  function deleteTask(id) {
    const updatedTasks = tasks.filter((task) => task.id !== id);

    setTasks(updatedTasks);
  }

  // Complete task
  function completeTask(id) {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          status: "Completed",
        };
      }

      return task;
    });

    setTasks(updatedTasks);
  }

  // Search and filter
  const filteredTasks = tasks.filter((task) => {
    const matchesSearch = task.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    const matchesStatus =
      filterStatus === "All" || task.status === filterStatus;

    return matchesSearch && matchesStatus;
  });

  return (
    <div className="app">
      <Navbar
        title="My Personal Task Manager"
        subtitle="Plan. Execute. Achieve."
      />

      <TaskForm addTask={addTask} />

      <div className="controls">
        <input
          type="text"
          placeholder="Search tasks..."
          value={searchTerm}
          onChange={(event) => setSearchTerm(event.target.value)}
        />

        <select
          value={filterStatus}
          onChange={(event) => setFilterStatus(event.target.value)}
        >
          <option value="All">All Tasks</option>
          <option value="Pending">Pending</option>
          <option value="Completed">Completed</option>
        </select>
      </div>

      <div className="task-heading">
        <h2>My Tasks ({filteredTasks.length})</h2>

        <Button
          onClick={() => {
            setSearchTerm("");
            setFilterStatus("All");
          }}
        >
          Clear Filters
        </Button>
      </div>

      <TaskList
        tasks={filteredTasks}
        deleteTask={deleteTask}
        completeTask={completeTask}
      />
    </div>
  );
}

export default App;
