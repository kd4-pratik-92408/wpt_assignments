import axios from "axios";
import { BASE_URL } from "./Config";

export async function getFoods(){
    const url=BASE_URL+"/foods"
    const token=sessionStorage.getItem('token')
    const response= await axios.get(url,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    const res=response.data
    if(res?.status==="success")
        return res.data
    throw new Error(res?.error)
}