import { useTheme } from "../Providers/ThemeProvider"

function ChangeTheme(){
    const{theme,setTheme}=useTheme()

    return <div>
        <h2>Change Theme</h2>
        <button className="btn btn-success m-3" onClick={()=> setTheme('lightgreen')}>Light Green </button>
        <button className="btn btn-info" onClick={()=> setTheme('lightblue')}>Light Blue </button>
    </div>
}
export default ChangeTheme