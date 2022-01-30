import { Users, Gear, MusicNote, Eye } from "phosphor-react";
import { useAppSelector } from "../lib/hooks";
import IconButton from "./IconButton";

interface Props {
	// editorState: EditorState;
	// onToggle: () => void;
}

const Toolbar = () => {
	const { title } = useAppSelector((state) => state.metadata);

	return (
		<header className="sticky top-0 left-0 z-50 w-screen px-4 py-2 font-mono bg-white shadow-md print:hidden">
			<div className="flex items-center justify-between">
				<p className="flex gap-2 px-4 text-sm text-slate-500">
					<a href="#act-1" className="transition-colors hover:text-black">
						{title}
					</a>
					<p>/</p>
					<a href="#act-1" className="transition-colors hover:text-black">
						Act I
					</a>
					<p>/</p>
					<a href="#act-1" className="transition-colors hover:text-black">
						Scene 1
					</a>
				</p>
				<nav>
					<ul className="flex items-center justify-center h-full gap-4">
						<li>
							<IconButton>
								<Eye size={24} weight="fill" />
							</IconButton>
						</li>
						<li>
							<IconButton>
								<Gear size={24} weight="fill" />
							</IconButton>
						</li>
						<li>
							<IconButton>
								<Users size={24} weight="fill" />
							</IconButton>
						</li>
						<li>
							<IconButton>
								<MusicNote size={24} weight="fill" />
							</IconButton>
						</li>
					</ul>
				</nav>
			</div>
		</header>
	);
};

export default Toolbar;
