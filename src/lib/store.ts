import { configureStore } from "@reduxjs/toolkit";
import blocks from "./reducers/blocks";
import metadata from "./reducers/metadata";

const store = configureStore({
	reducer: {
		metadata,
		blocks,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
