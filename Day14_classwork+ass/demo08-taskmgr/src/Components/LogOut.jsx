
import { useContext } from 'react';
import { Link } from 'react-router';
import { UserContext } from './../App';
import { useEffect } from 'react';


function LogOut(){

    const {setUser}=useContext(UserContext)

    useEffect(()=>{

        setUser(null)
    },[])

    return <div>

        <div>
        <h1>Thank you </h1>
            
        </div>
        <div style={{textAlign:"center"}}>
            <Link className='btn btn-primary'  to='/login'>Log in Again</Link>
        </div>
        
    </div>
}
export default LogOut
