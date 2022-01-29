import { configureStore } from "@reduxjs/toolkit";
import blocks from "./reducers/blocks";
import metadata from "./reducers/metadata";
import {
	ReactReduxFirebaseConfig,
	ReactReduxFirebaseProvider,
	ReactReduxFirebaseProviderProps,
} from "react-redux-firebase";
import { firebase, firestore } from "./firebase";
import { createFirestoreInstance } from "redux-firestore";
import { Provider } from "react-redux";
import React from "react";

// Redux
export const store = configureStore({
	reducer: {
		metadata,
		blocks,
	},
});

// firebase
const firebaseConfig = {
	userProfile: "users",
	useFirestoreForProfile: true,
} as ReactReduxFirebaseConfig;

export const props: ReactReduxFirebaseProviderProps = {
	firebase,
	config: firebaseConfig,
	dispatch: store.dispatch,
	createFirestoreInstance,
};

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
