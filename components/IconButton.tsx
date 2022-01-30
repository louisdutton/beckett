interface Props {
	children: React.ReactNode;
}

const IconButton = ({ children }: Props) => {
	return (
		<button className="flex items-center justify-center w-12 h-12 text-blue-300 transition-colors rounded-lg hover:bg-blue-400 hover:text-blue-200">
			{children}
		</button>
	);
};

export default IconButton;
