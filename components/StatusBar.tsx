import { CloudCheck, ArrowClockwise } from "phosphor-react";
import { useSelector } from "react-redux";

interface Props {
	// editorState: EditorState;
	// onToggle: () => void;
}

const Toolbar = () => {
	// const {} = useSelector((state) => state.)
	const saved = true;

	return (
		<div className="fixed top-0 left-0 z-50 w-screen p-2 font-mono shadow-lg bg-slate-300 print:hidden">
			<div className="flex items-center justify-between">
				<p className="flex gap-2 px-4 text-sm text-slate-500"></p>
			</div>
		</div>
	);
};

export default Toolbar;
