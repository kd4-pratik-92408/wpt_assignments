import { useContext } from "react"
import { CounterContext } from "./Parent"

export function GrandChild(){

    const{count,setCount}=useContext(CounterContext)
    return <div>
        <h4>GrandChild {count}</h4>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
}