import { Chat, Sword } from "phosphor-react";
import { useAppDispatch } from "../lib/hooks";
import { add } from "../lib/reducers/blocks";

const BlockButtons = () => {
	const dispatch = useAppDispatch();

	return (
		<div className="flex flex-col gap-2 sm:flex-row print:hidden justify-evenly">
			<button
				onClick={() => dispatch(add())}
				className="flex items-center justify-center w-full gap-2 px-5 py-3 text-white uppercase transition-colors rounded shadow-md bg-primary-400 hover:bg-primary-500">
				<Chat size={28} weight="fill" /> Line
			</button>
			<button
				onClick={() => dispatch(add())}
				className="flex items-center justify-center w-full gap-2 px-5 py-3 uppercase transition-colors border-2 rounded text-primary-400 border-primary-400 hover:border-primary-500">
				<Sword size={28} /> Action
			</button>
		</div>
	);
};

export default BlockButtons;
