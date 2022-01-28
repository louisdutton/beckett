import { Chat, Sword } from "phosphor-react";
import { useAppDispatch } from "../lib/hooks";
import { add } from "../lib/reducers/blocks";

const BlockButtons = () => {
	const dispatch = useAppDispatch();

	return (
		<div className="flex flex-col gap-2 sm:flex-row print:hidden justify-evenly">
			<button
				onClick={() => dispatch(add())}
				className="flex items-center justify-center w-full gap-2 px-5 py-3 text-white uppercase transition-colors bg-blue-400 rounded hover:bg-blue-500">
				<Chat size={20} /> Line
			</button>
			<button
				onClick={() => dispatch(add())}
				className="flex items-center justify-center w-full gap-2 px-5 py-3 text-white uppercase transition-colors bg-purple-400 rounded hover:bg-purple-500">
				<Sword size={20} /> Action
			</button>
		</div>
	);
};

export default BlockButtons;
