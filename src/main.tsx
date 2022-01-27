import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import BlockProvider from "./components/BlockContext";

ReactDOM.render(
	<React.StrictMode>
		<BlockProvider>
			<App />
		</BlockProvider>
	</React.StrictMode>,
	document.getElementById("root")
);
