import { GrandChild } from "./GrandChild";

export const Child = ({ count, setCount }) => {
  return (
    <div
      style={{
        border: "3px solid blue",
        display: "inline-block",
        margin: "2px",
      }}
    >
      <h2>Child Component</h2>
      <GrandChild count={count} setCount={setCount} />
    </div>
  );
};
