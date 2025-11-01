import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
	name: "counter", // Slice name
	initialState: { value: 0 }, // Initial state
	reducers: {
		increment: (state, action) => {
			state.value += action.payload;
		}, // Mutations allowed (RTK uses Immer)
		decrement: (state, action) => {
			state.value -= 1;
		},
	},
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;
