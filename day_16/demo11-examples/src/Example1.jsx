import { useEffect, useState } from "react";

function Counter() {
	const [count, setCount] = useState(0);
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Count: {count}</button>
		</div>
	);
}

function Example1() {
	return (
		<div>
			<h3>Problem - Isolated Counters</h3>
			<Counter /> <br />
			<Counter />
		</div>
	);
}

export default Example1;
