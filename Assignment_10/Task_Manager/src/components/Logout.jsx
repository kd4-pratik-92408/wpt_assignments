import React from "react";
import { Link } from "react-router";

function Logout() {
  return (
    <div>
      <h1>Thank You</h1>
      GO TO : <Link to={"/login"}>Login</Link>
    </div>
  );
}

export default Logout;
