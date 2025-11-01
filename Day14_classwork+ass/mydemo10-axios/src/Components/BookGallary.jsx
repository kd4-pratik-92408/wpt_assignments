import { useState } from "react"
import { useEffect } from "react"
import axios  from 'axios';
import Book from './Book';


function BookGallary(){
    const[books,setBooks]=useState([])


    useEffect(()=>{
       async function fetchData(){
            const url="https://nilesh-g.github.io/learn-web/data/novels.json"
            const response=await axios.get(url)

            if(response.status===200)
                setBooks(response.data)
        }
        fetchData()
        

    },[])
    return <>
        {
            books.map(e=><Book key={e.srno}
            srno={e.srno}
            title={e.title}
            author={e.author}
            category={e.category}
            price={e.price}
            />)
        }
    </>
}
export default BookGallary   