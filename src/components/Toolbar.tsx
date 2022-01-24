import { EditorState } from "draft-js";

OPTIONS = [];

interface Props {
	editorState: EditorState;
	onToggle: () => void;
}

const Toolbar = ({ editorState, setBlock }: Props) => {
	const selection = editorState.getSelection();
	const blockType = editorState
		.getCurrentContent()
		.getBlockForKey(selection.getStartKey())
		.getType();

	return (
		<div>
			<span className="RichEditor-controls">
				{OPTIONS.map((type) => {
					return (
						<BlockStyleButton
							active={type.style === blockType}
							label={type.label}
							onToggle={onToggle}
							style={type.style}
							key={type.label}
							type={type}
						/>
					);
				})}
			</span>
		</div>
	);
};

export default Toolbar;
