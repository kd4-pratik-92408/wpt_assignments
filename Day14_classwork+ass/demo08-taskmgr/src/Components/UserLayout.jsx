
import { useContext } from 'react';
import { Link, Outlet } from 'react-router';
import { UserContext } from '../App';
 function Navbar(){
    return <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
            <div className='navbar-nav'>
                <Link className='nav-link' to="/user/adtask">Ad task</Link>
                <Link className='nav-link' to="/user/tasks">tasks</Link>
                <Link className='nav-link' to="/user/logout">logout</Link>

            </div>
        </div>
    </nav>
}

export function UserLayout(){
    const{user}=useContext(UserContext)
    return <>
    <Navbar/>
    <div>Hi {user?.name}</div>
    <Outlet/>
    </>
}