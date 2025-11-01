import { useEffect, useState } from "react"
import FoodItem from "./FoodItem"
import {   deleteFoodItemById, getFoods } from "../services/foods"
import { toast } from "react-toastify"
import { useAuth } from "../Providers/AuthProvider"


function FoodGallery() {
    const [foods, setFoods] = useState([])
    const {user} = useAuth()
    
    // load data from backend when mount
    useEffect(() => {
        async function fetchData() {
            try{
                // call service to get data
                const data = await getFoods()
                // then set data into the state
                setFoods(data)
            } catch(err) {
                toast.error(err.message)
            }
        }
        fetchData()
    }, [])

    async function handleDelete(foodId) {
        // call service method to delete
        try{
            const message = await deleteFoodItemById(foodId)
            toast.success(message)
            const remainingFoods = foods.filter(f => f.fid !== foodId)
            setFoods(remainingFoods)
        } catch(err) {
            toast.error(err.message)
        }
    }



    return <div className="container">
        <div className="row row-cols-4">
            {foods.map((f) => <div className="col"> 
                <FoodItem key={f.fid} 
                name={f.name} 
                description={f.description} 
                type={f.type}
                image={f.image}
                price={f.price}
                />
                {user.role === 'ROLE_ADMIN' && <button className="btn btn-danger" onClick={() => handleDelete(f.fid)}>Delete</button>}
            </div>
            )}
        </div>
    </div>
}

export default FoodGallery

