import { List, UserList, Gear, MusicNote } from "phosphor-react";
import IconButton from "./IconButton";

interface Props {
	// editorState: EditorState;
	// onToggle: () => void;
}

const Toolbar = () => {
	return (
		<div
			className={`p-2 w-screen h-20 sm:h-screen sm:w-20 bg-blue-500 shadow-md print:hidden`}>
			<ul className="flex flex-col items-center justify-center h-full gap-2">
				<li>
					<IconButton>
						<List size={30} weight="fill" />
					</IconButton>
				</li>
				<li>
					<IconButton>
						<Gear size={30} weight="fill" />
					</IconButton>
				</li>
				<li>
					<IconButton>
						<UserList size={30} weight="fill" />
					</IconButton>
				</li>
				<li>
					<IconButton>
						<MusicNote size={30} weight="fill" />
					</IconButton>
				</li>
			</ul>
		</div>
	);
};

export default Toolbar;
