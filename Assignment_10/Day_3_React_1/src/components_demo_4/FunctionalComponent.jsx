import React from "react";
import { useEffect } from "react";
import { useState } from "react";

function FunctionalComponent() {
  const [count, setCount] = useState(0);
  const [color, setColor] = useState("lightblue");
  useEffect(() => {
    console.log("Like Component Did Mount");
  }, []);

  useEffect(() => {
    console.log("Component Rendered");
  });

  useEffect(() => {
    console.log("Component Did Update");
    count % 2 == 0 ? setColor("lightgreen") : setColor("lightblue");
  }, [count]);

  useEffect(() => {
    console.log("Component Did Update - Color Changed");
  }, [color]);

  useEffect(() => {
    console.log("Component Did Mount");
    return () => {
      console.log("Component Will Unmount");
    };
  }, []);
  return (
    <div
      style={{ backgroundColor: color, display: "inline-block", margin: "5px" }}
    >
      <h1>Functional Component</h1>
      <h3>Count : {count}</h3>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  );
}

export default FunctionalComponent;
