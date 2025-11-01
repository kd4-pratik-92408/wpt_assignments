import { useState } from "react";
import { Link, Route, Routes } from "react-router";
import Example1 from "./Example1";
import Example2 from "./Example2";
import Example3 from "./Example3";
import Example4 from "./Example4";
import Example5 from "./Example5";

function App() {
	return (
		<div>
			<h2>React Features</h2>
			<Link to="/ex1">1. Problem - Isolated Counters</Link> <br />
			<Link to="/ex2">2. Solution - Shared Counters</Link> <br />
			<Link to="/ex3">3. Controlled Component</Link> <br />
			<Link to="/ex4">4. Uncontrolled Component</Link> <br />
			<Link to="/ex5">5. Error Boundaries</Link> <br />
			<hr />
			<Routes>
				<Route index element=<p>Select an Example!</p> />
				<Route path="/ex1" element=<Example1 /> />
				<Route path="/ex2" element=<Example2 /> />
				<Route path="/ex3" element=<Example3 /> />
				<Route path="/ex4" element=<Example4 /> />
				<Route path="/ex5" element=<Example5 /> />
			</Routes>
		</div>
	);
}

export default App;
