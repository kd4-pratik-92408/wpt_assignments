import { useState } from "react";
import { Child } from "./Child";

export const Parent = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: "3px solid red", display: "inline-block" }}>
      <h2>
        Parent Component <br />
        Count : {count}
      </h2>
      <Child count={count} setCount={setCount} />
    </div>
  );
};
