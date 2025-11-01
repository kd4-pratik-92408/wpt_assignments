import { createContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { Route, Routes } from 'react-router';
import Login from './Components/Login';
import ChangePassword from './Components/ChangePassword';
import Register from './Components/Register';
import UpdateProfile from './Components/UpdateProfile';
import FoodItem from './Components/FoodItem';
import FoodGallary from './Components/FoodGallary';


export const AuthContext= createContext({
  name:'guest'
})
function App() {
  const[user,setUser]= useState({name:'guest'})
  return <>
    <AuthContext.Provider value={{user,setUser}}>
      <Routes>
        <Route path='/login' element=<Login/> />
        <Route path='/user/changepassword' element=<ChangePassword/> />
        <Route path='/register' element=<Register/> />
        <Route path='/user/update' element=<UpdateProfile/> />
        <Route path='/user/foods' element=<FoodGallary/> />
      </Routes>


    </AuthContext.Provider>
    
    </>

}

export default App
