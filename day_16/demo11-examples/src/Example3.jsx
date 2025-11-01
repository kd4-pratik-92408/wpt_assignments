import { useEffect, useState } from "react";

function ControlledInput() {
	const [inputValue, setInputValue] = useState("");

	const handleChange = (event) => {
		setInputValue(event.target.value);
	};

	return (
		<div>
			<input
				type="text"
				value={inputValue}
				onChange={handleChange}
				placeholder="Type something..."
			/>
			<p>Current value: {inputValue}</p>
		</div>
	);
}

function Example3() {
	return (
		<div>
			<h3>Controlled Component</h3>
			<ControlledInput />
		</div>
	);
}

export default Example3;
