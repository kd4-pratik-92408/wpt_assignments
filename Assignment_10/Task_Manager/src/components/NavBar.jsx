import React from "react";
import { Link, useNavigate } from "react-router";
function NavBar() {
  console.log("Inside Navbar");
  const navigate = useNavigate();
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg bg-body-tertiary navbar bg-primary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="#">
            Task Manager
          </Link>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link className="nav-link active" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/task">
                  Task
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/contactUs">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <form className="d-flex" role="search">
            <button
              className="btn btn-danger"
              type="submit"
              onClick={() => {
                sessionStorage.clear();
                navigate("/logout");
              }}
            >
              Logout
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
