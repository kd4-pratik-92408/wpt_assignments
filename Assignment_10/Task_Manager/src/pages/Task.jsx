import React from "react";
import TaskTable from "../components/TaskTable";
import { useNavigate } from "react-router";

function Task() {
  const navigate = useNavigate();
  return (
    <div>
      <TaskTable />
      <button className="btn btn-primary" onClick={() => navigate("/taskForm")}>
        Add Task
      </button>
    </div>
  );
}

export default Task;
