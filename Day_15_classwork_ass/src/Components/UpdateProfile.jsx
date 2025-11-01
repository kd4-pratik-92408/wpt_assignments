import { useEffect, useState } from "react"
import { updateUser } from "../services/Users"
import { toast } from "react-toastify"
import { Link } from "react-router"
import { useAuth } from "../Providers/AuthProvider"

function UpdateProfile(){

    const[formData,setFormData]=useState({
        name:'',
        mobile:''
    })
    const {user,setUser}=useAuth()

    useEffect(()=>{
      setFormData({name: user.name, mobile: user.mobile})

    },[])
    
    const handleSubmitClick=async()=>{
        try{
            const user= await updateUser(formData)
            toast.success("profile Updated")
            setUser({...user,name:formData.name,mobile:formData.mobile})

        }catch(err){
            toast.error(err.message)

        }
    }

    const handleChange=(e)=>setFormData({...formData,[e.target.id]:e.target.value})


    return <div className='col-6 m-3 p-3 box border border-2'>
    <h3>Update Profile</h3>
    <div className='form-group mb-3'>
      <label htmlFor='name'>Name: </label>
      <input type='text' id='name' className='form-control' onChange={handleChange} value={formData.name}/>
    </div>
    <div className='form-group mb-3'>
      <label htmlFor='mobile'>Mobile: </label>
      <input type='number' id='mobile' className='form-control' onChange={handleChange} value={formData.mobile}/>
    </div>
    <div className='form-group mb-3'>
      <button className='btn btn-primary'  onClick={handleSubmitClick}>Save Info</button>
       <Link className='btn btn-link mx-3' to="/user/changepassword">Update password</Link>
       <Link className='btn btn-link mx-3' to="/user/foods">food gallary</Link>
    </div>

    </div>
}

export default UpdateProfile