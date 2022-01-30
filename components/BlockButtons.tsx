import { Chat, Sword } from "phosphor-react";
import { useAppDispatch } from "../lib/hooks";
import { add } from "../lib/reducers/blocks";

const BlockButtons = () => {
	const dispatch = useAppDispatch();

	return (
		<div className="flex flex-col gap-2 sm:flex-row print:hidden justify-evenly">
			<button
				onClick={() => dispatch(add())}
				className="flex items-center justify-center w-full gap-2 px-5 py-3 text-white uppercase transition-colors bg-blue-500 rounded shadow-md hover:bg-blue-600">
				<Chat size={28} weight="fill" /> Line
			</button>
			<button
				onClick={() => dispatch(add())}
				className="flex items-center justify-center w-full gap-2 px-5 py-3 text-blue-500 uppercase transition-colors border-2 border-blue-500 rounded hover:border-blue-600">
				<Sword size={28} /> Action
			</button>
		</div>
	);
};

export default BlockButtons;
