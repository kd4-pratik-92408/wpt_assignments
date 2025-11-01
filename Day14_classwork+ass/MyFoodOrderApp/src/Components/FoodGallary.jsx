import { useEffect, useState } from "react"
import { getFoods } from "../services/Foods"
import { toast } from "react-toastify"
import FoodItem from "./FoodItem"
import { BASE_URL } from "../services/Config"
import axios from "axios"

function FoodGallary(){
    const[foods,setFoods]=useState([])


    useEffect(()=>{
        debugger;
         async function getFoods(){

            const url=BASE_URL+"/foods"
            const token=sessionStorage.getItem('token')
            try{
                const response= await axios.get(url,{
                    headers:{
                    Authorization:`Bearer ${token}`
                }
            })
            const res=response.data
            if(res?.status==="success")
                setFoods(res.data)

            }catch(err){
                toast.error(err.message)

            }

    }
    getFoods()

    },[])

    return <>
        {
            foods.map((f)=><FoodItem key={f.fid}
            name={f.name}
            price={f.price}
            description={f.description}
            type={f.type}
            />) 
        }
    </>
}
export default FoodGallary