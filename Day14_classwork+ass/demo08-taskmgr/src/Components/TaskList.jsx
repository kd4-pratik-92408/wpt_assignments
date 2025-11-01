import { useState } from "react"
import { Link, useNavigate } from 'react-router';
import { deleteTaskById, findAllTasks, findTaskById, taskSave } from "../services/tasks";
import { useEffect } from "react";
import { useContext } from "react";
import { UserContext } from './../App';

function TaskList() {
    const[tasks,setTaskList]=useState([])
    const {user}=useContext(UserContext)
    const navigate=useNavigate()



    useEffect(()=>{

        if(!user)
            navigate('/login')
        else{
            const result=findAllTasks()
            setTaskList(result.filter((e)=>e.userEmail===user.email))

        }

    
    },[])
    

    const handleBtndelete=(id)=>{
        const result =deleteTaskById(id)
        setTaskList(result.filter((e)=> e.userEmail===user.email ))

    }


    return <div>
        <h3>My Tasks</h3>
        <table className="table border border-4" >
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Description</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                    tasks.map((t)=><tr key={t.id}>
                        <td>{t.id}{console.log(t.id)}</td>
                        <td>{t.task}</td>
                        <td>{t.desc}</td>
                        <td><button className="btn btn-danger" onClick={()=>handleBtndelete(t.id)}>Delete</button></td>
    
                    </tr>
                    )
                }

            </tbody>


        </table>
        <div  style={{textAlign:"center"} } >
            <Link className="btn btn-primary" to="/user/adtask">Ad task</Link>
            <Link className="btn btn-primary " style={{marginLeft:'10px'}} to='/user/logout'>Log Out</Link>
        </div>
    </div>
}

export default TaskList