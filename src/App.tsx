import Line from "./components/Line";
import { Chat, Sword } from "phosphor-react";
import { useAppSelector } from "./lib/hooks";
import { add } from "./lib/reducers/blocks";
import TitlePage from "./components/TitlePage";
import BlockButtons from "./components/BlockButtons";

const App = () => {
	const { blocks, metadata } = useAppSelector((state) => state);

	return (
		<div className="h-screen font-mono text-xl bg-neutral-100 print:text-base">
			<TitlePage metadata={metadata} />

			<ul className="flex flex-col w-full p-16 transition-all duration-300 print:leading-4 print:block">
				{blocks.map((block, i) => (
					<li key={i} className="mb-4 print:m-0">
						<Line />
					</li>
				))}
				<BlockButtons />
			</ul>
		</div>
	);
};

export default App;
