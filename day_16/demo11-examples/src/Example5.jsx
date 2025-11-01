import { useEffect, useState } from "react";
import { ErrorBoundary } from "react-error-boundary";

function ErrorFallback({ error, resetErrorBoundary }) {
	return (
		<div style={{ padding: "10px", border: "1px solid red" }}>
			<h4>Something went wrong:</h4>
			<p style={{ color: "red" }}>{error.message}</p>
			<button onClick={resetErrorBoundary}>Try Again</button>
		</div>
	);
}

function BuggyCounter() {
	const [count, setCount] = useState(0);

	// Simulate an error when count reaches 5
	if (count === 5) {
		throw new Error("Counter crashed at count 5!");
	}

	return (
		<div style={{ margin: "10px" }}>
			<div>Count: {count}</div>
			<button onClick={() => setCount(count + 1)}>Increment</button>
		</div>
	);
}

function Example5() {
	return (
		<ErrorBoundary
			FallbackComponent={ErrorFallback}
			onReset={() => alert("App recovered from error")}
		>
			<div>
				<h3>Error Boundaries</h3>
			</div>
			<BuggyCounter />
		</ErrorBoundary>
	);
}

export default Example5;
