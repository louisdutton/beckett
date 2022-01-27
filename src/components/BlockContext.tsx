import {
	createContext,
	PropsWithChildren,
	ReactNode,
	useContext,
	useState,
} from "react";

interface Block {
	type: "line" | "action";
	content: "";
}

interface BlockData {
	blocks: Block[];
	addBlock: () => void;
	removeBlock: () => void;
}

const BlockContext = createContext<BlockData>({
	blocks: [],
	addBlock: () => false,
	removeBlock: () => false,
});

interface Props {
	children: ReactNode;
}

const BlockProvider = ({ children }: Props) => {
	const [blocks, setBlocks] = useState<Block[]>([
		{ type: "line", content: "" },
	]);

	const addBlock = () => {
		setBlocks((blocks) => [...blocks, { type: "line", content: "" }]);
	};

	const removeBlock = () => {
		setBlocks((blocks) => blocks.slice(0, -1));
	};

	return (
		<BlockContext.Provider
			value={{
				blocks,
				addBlock,
				removeBlock,
			}}>
			{children}
		</BlockContext.Provider>
	);
};

export default BlockProvider;

export const useBlocks = () => useContext(BlockContext);
