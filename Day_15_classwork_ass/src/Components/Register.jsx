import { useState } from "react"
import { register } from "../services/Users"
import { toast } from "react-toastify"
import { useNavigate } from "react-router"

function Register(){

    const[formData,setFormData]=useState({
        name:'',
        email:'',
        password:'',
        confirmPassword:'',
        mobile:''

    })
    const navigate=useNavigate()

    const handleChange=(e)=>setFormData({...formData,[e.target.id]:e.target.value})
    
    const handleSubmitClick=async()=>{
        try{
            const user= await register(formData)
            navigate('/login')

        }catch(err){
            toast.error(err.message)


        }


    }
    return <div className='col-6 m-3 p-3 box border border-2'>
    <h3>Register</h3>
    <div className='form-group mb-3'>
      <label htmlFor='name'>Name: </label>
      <input type='text' id='name' className='form-control' onChange={handleChange}/>
    </div>
    <div className='form-group mb-3'>
      <label htmlFor='email'>Email: </label>
      <input type='text' id='email' className='form-control' onChange={handleChange}/>
    </div>
    <div className='form-group mb-3'>
      <label htmlFor='password'>Password: </label>
      <input type='password' id='password' className='form-control' onChange={handleChange}/>
    </div>
    <div className='form-group mb-3'>
      <label htmlFor='confirmPassword'>confirm Password: </label>
      <input type='password' id='confirmPassword' className='form-control' onChange={handleChange}/>
    </div>
    <div className='form-group mb-3'>
      <label htmlFor='mobile'>Mobile: </label>
      <input type='number' id='mobile' className='form-control' onChange={handleChange}/>
    </div>
    
    <div className='form-group mb-3'>
      <button className='btn btn-primary'  onClick={handleSubmitClick}>Register</button>
    </div>
  </div>
}
export default Register