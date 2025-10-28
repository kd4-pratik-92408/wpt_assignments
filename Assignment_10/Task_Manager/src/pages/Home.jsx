import React from "react";
import NavBar from "../components/NavBar";

function Home() {
  return (
    <div>
      <h1>Hello</h1>
      <h2>Welcome User</h2>
      <h3>
        name={localStorage.getItem("name")} <br />
        email={localStorage.getItem("email")}
      </h3>
    </div>
  );
}

export default Home;
