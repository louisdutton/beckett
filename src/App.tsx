import { createContext, useEffect, useRef, useState } from "react";
import Toolbar from "./components/Toolbar";
import Line from "./components/Line";
import BlockProvider, { useBlocks } from "./components/BlockContext";

const App = () => {
	const { blocks } = useBlocks();

	return (
		<div className="flex h-screen bg-neutral-100">
			<Toolbar />
			<div className="flex flex-col w-full gap-4 p-16 font-mono text-xl print:text-base">
				<ul>
					{blocks.map(() => (
						<li>
							<Line />
						</li>
					))}
				</ul>
			</div>
		</div>
	);
};

export default App;
