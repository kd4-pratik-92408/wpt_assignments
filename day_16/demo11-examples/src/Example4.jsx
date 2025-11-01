import { useEffect, useRef } from "react";

function UncontrolledInput() {
	const inputRef = useRef(null);
	const inputRef2 = useRef(null);

	const handleSubmit = (event) => {
		event.preventDefault();
		// Access value only when needed
		//alert(`Submitted value: ${inputRef.current.value}`);
		inputRef2.current.value = inputRef.current.value;
	};

	return (
		<form onSubmit={handleSubmit}>
			<input type="text" ref={inputRef} placeholder="Type something..." />
			<button type="submit">Submit</button>
			<br />
			<input type="text" ref={inputRef2} />
		</form>
	);
}

function Example4() {
	return (
		<div>
			<h3>Uncontrolled Component</h3>
			<UncontrolledInput />
		</div>
	);
}

export default Example4;
