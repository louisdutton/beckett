import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MetaData {
	title: string;
	author: string;
	email: string;
	phone: string;
	characters: Character[];
}

export interface Character {
	name: string;
	color: string;
}

const initialState: MetaData = {
	title: "Untitled",
	author: "Author",
	email: "example@gmail.com",
	phone: "000-000-000",
	characters: [
		{
			name: "Luiz",
			color: "",
		},
		{
			name: "Casilda",
			color: "",
		},
	],
};

export const counterSlice = createSlice({
	name: "blocks",
	initialState,
	reducers: {
		setTitle: (state, action: PayloadAction<string>) => {
			state.title = action.payload;
		},
	},
});

// Action creators are generated for each case reducer function
export const { setTitle } = counterSlice.actions;
export default counterSlice.reducer;
