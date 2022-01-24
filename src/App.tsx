import { useEffect, useRef, useState } from "react";
import { Editor, EditorState, RichUtils } from "draft-js";
import Toolbar from "./components/Toolbar";
import blockRenderFn from "./components/blockRenderer";

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
		<div className="h-screen p-16 text-3xl font-mono">
			{/* <Toolbar editorState={editorState} setBlock={setBlock} /> */}
			<Editor
				editorState={editorState}
				onChange={setEditorState}
				handleKeyCommand={handleKeyCommand}
				spellCheck={true}
				ref={editorRef}
				blockRendererFn={blockRenderFn}
			/>
		</div>
	);
};

export default App;
