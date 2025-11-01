
import { useEffect } from 'react';
import { useAuth } from './../Providers/AuthProvider';
import { useNavigate } from 'react-router';

function Logout(){
    const{setUser}=useAuth()
    const navigate=useNavigate()

    useEffect(()=>{
        setUser(null)
        

    },[])

    return <div className='container'>
        <h3>Thanks for visiting</h3>
        <button className='btn btn-success' onClick={()=>navigate('/login')}>Login again</button>




    </div>
}
export default Logout