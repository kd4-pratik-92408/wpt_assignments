import { useContext, useEffect, useState } from "react"

import { toast } from "react-toastify"
import { changePassword } from "../services/Users"
import {  useAuth } from "../Providers/AuthProvider"

function ChangePassword(){


    const[formData, setFormData]=useState({
        passwd:'',
        confirmPasswd:''
    })
    const {user,setUser}=useAuth

 

    const handleChange=(e)=>setFormData({...formData,[e.target.id]:e.target.value})

    const handleSubmitClick= async()=>{
        try{

            if(formData.confirmPasswd != formData.passwd){
                toast.error("password not match")
                return
            }
            const msg= await changePassword(formData.confirmPasswd)
            toast.success(" password changed")
        }catch(err){
            toast.error(err.message)

        }


    }


    return <div className='col-6 m-3 p-3 box border border-2'>
    <h3>Change Password</h3>
    <div className='form-group mb-3'>
      <label htmlFor='passwd'>Password: </label>
      <input type='password' id='passwd' className='form-control' onChange={handleChange}/>
    </div>
    <div className='form-group mb-3'>
      <label htmlFor='confirmPasswd'>Confirm Password: </label>
      <input type='password' id='confirmPasswd' className='form-control' onChange={handleChange}/>
    </div>
    <div className='form-group mb-3'>
      <button className='btn btn-primary mx-3' onClick={handleSubmitClick}>Change Password</button>
    </div>
  </div>
}
export default ChangePassword