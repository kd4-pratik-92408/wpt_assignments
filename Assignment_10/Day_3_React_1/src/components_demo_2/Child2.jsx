export const Child2 = ({ children }) => {
  return (
    <div
      style={{
        border: "3px solid blue",
        display: "inline-block",
        margin: "2px",
      }}
    >
      <h2>Child Component</h2>
      {children}
    </div>
  );
};
