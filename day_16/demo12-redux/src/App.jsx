import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

// CounterDisplay.jsx
import { useSelector } from "react-redux";

function CounterDisplay() {
	const count = useSelector((store) => store.counter.value);
	return <h2>Count: {count}</h2>;
}

// CounterButtons.jsx
import { useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

function CounterButtons() {
	const dispatch = useDispatch();
	return (
		<div>
			<button
				onClick={() => {
					const incrAction = increment(5);
					dispatch(incrAction);
				}}
			>
				+
			</button>
			<button
				onClick={() => {
					const decrAction = decrement();
					dispatch(decrAction);
				}}
			>
				-
			</button>
		</div>
	);
}

function App() {
	return (
		<div>
			<h1>Redux Demo</h1>
			<CounterDisplay />
			<CounterButtons />
		</div>
	);
}

export default App;
