import { useState } from "react";
import { taskSave } from "../services/tasks";
import { useNavigate } from 'react-router';
import { useContext } from "react";
import { UserContext } from "../App";
// import { taskSave } from './../services/tasks';
import { toast } from 'react-toastify';

function TaskForm(){
    const[taskData,setTaskData]=useState({
        task:'',
        desc:''
    })
    const navigate=useNavigate()
    const {user}=useContext(UserContext)


      const handleOnChange = (e) => setTaskData({...taskData, [e.target.id]: e.target.value})

    const handleBtnSave=()=>{
        const taskInfo = taskData
        taskInfo.userEmail=user.email
        taskSave(taskInfo)
        toast.success("task added")
        navigate('/user/tasks')

    }
    return <div className="col-6 m-3 p-3 box border border-2">
        <div className='form-group mb-3'>
            <label htmlFor="task">Task :</label>
            <input type="text" className="form-control mb-3" id="task" onChange={handleOnChange}/>
        </div>
        <div className='form-group mb-3'>
            <label htmlFor="desc">Description :</label>
            <input type="text" className="form-control mb3" id="desc" onChange={handleOnChange}/>
        </div>
        <div className='form-group mb-3'>
            <button className="btn btn-secondary m-3" onClick={handleBtnSave}>Save</button>
        </div>
    </div>
}

export default TaskForm