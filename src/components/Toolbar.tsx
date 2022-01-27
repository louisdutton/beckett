import { Chat, MagicWand, CaretRight } from "phosphor-react";
import { useState } from "react";

interface Props {
	// editorState: EditorState;
	// onToggle: () => void;
}

const Toolbar = () => {
	const [open, setOpen] = useState(false);
	// const selection = editorState.getSelection();
	// const blockType = editorState
	// 	.getCurrentContent()
	// 	.getBlockForKey(selection.getStartKey())
	// 	.getType();

	const openStyles = open ? "w-20" : "w-0";

	return (
		<div
			className={`relative p-4 bg-white shadow-md transition-all duration-300 print:hidden w-20`}>
			<ul className="flex flex-col items-center gap-2">
				{/* {BLOCKS.map((block) => (
					<li>
						<button className="flex items-center justify-center w-12 h-12 rounded-lg hover:bg-neutral-100 text-neutral-400">
							<Chat size={30} weight="fill" />
						</button>
					</li>
				))} */}
			</ul>

			{/* <button
				onClick={() => setOpen((open) => !open)}
				className="absolute flex items-center justify-center p-4 bg-white -right-6 top-1/2 rounded-r-xl text-neutral-500">
				<CaretRight size={24} weight="bold" />
			</button> */}
		</div>
	);
};

export default Toolbar;
