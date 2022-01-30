import { createSlice } from "@reduxjs/toolkit";

type BlockType = "line" | "action";
type BlockState = Block[];

export interface Block {
	type: BlockType;
	content: string;
}

const createBlock = (type: BlockType) => ({
	type,
	content: "",
});

const initialState: BlockState = [createBlock("line")];

export const counterSlice = createSlice({
	name: "blocks",
	initialState,
	reducers: {
		add: (state) => {
			state.push(createBlock("line"));
		},
		remove: (state) => {
			state.pop();
		},
	},
});

// Action creators are generated for each case reducer function
export const { add, remove } = counterSlice.actions;
export default counterSlice.reducer;
