import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { store, props } from "./lib/store";
import { Provider } from "react-redux";

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...props}>
				<App />
			</ReactReduxFirebaseProvider>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);
