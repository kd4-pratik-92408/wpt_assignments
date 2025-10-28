import React from "react";
import { deleteTaskById } from "../services/tasks";
import { toast } from "react-toastify";

function TaskRow({ id, title, description, setTasks }) {
  return (
    <tr>
      <td>{id}</td>
      <td>{title}</td>
      <td>{description}</td>
      <td>
        <button
          className="btn btn-danger "
          onClick={() => {
            setTasks(deleteTaskById(id));
            toast.success("Task Deleted Successfully");
          }}
        >
          Delete
        </button>
      </td>
    </tr>
  );
}

export default TaskRow;
