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

export async function savFoodItem(data){
    const url=BASE_URL+"foods"
    const token=sessionStorage.getItem('token')
    const response= await axios.post(url,data,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    if(response.status===200){
        const resp = response.data
        if(resp.status==="success")
            return resp.data
        throw new Error(resp.error)

    }
    throw new Error( response.status)

}

export async function deleteFoodItemById(id){
    const url=`${BASE_URL}/foods/${id}`
    const token=sessionStorage.getItem('token')
    const response= await axios.delete(url,{
        headers:{
            Authorization:`Bearer ${token}`
        }
    })
    if(response.status===200){
        const resp=response.data
        if(resp.status==="success")
            return resp.data
        throw new Error(resp.error)
    }
    throw new Error(response.status)
}