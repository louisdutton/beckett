import "../styles/main.css";
import type { AppProps } from "next/app";
import { ReactReduxFirebaseProvider } from "react-redux-firebase";
import { store, props } from "../lib/store";
import { Provider } from "react-redux";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<Provider store={store}>
			<ReactReduxFirebaseProvider {...props}>
				<Component {...pageProps} />
			</ReactReduxFirebaseProvider>
		</Provider>
	);
}

export default MyApp;
