 
import axios from 'axios';
import { BASE_URL } from './Config';

 export async function findUserByCredentials({email,passwd}){
    const url= BASE_URL+"/users/authenticate"
    const response= await axios.post(url,{email,passwd})
    const resp=response.data
    if(resp?.status==="success")
        return resp.data
    throw new Error(resp?.error)
}

export async function changePassword(newPassword){
    debugger;
    const url=BASE_URL+"/users/password"
    const token= sessionStorage.getItem('token')
    const response= await axios.patch(url,{password:newPassword},{
        headers: {
            Authorization:`Bearer ${token}`
        }
    })
}

export async function register({name,email,password,confirmPassword,mobile}){
    const url=BASE_URL+"/users"
    const response=await axios.post(url,{name,email,password,confirmPassword,mobile})
    const resp=response.data
    if(resp?.status==="success")
        return resp.data
    throw new Error(resp?.error)    
}

export async function updateUser({name,mobile}){
    const url=BASE_URL+"/users"
    const token =sessionStorage.getItem('token')
    
    const response=await axios.put(url,{name,mobile},{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    const resp=response.data
    if(resp?.status==="success")
        return resp.data
    throw new Error(resp?.error)
}