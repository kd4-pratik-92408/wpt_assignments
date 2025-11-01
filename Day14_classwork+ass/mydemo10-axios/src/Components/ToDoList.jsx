import axios from "axios"
import { useEffect } from "react"
import { useState } from "react"

function ToDoList(){
    const[todos,setTodo]=useState([])

    useEffect(()=>{
        async function fetchData(){
            const url="http://jsonplaceholder.typicode.com/todos"
            const response= await axios.get(url)
            if(response.status===200)
                setTodo(response.data)
        }
        fetchData()
    },[])

    return <div>
        <table className="table">
            <thead>
                <tr>
                    <th>userId</th>
                    <th>TodoId</th>
                    <th>title</th>
                    <th>Completed</th>
                </tr>
            </thead>
            <tbody>
                {
                    todos.map((t)=> <tr key={t.id}>
                        <td>{t.userId}</td>
                        <td>{t.id}</td>
                        <td>{t.title}</td>
                        <td>{t.completed ? "Done":"not done"}</td>

                    </tr>)
                }
            </tbody>


        </table>
    </div>

}
export default ToDoList