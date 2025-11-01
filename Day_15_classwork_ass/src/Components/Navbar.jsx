import { Link } from "react-router";

export function Navbar(){
    return <nav className="navbar navbar-expand-lg lg-bg-body-tertiary">
        <div className="container-fluid">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link className="nav-link" to="/user/profile">Profile</Link>
                </li>
                <li className="nav-item">
                    <Link to="/user/dashboard" className="nav-link">Dashboard</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/user/foods">Foods</Link>
                </li>                
                <li className="nav-item">
                    <Link className="nav-link" to="/user/changepassword">change password</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/user/theme">change theme</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/user/addfood">Add food</Link>
                </li>


            </ul>
        </div>
    </nav>
}
export default Navbar