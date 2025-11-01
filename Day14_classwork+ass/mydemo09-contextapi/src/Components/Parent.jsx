import { createContext, useState } from "react";
import { Child } from "./Child";

export const CounterContext=createContext()
export function Parent(){
    const[count,setCount]=useState(0)


    return <div>
        <h1>Parent {count}</h1>
        <CounterContext.Provider value={{count,setCount}}>
            <Child/>
        </CounterContext.Provider>
       

    </div>
}
