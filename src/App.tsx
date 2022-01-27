import { useEffect, useRef, useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import Toolbar from "./components/Toolbar";
import blockRenderFn from "./components/blockRenderer";
import CharacterName from "./components/Character";
import Line from "./components/Line";

// const blockRenderMap = Immutable.Map({
//   'MyCustomBlock': {
//     element: 'section',
//     wrapper: <MyCustomBlock />,
//   }
// });

// const blockRenderMap = Immutable.Map({
// 	"header-two": {
// 		element: "h2",
// 	},
// 	unstyled: {
// 		element: "h2",
// 	},
// });

const App = () => {
	const [editorState, setEditorState] = useState(EditorState.createEmpty());
	const editorRef = useRef<Editor>(null);

	const handleKeyCommand = (command: string, editorState: EditorState) => {
		const newState = RichUtils.handleKeyCommand(editorState, command);

		if (newState) {
			setEditorState(newState);
			return "handled";
		}

		return "not-handled";
	};

	const setBlock = (block: string) => {
		setEditorState(RichUtils.toggleBlockType(editorState, block));
	};

	useEffect(() => {
		editorRef.current?.focus();
	}, []);

	return (
		<div className="flex h-screen bg-neutral-100">
			<Toolbar editorState={editorState} />
			<div className="flex flex-col w-full gap-4 p-16 font-mono text-2xl">
				<Line />
				<Line />
				<Line />
				<Line />
			</div>
		</div>
	);
};

export default App;
