export const GrandChild2 = ({ count, setCount }) => {
  return (
    <div style={{ border: "3px solid orange", margin: "2px" }}>
      <h2>Grand Child Component</h2>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>
  );
};
