import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface MetaData {
	title: string;
	author: string;
	email: string;
	phone: string;
	characters: string[];
}

const initialState: MetaData = {
	title: "Title",
	author: "Author",
	email: "example@gmail.com",
	phone: "000-000-000",
	characters: ["Luiz", "Casilda"],
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
