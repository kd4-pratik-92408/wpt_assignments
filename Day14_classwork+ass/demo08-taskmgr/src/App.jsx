import { useState } from 'react'
import { Route, Routes } from 'react-router';
import Login from './Components/Login';
import Register from './Components/Register';
import TaskList from './Components/TaskList';
import TaskForm from './Components/TaskForm';
import LogOut from './Components/LogOut';
import { createContext } from 'react';
import { UserLayout } from './Components/UserLayout';


export const UserContext = createContext({}) 
function App() {
  const[user,setUser]=useState(null)


  return (
    <div>
      <UserContext.Provider value={{user,setUser}}>
      <Routes>
        <Route path='/login' element=<Login/> />
        <Route path='/register' element=<Register/> />
          <Route path="/user" element=<UserLayout/> >
            <Route path="tasks" element=<TaskList/> />
            <Route path="adtask" element=<TaskForm/> />
          </Route>
        <Route path='/user/logout' element=<LogOut/> />
        
      </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App
