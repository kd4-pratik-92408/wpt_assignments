import React from "react";
import { findAllTasks } from "../services/tasks";
import TaskRow from "./TaskRow";
import { useState } from "react";
import { useEffect } from "react";

function TaskTable() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(findAllTasks());
  }, []);
  console.log(tasks);
  return (
    <div>
      <h2>Task Table</h2>
      <table className="table table-hover table-bordered " data-bs-theme="dark">
        <thead>
          <tr>
            <th>id</th>
            <th>title</th>
            <th>description</th>
            <th>action</th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <TaskRow
              id={task.id}
              title={task.title}
              description={task.description}
              setTasks={setTasks}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TaskTable;
