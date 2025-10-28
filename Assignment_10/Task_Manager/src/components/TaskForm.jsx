import React from "react";
import { useState } from "react";
import { taskSave } from "../services/tasks";
import { toast } from "react-toastify";
import { useNavigate } from "react-router";

function TaskForm() {
  const [title, setTitle] = useState();
  const [descp, setDescp] = useState();
  const navigate = useNavigate();

  return (
    <div className="form-group mb-3 col-6 m-3 p-3 box border border-2">
      <h2>Task Form</h2>
      <label htmlFor="title" className="mt-2">
        Title:{" "}
      </label>
      <input
        type="text"
        id="title"
        value={title}
        className="form-control mt-2"
        onChange={(e) => setTitle(e.target.value)}
      />
      <label htmlFor="descp" className="mt-2">
        Description:{" "}
      </label>
      <textarea
        id="descp"
        value={descp}
        className="form-control mt-2"
        onChange={(e) => setDescp(e.target.value)}
      ></textarea>
      <button
        className="btn btn-primary mt-3"
        onClick={() => {
          taskSave({ title: title, description: descp });
          toast.success("Task Added Successful");
          navigate("/task");
        }}
      >
        Submit
      </button>
    </div>
  );
}

export default TaskForm;
