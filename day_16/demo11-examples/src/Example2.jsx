import { useEffect, useState } from "react";

function Counter({ count, setCount }) {
	return (
		<div>
			<button onClick={() => setCount(count + 1)}>Count: {count}</button>
			{/* Child updating parent's state, causing parent to re-render. */}
		</div>
	);
}

function Example2() {
	// common state in parent
	const [count, setCount] = useState(0);

	return (
		<div>
			<h3>Solution - Shared Counters</h3>
			<Counter count={count} setCount={setCount} /> <br />
			<Counter count={count} setCount={setCount} />
		</div>
	);
}

export default Example2;
