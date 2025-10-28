import { useState } from "react";
import { Child2 } from "./Child2";
import { GrandChild2 } from "./GrandChild2";

export const Parent2 = () => {
  const [count, setCount] = useState(0);
  return (
    <div style={{ border: "3px solid red", display: "inline-block" }}>
      <h2>
        Parent Component <br />
        Count : {count}
      </h2>
      <Child2>
        <GrandChild2 count={count} setCount={setCount} />
      </Child2>
    </div>
  );
};
