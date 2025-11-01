import { useAuth } from "../Providers/AuthProvider"
import { Link } from 'react-router';

function ProtectedRoute(props){
    const {user}=useAuth()
    return <div>
        {
        user? props.children : <div>
            <h3>Unauthorized Access</h3> <p>please login again</p>
            <Link  to="/login" className="btn btn-success">Login here</Link>
        </div>  
        }
    </div>
}
export default ProtectedRoute