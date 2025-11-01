import { createContext, useContext, useState } from "react";

export const themeContext=createContext()

function ThemeProvider(props){
    const[theme,setTheme]=useState('lightblue')

    return <themeContext.Provider value={{theme,setTheme}}>
        <div style={{backgroundColor:theme, padding:"20px"}}>
        {props.children}

        </div>
    </themeContext.Provider>
}
export default ThemeProvider

export function useTheme(){
    const theme=useContext(themeContext)
    return theme
}