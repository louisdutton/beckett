import { CloudCheck, ArrowClockwise } from "phosphor-react";
import { useSelector } from "react-redux";

interface Props {
	// editorState: EditorState;
	// onToggle: () => void;
}

const StatusBar = () => {
	// const {} = useSelector((state) => state.)
	const saved = true;
	const diff = Math.abs(new Date().valueOf() - new Date().valueOf());
	const minutes = Math.floor(diff / 1000 / 60);

	return (
		<footer className="fixed bottom-0 left-0 z-50 w-screen p-2 font-mono shadow-lg bg-slate-200 print:hidden">
			<div className="flex items-center justify-between px-4 text-sm text-slate-500">
				<div className="flex gap-4">
					{saved ? (
						<>
							<CloudCheck size={20} />
							<p>Last saved: {minutes} minutes ago</p>
						</>
					) : (
						<>
							<ArrowClockwise className="animate-spin" size={20} />
							<p>saving...</p>
						</>
					)}
				</div>
				<p>words: 50</p>
			</div>
		</footer>
	);
};

export default StatusBar;
