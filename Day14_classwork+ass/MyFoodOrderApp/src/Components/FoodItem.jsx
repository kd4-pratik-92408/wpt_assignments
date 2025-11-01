import { BASE_URL } from "../services/Config"

function FoodItem({name,price,description,type}){


    const url=name.split(" ").join("")

    return <div className="border border-4 shadow-lg m-3 p-3  bg-dark-subtle text-center d-inline-block justify-content-evenly">
        {/* <div>{fid}</div> */}
        <div><img style={{width:"180px", height:"220px"}} src={`${BASE_URL}/images/${url}.jpg`} alt="image" /></div>
        <div>{name}</div>
        <div>Rs. {price}/-</div>
        <div>{description}</div>
        <div>type: {type}</div>
    </div>

}
export default FoodItem