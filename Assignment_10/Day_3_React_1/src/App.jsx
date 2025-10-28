import { useState } from "react";
import { Parent2 } from "./components_demo_2/Parent2";
import ClassBased from "./components_demo_3/ClassBased";
import FunctionalComponent from "./components_demo_4/FunctionalComponent";

function App() {
  const [isActive, setIsActive] = useState(true);
  return (
    <>
      {/* <Parent2 /> */}
      {/* <ClassBased /> */}
      <button
        onClick={() => (isActive ? setIsActive(false) : setIsActive(true))}
      >
        toggle
      </button>
      {isActive && <FunctionalComponent></FunctionalComponent>}
    </>
  );
}

export default App;
