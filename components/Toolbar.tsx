import { UserList, Gear, MusicNote } from "phosphor-react";
import IconButton from "./IconButton";

interface Props {
	// editorState: EditorState;
	// onToggle: () => void;
}

const Toolbar = () => {
	return (
		<div className="sticky top-0 left-0 w-screen h-16 p-2 bg-blue-500 shadow-md sm:h-screen sm:w-16 print:hidden">
			<ul className="flex flex-col items-center justify-center h-full gap-2">
				<li>
					<IconButton>
						<Gear size={24} weight="fill" />
					</IconButton>
				</li>
				<li>
					<IconButton>
						<UserList size={24} weight="fill" />
					</IconButton>
				</li>
				<li>
					<IconButton>
						<MusicNote size={24} weight="fill" />
					</IconButton>
				</li>
			</ul>
		</div>
	);
};

export default Toolbar;
